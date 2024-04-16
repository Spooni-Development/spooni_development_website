export default {
  base: "/",
  title: "SPOONI Development",
  description: "SPOONI Development",
  lastUpdated: true,
  cleanUrls: true,
  head: [
    [
      "link",
      { rel: "icon", type: "image/png", sizes: "64x64", href: "/logo.png" },
    ],
    [
      "link",
      {
        rel: "stylesheet",
        href: "https://unpkg.com/tailwindcss@2.0.4/dist/tailwind.min.css",
      },
    ],
  ],
  themeConfig: {
    logo: "/logo.png",
    siteTitle: "SPOONI Development",
    outline: "deep",
    nav: [
      { text: "Docs", link: "/docs" },
      // { text: "Roadmap", link: "/roadmap" },
      { text: "MICO", link: "/mico" },
      { text: "Team", link: "/team" },
    ],
    socialLinks: [
      { icon: 'github', link: 'https://github.com/Spooni-Development' },
      { icon: 'discord', link: 'https://discord.gg/spooni' },
      { icon: 'youtube', link: 'https://www.youtube.com/@masterfighter2698' },
    ],
    sidebar: [
      {
        text: 'Mappings',
        collapsed: true,
        items: [

          { text: "Ambarino", collapsed: true, items:[
            {text: "🔸Bacchus Station", link:'/doc_mappings/ambarino/spooni_bacchus_station'},
            {text: "🔸Hobbit House", link:'/doc_mappings/ambarino/spooni_hobbit_house'},
            {text: "🔸Moonstone Pond", link:'/doc_mappings/ambarino/spooni_moonstone_pond'},

          ]},

          { text: "Lemoyne", collapsed: true, items:[
            // {text: "Rhodes", collapsed: true, items: [
            // ]},
            {text: "St. Denis", collapsed: true, items: [
              // {text: "🔸Bake + Flor + Brew", link:'/doc_mappings/lemoyne/spooni_sd_bake_flor_brew'},
              {text: "🔸Cart + Woodworker", link:'/doc_mappings/lemoyne/spooni_sd_cart_woodworker'},              
              {text: "🔸Church", link:'/doc_mappings/lemoyne/spooni_sd_church'},
              {text: "🔸Courthouse", link:'/doc_mappings/lemoyne/spooni_sd_courthouse'},
              {text: "🔸Farming", link:'/doc_mappings/lemoyne/spooni_sd_farming'},
              {text: "🔸Fight Club", link:'/doc_mappings/lemoyne/spooni_sd_fight_club'},
              // {text: "🔸Furniture", link:'/doc_mappings/lemoyne/spooni_sd_furniture'},
              {text: "🔸General Store", link:'/doc_mappings/lemoyne/spooni_sd_general_store'},
              {text: "🔸Hotel La Licorne", link:'/doc_mappings/lemoyne/spooni_sd_hotel_licorne'},
              {text: "🔸Jeweler", link:'/doc_mappings/lemoyne/spooni_sd_jeweler'},
              {text: "🔸Newspaper", link:'/doc_mappings/lemoyne/spooni_sd_newspaper'},
              // {text: "🔸Police Station", link:'/doc_mappings/lemoyne/spooni_sd_policestation'},
              // {text: "🔸Slums", link:'/doc_mappings/lemoyne/spooni_sd_slums'},
              {text: "🔸Spaldings", link:'/doc_mappings/lemoyne/spooni_sd_spaldings'},
              {text: "🔸Train Station", link:'/doc_mappings/lemoyne/spooni_sd_trainstation'},
              {text: "🔸Villa 1", link:'/doc_mappings/lemoyne/spooni_sd_villa_1'},
              // {text: "🔸Warehouse", link:'/doc_mappings/lemoyne/spooni_sd_warehouse'},
            ]},
            {text: "🔸Bra Storage House", link:'/doc_mappings/lemoyne/spooni_bra_storage_house'},
            {text: "🔸Bra Worker Houses", link:'/doc_mappings/lemoyne/spooni_bra_worker_houses'},
            {text: "🔸Caliga Hall", link:'/doc_mappings/lemoyne/spooni_caliga_hall'},
          ]},

          { text: "New Austin", collapsed: true, items:[
            // {text: "Armadillo", collapsed: true, items: [
            // ]},
            // {text: "Tumbleweed", collapsed: true, items: [
            // ]},
            {text: "🔸MacFarlane's Ranch", link:'/doc_mappings/new-austin/spooni_mac_farlanes_ranch'},
            {text: "🔸Rathskeller Fork", link:'/doc_mappings/new-austin/spooni_rathskeller_fork'},
            {text: "🔸Thieves' Landing Distillery", link:'/doc_mappings/new-austin/spooni_thl_distillery'},
          ]},

          { text: "New Hanover", collapsed: true, items:[
            {text: "Annesburg", collapsed: true, items: [
              {text: "🔸Reborn 1", link:'/doc_mappings/new-hanover/spooni_ann_reborn'},
            ]},
            {text: "Valentine", collapsed: true, items: [
              {text: "🔸Church", link:'/doc_mappings/new-hanover/spooni_val_church'},
              {text: "🔸Castor Ridge", link:'/doc_mappings/new-hanover/spooni_castor_ridge'},
              {text: "🔸Law Office", link:'/doc_mappings/new-hanover/spooni_val_law_office'},
            ]},
            {text: "Van Horn", collapsed: true, items: [
              {text: "🔸Brothel House", link:'/doc_mappings/new-hanover/spooni_van_brothel_house'},
              {text: "🔸Stable House", link:'/doc_mappings/new-hanover/spooni_van_stable_house'},

            ]},
            {text: "🔸Cumberland Crest", link:'/doc_mappings/new-hanover/spooni_cumberland_crest'},
            {text: "🔸Dewberry Creek", link:'/doc_mappings/new-hanover/spooni_dewberry_creek'},
            {text: "🔸Emerald Ranch Saloon", link:'/doc_mappings/new-hanover/spooni_emerald_saloon'},
          ]},

          { text: "West Elizabeth", collapsed: true, items:[
            {text: "Blackwater", collapsed: true, items: [
              {text: "🔸Reborn 1", link:'/doc_mappings/west-elizabeth/spooni_bla_reborn'},
            ]},
            {text: "Strawberry", collapsed: true, items: [
              {text: "🔸Stable", link:'/doc_mappings/west-elizabeth/spooni_straw_stable'},
            ]},
            {text: "🔸Lone Mule Stead", link:'/doc_mappings/west-elizabeth/spooni_lone_mule_stead'},
            {text: "🔸Manzanita Post", link:'/doc_mappings/west-elizabeth/spooni_manzanita_post'},
            {text: "🔸Pronghorn Ranch", link:'/doc_mappings/west-elizabeth/spooni_pronghorn_ranch'},
            {text: "🔸Valley View Ranch", link:'/doc_mappings/west-elizabeth/spooni_valley_view_ranch'},
          ]},

          
          { text: "Other", collapsed: true, items:[
            {text: "🔸Secret Cellar", link:'/doc_mappings/other/spooni_secretcellar'},
          ]},
        
        ]
      },
      {
          text: 'Scripts',
          collapsed: true,
          items: [
            // { text: "💀 Blackmarket", link:'/doc_scripts/spooni/spooni_blackmarket' },
            // { text: "🏨 Hotel", link:'/doc_scripts/spooni/spooni_hotel' },
            { text: "🏠 Build my Home", link:'/doc_scripts/spooni/spooni_build_my_home' },
            { text: "🪑 Interactions", link:'/doc_scripts/spooni/spooni_interactions' },
            { text: "📍 Job Blips", link:'doc_scripts/spooni/spooni_jobblips' },
            { text: "💻 Spooner", link:'doc_scripts/spooni/spooni_spooner' },
            // { text: "🏹 Tippi", link:'/doc_scripts/spooni/spooni_tippi' },
            { text: "🌱 VegMod", link:'doc_scripts/spooni/spooni_vegmod' },
            // { text: "🎄 Xmas", link:'/doc_scripts/spooni/spooni_xmas' },

            { text: "DrShwaggins Scripts", collapsed: true, items:[
              { text: "💵 Billing", link:'doc_scripts/drshwaggins/dl_advancedbilling' },
              { text: "🏪 Stores", link:'doc_scripts/drshwaggins/dl_advancedstores' },
              { text: "🎥 Cutscenes", link:'doc_scripts/drshwaggins/dl_cutscenes' },
              { text: "💾 DB Backup", link:'doc_scripts/drshwaggins/dl_dbbackup' },
              { text: "🍊 Farmroutes", link:'doc_scripts/drshwaggins/dl_farmroutes' },
              { text: "🪓 Lumberjack", link:'doc_scripts/drshwaggins/dl_lumberjack' },
              { text: "🧮 Society", link:'doc_scripts/drshwaggins/dl_society' },
              { text: "📦 Storages", link:'doc_scripts/drshwaggins/dl_storages' },
              { text: "⚔️ Whitelist", link:'doc_scripts/drshwaggins/dl_questionwhitelist' },
            ]},
          ]
      },
    ],
    footer: {
      message: "Released under the GNU General Public License v3.0.",
      copyright: 'Copyright © 2022 SPOONI Development',
    },
  },
};
