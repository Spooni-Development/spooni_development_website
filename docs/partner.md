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

const International_Scripting = [
    {
        avatar: 'https://cdn.discordapp.com/icons/777290543406776341/a_8893fe3c222deef6054f729a541d2975.webp?size=128',
        name: 'Syn Scripts',
        title: '🔧' ,
        links: [
            { icon: 'discord', link: 'https://discord.gg/synscripts' },
        ]
    },
    {
        avatar: 'https://cdn.discordapp.com/icons/907324006699499570/aa5116fc14d68c59f8eaf7c0b3cea0a2.webp?size=128',
        name: 'SIREC STUDIO',
        title: '🔧' ,
        links: [
            { icon: 'discord', link: 'https://discord.gg/hrWUHjjXwn' },
        ]
    },
    {
        avatar: 'https://cdn.discordapp.com/icons/870659641879724104/b85569f37578506f0628fb88135d9296.webp?size=128',
        name: 'Gum Scripts',
        title: '🔧' ,
        links: [
            { icon: 'discord', link: 'https://discord.gg/8ZzQqGSngH' },
        ]
    },
    {
        avatar: 'https://cdn.discordapp.com/icons/1021957724440899584/a_1d0f9cf6a58096b91548f4c164ce0917.webp?size=128',
        name: 'Bryce Canyon County',
        title: '🔧' ,
        links: [
            { icon: 'discord', link: 'https://discord.gg/GuwS7Y7PA3' },
        ]
    },
    {
        avatar: 'https://cdn.discordapp.com/icons/1106290207390703666/d8562aa500b4fb01423ac5abdc3d2e1a.webp?size=128',
        name: 'Fixitfy',
        title: '🔧' ,
        links: [
            { icon: 'discord', link: 'https://discord.gg/srrmCQ58WP' },
        ]
    },
    {
        avatar: 'https://cdn.discordapp.com/icons/1022133473508589609/67188236c70ac2e4afc6e17a64013a42.webp?size=128',
        name: 'NIGHT SHIFT STUDIO',
        title: '🔧' ,
        links: [
            { icon: 'discord', link: 'https://discord.gg/n26dFYTNCa' },
        ]
    },
    {
        avatar: 'https://cdn.discordapp.com/icons/919890110177230898/19f6a0b86b48079bcf9e51d85af415e1.webp?size=128',
        name: 'Mega | Development Services',
        title: '🔧' ,
        links: [
            { icon: 'discord', link: 'https://discord.gg/kfFE3JrySd' },
        ]
    },
    {
        avatar: 'https://cdn.discordapp.com/icons/960899012809064528/92e3b426237ae5e6a243c97c3b2b9654.webp?size=128',
        name: 'TWH-Scripts',
        title: '🔧' ,
        links: [
            { icon: 'discord', link: 'https://discord.gg/yG75Bq59M9' },
        ]
    },
    {
        avatar: 'https://cdn.discordapp.com/icons/1137911244658065529/d2f22d99fd2a27142d39b0d1bda76851.webp?size=128',
        name: 'JR Scripts',
        title: '🔧' ,
        links: [
            { icon: 'discord', link: 'https://discord.gg/njZVvWYmpE' },
        ]
    },    
    {
        avatar: 'https://cdn.discordapp.com/icons/1048689370858803241/e6576f49bf614f2f7baddc06b725d98c.webp?size=128',
        name: 'LeFruScripts',
        title: '🔧' ,
        links: [
            { icon: 'discord', link: 'https://discord.gg/4nHUKrBrvw' },
        ]
    },
    {
        avatar: 'https://cdn.discordapp.com/icons/716696767407718493/a_578e1b7e584cf62f67741baba33ee0d6.webp?size=128',
        name: "ZioMark's HUB",
        title: '🔧' ,
        links: [
            { icon: 'discord', link: 'https://discord.gg/ziomark' },
        ]
    },
]

