import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  base: '/',
  plugins: [vue(), tailwindcss(),],
  build: {
    rollupOptions: {
      output: {
        // GitHub Pages can cache index.html longer than a deployment's hashed
        // lazy chunks. Stable names keep direct SPA routes functional while
        // the CDN moves from one release to the next.
        entryFileNames: 'assets/[name].js',
        chunkFileNames: 'assets/[name].js',
        assetFileNames: 'assets/[name][extname]',
      },
    },
  },
})
