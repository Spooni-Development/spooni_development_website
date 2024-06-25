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
        avatar: 'https://cdn.discordapp.com/avatars/478599137563115520/49f8783229956455cc764198834e711d.webp?size=128',
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
        avatar: 'https://cdn.discordapp.com/avatars/1033065913219555358/70f51bdc031fc05a47f6bfb428af89e4.webp?size==128',
        name: 'Howard',
        title: '3D Artist',
        links: [
            { icon: 'discord', link: 'https://discordapp.com/users/1033065913219555358/' },
        ]
    },
    {
        avatar: 'https://cdn.discordapp.com/avatars/335141940561575936/9f67e8070eabc252309b4a51b52f4784.webp?size=128',
        name: 'CoralStar',
        title: 'Junior 3D Artist',
        links: [
            { icon: 'discord', link: 'https://discordapp.com/users/335141940561575936/' },
        ]
    },
    {
        avatar: 'https://cdn.discordapp.com/avatars/768852909248610365/03794a5ef7af0c08b03b89450c85f05d.webp?size=128',
        name: 'Lovie',
        title: 'Junior 3D Artist',
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
        avatar: 'https://cdn.discordapp.com/avatars/590183982885502998/3b1dd4aa81a2767e98c1f025253225c0.webp?size=128',
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
    {
        avatar: 'https://cdn.discordapp.com/avatars/355024108301582349/176c9ceeaea32b91580c6c722de4cd12.webp?size=128',
        name: 'Leesh',
        title: 'Mapper',
        links: [
            { icon: 'discord', link: 'https://discordapp.com/users/355024108301582349/' },
        ]
    },
    {
        avatar: 'https://cdn.discordapp.com/avatars/236592676449943552/26a62fc46a38af4eefbc4c76aec12b1d.webp?size=128',
        name: 'SkouJ',
        title: 'Mapper',
        links: [
            { icon: 'discord', link: 'https://discordapp.com/users/236592676449943552/' },
        ]
    },
    {
        avatar: 'https://cdn.discordapp.com/avatars/404260740275503105/361c0278e0c0acabc95895dd68b1e749.webp?size=128',
        name: 'Sprudeli',
        title: 'Mapper',
        links: [
            { icon: 'discord', link: 'https://discordapp.com/users/404260740275503105/' },
        ]
    },
    {
        avatar: 'https://cdn.discordapp.com/avatars/459014447881781248/efa6831ca0e0bd5617dd2d21caa70922.webp?size=128',
        name: 'Yeehaw Ren',
        title: 'Mapper',
        links: [
            { icon: 'discord', link: 'https://discordapp.com/users/459014447881781248/' },
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