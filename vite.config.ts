import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { crx } from '@crxjs/vite-plugin';

import manifest from './manifest.json';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    crx({manifest})
  ],
  build: {
    rollupOptions: {
      input: {
        main: './popup/main.tsx',
        webcontent: './web_content/main.tsx',
        background: './background.js',
        content: './content.js',
        index: './index.html'
      },
      output: {
        entryFileNames: '[name].js',
        chunkFileNames: '[name].js',
        assetFileNames: '[name].[ext]',
        dir: 'dist',
      },
    },
  }
})
