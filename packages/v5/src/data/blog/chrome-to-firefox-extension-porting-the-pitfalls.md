---
title: "Chrome to Firefox Extension Porting: The Pitfalls"
slug: chrome-to-firefox-extension-porting-the-pitfalls
date: 2025-09-23
summary: After developing an extension for Chrome, the natural next step is porting it to other browsers. Firefox is generally considered the first choice since both browsers use similar Browser Extension APIs. This should be straightforward, right?
tags: [Chrome, Firefox]
status: published
---

## Background

After developing an extension for Chrome, the natural next step is porting it to other browsers. Firefox is generally considered the first choice since both browsers use similar Browser Extension APIs. This should be straightforward, right?

Not quite. Firefox has many subtle, long-standing issues that can become incredibly tricky if you encounter them. Below are some problems I've discovered while porting extensions to Firefox.

## CSP Issues

CSP behavior in Firefox extensions is peculiar, vastly different from Chrome or even Safari.

### Firefox Extensions Don't Support Localhost Access

Firefox extensions cannot access localhost, preventing extension development frameworks like wxt from supporting dev mode hot reload[^1]. The issue raised in Bugzilla has been open for 2 years[^2]. Currently, the only workaround is to develop in Chrome, then build and validate/test in Firefox.

[^1]: <https://github.com/wxt-dev/wxt/issues/1626>
[^2]: <https://bugzilla.mozilla.org/show_bug.cgi?id=1864284>

### Firefox Restricts Extension-Injected Content Scripts Based on Website CSP

Firefox restricts extension-injected Content Scripts based on the website's own CSP[^3]. This involves bugs that have existed for 9 years[^4] and are unlikely to be resolved in the near term. Fortunately, you can bypass this by using `declarativeNetRequest` to disable website CSP.

[^3]: <https://github.com/wxt-dev/wxt/discussions/1442>
[^4]: <https://bugzilla.mozilla.org/show_bug.cgi?id=1267027>

Here's a basic rules.json configuration to remove `Content-Security-Policy` from specific websites. While this introduces security concerns, it's the least invasive approach for business logic:

```json
[
  {
    "id": 1,
    "condition": {
      "urlFilter": "https://example.com/**",
      "excludedResourceTypes": []
    },
    "action": {
      "type": "modifyHeaders",
      "responseHeaders": [
        {
          "header": "content-security-policy",
          "operation": "remove"
        }
      ]
    }
  }
]
```

### WASM Errors in Firefox Extension Pages

Using WASM in Firefox Extension Pages causes errors. For example, using esbuild-wasm produces the following CSP error:

```sh
Content-Security-Policy: The page's settings blocked a worker script (worker-src) at blob:moz-extension://708674c8-9b11-450a-9552-c0e679d39d8e/0dff485f-4f32-4d1a-a109-8ca61a3037a2 from being executed because it violates the following directive: "script-src 'self' 'wasm-unsafe-eval'"
```

This occurs even after setting CSP in the manifest:

```json
{
  "content_security_policy": {
    "extension_pages": "script-src 'self' 'wasm-unsafe-eval'; object-src 'self';"
  }
}
```

This is related to a 9-year-old bug. Even though developers have closed it, using WASM via blob URI still doesn't work[^5].

[^5]: <https://bugzilla.mozilla.org/show_bug.cgi?id=1294996>

## Unable to Install Unsigned Extensions

Firefox, much like Apple, requires all extensions to be notarized and signed[^6]. Even if you don't intend to publish for others, you must submit to AMO[^7] for review. Dragging a built zip file directly into Firefox results in the error: "This add-on could not be installed because it has not been verified."

![1758208110800.jpg](https://blog.rxliuli.com/resources/00163608ce8f4526b771af6e62b832da.jpg)

[^6]: <https://addons.mozilla.org>
[^7]: <https://github.com/wxt-dev/wxt/discussions/1205#discussioncomment-11373354>

## AMO Review Issues

Once your extension reaches a certain user threshold, AMO reviews become exceptionally slow as they always require manual review. Moreover, reviewers aren't always experienced browser extension developers—they might not even be web developers. The poor review process has frustrated some very prominent extension developers, leading them to abandon Firefox releases entirely. Examples include:

- uBlock Origin Lite, with over 11M users on Chrome[^11]
- Enhancer for YouTube, with over 1M users on Chrome[^12]

![1758542096165.jpg](https://blog.rxliuli.com/resources/51a1340c954c4a5fb5552ed98b45fcda.jpg)

[^11]: <https://github.com/uBlockOrigin/uBOL-home/issues/197#issuecomment-2329365796>
[^12]: <https://www.mrfdev.com/contact>

## Conclusion

Firefox was once an excellent browser, but in recent years, aside from riding on Chrome's coattails (similar to Vue's reputation), there hasn't been much to write home about. Recently, they've started cramming AI features into the browser, seemingly always chasing shiny new things rather than genuinely addressing existing problems.
