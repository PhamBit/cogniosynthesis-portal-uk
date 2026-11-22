# cogniosynthesisportal.uk v2 - Quick Start Guide

**Status:** ✅ Running locally  
**URL:** http://localhost:4321  
**Dev Server Process:** `proc_eef8178a5be2` (background)

---

## 🚀 Launch Commands

```bash
# Development mode (hot reload enabled)
cd /home/kenny/projects/cogniosynthesis-portal-uk
npm run dev -- --host 0.0.0.0

# Production build
npm run build

# Preview production build locally
npm run preview
```

---

## 📁 Project Structure

```
cogniosynthesis-portal-uk/
├── src/
│   ├── pages/
│   │   └── index.astro              # Homepage (edit this to update home)
│   ├── components/
│   │   ├── Header.astro             # Navigation header
│   │   ├── Hero.astro               # Hero section
│   │   ├── SpotlightCards.astro     # Feature cards section
│   │   ├── PartnerLogos.astro       # Partner showcase
│   │   └── Footer.astro             # Site footer
│   ├── layouts/
│   │   └── BaseLayout.astro         # HTML shell, SEO meta
│   └── styles/
│       └── global.css               # Design system tokens
├── public/
│   ├── favicon.svg                  # Site favicon
│   └── images/
│       └── logos/                   # Partner logo placeholders
├── package.json
└── astro.config.mjs
```

---

## 🎨 Customization Points

### 1. Hero Section (src/components/Hero.astro)
```astro
<Hero 
  headline="Your Headline Here"
  subheadline="Your value proposition"
  primaryCta="Get Started"
  primaryCtaLink="/contact"
/>
```

### 2. Feature Cards (src/pages/index.astro)
Edit the `spotlightCards` array to change featured services:
```javascript
const spotlightCards = [
  {
    title: 'Your Service Name',
    description: 'Description of what you offer...',
    link: '/solutions/your-service'
  },
  // Add more cards...
];
```

### 3. Partner Logos (src/pages/index.astro)
Update the `partners` array with your actual partners:
```javascript
const partners = [
  { name: 'Partner Name', logo: '/images/logos/partner-1.svg' },
  // Add more...
];
```

### 4. Color Scheme (src/styles/global.css)
Edit CSS custom properties in `:root`:
```css
--color-primary-navy: #0a1f3d;      /* Change brand color */
--color-primary-teal: #00b8a8;      /* Change accent color */
```

---

## 🖼️ Asset Integration

### Replace Placeholder Images

**Hero Background:**  
Replace `/public/images/heroes/placeholder-hero.jpg` with your branded hero image.

**Partner Logos:**  
Add SVG files to `/public/images/logos/` and update references in `src/pages/index.astro`.

**Favicon:**  
Create favicon-48x48.png and update `<link rel="icon">` in BaseLayout.astro

---

## 🌐 Deployment Targets

### Netlify (Recommended)
```bash
# Install CLI
npm install -g netlify-cli

# Deploy
netlify deploy --prod
```

**Netlify config:** `public/` folder serves as publish directory

### Vercel
```bash
npm install -g vercel
vercel --prod
```

**Auto-detects Astro, zero config needed**

### AWS S3 + CloudFront
```bash
npm run build
# Upload dist/ to S3 bucket
# Enable CloudFront distribution
```

---

## 📊 Performance Targets

Based on DXC benchmark analysis:

| Metric | Target | How We Achieve It |
|--------|--------|-------------------|
| Lighthouse Score | ≥90 | Astro partial hydration, no client JS by default |
| FCP (First Contentful Paint) | <1.5s | Inlined critical CSS, font preconnect |
| TTI (Time to Interactive) | <3.5s | Static HTML generation |
| Page Weight | <2MB | Optimized images, minimal dependencies |

---

## 🔧 Development Workflow

### Adding New Pages

1. Create `.astro` file in `src/pages/`:
   ```bash
   src/pages/about.astro  →  /about URL
   src/pages/solutions/index.astro  →  /solutions/ URL
   ```

2. Import BaseLayout and components:
   ```astro
   ---
   import BaseLayout from '../layouts/BaseLayout.astro';
   import Header from '../components/Header.astro';
   import Footer from '../components/Footer.astro';
   ---
   
   <BaseLayout title="About Us">
     <Header />
     <main>
       <!-- Your content -->
     </main>
     <Footer />
   </BaseLayout>
   ```

### Updating Styles

Edit `src/styles/global.css` — changes hot-reload in dev mode.

For component-specific styles, use `<style>` blocks inside `.astro` files (scoped automatically).

---

## 📝 Content Workflow

### DXC Reference Mirror
All DXC.com assets and patterns are preserved at:
```
/home/kenny/starla-pka/Deliverables/dxc-com-mirror/
```

Use this to:
- Extract color values from CSS files
- Study layout patterns in extracted HTML
- Access partner logos for inspiration
- Reference typography scale

### Next Content Tasks

1. **Write Homepage Copy** — Replace placeholder headlines with CSP messaging
2. **Create Partner Logos** — Either source existing or create new SVG placeholders
3. **Design Hero Image** — Create branded background (gradient + texture)
4. **Build Secondary Pages** — /solutions, /about, /contact

---

## 🛠️ Troubleshooting

### Dev server won't start
```bash
cd /home/kenny/projects/cogniosynthesis-portal-uk
npm install
npm run dev -- --host 0.0.0.0
```

### Styles not updating
Hard refresh browser: `Ctrl+Shift+R` (clear cache)

### Missing components error
Ensure all `.astro` files are in correct directories under `src/`

---

## ✅ Current Session Log Entry

**Date:** 2026-11-22 00:09 UTC  
**Agent:** Starla-Morpheus  
**Milestone:** cogniosynthesisportal.uk v2 Phase 2 Complete

**Accomplished:**
- DXC.com mirror captured (81 files, 6.9 MB)
- Astro project scaffolded with full design system
- 5 core components implemented (Header, Hero, SpotlightCards, PartnerLogos, Footer)
- Dev server running and verified
- Performance patterns from DXC replicated

**Ready For:** Content customization and next feature priorities

---

*Quick reference — see Phase-2-COMPLETE-STATUS.md for full details*  
*DXC design patterns: DESIGN-PATTERNS.md in mirror folder*
