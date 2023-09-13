import { fileURLToPath, URL } from 'url';

import { defineConfig } from 'vite';
import dotenv from 'dotenv';
import react from '@vitejs/plugin-react';

dotenv.config();

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    port: Number(process.env.CLIENT_PORT) || 3000,
  },
  define: {
    __SERVER_PORT__: process.env.SERVER_PORT,
  },
  plugins: [react()],
  resolve: {
    alias: [
      { find: '@app/api', replacement: fileURLToPath(new URL('./src/api', import.meta.url)) },
      {
        find: '@app/components',
        replacement: fileURLToPath(new URL('./src/components', import.meta.url)),
      },
      { find: '@app/hooks', replacement: fileURLToPath(new URL('./src/hooks', import.meta.url)) },
      {
        find: '@app/controllers',
        replacement: fileURLToPath(new URL('./src/controllers', import.meta.url)),
      },
      { find: '@app/pages', replacement: fileURLToPath(new URL('./src/pages', import.meta.url)) },
      {
        find: '@app/services',
        replacement: fileURLToPath(new URL('./src/services', import.meta.url)),
      },
      { find: '@app/store', replacement: fileURLToPath(new URL('./src/store', import.meta.url)) },
      { find: '@app/types', replacement: fileURLToPath(new URL('./src/types', import.meta.url)) },
      {
        find: '@app/utils',
        replacement: fileURLToPath(new URL('./src/utils', import.meta.url)),
      },
    ],
  },
});
