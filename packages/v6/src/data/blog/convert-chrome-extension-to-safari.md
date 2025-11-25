---
title: Converting Chrome Extensions to Safari
slug: convert-chrome-extension-to-safari
date: 2025-04-01
summary: I recently attempted to convert a Chrome extension to Safari—something I had postponed due to Xcode's poor development experience. This article documents the conversion process for Redirector, which is already available on Chrome/Firefox/Edge, into my first Safari extension on the App Store.
tags: [Chrome, Safari, Apple]
status: published
---

## Background

I recently attempted to convert a Chrome extension to Safari—something I had postponed due to Xcode's poor development experience. This article documents the conversion process for [Redirector](https://github.com/rxliuli/redirector), which is already available on Chrome/Firefox/Edge, into my first Safari extension on the App Store.

## Conversion Process

WXT's documentation mentions how to publish Safari versions using the `xcrun` command line tool for converting Chrome extensions to Safari format.

Since I used Manifest V3, the command is:

```sh
pnpm wxt build -b safari
xcrun safari-web-extension-converter --bundle-identifier com.rxliuli.redirector --force .output/safari-mv3
```

This generates an Xcode project and automatically opens it.

## Building and Testing

After building in Xcode, Safari won't show the extension by default because Safari doesn't allow unsigned extensions.

![1741855496643.jpg](https://blog.rxliuli.com/resources/1e503ca9965340e5b31bf6fd1fd2154e.jpg)
![1741855508793.jpg](https://blog.rxliuli.com/resources/0bb9316723a54d12a4758acdb3a60881.jpg)

![1741855578407.jpg](https://blog.rxliuli.com/resources/da3b48dc6653431c9c58155e65ce58e2.jpg)

To enable testing:
1. Go to **Safari > Settings > Advanced > Show features for web developers**
   ![1741855703402.jpg](https://blog.rxliuli.com/resources/39bed6fa2e4d442b8ed295ccdbf003d9.jpg)
2. Then **Safari > Settings > Developer > Allow unsigned extensions**
   ![1741855678560.jpg](https://blog.rxliuli.com/resources/62200185604a4ff495f5a6bda5ed29cf.jpg)

If you've previously installed and uninstalled this extension, you'll need to specify a different project location:

```sh
pnpm wxt build -b safari
xcrun safari-web-extension-converter --bundle-identifier com.rxliuli.redirector --force --project-location 'Redirector 2025-03-13-17-20' .output/safari-mv3
```

You can check recognized extensions with:

```sh
pluginkit -mAvvv -p com.apple.Safari.web-extension
```

If everything works, you'll see the extension in Safari's Extensions panel.
![1741858042811.jpg](https://blog.rxliuli.com/resources/76e09e9f5c734fb89dd853aa313af22f.jpg)

Enable it to see the extension icon in Safari's toolbar.
![1741858161233.jpg](https://blog.rxliuli.com/resources/0ca6786f5b884944830336d18fe06964.jpg)

> If you find development in the Mac ecosystem painful, with things often not working without any error messages, this is unfortunately "normal."

## Adapting Incompatible APIs

Safari has several incompatible APIs with Chrome extensions. These won't produce errors but simply won't work. You can check the official compatibility documentation for incompatible APIs.

For example, webRequest APIs: Safari doesn't support webRequest API functionality in Manifest V3 at all, and it only works in Manifest V2 persistent background pages (which iOS doesn't support).

For Redirector, I had to replace:
`browser.webRequest.onBeforeRequest.addListener` with `browser.webNavigation.onCommitted.addListener`

You can refer to the official documentation to debug background scripts. It's inconvenient, but it's the only method available.

Now the extension works correctly:

<iframe width="560" height="315" src="https://www.youtube.com/embed/GjVY7fELWts?si=uHWOuA50JA2RJzLH" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

## Publishing to the App Store

To prepare for App Store submission:

1. Configure **Project > Build Settings > Development Team**
   ![1741836712437.jpg](https://blog.rxliuli.com/resources/83fd13ad613047208ea1bde23ee80603.jpg)
2. Select an **App Category** under Mac/iOS Targets
   ![1741837528537.jpg](https://blog.rxliuli.com/resources/34730fe701444fe7972fe77adeceb4bc.jpg)

3. Update the version number manually (it doesn't follow the manifest version)
   ![1741862590410.jpg](https://blog.rxliuli.com/resources/3305d79401c9403b9f1b3bedcc85da64.jpg)

The version is also in `<project name>/<project name>.xcodeproj/project.pbxproj` file, search and replace `MARKETING_VERSION = 1.0;`

Build with **Product > Archive**
![1741862602934.jpg](https://blog.rxliuli.com/resources/50ee85f4ba994047bbcd30ed3b76d8e2.jpg)

First click **Validate App** to check for configuration errors. I encountered an error that my extension name already exists.
![1741862725322.jpg](https://blog.rxliuli.com/resources/b0621a5579314e759be601218ed37f22.jpg)

After modifying the name in the manifest and repeating the conversion and build process, validation succeeded.
![1741863485137.jpg](https://blog.rxliuli.com/resources/9157e4a7c52040ebb9e846cb12afa987.jpg)

Then click Distribute App and select App Store Connect for App Store distribution or Direct Distribute for notarization.
![1741864293656.jpg](https://blog.rxliuli.com/resources/45d29637ef8844b8bad49d11a69da911.jpg)

> I found this video very helpful <https://youtu.be/s0HtHvgf1EQ?si=rbzc88E1Y_6nZY6k>

## Completing Publication Information

Finally, go to [App Store Connect](https://appstoreconnect.apple.com/apps) to complete publication details including screenshots, privacy policy, and pricing. I didn't realize Apple manages app publishing through a website rather than through one of their apps, which led to a two-week delay.

Note that emoji characters are not allowed in App descriptions.

## Conclusion

Mac/iOS development is a very closed platform with development tools and experiences quite different from the Web. However, considering Safari is the default browser on Mac and the only option on iOS, it's worth supporting despite being even worse than Firefox.

---

The extension has been published to the App Store: https://apps.apple.com/app/id6743197230