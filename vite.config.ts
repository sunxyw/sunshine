import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

import { resolve } from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      '@src': resolve(__dirname, 'src'),
    },
  },
  base: './',
  server: {
    port: 4500,
    open: false,
    cors: true,

    // proxy: {
    //   '/api': {
    //     target: 'http://xxx.xxx.xxx.xxx:x000',
    //     changeOrigin: true,
    //     secure: false,
    //     rewrite: (path) => path.replace('/api/', '/')
    //   }
    // },
  },
})
