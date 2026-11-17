# rxliuli.com

Source of [rxliuli.com](https://rxliuli.com): a homepage, a landing page for every project, and a blog.

Built with [Astro](https://astro.build) and Tailwind CSS, deployed as static assets on Cloudflare Workers.

## Development

```sh
pnpm install
pnpm dev       # http://localhost:4321
pnpm build     # static site in dist/, plus Open Graph images for blog posts
pnpm preview   # serve dist/ locally
```

Deploy with `npx wrangler deploy` (see `wrangler.jsonc`).

## Layout

| Path                         | What                                                        |
| ---------------------------- | ----------------------------------------------------------- |
| `src/content/projects/*.yaml` | One file per project: metadata and landing page content     |
| `src/content.config.ts`      | Schema for the project files                                |
| `src/data/blog/*.md`         | Blog posts                                                  |
| `src/pages/`                 | Homepage, `/project`, `/project/<slug>`, `/blog`, privacy pages |
| `public/images/projects/`    | Project screenshots, plus app icons in `icons/`             |
| `scripts/generate-og.mjs`    | Renders blog Open Graph images at build time                |

## Adding a project

Create `src/content/projects/<slug>.yaml`. The file name is the URL: `/project/<slug>`.

```yaml
# Metadata: project list, homepage cards and the page header
title: "Example"
description: "One sentence, shown on cards and in search results."
type: Browser Extension # Browser Extension | App | Website | VSCode Extension | CLI Tool
tags: ["Chrome", "Productivity"]
previewImage: /images/projects/example.jpg
created: "2026-01-01"
updated: "2026-01-01"
links:
  # store links become install buttons; everything else becomes a text link
  - { type: store, icon: chrome, name: "Chrome", url: "https://chromewebstore.google.com/detail/..." }
  - { type: social, icon: github, name: "GitHub", url: "https://github.com/rxliuli/example" }

# Landing page
icon: /images/projects/icons/example.png
tagline: What it does, in one line.
intro: Why it exists and what it changes, in two or three sentences.
screenshot:
  src: /images/projects/example.jpg
  alt: What the screenshot shows
install:
  command: brew install --cask rxliuli/tap/example # optional, shown with a copy button
  note: Chrome, Edge, Firefox and Safari · Free and open source

blocks:
  - type: features # also: list, steps, code
    title: Section title
    items:
      - title: Feature
        body: What it does. Supports `code`, **bold** and [links](/project/other).

privacy:
  - What data leaves the device, if any. Check the code rather than guessing.
license: GPL-3.0
```

The build validates every file against the schema, so a typo in a field name or an unknown link icon fails the build instead of rendering a broken page.

The project list puts `featured: true` projects first, then sorts by `updated`. The homepage picks the newest browser extension and app for its large cards.

## Writing a post

Add `src/data/blog/<slug>.md`:

```md
---
title: Post title
slug: post-title
date: 2026-01-01
summary: One or two sentences for the list and social cards.
tags: [Safari, WebKit]
status: published # or draft
---
```

Its Open Graph image is generated from the title during `pnpm build`.

