---
title: Translate EPUB into a Bilingual Book in the Browser
slug: translate-epub-in-the-browser-with-imp-translate
date: 2026-09-08
summary: Want to read a book in its original language but avoid a missing or abridged translation? Imp Translate turns an `.epub` into a bilingual book in the browser — keep the original text and read the translation below it. No Python, no command line, and Google / Microsoft need no API key.
tags: [EPUB, Translation, Browser, Imp Translate]
status: published
---

Often I want to read a book in its original language. Maybe there's no translation at all; maybe the one that exists is abridged, or subtly edited. Either way I'd rather read what the author actually wrote — but a whole book in a second language is a slog, and a dictionary every few sentences kills the pace.

[Imp Translate](https://store.rxliuli.com/extensions/imp-translate/) solves that in a way I like: it keeps the original and puts the translation right below it. You read the real text, and use the translation to get through the hard parts. The original is never replaced — which is the whole point.

## What you need

- The [Imp Translate extension](https://store.rxliuli.com/extensions/imp-translate/) — Chrome, Edge, Firefox, or Safari
- An `.epub` file on your computer
- A translation provider configured in the extension options: Google, Microsoft, Imp Credits, or any OpenAI-compatible API

One thing worth knowing up front: **the EPUB translation is a feature of the web tool, but it needs the extension installed.** The extension is what actually talks to your translation provider. The web page just unpacks the book, asks the extension to translate, and packs a new one.

> If you open the page without the extension, you'll see:
>
> ```sh
> Imp Translate extension is not detected. Install it to use the translation feature.
> ```

Install the extension from the [product page](https://store.rxliuli.com/extensions/imp-translate/), then refresh.

## Translating an EPUB

1. Open [https://imp.rxliuli.com/translate/epub](https://imp.rxliuli.com/translate/epub) — or go to the [translator homepage](https://imp.rxliuli.com/translate/) and click **EPUB** in the top navigation.
2. Set the target language. The source can stay on **Auto Detect**.
3. Leave the layout on **Bilingual** to keep the original and the translation in the same book. Switch it to **Target Only** only if you want a replacement translation instead.
4. Drop the `.epub` onto the upload area, or click to browse.
5. Wait for the run to finish, then download the new file.

Open the result in any EPUB reader. In bilingual mode you should see the source and translation together, not a book that silently replaced every paragraph.

## Why this approach

The browser does the unpacking and re-packing, so there's no local toolchain and no console. Everything happens where you already are — that's the whole point. Compared to scripting it yourself, it's less to install, less to keep updated, and much less to break.

Bilingual mode is the part I care about. A translated-only book is convenient, but you lose the original — and that original is the whole reason I'm reading this in the first place. With both in the same book you read the source for what it really says, glance at the translation to keep moving, and spot a machine-translation mistake before you trust it. It's the same philosophy behind the [extension itself](https://store.rxliuli.com/extensions/imp-translate/) — keep the source visible, show the translation below it.

## Providers

Providers are configured in the extension options, not on the website:

- **Google** / **Microsoft** — no API key needed for basic use
- **Imp Credits** — a hosted, metered option backed by [imp.rxliuli.com](https://imp.rxliuli.com/); you connect it from the extension options
- **OpenAI-compatible** — OpenAI, DeepSeek, Ollama, or anything that speaks the same API

A whole book costs more than a webpage, so if you're using credits or your own key, the cost is up-front and visible. Google and Microsoft are the simplest way to start.

## After you download

Put the file in Apple Books, Kobo, or any local reader. Kindle needs a conversion step first, since it doesn't read `.epub` natively. Keep the original EPUB around — the tool writes a new file, it doesn't overwrite the one you uploaded.

If a chapter looks empty or a heading isn't translated, the source file may use unusual XHTML. Try another provider and rerun it.

## The demo

Here's the whole flow — open the page, pick a book, hit translate, get a bilingual EPUB.

<iframe width="560" height="315" src="https://www.youtube.com/embed/MopHykHvfto" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

## Links

- Web translator: [https://imp.rxliuli.com/translate/](https://imp.rxliuli.com/translate/)
- Extension: [https://store.rxliuli.com/extensions/imp-translate/](https://store.rxliuli.com/extensions/imp-translate/)
- Chrome Web Store: [https://chromewebstore.google.com/detail/imp-translate/nmbcckfgobecechfdamananmfnnjbbbd](https://chromewebstore.google.com/detail/imp-translate/nmbcckfgobecechfdamananmfnnjbbbd)
- Source: [https://github.com/rxliuli/imp-translate](https://github.com/rxliuli/imp-translate)
