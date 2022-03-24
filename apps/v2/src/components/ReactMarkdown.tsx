import { marked } from 'marked'

let render: marked.Renderer

export function ReactMarkdown(props: { children: string; linkTarget: string }) {
  if (!render) {
    render = linkRenderer()
  }
  return <div dangerouslySetInnerHTML={{ __html: marked.parse(props.children, { renderer: render }) }}></div>
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
