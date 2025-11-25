interface TocItem {
  id: string
  text: string
  level: number
  children?: TocItem[]
}

export type BlogPostStatus = 'published' | 'draft'

export interface BlogPost {
  id: string
  title: string
  slug: string
  date: string // ISO format date string "2023-10-15"
  summary: string
  content?: string // Markdown content
  toc?: TocItem[]
  coverImage?: string // Optional cover image
  author?: {
    name: string
    avatar?: string
  }
  tags?: string[] // Blog tags for categorization
  status: BlogPostStatus // Publication status
  readingTime?: string // Estimated reading time, e.g. "5 min read"
  views?: number // Optional view count
}