const International_RP_Server = [

    // TIER II

    {
        avatar: 'https://cdn.discordapp.com/icons/894324037419958292/723e886966e6117807efa14d682c7323.webp?size=128',
        name: 'GoldRush Roleplay',
        title: '📀 TIER II',
        links: [
            { icon: 'discord', link: 'https://discord.gg/goldrushroleplay' },
        ]
    },
    {
        avatar: 'https://cdn.discordapp.com/icons/1026351824946593803/a_36dcabc439274fb964560dba8ad6b151.webp?size=128',
        name: 'Oeste  Roleplay',
        title: '📀 TIER II',
        links: [
            { icon: 'discord', link: 'https://discord.gg/oesteroleplay' },
        ]
    },
    {
        avatar: 'https://cdn.discordapp.com/icons/1013107968545406986/f92ea8a4f8802d65f84b46721f24ece4.webp?size=128',
        name: 'Yellowstone RP',
        title: '📀 TIER II',
        links: [
            { icon: 'discord', link: 'https://discord.gg/yellowstonerp' },
        ]
    },
    {
        avatar: 'https://cdn.discordapp.com/icons/1020559736841703456/a_fbc90091117cd2d36d6153193a187c28.webp?size=128',
        name: 'Forgotten Trails',
        title: '📀 TIER II',
        links: [
            { icon: 'discord', link: 'https://discord.gg/forgottentrailsrp' },
        ]
    },
    {
        avatar: 'https://cdn.discordapp.com/icons/737446331920023628/ec9a0ca8dc56d473a796c9bd0d915dda.webp?size=128',
        name: 'Gilded RP',
        title: '📀 TIER II',
        links: [
            { icon: 'discord', link: 'https://discord.gg/gildedrp' },
        ]
    },
    {
        avatar: 'https://cdn.discordapp.com/icons/953054569959669781/a_78103702a5973d0af64cb9b0942ef21d.webp?size=128',
        name: 'Western Legends',
        title: '📀 TIER II',
        links: [
            { icon: 'discord', link: 'https://discord.gg/westernlegends' },
        ]
    },
    {
        avatar: 'https://cdn.discordapp.com/icons/712678812428664862/bdae22ec4208dc7430c292e0190e0c08.webp?size=128',
        name: 'WILDFIN',
        title: '📀 TIER II',
        links: [
            { icon: 'discord', link: 'https://discord.gg/wildfin' },
        ]
    },
    {
        avatar: 'https://cdn.discordapp.com/icons/1051237554533445692/256695fe232262fea69b284ab7ff5b85.webp?size=128',
        name: 'Lucky Valley',
        title: '📀 TIER II',
        links: [
            { icon: 'discord', link: 'https://discord.gg/luckyvalley ' },
        ]
    },
    {
        avatar: 'https://cdn.discordapp.com/icons/846851814547783690/6ecb01d8146b0f7655daa9d18c632ca3.webp?size=128',
        name: 'REDWest LifeRP',
        title: '📀 TIER II',
        links: [
            { icon: 'discord', link: 'https://discord.gg/xsbWxUuD ' },
        ]
    },

    // TIER I

    {
        avatar: 'user.png',
        name: 'Outlaws Roleplay',
        title: '💿 TIER I',
        links: [
            { icon: 'discord', link: 'https://discord.gg/ ' },
        ]
    },
    {
        avatar: 'https://cdn.discordapp.com/icons/619924089439518740/46eb2addf0b186a4e71fa6c0f6d4f3dc.webp?size=128',
        name: 'Cuatreros Del Mal',
        title: '💿 TIER I',
        links: [
            { icon: 'discord', link: 'https://discord.gg/8YHF4kkmd7 ' },
        ]
    },
    {
        avatar: 'https://cdn.discordapp.com/icons/877929107416039514/a_ce0069930fc48fb49ef9c764b86b6df7.webp?size=128',
        name: 'Texas Roleplay',
        title: '💿 TIER I',
        links: [
            { icon: 'discord', link: 'https://discord.gg/texasroleplay ' },
        ]
    },
    {
        avatar: 'https://cdn.discordapp.com/icons/928375286091878410/4e8856a06fe2cfd501d6477ee9c5d4bb.webp?size=128',
        name: '1889 Roleplay',
        title: '💿 TIER I',
        links: [
            { icon: 'discord', link: 'https://discord.gg/1889roleplay ' },
        ]
    },
    {
        avatar: 'https://cdn.discordapp.com/icons/1108094279131344986/025ad839e7230e218117514eb7ea6247.webp?size=128',
        name: 'Dust Dreams',
        title: '💿 TIER I',
        links: [
            { icon: 'discord', link: 'https://discord.gg/ddrp ' },
        ]
    },
    {
        avatar: 'https://cdn.discordapp.com/icons/759068924833824829/a4af0c5705da5d1a5afe1bb4a6b84120.webp?size=128',
        name: 'Rodeo Roleplay',
        title: '💿 TIER I',
        links: [
            { icon: 'discord', link: 'https://discord.gg/rodeorp ' },
        ]
    },
    {
        avatar: 'https://cdn.discordapp.com/icons/1162304446890512445/fa417c570441ae7bb25031d562d39b1a.webp?size=128',
        name: 'FRONTIER RP',
        title: '💿 TIER I',
        links: [
            { icon: 'discord', link: 'https://discord.gg/frontierpremiumrp ' },
        ]
    },
    {
        avatar: 'https://cdn.discordapp.com/icons/1073213859541823590/a_6174e661daa6859171699b7fb88cab98.webp?size=128',
        name: 'Wild Frontier Roleplay',
        title: '💿 TIER I',
        links: [
            { icon: 'discord', link: 'https://discord.gg/wildfrontierrp ' },
        ]
    },
    {
        avatar: 'https://cdn.discordapp.com/icons/402330838072688640/addf19be48e8ce18ba46c8cd8a3cbed7.webp?size=128',
        name: 'Legacy Roleplay and Gaming',
        title: '💿 TIER I',
        links: [
            { icon: 'discord', link: 'https://discord.gg/legacyrpandgaming ' },
        ]
    },
    {
        avatar: 'https://cdn.discordapp.com/icons/1116011983486062692/33b3db05278885c78b7d70d07f8035a6.webp?size=128',
        name: 'Our Lands',
        title: '💿 TIER I',
        links: [
            { icon: 'discord', link: 'https://discord.gg/a78YUPzcrt ' },
        ]
    },    
    {
        avatar: 'https://cdn.discordapp.com/icons/1146917669564592329/9defff4f1e4ff60edb078cc57946f075.webp?size=128',
        name: 'Westlands RP',
        title: '💿 TIER I',
        links: [
            { icon: 'discord', link: 'https://discord.gg/westlandsrp ' },
        ]
    },
]

