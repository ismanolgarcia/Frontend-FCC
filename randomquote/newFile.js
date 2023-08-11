import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  build: {
    rollupOptions: {
      external: ['styled-components'], // Agrega otros módulos aquí si es necesario
    },
    plugins: [react()],
  },
});
