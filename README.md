# SPOONI Development Website

> The official website for SPOONI Development – A modern, comprehensive platform for RedM resources, documentation, community, and services, built with VitePress.

[![VitePress](https://img.shields.io/badge/VitePress-1.6.4-646cff?style=flat-square&logo=vite)](https://vitepress.dev/)
[![Vue.js](https://img.shields.io/badge/Vue.js-3-4fc08d?style=flat-square&logo=vue.js)](https://vuejs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.7-3178c6?style=flat-square&logo=typescript)](https://www.typescriptlang.org/)
[![License](https://img.shields.io/badge/License-GPL--3.0-orange?style=flat-square)](./LICENSE)

## 🎯 What is this?

This is the official website for **SPOONI Development** – a team specializing in high-quality RedM (Red Dead Redemption 2 Multiplayer) resources. The site is a complete platform that serves as:

- 📚 **Documentation** – Comprehensive guides for 100+ mappings across all RDR2 regions and detailed script documentation
- 🎨 **Props Gallery** – Interactive gallery with 15,000+ searchable game assets
- 🌐 **Live Status** – Real-time server status monitoring for all SPOONI servers and external services
- 👥 **Team Showcase** – Meet our developers, mappers, and artists
- 🤝 **Partner Network** – Showcasing our community partners across multiple tiers
- 🛠️ **Services** – Information about our development and mapping services
- 📖 **Knowledge Base** – Detailed guides, crash codes, and tutorials for RedM development

**Why VitePress?** It's lightning-fast, markdown-based, and incredibly flexible. Perfect for building a modern web presence that combines documentation, galleries, and dynamic content – all without a complex CMS.

## ✨ Key Features

### 🔍 **Advanced Props Gallery**
A fully-featured, searchable gallery of 15,000+ props with:
- Real-time search and filtering by slug-based category/subcategory identifiers
- Shareable deep links via `?cat=<slug>&sub=<slug>` that restore state on reload
- Dynamic JSON imports with automatic metadata generation and pagination
- Fully responsive design (mobile, tablet, desktop)
- Efficient pagination, column controls, and filtering system
- Medium-zoom preview for detailed inspection of prop images
- One-click copy-to-clipboard for prop names

### 🌐 **Live Server Status Page**
Real-time monitoring of all SPOONI servers with:
- Live RedM/FiveM server status checks
- Player count and max players display
- Multiple API endpoint fallbacks for reliability
- External service status (CFX Services, Discord)
- Component-level status tracking with incidents
- Beautiful, responsive status cards

### 🧭 **Enhanced Navigation**
Modern navigation features for better UX:
- Breadcrumb navigation for hierarchical content
- Scroll-to-top button for long pages
- Query-string synchronization so gallery selections can be bookmarked or shared

### 📱 **Responsive Design**
Works beautifully on all devices – from mobile phones to ultra-wide monitors. Dark mode included with smooth animations.

### ⚡ **Lightning Fast**
Built with Vite, the site loads instantly. Static generation means no server processing – just pure speed. Optimized with:
- WebP image format for smaller file sizes
- Preloaded critical fonts (Space Grotesk, Space Mono)
- Code splitting and lazy loading
- Efficient caching strategies
- Optimized bundle sizes

### 🎨 **Easy Content Management**
All content is written in Markdown – from documentation to team profiles and partner showcases. No database, no complex backend – just create a `.md` file and you're done.

### 🔎 **Built-in Search**
Local search functionality lets users find any information instantly across all documentation pages.  
The Props Gallery also leverages Fuse.js with a persistent index for typo-tolerant prop lookup.

### 🎭 **Interactive Components**
- Tabbed content for organized information
- Custom Vue components for rich interactivity
- Embedded videos and media support
- Live server status indicators
- Dynamic loading states, lazy-loaded images, zoomable prop previews, and pagination controls

## 🚀 Quick Start

### Prerequisites
- Node.js 18 or higher
- npm (comes with Node.js)

### Installation

```bash
# Clone the repository
git clone https://github.com/Spooni-Development/spooni_development_website.git
cd spooni_development_website

# Install dependencies
npm install

# Start development server
npm run docs:dev
```

Visit **http://localhost:5173** to see the site running locally.

### Build for Production

```bash
# Create production build
npm run docs:build

# Preview production build
npm run docs:preview
```

The build step automatically regenerates category metadata (slugs + labels) and writes it to `docs/.vitepress/theme/propData/categories-metadata.json`.  
The built site will be in `docs/.vitepress/dist` and can be deployed to any static hosting service (GitHub Pages, Netlify, Vercel, etc.).

## 🌐 Deployment

The site generates static HTML and can be hosted anywhere:

- **GitHub Pages** (free)
- **Netlify** (free tier available)
- **Vercel** (free tier available)
- **Cloudflare Pages** (free)
- Any web server (Apache, NGINX, etc.)

No server-side processing required – just upload the contents of `docs/.vitepress/dist`.

## 🎨 Customization

The site uses VitePress's theming system with a modular architecture:

- **Design System**: Edit design tokens in `docs/.vitepress/theme/styles/design-tokens.css`
- **Colors & Variables**: Modify `docs/.vitepress/theme/styles/variables.css`
- **Components**: Extend component styles in `docs/.vitepress/theme/styles/components.css`
- **Navigation**: Configure `docs/.vitepress/config.mts`
- **Vue Components**: Add custom components in `docs/.vitepress/theme/components/`
- **Utilities**: Helper functions available in `docs/.vitepress/theme/utils/`

The modular structure follows industry best practices for maintainability and scalability.

### Project Structure

```
docs/
├── .vitepress/
│   ├── config.mts              # Site configuration
│   ├── theme/
│   │   ├── components/         # Vue components
│   │   │   ├── Breadcrumbs.vue     # Navigation breadcrumbs
│   │   │   ├── ScrollToTop.vue     # Scroll-to-top button
│   │   │   ├── ServerStatus.vue    # Live server status widget
│   │   │   ├── LoadingSpinner.vue  # Standardized loading state
│   │   │   ├── PropCard.vue        # Props gallery card
│   │   │   ├── PropGrid.vue        # Props gallery grid
│   │   │   └── ... (more components)
│   │   ├── composables/        # Reusable composition functions
│   │   │   ├── usePropData.ts      # Props data management
│   │   │   ├── usePropFilter.ts    # Fuzzy search + filtering
│   │   │   ├── usePropDeepLink.ts  # Query param synchronization
│   │   │   └── useFavorites.ts     # Favorite props persistence
│   │   ├── styles/             # Modular CSS architecture
│   │   │   ├── design-tokens.css   # Design system tokens
│   │   │   ├── variables.css       # VitePress theme variables
│   │   │   ├── components.css      # Component-specific styles
│   │   │   ├── utilities.css       # Utility classes
│   │   │   └── overrides.css       # VitePress overrides
│   │   ├── utils/              # Helper functions
│   │   ├── fonts.css           # Custom font definitions
│   │   ├── index.ts            # Theme entry point
│   │   ├── Layout.vue          # Custom layout with enhancements
│   │   └── PropGallery.vue     # Main props gallery component (slug-aware deep links)
│   └── dist/                   # Build output (git-ignored)
├── doc_mappings/               # Mapping documentation (100+ locations)
├── doc_scripts/                # Script documentation (SPOONI, Dietrich, DrShwaggins)
├── team.md                     # Team members showcase
├── partner.md                  # Partner network (Tier 1, Tier 2, Dev)
├── service.md                  # Services offered
├── props.md                    # Props gallery page
├── status.md                   # Live server & service status page
├── crashes.md                  # RedM crash codes reference
├── docs.md                     # Documentation overview
├── index.md                    # Homepage
└── public/                     # Static assets
    ├── fonts/                  # Custom web fonts (Space Grotesk, Space Mono)
    ├── icons/                  # SVG icons
    ├── team/                   # Team member images
    ├── partner/                # Partner logos
    ├── sponsor/                # Sponsor images
    └── *.webp                  # Optimized images
```

## 💡 Why This Stack?

**VitePress** combines the best of both worlds:
- ✅ **Simple**: Write in Markdown, no complex setup
- ✅ **Powerful**: Full Vue.js 3 capabilities with Composition API
- ✅ **Fast**: Vite-powered builds and instant HMR
- ✅ **SEO-friendly**: Static HTML generation with SSR
- ✅ **Maintainable**: Clear structure, modular architecture
- ✅ **Modern**: Built-in TypeScript support, latest web standards
- ✅ **Optimized**: Automatic code splitting, lazy loading, tree shaking
- ✅ **Flexible**: Perfect for both documentation and dynamic web content

Ideal for creating a professional web presence that's easy to maintain and lightning-fast to load.

## 📜 License & Credits

### License
This project is licensed under the **GNU General Public License v3.0** – see the [LICENSE](./LICENSE) file for details.

### Developed by
- **Author**: [emotion06](https://github.com/emotion06)
- **Organization**: [SPOONI Development](https://github.com/Spooni-Development)

### Built with
- [VitePress 1.6.4](https://vitepress.dev/) – Vue-powered static site generator
- [Vue.js 3](https://vuejs.org/) – JavaScript framework with Composition API
- [TypeScript 5.7](https://www.typescriptlang.org/) – Type-safe development
- [Vite](https://vitejs.dev/) – Next-generation build tool
- [vitepress-plugin-tabs](https://www.npmjs.com/package/vitepress-plugin-tabs) – Tab functionality
- [medium-zoom](https://github.com/francoischalifour/medium-zoom) – Interactive image zoom for the props gallery
- [Fuse.js](https://fusejs.io/) – Fuzzy search library with persistent indexing

### Special Thanks
- **[Jump on Studios](https://www.jumpon-studios.com/)** – For the initial idea and code foundation of the Props Gallery component, as well as introducing us to the tabs plugin

## 📞 Contact & Links

- 🌐 **Website**: [spooni.de](https://spooni.de)
- 💬 **Discord**: [discord.gg/spooni](https://discord.gg/spooni)
- 🛒 **Store**: [spooni-mapping.tebex.io](https://spooni-mapping.tebex.io/)
- 📺 **YouTube**: [@Spooni.Development](https://www.youtube.com/@Spooni.Development)

---

<div align="center">

**Made with ❤️ by SPOONI Development**

*Nothing is Impossible*

</div>

