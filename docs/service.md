---
layout: page
title: Server Service 
sidebar: false
---

<script setup>
    import {
    VPTeamPage,
    VPTeamPageTitle,
    VPTeamMembers,
    VPTeamPageSection
    } from 'vitepress/theme'

    const server_service = [
        {
           avatar: '/standard_service.webp',
            name: 'Standard',
            title: '50€',
            desc: '<b> - Setting up the FXServer <br> - Setting up the database <br> - Installing the framework </b>',
        },
        {
           avatar: '/premium_service.webp',
            name: 'Premium',
            title: '100€',
            desc: '<b> - Standard package <br> - Custom request </b>',
        },
    ]

    const server_provider = [
        {
            avatar: 'https://cdn.discordapp.com/avatars/315241449178529792/a_61b3eb3194f204bf2876702d6d96e08f.gif?size=128',
            name: 'Iceline Hosting',
            title: 'Simplified server hosting, at any scale.',
            links: [
                { icon: 'discord', link: 'https://discord.gg/knVH9SYB4g' },
            ],
            sponsor: 'https://iceline-hosting.com/spooni',
            actionText: 'Get your server.'
        },
    ]
</script>

<VPTeamPage>
    <!-- Server Service -->
    <VPTeamPageTitle><template #title>Server Service</template></VPTeamPageTitle>
    <!-- Packages -->
    <VPTeamPageSection>
        <template #title>Packages</template>
        <template #members><VPTeamMembers size="medium" :members="server_service" /></template>
    </VPTeamPageSection>
    <!-- Server Provider -->
    <VPTeamPageSection>
        <template #title>Server Provider</template>
        <template #members><VPTeamMembers size="medium" :members="server_provider" /></template>
    </VPTeamPageSection>
</VPTeamPage>