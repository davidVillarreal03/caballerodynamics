import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
// import tail from '@tailwindcss/vite'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    tailwindcss(),
    react()
    
  ],
  server: {
    port: 3000,
    open: true
  }
})

