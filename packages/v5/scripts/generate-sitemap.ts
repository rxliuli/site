import { writeFileSync } from 'fs'
import { join } from 'path'

const BASE_URL = 'https://rxliuli.com'

const routes = [
  '/',
  '/about',
  '/blog',
  '/projects',
]

// Mock data for blog posts and projects
const blogPosts = [
  { slug: 'extracting-large-zip-files-with-directory-structure-in-web-browsers' },
  { slug: 'convert-chrome-extension-to-safari' },
]

const projects = [
  { slug: 'mass-block-twitter' },
  { slug: 'ping' },
  { slug: 'window-resizer' },
  { slug: 'cors-unblock' },
  { slug: 'redirector' },
  { slug: 'myunzip' },
  { slug: 'joplin-vscode-plugin' },
  { slug: 'clean-twitter' },
  { slug: 'bilibili-markdown' },
]

const generateSitemap = () => {
  const projectSlugs = projects.map(project => `/project/${project.slug}`)
  const blogPostSlugs = blogPosts.map(post => `/blog/${post.slug}`)

  const allRoutes = [...routes, ...projectSlugs, ...blogPostSlugs]

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  ${allRoutes
    .map(
      (route) => `
  <url>
    <loc>${BASE_URL}${route}</loc>
    <changefreq>${route === '/' ? 'daily' : 'weekly'}</changefreq>
    <priority>${route === '/' ? '1.0' : '0.8'}</priority>
  </url>`
    )
    .join('')}
</urlset>`

  writeFileSync(join(process.cwd(), 'public', 'sitemap.xml'), sitemap)
  console.log('Sitemap generated successfully!')
}

generateSitemap()
