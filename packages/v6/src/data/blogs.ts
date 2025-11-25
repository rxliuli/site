import dayjs from 'dayjs'
import type { BlogPost, BlogPostStatus } from '../types/blog'

interface TocItem {
  id: string
  text: string
  level: number
  children?: TocItem[]
}

// 获取所有文章的元数据
export async function getAllBlogPosts(): Promise<Omit<BlogPost, 'content' | 'toc'>[]> {
  const blogFiles = import.meta.glob<{
    frontmatter: {
      title: string
      slug: string
      date: string
      summary: string
      tags?: string[]
      status?: BlogPostStatus
      coverImage?: string
      author?: {
        name: string
        avatar?: string
      }
    }
  }>('./blog/*.md')
  const posts: Omit<BlogPost, 'content' | 'toc'>[] = []

  for (const path in blogFiles) {
    const module = await blogFiles[path]()
    const data = module.frontmatter

    posts.push({
      id: data.slug,
      title: data.title,
      slug: data.slug,
      date: data.date,
      summary: data.summary,
      tags: data.tags || [],
      status: data.status || 'published',
      coverImage: data.coverImage,
      author: data.author,
    })
  }

  // Sort by date (newest first)
  return posts
    .filter((post) => post.status === 'published')
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
}

// 获取单篇文章的完整内容
export async function getBlogPostBySlug(slug: string): Promise<BlogPost | null> {
  const blogFiles = import.meta.glob<{
    frontmatter: {
      title: string
      slug: string
      date: string
      summary: string
      tags?: string[]
      status?: BlogPostStatus
      coverImage?: string
      author?: {
        name: string
        avatar?: string
      }
    }
    compiledContent: () => Promise<string>
    getHeadings: () => Array<{ depth: number; text: string; slug: string }>
  }>('./blog/*.md')

  const posts = await getAllBlogPosts()
  const post = posts.find((post) => post.slug === slug)

  if (!post) {
    return null
  }

  try {
    const blogFile = await blogFiles[`./blog/${slug}.md`]()
    const html = await blogFile.compiledContent()
    const headings = blogFile.getHeadings()

    const wordCount = html.trim().split(/\s+/).length
    const readingTime = `${Math.ceil(wordCount / 200)} min read`

    // Convert Astro headings to TocItem format
    const toc = headings.map((h) => ({
      id: h.slug,
      text: h.text,
      level: h.depth,
    }))

    return {
      ...post,
      content: html,
      toc,
      readingTime,
    }
  } catch (error) {
    console.error(`Failed to load markdown content for blog post ${slug}:`, error)
    return post as BlogPost
  }
}

// 获取所有标签
export async function getAllTags(): Promise<string[]> {
  const posts = await getAllBlogPosts()
  const tags = new Set<string>()

  posts.forEach((post) => {
    if (post.tags) {
      post.tags.forEach((tag) => tags.add(tag))
    }
  })

  return Array.from(tags)
}

// 获取特定标签的文章
export async function getPostsByTag(tag: string): Promise<Omit<BlogPost, 'content' | 'toc'>[]> {
  const posts = await getAllBlogPosts()
  return posts.filter((post) => post.tags?.includes(tag))
}

// 获取精选文章
export async function getFeaturedPosts(limit = 3): Promise<Omit<BlogPost, 'content' | 'toc'>[]> {
  const posts = await getAllBlogPosts()
  return posts.slice(0, limit)
}

// 格式化日期
export function formatDate(date: string): string {
  return dayjs(date).format('YYYY-MM-DD')
}

