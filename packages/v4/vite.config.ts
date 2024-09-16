import { sveltekit } from '@sveltejs/kit/vite'
import { defineConfig } from 'vitest/config'
import { Mode, plugin } from 'vite-plugin-markdown'

export default defineConfig({
  plugins: [sveltekit(), plugin({ mode: [Mode.HTML] })],
  test: {
    include: ['src/**/*.{test,spec}.{js,ts}'],
  },
})

