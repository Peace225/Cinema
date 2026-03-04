import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// L'export default est obligatoire pour que Vite fonctionne
export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
  ],
})