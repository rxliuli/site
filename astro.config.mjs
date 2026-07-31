// @ts-check
import { defineConfig } from 'astro/config'
import tailwindcss from '@tailwindcss/vite'
import rehypeSlug from 'rehype-slug'
import rehypeAutolinkHeadings from 'rehype-autolink-headings'
import remarkBreaks from 'remark-breaks'

import sitemap from '@astrojs/sitemap'

// https://astro.build/config
export default defineConfig({
  integrations: [sitemap()],
  output: 'static',
  site: 'https://rxliuli.com',

  markdown: {
    // syntaxHighlight: 'shiki',
    shikiConfig: {
      themes: {
        light: 'github-light',
        dark: 'github-dark',
      },
      wrap: true,
      transformers: [],
    },
    remarkPlugins: [remarkBreaks],
    rehypePlugins: [
      rehypeSlug, // 先生成 slug
      [
        rehypeAutolinkHeadings,
        {
          behavior: 'wrap', // 将标题内容包裹在链接中
          properties: {
            className: ['heading-link'],
          },
        },
      ],
    ],
  },

  redirects: {
    '/blog/macos-initial-user-questions-and-confusion/': '/blog/first-time-mac-user-guide/',
  },

  vite: {
    // @ts-ignore
    plugins: [tailwindcss()],
  },
})

