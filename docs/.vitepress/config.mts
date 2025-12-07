import { defineConfig } from 'vitepress'
import { tabsMarkdownPlugin } from 'vitepress-plugin-tabs'

export default defineConfig({
  markdown: {
    config(md) {
      md.use(tabsMarkdownPlugin)
    }
  },
  base: "/",
  title: "SPOONI Development",
  description: "Professional RedM scripts and high-quality mappings for Red Dead Redemption 2 roleplay servers. Premium MLOs, immersive scripts, and custom props for your RDR2 community.",
  lastUpdated: true,
  cleanUrls: true,
  lang: 'en-US',
  useWebFonts: false,
  head: [
    ["link",{ rel: "icon", sizes: "64x64", href: "/spooni.webp", loading: "lazy" }],
    // Preconnect to external domains for faster loading
    ["link",{ rel: "preconnect", href: "https://spooni.de" }],
    ["link",{ rel: "dns-prefetch", href: "https://spooni.de" }],
    // Preload critical fonts for better performance
    ["link",{ rel: "preload", href: "/fonts/space-grotesk/space-grotesk-v22-latin-regular.woff2", as: "font", type: "font/woff2", crossorigin: "" }],
    ["link",{ rel: "preload", href: "/fonts/space-grotesk/space-grotesk-v22-latin-500.woff2", as: "font", type: "font/woff2", crossorigin: "" }],
    ["link",{ rel: "preload", href: "/fonts/space-grotesk/space-grotesk-v22-latin-700.woff2", as: "font", type: "font/woff2", crossorigin: "" }],
    ["link",{ rel: "preload", href: "/fonts/space-mono/space-mono-v17-latin-regular.woff2", as: "font", type: "font/woff2", crossorigin: "" }],
    
    // SEO Meta Tags
    ["meta", { name: "keywords", content: "RedM, Red Dead Redemption 2, RDR2, RedM scripts, RedM mappings, MLO, roleplay, FiveM, RedM mods, spooni, RedM resources, RDR2 roleplay, custom props, RedM development" }],
    ["meta", { name: "author", content: "SPOONI Development" }],
    ["meta", { name: "robots", content: "index, follow" }],
    ["meta", { name: "viewport", content: "width=device-width, initial-scale=1.0" }],
    
    // Open Graph / Facebook
    ["meta", { property: "og:type", content: "website" }],
    ["meta", { property: "og:site_name", content: "SPOONI Development" }],
    ["meta", { property: "og:locale", content: "en_US" }],
    
    // Twitter Card
    ["meta", { name: "twitter:card", content: "summary" }],
    ["meta", { name: "twitter:site", content: "@spooni.development" }],
    ["meta", { name: "twitter:creator", content: "@spooni.development" }],
    
    // Canonical URL - will be overridden per page
    ["link", { rel: "canonical", href: "https://spooni.pages.dev/" }],
  ],
  
  // Transform page data for dynamic meta tags
  async transformPageData(pageData) {
    const canonicalUrl = `https://spooni.pages.dev${pageData.relativePath.replace(/\.md$/, '.html').replace(/index\.html$/, '')}`
    
    // Set default meta if not provided
    if (!pageData.frontmatter.head) pageData.frontmatter.head = []
    
    // Set page title and description dynamically
    const pageTitle = pageData.frontmatter.title ? `${pageData.frontmatter.title} | SPOONI Development` : 'SPOONI Development - RedM Scripts & Mappings'
    const pageDescription = pageData.frontmatter.description || pageData.description || 'Professional RedM scripts and high-quality mappings for Red Dead Redemption 2 roleplay servers.'
    
    // Determine keywords based on page path
    let keywords = 'RedM, Red Dead Redemption 2, RDR2, RedM scripts, RedM mappings, MLO, roleplay'
    if (pageData.relativePath.includes('doc_scripts')) {
      keywords += ', RedM hotel script, RedM attractions, RedM theater, RedM zeppelin, RedM prop loader'
    } else if (pageData.relativePath.includes('doc_mappings')) {
      keywords += ', Saint Denis MLO, Valentine MLO, Blackwater MLO, Rhodes MLO, Annesburg MLO, custom buildings'
    } else if (pageData.relativePath.includes('team')) {
      keywords += ', SPOONI team, RedM developers, 3D artists, mappers'
    } else if (pageData.relativePath.includes('partner')) {
      keywords += ', RedM partners, RedM servers, roleplay communities'
    }
    
    // Add or override meta tags
    pageData.frontmatter.head.push(
      ['meta', { property: 'og:title', content: pageTitle }],
      ['meta', { property: 'og:description', content: pageDescription }],
      ['meta', { property: 'og:url', content: canonicalUrl }],
      ['meta', { name: 'twitter:title', content: pageTitle }],
      ['meta', { name: 'twitter:description', content: pageDescription }],
      ['meta', { name: 'description', content: pageDescription }],
      ['meta', { name: 'keywords', content: keywords }],
      ['link', { rel: 'canonical', href: canonicalUrl }]
    )
  },
  
  themeConfig: {
    logo: "/spooni.webp",
    siteTitle: "SPOONI Development",
    outline: {
      level: 'deep',
      label: 'On this page',
    },
    search: {
      provider: 'local',
      options: {
        translations: {
          button: {
            buttonText: 'Search'
          }
        }
      }
    },
    nav: [
      { text: "Home", link: "/" },
      { text: "Docs", link: "/docs" },
      { text: "Props", link: "/props" },
      { text: "Team", link: "/team" },
      { text: "Partner", link: "/partner" },
    ],
    socialLinks: [
      { icon: 'github', link: 'https://github.com/Spooni-Development' },
      { icon: 'discord', link: 'https://discord.gg/spooni' },
      { icon: 'youtube', link: 'https://www.youtube.com/@Spooni.Development' },
      { icon: 'instagram', link: 'https://www.instagram.com/spooni.development' },
      {         
        icon: { svg: '<svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>TikTok</title><path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z"/></svg>' }, 
        link: 'https://www.tiktok.com/@spooni.development' 
      }
    ],
    sidebar: [
      {
        text: 'Mappings',
        collapsed: false,
        items: [

          { text: "Ambarino", collapsed: true, items:[
            {text: "🔸Hobbit House", link:'/doc_mappings/ambarino/spooni_hobbit_house'},
            {text: "🔸Moonstone Pond", link:'/doc_mappings/ambarino/spooni_moonstone_pond'},
            {text: "🔸Nordheim", link:'/doc_mappings/ambarino/spooni_nordheim'},
            {text: "🔸Wapiti", link:'/doc_mappings/ambarino/spooni_wapiti'},
          ]},

          { text: "Lemoyne", collapsed: true, items:[
            {text: "Rhodes", collapsed: true, items: [
              {text: "🔸Caravan", link:'/doc_mappings/lemoyne/rhodes/spooni_rho_caravan'},
              {text: "🔸Church", link:'/doc_mappings/lemoyne/rhodes/spooni_rho_church'},
              {text: "🔸Doctor", link:'/doc_mappings/lemoyne/rhodes/spooni_rho_doctor'},
              {text: "🔸Ranch", link:'/doc_mappings/lemoyne/rhodes/spooni_rho_ranch'},
              {text: "🔸Saloon Cellar", link:'/doc_mappings/lemoyne/rhodes/spooni_rho_saloon_cellar'},
              {text: "🔸Tailor", link:'/doc_mappings/lemoyne/rhodes/spooni_rho_tailor'},
            ]},
            {text: "St. Denis", collapsed: true, items: [
              {text: "🔸Bakery & Florist", link:'/doc_mappings/lemoyne/saint-denis/spooni_sd_bakery_florist'},
              {text: "🔸Brewery", link:'/doc_mappings/lemoyne/saint-denis/spooni_sd_brewery'},
              {text: "🔸Cart- & Woodworker", link:'/doc_mappings/lemoyne/saint-denis/spooni_sd_cart_woodworker'},              
              {text: "🔸Church", link:'/doc_mappings/lemoyne/saint-denis/spooni_sd_church'},
              {text: "🔸Courthouse", link:'/doc_mappings/lemoyne/saint-denis/spooni_sd_courthouse'},
              {text: "🔸Doctor", link:'/doc_mappings/lemoyne/saint-denis/spooni_sd_doctor'},
              {text: "🔸Farming", link:'/doc_mappings/lemoyne/saint-denis/spooni_sd_farming'},
              {text: "🔸Fight Club", link:'/doc_mappings/lemoyne/saint-denis/spooni_sd_fight_club'},
              {text: "🔸General Store", link:'/doc_mappings/lemoyne/saint-denis/spooni_sd_general_store'},
              {text: "🔸Hotel La Licorne", link:'/doc_mappings/lemoyne/saint-denis/spooni_sd_hotel_licorne'},
              {text: "🔸Jeweler", link:'/doc_mappings/lemoyne/saint-denis/spooni_sd_jeweler'},
              {text: "🔸Night Club", link:'/doc_mappings/lemoyne/saint-denis/spooni_sd_night_club'},
              {text: "🔸Palmist & Watchmaker", link:'/doc_mappings/lemoyne/saint-denis/spooni_sd_palmist'},
              {text: "🔸Police", link:'/doc_mappings/lemoyne/saint-denis/spooni_sd_police'},
              {text: "🔸Promenade", link:'/doc_mappings/lemoyne/saint-denis/spooni_sd_promenade'},
              {text: "🔸Spaldings", link:'/doc_mappings/lemoyne/saint-denis/spooni_sd_spaldings'},
              {text: "🔸Train Station", link:'/doc_mappings/lemoyne/saint-denis/spooni_sd_trainstation'},
              {text: "🔸Undertaker", link:'/doc_mappings/lemoyne/saint-denis/spooni_sd_undertaker'},
              {text: "🔸Villa 1", link:'/doc_mappings/lemoyne/saint-denis/spooni_sd_villa_1'},
              {text: "🔸Villa 2, 3 & 4", link:'/doc_mappings/lemoyne/saint-denis/spooni_sd_villa_2_3_4'},
              {text: "🔸Ped Store", link:'/doc_mappings/lemoyne/saint-denis/spooni_sd_whisker_in_the_jar'},
            ]},
            {text: "🔸Bra Storage House", link:'/doc_mappings/lemoyne/spooni_bra_storage_house'},
            {text: "🔸Bra Worker Houses", link:'/doc_mappings/lemoyne/spooni_bra_worker_houses'},
            {text: "🔸Bluewater Ranch Attic", link:'/doc_mappings/lemoyne/spooni_bulewater_ranch_attic'},
            {text: "🔸Caliga Hall", link:'/doc_mappings/lemoyne/spooni_caliga_hall'},
            {text: "🔸Hagen Orchards", link:'/doc_mappings/lemoyne/spooni_hagen_orchards'},
            {text: "🔸Pleasance Ranch", link:'/doc_mappings/lemoyne/spooni_pleasance_ranch'},
          ]},

          { text: "New Austin", collapsed: true, items:[
            {text: "Armadillo", collapsed: true, items: [
              {text: "🔸Church", link:'/doc_mappings/new-austin/armadillo/spooni_arm_church'},
              // {text: "🔸Reborn", link:'/doc_mappings/new-austin/armadillo/spooni_arm_reborn'},
            ]},
            {text: "Tumbleweed", collapsed: true, items: [
              {text: "🔸Church", link:'/doc_mappings/new-austin/tumbleweed/spooni_tum_church'},
              {text: "🔸Train Station", link:'/doc_mappings/new-austin/tumbleweed/spooni_tum_trainstation'},
            ]},
            {text: "🔸Aspen Lodge", link:'/doc_mappings/new-austin/spooni_aspen_lodge'},
            {text: "🔸Buckshot Bend", link:'/doc_mappings/new-austin/spooni_buckshot_bend'},
            {text: "🔸Cholla Springs Alchemist", link:'/doc_mappings/new-austin/spooni_cho_alchemist'},
            {text: "🔸Desert Edge Ranch", link:'/doc_mappings/new-austin/spooni_desert_edge_ranch'},
            {text: "🔸Fort Mercer", link:'/doc_mappings/new-austin/spooni_fort_mercer'},
            {text: "🔸Fort Oasis", link:'/doc_mappings/new-austin/spooni_fort_oasis'},
            {text: "🔸MacFarlane's Ranch", link:'/doc_mappings/new-austin/spooni_mac_farlanes_ranch'},
            {text: "🔸Rathskeller Fork 2", link:'/doc_mappings/new-austin/spooni_rathskeller_fork2'},
            {text: "🔸Ridgewood Farm", link:'/doc_mappings/new-austin/spooni_ridgewood_farm'},
            {text: "🔸Thieves' Landing Distillery", link:'/doc_mappings/new-austin/spooni_thl_distillery'},
            {text: "🔸Vultures Claim", link:'/doc_mappings/new-austin/spooni_vultures_claim'}, 
          ]},

          { text: "New Hanover", collapsed: true, items:[
            {text: "Annesburg", collapsed: true, items: [
              {text: "🔸Reborn 1", link:'/doc_mappings/new-hanover/annesburg/spooni_ann_reborn'},
            ]},
            {text: "Valentine", collapsed: true, items: [
              {text: "🔸Castor Ridge", link:'/doc_mappings/new-hanover/valentine/spooni_castor_ridge'},
              {text: "🔸Church", link:'/doc_mappings/new-hanover/valentine/spooni_val_church'},
              {text: "🔸Law Office", link:'/doc_mappings/new-hanover/valentine/spooni_val_law_office'},
            ]},
            {text: "Van Horn", collapsed: true, items: [
              {text: "🔸Brothel House", link:'/doc_mappings/new-hanover/van-horn/spooni_van_brothel_house'},
              {text: "🔸Reborn", link:'/doc_mappings/new-hanover/van-horn/spooni_van_reborn'},
              {text: "🔸Stable House", link:'/doc_mappings/new-hanover/van-horn/spooni_van_stable_house'},

            ]},
            {text: "🔸Bacchus Station", link:'/doc_mappings/new-hanover/spooni_bacchus_station'},
            {text: "🔸Compsons Stead", link:'/doc_mappings/new-hanover/spooni_compsons_stead'},
            {text: "🔸Cumberland Crest", link:'/doc_mappings/new-hanover/spooni_cumberland_crest'},
            {text: "🔸Dewberry Creek", link:'/doc_mappings/new-hanover/spooni_dewberry_creek'},
            {text: "🔸Emerald Ranch", link:'/doc_mappings/new-hanover/spooni_emerald_ranch'},
            {text: "🔸Fort Brennand", link:'/doc_mappings/new-hanover/spooni_fort_brennand'},
            {text: "🔸Fort Heartlands", link:'/doc_mappings/new-hanover/spooni_fort_heartlands'},
            {text: "🔸Fort Wallace", link:'/doc_mappings/new-hanover/spooni_fort_wallace'},
            {text: "🔸Greenbank Mill", link:'/doc_mappings/new-hanover/spooni_greenbank_mill'},
            {text: "🔸Oil Field Worker Houses", link:'/doc_mappings/new-hanover/spooni_oil_worker_houses'},
            {text: "🔸Riding Center", link:'/doc_mappings/new-hanover/spooni_riding_center'},
            {text: "🔸Tinkers Hill", link:'/doc_mappings/new-hanover/spooni_tinkers_hill'},
          ]},

          { text: "West Elizabeth", collapsed: true, items:[
            {text: "Blackwater", collapsed: true, items: [
              {text: "🔸Casino Ship", link:'/doc_mappings/west-elizabeth/blackwater/spooni_bla_casino_ship'},
              {text: "🔸Church", link:'/doc_mappings/west-elizabeth/blackwater/spooni_bla_church'},
              {text: "🔸Fight Club", link:'/doc_mappings/west-elizabeth/blackwater/spooni_bla_fight_club'},
              {text: "🔸Lighthouse", link:'/doc_mappings/west-elizabeth/blackwater/spooni_bla_lighthouse'},
              {text: "🔸Reborn 1", link:'/doc_mappings/west-elizabeth/blackwater/spooni_bla_reborn'},
              {text: "🔸Wisdom Manor", link:'/doc_mappings/west-elizabeth/blackwater/spooni_bla_wisdom_manor'},

            ]},
            {text: "Strawberry", collapsed: true, items: [
              {text: "🔸Bakery", link:'/doc_mappings/west-elizabeth/strawberry/spooni_straw_bakery'},
              {text: "🔸Doctor", link:'/doc_mappings/west-elizabeth/strawberry/spooni_straw_doc'},
              {text: "🔸Gunsmith", link:'/doc_mappings/west-elizabeth/strawberry/spooni_straw_gunsmith'},
              {text: "🔸Log Cabin", link:'/doc_mappings/west-elizabeth/strawberry/spooni_straw_log_cabin'},
              {text: "🔸Stable", link:'/doc_mappings/west-elizabeth/strawberry/spooni_straw_stable'},
              {text: "🔸Woodworker", link:'/doc_mappings/west-elizabeth/strawberry/spooni_straw_woodworker'},

            ]},
            {text: "🔸Krieger Ranch", link:'/doc_mappings/west-elizabeth/spooni_krieger_ranch'},
            {text: "🔸Lone Mule Stead", link:'/doc_mappings/west-elizabeth/spooni_lone_mule_stead'},
            {text: "🔸Manzanita Post", link:'/doc_mappings/west-elizabeth/spooni_manzanita_post'},
            {text: "🔸Pronghorn Ranch", link:'/doc_mappings/west-elizabeth/spooni_pronghorn_ranch'},
            {text: "🔸Valley View Ranch", link:'/doc_mappings/west-elizabeth/spooni_valley_view_ranch'},
            {text: "🔸Windmill Ridge", link:'/doc_mappings/west-elizabeth/spooni_windmill_ridge'},

          ]},
          
          { text: "Other", collapsed: false, items:[
            {text: "🔸Guarma", link:'/doc_mappings/other/spooni_guarma'},
            {text: "🔸Lodges East Pack", link:'/doc_mappings/other/spooni_lodges_east_pack'},
            {text: "🔸Lodges West Pack", link:'/doc_mappings/other/spooni_lodges_west_pack'},
            {text: "🔸Railroad", link:'/doc_mappings/other/spooni_railroad'},
            {text: "🔸Secret Cellar", link:'/doc_mappings/other/spooni_secretcellar'},
          ]},
        
        ]
      },
      {
          text: 'Scripts',
          collapsed: false,
          items: [
            { text: "Spooni", collapsed: false, items:[
              { text: "🎠 Attractions", link:'/doc_scripts/spooni/spooni_attractions' }, 
              { text: "🏠 Build my Home", link:'/doc_scripts/spooni/spooni_build_my_home' }, 
              { text: "🎡 Ferris Wheel", link:'/doc_scripts/spooni/spooni_ferriswheel' },
              { text: "🏨 Hotel", link:'/doc_scripts/spooni/spooni_hotel' },
              { text: "🗑️ Prop Deleter", link:'/doc_scripts/spooni/spooni_prop_deleter' },
              { text: "🧩 Prop Loader", link:'/doc_scripts/spooni/spooni_prop_loader' },
              { text: "🎭 Theater & Cinema", link:'/doc_scripts/spooni/spooni_showtime' },
              { text: "🎄 XMAS Calender", link:'/doc_scripts/spooni/spooni_xmas_calendar' },
              { text: "🚁 Zeppelin", link:'/doc_scripts/spooni/spooni_zeppelin' },
              { text: "Free Scripts", collapsed: true, items:[
                { text: "🏝️ Guarma Travel", link:'/doc_scripts/spooni/spooni_guarma_travel' },
                { text: "💻 HUD", link:'/doc_scripts/spooni/spooni_hud' },
                { text: "🪑 Interactions", link:'/doc_scripts/spooni/spooni_interactions' },
                { text: "📍 Job Blips", link:'/doc_scripts/spooni/spooni_job_blips' },
                { text: "🧰 Spooner", link:'/doc_scripts/spooni/spooni_spooner' },
                { text: "🌱 VegMod", link:'/doc_scripts/spooni/spooni_vegmod' },
                { text: "🛞 Vehicle Loader", link:'/doc_scripts/spooni/spooni_vehicle_loader' },
              ]},
            ]},

            { text: "Dietrich", collapsed: true, items:[
              { text: "🤠 Character Background", link:'/doc_scripts/dietrich/spooni_character_backgrounds' },
              { text: "🗺️ Map Marker", link:'/doc_scripts/dietrich/spooni_map_marker' },
              { text: "👥 Ped Manager", link:'/doc_scripts/dietrich/spooni_ped_manager' },
              { text: "🧩 Prop Placer", link:'/doc_scripts/dietrich/spooni_prop_placer' },
              { text: "📈 Stockmarket", link:'/doc_scripts/dietrich/spooni_stockmarket' },
              { text: "🔫 Weapon Controller", link:'/doc_scripts/dietrich/spooni_weapon_controller' },
              { text: "🐎 Wildhorse", link:'/doc_scripts/dietrich/spooni_wildhorse' },
            ]},
          ]
      },
    ],
    footer: {
      message: "Released under the GNU General Public License v3.0.", 
      copyright: '© 2022 - 2025 <a style="color: #f25c05;" href="https://discord.gg/spooni" target="_blank">SPOONI Development</a>',
    },   
  },

  // Vite config for bundle optimization
  vite: {
    build: {
      // Increase chunk size warning limit (VitePress docs can be large)
      chunkSizeWarningLimit: 2000,
      
      rollupOptions: {
        output: {
          // Manual chunk splitting for large libraries
          manualChunks(id) {
            // Vue core in separate chunk
            if (id.includes('node_modules/vue/') || id.includes('node_modules/@vue/')) {
              return 'vue-vendor'
            }
            // Vue Router in separate chunk
            if (id.includes('node_modules/vue-router')) {
              return 'vue-router-vendor'
            }
            // VitePress in separate chunk
            if (id.includes('node_modules/vitepress')) {
              return 'vitepress-vendor'
            }
            // Medium-zoom in separate chunk
            if (id.includes('node_modules/medium-zoom')) {
              return 'medium-zoom-vendor'
            }
            // Fuse.js in separate chunk
            if (id.includes('node_modules/fuse.js')) {
              return 'fuse-vendor'
            }
            // VitePress Tabs Plugin
            if (id.includes('node_modules/vitepress-plugin-tabs')) {
              return 'vitepress-tabs-vendor'
            }
            // All other node_modules
            if (id.includes('node_modules')) {
              return 'vendor'
            }
          }
        }
      }
    },
    
    // Dependency optimization for build issues
    optimizeDeps: {
      exclude: [
        'vitepress'
      ]
    },
    
    // SSR config for mark.js compatibility
    ssr: {
      noExternal: ['mark.js']
    }
  }
})
