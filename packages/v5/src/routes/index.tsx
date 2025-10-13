import { createFileRoute, Link } from '@tanstack/react-router'
import { ArrowRight, Store } from 'lucide-react'
import { SiDiscord, SiGithub, SiKofi, SiX } from 'react-icons/si'
import { projects } from '../data/projects'
import { getAllBlogPosts } from '@/data/blogs'
import { sortBy } from 'es-toolkit'
import dayjs from 'dayjs'
import { meta } from '@/components/seo'

export const Route = createFileRoute('/')({
  component: HomePage,
  head: () => {
    return {
      meta: meta({
        title: 'Personal website',
        description: 'I like to create interesting things, using programming and writing as tools.',
        type: 'website',
      }),
    }
  },
})

const featuredProjects = projects.sort((a, b) => (b.featured ? 1 : -1) - (a.featured ? 1 : -1)).slice(0, 2)

const recentPosts = sortBy(getAllBlogPosts(), [(it) => -new Date(it.date)])
  .slice(0, 3)
  .map((it) => ({
    title: it.title,
    date: it.date,
    slug: it.slug,
  }))

export function HomePage() {
  return (
    <div className="flex flex-col gap-16 py-12">
      {/* Hero section */}
      <div className="flex flex-col items-center gap-8 text-center">
        <h1 className="text-4xl font-extrabold tracking-tight lg:text-5xl">Hi, I'm rxliuli</h1>
        <p className="mx-auto max-w-[700px] text-lg text-muted-foreground md:text-xl">
          I like to create interesting things, using programming and writing as tools.
        </p>

        {/* Social links */}
        <div className="flex items-center gap-4">
          <a
            href="https://store.rxliuli.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-input bg-background hover:bg-accent hover:text-accent-foreground"
          >
            <Store className="h-5 w-5" />
            <span className="sr-only">Store</span>
          </a>
          <a
            href="https://x.com/moeruri"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-input bg-background hover:bg-accent hover:text-accent-foreground"
          >
            <SiX className="h-5 w-5" />
            <span className="sr-only">Twitter</span>
          </a>
          <a
            href="https://github.com/rxliuli"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-input bg-background hover:bg-accent hover:text-accent-foreground"
          >
            <SiGithub className="h-5 w-5" />
            <span className="sr-only">GitHub</span>
          </a>
          <a
            href="https://discord.gg/fErBc3wYrC"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-input bg-background hover:bg-accent hover:text-accent-foreground"
          >
            <SiDiscord className="h-5 w-5" />
            <span className="sr-only">Discord</span>
          </a>
          <a
            href="https://ko-fi.com/rxliuli"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-input bg-background hover:bg-accent hover:text-accent-foreground"
          >
            <SiKofi className="h-5 w-5" />
            <span className="sr-only">Ko-fi</span>
          </a>
        </div>
      </div>

      {/* Featured Projects section */}
      <section className="space-y-6">
        <div className="flex items-center justify-between">
          <h2 className="text-2xl font-bold tracking-tight">Featured Projects</h2>
          <Link to="/project" className="inline-flex items-center text-sm font-medium text-primary">
            View all projects
            <ArrowRight className="ml-1 h-4 w-4" />
          </Link>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          {featuredProjects.map((project) => (
            <Link
              key={project.slug}
              to={`/project/$slug`}
              params={{ slug: project.slug }}
              className="group rounded-lg border border-border p-6 transition-colors hover:bg-muted"
            >
              <h3 className="font-semibold text-lg">{project.title}</h3>
              <p className="text-muted-foreground mt-2">{project.description}</p>
            </Link>
          ))}
        </div>
      </section>

      {/* Recent Blog Posts section */}
      <section className="space-y-6">
        <div className="flex items-center justify-between">
          <h2 className="text-2xl font-bold tracking-tight">Recent Posts</h2>
          <Link to="/blog" className="inline-flex items-center text-sm font-medium text-primary">
            View all posts
            <ArrowRight className="ml-1 h-4 w-4" />
          </Link>
        </div>

        <div className="space-y-4">
          {recentPosts.map((post) => (
            <Link
              key={post.slug}
              to={`/blog/$slug`}
              params={{ slug: post.slug }}
              className="block space-y-1 rounded-md p-3 transition-colors hover:bg-muted"
            >
              <h3 className="font-medium">{post.title}</h3>
              <p className="text-sm text-muted-foreground">{dayjs(post.date).format('YYYY-MM-DD')}</p>
            </Link>
          ))}
        </div>
      </section>
    </div>
  )
}

