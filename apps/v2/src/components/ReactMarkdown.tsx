import { marked } from 'marked'

export function ReactMarkdown(props: { children: string; linkTarget: string }) {
  return <div dangerouslySetInnerHTML={{ __html: marked(props.children, { renderer: linkRenderer() }) }}></div>
}

function linkRenderer() {
  const renderer = new marked.Renderer()
  const linkRenderer = renderer.link
  renderer.link = (href, title, text) => {
    const html = linkRenderer.call(renderer, href, title, text)
    return html.replace(/^<a /, '<a target="_blank" rel="nofollow" ')
  }
  return renderer
}
