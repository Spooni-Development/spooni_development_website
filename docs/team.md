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

const director = [
    {
        avatar: 'https://cdn.discordapp.com/avatars/271688304674471937/e29d97d1eb733dbbb3040671d09e8be1.webp?size=128',
        name: 'Elitefighter',
        title: 'Founder',
        links: [
            { icon: 'github', link: 'https://github.com/Masterspooni' },
            { icon: 'discord', link: 'https://discordapp.com/users/271688304674471937/' },
        ]
    },
]

const supervisor = [
    {
        avatar: 'https://cdn.discordapp.com/avatars/478599137563115520/857c45b96fb0f0829578d14f895cd3c5.webp?size=128',
        name: 'FINN',
        title: 'Lead Mapper',
        links: [
            { icon: 'discord', link: 'https://discordapp.com/users/478599137563115520/' },
        ]
    },
]

const artist = [
    {
        avatar: 'https://cdn.discordapp.com/avatars/540860975218163724/d6f5541116792884ee7a3aeee462e450.webp?size=128',
        name: 'Arthur Mottergan',
        title: 'Lead 3D Artist',
        links: [
            { icon: 'github', link: 'https://github.com/Simastrix' },
            { icon: 'discord', link: 'https://discordapp.com/users/540860975218163724/' },
        ]
    },
    {
        avatar: 'https://cdn.discordapp.com/avatars/335141940561575936/188b5cb17d826ff98cad942e9123703f.webp?size=128',
        name: 'Coral Star',
        title: '3D Artist',
        links: [
            { icon: 'discord', link: 'https://discordapp.com/users/335141940561575936/' },
        ]
    },
    {
        avatar: 'https://cdn.discordapp.com/avatars/1033065913219555358/70f51bdc031fc05a47f6bfb428af89e4.webp?size=128',
        name: 'Howard',
        title: '3D Artist',
        links: [
            { icon: 'discord', link: 'https://discordapp.com/users/1033065913219555358/' },
        ]
    },
    {
        avatar: 'https://cdn.discordapp.com/avatars/768852909248610365/03794a5ef7af0c08b03b89450c85f05d.webp?size=128',
        name: 'Lovie',
        title: '3D Artist',
        links: [
            { icon: 'discord', link: 'https://discordapp.com/users/768852909248610365/' },
        ]
    },
]

const developer = [
    {
        avatar: 'https://cdn.discordapp.com/avatars/549911000976195590/94bdab75a18e8191e71478bcc86e414d.webp?size=128',
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
]

const mapper = [
    {
        avatar: 'https://cdn.discordapp.com/avatars/331861578842636301/d6afea1b6c57dfbf6f4dbbea1d4315b0.webp?size=128',
        name: 'Alina',
        title: 'Mapper',
        links: [
            { icon: 'discord', link: 'https://discordapp.com/users/331861578842636301/' },
        ]
    },
    {
        avatar: 'https://cdn.discordapp.com/avatars/590183982885502998/069fccc93c80de758ed1b212511e8c38.webp?size=128',
        name: 'Crossvok',
        title: 'Mapper',
        links: [
            { icon: 'discord', link: 'https://discordapp.com/users/590183982885502998/' },
        ]
    },
    {
        avatar: 'https://cdn.discordapp.com/avatars/548973605724225543/a_4234ebe024fe386d7a8b719aa0c508ea.webp?size=128',
        name: 'J.A.R.V.I.S.',
        title: 'Mapper',
        links: [
            { icon: 'discord', link: 'https://discordapp.com/users/548973605724225543/' },
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
    <template #title>Director</template>
    <template #lead></template>
    <template #members>
     <VPTeamMembers size="medium" :members="director" />
    </template>
</VPTeamPageSection>

<VPTeamPageSection>
    <template #title>Supervisor</template>
    <template #lead></template>
    <template #members>
     <VPTeamMembers size="medium" :members="supervisor" />
    </template>
</VPTeamPageSection>

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
</VPTeamPage>