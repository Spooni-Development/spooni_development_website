---
layout: home
title: Team
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

const artist = [
        {
        avatar: 'https://avatars.githubusercontent.com/u/127257627?v=4',
        name: 'Elitefighter',
        title: 'Lead 3D Artist',
        links: [
            { icon: 'github', link: 'https://github.com/Masterspooni' },
            { icon: 'discord', link: 'https://discordapp.com/users/989576880938176583/' },
        ]
    },
    {
        avatar: 'user.png',
        name: 'Arthur Mottergan',
        title: '3D Artist',
        links: [
            { icon: 'github', link: 'https://github.com/Simastrix' },
            { icon: 'discord', link: 'https://discordapp.com/users/540860975218163724/' },
        ]
    },
]

const developer = [
    {
        avatar: 'https://avatars.githubusercontent.com/u/111930499?v=4',
        name: 'Emotion',
        title: 'Developer',
        links: [
            { icon: 'github', link: 'https://github.com/Emotion06' },
            { icon: 'discord', link: 'https://discordapp.com/users/549911000976195590/' },
        ]
    },
    {
        avatar: 'user.png',
        name: 'DrShwaggins',
        title: 'Developer',
        links: [
            { icon: 'discord', link: 'https://discordapp.com/users/352854698660724738/' },
        ]
    },
    {
        avatar: 'user.png',
        name: 'LeFruJohn',
        title: 'Developer',
        links: [
            { icon: 'discord', link: 'https://discordapp.com/users/893217081900802101/' },
        ]
    },
    {
        avatar: 'user.png',
        name: 'iamgroot',
        title: 'Developer',
        links: [
            { icon: 'github', link: 'https://github.com/alexguirre' },
            { icon: 'discord', link: 'https://discordapp.com/users/159488771711172608/' },
        ]
    },
    {
        avatar: 'https://avatars.githubusercontent.com/u/85403339?v=4',
        name: 'i3ucky',
        title: 'Developer',
        links: [
            { icon: 'github', link: 'https://github.com/i3ucky' },
            { icon: 'discord', link: 'https://discordapp.com/users/484326762889740308/' },
        ]
    },
]

const mapper = [
    {
        avatar: 'user.png',
        name: 'FINN',
        title: 'Lead Mapper',
        links: [
            { icon: 'discord', link: 'https://discordapp.com/users/1009153559029366838/' },
        ]
    },
    {
        avatar: 'user.png',
        name: 'Alina',
        title: 'Mapper',
        links: [
            { icon: 'discord', link: 'https://discordapp.com/users/893217081900802101/' },
        ]
    },
    {
        avatar: 'user.png',
        name: 'Crossvok',
        title: 'Mapper',
        links: [
            { icon: 'discord', link: 'https://discordapp.com/users/1198620250774716563/' },
        ]
    },
    {
        avatar: 'user.png',
        name: 'J.A.R.V.I.S.',
        title: 'Mapper',
        links: [
            { icon: 'discord', link: 'https://discordapp.com/users/1198620462675132446/' },
        ]
    },
]

const designer = [
    {
        avatar: 'user.png',
        name: 'Leander',
        title: 'Designer',
        links: [
            { icon: 'discord', link: 'https://discordapp.com/users/364021054198251531/' },
        ]
    },
]

</script>

<VPTeamPage>
  <VPTeamPageTitle>
    <template #title>Our Team</template>
    <template #lead></template>
  </VPTeamPageTitle>

  <VPTeamPageSection>
    <template #title>3D Artists</template>
    <template #lead></template>
    <template #members>
     <VPTeamMembers size="medium" :members="artist" />
    </template>
  </VPTeamPageSection>

  <VPTeamPageSection>
    <template #title>Developers</template>
    <template #lead></template>
    <template #members>
     <VPTeamMembers size="medium" :members="developer" />
    </template>
  </VPTeamPageSection>

  <VPTeamPageSection>
    <template #title>Mappers</template>
    <template #lead></template>
    <template #members>
     <VPTeamMembers size="medium" :members="mapper" />
    </template>
  </VPTeamPageSection>

  <VPTeamPageSection>
    <template #title>Designer</template>
    <template #lead></template>
    <template #members>
     <VPTeamMembers size="medium" :members="designer" />
    </template>
  </VPTeamPageSection>
</VPTeamPage>