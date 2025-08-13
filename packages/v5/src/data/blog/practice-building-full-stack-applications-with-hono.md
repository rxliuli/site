---
title: 'Practice: Building Full-Stack Applications with Hono'
slug: practice-building-full-stack-applications-with-hono
date: 2025-08-13
summary: I've recently developed several applications that include both frontend and backend components. Starting with Next.js, then moving to SvelteKit, and finally to Tanstack Router, none have proven as reliable as the familiar Hono framework. While all web meta-frameworks are attempting to incorporate server-side functionality, none have done it particularly well. For instance, Cloudflare offers numerous official services, and as a server-side framework, Hono's integration is excellent, but the same cannot be said for web meta-frameworks.
tags: [Hono, Web, Meta-framework, Cloudflare]
status: published
---

## Context

I've recently developed several applications that include both frontend and backend components. Starting with Next.js, then moving to SvelteKit, and finally to Tanstack Router, none have proven as reliable as the familiar Hono framework. While all web meta-frameworks are attempting to incorporate server-side functionality, none have done it particularly well. For instance, Cloudflare offers numerous official services, and as a server-side framework, Hono's integration is excellent, but the same cannot be said for web meta-frameworks.

## Why Use Hono

Why use Hono when web meta-frameworks already have server-side routing? There are several reasons:

- **Inconsistent Abstractions**: Each meta-framework has different syntax and rules, such as Next.js Server Components [^1], SvelteKit Server routing [^2], or TanStack Server Functions [^3].
- **Incomplete Features**: Handling simple JSON APIs? No problem. Complex APIs combined with multiple Cloudflare services? Very difficult.
- **Large Size**: Meta-frameworks have enormous bundle sizes. Even SvelteKit, known for being lightweight, is 132kb, while Hono builds to just 18kb.

[^1]: <https://nextjs.org/docs/app/getting-started/fetching-data#with-an-orm-or-database>
[^2]: <https://svelte.dev/docs/kit/routing#server>
[^3]: <https://tanstack.com/start/latest/docs/framework/react/server-functions>

### Inconsistent Abstractions

Regardless of which web framework you use, Hono knowledge is transferable. You can easily deploy Hono applications anywhere - Cloudflare, Vercel, Deno, etc. As for web meta-frameworks... well, let's just say they're diverse. Let's look at some examples.

Next.js claims that directly coupling database queries in React components is the recommended approach.

> PHP: What year is this?

```tsx
import { db, posts } from '@/lib/db'

export default async function Page() {
  const allPosts = await db.select().from(posts)
  return (
    <ul>
      {allPosts.map((post) => (
        <li key={post.id}>{post.title}</li>
      ))}
    </ul>
  )
}
```

Well, it also has Route Handlers, like this. Yes, you need to export different functions to handle different requests, and the path depends on the file's relative location. Want to quickly search for a specific API path? Sorry, you'll need to hunt through the file system.

```ts
export async function GET() {
  return Response.json({ message: 'Hello World' })
}
```

SvelteKit is similar.

```ts
import { error } from '@sveltejs/kit'
import type { RequestHandler } from './$types'

export const GET: RequestHandler = ({ url }) => {
  const min = Number(url.searchParams.get('min') ?? '0')
  const max = Number(url.searchParams.get('max') ?? '1')

  const d = max - min

  if (isNaN(d) || d < 0) {
    error(400, 'min and max must be numbers, and min must be less than max')
  }

  const random = min + Math.random() * d

  return new Response(String(random))
}
```

Tanstack claims to be inspired by tRPC, well...

```ts
// routes/hello.ts
export const ServerRoute = createServerFileRoute().methods({
  GET: async ({ request }) => {
    return new Response('Hello, World!')
  },
})
```

So what do they have in common? Well, the basic concepts are similar, but beyond that? The ecosystems are completely fragmented. Want to connect to KV? Database? OAuth2 login? Sorry, you'll need to find a way that works with your specific web meta-framework.

### Incomplete Features

For Cloudflare specifically, Hono's integration is quite comprehensive, including KV/D1, R2, Pages, etc. And for other server-side requirements like databases, authentication, OAuth2, and testing integration, it performs excellently.

