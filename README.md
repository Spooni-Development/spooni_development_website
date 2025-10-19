# SPOONI Development Documentation

> A modern, fast, and user-friendly documentation site for RedM mappings and scripts, built with VitePress.

[![VitePress](https://img.shields.io/badge/VitePress-1.4.0-646cff?style=flat-square&logo=vite)](https://vitepress.dev/)
[![Vue.js](https://img.shields.io/badge/Vue.js-3-4fc08d?style=flat-square&logo=vue.js)](https://vuejs.org/)
[![License](https://img.shields.io/badge/License-GPL--3.0-orange?style=flat-square)](./LICENSE)

## 🎯 What is this?

This is the official documentation website for **SPOONI Development** – a team specializing in high-quality RedM (Red Dead Redemption 2 Multiplayer) resources. The site serves as a central hub for:

- 📚 **Documentation** for 100+ mappings across all RDR2 regions
- 🔧 **Script guides** from multiple developers (SPOONI, Dietrich, DrShwaggins)
- 🎨 **Props gallery** with 15,000+ searchable game assets
- 👥 **Team & partner information**

**Why VitePress?** It's lightning-fast, markdown-based, and makes maintaining documentation incredibly easy. No complex CMS needed – just write markdown files and deploy.

## ✨ Key Features

### 🔍 **Advanced Props Gallery**
A fully-featured, searchable gallery of 15,000+ props with:
- Real-time search and filtering by category/subcategory
- Lazy-loaded images and dynamic JSON imports for optimal performance
- Zoom functionality for detailed viewing
- One-click copy-to-clipboard for prop names
- Fully responsive design (mobile, tablet, desktop)
- Efficient pagination and filtering system

### 📱 **Responsive Design**
Works beautifully on all devices – from mobile phones to ultra-wide monitors. Dark mode included with smooth animations.

### ⚡ **Lightning Fast**
Built with Vite, the site loads instantly. Static generation means no server processing – just pure speed. Optimized with:
- WebP image format for smaller file sizes
- Custom font loading strategy
- Code splitting and lazy loading
- Efficient caching strategies

### 🎨 **Easy Content Management**
All documentation is written in Markdown. No database, no complex backend – just create a `.md` file and you're done.

### 🔎 **Built-in Search**
Local search functionality lets users find any information instantly across all documentation pages.

### 🎭 **Interactive Components**
- Tabbed content for organized information
- Custom Vue components for rich interactivity
- Embedded videos and media support

## 🚀 Quick Start

### Prerequisites
- Node.js 18 or higher
- npm (comes with Node.js)

### Installation

```bash
# Clone the repository
git clone https://github.com/Spooni-Development/spooni-development-website.git
cd spooni-development-website

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
│   │   ├── components/         # Vue components (PropCard, PropGrid, etc.)
│   │   ├── composables/        # Reusable composition functions
│   │   ├── styles/             # Modular CSS architecture
│   │   │   ├── design-tokens.css   # Design system tokens
│   │   │   ├── variables.css       # VitePress theme variables
│   │   │   ├── components.css      # Component-specific styles
│   │   │   ├── utilities.css       # Utility classes
│   │   │   └── overrides.css       # VitePress overrides
│   │   ├── utils/              # Helper functions
│   │   ├── fonts.css           # Custom font definitions
│   │   ├── index.ts            # Theme entry point
│   │   └── PropGallery.vue     # Main props gallery component
│   └── dist/                   # Build output (git-ignored)
├── doc_mappings/               # Mapping documentation
├── doc_scripts/                # Script documentation
└── public/                     # Static assets
    ├── fonts/                  # Custom web fonts
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

Perfect for documentation that needs to be both professional and easy to maintain.

## 📜 License & Credits

### License
This project is licensed under the **GNU General Public License v3.0** – see the [LICENSE](./LICENSE) file for details.

### Developed by
- **Author**: [emotion06](https://github.com/emotion06)
- **Organization**: [SPOONI Development](https://github.com/Spooni-Development)

### Built with
- [VitePress](https://vitepress.dev/) – Vue-powered static site generator
- [Vue.js 3](https://vuejs.org/) – JavaScript framework
- [Vite](https://vitejs.dev/) – Build tool
- [vitepress-plugin-tabs](https://www.npmjs.com/package/vitepress-plugin-tabs) – Tab functionality
- [medium-zoom](https://github.com/francoischalifour/medium-zoom) – Image zoom

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

