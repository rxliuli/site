---
title: Publishing Safari Extensions to the iOS App Store
slug: publishing-safari-extensions-to-the-ios-app-store
date: 2025-08-25
summary: Since the beginning of this year, I've started publishing Safari extensions to the App Store. As I don't use an iPhone, I only released Mac versions. This month, I began practicing cross-platform browser extension development—publishing the same extensions for all major desktop browsers (Chrome/Safari/Edge/Firefox) and all mobile browsers that support extensions (Kiwi/Edge/Safari/Firefox).
tags: [Safari, Apple, Xcode]
status: published
---

## Background

Since the beginning of this year, I've started publishing Safari extensions to the App Store. As I don't use an iPhone, I only released Mac versions. This month, I began practicing cross-platform browser extension development—publishing the same extensions for all major desktop browsers (Chrome/Safari/Edge/Firefox) and all mobile browsers that support extensions (Kiwi/Edge/Safari/Firefox). This prompted me to put publishing iOS Safari extensions back on the agenda.

> For information on converting Chrome extensions to Safari extensions, please refer to [Converting Chrome Extension to Safari Version](https://rxliuli.com/blog/convert-chrome-extension-to-safari)

## Process

When you already have a Mac Safari extension, publishing it to iOS should theoretically be simple. However, before publishing, you must debug through the simulator to ensure there are no bugs.

### Testing with Simulator

First, select the iOS platform in Target, then choose a simulator (iPhone 16 Pro is recommended), and finally click the Build button.
![1755089514895.jpg](https://blog.rxliuli.com/resources/74b25267105544ae983c369d9c95c9a0.jpg)

Next, the wrapper app for the iOS extension will automatically open in the simulator.
![Simulator Screenshot - iPhone 16 Pro - 2025-08-13 at 20.52.34.jpg](https://blog.rxliuli.com/resources/67ae8b296e0349e19c0f7f60b93644e7.jpg)

Then, click the Home icon in the simulator's top toolbar to return to the home screen, and navigate to Settings > Apps > Safari > Extensions, where you'll see the extension you just built. By default, it should be Disabled—enter and Enable it. If you can't find the extension you just built, please refer to the issues below. In my case, Claude 4.1 Opus provided helpful tips during troubleshooting, helping me understand the direction and keywords for debugging.
![1755089694981.jpg](https://blog.rxliuli.com/resources/dd4394c48f144868b2e019d1d6b6215d.jpg)
![1755089768574.jpg](https://blog.rxliuli.com/resources/758d48eaba154727b520c467f83bfad8.jpg)

Finally, click Home to return to the home screen, find and open Safari, and you should see the extension you just built in the browser toolbar.
![1755090127320.jpg](https://blog.rxliuli.com/resources/36cedc4fb3a24c7e8ad1c6269c81f7c8.jpg)

> Reference: [Apple Official Video 2022](https://developer.apple.com/videos/play/tech-talks/110148/)

### Publishing to the App Store

After testing is complete and you've confirmed there are no bugs, you can publish to the App Store.

First, in Xcode, select Product > Archive to package your app.
![1755090217839.jpg](https://blog.rxliuli.com/resources/6a2a9d46113a481fa81e581b0586f42a.jpg)

Next, click the Distribute App button in the popup, then select App Store Connect as the distribution channel, and finally click the Distribute button. Your app will begin uploading to the App Store.
![1755090347344.jpg](https://blog.rxliuli.com/resources/0509e4c89e3c4300891dbdb1e53197e8.jpg)
![1755090341984.jpg](https://blog.rxliuli.com/resources/48732d629db6445c8c4210093f93b536.jpg)

Note that after uploading is complete, it's not yet published—you've only uploaded a build. You still need to go to [App Store Connect](https://appstoreconnect.apple.com/) to add version information, app description, screenshots, and other standard information, then submit for review before final publication.
![1755090522509.jpg](https://blog.rxliuli.com/resources/52b7c65919604f9081994a01a053ee8b.jpg)

## Issues

> If there are no errors but it doesn't work, it might not be your fault—blame Apple/Safari's terrible development experience.

### Can't See Any Apps in Settings > Apps on iOS

As shown:

![Snipaste_2025-08-08_07-23-20.jpg](https://blog.rxliuli.com/resources/e276e02200074c4ebb23e1f410dd4b7c.jpg)

According to this [community issue](https://discussions.apple.com/thread/255884009?sortBy=rank), this is a bug in 18.2. Upgrading to 18.4 resolves it.

![Snipaste_2025-08-08_07-31-46.jpg](https://blog.rxliuli.com/resources/832bd65a3dc74f0e974789ef4b53a51e.jpg)

Verification:

![Snipaste_2025-08-08_07-32-07.jpg](https://blog.rxliuli.com/resources/e26dcec9a8e84a5283a555c3a120f24d.jpg)

### Can't See the Developed Extension in Settings > Safari > Extensions

As shown:

![Snipaste_2025-08-08_08-01-05.jpg](https://blog.rxliuli.com/resources/a3b4f47699ab46bfa983f2dac4eb5d7a.jpg)

Upgrading to the latest version of Xcode and simulator resolved this. In my case, it was Xcode 16.4 and iOS 18.4 simulator.

![Snipaste_2025-08-08_08-43-45.jpg](https://blog.rxliuli.com/resources/1cb88fae3284481681455ff086c5749d.jpg)

The verification method is to create a brand new Safari Extension project through Xcode, then Build and check if it appears in Settings > Safari > Extensions.

> Apple's official documentation is almost useless <https://developer.apple.com/documentation/safariservices/troubleshooting-your-safari-web-extension>
> But I found a recent video from this year that seems helpful <https://www.youtube.com/watch?v=DZe7L70CDPc>

### CJK Input Method Spaces Are \u3000, Not \u0020

A minor issue: CJK input methods on Mac input characters as `\u0020`. Even when inputting Chinese spaces, the `keydown` event still recognizes them as standard `\u0020`.
For example:

```ts
document.addEventListener('keydown', (e) => {
  console.log(e.key) // Outputs ' '
})
```

On iOS Safari, after inputting a Chinese space, in the `beforeinput` event, e.data is `\u3000`.

```ts
document.addEventListener('beforeinput', (e) => {
  console.log(e.data) // Outputs '　'
})
```

So for iOS Safari, input-related events must be handled carefully.

### Special Considerations for Publishing to China Region with LLM Features

For example, if you use OpenAI's API for certain features in your extension, it won't pass review for the China region. Apple claims that according to MIIT (Ministry of Industry and Information Technology) requirements, all AI-related apps must be registered and qualified. If you're an individual developer, I recommend abandoning the China region. Fuck MIIT.

![1755090943068.jpg](https://blog.rxliuli.com/resources/77be018361f44d01970b71912bbedc2b.jpg)

## Conclusion

So far, I've successfully published three cross-platform browser extensions:

- Redirector: <https://rxliuli.com/project/redirector/>
- IDBPort: <https://rxliuli.com/project/idbport/>
- Input Translator: <https://rxliuli.com/project/input-translator/>

While publishing Safari extensions is interesting, it also made me realize how terrible the Safari extension development experience is. I encountered many pitfalls and wasted considerable time during development.
