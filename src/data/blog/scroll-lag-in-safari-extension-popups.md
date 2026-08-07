---
title: Scroll Lag in Safari Extension Popups
slug: scroll-lag-in-safari-extension-popups
date: 2026-08-07
summary: While adding Safari support to a browser extension, I ran into a strange problem — scrolling inside the popup felt sluggish, with zero inertia. It turned out to be one of four seemingly unrelated Safari popup bugs, all tracing back to the same root cause — the popup's native window auto-resizing based on content height.
tags: [Safari, WebKit, Apple]
status: published
---

## Background

Yesterday, while adding Safari support to an extension, I ran into a strange problem: scrolling inside the popup felt sluggish.

Like this — not just slow, but with zero inertia at all.
<video src="https://blog.rxliuli.com/resources/1292bd8d263641c2a2d73ea93ec640bb.mp4" controls style="max-width: 100%"></video>

Open the same popup page in a new tab instead, and scrolling is far smoother.
<video src="https://blog.rxliuli.com/resources/20960a29f8b34d2b8e901651a0e4a0f6.mp4" controls style="max-width: 100%"></video>

## Investigation

The reproduction steps are simple:

1. Write enough content with JavaScript to produce a scrollbar — the demo above just uses a plain for loop plus a `<ul>` list.
2. Open the popup and scroll. That's it, the bug shows up immediately.

```js
// popup.js
const ul = document.createElement('ul')
document.body.appendChild(ul)
for (let i = 0; i < 1000; i++) {
  const li = document.createElement('li')
  li.textContent = 'list ' + i
  ul.appendChild(li)
}
```

Before I'd even gotten this far, I'd already run into a handful of nasty, seemingly unrelated bugs:

1. The popup would flash white, or half black and half white, when switching between pages [^1]
2. `prefers-color-scheme` sometimes wasn't detected, so the popup stayed light even with the system in dark mode [^2]
3. Scroll position didn't reset to zero after route changes
4. Scrolling had no spring/bounce effect at all

Turns out all four of these seemingly unrelated bugs trace back to the exact same problem: the popup's native window auto-resizes to match its content height. Chrome and Firefox handle this without any issue; Safari apparently still has some rough edges around it.

[^1]: ![Snipaste_2026-08-06_18-05-28.jpg](https://blog.rxliuli.com/resources/c5be63ce7b7446598d6aa6881da9a77e.jpg)

[^2]: ![1786078055595.jpg](https://blog.rxliuli.com/resources/fbbf741bc87c48c49aaf0d4b3bb6e3c4.jpg) — someone reported the exact same thing on an [old 2021 Apple Developer Forums thread](https://developer.apple.com/forums/thread/675652) that's still unanswered.

## The Fix

I didn't suspect resizing was the culprit at first, so I burned time on a few dead ends:

1. **Drop nested scroll containers, scroll at the document level instead**: I'd originally used `h-screen` plus a flex column to keep the top bar fixed while the rest of the page scrolled underneath it, so when I first hit the "white screen after navigating back to the home page" bug, I assumed something in the home page's own implementation was broken.
2. **Inline critical CSS to win the race on load**: along the way I also found a dark-mode bug. The strangest part: the popup itself rendered with the wrong theme, but opening that exact same popup page in a new tab rendered it correctly.
3. **TanStack Router's built-in `scrollRestoration: true`**: once I noticed the scroll offset after switching pages lined up with the height of the white-screen glitch, I figured the page just wasn't scrolling back to the top after navigation, so I tried this.
4. **Pin `body`'s width and height, and scroll inside it**: it finally clicked that maybe the resize triggered by changing content was causing rapid re-renders, and that was what made scrolling feel slow. All four bugs disappeared at once.

Here's the key code:

```css
/* popup.js */
/* Safari only */
html.safari-fixed-popup,
html.safari-fixed-popup body {
  width: 672px;
  height: 600px;
  overflow-x: hidden;
  overflow-y: auto;
}
```

```js
// popup.js
if (import.meta.env.SAFARI) {
  document.documentElement.classList.add('safari-fixed-popup')
}
```

So what's actually happening inside Safari's popup? The only piece of official documentation I could find was one line from the [WebKit Blog's Safari 26.2 changelog](https://webkit.org/blog/17640/webkit-features-for-safari-26-2/): `extension popups could open scrolled down and some websites could flicker during scrolling`.

I also found two related, though not quite matching, leads: [WebKit Bug 296056](https://bugs.webkit.org/show_bug.cgi?id=296056) reports an abnormal scroll position when popups open on iPadOS 26 — already fixed, though the root cause turned out to be scroll triggered by focus restoration after a `<dialog>` closes, not the auto-resize behavior here. An [Apple Developer Forums thread](https://developer.apple.com/forums/thread/698319) directly confirms that the resize-to-content mechanism itself is unreliable: someone reported that on iPad, the popup's container grows to fit taller content but never shrinks back down again. Taken together, this clearly isn't an edge case I happened to hit alone.

I couldn't find any documentation or issue tying these four symptoms back to "auto-resize based on content" as the root cause, so I wrote up the whole debugging process and filed it with Apple ([FB24198765](https://feedbackassistant.apple.com/)), and mirrored it to [lapcat/SafariExtensions](https://github.com/lapcat/SafariExtensions/issues/78), a repository that collects public, searchable copies of Safari extension Feedback Assistant reports (Feedback Assistant itself is private and can't be searched). If you've run into something similar, feel free to +1 there or add your own repro case.

## Conclusion

Safari extensions are an outlier among every browser out there: Apple forces you to package and distribute an extension as an app — installing a Safari extension and installing an app use literally the same installer. Even setting extensions aside, Safari's support for web standards often feels like a new-era Internet Explorer, bad enough that supporting iOS is routinely treated as a chore — every browser on iOS runs on WebKit, including Chrome, since Apple doesn't let browsers ship their own engine there.