- Database: Excellent support for both D1 and PostgreSQL (though Drizzle is recommended over Prisma) [^4]
- Authentication: JWT middleware support is very simple to use [^5]
- OAuth2: The official OAuth Providers [^6] are simpler than Auth.js and Better Auth, easier to understand and debug, with fewer black box components and no opinions on data storage
- Testing: Full embrace of vitest [^7], while a certain well-known framework still prioritizes jest

[^4]: <https://hono.dev/examples/prisma#d1-database>
[^5]: <https://hono.dev/docs/middleware/builtin/jwt>
[^6]: <https://github.com/honojs/middleware/tree/main/packages/oauth-providers>
[^7]: <https://hono.dev/docs/guides/testing>

### Large Size

Here's a direct comparison showing the significant differences in both build time and final bundle size.

SvelteKit minimal
![1753979669566.jpg](https://blog.rxliuli.com/resources/0a5fff3e36fb4c6b9224f15cb1ad3307.jpg)

Hono starter
![1753981327766.jpg](https://blog.rxliuli.com/resources/81f9f2b6623e4974b0e72f2c569b2069.jpg)

## Implementation

### Who Goes First?

Now, when using both Hono and a web meta-framework like SvelteKit to develop an application, the question arises: who goes first? Should Hono be in front and forward routes, or should SvelteKit be in front and forward routes? Due to the following characteristics, having Hono in front is better:

1. Hono has less code and starts faster
2. Meta-frameworks may have unexpected behaviors, such as automatically serializing all Responses [^8]
3. Without SSR (e.g., SPA/SSG), the meta-framework won't have any server-side code at all

[^8]: <https://github.com/sveltejs/kit/issues/9401>

### Hono as Entry Point

Now, finally getting to the implementation, here's Hono as the entry point, forwarding static assets to SvelteKit's static build. The final deployment is to Cloudflare Workers.

First, determine where the static assets are. In SvelteKit, for example, this is configured by the `@sveltejs/adapter-cloudflare` plugin. The example below configures the dist directory.

```js
// packages/client/svelte.config.js
const config = {
  // other config...
  kit: {
    adapter: adapter({
      pages: 'dist',
      assets: 'dist',
      fallback: undefined,
      precompress: false,
      strict: true,
    }),
  },
}

export default config
```

Then configure wrangler.json to bind static assets to ASSETS. The example below configures the dist directory.

```json
// packages/server/wrangler.json
{
  "name": "sveltekit-to-hono-demo",
  "main": "src/index.ts",
  "compatibility_date": "2025-01-24",
  "assets": {
    "directory": "../client/dist",
    "binding": "ASSETS"
  }
}
```

Finally, in Hono's entry file, forward all unmatched routes to SvelteKit's static assets.

```ts
// packages/server/src/index.ts
import { Hono } from 'hono'

const app = new Hono<{ Bindings: Env }>()

app.get('/api/ping', (c) => c.text('pong'))
app.all('*', (c) => c.env.ASSETS.fetch(c.req.raw))

export default app
```

Now you can use Hono for the server-side and your favorite web meta-framework for the client-side during development.

```sh
cd packages/client && pnpm build
cd ../server && pnpm wrangler dev --port 8787
```

## Drawbacks

After all this, what are the drawbacks of this pattern?

- When Hono is in front and SSR needs to call server-side APIs, it cannot be internally converted to function calls but must make external round-trip requests
- No **type safety** provided by web meta-frameworks, though this is a solvable problem with solutions like tRPC or OpenAPI
- Generally requires splitting into a monorepo with multiple modules, i.e., packages/server and packages/client, which may add some complexity
- If SSR is still needed, you'll need to intercept 404 requests in Hono and dynamically execute the server/index.js built by the web meta-framework

## Conclusion

Full-stack web development is a popular trend, and combining frontend and server-side web development appears attractive. However, it may ultimately be taking the long way around, just as Next.js has eventually become a monster. Additionally, for websites that don't need to dynamically render UGC [^9], the complexity that SSR typically adds may be unnecessary.

[^9]: <https://en.wikipedia.org/wiki/User-generated_content>
