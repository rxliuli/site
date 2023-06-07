import { defineConfig } from 'vite'
import preact from '@preact/preset-vite'
import { visualizer } from 'rollup-plugin-visualizer'
import { Mode, plugin } from 'vite-plugin-markdown'
import MarkdownIt from 'markdown-it'

/**
 * @link https://github.com/markdown-it/markdown-it/blob/master/docs/architecture.md#renderer
 * @param md
 */
function linkTarget(md: MarkdownIt) {
  // Remember old renderer, if overridden, or proxy to default renderer
  var defaultRender =
    md.renderer.rules.link_open ||
    function (tokens, idx, options, env, self) {
      return self.renderToken(tokens, idx, options)
    }

  md.renderer.rules.link_open = function (tokens, idx, options, env, self) {
    // If you are sure other plugins can't add `target` - drop check below
    var aIndex = tokens[idx].attrIndex('target')

    if (aIndex < 0) {
      tokens[idx].attrPush(['target', '_blank']) // add new attribute
    } else {
      tokens[idx].attrs[aIndex][1] = '_blank' // replace value of existing attr
    }

    // pass token to default renderer.
    return defaultRender(tokens, idx, options, env, self)
  }
}
const md = new MarkdownIt()
linkTarget(md)

export default defineConfig({
  plugins: [
    preact(),
    plugin({
      mode: [Mode.HTML],
      markdownIt: md,
    }),
    visualizer() as any,
  ],
})
