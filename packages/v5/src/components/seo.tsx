import type { AnyRouteMatch } from '@tanstack/react-router'

interface SEOProps {
  title: string
  description: string
  image?: string
  type?: 'website' | 'article'
  publishedTime?: string
  modifiedTime?: string
  tags?: string[]
}

export function meta(props: SEOProps): AnyRouteMatch['meta'] {
  const fullTitle = `${props.title} | rxliuli`

  const image = props.image ?? 'https://rxliuli.com/logo.png'
  const r: AnyRouteMatch['meta'] = [
    { name: 'title', content: fullTitle },
    { name: 'description', content: props.description },
    { name: 'og:type', content: props.type },
    { name: 'og:title', content: fullTitle },
    { name: 'og:description', content: props.description },
    { name: 'og:image', content: image },
    { name: 'twitter:card', content: props.image ? 'summary_large_image' : 'summary' },
    { name: 'twitter:title', content: fullTitle },
    { name: 'twitter:description', content: props.description },
    { name: 'twitter:image', content: image },
  ]
  if (props.tags) {
    r.push({ name: 'article:tag', content: props.tags?.join(',') })
  }
  if (props.publishedTime) {
    r.push({ name: 'article:published_time', content: props.publishedTime })
  }
  if (props.modifiedTime) {
    r.push({ name: 'article:modified_time', content: props.modifiedTime })
  }
  return r
}

