---
layout: page
title: Partner
sidebar: false
description: Explore our RedM community partnerships including top roleplay servers and script developers. Join the SPOONI partner program and get access to exclusive benefits, beta testing, and early releases.
head:
  - - meta
    - name: keywords
      content: RedM partners, RedM roleplay servers, RDR2 communities, RedM developers, partnership program, RedM server listing, Wild West roleplay, RedM collaboration
---

<style scoped>
/* Partnership Tiers Table Styling */
.partnership-tiers-wrapper {
  max-width: 900px;
  margin: 60px auto 40px;
  padding: 0 20px;
}

.partnership-tiers-title {
  text-align: center;
  font-size: 32px;
  font-weight: 600;
  letter-spacing: -0.02em;
  line-height: 40px;
  margin-bottom: 30px;
  color: var(--vp-c-brand-1);
  position: relative;
}

.partnership-tiers-title .header-anchor {
  display: inline-block;
  margin-right: 0.3em;
  font-size: 0.85em;
  opacity: 0;
  transition: opacity 0.25s;
  text-decoration: none;
  color: var(--vp-c-brand-1);
}

.partnership-tiers-title span {
  display: inline-block;
}

.partnership-tiers-title .header-anchor:before {
  content: "#";
}

.partnership-tiers-title:hover .header-anchor {
  opacity: 1;
}

.partnership-tiers-table {
  width: 100%;
  border-collapse: collapse;
  font-size: 1.05em;
}

.partnership-tiers-table thead tr {
  border-bottom: 2px solid var(--vp-c-divider);
}

.partnership-tiers-table th {
  padding: 16px 12px;
  font-weight: 600;
}

.partnership-tiers-table th:first-child {
  text-align: left;
}

.partnership-tiers-table th:not(:first-child) {
  text-align: center;
  color: var(--vp-c-brand-1);
}

.partnership-tiers-table tbody tr {
  border-bottom: 1px solid var(--vp-c-divider);
}

.partnership-tiers-table td {
  padding: 12px;
}

.partnership-tiers-table td:not(:first-child) {
  text-align: center;
}

.partnership-tiers-table .section-header {
  font-weight: 700;
  font-size: 1.1em;
  padding: 16px 12px 12px;
}

.partnership-tiers-table .section-header.benefits {
  padding-top: 24px;
}

.partnership-tiers-table .bundle-note {
  text-align: center;
  font-style: italic;
  font-size: 0.9em;
  color: var(--vp-c-text-2);
  padding: 12px;
}

.partnership-tiers-table .bundle-note-row {
  border-bottom: none;
}

/* Responsive adjustments */
@media (max-width: 768px) {
  .partnership-tiers-wrapper {
    padding: 0 15px;
    margin: 40px auto 30px;
  }
  
  .partnership-tiers-title {
    font-size: 24px;
    line-height: 32px;
    margin-bottom: 24px;
  }

  .partnership-tiers-title .header-anchor {
    margin-right: 0.2em;
    font-size: 0.8em;
  }
  
  .partnership-tiers-table {
    font-size: 0.9em;
  }
  
  .partnership-tiers-table th,
  .partnership-tiers-table td {
    padding: 8px 6px;
  }

  .partnership-tiers-table .section-header {
    font-size: 1em;
    padding: 12px 6px 8px;
  }

  .partnership-tiers-table .section-header.benefits {
    padding-top: 20px;
  }

  .partnership-tiers-table .bundle-note {
    font-size: 0.85em;
    padding: 10px 6px;
  }
}

/* Small mobile devices */
@media (max-width: 480px) {
  .partnership-tiers-wrapper {
    margin: 30px auto 20px;
  }

  .partnership-tiers-title {
    font-size: 20px;
    line-height: 28px;
    margin-bottom: 20px;
  }

  .partnership-tiers-table {
    font-size: 0.8em;
  }

  .partnership-tiers-table th,
  .partnership-tiers-table td {
    padding: 6px 4px;
  }
}
</style>

