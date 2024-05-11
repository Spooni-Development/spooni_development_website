---
prev: false
next: false
aside: false
---

# 🏠 Build my Home <Badge type="danger" text="IN WORK"/>
Documentation relating to the [spooni_build_my_home](https://spooni-mapping.tebex.io/package/6193414).

___
<br>
<iframe width="800" height="320" src="https://cdn.discordapp.com/attachments/1009153559029366838/1238900799279595600/thumbnail.png?ex=6640f7c8&is=663fa648&hm=23a39ea0ba17195acf67aba9fadba2b4814b07351fe91eae876a79fca811ed1d&" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>

## Add-ons
- [🏠 Build my Home V2](https://spooni-mapping.tebex.io/package/6194362)
- [🏠 Build my Home V3](https://spooni-mapping.tebex.io/package/6194363)

## 1. Installation
spooni_build_my_home works only with VORP, RSG & RPX. 

To install spooni_build_my_home:
- Drag and drop the resource into your resources folder
  - `spooni_build_my_home`
- Add this ensure in your server.cfg
  - `ensure spooni_build_my_home`
- Execute the SQL file
  - `spooni_houses.sql`
  - `items.sql`
- Now you can configure and translate the script as you like
  - `config.lua`
  - `translation.lua`
- At the end
  - Restart the server

If you have any problems, you can always open a ticket in the [Spooni Discord](https://discord.gg/spooni).

## 2. Usage
Build your own house with our house props in 21 steps anywhere on the map, furnish them or transfer them. 

## 3. For developers

:::details Config.lua
```lua
Config = {}
Config.Framework = 'vorp' -- select your framework (vorp, rpx, rsg)
Config.Locale = 'en' -- select your language (en, de, fr, es)
Config.NoTXAdmin = false -- if you have no txAdmin on your Server.
Config.Furniture = true -- if you want to furnish the houses.
Config.Storage = true -- if you want to have storage in the houses.
Config.DistanceBetweenHouses = 25.0 -- the minimum distance a new house must have before it can be built.

Config.BlockedZones = {
   [1] = { -- St Denis
        coords = vector3(2605.814, -1263.41, 52.681), 
        distance = 150.0,
    },
    [2] = { -- Rhodes
        coords = vector3(1331.761, -1309.36, 76.444),
        distance = 50.0,
    },
    [3] = { -- Blackwater 
        coords = vector3(-801.510, -1293.28, 43.522),
        distance = 100.0,
    },
    [4] = { -- Valentine
        coords = vector3(-295.363, 750.4001, 117.95),
        distance = 50.0,
    },
    [5] = { -- Strawberry
        coords = vector3(-1799.77, -398.492, 152.55),
        distance = 50.0,
    },
    [6] = { -- Annesburg
        coords = vector3(2912.352, 1371.321, 46.675),
        distance = 100.0,
    },
    [7] = { -- Van Horn
        coords = vector3(2968.969, 526.4790, 44.078),
        distance = 50.0,
    },
    [8] = { -- Armadillo
        coords = vector3(-3676.72, -2605.03, -13.72),
        distance = 50.0,
    },
    [9] = { -- Tumbleweed
        coords = vector3(-5522.91, -2939.22, -1.980),
        distance = 50.0,
    },
}

Config.HousePromptKeys = {
    ['toggle_lock'] = `INPUT_INTERACT_OPTION1`, -- [G]
	['furniture_placement'] = `INPUT_FRONTEND_LEFT`, -- [LEFT ARROW]
	['add_key_holder'] = `INPUT_FRONTEND_UP`, -- [UP ARROW]
	['remove_key_holder'] = `INPUT_FRONTEND_DOWN`, -- [DOWN ARROW]
	['transfer_house'] = `INPUT_FRONTEND_RIGHT`, -- [RIGHT ARROW]
	['open_storage'] = `INPUT_INTERACT_POS`, -- [R]
	['upgrade_house'] = `INPUT_INTERACT_OPTION1`, -- [G]
	['furniture_removal'] = `INPUT_FRONTEND_RUP`, -- [LEFT CONTROL]
}

Config.PlacementPromptKeys = {
    ['rotate_-'] = 'INPUT_SELECT_NEXT_WEAPON', -- [MOUSE SCROLL DOWN]
	['rotate_+'] = 'INPUT_SELECT_PREV_WEAPON', -- [MOUSE SCROLL UP]
	['up_prompt'] = 'INPUT_FRONTEND_UP', -- [UP ARROW]
	['down_prompt'] = 'INPUT_FRONTEND_DOWN', -- [DOWN ARROW]
	['place_prompt'] = 'INPUT_FRONTEND_ACCEPT', -- [ENTER]
	['cancel_prompt'] = 'INPUT_FRONTEND_CANCEL', -- [ESC]
	['confirm_place_prompt'] = 'INPUT_FRONTEND_ACCEPT', -- [ENTER]
	['back_prompt'] = 'INPUT_FRONTEND_RLEFT', -- [E]
	['left_prompt'] = 'INPUT_FRONTEND_LEFT', -- [LEFT ARROW]
	['right_prompt'] = 'INPUT_FRONTEND_RIGHT', -- [RIGHT ARROW]
	['category_+'] = 'INPUT_SELECT_NEXT_WEAPON', -- [MOUSE SCROLL DOWN]
	['category_-'] = 'INPUT_SELECT_PREV_WEAPON', -- [MOUSE SCROLL UP]
	['rotate_furniture'] = 'INPUT_FRONTEND_Y', -- [LEFT SHIFT]
	['object_+'] = 'INPUT_FRONTEND_LEFT', -- [LEFT ARROW]
	['object_-'] = 'INPUT_FRONTEND_RIGHT', -- [RIGHT ARROW]
}

Config.HouseStorageLimit = {
    [1] = 25,
    [2] = 25,
    [3] = 30,
    [4] = 75,
    [5] = 35,
    [6] = 35,
}

Config.HouseStorageWeight = {
    [1] = 3500,
    [2] = 3500,
    [3] = 3500,
    [4] = 7500,
    [5] = 3500,
    [6] = 3500,
}

Config.BuildingRequirements = {
    [1] = {
        [1] = {
            wood = 1, -- item name
        },
        [2] = {
            wood = 1,
        },
        [3] = {
            wood = 1,
        },
        [4] = {
            wood = 1,
        },
        [5] = {
            wood = 1,
        },
        [6] = {
            wood = 1,
        },
        [7] = {
            wood = 1,
        },
        [8] = {
            wood = 1,
        },
        [9] = {
            wood = 1,
        },
        [10] = {
            wood = 1,
        },
        [11] = {
            wood = 1,
        },
        [12] = {
            wood = 1,
        },
        [13] = {
            wood = 1,
        },
        [14] = {
            wood = 1,
        },
        [15] = {
            wood = 1,
        },
        [16] = {
            wood = 1,
        },
        [17] = {
            wood = 1,
        },
        [18] = {
            wood = 1,
        },
        [19] = {
            wood = 1,
        },
        [20] = {
            wood = 1,
        },
        [21] = {
            wood = 1,
        },
    },
    [2] = {
        [1] = {
            wood = 1, -- item name
        },
        [2] = {
            wood = 1,
        },
        [3] = {
            wood = 1,
        },
        [4] = {
            wood = 1,
        },
        [5] = {
            wood = 1,
        },
        [6] = {
            wood = 1,
        },
        [7] = {
            wood = 1,
        },
        [8] = {
            wood = 1,
        },
        [9] = {
            wood = 1,
        },
        [10] = {
            wood = 1,
        },
        [11] = {
            wood = 1,
        },
        [12] = {
            wood = 1,
        },
        [13] = {
            wood = 1,
        },
        [14] = {
            wood = 1,
        },
        [15] = {
            wood = 1,
        },
        [16] = {
            wood = 1,
        },
        [17] = {
            wood = 1,
        },
        [18] = {
            wood = 1,
        },
        [19] = {
            wood = 1,
        },
        [20] = {
            wood = 1,
        },
        [21] = {
            wood = 1,
        },
    },
	[3] = {
        [1] = {
            wood = 1, -- item name
        },
        [2] = {
            wood = 1,
        },
        [3] = {
            wood = 1,
        },
        [4] = {
            wood = 1,
        },
        [5] = {
            wood = 1,
        },
        [6] = {
            wood = 1,
        },
        [7] = {
            wood = 1,
        },
        [8] = {
            wood = 1,
        },
        [9] = {
            wood = 1,
        },
        [10] = {
            wood = 1,
        },
        [11] = {
            wood = 1,
        },
        [12] = {
            wood = 1,
        },
        [13] = {
            wood = 1,
        },
        [14] = {
            wood = 1,
        },
        [15] = {
            wood = 1,
        },
        [16] = {
            wood = 1,
        },
        [17] = {
            wood = 1,
        },
        [18] = {
            wood = 1,
        },
        [19] = {
            wood = 1,
        },
        [20] = {
            wood = 1,
        },
        [21] = {
            wood = 1,
        },
    },
	[4] = {
        [1] = {
            wood = 1, -- item name
        },
        [2] = {
            wood = 1,
        },
        [3] = {
            wood = 1,
        },
        [4] = {
            wood = 1,
        },
        [5] = {
            wood = 1,
        },
        [6] = {
            wood = 1,
        },
        [7] = {
            wood = 1,
        },
        [8] = {
            wood = 1,
        },
        [9] = {
            wood = 1,
        },
        [10] = {
            wood = 1,
        },
        [11] = {
            wood = 1,
        },
        [12] = {
            wood = 1,
        },
        [13] = {
            wood = 1,
        },
        [14] = {
            wood = 1,
        },
        [15] = {
            wood = 1,
        },
        [16] = {
            wood = 1,
        },
        [17] = {
            wood = 1,
        },
        [18] = {
            wood = 1,
        },
        [19] = {
            wood = 1,
        },
        [20] = {
            wood = 1,
        },
        [21] = {
            wood = 1,
        },
    },
	[5] = {
        [1] = {
            wood = 1, -- item name
        },
        [2] = {
            wood = 1,
        },
        [3] = {
            wood = 1,
        },
        [4] = {
            wood = 1,
        },
        [5] = {
            wood = 1,
        },
        [6] = {
            wood = 1,
        },
        [7] = {
            wood = 1,
        },
        [8] = {
            wood = 1,
        },
        [9] = {
            wood = 1,
        },
        [10] = {
            wood = 1,
        },
        [11] = {
            wood = 1,
        },
        [12] = {
            wood = 1,
        },
        [13] = {
            wood = 1,
        },
        [14] = {
            wood = 1,
        },
        [15] = {
            wood = 1,
        },
        [16] = {
            wood = 1,
        },
        [17] = {
            wood = 1,
        },
        [18] = {
            wood = 1,
        },
        [19] = {
            wood = 1,
        },
        [20] = {
            wood = 1,
        },
        [21] = {
            wood = 1,
        },
    },
    [6] = {
        [1] = {
            wood = 1, -- item name
        },
        [2] = {
            wood = 1,
        },
        [3] = {
            wood = 1,
        },
        [4] = {
            wood = 1,
        },
        [5] = {
            wood = 1,
        },
        [6] = {
            wood = 1,
        },
        [7] = {
            wood = 1,
        },
        [8] = {
            wood = 1,
        },
        [9] = {
            wood = 1,
        },
        [10] = {
            wood = 1,
        },
        [11] = {
            wood = 1,
        },
        [12] = {
            wood = 1,
        },
        [13] = {
            wood = 1,
        },
        [14] = {
            wood = 1,
        },
        [15] = {
            wood = 1,
        },
        [16] = {
            wood = 1,
        },
        [17] = {
            wood = 1,
        },
        [18] = {
            wood = 1,
        },
        [19] = {
            wood = 1,
        },
        [20] = {
            wood = 1,
        },
        [21] = {
            wood = 1,
        },
    }
}


Config.StageTimer = {
    [1] = {
        [1] = 10000, -- building time
        [2] = 10000,
        [3] = 10000,
        [4] = 10000,
        [5] = 10000,
        [6] = 10000,
        [7] = 10000,
        [8] = 10000,
        [9] = 10000,
        [10] = 10000,
        [11] = 10000,
        [12] = 10000,
        [13] = 10000,
        [14] = 10000,
        [15] = 10000,
        [16] = 10000,
        [17] = 10000,
        [18] = 10000,
        [19] = 10000,
        [20] = 10000,
        [21] = 10000,
    },
    [2] = {
        [1] = 10000, -- building time
        [2] = 10000,
        [3] = 10000,
        [4] = 10000,
        [5] = 10000,
        [6] = 10000,
        [7] = 10000,
        [8] = 10000,
        [9] = 10000,
        [10] = 10000,
        [11] = 10000,
        [12] = 10000,
        [13] = 10000,
        [14] = 10000,
        [15] = 10000,
        [16] = 10000,
        [17] = 10000,
        [18] = 10000,
        [19] = 10000,
        [20] = 10000,
        [21] = 10000,
    },
	[3] = {
        [1] = 10000, -- building time
        [2] = 10000,
        [3] = 10000,
        [4] = 10000,
        [5] = 10000,
        [6] = 10000,
        [7] = 10000,
        [8] = 10000,
        [9] = 10000,
        [10] = 10000,
        [11] = 10000,
        [12] = 10000,
        [13] = 10000,
        [14] = 10000,
        [15] = 10000,
        [16] = 10000,
        [17] = 10000,
        [18] = 10000,
        [19] = 10000,
        [20] = 10000,
        [21] = 10000,
    },
	[4] = {
        [1] = 10000, -- building time
        [2] = 10000,
        [3] = 10000,
        [4] = 10000,
        [5] = 10000,
        [6] = 10000,
        [7] = 10000,
        [8] = 10000,
        [9] = 10000,
        [10] = 10000,
        [11] = 10000,
        [12] = 10000,
        [13] = 10000,
        [14] = 10000,
        [15] = 10000,
        [16] = 10000,
        [17] = 10000,
        [18] = 10000,
        [19] = 10000,
        [20] = 10000,
        [21] = 10000,
    },
	[5] = {
        [1] = 10000, -- building time
        [2] = 10000,
        [3] = 10000,
        [4] = 10000,
        [5] = 10000,
        [6] = 10000,
        [7] = 10000,
        [8] = 10000,
        [9] = 10000,
        [10] = 10000,
        [11] = 10000,
        [12] = 10000,
        [13] = 10000,
        [14] = 10000,
        [15] = 10000,
        [16] = 10000,
        [17] = 10000,
        [18] = 10000,
        [19] = 10000,
        [20] = 10000,
        [21] = 10000,
    },
	[6] = {
        [1] = 10000, -- building time
        [2] = 10000,
        [3] = 10000,
        [4] = 10000,
        [5] = 10000,
        [6] = 10000,
        [7] = 10000,
        [8] = 10000,
        [9] = 10000,
        [10] = 10000,
        [11] = 10000,
        [12] = 10000,
        [13] = 10000,
        [14] = 10000,
        [15] = 10000,
        [16] = 10000,
        [17] = 10000,
        [18] = 10000,
        [19] = 10000,
        [20] = 10000,
        [21] = 10000,
    },
}
:::
