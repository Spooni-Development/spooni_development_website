---
layout: home
title: Partner
prev: false
next: false

# Meta property
head:
  - - meta
    - property: og:type
      content: website
  - - meta
    - property: og:title
      content: SPOONI Development
  - - meta
    - property: og:description
      content: Scripts & Mappings
  - - meta
    - name: title
      content: SPOONI Development
  - - meta
    - name: description
      content: Scripts & Mappings
  - - link
    - rel: icon
      type: image/png
      href: logo.png
---

<script setup>
import {
  VPTeamPage,
  VPTeamPageTitle,
  VPTeamMembers,
  VPTeamPageSection
} from 'vitepress/theme'

const discord = [
    {
        avatar: 'user.png',
        name: 'Discord Partner',
        title: '...',
        links: [
            { icon: 'discord', link: 'https://discord.gg/spooni' },
        ]
    },
    {
        avatar: 'user.png',
        name: 'Discord Partner',
        title: '...',
        links: [
            { icon: 'discord', link: 'https://discord.gg/spooni' },
        ]
    },
    {
        avatar: 'user.png',
        name: 'Discord Partner',
        title: '...',
        links: [
            { icon: 'discord', link: 'https://discord.gg/spooni' },
        ]
    },
]

const streamer = [
    {
        avatar: 'user.png',
        name: 'Streamer Name',
        title: '...',
        links: [
            { icon: 'discord', link: 'https://discord.gg/spooni' },
        ]
    },
    {
        avatar: 'user.png',
        name: 'Streamer Name',
        title: '...',
        links: [
            { icon: 'discord', link: 'https://discord.gg/spooni' },
        ]
    },
    {
        avatar: 'user.png',
        name: 'Streamer Name',
        title: '...',
        links: [
            { icon: 'discord', link: 'https://discord.gg/spooni' },
        ]
    },
]

</script>

<VPTeamPage>
  <VPTeamPageTitle>
    <template #title>Our Partner</template>
    <template #lead></template>
  </VPTeamPageTitle>

<VPTeamPageSection>
    <template #title>Discord Partner</template>
    <template #lead></template>
    <template #members>
     <VPTeamMembers size="medium" :members="discord" />
    </template>
</VPTeamPageSection>

<VPTeamPageSection>
    <template #title>Streamer Partner</template>
    <template #lead></template>
    <template #members>
     <VPTeamMembers size="medium" :members="streamer" />
    </template>
</VPTeamPageSection>
</VPTeamPage>