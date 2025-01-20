import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'; // Import necessário para usar path.resolve()
// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'), // Define "@" como o alias para o diretório "src"
    },
  },
});