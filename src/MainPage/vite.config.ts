import { svelte } from '@sveltejs/vite-plugin-svelte';
import { resolve } from 'path';
import fs from 'fs';
import { defineConfig } from 'vite';

export default defineConfig({
  plugins: [
    svelte(),
    {
      name: 'rename-index-to-splash',
      writeBundle() {
        const publicDir = resolve(__dirname, '../../public');
        const oldIndex = resolve(publicDir, 'index.html');
        const newSplash = resolve(publicDir, 'splash.html');

        if (fs.existsSync(oldIndex)) {
          if (fs.existsSync(newSplash)) {
            fs.unlinkSync(newSplash);
          }
          fs.renameSync(oldIndex, newSplash);
        }
      }
    }
  ],
  resolve: {
    conditions: ['browser'],
  },
  build: {
    outDir: resolve(__dirname, '../../public'),
    emptyOutDir: false,
    assetsDir: 'assets/splash',
    rollupOptions: {
      output: {
        entryFileNames: 'assets/splash/[name]-[hash].js',
        chunkFileNames: 'assets/splash/[name]-[hash].js',
        assetFileNames: 'assets/splash/[name]-[hash][extname]'
      }
    }
  }
});