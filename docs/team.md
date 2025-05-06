---
layout: page
title: Team
sidebar: false
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
            avatar: 'https://cdn.discordapp.com/avatars/158243778895937536/66b021ea78201c1b4554faf1c50f297b.webp?size=128',
            name: 'Mike',
            title: '3D Artist',
            links: [
                { icon: 'discord', link: 'https://discordapp.com/users/158243778895937536/' },
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
            avatar: 'https://cdn.discordapp.com/avatars/335141940561575936/9468f0a4ad4f257297952ed457e1e237.webp?size=512',
            name: 'CoralStar',
            title: 'Junior 3D Artist',
            links: [
                { icon: 'discord', link: 'https://discordapp.com/users/335141940561575936/' },
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
            avatar: 'user.svg',
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
            avatar: 'https://cdn.discordapp.com/avatars/331861578842636301/d6afea1b6c57dfbf6f4dbbea1d4315b0.webp?size=128',
            name: 'Alina',
            title: 'Mapper',
            links: [
                { icon: 'discord', link: 'https://discordapp.com/users/331861578842636301/' },
            ]
        },
        {
            avatar: 'https://cdn.discordapp.com/avatars/355024108301582349/20065ddc60918ce09dde24fcbd78f514.webp?size=128',
            name: 'Leesh',
            title: 'Mapper',
            links: [
                { icon: 'discord', link: 'https://discordapp.com/users/355024108301582349/' },
            ]
        },
        {
            avatar: 'https://cdn.discordapp.com/avatars/198670591820038144/a_bb15bd5f687ee2340dc19bc36b120c4a.gif?size=128',
            name: 'Dotster',
            title: 'Mapper',
            links: [
                { icon: 'discord', link: 'https://discordapp.com/users/198670591820038144/' },
            ]
        },
        {
            avatar: 'https://cdn.discordapp.com/avatars/648954858505764866/13685536bd185e4dce9bdf10e1a56856.webp?size=128',
            name: 'Blossom',
            title: 'Mapper',
            links: [
                { icon: 'discord', link: 'https://discordapp.com/users/648954858505764866/' },
            ]
        },   
        {
            avatar: 'https://cdn.discordapp.com/avatars/381107972371251216/4fbcb48aaae153a2d846c5486d005fb7.png?size=128',
            name: 'Marin Fox',
            title: 'Mapper',
            links: [
                { icon: 'discord', link: 'https://discordapp.com/users/381107972371251216/' },
            ]
        },   
        {
            avatar: 'https://cdn.discordapp.com/avatars/432593791157927938/73b34763fe7045b8335c8cf5d6963940.webp?size=128',
            name: 'Monokuma',
            title: 'Mapper',
            links: [
                { icon: 'discord', link: 'https://discordapp.com/users/432593791157927938/' },
            ]
        }, 
        {
            avatar: 'https://cdn.discordapp.com/avatars/884021556404166676/a_11981429cffec973fb48b25208ebf1b0.gif?size=128',
            name: 'αмηєѕια',
            title: 'Mapper',
            links: [
                { icon: 'discord', link: 'https://discordapp.com/users/884021556404166676/' },
            ]
        }, 
        {
            avatar: 'https://cdn.discordapp.com/avatars/73468826716471296/c98aedfca12cbd93af96ae2bd6ee4ea6.png?size=128',
            name: 'Lucy',
            title: 'Mapper',
            links: [
                { icon: 'discord', link: 'https://discordapp.com/users/73468826716471296/' },
            ]
        },   
        {
            avatar: 'https://cdn.discordapp.com/avatars/159394227787268096/9f22888753e98aac5e8055d14d0b2e9d.png?size=128',
            name: 'Jamilton',
            title: 'Mapper',
            links: [
                { icon: 'discord', link: 'https://discordapp.com/users/159394227787268096/' },
            ]
        }, 
        {
            avatar: 'https://cdn.discordapp.com/avatars/746266875058716702/c3c28a4ca78da1981b6958400450ddfb.png?size=128',
            name: '𝓑𝓾𝓷𝓷𝔂',
            title: 'Mapper',
            links: [
                { icon: 'discord', link: 'https://discordapp.com/users/746266875058716702/' },
            ]
        }, 
        {
            avatar: 'https://cdn.discordapp.com/guilds/1029127873249935441/users/263565721106120704/avatars/e1a87a71143eacafbe35f2918c7a96fd.webp?size=128',
            name: 'SunDragoness',
            title: 'Mapper',
            links: [
                { icon: 'discord', link: 'https://discordapp.com/users/263565721106120704/' },
            ]
        }, 
        {
            avatar: 'https://cdn.discordapp.com/avatars/106866103539523584/6cd71e36c650add6a34dbb74fda19a8c.webp?size=128',
            name: 'Birae',
            title: 'Mapper',
            links: [
                { icon: 'discord', link: 'https://discordapp.com/users/106866103539523584/' },
            ]
        },
    ]
</script>

<VPTeamPage>
    <!--  -->
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
</VPTeamPage>