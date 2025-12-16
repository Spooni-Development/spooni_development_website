// https://vitepress.dev/guide/custom-theme
import type { Theme } from 'vitepress';
import DefaultTheme from 'vitepress/theme';
import './fonts.css';  // Self-hosted fonts (GDPR compliant)
import './style.css';
import { enhanceAppWithTabs } from 'vitepress-plugin-tabs/client';
import Layout from './Layout.vue';
import PropGallery from './PropGallery.vue';

import ServerStatus from './components/ServerStatus.vue';

/**
 * Custom VitePress Theme
 * Extends the default theme with custom components and functionality
 */
const theme: Theme = {
  extends: DefaultTheme,
  Layout,
  enhanceApp({ app, router }) {
    // Add tabs plugin functionality
    enhanceAppWithTabs(app);
    
    // Register global components
    app.component('PropGallery', PropGallery);
    app.component('ServerStatus', ServerStatus);

    // Convert iframes with image URLs to img tags for better scaling
    if (typeof window !== 'undefined') {
      router.onAfterRouteChanged = () => {
        setTimeout(() => {
          const iframes = document.querySelectorAll('iframe[src*=".png"], iframe[src*=".jpg"], iframe[src*=".jpeg"], iframe[src*=".webp"]');
          iframes.forEach((iframe) => {
            const src = iframe.getAttribute('src');
            if (src) {
              const img = document.createElement('img');
              img.src = src;
              img.alt = 'Preview Image';
              img.style.cssText = iframe.getAttribute('style') || '';
              img.className = iframe.className;
              
              // Copy relevant attributes
              const width = iframe.getAttribute('width');
              const height = iframe.getAttribute('height');
              if (width) img.setAttribute('width', width);
              if (height) img.setAttribute('height', height);
              
              // Replace iframe with img
              iframe.parentNode?.replaceChild(img, iframe);
            }
          });
        }, 100);
      };
    }
  }
};

export default theme;
