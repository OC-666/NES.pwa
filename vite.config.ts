import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { visualizer } from 'rollup-plugin-visualizer'

// https://vitejs.dev/config/
export default defineConfig({
  base: '/nes/',
  plugins: [
    react(),
    visualizer(),
  ],
  build: {
    outDir: 'nes',
  },
  define: {
    __built_at: new Date().getTime(),
  },
})
