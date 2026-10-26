import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Relative paths make the generated site work at both a root domain and
// https://<owner>.github.io/<repository>/ on GitHub Pages.
export default defineConfig({
  base: './',
  plugins: [react()],
})