const German_RP_Server = [
    {
        avatar: 'https://cdn.discordapp.com/icons/790331820042223616/95b6baa1a19e69aef592b19c078cdba8.webp?size=128',
        name: 'RED RIVER',
        title: '📀 TIER II',
        links: [
            { icon: 'discord', link: 'https://discord.gg/redriver' },
        ]
    },
    {
        avatar: 'https://cdn.discordapp.com/icons/1123352191751704606/a_9bee10bfd839641477ffb8e62586cee0.webp?size=128',
        name: 'Sundown Rising',
        title: '📀 TIER II',
        links: [
            { icon: 'discord', link: 'https://discord.gg/sr-roleplay' },
        ]
    },
    {
        avatar: 'https://cdn.discordapp.com/icons/940392432204394506/a_9e5d44b57837c31af20370802f951433.webp?size=128',
        name: 'Rising Sun',
        title: '📀 TIER II',
        links: [
            { icon: 'discord', link: 'https://discord.gg/risingsunrp' },
        ]
    },
    {
        avatar: 'https://cdn.discordapp.com/icons/938402250471145543/a_024baddff6d793bd274f9ae9d084d29b.webp?size=128',
        name: 'The Western Hills',
        title: '📀 TIER II',
        links: [
            { icon: 'discord', link: 'https://discord.gg/western-hills' },
        ]
    },
    {
        avatar: 'https://cdn.discordapp.com/icons/1045017560913035284/a_45154dcbbd8f6c85e7fbb35b37443cf9.webp?size=128',
        name: 'Frontier Stories',
        title: '📀 TIER II',
        links: [
            { icon: 'discord', link: 'https://discord.gg/frontierstories1899' },
        ]
    },
    {
        avatar: 'https://cdn.discordapp.com/icons/950505958625382460/a_c1f9752a76f75235d60b1e260fd1f440.webp?size=128',
        name: 'Wasteland Stories',
        title: '💿 TIER I',
        links: [
            { icon: 'discord', link: 'https://discord.gg/wasteland' },
        ]
    },
    {
        avatar: 'https://cdn.discordapp.com/icons/796376952600526898/a_82a45ff03eab80010e81811add573d6c.webp?size=128',
        name: 'Homebrand Roleplay',
        title: '💿 TIER I',
        links: [
            { icon: 'discord', link: 'https://discord.gg/YSB25uyVbk' },
        ]
    },
    {
        avatar: 'https://cdn.discordapp.com/icons/1099945412514816041/a_970b3d7f203e1a61b893221885216542.webp?size=128',
        name: 'AmberView  Roleplay',
        title: '💿 TIER I',
        links: [
            { icon: 'discord', link: 'https://discord.gg/yFugWXvGU4' },
        ]
    },
    {
        avatar: 'https://cdn.discordapp.com/icons/1065942477665751070/439e89f6581eb62e78aa3b3a9552484d.webp?size=128',
        name: 'Yellowstone Branded RP',
        title: '💿 TIER I',
        links: [
            { icon: 'discord', link: 'https://discord.gg/yb-rp' },
        ]
    },
    {
        avatar: 'https://cdn.discordapp.com/icons/1070353246121623594/81697cd7f6bb599fc56897df53134696.webp?size=128',
        name: 'The Last Days',
        title: '💿 TIER I',
        links: [
            { icon: 'discord', link: 'https://discord.gg/thelastdays' },
        ]
    },
]

</script>

<VPTeamPage>
  <VPTeamPageTitle>
    <template #title>Our Partners</template>
    <template #lead></template>
  </VPTeamPageTitle>

<VPTeamPageSection>
    <template #title>International Scripting</template>
    <template #lead></template>
    <template #members>
     <VPTeamMembers size="medium" :members="International_Scripting" />
    </template>
</VPTeamPageSection>

<VPTeamPageSection>
    <template #title>International RP Server</template>
    <template #lead></template>
    <template #members>
     <VPTeamMembers size="medium" :members="International_RP_Server" />
    </template>
</VPTeamPageSection>

<VPTeamPageSection>
    <template #title>German RR Server</template>
    <template #lead></template>
    <template #members>
     <VPTeamMembers size="medium" :members="German_RP_Server" />
    </template>
</VPTeamPageSection>

<VPTeamPageSection>
  <template #title>Info</template>
  <template #lead>
      <h1>📀 TIER II:</h1>
      <li>Beta access for specific scripts and mappings</li>
      <li>Advertisement for your RP server</li>
      <h1>💿 TIER I:</h1>
      <li>Advertisement for your RP serve</li>
  </template>
</VPTeamPageSection>
</VPTeamPage>