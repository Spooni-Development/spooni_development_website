---
layout: page
title: Partner
sidebar: false
---

<script setup>
    import {
    VPTeamPage, 
    VPTeamPageTitle,
    VPTeamMembers,
    VPTeamPageSection
    } from 'vitepress/theme'

    const developer = [
        {
            avatar: 'https://cdn.discordapp.com/icons/953724414028046356/cdf1bfa5b691ce5d0aad5d93086387d4.webp?size=128',
            name: 'DrShwaggins Scripts',
            // title: '🔧' ,
            links: [
                { icon: 'discord', link: 'https://discord.gg/m8SmDPWcu3' },
            ]
        },    
        {
            avatar: 'https://cdn.discordapp.com/icons/777290543406776341/a_8893fe3c222deef6054f729a541d2975.webp?size=128',
            name: 'Syn Scripts',
            // title: '🔧' ,
            links: [
                { icon: 'discord', link: 'https://discord.gg/synscripts' },
            ]
        },
        {
            avatar: 'https://cdn.discordapp.com/icons/1021957724440899584/a_1d0f9cf6a58096b91548f4c164ce0917.webp?size=128',
            name: 'Bryce Canyon County',
            // title: '🔧' ,
            links: [
                { icon: 'discord', link: 'https://discord.gg/GuwS7Y7PA3' },
            ]
        },
        {
            avatar: 'https://cdn.discordapp.com/icons/907324006699499570/09592146e6269e1720f6322170c3d532.webp?size=128',
            name: 'SIREC STUDIO',
            // title: '🔧' ,
            links: [
                { icon: 'discord', link: 'https://discord.gg/hrWUHjjXwn' },
            ]
        },
        {
            avatar: 'https://cdn.discordapp.com/icons/870659641879724104/14e8a8210a5ab84406eca3abaa3a09c4.webp?size=128',
            name: 'Gum Scripts',
            // title: '🔧' ,
            links: [
                { icon: 'discord', link: 'https://discord.gg/8ZzQqGSngH' },
            ]
        },
        {
            avatar: 'https://cdn.discordapp.com/icons/991835489160151171/fb1669ec949e09aeb9ed9da768a59e57.webp?size=128',
            name: 'Xakra Scripts',
            // title: '🔧' ,
            links: [
                { icon: 'discord', link: 'https://discord.gg/aRK4g7KNQr' },
            ]
        },
        {
            avatar: 'https://cdn.discordapp.com/icons/1106290207390703666/d8562aa500b4fb01423ac5abdc3d2e1a.webp?size=128',
            name: 'Fixitfy',
            // title: '🔧' ,
            links: [
                { icon: 'discord', link: 'https://discord.gg/srrmCQ58WP' },
            ]
        },
        {
            avatar: 'https://cdn.discordapp.com/icons/1167625175676768276/aacf15af7a8e2e84427598cc00d33a32.webp?size=128',
            name: 'D-Labs',
            // title: '🔧' ,
            links: [
                { icon: 'discord', link: 'https://discord.gg/btGP4gucKZ' },
            ]
        },
        {
            avatar: 'https://cdn.discordapp.com/icons/820144145040408586/3e3f061f13ded09919a78346465aae9e.webp?size=128',
            name: 'Hellcat Development',
            // title: '🔧' ,
            links: [
                { icon: 'discord', link: 'https://discord.gg/GGm6b3ChFX' },
            ]
        },
        {
            avatar: 'https://cdn.discordapp.com/icons/1022133473508589609/67188236c70ac2e4afc6e17a64013a42.webp?size=128',
            name: 'NIGHT SHIFT STUDIO',
            // title: '🔧' ,
            links: [
                { icon: 'discord', link: 'https://discord.gg/n26dFYTNCa' },
            ]
        },
        {
            avatar: 'https://cdn.discordapp.com/icons/919890110177230898/19f6a0b86b48079bcf9e51d85af415e1.webp?size=128',
            name: 'Mega Development',
            // title: '🔧' ,
            links: [
                { icon: 'discord', link: 'https://discord.gg/kfFE3JrySd' },
            ]
        },
        {
            avatar: 'https://cdn.discordapp.com/icons/788825023565529108/12dfa8562af24318350f7b418e21818a.webp?size=128',
            name: 'BulgaR Scripts',
            // title: '🔧' ,
            links: [
                { icon: 'discord', link: 'https://discord.gg/7Ac56XKYRY' },
            ]
        },
        {
            avatar: 'https://cdn.discordapp.com/icons/942431188881141820/79a5d93ced30fa576d14d70c5d46b8d6.webp?size=128',
            name: 'SireVLC',
            // title: '🔧' ,
            links: [
                { icon: 'discord', link: 'https://discord.gg/2zEQY8RaFb' },
            ]
        },
        {
            avatar: 'https://cdn.discordapp.com/icons/1137911244658065529/d2f22d99fd2a27142d39b0d1bda76851.webp?size=128',
            name: 'JR Scripts',
            // title: '🔧' ,
            links: [
                { icon: 'discord', link: 'https://discord.gg/njZVvWYmpE' },
            ]
        },    
        {
            avatar: 'https://cdn.discordapp.com/icons/1118302504900370442/25e197dc3945d2d24a61886f600b8b52.webp?size=128',
            name: 'LeFruScripts',
            // title: '🔧' ,
            links: [
                { icon: 'discord', link: 'https://discord.gg/nqcA4JJ2dC' },
            ]
        },
        {
            avatar: 'https://cdn.discordapp.com/icons/716696767407718493/a_578e1b7e584cf62f67741baba33ee0d6.webp?size=128',
            name: "ZioMark's HUB",
            // title: '🔧' ,
            links: [
                { icon: 'discord', link: 'https://discord.gg/ziomark' },
            ]
        },
    ]

    const server = [

        // TIER II
        {
            avatar: 'https://cdn.discordapp.com/icons/921617122055049216/a_abd162f2c3887cf8264912c8c1803d78.webp?size=128',
            name: 'Syn County',
            title: '📀 TIER II',
            links: [
                { icon: 'discord', link: 'https://discord.gg/syncounty' },
            ]
        },
        {
            avatar: 'https://cdn.discordapp.com/icons/894324037419958292/a_09b712c49286d2b491b75f0ece5c60b6.webp?size=128',
            name: 'GoldRush Roleplay',
            title: '📀 TIER II',
            links: [
                { icon: 'discord', link: 'https://discord.gg/goldrushroleplay' },
            ]
        },
        {
            avatar: 'https://cdn.discordapp.com/icons/1026351824946593803/b43d93f1c865c9717a9b9379ed3c4938.webp?size=128',        
            name: 'Oeste  Roleplay',
            title: '📀 TIER II',
            links: [
                { icon: 'discord', link: 'https://discord.gg/oesteroleplay' },
            ]
        },
        {
            avatar: 'https://cdn.discordapp.com/icons/1013107968545406986/14d10c341e23f8cb21680d0454acb4c1.webp?size=128',
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
            avatar: 'https://cdn.discordapp.com/icons/1143877766547259422/39efb06a10bdec0fa2f6a50000389162.webp?size=128',
            name: 'High Noon',
            title: '📀 TIER II',
            links: [
                { icon: 'discord', link: 'https://discord.gg/highnoon' },
            ]
        },
        {
            avatar: 'https://cdn.discordapp.com/icons/1073213859541823590/a_89fca066570539923c535bf2bc48d497.webp?size=128',
            name: 'Wild Frontier Roleplay',
            title: '📀 TIER II',
            links: [
                { icon: 'discord', link: 'https://discord.gg/wildfrontierrp' },
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
            avatar: 'https://cdn.discordapp.com/icons/1316932126725111818/a_c313d8c2f1056f14a8614fbcafb56e85.webp?size=128',
            name: 'Wild West Roleplay',
            title: '📀 TIER II', 
            links: [
                { icon: 'discord', link: 'https://discord.gg/mQTn4JVdxa' },
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
            avatar: 'https://cdn.discordapp.com/icons/889136267516870717/a_eb4a4e98bdf420d7d006e8bd78d667e9.webp?size=128',
            name: 'Der Wilde Westen',
            title: '📀 TIER II',
            links: [
                { icon: 'discord', link: 'https://discord.gg/snyctcZD2G' },
            ]
        },
        {
            avatar: 'https://cdn.discordapp.com/icons/712678812428664862/5d587c76906b6c54b6d5964ac1d6e1c3.webp?size=128',
            name: 'WILDFIN',
            title: '📀 TIER II',
            links: [
                { icon: 'discord', link: 'https://discord.gg/WCvy8hHYXg' },
            ]
        },
        {
            avatar: 'https://cdn.discordapp.com/icons/1051237554533445692/914d49dbe587b0f5f6f3ddcf49ae4088.webp?size=128',
            name: 'Lucky Valley',
            title: '📀 TIER II',
            links: [
                { icon: 'discord', link: 'https://discord.gg/luckyvalley' },
            ]
        },
        {
            avatar: 'https://cdn.discordapp.com/icons/846851814547783690/6ecb01d8146b0f7655daa9d18c632ca3.webp?size=128',
            name: 'REDWest LifeRP',
            title: '📀 TIER II',
            links: [
                { icon: 'discord', link: 'https://discord.gg/xsbWxUuD' },
            ]
        },
        {
            avatar: 'https://cdn.discordapp.com/icons/589982489607667712/736c7afcf0fa72a70083d11b622c9b6d.webp?size=128',
            name: 'Ranch Roleplay',
            title: '📀 TIER II',
            links: [
                { icon: 'discord', link: 'https://discord.gg/ranch' },
            ]
        },
        {
            avatar: 'https://cdn.discordapp.com/icons/1182659001645797447/a_bf2e8ecf84e1ed91c26ec784b390dc7c.webp?size=128',
            name: 'Arizona RP',
            title: '📀 TIER II',
            links: [
                { icon: 'discord', link: 'https://discord.gg/arizonarpofficial' },
            ]
        },
        {
            avatar: 'https://cdn.discordapp.com/icons/1265811755549069372/4461f2067efa359c134fcc24e7ba49e4.webp?size=128',
            name: 'BAYANG SINILANGAN RP',
            title: '📀 TIER II',
            links: [
                { icon: 'discord', link: 'https://discord.gg/bayangsinilanganrp' },
            ]
        },
        {
            avatar: 'https://cdn.discordapp.com/icons/790331820042223616/95b6baa1a19e69aef592b19c078cdba8.webp?size=128',
            name: 'RED RIVER',
            title: '📀 TIER II',
            links: [
                { icon: 'discord', link: 'https://discord.gg/redriver' },
            ]
        },
        {
            avatar: 'https://cdn.discordapp.com/icons/1317931784452706357/4ae6459909240608d2dccba41d939037.webp?size=128',
            name: 'The Ravens Prophecy',
            title: '📀 TIER II',
            links: [
                { icon: 'discord', link: 'https://discord.gg/QzrCQphAv8' },
            ]
        },
        {
            avatar: 'https://cdn.discordapp.com/icons/792204426659495967/7b72b2069d5fc90e4e1427a4c63e90fe.webp?size=128',
            name: 'Monarch RP',
            title: '📀 TIER II',
            links: [
                { icon: 'discord', link: 'https://discord.gg/M3zg2DpqXW' },
            ]
        },
        {
            avatar: 'https://cdn.discordapp.com/icons/1358411622799900783/a_8dae6f7e56b5c22836ce2fecf32f0da3.webp?size=128',
            name: 'Bounty Bay',
            title: '📀 TIER II',
            links: [
                { icon: 'discord', link: 'https://discord.gg/ghheGn2WUa' },
            ]
        },
        {
            avatar: 'https://cdn.discordapp.com/icons/1123352191751704606/861afcc739b079b515fd37196a9e8931.webp?size=128',
            name: 'Sundown Rising',
            title: '📀 TIER II',
            links: [
                { icon: 'discord', link: 'https://discord.gg/sr-roleplay' },
            ]
        },
        {
            avatar: 'https://cdn.discordapp.com/icons/1145304254886707200/4f2eeea4c193953106b531e7f8691541.webp?size=128',
            name: 'High Stakes Roleplay',
            title: '📀 TIER II',
            links: [
                { icon: 'discord', link: 'https://discord.gg/highstakes' },
            ]
        },
        {
            avatar: 'https://cdn.discordapp.com/icons/926153128561246218/236ae10cb12b3e58e7b880e42c463c43.webp?size=128',
            name: 'FarWest Québec',
            title: '📀 TIER II',
            links: [
                { icon: 'discord', link: 'https://discord.gg/farwestqc' },
            ]
        },
        {
            avatar: 'https://cdn.discordapp.com/icons/1231614178171814008/a_ce254b829e5f350927276d41685f5834.webp?size=128',
            name: 'Red West',
            title: '📀 TIER II',
            links: [
                { icon: 'discord', link: 'https://discord.gg/NTaZx65MT7' },
            ]
        },
        {
            avatar: 'https://cdn.discordapp.com/icons/1165843121058361354/cde5be147092446e31eb6d3f3b1e086e.webp?size=128',
            name: 'Secret Society County',
            title: '📀 TIER II',
            links: [
                { icon: 'discord', link: 'https://discord.gg/9K9mXH9PUF' },
            ]
        },
        {
            avatar: 'https://cdn.discordapp.com/icons/1045017560913035284/585d856460f99795fc9833fc9e0e4060.webp?size=128',
            name: 'Frontier Stories',
            title: '📀 TIER II',
            links: [
                { icon: 'discord', link: 'https://discord.gg/frontierstories1899' },
            ]
        },
        {
            avatar: 'https://cdn.discordapp.com/icons/1139609447480688733/a_04f9c9ad68538eb9f3f7a253bf04222d.webp?size=128',
            name: 'Legendary Roleplay',
            title: '📀 TIER II',
            links: [
                { icon: 'discord', link: 'https://discord.gg/legendaryrp' },
            ]
        },
        {
            avatar: 'https://cdn.discordapp.com/icons/1261049461103398943/a_53b39feb3beadec4d041c0bd0a02e74e.webp?size=128',
            name: 'Whiskey Bend RP',
            title: '📀 TIER II',
            links: [
                { icon: 'discord', link: 'https://discord.gg/sYXzRuUB6y' },
            ]
        },
            {
            avatar: 'https://cdn.discordapp.com/icons/1352718864580083752/2d3f204cb5a81d91c30fe597c9c832ba.webp?size=128',
            name: 'Last Train County',
            title: '📀 TIER II',
            links: [
                { icon: 'discord', link: 'https://discord.gg/8nNggdmg8J' },
            ]
        },
            {
            avatar: 'https://cdn.discordapp.com/icons/1189279090851725442/8469a9d4b1930c209b49f6b04a169030.webp?size=128',
            name: 'GunSmoke Trails RP',
            title: '📀 TIER II',
            links: [
                { icon: 'discord', link: 'https://discord.gg/PdzbFwJ9Mt' },
            ]
        },
        // TIER I
        {
            avatar: 'https://cdn.discordapp.com/icons/1357036506522583381/a_cbd91ec7350a4592f01c20f471e001e6.webp?size=128',
            name: 'NOMAD ROLEPLAY',
            title: '💿 TIER I',
            links: [
                { icon: 'discord', link: 'https://discord.gg/27T78WEyWh' },
            ]
        },
        {
            avatar: 'https://cdn.discordapp.com/icons/1308329282602274856/ef25d9234f28582cf715df2c018ee0ba.webp?size=128',
            name: 'Vengeful County',
            title: '📀 TIER II',
            links: [
                { icon: 'discord', link: 'https://discord.gg/5wdyC4frRf' },
            ]
        },

        // TIER I
        {
            avatar: 'https://cdn.discordapp.com/icons/1206360727758307348/8dedd210d7df0a322e207ca143aa1425.webp?size=128',
            name: 'Outlaws Roleplay',
            title: '💿 TIER I',
            links: [
                { icon: 'discord', link: 'https://discord.gg/' },
            ]
        },
        {
            avatar: 'https://cdn.discordapp.com/icons/877929107416039514/a_ce0069930fc48fb49ef9c764b86b6df7.webp?size=128',
            name: 'Texas Roleplay',
            title: '💿 TIER I',
            links: [
                { icon: 'discord', link: 'https://discord.gg/texasroleplay' },
            ]
        },
        {
            avatar: 'https://cdn.discordapp.com/icons/1315778409535766648/39c8427b6a61ffc53922354530a1213c.webp?size=128',
            name: 'Redwood County RP',
            title: '💿 TIER I', 
            links: [
                { icon: 'discord', link: 'https://discord.gg/tMfxKdYFCv' },
            ]
        },
        {
            avatar: 'https://cdn.discordapp.com/icons/1326256355824242748/612960524e4f1a460e2f81e952992981.webp?size=128',
            name: 'Untamed Roleplay',
            title: '💿 TIER I', 
            links: [
                { icon: 'discord', link: 'https://discord.gg/5W93wuwXZ3' },
            ]
        },
        {
            avatar: 'https://cdn.discordapp.com/icons/1275435887781478411/11d4883dcf621b9cdcd83de271b2a042.webp?size=128',
            name: 'HOMELAND - ROLEPLAY',
            title: '💿 TIER I',
            links: [
                { icon: 'discord', link: 'https://discord.gg/UgmakBkKJT' },
            ]
        },
        {
            avatar: 'user.svg',
            name: '1889 Roleplay',
            title: '💿 TIER I',
            links: [
                { icon: 'discord', link: 'https://discord.gg/1889roleplay' },
            ]
        },
        {
            avatar: 'https://cdn.discordapp.com/icons/1108094279131344986/025ad839e7230e218117514eb7ea6247.webp?size=128',
            name: 'Dust Dreams',
            title: '💿 TIER I',
            links: [
                { icon: 'discord', link: 'https://discord.gg/ddrp' },
            ]
        },
        {
            avatar: 'https://cdn.discordapp.com/icons/1281752229421912155/8b2c2dca608f37003c7f7b097c1b3ec8.webp?size=128',
            name: 'Promised Land Reborn',
            title: '💿 TIER I',
            links: [
                { icon: 'discord', link: 'https://discord.com/invite/promisedlandrp' },
            ]
        },
        {
            avatar: 'https://cdn.discordapp.com/icons/1208456421855731752/2bebb693bebe129d102a4ba84593e220.webp?size=128',
            name: 'Syntax Roleplay 1899',
            title: '💿 TIER I',
            links: [
                { icon: 'discord', link: 'https://discord.gg/KTtaEvKKZw' },
            ]
        },
        {
            avatar: 'https://cdn.discordapp.com/icons/1237280019135594528/cb83837332a8b92c2102df177551c53e.webp?size=128',
            name: 'Aces & Eights RP',
            title: '💿 TIER I',
            links: [
                { icon: 'discord', link: 'https://discord.gg/MjCVHTTnaE' },
            ]
        },
        {
            avatar: 'https://cdn.discordapp.com/icons/1299654221750210560/796c9533bcf54a2d3ab0980ce8079c4c.webp?size=128',
            name: 'Dusty Trails Roleplay',
            title: '💿 TIER I',
            links: [
                { icon: 'discord', link: 'https://discord.gg/T3Vm6Dka6H' },
            ]
        },
        {
            avatar: 'https://cdn.discordapp.com/icons/759068924833824829/a4af0c5705da5d1a5afe1bb4a6b84120.webp?size=128',
            name: 'Rodeo Roleplay',
            title: '💿 TIER I',
            links: [
                { icon: 'discord', link: 'https://discord.gg/rodeorp' },
            ]
        },
        {
            avatar: 'https://cdn.discordapp.com/icons/1211215512705441833/317c75dac17619cc04695409a96347e3.webp?size=128',
            name: 'Beyond the Rift',
            title: '💿 TIER I',
            links: [
                { icon: 'discord', link: 'https://discord.gg/vqDNBk4YYT' },
            ]
        },
        {
            avatar: 'https://cdn.discordapp.com/icons/1288552504648400967/c244fd0c71feb43b8caac4695878337e.webp?size=128',
            name: 'Starr Hawke RP',
            title: '💿 TIER I',
            links: [
                { icon: 'discord', link: 'https://discord.gg/vxEqexFDGp' },
            ]
        },
        {
            avatar: 'https://cdn.discordapp.com/icons/1299969838743031818/2ee8c18e890836b5bde15beda244ae9d.webp?size=128',
            name: 'State of New Heaven 1890',
            title: '💿 TIER I',
            links: [
                { icon: 'discord', link: 'https://discord.gg/newhaven' },
            ]
        },
        {
            avatar: 'https://cdn.discordapp.com/icons/402330838072688640/addf19be48e8ce18ba46c8cd8a3cbed7.webp?size=128',
            name: 'Legacy Roleplay and Gaming',
            title: '💿 TIER I',
            links: [
                { icon: 'discord', link: 'https://discord.gg/legacyrpandgaming' },
            ]
        },
        {
            avatar: 'https://cdn.discordapp.com/icons/1116011983486062692/33b3db05278885c78b7d70d07f8035a6.webp?size=128',
            name: 'Our Lands',
            title: '💿 TIER I',
            links: [
                { icon: 'discord', link: 'https://discord.gg/a78YUPzcrt' },
            ]
        },    
        {
            avatar: 'https://cdn.discordapp.com/icons/1146917669564592329/0bc2431e6a85f25593894b2006dfb816.webp?size=128',
            name: 'Westlands RP',
            title: '💿 TIER I',
            links: [
                { icon: 'discord', link: 'https://discord.gg/sPJzSNaced' },
            ]
        },
        {
            avatar: 'https://cdn.discordapp.com/icons/1178558432832409651/86a197b05b168c0d5d558b8b69e42215.webp?size=128',
            name: 'California Roleplay',
            title: '💿 TIER I',
            links: [
                { icon: 'discord', link: 'https://discord.gg/californiaroleplay' },
            ]
        },
        {
            avatar: 'https://cdn.discordapp.com/icons/1357036506522583381/a_cbd91ec7350a4592f01c20f471e001e6.webp?size=128',
            name: 'NOMAD ROLEPLAY',
            title: '💿 TIER I',
            links: [
                { icon: 'discord', link: 'https://discord.gg/27T78WEyWh' },
            ]
        },
        {
            avatar: 'https://cdn.discordapp.com/icons/1116885691809407007/431f673fda689a3d7f7dc7d853a174c7.webp?size=128',
            name: 'Western Dreams',
            title: '💿 TIER I',
            links: [
                { icon: 'discord', link: 'https://discord.gg/XAhkvVEtqg' },
            ]
        },
        {
            avatar: 'user.svg',        
            name: 'Wasteland Stories',
            title: '💿 TIER I',
            links: [
                { icon: 'discord', link: 'https://discord.gg/wasteland' },
            ]
        },
        {
            avatar: 'https://cdn.discordapp.com/icons/1179139330476875786/f8c5b621595b2693234c7d2bb0a893c9.webp?size=128',        
            name: '2Toxic',
            title: '💿 TIER I',
            links: [
                { icon: 'discord', link: 'https://discord.gg/2toxic-1179139330476875786' },
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
            avatar: 'https://cdn.discordapp.com/icons/1243301682637705278/06e85774270bb50ba7721cf72d181c72.webp?size=128',
            name: 'Moonstone Roleplay',
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
            avatar: 'https://cdn.discordapp.com/icons/1196012895251734580/c6ed810896da68b7ec2cd3568641f3d7.webp?size=128',
            name: 'Little Creek',
            title: '💿 TIER I',
            links: [
                { icon: 'discord', link: 'https://discord.gg/littlecreek' },
            ]
        },
    ]
</script>

<VPTeamPage>
    <VPTeamPageTitle><template #title>Our Partners</template></VPTeamPageTitle>
    <!-- Developer -->
    <VPTeamPageSection>
        <template #title>Developer</template>
        <template #members><VPTeamMembers size="small" :members="developer"/></template>
    </VPTeamPageSection>
    <!-- Roleplay Server -->
    <VPTeamPageSection>
        <template #title>Roleplay Server</template>
        <template #members><VPTeamMembers size="small" :members="server"/></template>
    </VPTeamPageSection>
    <!-- Info -->
    <VPTeamPageSection>
        <template #title>Info</template>
        <template #lead>
            <div style="display: flex; justify-content: center; gap: 200px;">
                <div style="text-align: left; flex-shrink: 0; white-space: normal;">
                    <h1><strong>📀 TIER II:</strong></h1>
                    <ul>
                        <li>- Beta access for specific scripts and mappings</li>
                        <li>- Advertisement for your RP server</li>
                    </ul>
                </div>
                <div style="text-align: left; flex-shrink: 0; white-space: normal;">
                    <h1><strong>💿 TIER I:</strong></h1>
                    <ul>
                        <li>- Advertisement for your RP server</li>
                    </ul>
                </div>
            </div>
        </template>
    </VPTeamPageSection>
</VPTeamPage>