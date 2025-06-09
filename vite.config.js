import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  base: './', // Use relative paths for assets
  plugins: [react()],
  server: {
    port: 3000
  },
  css: {
    postcss: './postcss.config.js', // Add this line
  },
  build: {
    rollupOptions: {
    }
  }
});