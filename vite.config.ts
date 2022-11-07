import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  base: "/open-replay-demo/",
  plugins: [react()],
  build: {
    sourcemap: true
  }
})
