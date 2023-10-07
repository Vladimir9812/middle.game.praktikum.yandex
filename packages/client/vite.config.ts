import dotenv from 'dotenv';
import { fileURLToPath, URL } from 'url';
import { defineConfig } from 'vite';

import react from '@vitejs/plugin-react';
import postcssAutoprefixer from 'autoprefixer';
import postcssVars from 'postcss-css-variables';
import postcssImport from 'postcss-import';
import postcssNested from 'postcss-nested';
import { modifyFilePlugin } from './vite-plugin-modify-file';

dotenv.config();

// https://vitejs.dev/config/
export default defineConfig(({ command, mode }) => {
  return {
    define: {
      __SERVER_PORT__: process.env.SERVER_PORT,
    },
    plugins: [
      react(),
      modifyFilePlugin({
        filePath: 'dist/sw.js', // Путь к вашему файлу
        search: 'cache-name-v1', // Строка, которую нужно найти
      }),
    ],
    build: {
      assetsDir: 'src',
    },
    server: {
      port: Number(process.env.CLIENT_PORT) || 3000,
    },
    preview: {
      port: 8080,
    },
    css: {
      postcss: {
        plugins: [postcssImport(), postcssNested(), postcssVars(), postcssAutoprefixer()],
      },
    },
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
        { find: '@app/const', replacement: fileURLToPath(new URL('./src/const', import.meta.url)) },
        {
          find: '@app/utils',
          replacement: fileURLToPath(new URL('./src/utils', import.meta.url)),
        },
        {
          find: '@app/engine',
          replacement: fileURLToPath(new URL('./src/engine', import.meta.url)),
        },
      ],
    },
  };
});
