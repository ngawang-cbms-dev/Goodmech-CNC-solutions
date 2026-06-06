import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
// base must match the GitHub repo name so GitHub Pages asset paths resolve.
export default defineConfig({
  base: '/Goodmech-CNC-solutions/',
  plugins: [react()],
})
