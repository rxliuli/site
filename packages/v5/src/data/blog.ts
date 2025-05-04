import type { TocItem } from '@/plugins/markdownToc'
import type { BlogPost } from '@/types/blog'
import dayjs from 'dayjs'

// 获取所有文章的元数据
export function getAllBlogPosts(): Omit<BlogPost, 'content' | 'toc'>[] {
  const blogFiles = import.meta.glob<BlogPost>('./blog/*.md', { query: '?frontmatter', eager: true, import: 'default' })
  const posts: Omit<BlogPost, 'content' | 'toc'>[] = []

  for (const path in blogFiles) {
    const data = blogFiles[path]

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
  const blogHtmls = import.meta.glob<string>('./blog/*.md', { query: '?html', import: 'default' })
  const blogTocs = import.meta.glob<TocItem[]>('./blog/*.md', { query: '?toc', import: 'default' })
  const posts = getAllBlogPosts()
  const post = posts.find((post) => post.slug === slug)

  if (!post) {
    return null
  }

  try {
    const html = await blogHtmls[`./blog/${slug}.md`]()
    const toc = await blogTocs[`./blog/${slug}.md`]()
    // const content = await import(`./blog/${slug}.md`)
    const wordCount = html.trim().split(/\s+/).length
    const readingTime = `${Math.ceil(wordCount / 200)} min read`

    return {
      ...post,
      content: html,
      toc,
      readingTime,
    }
  } catch (error) {
    console.error(`Failed to load markdown content for blog post ${slug}:`, error)
    return post
  }
}

// 获取所有标签
export function getAllTags(): string[] {
  const posts = getAllBlogPosts()
  const tags = new Set<string>()

  posts.forEach((post) => {
    if (post.tags) {
      post.tags.forEach((tag) => tags.add(tag))
    }
  })

  return Array.from(tags)
}

// 获取特定标签的文章
export function getPostsByTag(tag: string): Omit<BlogPost, 'content' | 'toc'>[] {
  return getAllBlogPosts().filter((post) => post.tags?.includes(tag))
}

// 获取精选文章
export function getFeaturedPosts(limit = 3): Omit<BlogPost, 'content' | 'toc'>[] {
  return getAllBlogPosts().slice(0, limit)
}

// 格式化日期
export function formatDate(date: string): string {
  return dayjs(date).format('YYYY-MM-DD')
}

