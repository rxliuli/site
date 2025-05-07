import type { Plugin } from 'vite'
import { unified } from 'unified'
import remarkParse from 'remark-parse'
import remarkRehype from 'remark-rehype'
import rehypeStringify from 'rehype-stringify'
import remarkGfm from 'remark-gfm'
import rehypeRaw from 'rehype-raw'
import rehypeSlug from 'rehype-slug'
import rehypeAutolinkHeadings from 'rehype-autolink-headings'
import matter from 'front-matter'
import rehypeShiki from '@shikijs/rehype'
import { markdownToc } from './markdownToc'
import { readFile } from 'node:fs/promises'
import type { Plugin as UnifiedPlugin } from 'unified'
import { remove } from 'unist-util-remove'
import type { Heading } from 'mdast'

function frontmatter(): Plugin {
  return {
    name: 'vite-plugin-markdown-frontmatter',
    async transform(_code, id) {
      if (!id.endsWith('.md?frontmatter')) {
        return
      }
      const realId = id.slice(0, id.length - '?frontmatter'.length)
      // not work
      // const raw = (await import(realId + '?raw')) as string
      const raw = await readFile(realId, 'utf-8')
      const { attributes } = matter(raw)
      return {
        code: `const frontmatter = ${JSON.stringify(attributes)}; export default frontmatter`,
        map: {
          mappings: '',
          sources: [realId],
          names: [],
          sourcesContent: [raw],
          version: 3,
        },
      }
    },
  }
}

function toc(): Plugin {
  return {
    name: 'vite-plugin-markdown-toc',
    async transform(_code, id) {
      if (!id.endsWith('.md?toc')) {
        return
      }
      const realId = id.slice(0, id.length - '?toc'.length)
      // not work
      // const raw = (await import(realId + '?raw')).default as string
      const raw = await readFile(realId, 'utf-8')
      const { body } = matter(raw)
      const md = unified().use(remarkParse).use(remarkGfm).parse(body)
      const toc = markdownToc(md)
      return { code: `const toc = ${JSON.stringify(toc)}; export default toc` }
    },
  }
}

const cleanTitle: UnifiedPlugin = () => (tree) => {
  remove(tree, (it) => it.type === 'heading' && (it as Heading).depth === 1)
}

function html(): Plugin {
  return {
    name: 'vite-plugin-markdown-html',
    async transform(_code, id) {
      if (!id.endsWith('.md?html')) {
        return
      }
      const realId = id.slice(0, id.length - '?html'.length)
      // not work
      // const raw = (await import(realId + '?raw')).default as string
      const raw = await readFile(realId, 'utf-8')
      const { body } = matter(raw)
      const result = await unified()
        .use(remarkParse)
        .use(remarkGfm)
        .use(cleanTitle)
        .use(remarkRehype, { allowDangerousHtml: true })
        .use(rehypeShiki, {
          themes: {
            light: 'github-light',
            dark: 'github-dark',
          },
        })
        .use(rehypeRaw)
        .use(rehypeSlug)
        .use(rehypeAutolinkHeadings, { behavior: 'wrap' })
        .use(rehypeStringify)
        .process(body)

      return { code: `const html = ${JSON.stringify(result.toString())}; export default html` }
    },
  }
}

export function markdownPlugin(): Plugin[] {
  return [frontmatter(), toc(), html()]
}

