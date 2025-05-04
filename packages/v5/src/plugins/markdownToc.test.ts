import { describe, expect, it } from 'vitest'
import { markdownToc } from './markdownToc'
import { fromMarkdown } from 'mdast-util-from-markdown'

describe('toc', () => {
  function trim(md: string) {
    return md
      .split('\n')
      .map((line) => line.trim())
      .join('\n')
  }
  it('should return toc', () => {
    const md = trim(`
    # 1
    ## 2
    ### 3
    `)
    const root = fromMarkdown(md)
    const toc = markdownToc(root)
    expect(toc).toEqual([
      {
        id: '1',
        text: '1',
        level: 1,
        children: [{ id: '2', text: '2', level: 2, children: [{ id: '3', text: '3', level: 3 }] }],
      },
    ])
  })
  it('should return empty array', () => {
    const md = trim(`
    `)
    const root = fromMarkdown(md)
    const toc = markdownToc(root)
    expect(toc).toEqual([])
  })
  it('should return toc with non-latin characters', () => {
    const md = trim(`
    # Привет non-latin 你好
    `)
    const root = fromMarkdown(md)
    const toc = markdownToc(root)
    expect(toc).toEqual([{ id: 'привет-non-latin-你好', text: 'Привет non-latin 你好', level: 1 }])
  })
})

