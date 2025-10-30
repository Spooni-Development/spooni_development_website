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
  enhanceApp({ app }) {
    // Add tabs plugin functionality
    enhanceAppWithTabs(app);
    
    // Register global components
    app.component('PropGallery', PropGallery);
    app.component('ServerStatus', ServerStatus);
  }
};

export default theme;