<script setup>
    import {
    VPTeamPage, 
    VPTeamPageTitle,
    VPTeamMembers,
    VPTeamPageSection
    } from 'vitepress/theme'

    const developer = [
        {
            avatar: '/partner/dev/drshwaggins.webp',
            name: 'DrShwaggins Scripts',
            links: [
                { icon: 'discord', link: 'https://discord.gg/m8SmDPWcu3' },
            ]
        },    
        {
            avatar: '/partner/dev/syn-scripts.webp',
            name: 'Syn Scripts',
            links: [
                { icon: 'discord', link: 'https://discord.gg/synscripts' },
            ]
        },
        {
            avatar: '/partner/dev/bcc.webp',
            name: 'Bryce Canyon County',
            links: [
                { icon: 'discord', link: 'https://discord.gg/GuwS7Y7PA3' },
            ]
        },
        {
            avatar: '/partner/dev/sirec.webp',
            name: 'SIREC STUDIO',
            links: [
                { icon: 'discord', link: 'https://discord.gg/hrWUHjjXwn' },
            ]
        },
        {
            avatar: '/partner/dev/gum.webp',
            name: 'Gum Scripts',
            links: [
                { icon: 'discord', link: 'https://discord.gg/8ZzQqGSngH' },
            ]
        },
        {
            avatar: '/partner/dev/xakra.webp',
            name: 'Xakra Scripts',
            links: [
                { icon: 'discord', link: 'https://discord.gg/aRK4g7KNQr' },
            ]
        },
        {
            avatar: '/partner/dev/fixitfy.webp',
            name: 'Fixitfy',
            links: [
                { icon: 'discord', link: 'https://discord.gg/M6ag2JBzDH' },
            ]
        },
        {
            avatar: '/partner/dev/dlabs.webp',
            name: 'D-Labs',
            links: [
                { icon: 'discord', link: 'https://discord.gg/btGP4gucKZ' },
            ]
        },
        {
            avatar: '/partner/dev/hellcat.webp',
            name: 'Hellcat Development',
            links: [
                { icon: 'discord', link: 'https://discord.gg/GGm6b3ChFX' },
            ]
        },
        {
            avatar: '/partner/dev/nss.webp',
            name: 'NIGHT SHIFT STUDIO',
            links: [
                { icon: 'discord', link: 'https://discord.gg/n26dFYTNCa' },
            ]
        },
        {
            avatar: '/partner/dev/mega.webp',
            name: 'Mega Development',
            links: [
                { icon: 'discord', link: 'https://discord.gg/kfFE3JrySd' },
            ]
        },
        {
            avatar: '/partner/dev/bulgar.webp',
            name: 'BulgaR Scripts',
            links: [
                { icon: 'discord', link: 'https://discord.gg/7Ac56XKYRY' },
            ]
        },
        {
            avatar: '/partner/dev/sirevlc.webp',
            name: 'SireVLC',
            links: [
                { icon: 'discord', link: 'https://discord.gg/2zEQY8RaFb' },
            ]
        },
        {
            avatar: '/partner/dev/jr.webp',
            name: 'JR Scripts',
            links: [
                { icon: 'discord', link: 'https://discord.gg/njZVvWYmpE' },
            ]
        },    
        {
            avatar: '/partner/dev/lefru.webp',
            name: 'LeFruScripts',
            links: [
                { icon: 'discord', link: 'https://discord.gg/nqcA4JJ2dC' },
            ]
        },
        {
            avatar: '/partner/dev/ziomark.webp',
            name: "ZioMark's HUB",
            links: [
                { icon: 'discord', link: 'https://discord.gg/ziomark' },
            ]
        },
        {
            avatar: '/partner/dev/murphy.webp',
            name: "Murphy's Workshop",
            links: [
                { icon: 'discord', link: 'https://discord.gg/9Xm4qfAT8F' },
            ]
        },
    ]

    const server = [

        // TIER II
        {
            avatar: '/partner/tier2/syn-county.webp',
            name: 'Syn County',
            title: '📀 TIER II',
            links: [
                { icon: 'discord', link: 'https://discord.gg/syncounty' },
            ]
        },
        {
            avatar: '/partner/tier2/goldrush-roleplay.webp',
            name: 'GoldRush Roleplay',
            title: '📀 TIER II',
            links: [
                { icon: 'discord', link: 'https://discord.gg/goldrushroleplay' },
            ]
        },
        {
            avatar: '/partner/tier2/oeste-roleplay.webp',        
            name: 'Oeste  Roleplay',
            title: '📀 TIER II',
            links: [
                { icon: 'discord', link: 'https://discord.gg/oesteroleplay' },
            ]
        },
        {
            avatar: 'https://cdn.discordapp.com/icons/1404921397293355090/e212d9bd0c1b1e35a577530bbb230562.webp?size=128&quality=lossless',
            name: 'LoneStar Roleplay',
            title: '📀 TIER II',
            links: [
                { icon: 'discord', link: 'https://discord.gg/fTyzcgMD2E' },
            ]
        },
        {
            avatar: 'https://cdn.discordapp.com/icons/1308314913202241537/de805cb2bc95bb0eef96ffbd6192aa93.webp?size=128&quality=lossless',
            name: 'Dirty South Roleplay',
            title: '📀 TIER II',
            links: [
                { icon: 'discord', link: 'https://discord.gg/RJhRAQb8wK' },
            ]
        },
        {
            avatar: 'https://cdn.discordapp.com/icons/1075306420339228742/67c1dfc736eb31cfe1f5df793f2974ad.webp?size=128&quality=lossless',
            name: 'Highwater RP',
            title: '📀 TIER II',
            links: [
                { icon: 'discord', link: 'https://discord.gg/highwaterroleplay' },
            ]
        },
        {
            avatar: 'https://cdn.discordapp.com/icons/985257469280407632/dc750845088510b51c14a27bc2c1b8c7.webp?size=128&quality=lossless',
            name: 'Nexus Roleplay',
            title: '📀 TIER II',
            links: [
                { icon: 'discord', link: 'https://discord.gg/RJhRAQb8wK' },
            ]
        },
        {
            avatar: '/partner/tier2/yellowstone-rp.webp',
            name: 'Yellowstone RP',
            title: '📀 TIER II',
            links: [
                { icon: 'discord', link: 'https://discord.gg/yellowstonerp' },
            ]
        },
        {
            avatar: '/partner/tier2/forgotten-trails.webp',
            name: 'Forgotten Trails',
            title: '📀 TIER II',
            links: [
                { icon: 'discord', link: 'https://discord.gg/forgottentrailsrp' },
            ]
        },
        {
            avatar: '/partner/tier2/high-noon.webp',
            name: 'High Noon',
            title: '📀 TIER II',
            links: [
                { icon: 'discord', link: 'https://discord.gg/highnoon' },
            ]
        },
        {
            avatar: '/partner/tier2/wild-frontier-roleplay.webp',
            name: 'Wild Frontier Roleplay',
            title: '📀 TIER II',
            links: [
                { icon: 'discord', link: 'https://discord.gg/wildfrontierrp' },
            ]
        },
        {
            avatar: '/partner/tier2/gilded-rp.webp',
            name: 'Gilded RP',
            title: '📀 TIER II',
            links: [
                { icon: 'discord', link: 'https://discord.gg/gildedrp' },
            ]
        },
        {
            avatar: '/partner/tier2/wild-west-roleplay.webp',
            name: 'Wild West Roleplay',
            title: '📀 TIER II', 
            links: [
                { icon: 'discord', link: 'https://discord.gg/mQTn4JVdxa' },
            ]
        },
        {
            avatar: '/partner/tier2/western-wegends.webp',
            name: 'Western Legends',
            title: '📀 TIER II',
            links: [
                { icon: 'discord', link: 'https://discord.gg/n7Y7YhP6gx' },
            ]
        },
        {
            avatar: '/partner/tier2/der-wilde-westen.webp',
            name: 'Der Wilde Westen',
            title: '📀 TIER II',
            links: [
                { icon: 'discord', link: 'https://discord.gg/snyctcZD2G' },
            ]
        },
        {
            avatar: '/partner/tier2/wildfin.webp',
            name: 'WILDFIN',
            title: '📀 TIER II',
            links: [
                { icon: 'discord', link: 'https://discord.gg/WCvy8hHYXg' },
            ]
        },
        {
            avatar: '/partner/tier2/lucky-valley.webp',
            name: 'Lucky Valley',
            title: '📀 TIER II',
            links: [
                { icon: 'discord', link: 'https://discord.gg/luckyvalley' },
            ]
        },
        {
            avatar: '/partner/tier2/redwest-liferp.webp',
            name: 'REDWest LifeRP',
            title: '📀 TIER II',
            links: [
                { icon: 'discord', link: 'https://discord.gg/xsbWxUuD' },
            ]
        },
        {
            avatar: '/partner/tier2/ranch-roleplay.webp',
            name: 'Ranch Roleplay',
            title: '📀 TIER II',
            links: [
                { icon: 'discord', link: 'https://discord.gg/ranch' },
            ]
        },
        {
            avatar: '/partner/tier2/arizona-rp.webp',
            name: 'Arizona RP',
            title: '📀 TIER II',
            links: [
                { icon: 'discord', link: 'https://discord.gg/arizonarpofficial' },
            ]
        },
        {
            avatar: '/partner/tier2/bayang-sinilangan-rp.webp',
            name: 'BAYANG SINILANGAN RP',
            title: '📀 TIER II',
            links: [
                { icon: 'discord', link: 'https://discord.gg/bayangsinilanganrp' },
            ]
        },
        {
            avatar: '/partner/tier2/red-river.webp',
            name: 'RED RIVER',
            title: '📀 TIER II',
            links: [
                { icon: 'discord', link: 'https://discord.gg/redriver' },
            ]
        },
        {
            avatar: '/partner/tier2/bounty-bay.webp',
            name: 'Bounty Bay',
            title: '📀 TIER II',
            links: [
                { icon: 'discord', link: 'https://discord.gg/ghheGn2WUa' },
            ]
        },
        {
            avatar: '/partner/tier2/sundown-rising.webp',
            name: 'Sundown Rising',
            title: '📀 TIER II',
            links: [
                { icon: 'discord', link: 'https://discord.gg/sr-roleplay' },
            ]
        },
        {
            avatar: '/partner/tier2/high-stakes-roleplay.webp',
            name: 'High Stakes Roleplay',
            title: '📀 TIER II',
            links: [
                { icon: 'discord', link: 'https://discord.gg/highstakes' },
            ]
        },
        {
            avatar: '/partner/tier2/farwest-quebec.webp',
            name: 'FarWest Québec',
            title: '📀 TIER II',
            links: [
                { icon: 'discord', link: 'https://discord.gg/farwestqc' },
            ]
        },
        {
            avatar: '/partner/tier2/red-west.webp',
            name: 'Red West',
            title: '📀 TIER II',
            links: [
                { icon: 'discord', link: 'https://discord.gg/NTaZx65MT7' },
            ]
        },
        {
            avatar: '/partner/tier2/secret-society-county.webp',
            name: 'Secret Society County',
            title: '📀 TIER II',
            links: [
                { icon: 'discord', link: 'https://discord.gg/9K9mXH9PUF' },
            ]
        },
        {
            avatar: '/partner/tier2/frontier-stories.webp',
            name: 'Frontier Stories',
            title: '📀 TIER II',
            links: [
                { icon: 'discord', link: 'https://discord.gg/frontierstories1899' },
            ]
        },
        {
            avatar: '/partner/tier2/legendary-roleplay.webp',
            name: 'Legendary Roleplay',
            title: '📀 TIER II',
            links: [
                { icon: 'discord', link: 'https://discord.gg/legendary-roleplay-1139609447480688733' },
            ]
        },
        {
            avatar: '/partner/tier2/whiskey-rend-rp.webp',
            name: 'Whiskey Bend RP',
            title: '📀 TIER II',
            links: [
                { icon: 'discord', link: 'https://discord.gg/sYXzRuUB6y' },
            ]
        },
        {
            avatar: '/partner/tier2/last-train-county.webp',
            name: 'Last Train County',
            title: '📀 TIER II',
            links: [
                { icon: 'discord', link: 'https://discord.gg/8nNggdmg8J' },
            ]
        },
        {
            avatar: '/partner/tier2/gunsmoke-trails-rp.webp',
            name: 'GunSmoke Trails RP',
            title: '📀 TIER II',
            links: [
                { icon: 'discord', link: 'https://discord.gg/PdzbFwJ9Mt' },
            ]
        },

        {
            avatar: '/partner/tier2/vengeful-county.webp',
            name: 'Vengeful County',
            title: '📀 TIER II',
            links: [
                { icon: 'discord', link: 'https://discord.gg/5wdyC4frRf' },
            ]
        },
        {
            avatar: '/partner/tier2/dusty-trails-roleplay.webp',
            name: 'Dusty Trails Roleplay',
            title: '📀 TIER II',
            links: [
                { icon: 'discord', link: 'https://discord.gg/T3Vm6Dka6H' },
            ]
        },

        // TIER I
        {
            avatar: '/partner/tier1/nomad-roleplay.webp',
            name: 'NOMAD ROLEPLAY',
            title: '💿 TIER I',
            links: [
                { icon: 'discord', link: 'https://discord.gg/27T78WEyWh' },
            ]
        },
        {
            avatar: '/partner/tier1/outlaws-roleplay.webp',
            name: 'Outlaws Roleplay',
            title: '💿 TIER I',
            links: [
                { icon: 'discord', link: 'https://discord.gg/outlawsrp' },
            ]
        },
        {
            avatar: '/partner/tier1/texas-roleplay.webp',
            name: 'Texas Roleplay',
            title: '💿 TIER I',
            links: [
                { icon: 'discord', link: 'https://discord.gg/texasroleplay' },
            ]
        },
        {
            avatar: 'icons/user.svg',
            name: 'Redwood County RP',
            title: '💿 TIER I', 
            links: [
                { icon: 'discord', link: 'https://discord.gg/tMfxKdYFCv' },
            ]
        },
        {
            avatar: 'https://cdn.discordapp.com/icons/1370309626234404954/a986c76ea2c4b0fe3d3dbe1006d71c6f.webp?size=128&quality=lossless',
            name: 'Endless Horizons 1900',
            title: '💿 TIER I',
            links: [
                { icon: 'discord', link: 'https://discord.gg/SeK2vxAwHu' },
            ]
        },
        {
            avatar: 'https://cdn.discordapp.com/icons/662693038530887702/705cdd07bea9332cb7995dce2760536d.webp?size=128&quality=lossless',
            name: 'Silly Donkey',
            title: '💿 TIER I',
            links: [
                { icon: 'discord', link: 'https://discord.gg/UGgED7WPAn' },
            ]
        },
        {
            avatar: '/partner/tier1/untamed-roleplay.webp',
            name: 'Untamed Roleplay',
            title: '💿 TIER I', 
            links: [
                { icon: 'discord', link: 'https://discord.gg/5W93wuwXZ3' },
            ]
        },
        {
            avatar: '/partner/tier1/homeland-roleplay.webp',
            name: 'HOMELAND - ROLEPLAY',
            title: '💿 TIER I',
            links: [
                { icon: 'discord', link: 'https://discord.gg/UgmakBkKJT' },
            ]
        },
        {
            avatar: 'icons/user.svg',
            name: '1889 Roleplay',
            title: '💿 TIER I',
            links: [
                { icon: 'discord', link: 'https://discord.gg/1889roleplay' },
            ]
        },
        {
            avatar: '/partner/tier1/dust-dreams.webp',
            name: 'Dust Dreams',
            title: '💿 TIER I',
            links: [
                { icon: 'discord', link: 'https://discord.gg/ddrp' },
            ]
        },
        {
            avatar: '/partner/tier1/promised-land-reborn.webp',
            name: 'Promised Land Reborn',
            title: '💿 TIER I',
            links: [
                { icon: 'discord', link: 'https://discord.com/invite/promisedlandrp' },
            ]
        },
        {
            avatar: 'icons/user.svg',
            name: 'Bloodlines Roleplay', 
            title: '💿 TIER I',
            links: [
                { icon: 'discord', link: 'https://discord.com/invite/KTtaEvKKZw' },
            ]
        },
        {
            avatar: '/partner/tier1/aces-&-eights-rp.webp',
            name: 'Aces & Eights RP',
            title: '💿 TIER I',
            links: [
                { icon: 'discord', link: 'https://discord.gg/MjCVHTTnaE' },
            ]
        },
        {
            avatar: '/partner/tier1/rodeo-roleplay.webp',
            name: 'Rodeo Roleplay',
            title: '💿 TIER I',
            links: [
                { icon: 'discord', link: 'https://discord.gg/rodeorp' },
            ]
        },
        {
            avatar: '/partner/tier1/beyond-the-rift.webp',
            name: 'Beyond the Rift',
            title: '💿 TIER I',
            links: [
                { icon: 'discord', link: 'https://discord.gg/vqDNBk4YYT' },
            ]
        },
        {
            avatar: '/partner/tier1/starr-hawke-rp.webp',
            name: 'Starr Hawke RP',
            title: '💿 TIER I',
            links: [
                { icon: 'discord', link: 'https://discord.gg/vxEqexFDGp' },
            ]
        },
        {
            avatar: '/partner/tier1/state-of-new-heaven-1890.webp',
            name: 'State of New Heaven 1890',
            title: '💿 TIER I',
            links: [
                { icon: 'discord', link: 'https://discord.gg/newhaven' },
            ]
        },
        {
            avatar: '/partner/tier1/legacy-roleplay-and-gaming.webp',
            name: 'Legacy Roleplay and Gaming',
            title: '💿 TIER I',
            links: [
                { icon: 'discord', link: 'https://discord.gg/legacyrpandgaming' },
            ]
        },
        {
            avatar: '/partner/tier1/ashen-frontier.webp',
            name: 'Ashen Frontier',
            title: '💿 TIER I',
            links: [
                { icon: 'discord', link: 'https://discord.com/invite/a78YUPzcrt' },
            ]
        },   
        {
            avatar: '/partner/tier1/westlands-rp.webp',
            name: 'Westlands RP',
            title: '💿 TIER I',
            links: [
                { icon: 'discord', link: 'https://discord.gg/sPJzSNaced' },
            ]
        },
        {
            avatar: '/partner/tier1/blackhorn-rp.webp',
            name: 'BLACKTHORN RP',
            title: '💿 TIER I',
            links: [
                { icon: 'discord', link: 'https://discord.gg/KRPGx7bTFz' },
            ]
        },
        {
            avatar: '/partner/tier1/ghost-town-roleplay.webp',
            name: 'Ghost Town Roleplay',
            title: '💿 TIER I',
            links: [
                { icon: 'discord', link: 'https://discord.gg/TATA6ZTWMn' },
            ]
        },
        {
            avatar: '/partner/tier1/cochise-rounty-rp.webp',
            name: 'Cochise County RP',
            title: '💿 TIER I',
            links: [
                { icon: 'discord', link: 'https://discord.gg/UvEYFrmVqf' },
            ]
        },
        {
            avatar: '/partner/tier1/ley-salvaje.webp',
            name: 'Ley Salvaje',
            title: '💿 TIER I',
            links: [
                { icon: 'discord', link: 'https://discord.gg/GTNmJJWfbw' },
            ]
        },
        {
            avatar: '/partner/tier1/hangmans-honeys.webp',
            name: 'Hangmans Honeys',
            title: '💿 TIER I',
            links: [
                { icon: 'discord', link: 'https://discord.gg/hangmanshoneys' },
            ]
        },
        {
            avatar: '/partner/tier1/stagecoach-rp.webp',
            name: 'Stagecoach RP',
            title: '💿 TIER I',
            links: [
                { icon: 'discord', link: 'https://discord.gg/stagecoachrp' },
            ]
        },
        {
            avatar: '/partner/tier1/rapid-falls-roleplay.webp',
            name: 'Rapid Falls Roleplay',
            title: '💿 TIER I',
            links: [
                { icon: 'discord', link: 'https://discord.gg/rapidfalls' },
            ]
        },
        {
            avatar: '/partner/tier1/omnia-1900.webp',
            name: 'OMNIA 1900',
            title: '💿 TIER I',
            links: [
                { icon: 'discord', link: 'https://discord.gg/V8wngmGxRJ' },
            ]
        },
        {
            avatar: '/partner/tier1/red-country.webp',
            name: 'Red Country',
            title: '💿 TIER I',
            links: [
                { icon: 'discord', link: 'https://discord.gg/8MhhfQGvBX' },
            ]
        },
        {
            avatar: '/partner/tier1/hot-colts-roleplay.webp',
            name: 'Hot Colts Roleplay',
            title: '💿 TIER I',
            links: [
                { icon: 'discord', link: 'https://discord.gg/WNjHATubfy' },
            ]
        },
        {
            avatar: '/partner/tier1/california-roleplay.webp',
            name: 'California Roleplay',
            title: '💿 TIER I',
            links: [
                { icon: 'discord', link: 'https://discord.gg/californiaroleplay' },
            ]
        },
        {
            avatar: '/partner/tier1/neue-welt.webp',
            name: 'neue Welt',
            title: '💿 TIER I',
            links: [
                { icon: 'discord', link: 'https://discord.gg/WZkERVe6Jx' },
            ]
        },
        {
            avatar: '/partner/tier1/red-reckoning.webp',
            name: 'Red Reckoning',
            title: '💿 TIER I',
            links: [
                { icon: 'discord', link: 'https://discord.gg/7j2mMtm27n' },
            ]
        },
        {
            avatar: '/partner/tier1/crimson-spire-rp.webp',
            name: 'Crimson Spire RP',
            title: '💿 TIER I',
            links: [
                { icon: 'discord', link: 'https://discord.gg/QybjFpeXYf' },
            ]
        },
        {
            avatar: '/partner/tier1/scarlet-horizon.webp',
            name: 'Scarlet Horizon',
            title: '💿 TIER I',
            links: [
                { icon: 'discord', link: 'https://discord.gg/DFyrxTcZ3Z' },
            ]
        },
        {
            avatar: '/partner/tier1/wild-wands.webp',
            name: 'Wild Lands',
            title: '💿 TIER I',
            links: [
                { icon: 'discord', link: 'https://discord.gg/wildlandsita' },
            ]
        },
        {
            avatar: '/partner/tier1/deadwood-county.webp',
            name: 'Deadwood County',
            title: '💿 TIER I',
            links: [
                { icon: 'discord', link: 'https://discord.gg/7Z2UGm5sSA' },
            ]
        },
        {
            avatar: '/partner/tier1/oldlife.webp',
            name: 'Oldlife',
            title: '💿 TIER I',
            links: [
                { icon: 'discord', link: 'https://discord.com/invite/9ajTaAbKu5' },
            ]
        },
        {
            avatar: '/partner/tier1/nightblood-roleplay.webp',
            name: 'NIGHTBLOOD ROLEPLAY',
            title: '💿 TIER I',
            links: [
                { icon: 'discord', link: 'https://discord.gg/xdxctCZunB' },
            ]
        },
        {
            avatar: '/partner/tier1/western-dreams.webp',
            name: 'Western Dreams',
            title: '💿 TIER I',
            links: [
                { icon: 'discord', link: 'https://discord.gg/XAhkvVEtqg' },
            ]
        },
        {
            avatar: '/partner/tier1/2toxic.webp',        
            name: '2Toxic',
            title: '💿 TIER I',
            links: [
                { icon: 'discord', link: 'https://discord.gg/2toxic-1179139330476875786' },
            ]
        },
        {
            avatar: '/partner/tier1/homebrand-roleplay.webp',
            name: 'Homebrand Roleplay',
            title: '💿 TIER I',
            links: [
                { icon: 'discord', link: 'https://discord.gg/YSB25uyVbk' },
            ]
        },
        {
            avatar: '/partner/tier1/moonstone-roleplay.webp',
            name: 'Moonstone Roleplay',
            title: '💿 TIER I',
            links: [
                { icon: 'discord', link: 'https://discord.gg/yFugWXvGU4' },
            ]
        },
    ]
