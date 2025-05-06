---
layout: home
title: Home

hero: 
  name: SPOONI
  text: Development
  image:
    src: /logo.svg
    alt: SPOONI Development logo
  tagline: Nothing is Impossible
  actions:
    - theme: brand
      text: Tebex Store
      link: https://spooni-mapping.tebex.io/
    - theme: alt
      text: Map
      link: https://spooni.de/rdr2/
    - theme: alt
      text: Props
      link: https://spooni.de/props/
features:
  - icon: ℹ️
    title: About us
    details: SPOONI Development specializes in professional scripts and mappings for RedM. With our experienced team, we create detailed maps, immersive gameplay experiences, and powerful scripts that take your roleplay to the next level. Whether it’s new buildings, interactive systems, or fully customized mechanics – we deliver quality with passion.
    link: https://discord.gg/spooni
    linkText: Contact us.
  - icon: 💫
    title: Showcase Server
    details: Want to test our mappings and scripts before purchasing? On our Showcase Server, you can explore all products in a real gameplay environment. Check out our detailed mappings, test scripts in action, and see the quality of our work for yourself. Join the server and experience Spooni Development firsthand!
    link: redm://connect/51.77.90.75:30120
    linkText: Join the Showcase Server.
  - icon: {  
      src: /iceline.png,  
      alt: Iceline Hosting, 
      width: 55px, 
      height: 55px,  
    }
    title: Iceline Hosting
    details: In partnership with Iceline Hosting, we offer tailored solutions for RedM servers. Whether you need a powerful server for your project or assistance with setup, we’ve got you covered. Our team handles the entire configuration, optimizes performance, and ensures your server runs smoothly from day one.
    link: https://iceline-hosting.com/spooni
    linkText: Get your server.
---

<div class="center-arrow">
  <a href="#sponsors" style="text-decoration: none;">
    <img src="/arrow.svg" alt="Scroll Down" style="width: 75px; height: 75px;" />
  </a>
</div>

<script setup>
import {
  VPTeamPage,
  VPTeamPageTitle,
  VPTeamMembers,
  VPTeamPageSection
} from 'vitepress/theme'

const sponsors = [
  {
    avatar: 'https://cdn.discordapp.com/icons/1317242352682663937/e821fa7ea65a8a9968d92f761a54142d.webp?size=128',
    name: 'FAT LADY',
    title: 'RDR2 Roleplay',
    links: [
        { icon: 'discord', link: 'https://discord.gg/fatlady' },
    ]
  },
  {
    avatar: 'https://cdn.discordapp.com/icons/1070353246121623594/1c6f3b5fe4b80955a8d43824b057d820.webp?size=128',
    name: 'The Last Days',
    title: 'RDR2 Survial Roleplay',
    links: [
        { icon: 'discord', link: 'https://discord.gg/cdmf4E7DT6' },
    ]
  },
  {
    avatar: 'https://cdn.discordapp.com/icons/1153427642297614398/a_deec25fe81c88ac8d5cd8e58539da396.webp?size=128',
    name: 'American Dreams',
    title: 'RDR2 Roleplay',
    links: [
        { icon: 'discord', link: 'https://discord.gg/eck4zVn3Zm' },
    ]
  },
  {
    avatar: 'https://cdn.discordapp.com/icons/1262666167089369119/183cf88a13fc4739fa4097850ae88cc4.webp?size=128',
    name: 'Babylon 1918',
    title: 'RDR2 Roleplay',
    links: [
        { icon: 'discord', link: 'https://discord.gg/UKDZ5euhd5' },
    ]
  },
  {
    avatar: 'https://cdn.discordapp.com/icons/1143862512937336933/99dec736bccbd1b0902d8f613eec5075.webp?size=128',
    name: 'Golden Plains',
    title: 'RDR2 Roleplay',
    links: [
        { icon: 'discord', link: 'https://discord.gg/MFnB9BDcYP' },
    ]
  },
  {
    avatar: 'https://cdn.discordapp.com/icons/1225905970035822734/3ac67d6e5c9511f452016648ee37f136.webp?size=128',
    name: 'Bluestone Falls',
    title: 'RDR2 Roleplay',
    links: [
        { icon: 'discord', link: 'https://discord.gg/6j83qWXEXm' },
    ]
  },
  {
    avatar: 'https://cdn.discordapp.com/icons/939204524466393149/dafafab983a9061e4bc87a1dd263e188.webp?size=128',
    name: 'Misty Mountain',
    title: 'RDR2 Roleplay',
    links: [
        { icon: 'discord', link: 'https://discord.gg/8Azu5NGUGn' },
    ]
  },
  {
    avatar: 'https://cdn.discordapp.com/icons/613827325225861130/82329991f11e62a7a860ac2ee31525aa.webp?size=128',
    name: 'La Hermandad Roleplay',
    title: 'RDR2 Roleplay',
    links: [
        { icon: 'discord', link: 'https://discord.gg/la-hermandad-roleplay-613827325225861130' },
    ]
  },
  {
      avatar: 'https://cdn.discordapp.com/icons/1217371173319348266/84f97ee9178d0d52d354d9adb670be1f.webp?size=128',
    name: 'Spirit Frontier 1899',
    title: 'RDR2 Roleplay',
    links: [
        { icon: 'discord', link: 'https://discord.gg/4mfa4JdKcA' },
    ]
  },
]
</script>

<VPTeamPage id="sponsors">
  <VPTeamPageTitle>
    <template #title>Sponsored projects</template>
  </VPTeamPageTitle>
  <VPTeamMembers size="small" :members="sponsors" />
</VPTeamPage>