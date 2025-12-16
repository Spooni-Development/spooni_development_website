---
title: Wild Horse Manager
description: Comprehensive wild horse spawning and taming system by Dietrich Development. Capture, tame, and manage wild horses.
---

# 🐎 Wild Horse Manager
Documentation relating to the spooni_wildhorse.

:::tabs
== INFO
<iframe width="560" height="315" src="https://dunb17ur4ymx4.cloudfront.net/packages/images/537d86380a2184ff2a744bafc0db5dbd811bcc54.png" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

<a href="https://tebex.dietrich-development.com//package/6961300?basket=codikp-a5bb6f04b2ae1a89c8627950cd944742fa7b8842" class="button-buy">🛒 Buy Now</a>
:::

## 1. Installation
spooni_wildhorse works Standalone.

To install spooni_wildhorse:
- Download the resource
  - On [Cfx.re Portal](https://portal.cfx.re/)
- Drag and drop the resource into your resources folder
  - `spooni_wildhorse`
- Add this ensure in your server.cfg
  ```
    ensure spooni_wildhorse
  ```
- Now you can configure and translate the script as you like
  - `config.lua`
- At the end, restart the server

If you have any problems, you can always open a ticket in the [Spooni Discord](https://discord.gg/spooni).

## 2. Usage
Bring realism and control to your RedM wilderness with Wild Horse Manager – a modular system that lets you define which horse breeds spawn in which regions, block unwanted models, and even replace wild horse types dynamically.
Perfect for hunting, taming, or roleplay scenarios where immersion and ecosystem balance matter.

## 3. For developers

:::details Config.lua
```lua
Config = {}

Config.debug = false


-- horse models in this list that are set to true will no longer spawn in the world as wild horses
-- use this to block specific horses from beeing available in the world
-- Config.blackListHorses = {} to disable
Config.blackListHorses = {
    "a_c_horse_morgan_bayroan",
}


-- Config.replaceHorse = {} to disable
-- list of global replacements for horses if no horse group is set for the current location => Config.Districts
Config.replaceHorse = {
    ['a_c_horse_tennesseewalker_blackrabicano'] = 'a_c_horsemule_01',
    ['a_c_horse_tennesseewalker_chestnut'] = 'a_c_horsemule_01',
    ['a_c_horse_tennesseewalker_dapplebay'] = 'a_c_horsemule_01',
    ['a_c_horse_tennesseewalker_flaxenroan'] = 'a_c_horsemule_01',
    ['a_c_horse_tennesseewalker_goldpalomino_pc'] = 'a_c_horsemule_01',
    ['a_c_horse_tennesseewalker_mahoganybay'] = 'a_c_horsemule_01',
    ['a_c_horse_tennesseewalker_redroan'] = 'a_c_horsemule_01',
    ['a_c_horse_americanstandardbred_buckskin'] = 'a_c_horsemule_01',
    ['a_c_horse_morgan_bay'] = 'a_c_horsemule_01',
    ['a_c_horse_missourifoxtrotter_silverdapplepinto'] = 'a_c_horsemule_01',
    ['a_c_horse_missourifoxtrotter_dapplegrey'] = 'a_c_horsemule_01',
}

Config.horseGroups = {
    tennesseewalker = {
        'a_c_horse_tennesseewalker_blackrabicano',
        'a_c_horse_tennesseewalker_chestnut',
        'a_c_horse_tennesseewalker_dapplebay',
        'a_c_horse_tennesseewalker_flaxenroan',
        'a_c_horse_tennesseewalker_goldpalomino_pc',
        'a_c_horse_tennesseewalker_mahoganybay',
        'a_c_horse_tennesseewalker_redroan'
    },
    mustang = {
        'a_c_horse_mustang_goldendun',
        'a_c_horse_mustang_grullodun',
        'a_c_horse_mustang_tigerstripedbay',
        'a_c_horse_mustang_wildbay'
    },
    missourifoxtrotter = {
        'a_c_horse_missourifoxtrotter_blacktovero',
        'a_c_horse_missourifoxtrotter_blueroan',
        'a_c_horse_missourifoxtrotter_buckskinbrindle',
        'a_c_horse_missourifoxtrotter_dapplegrey',
        'a_c_horse_missourifoxtrotter_sablechampagne',
        'a_c_horse_missourifoxtrotter_silverdapplepinto'
    },
    turkoman = {
        'a_c_horse_turkoman_black',
        'a_c_horse_turkoman_chestnut',
        'a_c_horse_turkoman_grey',
        'a_c_horse_turkoman_perlino',
        'a_c_horse_turkoman_darkbay',
        'a_c_horse_turkoman_gold',
        'a_c_horse_turkoman_silver'
    },
    arabian = {
        'a_c_horse_arabian_black',
        'a_c_horse_arabian_grey',
        'a_c_horse_arabian_redchestnut',
        'a_c_horse_arabian_redchestnut_pc',
        'a_c_horse_arabian_rosegreybay',
        'a_c_horse_arabian_warpedbrindle_pc',
        'a_c_horse_arabian_white'
    },
    morgan = {
        'a_c_horse_morgan_bay',
        'a_c_horse_morgan_bayroan',
        'a_c_horse_morgan_flaxenchestnut',
        'a_c_horse_morgan_liverchestnut_pc',
        'a_c_horse_morgan_palomino'
    },
    americanpaint = {
        'a_c_horse_americanpaint_greyovero',
        'a_c_horse_americanpaint_overo',
        'a_c_horse_americanpaint_splashedwhite',
        'a_c_horse_americanpaint_tobiano'
    },
    appaloosa = {
        'a_c_horse_appaloosa_blacksnowflake',
        'a_c_horse_appaloosa_blanket',
        'a_c_horse_appaloosa_brownleopard',
        'a_c_horse_appaloosa_fewspotted_pc',
        'a_c_horse_appaloosa_leopard',
        'a_c_horse_appaloosa_leopardblanket'
    },
    andalusian = {
        'a_c_horse_andalusian_darkbay',
        'a_c_horse_andalusian_perlino',
        'a_c_horse_andalusian_rosegray'
    },
    breton = {
        'a_c_horse_breton_grullodun',
        'a_c_horse_breton_mealydapplebay',
        'a_c_horse_breton_redroan',
        'a_c_horse_breton_sealbrown',
        'a_c_horse_breton_sorrel',
        'a_c_horse_breton_steelgrey'
    },
    criollo = {
        'a_c_horse_criollo_baybrindle',
        'a_c_horse_criollo_bayframeovero',
        'a_c_horse_criollo_blueroanovero',
        'a_c_horse_criollo_dun',
        'a_c_horse_criollo_marblesabino',
        'a_c_horse_criollo_sorrelovero'
    },
    gypsy = {
        'a_c_horse_gypsycob_palominoblagdon',
        'a_c_horse_gypsycob_piebald',
        'a_c_horse_gypsycob_skewbald',
        'a_c_horse_gypsycob_splashedbay',
        'a_c_horse_gypsycob_splashedpiebald',
        'a_c_horse_gypsycob_whiteblagdon'
    },
    kladruber = {
        'a_c_horse_kladruber_black',
        'a_c_horse_kladruber_cremello',
        'a_c_horse_kladruber_dapplerosegrey',
        'a_c_horse_kladruber_grey',
        'a_c_horse_kladruber_silver',
        'a_c_horse_kladruber_white'
    },
    americanstandardbred = {
        'a_c_horse_americanstandardbred_black',
        'a_c_horse_americanstandardbred_buckskin',
        'a_c_horse_americanstandardbred_lightbuckskin',
        'a_c_horse_americanstandardbred_palominodapple',
        'a_c_horse_americanstandardbred_silvertailbuckskin'
    },
    ardennes = {
        'a_c_horse_ardennes_bayroan',
        'a_c_horse_ardennes_irongreyroan',
        'a_c_horse_ardennes_strawberryroan'
    },
    belgian = {
        'a_c_horse_belgian_blondchestnut',
        'a_c_horse_belgian_mealychestnut'
    },
    dutchwarmblood = {
        'a_c_horse_dutchwarmblood_chocolateroan',
        'a_c_horse_dutchwarmblood_sealbrown',
        'a_c_horse_dutchwarmblood_sootybuckskin'
    },
    hungarianhalfbred = {
        'a_c_horse_hungarianhalfbred_darkdapplegrey',
        'a_c_horse_hungarianhalfbred_flaxenchestnut',
        'a_c_horse_hungarianhalfbred_liverchestnut',
        'a_c_horse_hungarianhalfbred_piebaldtobiano'
    },
    kentuckysaddle = {
        'a_c_horse_kentuckysaddle_black',
        'a_c_horse_kentuckysaddle_buttermilkbuckskin_pc',
        'a_c_horse_kentuckysaddle_chestnutpinto',
        'a_c_horse_kentuckysaddle_grey',
        'a_c_horse_kentuckysaddle_silverbay'
    },
    norfolkroadster = {
        'a_c_horse_norfolkroadster_black',
        'a_c_horse_norfolkroadster_dappledbuckskin',
        'a_c_horse_norfolkroadster_piebaldroan',
        'a_c_horse_norfolkroadster_rosegrey',
        'a_c_horse_norfolkroadster_speckledgrey',
        'a_c_horse_norfolkroadster_spottedtricolor'
    },
    shire = {
        'a_c_horse_shire_darkbay',
        'a_c_horse_shire_lightgrey',
        'a_c_horse_shire_ravenblack'
    },
    suffolkpunch = {
        'a_c_horse_suffolkpunch_redchestnut',
        'a_c_horse_suffolkpunch_sorrel'
    },
    thoroughbred = {
        'a_c_horse_thoroughbred_blackchestnut',
        'a_c_horse_thoroughbred_bloodbay',
        'a_c_horse_thoroughbred_brindle',
        'a_c_horse_thoroughbred_dapplegrey',
        'a_c_horse_thoroughbred_reversedappleblack'
    },
    custom = {
        'a_c_horse_tennesseewalker_blackrabicano',
        'a_c_horse_tennesseewalker_chestnut',
        'a_c_horse_thoroughbred_blackchestnut',
        'a_c_horse_thoroughbred_bloodbay'
    },
    custom2 = {
        'a_c_horse_shire_darkbay',
        'a_c_horse_shire_lightgrey',
        'a_c_horse_shire_ravenblack',
        'a_c_horse_norfolkroadster_black',
        'a_c_horse_norfolkroadster_dappledbuckskin',
        'a_c_horse_norfolkroadster_piebaldroan'
    },
    donkeyAndMule = {
        'a_c_donkey_01',
        'a_c_horsemule_01',
        'a_c_horsemulepainted_01'
    }
}


--specified horse groups for districts (spawns random horses from the specified group) - so you define which horse group should spawn at which location/district
Config.Districts = {
	[2025841068] = {name = "BayouNwa", horseGroup = Config.horseGroups.shire},
	[822658194] = {name = "bigvalley",horseGroup = Config.horseGroups.tennesseewalker},
	[1308232528] = {name = "BluewaterMarsh", horseGroup = Config.horseGroups.norfolkroadster},
	[-108848014] = {name = "ChollaSprings",horseGroup = Config.horseGroups.tennesseewalker},
	[1835499550] = {name = "Cumberland",horseGroup = Config.horseGroups.tennesseewalker},
	[426773653] = {name = "DiezCoronas",horseGroup = Config.horseGroups.tennesseewalker}, --?
	[-2066240242] = {name = "GaptoothRidge",horseGroup = Config.horseGroups.tennesseewalker},
	[476637847] = {name = "greatPlains",horseGroup = Config.horseGroups.tennesseewalker},
	[-120156735] = {name = "GrizzliesEast",horseGroup = Config.horseGroups.tennesseewalker},
	[1645618177] = {name = "GrizzliesWest",horseGroup = Config.horseGroups.tennesseewalker},
	[-512529193] = {name = "GuarmaD",horseGroup = Config.horseGroups.tennesseewalker},
	[131399519] = {name = "Heartlands", horseGroup = Config.horseGroups.donkeyAndMule},
	[892930832] = {name = "HennigansStead",horseGroup = Config.horseGroups.tennesseewalker},
	[-1319956120] = {name = "Perdido",horseGroup = Config.horseGroups.tennesseewalker},
	[1453836102] = {name = "PuntaOrgullo",horseGroup = Config.horseGroups.tennesseewalker},
	[-2145992129] = {name = "RioBravo",horseGroup = Config.horseGroups.tennesseewalker},
	[178647645] = {name = "roanoke", horseGroup = Config.horseGroups.norfolkroadster},
	[-864275692] = {name = "scarlettMeadows", horseGroup = Config.horseGroups.norfolkroadster},
	[1684533001] = {name = "TallTrees",horseGroup = Config.horseGroups.tennesseewalker},
}


-- prevent the game from filling the ambient ped pool with non horse animals.
-- This ensures that there is always enough free slots to spawn horses if the game want them to spawn
-- You have to be very causious with setting the maxNonHorseAnimals slots to low, as they prevent other wild animals from spawning. 
-- Normaly the game will spawn around ~ 100 wild animals + human npcs at most. 
-- To find the best fitting number, you have to figure out how much human peds are there at all times (because of bad spawning mechanismns by the developers not using dynamic spawning)
-- e.g. store npcs from saint denis may be still in the pool even when you are currently in blackwater
-- You can use the command 'npcSlots' if `Config.debug = true` to draw lines to all peds that are currently in the pool. Teleport to a far location and wait a few seconds. All red lines are the problematic ones. 
-- The console will print you the amount of human peds that are rendered at all time
-- to come up with the correct value for Config.maxNonHorseAnimals, you have to do '100-YourNumberOfHumanPedsOnYourServer-15' 
Config.limitPedSpawnLimitsToBoostHorseSpawns = false --(not really recommended for bad pc setups)
Config.maxNonHorseAnimals = 50

Config.horseMania = false --ONLY FOR FUN MODE!! Turns litteraly ALL NPCs to Horses (Some weird behaviour and animations might show up)
```
:::