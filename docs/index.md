---
layout: home
title: Home
description: SPOONI Development offers premium RedM scripts and detailed mappings for Red Dead Redemption 2 roleplay servers. Professional quality MLOs, interactive scripts, and custom props for immersive Wild West experiences.
head:
  - - meta
    - name: keywords
      content: RedM, Red Dead Redemption 2, RDR2 roleplay, RedM scripts, RedM mappings, MLO, custom props, RedM resources, VORP, RSG, RPX, spooni development, RedM showcase server
  - - meta
    - property: og:image
      content: https://spooni.pages.dev/spooni.webp

hero: 
  name: SPOONI
  text: Development
  image:
    src: /spooni.webp
    alt: SPOONI Development logo
  tagline: Nothing is Impossible
  actions:
    - theme: brand
      text: Tebex Store
      link: https://spooni-mapping.tebex.io/
    - theme: alt
      text: Map
      link: https://spooni.de/rdr2/
features:
  - icon:
      src: /icons/users.svg
      alt: About us
      width: 32
      height: 32
    title: About us
    details: SPOONI Development specializes in professional scripts and mappings for RedM. With our experienced team, we create detailed maps, immersive gameplay experiences, and powerful scripts that take your roleplay to the next level. Whether it's new buildings, interactive systems, or fully customized mechanics – we deliver quality with passion.
    link: https://discord.gg/spooni
    linkText: Contact Us
  - icon:
      src: /icons/server.svg
      alt: Showcase Server
      width: 32
      height: 32
    title: Showcase Server
    details: Want to test our mappings and scripts before purchasing? On our Showcase Server, you can explore all products in a real gameplay environment. Check out our detailed mappings, test scripts in action, and see the quality of our work for yourself. Join the server and experience Spooni Development firsthand!
    link: redm://connect/51.77.90.75:30120
    linkText: Join Server
  - icon:
      src: /icons/settings.svg
      alt: Server Service
      width: 32
      height: 32
    title: Server Service
    details: In partnership with Iceline Hosting, we offer tailored solutions for RedM servers. Whether you need a powerful server for your project or assistance with setup, we've got you covered. Our team handles the entire configuration, optimizes performance, and ensures your server runs smoothly from day one.
    link: /service
    linkText: Get Started
---

<div class="scroll-arrow-container">
  <a href="#sponsors" class="scroll-arrow-link" aria-label="Scroll to Sponsored Projects">
    <svg class="scroll-arrow" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
      <polyline points="6 9 12 15 18 9"></polyline>
    </svg>
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
        avatar: '/sponsor/fat-lady.webp',
        name: 'FAT LADY',
        title: 'RDR2 Roleplay',
        links: [
            { icon: 'discord', link: 'https://discord.gg/fatlady' },
        ]
    },
    {
        avatar: '/sponsor/legends-rp.webp',
        name: 'Legends - RP',
        title: 'RDR2 Roleplay',
        links: [
            { icon: 'discord', link: 'https://discord.gg/Gu78WcGh7V' },
        ]
    },
    {
        avatar: '/sponsor/syn-county.webp',
        name: 'Syn County',
        title: 'RDR2 Roleplay',
        links: [
            { icon: 'discord', link: 'https://discord.gg/syncounty' },
        ]
    },
    {
        avatar: '/sponsor/tld.webp',
        name: 'The Last Days',
        title: 'RDR2 Survival Roleplay',
        links: [
            { icon: 'discord', link: 'https://discord.gg/cdmf4E7DT6' },
        ]
    },
    {
        avatar: '/sponsor/american-dreams.webp',
        name: 'American Dreams',
        title: 'RDR2 Roleplay',
        links: [
            { icon: 'discord', link: 'https://discord.gg/eck4zVn3Zm' },
        ]
    },
    {
        avatar: 'icons/user.svg',
        name: 'Projekt Babylon',
        title: 'RDR2 Roleplay',
        links: [
            { icon: 'discord', link: 'https://discord.gg/At2xvpDtK7' },
        ]
    },
    {
        avatar: '/sponsor/golden-plains.webp',
        name: 'Golden Plains',
        title: 'RDR2 Roleplay',
        links: [
            { icon: 'discord', link: 'https://discord.gg/tPHPT3fzev' },
        ]
    },
    {
        avatar: '/sponsor/gamblers-ghost.webp',
        name: 'Gamblers Ghost',
        title: 'RDR2 Roleplay',
        links: [
            { icon: 'discord', link: 'https://discord.gg/TSzFmMVNWj' },
        ]
    },
    {
        avatar: '/sponsor/mist-mountain.webp',
        name: 'Misty Mountain',
        title: 'RDR2 Roleplay',
        links: [
            { icon: 'discord', link: 'https://discord.gg/misty' },
        ]
    },
    {
        avatar: '/sponsor/la-hermandad-roleplay.webp',
        name: 'La Hermandad Roleplay',
        title: 'RDR2 Roleplay',
        links: [
            { icon: 'discord', link: 'https://discord.gg/lahermandadrp' },
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