</script>

<VPTeamPage>
    <VPTeamPageTitle><template #title>Our Partners</template></VPTeamPageTitle>
    <!-- Developer -->
    <VPTeamPageSection>
        <template #title>Developer</template>
        <template #members><VPTeamMembers size="small" :members="developer" /></template>
    </VPTeamPageSection>
    <!-- Roleplay Server -->
    <VPTeamPageSection>
        <template #title>Roleplay Server</template>
        <template #members><VPTeamMembers size="small" :members="server" /></template>
    </VPTeamPageSection>
</VPTeamPage>

<div class="partnership-tiers-wrapper">
    <h2 id="partner-program" class="partnership-tiers-title">
        <a class="header-anchor" href="#partner-program" aria-label="Permalink to &quot;Partner Program&quot;"></a>
        <span>Partner Program</span>
    </h2>
    <table class="partnership-tiers-table">
        <thead>
            <tr>
                <th></th>
                <th>💿 TIER I</th>
                <th>📀 TIER II</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td colspan="3" class="section-header">Requirements</td>
            </tr>
            <tr>
                <td>Discord Members</td>
                <td>Min. 500</td>
                <td>Min. 1,500</td>
            </tr>
            <tr>
                <td>Store Products</td>
                <td>Min. 50%</td>
                <td>Min. 80%</td>
            </tr>
            <tr class="bundle-note-row">
                <td colspan="3" class="bundle-note">Or purchase a large bundle</td>
            </tr>
            <tr>
                <td colspan="3" class="section-header benefits">Benefits</td>
            </tr>
            <tr>
                <td>Early Access for Certain Mappings</td>
                <td>1 week early</td>
                <td>2 weeks early</td>
            </tr>
            <tr>
                <td>Discord Role</td>
                <td>TIER I Role</td>
                <td>TIER II Role</td>
            </tr>
            <tr>
                <td>Official Partner Listing</td>
                <td>✅</td>
                <td>✅</td>
            </tr>
            <tr>
                <td>Discord Server Promotion</td>
                <td>✅</td>
                <td>✅</td>
            </tr>
        </tbody>
    </table>
</div>