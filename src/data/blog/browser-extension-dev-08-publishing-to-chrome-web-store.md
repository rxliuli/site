---
title: Browser Extension Dev - 08. Publishing to Chrome Web Store
slug: browser-extension-dev-08-publishing-to-chrome-web-store
date: 2026-02-02
summary: In this final chapter of the series, we'll walk through the complete process of publishing a browser extension to the Chrome Web Store, from setting up a developer account to submitting for review.
tags: [Chrome, JavaScript, WXT]
status: published
---

## Introduction

Over the previous 7 blog posts, we've covered the fundamental concepts of extension development, with each post accompanied by a practical extension example. Now, it's finally time to demonstrate how to publish an extension. We'll walk through how to publish our auto-sleep tabs extension to the Chrome Web Store - remember that one? It's the extension we built in [Browser Extension Dev - 04. Background Script](https://rxliuli.com/blog/browser-extension-dev-04-background-script/) and [Browser Extension Dev - 05. Storage and Configuration](https://rxliuli.com/blog/browser-extension-dev-05-storage-and-configuration/).

## Steps

### Setting Up a Chrome Web Store Developer Account

1. First, register a developer account following the official documentation. You'll need a Google account and a one-time registration fee of $5. Reference: <https://developer.chrome.com/docs/webstore/register>
2. Then complete the setup, which mainly involves setting your developer account name and verifying your email - nothing too complicated. Reference: <https://developer.chrome.com/docs/webstore/set-up-account>

After registration, open <https://chrome.google.com/webstore/devconsole/> and you should see a page like this:

![1769515955075.jpg](https://blog.rxliuli.com/resources/303dde3595df4cc08e991221d3659924.jpg)

### Building the Extension Package

Next, let's demonstrate how to go from building to publishing the extension.

First, open a terminal in your project and run `pnpm zip`. You should see output similar to this, showing that the Chrome extension has been successfully packaged as a zip file:

```sh
ℹ Zipping extension...
✔ Zipped extension in 12 ms
  └─ .output/05-storage-and-configuration-0.0.0-chrome.zip  13.37 kB
Σ Total size: 13.37 kB
```

Find this file in the .output directory and note its path.

![1769517095997.jpg](https://blog.rxliuli.com/resources/5c268b954f5349d4b68972c97aac78ea.jpg)

### Uploading to Chrome Web Store

Open <https://chrome.google.com/webstore/devconsole/> and click the "New Item" button in the top right corner.

![1769517209416.jpg](https://blog.rxliuli.com/resources/aea91283c2d44517877f55c7868ef18b.jpg)

Select the zip file you just found and upload it. At this point, you may encounter an error saying `The manifest has an invalid version: 0.0.0. Please format the version as defined` - meaning the version number cannot be 0.0.0.

![1769517322845.jpg](https://blog.rxliuli.com/resources/c53d9b18215448d6a32bfc5403c177af.jpg)

Use `pnpm version patch` to increment the version number to 0.0.1, then run `pnpm zip` again to build and upload. You should now see the extension publishing management page.

![1769517483216.jpg](https://blog.rxliuli.com/resources/d65a1462b600438783b7ee2f172b1cb5.jpg)

### Configuring Store Listing

For publishing, the two most important tabs are Store listing and Privacy. The former is for configuring how your extension appears in the Chrome Web Store - description, category, icon, screenshots, etc. The latter is for permission usage explanations and privacy policy links.

For this extension, select the category as Productivity > Tools, and set the language to English.

![1769649613093.jpg](https://blog.rxliuli.com/resources/2fa2a3164ad542ec8b53ef913007d708.jpg)

Then select the 128.png icon from the public/icon directory as the extension icon displayed in the store. Taking a screenshot at exactly 1280x800 pixels can be a bit tricky, but you can use <https://squoosh.app> to resize your screenshot - use the Resize feature to adjust the dimensions to 1280x800.

![1769518272363.jpg](https://blog.rxliuli.com/resources/bcf7514c502941f98d3fcc3bdaedec62.jpg)

> PS: If you're on macOS, you can use the small utility [Window Resizer](https://rxliuli.com/project/window-resizer/) to resize windows to specific dimensions.
> Reference the Chrome official publishing documentation: <https://developer.chrome.com/docs/webstore/publish>

### Configuring Privacy

Switch to the Privacy tab, where you'll see several main sections:

- **Single purpose**: A brief explanation of what your extension does in one or two sentences
- **Permission justification**: Explanation of how permissions are used. Pay attention to the "Are you using remote code?" question at the end - Chrome prohibits remote code, and some libraries (like zod) may inadvertently introduce remote code, so be careful
- **Data usage**: Data collection disclosure - select what data your extension collects. If it runs locally, you don't need to select any options
- **Privacy policy**: A link to your privacy policy. This is the only content that needs external hosting - you can host it on your personal domain, or if open source, link directly to the relevant file on GitHub. Here's an example: <https://rxliuli.com/webstore/privacy/>

![1769649228557.jpg](https://blog.rxliuli.com/resources/8783b517224a4def85fc0fa3ed4da3bd.jpg)
![1769649249668.jpg](https://blog.rxliuli.com/resources/79869791a7eb483dbb06e5f317e7815c.jpg)

### Submitting for Review

After clicking the "Save draft" button, if the "Submit for review" button becomes available, you can submit your extension for review.

![1769649204651.jpg](https://blog.rxliuli.com/resources/43601fc875c84b40b0b59b2334366a01.jpg)

After submission, your extension will enter the review queue. Initial reviews typically take several days or even longer, so please be patient. Extensions using high-risk permissions (such as injecting scripts into all websites) or targeting high-risk websites (yes, I'm talking about YouTube) may require even longer wait times.

![1769649344613.jpg](https://blog.rxliuli.com/resources/05b4e34e8dc64adcb37060e17e1359d3.jpg)

## Summary

This concludes the basic content on browser extension development. There may be some advanced topics in future bonus chapters, such as internationalization, automated publishing with GitHub Actions, and more.

> If you're also interested in publishing Safari extensions to the App Store, check out my previous blog posts [Converting Chrome Extensions to Safari](https://rxliuli.com/blog/convert-chrome-extension-to-safari/) and [Publishing Safari Extensions to the iOS App Store](https://rxliuli.com/blog/publishing-safari-extensions-to-the-ios-app-store/). Fair warning: it's quite complex, and unlike Chrome, there's no trial period for the developer account. You must 1) have a macOS computer with Xcode and other development tools installed, and 2) set up an App Store developer account and pay $99/year.
