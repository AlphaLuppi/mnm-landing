// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  site: 'https://mnm.alphaluppi.fr',
  // Custom domain at root → no base path needed
  vite: {
    plugins: [tailwindcss()],
  },
  build: {
    // Inline small CSS for faster first paint
    inlineStylesheets: 'auto',
  },
});
