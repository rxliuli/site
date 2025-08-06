import { createFileRoute } from '@tanstack/react-router'
import { useState } from 'react'
import { getAllBlogPosts, getAllTags } from '@/data/blogs'
import { BlogPostCard } from '@/components/blog/BlogPostCard'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { SearchIcon } from 'lucide-react'
import { meta } from '@/components/seo'

export const Route = createFileRoute('/blog/')({
  component: BlogPage,
  head: () => ({
    meta: meta({
      title: 'Blog',
      description: 'Blog posts about web development, design, and technology.',
    }),
  }),
})

export function BlogPage() {
  const allPosts = getAllBlogPosts()
  const allTags = getAllTags()

  const [searchQuery, setSearchQuery] = useState('')
  const [selectedTag, setSelectedTag] = useState<string | null>(null)

  // Filter blog posts based on search and tag
  const filteredPosts = allPosts.filter((post) => {
    const matchesSearch =
      post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.summary.toLowerCase().includes(searchQuery.toLowerCase())
    const matchesTag = selectedTag ? post.tags?.includes(selectedTag) : true

    return matchesSearch && matchesTag
  })

  // Handle tag click
  const handleTagClick = (tag: string) => {
    setSelectedTag(selectedTag === tag ? null : tag)
  }

  return (
    <div className="max-w-3xl mx-auto space-y-8 py-8">
      <div className="space-y-2">
        <h1 className="text-3xl font-bold tracking-tight">Blog</h1>
        <p className="text-muted-foreground">
          Thoughts, ideas, and tutorials on web development, design, and technology.
        </p>
      </div>

      {/* Search and filter section */}
      <div className="flex flex-col gap-4">
        <div className="relative">
          <SearchIcon className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
          <Input
            type="search"
            placeholder="Search posts..."
            className="pl-10"
            value={searchQuery}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => setSearchQuery(e.target.value)}
          />
        </div>

        {allTags.length > 0 && (
          <div className="flex flex-wrap gap-2">
            {allTags.map((tag) => (
              <Badge
                key={tag}
                variant={selectedTag === tag ? 'default' : 'outline'}
                className="cursor-pointer"
                onClick={() => handleTagClick(tag)}
              >
                {tag}
              </Badge>
            ))}
            {selectedTag && (
              <Button variant="ghost" size="sm" onClick={() => setSelectedTag(null)} className="text-xs h-6 px-2">
                Clear filter
              </Button>
            )}
          </div>
        )}
      </div>

      {/* Blog posts list */}
      <div className="divide-y">
        {filteredPosts.length > 0 ? (
          filteredPosts.map((post) => <BlogPostCard key={post.id} post={post} />)
        ) : (
          <div className="py-12 text-center">
            <p className="text-muted-foreground">No posts found. Try adjusting your search or filters.</p>
          </div>
        )}
      </div>
    </div>
  )
}

