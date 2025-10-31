import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// ✅ Correct ESM export
export default defineConfig({
  plugins: [react()],
  build: {
    outDir: 'dist',
  },
  base: '/',
});
