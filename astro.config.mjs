import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://cogniosynthesisportal.uk',
  integrations: [
    tailwind(),
    sitemap({
      // Leave out the addresses that only forward elsewhere.
      filter: (page) => !/\/(cookies|solutions|products\/(aligned-certified|bio-debt|feedmesafe|my-sovereign-home|oldschool-search|paichip))\/$/.test(page),
      // Parts of the site that are served beside this build and were in the live sitemap.
      customPages: [
        'https://cogniosynthesisportal.uk/feedmesafe/',
        'https://cogniosynthesisportal.uk/knowledge-ecosystem/'
      ]
    })
  ],
  // Addresses the live site uses today, kept so existing links and search results still land.
  redirects: {
    '/privacy.html': '/privacy',
    '/terms.html': '/terms',
    // Products retired on 18 Nov 2026: their old pages land on the products list.
    '/products/aligned-certified': '/products/',
    '/products/bio-debt': '/products/',
    '/products/feedmesafe': '/products/',
    '/products/my-sovereign-home': '/products/',
    '/products/oldschool-search': '/products/',
    '/products/paichip': '/products/'
  },
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
