// vite.config.js
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@styles': '/src/styles',
      '@components': '/src/components',
      '@sections': '/src/sections',
    },
  },
})
