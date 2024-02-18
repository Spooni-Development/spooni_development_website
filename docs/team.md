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
        avatar: 'https://cdn.discordapp.com/avatars/271688304674471937/e29d97d1eb733dbbb3040671d09e8be1.webp?size=128',
        name: 'Elitefighter',
        title: 'Lead 3D Artist',
        links: [
            { icon: 'github', link: 'https://github.com/Masterspooni' },
            { icon: 'discord', link: 'https://discordapp.com/users/989576880938176583/' },
        ]
    },
    {
        avatar: 'https://cdn.discordapp.com/avatars/540860975218163724/d6f5541116792884ee7a3aeee462e450.webp?size=128',
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
        avatar: 'https://cdn.discordapp.com/avatars/352854698660724738/97f4a19413d024afb72a37aedf1c190d.webp?size=128',
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
        avatar: 'https://cdn.discordapp.com/avatars/159488771711172608/9a30377851c92d6fc0b8f195ab1da2d7.webp?size=128',
        name: 'IAMGROOT',
        title: 'Developer',
        links: [
            { icon: 'github', link: 'https://github.com/TheLastSamurai123' },
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
        avatar: 'https://cdn.discordapp.com/avatars/478599137563115520/8ba713ec93a69a43b2266562ba94e6c6.webp?size=128',
        name: 'FINN',
        title: 'Lead Mapper',
        links: [
            { icon: 'discord', link: 'https://discordapp.com/users/1009153559029366838/' },
        ]
    },
    {
        avatar: 'https://cdn.discordapp.com/avatars/331861578842636301/df4061d35e18b740de40906e069f1586.webp?size=128',
        name: 'Alina',
        title: 'Mapper',
        links: [
            { icon: 'discord', link: 'https://discordapp.com/users/893217081900802101/' },
        ]
    },
    {
        avatar: 'https://cdn.discordapp.com/avatars/590183982885502998/069fccc93c80de758ed1b212511e8c38.webp?size=128',
        name: 'Crossvok',
        title: 'Mapper',
        links: [
            { icon: 'discord', link: 'https://discordapp.com/users/1198620250774716563/' },
        ]
    },
    {
        avatar: 'https://cdn.discordapp.com/avatars/548973605724225543/a_4234ebe024fe386d7a8b719aa0c508ea.webp?size=128',
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