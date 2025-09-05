import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  base: '/react-website/',
  build: {
    outDir: 'dist',
    assetsInlineLimit: 0, 
  },
});