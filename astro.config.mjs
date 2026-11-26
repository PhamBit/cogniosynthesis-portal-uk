import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  site: 'https://cogniosynthesisportal.uk',
  integrations: [tailwind()],
  build: {
    inlineStylesheets: 'auto'
  },
  vite: {
    css: {
      devSourcemap: true
    }
  },
  publicDir: 'public',
  // Serve compositions for HyperFrames runtime
  compressPublic: false
});
