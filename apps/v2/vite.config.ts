import { defineConfig } from 'vite'
import preact from '@preact/preset-vite'
import { visualizer } from 'rollup-plugin-visualizer'

export default defineConfig({
  base: '/v2/',
  plugins: [preact(), visualizer()],
})
