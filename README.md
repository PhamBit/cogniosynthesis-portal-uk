# CognioSynthesis Portal UK v2

**Three ways we help with AI:** AI Exploration, AI Health Check, and Epistemic Audit. All on-site, all offline.

## Tech Stack

- **Astro 5.x** - Static site generation with partial hydration
- **HyperFrames** - Video rendering from HTML (dynamic content)
- **Tailwind CSS** - Utility-first styling  
- **Preact/Hooks** - Interactive components
- **GSAP** - Smooth animations

## Quick Start

```bash
npm install
npm run dev
```

## Project Structure

```
├── src/
│   ├── pages/          # Home, Services (explore, health-check, audits), About
│   ├── components/     # DynamicHeader, Footer, Hero, SpotlightCards, PartnerLogos
│   ├── layouts/        # BaseLayout template
│   └── styles/         # Global CSS with DXC design tokens
├── public/             # Static assets (images, logos)
└── package.json
```

## Build Stack

- **Framework:** Astro 5.x
- **Styling:** Tailwind CSS + custom global.css
- **Dynamic Headers:** Scroll detection, backdrop blur, animated nav links
- **Performance:** Partial hydration, static generation

## HyperFrames Integration

Video rendering from HTML:

```bash
# Add video components
npx hyperframes add flash-through-white
npx hyperframes add data-chart

# Render composition
cd src/videos && npx hyperframes render [name]
```

## Reference Design

Industry standard benchmark: [DXC Technology](https://dxc.com/)  
Local mirror: `/home/kenny/starla-pka/Deliverables/dxc-com-mirror/`

## Live Services

- **Dev:** http://localhost:4321/
- **Production:** https://cogniosynthesisportal.uk/

## GitHub Repository

- **Remote:** https://github.com/PhamBit/cogniosynthesis-portal-uk
- **Branch:** main → origin/main

## License

Private - CognioSynthesis Portal Ltd © 2026
