import { Link } from "@tanstack/react-router";
import type { BlogPost } from "@/types/blog";
import { CalendarIcon, ClockIcon } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { formatDate } from "@/data/blog";

interface BlogPostCardProps {
  post: BlogPost;
}

export function BlogPostCard({ post }: BlogPostCardProps) {
  return (
    <article className="group space-y-3 py-6 first:pt-0 border-b last:border-0">
      {/* Date and reading time */}
      <div className="flex items-center gap-4 text-sm text-muted-foreground">
        <span className="inline-flex items-center">
          <CalendarIcon className="mr-1 h-3.5 w-3.5" />
          {formatDate(post.date)}
        </span>
        {post.readingTime && (
          <span className="inline-flex items-center">
            <ClockIcon className="mr-1 h-3.5 w-3.5" />
            {post.readingTime}
          </span>
        )}
      </div>
      
      {/* Title and summary */}
      <div className="space-y-2">
        <h2 className="text-xl font-bold tracking-tight">
          <Link 
            to="/blog/$slug"
            params={{ slug: post.slug }}
            className="group-hover:text-primary transition-colors"
          >
            {post.title}
          </Link>
        </h2>
        <p className="text-muted-foreground">
          {post.summary}
        </p>
      </div>
      
      {/* Tags */}
      {post.tags && post.tags.length > 0 && (
        <div className="flex flex-wrap gap-2">
          {post.tags.map(tag => (
            <Badge key={tag} variant="outline" className="text-xs">
              {tag}
            </Badge>
          ))}
        </div>
      )}
      
      {/* Read more link */}
      <div>
        <Link
          to="/blog/$slug"
          params={{ slug: post.slug }}
          className="text-sm font-medium text-primary hover:underline"
        >
          Read more
        </Link>
      </div>
    </article>
  );
} 