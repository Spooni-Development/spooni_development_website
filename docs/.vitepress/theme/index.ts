// https://vitepress.dev/guide/custom-theme
import { h } from 'vue'
import type { Theme } from 'vitepress'
import DefaultTheme from 'vitepress/theme'
import './style.css'
import { enhanceAppWithTabs } from 'vitepress-plugin-tabs/client'
import Layout from './Layout.vue'
import PropGallery from './PropGallery.vue'

export default {
  extends: DefaultTheme,
  Layout,
  enhanceApp({ app, router, siteData }) {
    enhanceAppWithTabs(app)
    app.component('PropGallery', PropGallery)
  }
} satisfies Theme
