// @ts-check
import { defineConfig } from 'astro/config'
import tailwindcss from '@tailwindcss/vite'
import rehypeSlug from 'rehype-slug'
import rehypeAutolinkHeadings from 'rehype-autolink-headings'
import { cloudflare } from '@cloudflare/vite-plugin'

// https://astro.build/config
export default defineConfig({
  integrations: [],
  output: 'static',

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

  vite: {
    // @ts-ignore
    plugins: [tailwindcss()],
  },
})

