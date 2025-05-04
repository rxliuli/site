import type { Heading, Root } from 'mdast'
import { selectAll } from 'unist-util-select'
import { toString } from 'mdast-util-to-string'
import { slug } from 'github-slugger'

export interface TocItem {
  id: string
  text: string
  level: number
  children?: TocItem[]
}

function convertToTocItem(heading: Heading): TocItem {
  const text = toString(heading.children[0])
  const id = slug(text)
  return {
    id,
    text,
    level: heading.depth,
  }
}

export function markdownToc(md: Root): TocItem[] {
  const headings = selectAll('heading', md) as Heading[]
  const root: TocItem[] = []
  const stack: TocItem[] = []

  for (const heading of headings) {
    const item = convertToTocItem(heading)
    while (stack.length > 0 && stack[stack.length - 1].level >= item.level) {
      stack.pop()
    }
    if (stack.length === 0) {
      root.push(item)
    } else {
      const parent = stack[stack.length - 1]
      if (!parent.children) {
        parent.children = []
      }
      parent.children.push(item)
    }
    stack.push(item)
  }

  return root
}

