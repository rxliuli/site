import { defineConfig } from '@tanstack/react-start/config'
import viteTsConfigPaths from 'vite-tsconfig-paths'
import tailwindcss from '@tailwindcss/vite'
import markdownPlugin from 'unplugin-markdown/vite'
import type { Plugin } from 'vite'

const config = defineConfig({
  tsr: {
    appDirectory: 'src',
  },
  vite: {
    plugins: [
      // this is the plugin that enables path aliases
      viteTsConfigPaths({
        projects: ['./tsconfig.json'],
      }),
      tailwindcss(),
      markdownPlugin() as Plugin,
      // analyzer({
      //   analyzerMode: 'static',
      //   fileName: 'stats.html',
      // }),
    ],
  },
  server: {
    prerender: {
      routes: ['/', '/ping/privacy', '/webstore/privacy'],
      crawlLinks: true,
    },
  },
})

export default config

