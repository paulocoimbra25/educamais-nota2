import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

// base: './' garante que os caminhos dos arquivos gerados sejam relativos,
// funcionando tanto em GitHub Pages (projeto ou usuário) quanto em
// Netlify/Vercel, sem precisar ajustar configuração por ambiente.
export default defineConfig({
  plugins: [react()],
  base: './',
})
