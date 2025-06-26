import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
  ],
  server: {
    host: true, // Permite conexões externas
    port: 5173, // Porta do servidor
    strictPort: true, // Garante que a porta será 5173
    allowedHosts: [
      '446d-2804-7f7-df03-1d60-f4d2-912e-9d06-501e.ngrok-free.app', // Adicione o host gerado pelo ngrok aqui
    ],
  },
})
