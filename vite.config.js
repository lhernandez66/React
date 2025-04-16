import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  base: "https://lhernandez66.github.io/React/", 
  plugins: [react()],
  assetsInclude: ['**/*.JPG']
})
