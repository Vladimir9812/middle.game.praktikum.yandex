import dotenv from 'dotenv';
import { fileURLToPath, URL } from 'url';
import { defineConfig } from 'vite';

import react from '@vitejs/plugin-react';
import postcssAutoprefixer from 'autoprefixer';
import postcssVars from 'postcss-css-variables';
import postcssImport from 'postcss-import';
import postcssNested from 'postcss-nested';
import { modifyFilePlugin } from './vite-plugin-modify-file';
import * as path from 'path';

dotenv.config();

//vitejs.dev/config
export default defineConfig({
  define: {
    __SERVER_PORT__: process.env.SERVER_PORT,
  },
  plugins: [
    react(),
    modifyFilePlugin({
      filePath: 'dist-ssr/sw.js', // Путь к вашему файлу
      search: 'cache-name-v1', // Строка, которую нужно найти
    }),
  ],
  build: {
    assetsDir: 'src',
    lib: {
      entry: path.resolve(__dirname, 'src/ssr.tsx'),
      formats: ['cjs'],
      name: 'client',
    },
    rollupOptions: {
      output: {
        dir: 'dist-ssr',
      },
    },
  },
  css: {
    postcss: {
      plugins: [postcssImport(), postcssNested(), postcssVars(), postcssAutoprefixer()],
    },
  },
  resolve: {
    alias: [
      { find: '@app/api', replacement: path.resolve(__dirname, './src/api') },
      { find: '@app/components', replacement: path.resolve(__dirname, './src/components') },
      { find: '@app/hooks', replacement: path.resolve(__dirname, './src/hooks') },
      { find: '@app/controllers', replacement: path.resolve(__dirname, './src/controllers') },
      { find: '@app/pages', replacement: path.resolve(__dirname, './src/pages') },
      { find: '@app/services', replacement: path.resolve(__dirname, './src/services') },
      { find: '@app/store', replacement: path.resolve(__dirname, './src/store') },
      { find: '@app/types', replacement: path.resolve(__dirname, './src/types') },
      { find: '@app/const', replacement: path.resolve(__dirname, './src/const') },
      { find: '@app/utils', replacement: path.resolve(__dirname, './src/utils') },
      { find: '@app/engine', replacement: path.resolve(__dirname, './src/engine') },
    ],
  },
});
