---
layout: home
title: Home

hero:
  name: SPOONI
  text: Development
  image:
    src: /logo.png
    alt: SPOONI Development logo
  tagline: Scripts & Mappings
  actions:
    - theme: brand
      text: Tebex Store
      link: https://spooni-mapping.tebex.io/
    - theme: alt
      text: Props
      link: https://spooni.de/props/

features:
  - icon: 🗿
    title: Mappings
    details: How long have you dreamed of living in your own home or simply benefiting from the city's most important properties? With great attention to detail and authenticity, we offer excellent mappings. Our goal is to give you a new perspective on your favorite places and integrate them seamlessly into your roleplay.

  - icon: 💡
    title: Custom Request
    details: Do you have a personal request? We also offer private commissions. Whether it's a script, mapping or placeable props - anything is possible. With specific ideas from you and our understanding of authenticity and good role-playing, we can help you fulfill your wish and put a smile on your face.
  - icon: 💻
    title: Server Service 
    details: Do you want your own RedM server? But you are not familiar with the technology or have problems setting it up? No problem! Get in touch with us on our Discord. Our expert developers can help you with everything from advice to setting up and troubleshooting your server.
---

<div class="center-arrow">
  <a href="#sponsors" style="text-decoration: none;">
    <img src="/arrow.png" alt="Scroll Down" style="width: 75px; height: 75px;" />
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
      avatar: 'https://cdn.discordapp.com/icons/1080957020796096664/27692dfcbf10cf409412f4c213eda4cf.webp?size=128',
      name: 'n-core',
      title: 'RDR2 Roleplay Server',
      links: [
          { icon: 'discord', link: 'https://discord.gg/3Kbjdu5cFZ' },
      ]
    },
    {
      avatar: 'https://cdn.discordapp.com/icons/1153427642297614398/a_deec25fe81c88ac8d5cd8e58539da396.webp?size=128',
      name: 'American Dreams',
      title: 'RDR2 Roleplay Server',
      links: [
          { icon: 'discord', link: 'https://discord.gg/eck4zVn3Zm' },
      ]
    },
    {
      avatar: 'https://cdn.discordapp.com/icons/1262666167089369119/705dbb0c48c53ddd8c824649b6d0a662.webp?size=128',
      name: 'Babylon 1819',
      title: 'RDR2 Roleplay Server',
      links: [
          { icon: 'discord', link: 'https://discord.gg/UKDZ5euhd5' },
      ]
    },
    {
      avatar: 'https://cdn.discordapp.com/icons/1052829950119530547/73dbc607b1932d82bb654668938ff6cd.webp?size=128',
      name: 'Last Hope RP',
      title: 'RDR2 Roleplay Server',
      links: [
          { icon: 'discord', link: 'https://discord.gg/7n3wf96RpZ' },
      ]
    },
    {
      avatar: 'https://cdn.discordapp.com/icons/1143862512937336933/99dec736bccbd1b0902d8f613eec5075.webp?size=128',
      name: 'Golden Plains',
      title: 'RDR2 Roleplay Server',
      links: [
          { icon: 'discord', link: 'https://discord.gg/MFnB9BDcYP' },
      ]
    },
    {
      avatar: 'https://cdn.discordapp.com/icons/1251628443104448714/ec83d24a2a9c877580bb8aba3aa68a46.webp?size=128',
      name: 'WILD CREEK RP',
      title: 'RDR2 Roleplay Server',
      links: [
          { icon: 'discord', link: 'https://discord.gg/nyvjmTruJS' },
      ]
    },
    {
      avatar: 'https://cdn.discordapp.com/icons/1225905970035822734/3ac67d6e5c9511f452016648ee37f136.webp?size=128',
      name: 'Bluestone Falls',
      title: 'RDR2 Roleplay Server',
      links: [
          { icon: 'discord', link: 'https://discord.gg/6j83qWXEXm' },
      ]
    },
    {
        avatar: 'https://cdn.discordapp.com/icons/939204524466393149/dafafab983a9061e4bc87a1dd263e188.webp?size=128',
        name: 'Misty Mountain',
        title: 'RDR2 Roleplay Server',
        links: [
            { icon: 'discord', link: 'https://discord.gg/8Azu5NGUGn' },
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