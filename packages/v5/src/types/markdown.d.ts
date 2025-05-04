declare module '*.md' {
  import type { TocItem } from '../plugins/markdownToc'

  export const html: string
  export const data: Record<string, any>
  export const toc: TocItem[]
  declare const component: React.ReactNode
  export default component
}

declare module '*.md?frontmatter' {
  const frontmatter: Record<string, any>
  export default frontmatter
}

declare module '*.md?html' {
  const html: string
  export default html
}

