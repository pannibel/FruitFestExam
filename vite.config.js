import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
// export default defineConfig({
//   base: "./",
//   plugins: [react()]


// })

export default defineConfig({
  assetsInclude: ['**/*.glb'],
  plugins: [react()],

  root: './',
  build: {
    chunkSizeWarningLimit: 3000,
    outDir: 'dist',
  },
  publicDir: 'assets',
  server: {
    host: true
  }

})