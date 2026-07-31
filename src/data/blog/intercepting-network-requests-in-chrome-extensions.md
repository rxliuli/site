---
title: Intercepting Network Requests in Chrome Extensions
slug: intercepting-network-requests-in-chrome-extensions
date: 2025-05-10
summary: While implementing the Chrome extension Mass Block Twitter, I needed to block Twitter spam users in bulk. Twitter's request headers contain authentication information that appears to be dynamically generated via JavaScript. Rather than investigating how Twitter generates these authentication details
tags: [Chrome, JavaScript]
status: published
---

## Motivation

While implementing the Chrome extension [Mass Block Twitter](https://mass-block-twitter.rxliuli.com), I needed to block Twitter spam users in bulk. Twitter's request headers contain authentication information that appears to be dynamically generated via JavaScript. Rather than investigating how Twitter generates these authentication details, I decided it would be more efficient to intercept existing network requests, record all headers being used, and then directly utilize these ready-made headers when calling the `/i/api/1.1/blocks/create.json` endpoint. This created a need to intercept XHR requests. I had previously encountered situations requiring fetch request interception, and existing libraries couldn't adequately meet these requirements.

![cover](https://blog.rxliuli.com/resources/9c4f7e06236c448dbd9fae04126039b9.jpg)

Existing libraries I investigated include:

- [mswjs](https://mswjs.io/): A mocking library capable of intercepting XHR/fetch requests, but requires a service worker, which isn't possible for Chrome extension Content Scripts.
- [xhook](https://github.com/jpillora/xhook): An interception library that can intercept XHR requests but not fetch requests. Additionally, its last update was two years ago, suggesting that it's no longer maintained.

Therefore, I decided to implement my own solution.

## Design

First, I considered my specific requirements:

1. Intercept fetch/XHR requests
2. Support modifying request URLs to enable proxy requests
3. Support invoking original requests and modifying responses
4. Support SSE (Server-Sent Events) streaming responses

After establishing these requirements, I began designing the API. Having previously used the excellent web framework [hono](https://hono.dev/), I wanted the API to be as simple as possible, similar to hono's middleware.

Below is the onion model diagram from the hono official documentation for middleware:

![Hono Middleware Onion Model](https://blog.rxliuli.com/resources/0826119c646c4e15b7c3b9f8789bdd6c.jpg)

For example, when using two middlewares:

```ts
app
  .use(async (c, next) => {
    console.log('middleware 1 before')
    await next()
    console.log('middleware 1 after')
  })
  .use(async (c, next) => {
    console.log('middleware 2 before')
    await next()
    console.log('middleware 2 after')
  })
```

The actual execution result would be as follows, with the earliest registered middleware executing first at the request's beginning and last at the request's completion:

```js
middleware 1 before
middleware 2 before
// Actual request processing...
middleware 2 after
middleware 1 after
```

## Implementation

Now let's discuss the specific implementation for intercepting fetch/XHR requests. Rather than providing complete implementation code, I'll focus on explaining the overall approach. The final GitHub repository link will be provided at the end.

### Fetch

Let's start with fetch, which is relatively simple to intercept since it only involves one function with straightforward inputs and outputs.

Here's a basic fetch usage example:

```ts
fetch('https://api.github.com/users/rxliuli')
  .then((res) => res.json())
  .then((data) => console.log(data))
```

The core approach is to override `globalThis.fetch` with a custom implementation that runs middlewares and calls the original fetch at an appropriate time:

```ts
function interceptFetch(...middlewares: Middleware[]) {
  const pureFetch = globalThis.fetch
  globalThis.fetch = async (input, init) => {
    // Construct a Context containing request and response
    const c: Context = {
      req: new Request(input, init),
      res: new Response(),
      type: 'fetch',
    }
    // Run middlewares, with original request handling implemented as a middleware at the innermost layer
    await handleRequest(c, [
      ...middlewares,
      async (context) => {
        context.res = await pureFetch(c.req)
      },
    ])
    // Return the processed response
    return c.res
  }
}

// Run all middlewares using the onion model
async function handleRequest(context: Context, middlewares: Middleware[]) {
  const compose = (i: number): Promise<void> => {
    if (i >= middlewares.length) {
      return Promise.resolve()
    }
    return middlewares[i](context, () => compose(i + 1)) as Promise<void>
  }
  await compose(0)
}
```

Now we can easily intercept all fetch requests:

```ts
interceptFetch(
  async (context, next) => {
    console.log('fetch interceptor 1')
    await next()
    console.log('fetch interceptor 1 after')
  },
  async (context, next) => {
    console.log('fetch interceptor 2')
    await next()
    console.log('fetch interceptor 2 after')
  },
)
fetch('https://api.github.com/users/rxliuli')
  .then((res) => res.json())
  .then((data) => console.log(data))
// Output:
// fetch interceptor 1
// fetch interceptor 2
// fetch interceptor 1 after
// fetch interceptor 2 after
// {
//   "login": "rxliuli",
//   "id": 24560368,
//   "node_id": "MDQ6VXNlcjI0NTYwMzY4",
//   "avatar_url": "https://avatars.githubusercontent.com/u/24560368?v=4",
//   ...
// }
```

You might notice this API differs from hono's Middleware API. Don't worry; we can wrap the core request interception part with the desired API later.

### XHR

Next is XHR, which differs significantly from fetch. Here's a basic XHR usage example:

```ts
const xhr = new XMLHttpRequest()
xhr.open('GET', 'https://api.github.com/users/rxliuli')
xhr.onload = () => {
  console.log(xhr.responseText)
}
xhr.send()
```

As you can see, XHR involves multiple methods like `open`, `onload`, and `send`. This requires overriding multiple methods. Additionally, since middlewares should only run once, and XHR's method/URL and body are passed in steps, we shouldn't call the original XHR methods until `send` is actually invoked.

```ts
function interceptXhr(...middlewares: Middleware[]) {
  const PureXhr = XMLHttpRequest
  XMLHttpRequest = class extends PureXhr {
    #method: string = ''
    #url: string | URL = ''
    #body?: Document | XMLHttpRequestBodyInit | null
    // Override the open method to record parameters without calling the original yet
    open(method: string, url: string) {
      this.#method = method
      this.#url = url
    }
    // Save all event listeners
    #listeners: [string, (this: XMLHttpRequest, ev: ProgressEvent) => any, boolean][] = []
    set onload(callback: (this: XMLHttpRequest, ev: ProgressEvent) => any) {
      this.#listeners.push(['load', callback, false])
    }
    // Override the send method to run middlewares before calling the original send
    async send(body?: Document | XMLHttpRequestBodyInit | null) {
      this.#body = body
      const c: Context = {
        req: new Request(this.#url, {
          method: this.#method,
          body: this.#body as any,
        }),
        res: new Response(),
        type: 'xhr',
      }
      // Bind registered event listeners
      this.#listeners.forEach(([type, listener, once]) => {
        super.addEventListener.apply(this, [type, listener as any, once])
      })
      // Run middlewares
      await handleRequest(c, [
        ...middlewares,
        async (c) => {
          super.addEventListener('load', () => {
            // Set the response
            c.res = new Response(this.responseText, { status: this.status })
          })
          super.send.apply(this, [c.req.body as any])
        },
      ])
    }
  }
}
```

This implements a basic XHR interceptor that can record and modify request method/URL/body, and record response status/body:

```ts
interceptXhr(async (c, next) => {
  console.log('method', c.req.method, 'url', c.req.url)
  await next()
  console.log('json', await c.res.clone().json())
})
const xhr = new XMLHttpRequest()
xhr.open('GET', 'https://api.github.com/users/rxliuli')
xhr.onload = () => {
  console.log(xhr.responseText)
}
xhr.send()
// Output:
// method GET url https://api.github.com/users/rxliuli
// json {
//   "login": "rxliuli",
//   "id": 24560368,
//   "node_id": "MDQ6VXNlcjI0NTYwMzY4",
//   "avatar_url": "https://avatars.githubusercontent.com/u/24560368?v=4",
//   ...
// }
```

Of course, this XHR implementation is still quite rudimentary—it doesn't record all onload/onerror/onreadystatechange events, doesn't record all headers, and can't modify the response. However, as a demonstration, the overall implementation approach is clear.

## More

A complete fetch/XHR interceptor has been implemented and published to npm as [@rxliuli/vista](https://www.npmjs.com/package/@rxliuli/vista). You're welcome to use it in your projects.

