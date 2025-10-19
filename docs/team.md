---
layout: page
title: Team
sidebar: false
description: Meet the talented team behind SPOONI Development - experienced 3D artists, mappers, developers, and creators building premium RedM content for Red Dead Redemption 2 roleplay communities.
head:
  - - meta
    - name: keywords
      content: SPOONI team, RedM developers, 3D artists, RedM mappers, game developers, content creators, RDR2 modding team, SPOONI staff
  - - meta
    - property: og:image
      content: https://spooni.pages.dev/icons/logo.svg
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
            avatar: '/icons/logo.svg',
            name: 'SPOONI',
            title: 'Founder & Director',
            links: [
                { icon: 'github', link: 'https://github.com/Masterspooni' },
                { icon: 'discord', link: 'https://discordapp.com/users/271688304674471937/' },
            ]
        },
    ]

    const supervisor = [
        {
            avatar: '/team/finn.webp',
            name: 'FINN',
            title: 'Lead Mapper',
            links: [
                { icon: 'discord', link: 'https://discordapp.com/users/478599137563115520/' },
            ]
        },
    ]

    const artist = [
        {
            avatar: '/team/artist/arthur.webp',
            name: 'Arthur Mottergan',
            title: 'Lead 3D Artist',
            links: [
                { icon: 'github', link: 'https://github.com/Simastrix' },
                { icon: 'discord', link: 'https://discordapp.com/users/540860975218163724/' },
            ]
        },
        {
            avatar: '/team/artist/mike.webp',
            name: 'Mike',
            title: '3D Artist',
            links: [
                { icon: 'discord', link: 'https://discordapp.com/users/158243778895937536/' },
            ]
        },
        {
            avatar: '/team/artist/howard.webp',
            name: 'Howard',
            title: '3D Artist',
            links: [
                { icon: 'discord', link: 'https://discordapp.com/users/1033065913219555358/' },
            ]
        },
        {
            avatar: '/team/artist/coralstar.webp',
            name: 'CoralStar',
            title: 'Junior 3D Artist',
            links: [
                { icon: 'discord', link: 'https://discordapp.com/users/335141940561575936/' },
            ]
        },
        {
            avatar: '/team/artist/monokuma.webp',
            name: 'Monokuma',
            title: 'Junior 3D Artist',
            links: [
                { icon: 'discord', link: 'https://discordapp.com/users/432593791157927938/' },
            ]
        },
        {
            avatar: '/team/artist/karol-klaput.webp',
            name: 'Karol Klaput',
            title: 'Junior 3D Artist',
            links: [
                { icon: 'discord', link: 'https://discord.com/users/358249807640264706' },
            ]
        },
        {
            avatar: '/team/artist/konzi.webp',
            name: 'Konzi',
            title: 'Junior 3D Artist',
            links: [
                { icon: 'discord', link: 'https://discord.com/users/219478609461641216' },
            ]
        },
        {
            avatar: '/team/artist/winterfresh.webp',
            name: 'W1nterFresh',
            title: 'Junior 3D Artist',
            links: [
                { icon: 'discord', link: 'https://discord.com/users/265522080945012746' },
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
            avatar: 'https://avatars.githubusercontent.com/u/102512250?v=4',
            name: 'Dietrich',
            title: 'Developer',
            links: [
                { icon: 'github', link: 'https://github.com/Dietrich-io' },
                { icon: 'discord', link: 'https://discordapp.com/users/188354110100209665/' },
            ]
        },
        {
            avatar: 'https://avatars.githubusercontent.com/u/10331752?v=4',
            name: 'Roschy',
            title: 'Developer',
            links: [
                { icon: 'github', link: 'https://github.com/JulianLegler' },
                { icon: 'discord', link: 'https://discordapp.com/users/221575559526875136/' },
            ]
        },
        {
            avatar: 'icons/user.svg',
            name: 'LeFruJohn',
            title: 'Developer',
            links: [
                { icon: 'github', link: 'https://github.com/LeFruJohn0' },
                { icon: 'discord', link: 'https://discordapp.com/users/893217081900802101/' },
            ]
        },
    ]

    const mapper = [
        {
            avatar: '/team/mapper/leesh.webp',
            name: 'Leesh',
            title: 'Mapper',
            links: [
                { icon: 'discord', link: 'https://discordapp.com/users/355024108301582349/' },
            ]
        },
        {
            avatar: '/team/mapper/dotster.webp',
            name: 'Dotster',
            title: 'Mapper',
            links: [
                { icon: 'discord', link: 'https://discordapp.com/users/198670591820038144/' },
            ]
        },
        {
            avatar: '/team/mapper/blossom.webp',
            name: 'Blossom',
            title: 'Mapper',
            links: [
                { icon: 'discord', link: 'https://discordapp.com/users/648954858505764866/' },
            ]
        },      
        {
            avatar: '/team/mapper/amnesia69.webp',
            name: 'amnesia69',
            title: 'Mapper',
            links: [
                { icon: 'discord', link: 'https://discordapp.com/users/884021556404166676/' },
            ]
        }, 
        {
            avatar: '/team/mapper/lucy.webp',
            name: 'Lucy',
            title: 'Mapper',
            links: [
                { icon: 'discord', link: 'https://discordapp.com/users/73468826716471296/' },
            ]
        },   
        {
            avatar: '/team/mapper/bunny.webp',
            name: '𝓑𝓾𝓷𝓷𝔂',
            title: 'Mapper',
            links: [
                { icon: 'discord', link: 'https://discordapp.com/users/746266875058716702/' },
            ]
        }, 
        {
            avatar: '/team/mapper/sundragoness.webp',
            name: 'SunDragoness',
            title: 'Mapper',
            links: [
                { icon: 'discord', link: 'https://discordapp.com/users/263565721106120704/' },
            ]
        }, 
        {
            avatar: '/team/mapper/brirae.webp',
            name: 'Birae',
            title: 'Mapper',
            links: [
                { icon: 'discord', link: 'https://discordapp.com/users/106866103539523584/' },
            ]
        },
        {
            avatar: '/team/mapper/xopotsiexo.webp',
            name: 'xopotsiexo',
            title: 'Mapper',
            links: [
                { icon: 'discord', link: 'https://discord.com/users/768581098921787412' },
            ]
        },
        {
            avatar: '/team/mapper/fae.webp',
            name: 'Fae',
            title: 'Mapper',
            links: [
                { icon: 'discord', link: 'https://discord.com/users/232058260809711617' },
            ]
        },
        {
            avatar: '/team/mapper/dutch.webp',
            name: 'Dutch',
            title: 'Mapper',
            links: [
                { icon: 'discord', link: 'https://discord.com/users/816093413190664215' },
            ]
        },
        {
            avatar: '/team/mapper/ben.webp',
            name: 'Ben',
            title: 'Mapper',
            links: [
                { icon: 'discord', link: 'https://discord.com/users/623218499501686825' },
            ]
        },
        {
            avatar: '/team/mapper/cherri.webp',
            name: 'Cherri',
            title: 'Mapper',
            links: [
                { icon: 'discord', link: 'https://discord.com/users/522488409139314699' },
            ]
        },
        {
            avatar: '/team/mapper/d2dfe.webp',
            name: 'D2Dfe',
            title: 'Mapper',
            links: [
                { icon: 'discord', link: 'https://discord.com/users/299984478762434561' },
            ]
        },
        {
            avatar: '/team/mapper/heikki.webp',
            name: '𝐇𝐄𝐈𝐊𝐊𝐈',
            title: 'Mapper',
            links: [
                { icon: 'discord', link: 'https://discord.com/users/514809975734927361' },
            ]
        },
        {
            avatar: '/team/mapper/kate.webp',
            name: 'Kate',
            title: 'Mapper',
            links: [
                { icon: 'discord', link: 'https://discord.com/users/287651757142835200' },
            ]
        },
        {
            avatar: '/team/mapper/katsuru.webp',
            name: 'Katsuru',
            title: 'Mapper',
            links: [
                { icon: 'discord', link: 'https://discord.com/users/125306329152618496' },
            ]
        },
        {
            avatar: '/team/mapper/konrad.webp',
            name: 'Konrad',
            title: 'Mapper',
            links: [
                { icon: 'discord', link: 'https://discord.com/users/576507448865718293' },
            ]
        },
        {
            avatar: '/team/mapper/missghouls.webp',
            name: 'MissGhouls',
            title: 'Mapper',
            links: [
                { icon: 'discord', link: 'https://discord.com/users/205782927508897792' },
            ]
        },
        {
            avatar: '/team/mapper/muvvabear.webp',
            name: 'Muvvabear',
            title: 'Mapper',
            links: [
                { icon: 'discord', link: 'https://discord.com/users/726473544522924032' },
            ]
        },
        {
            avatar: '/team/mapper/céline.webp',
            name: 'Ohozelot | Céline',
            title: 'Mapper',
            links: [
                { icon: 'discord', link: 'https://discord.com/users/237969728239435776' },
            ]
        },
    ]

    const socialmedia = [
        {
            avatar: '/team/mapper/sunny.webp',
            name: 'Sunny',
            title: 'Social Media',
            links: [
                { icon: 'discord', link: 'https://discord.com/users/1086682188587729037' },
            ]
        },
    ]
</script>

<VPTeamPage>
    <VPTeamPageTitle><template #title>Our Team</template></VPTeamPageTitle>
    <!-- Director -->
    <VPTeamPageSection>
        <template #title>Director</template>
        <template #members><VPTeamMembers size="medium" :members="director" /></template>
    </VPTeamPageSection>
    <!-- Supervisor -->
    <VPTeamPageSection>
        <template #title>Supervisor</template>
        <template #members><VPTeamMembers size="small" :members="supervisor" /></template>
    </VPTeamPageSection>
    <!-- 3D Artist -->
    <VPTeamPageSection>
        <template #title>3D Artist</template>
        <template #members><VPTeamMembers size="small" :members="artist" /></template>
    </VPTeamPageSection>
    <!-- Developer -->
    <VPTeamPageSection>
        <template #title>Developer</template>
        <template #members><VPTeamMembers size="small" :members="developer" /></template>
    </VPTeamPageSection>
    <!-- Mapper -->
    <VPTeamPageSection>
        <template #title>Mapper</template>
        <template #members><VPTeamMembers size="small" :members="mapper" /></template>
    </VPTeamPageSection>
    <!-- Social Media -->
    <VPTeamPageSection>
        <template #title>Social Media</template>
        <template #members><VPTeamMembers size="small" :members="socialmedia" /></template>
    </VPTeamPageSection>
</VPTeamPage>