import { build } from 'vite'
import { describe, expect, it } from 'vitest'
import path from 'node:path'
import { initTempPath } from '@liuli-util/test'
import { readFile, writeFile } from 'node:fs/promises'
import matter from 'front-matter'
import type { Plugin } from 'vite'
import { markdownToc, type TocItem } from './markdownToc'
import { slug } from 'github-slugger'
import { unified } from 'unified'
import remarkParse from 'remark-parse'
import remarkGfm from 'remark-gfm'
import rehypeShiki from '@shikijs/rehype'
import rehypeAutolinkHeadings from 'rehype-autolink-headings'
import rehypeRaw from 'rehype-raw'
import rehypeSlug from 'rehype-slug'
import rehypeStringify from 'rehype-stringify'
import remarkRehype from 'remark-rehype'

const tempPath = initTempPath(__filename)

function frontmatter(): Plugin {
  return {
    name: 'vite-plugin-markdown-frontmatter',
    async transform(_code, id) {
      if (!id.endsWith('.md?frontmatter')) {
        return
      }
      const realId = id.slice(0, id.length - '?frontmatter'.length)
      const raw = (await import(realId + '?raw')).default
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
      const raw = (await import(realId + '?raw')).default as string
      const { body } = matter(raw)
      const md = unified().use(remarkParse).use(remarkGfm).parse(body)
      const toc = markdownToc(md)
      return { code: `const toc = ${JSON.stringify(toc)}; export default toc` }
    },
  }
}

function html(): Plugin {
  return {
    name: 'vite-plugin-markdown-html',
    async transform(_code, id) {
      if (!id.endsWith('.md?html')) {
        return
      }
      const realId = id.slice(0, id.length - '?html'.length)
      const raw = (await import(realId + '?raw')).default as string
      const { body } = matter(raw)
      const result = await unified()
        .use(remarkParse)
        .use(remarkGfm)
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

function trimMarkdown(md: string) {
  return md
    .trim()
    .split('\n')
    .map((line) => line.trim())
    .join('\n')
}

describe('vite-plugin', () => {
  async function buildScript() {
    await build({
      root: tempPath,
      plugins: [frontmatter(), toc(), html()],
      build: {
        lib: {
          entry: './index.js',
          formats: ['es'],
          fileName: 'index',
        },
      },
      logLevel: 'error',
    })
    return await readFile(path.resolve(tempPath, 'dist/index.js'), 'utf-8')
  }
  it('import frontmatter', async () => {
    await writeFile(
      path.resolve(tempPath, 'index.js'),
      'import index from "./index.md?frontmatter"\nconsole.log(index)',
    )
    await writeFile(
      path.resolve(tempPath, 'index.md'),
      trimMarkdown(`
      ---
      title: test
      ---
      # test
    `),
    )
    const code = await buildScript()
    expect(code).includes('{ title: "test" }')
  })
  it('import toc', async () => {
    await writeFile(path.resolve(tempPath, 'index.js'), 'import index from "./index.md?toc"\nconsole.log(index)')
    await writeFile(
      path.resolve(tempPath, 'index.md'),
      trimMarkdown(`
      # test
    `),
    )
    const code = await buildScript()
    expect(code).includes('text: "test"')
  })
  it('import html', async () => {
    await writeFile(path.resolve(tempPath, 'index.js'), 'import index from "./index.md?html"\nconsole.log(index)')
    await writeFile(
      path.resolve(tempPath, 'index.md'),
      trimMarkdown(`
      # test
    `),
    )
    const code = await buildScript()
    expect(code).includes('<h1 id="test">')
  })
})

