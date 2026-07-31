---
title: Browser Extension Dev - 06. On-Demand Script Injection
slug: browser-extension-dev-06-on-demand-script-injection
date: 2026-01-29
summary: In this chapter, we'll explore on-demand script injection, a technique that doesn't slow down websites and shows no security warnings when installed from the Chrome Web Store. We'll build an extension that copies webpage content as Markdown with a single click.
tags: [Chrome, JavaScript, WXT]
status: published
---

## Introduction

In the previous chapter [Browser Extension Dev - 05. Storage and Configuration](https://rxliuli.com/blog/browser-extension-dev-05-storage-and-configuration/), I introduced how to add a settings page to extensions and use the Storage API to save and read configuration. In this chapter, I'll cover on-demand script injection. This approach doesn't slow down websites at all, and shows no security warnings when installed from the Chrome Web Store. We'll implement an extension that copies a webpage's main content as Markdown with a single click on the extension icon.

## Thinking Through the Approach

We've already learned about Content Script injection and how Background Scripts can listen for extension icon clicks. Although not yet covered, these two can communicate with each other via messaging.

With this background knowledge, you might think about implementing it this way:

1. Inject Content Scripts into all web pages and listen for messages from the background
2. When the extension icon is clicked, have the Background Script notify the Content Script
3. Execute the specific logic in the Content Script

This approach has several major drawbacks:

1. Injecting Content Scripts into all web pages by default not only slows down websites but also poses risks, since the injection process is completely invisible to users, and future extension updates could introduce vulnerabilities
2. It requires extremely high permissions - when installing the extension, a security warning appears stating that this extension requires permission to read and modify all websites the user visits

![1768995880017.jpg](https://blog.rxliuli.com/resources/e4cee6e0ce1c4b86a8c6678060bfdd2e.jpg)

For scenarios that require explicit user action to trigger, there's actually a simpler implementation:

1. When the extension icon is clicked, inject a script into the current webpage from the Background Script
2. Execute the specific logic in that script

This way, the required permissions change from `['<all_urls>']` to `['activeTab', 'scripting']`. Although the number of permissions increases, the risk is actually lower - code can only execute when triggered by the user, so there are no warnings when installing the extension. For example:

![1768996707257.jpg](https://blog.rxliuli.com/resources/07904bc29a334a83bc02cdb59563e594.jpg)

The key API involved here is `scripting.executeScript`, which, as the name suggests, is used to execute custom scripts.

> Reference the Chrome official activeTab guide: <https://developer.chrome.com/docs/extensions/develop/concepts/activeTab>

## Implementation

### Injecting Scripts on Extension Icon Click

Let's implement the listening and injection logic in the background script.
First, update wxt.config.ts to add the required permissions and an empty action field.

```ts
import { defineConfig } from 'wxt'

export default defineConfig({
  manifestVersion: 3,
  manifest: {
    name: 'Copy As Markdown',
    description: 'Copy page content as Markdown',
    permissions: ['activeTab', 'scripting'],
    action: {},
  },
  webExt: {
    disabled: true,
  },
})
```

Then add a test injection script. Unlike Content Scripts, this type of script needs to be declared using defineUnlistedScript in WXT.

```ts
// entrypoints/inject.ts
export default defineUnlistedScript(() => {
  alert('Injected script executed!')
})
```

Then listen for clicks and inject it in the background script.

```ts
import { PublicPath } from 'wxt/browser'

export default defineBackground(() => {
  browser.action.onClicked.addListener(async (tab) => {
    if (tab.id) {
      await browser.scripting.executeScript({
        target: { tabId: tab.id },
        // The /inject.js here refers to the built file - if you use pnpm build, you can see inject.js in .output/chrome-mv3
        // Note: Initially there may be TypeScript type errors here - after starting pnpm dev/build, WXT will correctly scan entrypoints and generate type definitions
        files: ['/inject.js'] as PublicPath[],
      })
    }
  })
})
```

> Besides the files parameter, you can also pass functions and arguments directly via func/args, suitable for simple scenarios. Reference: <https://developer.chrome.com/docs/extensions/reference/api/scripting#type-ScriptInjection>

When we open `google.com` and click the extension icon, we find nothing happens. Looking at the extension details page, we can see an error.

```sh
Uncaught (in promise) Error: Could not load file: 'inject.js'.
```

Just like when [Browser Extension Dev - 03. Injecting UI](https://rxliuli.com/blog/browser-extension-dev-03-inject-ui/), we need to add web_accessible_resources configuration to the manifest.

```ts
import { defineConfig } from 'wxt'

export default defineConfig({
  manifestVersion: 3,
  manifest: {
    name: 'Copy As Markdown',
    description: 'Copy page content as Markdown',
    permissions: ['activeTab', 'scripting'],
    action: {},
    web_accessible_resources: [
      {
        resources: ['inject.js'],
        matches: ['<all_urls>'],
      },
    ],
  },
  webExt: {
    disabled: true,
  },
})
```

Try again, and you can see the script is indeed injected and executed correctly.

![1768998702041.jpg](https://blog.rxliuli.com/resources/af174e446b1341eb8250d47f762bb871.jpg)

> ⚠️ Limitation: If you want the injected script to persist (automatically run after refreshing or re-entering the page), this won't work. You still need to properly declare `host_permissions` to persistently inject Content Scripts - even using the scripting API is still subject to the permission model.

### Implementing Functionality in the Injected Script

Next, let's implement the functionality to read the webpage's main content, convert it to Markdown, and copy it to the clipboard. With the npm ecosystem, this is straightforward to implement.

- Read webpage main content: Use the [@mozilla/readability](https://github.com/mozilla/readability) package
- Convert HTML to Markdown: Use the [turndown](https://github.com/mixmark-io/turndown) package

First, install the required dependencies:

```sh
pnpm i @mozilla/readability turndown
pnpm i -D @types/turndown
```

Then write a small amount of glue code to complete the implementation.

```ts
import { Readability } from '@mozilla/readability'
import TurndownService from 'turndown'

export default defineUnlistedScript(async () => {
  const service = new TurndownService({
    headingStyle: 'atx',
    codeBlockStyle: 'fenced',
  })
  const reader = new Readability(document.cloneNode(true) as Document) // Deep clone to avoid affecting the original webpage
  const article = reader.parse() // Parse main content
  if (article && article.title && article.content) {
    const markdown = service.turndown(article.content) // Convert HTML to Markdown
    await navigator.clipboard.writeText(`# ${article.title}\n\n${markdown}`) // Copy
    alert('Article copied as Markdown!')
  } else {
    alert('Failed to parse the article.')
  }
})
```

![1768999375770.jpg](https://blog.rxliuli.com/resources/c4b821ba6de3420db45006e32b7d2785.jpg)
![1769003419253.jpg](https://blog.rxliuli.com/resources/61bb170f84404ec487e056e01292c812.jpg)

## Summary

In this chapter, we implemented an extension with on-demand script injection that doesn't affect normal webpage operation and only executes code when triggered by the user - truly plug and play. In the next chapter, we'll continue improving this extension by using a Popup window to directly preview and edit the Markdown copied from the current page.

Complete code: <https://github.com/rxliuli/browser-extension-dev-examples/tree/main/packages/06-inject-script-on-demand>
