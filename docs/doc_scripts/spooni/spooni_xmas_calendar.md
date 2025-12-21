---
title: XMAS Calendar
description: Christmas calendar with daily rewards such as special quests, gold, cash, items, and weapons. Compatible with VORP, RSG, QBR, RPX, and RedEM frameworks.
---

# 🎄 XMAS Calender
Documentation relating to the spooni_xmas_calendar.

:::tabs
== INFO
<iframe width="560" height="315" src="https://dunb17ur4ymx4.cloudfront.net/packages/images/bfb1afde0bba66d0a6b4f2570ece04e50e8fe80e.png" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

<a href="https://spooni-mapping.tebex.io/package/7135204" class="button-buy" target="_blank" rel="noopener noreferrer">Buy Now</a>
:::

## 1. Installation
spooni_xmas_calendar works only with VORP, RSG, RPX & RedEM.

To install spooni_xmas_calendar:
- Download the resource
  - On [Cfx.re Portal](https://portal.cfx.re/)
- Drag and drop the resource into your resources folder
  - `spooni_xmas_calendar`
- Add this ensure in your server.cfg
  ```
    ensure spooni_xmas_calendar
  ```
- Now you can configure the script as you like
  - `config.lua`
- At the end, restart the server

If you have any problems, you can always open a ticket in the [Spooni Discord](https://discord.gg/spooni).

## 2. Usage
Use the item to open the Christmas calendar and collect your daily rewards. 

## 3. For developers

:::details Config.lua
```lua
Config = {
    Language = 'en',

    Dev = false, -- If true players can open the calendar even if it's not december

    Dynamic = false, -- If true players can open previous doors too if they haven't opened them

    Item = 'spooni_calendar',

    Calendar = {
        Rewards = {
            [1] = { title = "$5", description = "Cash Reward", type = "cash", amount = 5 },

            [2] = { title = "Letters to Santa", description = "Collect letters from children and bring them to the post office.", type = "quest", quest = "letters" },

            [3] = { title = "Ammo (Revolver)", description = "Revolver ammo reward.", type = "item", item = "ammorevolvernormal", amount = 1 },

            [4] = { title = "Lumber for the Fire", description = "Chop and deliver wood logs to an NPC’s cabin.", type = "quest", quest = "lumber" },

            [5] = { title = "Water", description = "Basic consumable.", type = "item", item = "water", amount = 1 },

            [6] = { title = "Tasty Traditions", description = "Hunt a Christmas turkey.", type = "quest", quest = "tasty" },

            [7] = { title = "Apple", description = "Basic consumable.", type = "item", item = "apple", amount = 1 },

            [8] = { title = "1 Gold", description = "Premium Currency", type = "gold", amount = 1 },

            [9] = { title = "Water", description = "Basic consumable.", type = "item", item = "water", amount = 1 },

            [10] = { title = "Apple", description = "Basic consumable.", type = "item", item = "apple", amount = 1 },

            [11] = { title = "Treasure Hunt", description = "Search for hidden treasure!", type = "quest", quest = "treasure" },

            [12] = { title = "Water", description = "Basic consumable.", type = "item", item = "water", amount = 1 },

            [13] = { title = "Apple", description = "Basic consumable.", type = "item", item = "apple", amount = 1 },

            [14] = { title = "Ammo (Varmint)", description = "Silent ammo for hunting.", type = "item", item = "ammovarmint", amount = 1 },

            [15] = { title = "Gift Hunt", description = "Find and open gifts scattered across the map.", type = "quest", quest = "gifts" },

            [16] = { title = "Frozen Supplies", description = "Deliver frozen goods across the region.", type = "quest", quest = "frozen_supplies" },

            [17] = { title = "Water", description = "Basic consumable.", type = "item", item = "water", amount = 1 },

            [18] = { title = "Apple",	description = "Basic consumable.", type = "item", item = "apple", amount = 1 },

            [19] = { title = "1 Gold Dust", description = "Refined gold particles.", type = "gold", amount = 1 },

            [20] = { title = "$2", description = "Cash Prize", type = "cash", amount = 2 },

            [21] = { title = "Water", description = "Basic consumable.", type = "item", item = "water", amount = 1 },

            [22] = { title = "1 Gold", description = "A rare holiday bonus.", type = "gold", amount = 1 },

            [23] = { title = "Frozen Supplies", description = "Deliver frozen goods across the region.", type = "quest", quest = "frozen_supplies" },

            [24] = { title = "$25", description = "The ultimate Christmas reward!", type = "cash", amount = 5 }
        }
    },

    Quests = {
        ['letters'] = {
            Kids = {
                {ped='a_m_y_nbxstreetkids_01', coords=vec4(1173.18, -188.2, 99.83, 292.22)},
                {ped='cs_mixedracekid', coords=vec4(-256.48, 851.92, 122.6, 13.04)},
                {ped='cs_sd_streetkid_01', coords=vec4(-2354.47, -2364.06, 61.64, 166.09)},
                {ped='cs_sd_streetkid_01b', coords=vec4(1882.68, -1834.7, 42.28, 177.76)},
                {ped='cs_sd_streetkid_02', coords=vec4(2782.33, -1296.65, 46.47, 151.53)},
                {ped='u_m_y_shackstarvingkid_01', coords=vec4(-1347.45, 2435.52, 307.27, 253.52)},
                {ped='a_m_y_nbxstreetkids_slums_01', coords=vec4(466.66, 2230.39, 246.36, 313.86)},
                {ped='a_m_y_sdstreetkids_slums_02', coords=vec4(2628.48, 1693.58, 114.5, 276.3)},
            },
            Kid_Blip = 'blip_scm_letter',
            Deliver = {coords=vec3(1522.85, 445.51, 90.68), blip='blip_scm_letter'},
            Rewards = {
                {type='cash', amount=10},
                {type='item', item='bread', amount=2}
            }
        },

        ['lumber'] = {
            Ped = {ped='cs_mp_oldman_jones', coords=vec4(2472.73, 2002.45, 167.14, 46.69), blip='blip_adversary_small'},
            Trees = {
                vec3(2447.73, 2035.48, 169.21),
                vec3(2418.56, 2042.53, 172.32),
                vec3(2407.36, 2044.34, 173.25)
            },
            Rewards = {
                {type='cash', amount=10},
                {type='item', item='bread', amount=2}
            }
        },

        ['tasty'] = {
            Ped = {ped='cs_creepyoldlady', coords=vec4(-1724.12, -87.47, 180.71, 215.91), blip='blip_adversary_small'},
            Rewards = {
                {type='cash', amount=10},
                {type='item', item='bread', amount=2}
            }
        },

        ['gifts'] = {
            Gifts = {
                vec3(1442.7820, -1947.9902, 51.4307),
                vec3(489.2415, -300.9575, 143.5993)
            },
            Gift_Models = {
                'mp006_s_lootablechest03x'
            },
            Blip = 'blip_chest',
            Random_Rewards_Per_Gift = {
                {type='cash', amount=10},
                {type='item', item='bread', amount=2}
            }
        },

        ['treasure'] = {
            Treasure_Model = 'p_chest01x',
            Random_Coords = {
                vec4(-748.92, -424.01, 40.81, 162.5),
                vec4(-764.33, -414.72, 40.94, 56.7),
            },
            Rewards = {
                {type='cash', amount=500},
                {type='item', item='bread', amount=2}
            }
        },

        ['frozen_supplies'] = {
            wagonCoords = vec3(-1888.35, 1317.41, 199.5),
            dropOff = vec3(-1826.88, -602.76, 154.43),
            Rewards = {
                {type='cash', amount=500},
                {type='item', item='bread', amount=2}
            }
        },
    }
}
```
:::
