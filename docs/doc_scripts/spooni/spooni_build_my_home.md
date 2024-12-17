# 🏠 Build my Home
Documentation relating to the spooni_build_my_home.

:::tabs
== PREVIEW
<iframe width="560" height="315" src="https://dunb17ur4ymx4.cloudfront.net/packages/images/c592bf08c16cdfdffc78082171f18499b816c45e.png" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
== BUY
[Buy the script](https://spooni-shop.fragmentor.io/product/6194363)
:::

## 1. Installation
spooni_build_my_home works only with VORP, RSG & RPX. 

#### To install spooni_build_my_home:
- Download the resource
  - On [Cfx.re Portal](https://portal.cfx.re/)
- Ensure that all requirements are installed
  - [vorp_menu](https://github.com/VORPCORE/vorp_menu)
- Drag and drop the resource into your resources folder
  - `spooni_build_my_home`
- Add this ensure in your server.cfg
  ```
    ensure spooni_build_my_home
  ```
- Execute the SQL file
  - `spooni_houses.sql`
- Now you can configure and translate the script as you like
  - `config.lua`
  - `functions.lua`
  - `furniture.lua`
- At the end, restart the server

If you have any problems, you can always open a ticket in the [Spooni Discord](https://discord.gg/spooni).

## 2. Usage
Build your own house with our house props in 21 steps anywhere on the map, furnish them or transfer them. 

## 3. For developers

:::details Config.lua
```lua
Config = {}

Config.DevMode = false -- only for testing, not for the live server
Config.Framework = 'vorp' -- select your framework (vorp, rpx, rsg, rsg-old) *rsg-old = old inventory version
Config.Locale = 'en' -- select your language (en, de, fr, es)

Config.Commands = {
    DeleteHouse = 'delHouse', -- command to delete the houses
    Housing = 'housing', -- command to manage the housing system
}
Config.CommandPerms = { 'admin', 'mod' }
Config.BuildingJob = false --  if you want to have a joblock
Config.NoTXAdmin = false -- if you have no txAdmin on your server
Config.Furniture = true -- if you want to furnish the houses
Config.Blip = true -- if you want a blip for the houses
Config.Dresser = true -- if you want to have a wardrobe in the houses
Config.Storage = true -- if you want to have a storage in the houses
Config.Ledger = true -- if you want to have a ledger in the houses
Config.OnlyOwnerCanAccessLedger = true -- if you want only the owner to have access to the ledger
Config.TaxSystem = true -- if you want to have a tax for the houses
Config.DistanceBetweenHouses = 25.0 -- the minimum distance a new house must have before it can be built
Config.MaxHousesPerPlayer = 5 -- the maximum amount of houses a player may own

Config.Housing = { -- NEW
    RentDays = 14, -- how long can the house be rented for
    FurnitureRadius = 150.0, -- the radius in which you can place furniture for this house
    FurnitureLimit = 150, -- the maximum amount of furniture that can be placedaximum
}

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

Config.WhitelistedZones = {
    -- [1] = { -- St Denis
    --     coords = vector3(2605.814, -1263.41, 52.681),
    --     distance = 150.0,
    -- },
}

Config.HousePromptKeys = {
    ['toggle_lock'] = `INPUT_INTERACT_OPTION1`,   -- [G]
    ['furniture_placement'] = `INPUT_FRONTEND_LEFT`, -- [LEFT ARROW]
    ['add_key_holder'] = `INPUT_FRONTEND_UP`,     -- [UP ARROW]
    ['remove_key_holder'] = `INPUT_FRONTEND_DOWN`, -- [DOWN ARROW]
    ['transfer_house'] = `INPUT_FRONTEND_RIGHT`,  -- [RIGHT ARROW]
    ['open_storage'] = `INPUT_INTERACT_POS`,      -- [R]
    ['upgrade_house'] = `INPUT_INTERACT_OPTION1`, -- [G]
    ['place_dresser'] = `INPUT_INTERACT_OPTION1`, -- [G]
    ['remove_dresser'] = `INPUT_INTERACT_POS`, -- [R]
    ['open_dresser'] = `INPUT_INTERACT_OPTION1`, -- [G]
    ['ledger_deposit_prompt'] = `INPUT_FRONTEND_RUP`, -- [LEFT CONTROL]
    ['ledger_remove_prompt'] = `INPUT_FRONTEND_LEFT`,   -- [LEFT ARROW]
    ['ledger_check_prompt'] = `INPUT_INTERACT_OPTION1`, -- [G]
    ['furniture_removal'] = `INPUT_FRONTEND_RUP`, -- [LEFT CONTROL]
}

Config.PlacementPromptKeys = {
    ['rotate_-'] = 'INPUT_SELECT_NEXT_WEAPON',       -- [MOUSE SCROLL DOWN]
    ['rotate_+'] = 'INPUT_SELECT_PREV_WEAPON',       -- [MOUSE SCROLL UP]
    ['up_prompt'] = 'INPUT_FRONTEND_UP',             -- [UP ARROW]
    ['down_prompt'] = 'INPUT_FRONTEND_DOWN',         -- [DOWN ARROW]
    ['place_prompt'] = 'INPUT_FRONTEND_ACCEPT',      -- [ENTER]
    ['cancel_prompt'] = 'INPUT_FRONTEND_CANCEL',     -- [ESC]
    ['confirm_place_prompt'] = 'INPUT_FRONTEND_ACCEPT', -- [ENTER]
    ['back_prompt'] = 'INPUT_FRONTEND_RLEFT',        -- [E]
    ['left_prompt'] = 'INPUT_FRONTEND_LEFT',         -- [LEFT ARROW]
    ['right_prompt'] = 'INPUT_FRONTEND_RIGHT',       -- [RIGHT ARROW]
    ['category_+'] = 'INPUT_SELECT_NEXT_WEAPON',     -- [MOUSE SCROLL DOWN]
    ['category_-'] = 'INPUT_SELECT_PREV_WEAPON',     -- [MOUSE SCROLL UP]
    ['rotate_furniture'] = 'INPUT_FRONTEND_Y',       -- [LEFT SHIFT]
    ['object_+'] = 'INPUT_FRONTEND_LEFT',            -- [LEFT ARROW]
    ['object_-'] = 'INPUT_FRONTEND_RIGHT',           -- [RIGHT ARROW]
}

Config.Houses = {
    [1] = {                     -- house
        StorageLimit = 25,      -- the maximum number of items you can have in storage
        StorageWeight = 3500,   -- the maximum weight you can have in storage
        FurnitureRadius = 50.0, -- the radius in which you can place furniture for this house
        FurnitureLimit = 5, -- the maximum amount of furniture that can be placed
        TaxInDaysAfterBuilding = 14, -- 14 days after building tax will be acquired if enabled above
        TaxAmount = 500, -- amount in cash that must be in ledger
        LoadRadius = 200, -- the radius in which the house is loaded
        Setup = {
            [1] = {            -- step
                Timer = 10000, -- building time
                Items = {
                    wood = 1,  -- item name -- quantity
                },
            },
            [2] = {
                Timer = 10000,
                Items = {
                    wood = 1,
                },
            },
            [3] = {
                Timer = 10000,
                Items = {
                    wood = 1,
                },
            },
            [4] = {
                Timer = 10000,
                Items = {
                    wood = 1,
                },
            },
            [5] = {
                Timer = 10000,
                Items = {
                    wood = 1,
                },
            },
            [6] = {
                Timer = 10000,
                Items = {
                    wood = 1,
                },
            },
            [7] = {
                Timer = 10000,
                Items = {
                    wood = 1,
                },
            },
            [8] = {
                Timer = 10000,
                Items = {
                    wood = 1,
                },
            },
            [9] = {
                Timer = 10000,
                Items = {
                    wood = 1,
                },
            },
            [10] = {
                Timer = 10000,
                Items = {
                    wood = 1,
                },
            },
            [11] = {
                Timer = 10000,
                Items = {
                    wood = 1,
                },
            },
            [12] = {
                Timer = 10000,
                Items = {
                    wood = 1,
                },
            },
            [13] = {
                Timer = 10000,
                Items = {
                    wood = 1,
                },
            },
            [14] = {
                Timer = 10000,
                Items = {
                    wood = 1,
                },
            },
            [15] = {
                Timer = 10000,
                Items = {
                    wood = 1,
                },
            },
            [16] = {
                Timer = 10000,
                Items = {
                    wood = 1,
                },
            },
            [17] = {
                Timer = 10000,
                Items = {
                    wood = 1,
                },
            },
            [18] = {
                Timer = 10000,
                Items = {
                    wood = 1,
                },
            },
            [19] = {
                Timer = 10000,
                Items = {
                    wood = 1,
                },
            },
            [20] = {
                Timer = 10000,
                Items = {
                    wood = 1,
                },
            },
            [21] = {
                Timer = 10000,
                Items = {
                    wood = 1,
                },
            },
        },
    },
    [2] = {                    -- house
        StorageLimit = 25,     -- the maximum number of items you can have in storage
        StorageWeight = 3500,  -- the maximum weight you can have in storage
        FurnitureRadius = 50.0, -- the radius in which you can place furniture for this house
        FurnitureLimit = 5, -- the maximum amount of furniture that can be placed
        TaxInDaysAfterBuilding = 14, -- 14 days after building tax will be acquired if enabled above
        TaxAmount = 500, -- amount in cash that must be in ledger
        LoadRadius = 200, -- the radius in which the house is loaded
        Setup = {
            [1] = {            -- step
                Timer = 10000, -- building time
                Items = {
                    wood = 1,  -- item name -- quantity
                },
            },
            [2] = {
                Timer = 10000,
                Items = {
                    wood = 1,
                },
            },
            [3] = {
                Timer = 10000,
                Items = {
                    wood = 1,
                },
            },
            [4] = {
                Timer = 10000,
                Items = {
                    wood = 1,
                },
            },
            [5] = {
                Timer = 10000,
                Items = {
                    wood = 1,
                },
            },
            [6] = {
                Timer = 10000,
                Items = {
                    wood = 1,
                },
            },
            [7] = {
                Timer = 10000,
                Items = {
                    wood = 1,
                },
            },
            [8] = {
                Timer = 10000,
                Items = {
                    wood = 1,
                },
            },
            [9] = {
                Timer = 10000,
                Items = {
                    wood = 1,
                },
            },
            [10] = {
                Timer = 10000,
                Items = {
                    wood = 1,
                },
            },
            [11] = {
                Timer = 10000,
                Items = {
                    wood = 1,
                },
            },
            [12] = {
                Timer = 10000,
                Items = {
                    wood = 1,
                },
            },
            [13] = {
                Timer = 10000,
                Items = {
                    wood = 1,
                },
            },
            [14] = {
                Timer = 10000,
                Items = {
                    wood = 1,
                },
            },
            [15] = {
                Timer = 10000,
                Items = {
                    wood = 1,
                },
            },
            [16] = {
                Timer = 10000,
                Items = {
                    wood = 1,
                },
            },
            [17] = {
                Timer = 10000,
                Items = {
                    wood = 1,
                },
            },
            [18] = {
                Timer = 10000,
                Items = {
                    wood = 1,
                },
            },
            [19] = {
                Timer = 10000,
                Items = {
                    wood = 1,
                },
            },
            [20] = {
                Timer = 10000,
                Items = {
                    wood = 1,
                },
            },
            [21] = {
                Timer = 10000,
                Items = {
                    wood = 1,
                },
            },
        },
    },
    [3] = {                    -- house
        StorageLimit = 30,     -- the maximum number of items you can have in storage
        StorageWeight = 3500,  -- the maximum weight you can have in storage
        FurnitureRadius = 50.0, -- the radius in which you can place furniture for this house
        FurnitureLimit = 5, -- the maximum amount of furniture that can be placed
        TaxInDaysAfterBuilding = 14, -- 14 days after building tax will be acquired if enabled above
        TaxAmount = 500, -- amount in cash that must be in ledger
        LoadRadius = 200, -- the radius in which the house is loaded
        Setup = {
            [1] = {            -- step
                Timer = 10000, -- building time
                Items = {
                    wood = 1,  -- item name -- quantity
                },
            },
            [2] = {
                Timer = 10000,
                Items = {
                    wood = 1,
                },
            },
            [3] = {
                Timer = 10000,
                Items = {
                    wood = 1,
                },
            },
            [4] = {
                Timer = 10000,
                Items = {
                    wood = 1,
                },
            },
            [5] = {
                Timer = 10000,
                Items = {
                    wood = 1,
                },
            },
            [6] = {
                Timer = 10000,
                Items = {
                    wood = 1,
                },
            },
            [7] = {
                Timer = 10000,
                Items = {
                    wood = 1,
                },
            },
            [8] = {
                Timer = 10000,
                Items = {
                    wood = 1,
                },
            },
            [9] = {
                Timer = 10000,
                Items = {
                    wood = 1,
                },
            },
            [10] = {
                Timer = 10000,
                Items = {
                    wood = 1,
                },
            },
            [11] = {
                Timer = 10000,
                Items = {
                    wood = 1,
                },
            },
            [12] = {
                Timer = 10000,
                Items = {
                    wood = 1,
                },
            },
            [13] = {
                Timer = 10000,
                Items = {
                    wood = 1,
                },
            },
            [14] = {
                Timer = 10000,
                Items = {
                    wood = 1,
                },
            },
            [15] = {
                Timer = 10000,
                Items = {
                    wood = 1,
                },
            },
            [16] = {
                Timer = 10000,
                Items = {
                    wood = 1,
                },
            },
            [17] = {
                Timer = 10000,
                Items = {
                    wood = 1,
                },
            },
            [18] = {
                Timer = 10000,
                Items = {
                    wood = 1,
                },
            },
            [19] = {
                Timer = 10000,
                Items = {
                    wood = 1,
                },
            },
            [20] = {
                Timer = 10000,
                Items = {
                    wood = 1,
                },
            },
            [21] = {
                Timer = 10000,
                Items = {
                    wood = 1,
                },
            },
        },
    },
    [4] = {                    -- house
        StorageLimit = 75,     -- the maximum number of items you can have in storage
        StorageWeight = 7500,  -- the maximum weight you can have in storage
        FurnitureRadius = 50.0, -- the radius in which you can place furniture for this house
        FurnitureLimit = 5, -- the maximum amount of furniture that can be placed
        TaxInDaysAfterBuilding = 14, -- 14 days after building tax will be acquired if enabled above
        TaxAmount = 500, -- amount in cash that must be in ledger
        LoadRadius = 200, -- the radius in which the house is loaded
        Setup = {
            [1] = {            -- step
                Timer = 10000, -- building time
                Items = {
                    wood = 1,  -- item name -- quantity
                },
            },
            [2] = {
                Timer = 10000,
                Items = {
                    wood = 1,
                },
            },
            [3] = {
                Timer = 10000,
                Items = {
                    wood = 1,
                },
            },
            [4] = {
                Timer = 10000,
                Items = {
                    wood = 1,
                },
            },
            [5] = {
                Timer = 10000,
                Items = {
                    wood = 1,
                },
            },
            [6] = {
                Timer = 10000,
                Items = {
                    wood = 1,
                },
            },
            [7] = {
                Timer = 10000,
                Items = {
                    wood = 1,
                },
            },
            [8] = {
                Timer = 10000,
                Items = {
                    wood = 1,
                },
            },
            [9] = {
                Timer = 10000,
                Items = {
                    wood = 1,
                },
            },
            [10] = {
                Timer = 10000,
                Items = {
                    wood = 1,
                },
            },
            [11] = {
                Timer = 10000,
                Items = {
                    wood = 1,
                },
            },
            [12] = {
                Timer = 10000,
                Items = {
                    wood = 1,
                },
            },
            [13] = {
                Timer = 10000,
                Items = {
                    wood = 1,
                },
            },
            [14] = {
                Timer = 10000,
                Items = {
                    wood = 1,
                },
            },
            [15] = {
                Timer = 10000,
                Items = {
                    wood = 1,
                },
            },
            [16] = {
                Timer = 10000,
                Items = {
                    wood = 1,
                },
            },
            [17] = {
                Timer = 10000,
                Items = {
                    wood = 1,
                },
            },
            [18] = {
                Timer = 10000,
                Items = {
                    wood = 1,
                },
            },
            [19] = {
                Timer = 10000,
                Items = {
                    wood = 1,
                },
            },
            [20] = {
                Timer = 10000,
                Items = {
                    wood = 1,
                },
            },
            [21] = {
                Timer = 10000,
                Items = {
                    wood = 1,
                },
            },
        },
    },
    [5] = {                    -- house
        StorageLimit = 35,     -- the maximum number of items you can have in storage
        StorageWeight = 3500,  -- the maximum weight you can have in storage
        FurnitureRadius = 50.0, -- the radius in which you can place furniture for this house
        FurnitureLimit = 5, -- the maximum amount of furniture that can be placed
        TaxInDaysAfterBuilding = 14, -- 14 days after building tax will be acquired if enabled above
        TaxAmount = 500, -- amount in cash that must be in ledger
        LoadRadius = 200, -- the radius in which the house is loaded
        Setup = {
            [1] = {            -- step
                Timer = 10000, -- building time
                Items = {
                    wood = 1,  -- item name -- quantity
                },
            },
            [2] = {
                Timer = 10000,
                Items = {
                    wood = 1,
                },
            },
            [3] = {
                Timer = 10000,
                Items = {
                    wood = 1,
                },
            },
            [4] = {
                Timer = 10000,
                Items = {
                    wood = 1,
                },
            },
            [5] = {
                Timer = 10000,
                Items = {
                    wood = 1,
                },
            },
            [6] = {
                Timer = 10000,
                Items = {
                    wood = 1,
                },
            },
            [7] = {
                Timer = 10000,
                Items = {
                    wood = 1,
                },
            },
            [8] = {
                Timer = 10000,
                Items = {
                    wood = 1,
                },
            },
            [9] = {
                Timer = 10000,
                Items = {
                    wood = 1,
                },
            },
            [10] = {
                Timer = 10000,
                Items = {
                    wood = 1,
                },
            },
            [11] = {
                Timer = 10000,
                Items = {
                    wood = 1,
                },
            },
            [12] = {
                Timer = 10000,
                Items = {
                    wood = 1,
                },
            },
            [13] = {
                Timer = 10000,
                Items = {
                    wood = 1,
                },
            },
            [14] = {
                Timer = 10000,
                Items = {
                    wood = 1,
                },
            },
            [15] = {
                Timer = 10000,
                Items = {
                    wood = 1,
                },
            },
            [16] = {
                Timer = 10000,
                Items = {
                    wood = 1,
                },
            },
            [17] = {
                Timer = 10000,
                Items = {
                    wood = 1,
                },
            },
            [18] = {
                Timer = 10000,
                Items = {
                    wood = 1,
                },
            },
            [19] = {
                Timer = 10000,
                Items = {
                    wood = 1,
                },
            },
            [20] = {
                Timer = 10000,
                Items = {
                    wood = 1,
                },
            },
            [21] = {
                Timer = 10000,
                Items = {
                    wood = 1,
                },
            },
        },
    },
    [6] = {                    -- house
        StorageLimit = 35,     -- the maximum number of items you can have in storage
        StorageWeight = 3500,  -- the maximum weight you can have in storage
        FurnitureRadius = 50.0, -- the radius in which you can place furniture for this house
        FurnitureLimit = 5, -- the maximum amount of furniture that can be placed
        TaxInDaysAfterBuilding = 14, -- 14 days after building tax will be acquired if enabled above
        TaxAmount = 500, -- amount in cash that must be in ledger
        LoadRadius = 200, -- the radius in which the house is loaded
        Setup = {
            [1] = {            -- step
                Timer = 10000, -- building time
                Items = {
                    wood = 1,  -- item name -- quantity
                },
            },
            [2] = {
                Timer = 10000,
                Items = {
                    wood = 1,
                },
            },
            [3] = {
                Timer = 10000,
                Items = {
                    wood = 1,
                },
            },
            [4] = {
                Timer = 10000,
                Items = {
                    wood = 1,
                },
            },
            [5] = {
                Timer = 10000,
                Items = {
                    wood = 1,
                },
            },
            [6] = {
                Timer = 10000,
                Items = {
                    wood = 1,
                },
            },
            [7] = {
                Timer = 10000,
                Items = {
                    wood = 1,
                },
            },
            [8] = {
                Timer = 10000,
                Items = {
                    wood = 1,
                },
            },
            [9] = {
                Timer = 10000,
                Items = {
                    wood = 1,
                },
            },
            [10] = {
                Timer = 10000,
                Items = {
                    wood = 1,
                },
            },
            [11] = {
                Timer = 10000,
                Items = {
                    wood = 1,
                },
            },
            [12] = {
                Timer = 10000,
                Items = {
                    wood = 1,
                },
            },
            [13] = {
                Timer = 10000,
                Items = {
                    wood = 1,
                },
            },
            [14] = {
                Timer = 10000,
                Items = {
                    wood = 1,
                },
            },
            [15] = {
                Timer = 10000,
                Items = {
                    wood = 1,
                },
            },
            [16] = {
                Timer = 10000,
                Items = {
                    wood = 1,
                },
            },
            [17] = {
                Timer = 10000,
                Items = {
                    wood = 1,
                },
            },
            [18] = {
                Timer = 10000,
                Items = {
                    wood = 1,
                },
            },
            [19] = {
                Timer = 10000,
                Items = {
                    wood = 1,
                },
            },
            [20] = {
                Timer = 10000,
                Items = {
                    wood = 1,
                },
            },
            [21] = {
                Timer = 10000,
                Items = {
                    wood = 1,
                },
            },
        },
    },
}
```
:::

:::details Functions.lua
```lua
local VORPcore

if Config.Framework == 'vorp' then
    VORPcore = exports.vorp_core:GetCore()
end

-- Notify
function clNotify(text, error, success)
    if Config.Framework == 'vorp' then
        if error then
            VORPcore.NotifyAvanced(text, 'menu_textures', 'cross', 'COLOR_RED', 4000)
        elseif success then
            VORPcore.NotifyAvanced(text, 'hud_textures', 'check', 'COLOR_GREEN', 4000)
        else
            VORPcore.NotifyAvanced(text, 'inventory_items', 'provision_jail_keys', 'COLOR_PURE_WHITE', 4000)
        end
    end
    if Config.Framework == 'rpx' then
        if error then
            exports['rpx-core']:ShowAdvancedRightNotification(text, 'menu_textures', 'cross', 'COLOR_RED', 4000)
        elseif success then
            exports['rpx-core']:ShowAdvancedRightNotification(text, 'hud_textures', 'check', 'COLOR_GREEN', 4000)
        else
            exports['rpx-core']:ShowAdvancedRightNotification(text, 'inventory_items', 'provision_jail_keys', 'COLOR_PURE_WHITE', 4000)
        end
    end
    if Config.Framework == 'rsg' or Config.Framework == 'rsg-old' then
        if error then
            local dataError = {description = text, duration = 4000, type = 'error' }
            TriggerEvent('ox_lib:notify', dataError)
        elseif success then
            local dataSuccess = {description = text, duration = 4000, type = 'success' }
            TriggerEvent('ox_lib:notify', dataSuccess)
        else
            local data = {description = text, duration = 4000, type = 'inform' }
            TriggerEvent('ox_lib:notify', data)
        end
    end
end

function svNotify(src, text, error, success)
    if Config.Framework == 'vorp' then
        if error then
            VORPcore.NotifyAvanced(src, text, 'menu_textures', 'cross', 'COLOR_RED', 4000)
        elseif success then
            VORPcore.NotifyAvanced(src, text, 'hud_textures', 'check', 'COLOR_GREEN', 4000)
        else
            VORPcore.NotifyAvanced(src, text, 'inventory_items', 'provision_jail_keys', 'COLOR_PURE_WHITE', 4000)
        end
    end
    if Config.Framework == 'rpx' then
        if error then
            exports['rpx-core']:ShowAdvancedRightNotification(src, text, 'menu_textures', 'cross', 'COLOR_RED', 4000)
        elseif success then
            exports['rpx-core']:ShowAdvancedRightNotification(src, text, 'hud_textures', 'check', 'COLOR_GREEN', 4000)
        else
            exports['rpx-core']:ShowAdvancedRightNotification(src, text, 'inventory_items', 'provision_jail_keys', 'COLOR_PURE_WHITE', 4000)
        end
    end
    if Config.Framework == 'rsg' or Config.Framework == 'rsg-old' then
        if error then
            local dataError = {description = text, duration = 4000, type = 'error' }
            TriggerClientEvent('ox_lib:notify', src, dataError)
        elseif success then
            local dataSuccess = {description = text, duration = 4000, type = 'success' }
            TriggerClientEvent('ox_lib:notify', src, dataSuccess)
        else
            local data = {description = text, duration = 4000, type = 'inform' }
            TriggerClientEvent('ox_lib:notify', src, data)
        end
    end
end

-- Wardrobe
function ClothingMenuEvent()
    -- TriggerEvent('syn_clothing:OpenOutfits')
    TriggerEvent('kd_clothingstore:openWardrobe', false)
end

-- New Stage
function CustomNewStageEvent(owner, type, stage)
    -- Custom Event to trigger when upgrading house / next building step
end

-- Tax
function TaxNotPaid(houseID, type, ledger)
    -- Custom Event to trigger when a house has failed paying tax
    -- return false -- use this when the house should not get deleted and only access should get revoked
    return true -- use this when the house should get deleted from db
end

-- Custom Inventory
function CustomInventory()
    -- Custom Event to trigger when you have a custom Inventory
    return false
end

-- Debug
function Debug(...)
    if Config.DevMode then
        print(...)
    end
end
```
:::

:::details Furniture.lua
```lua
Translation = {}

Translation = {
    ['en'] = {
        -- Notify
        ['blocked_area'] = 'Placement is in Blocked Area',
        ['complete_upgrade'] = 'Upgraded',
        ['door_locked'] = 'Door Locked',
        ['door_unlocked'] = 'Door Unlocked',
        ['dresser_found'] = 'You already have a dresser',
        ['dresser_placed'] = 'Dresser has been placed',
        ['dresser_removed'] = 'Dresser has been removed',
        ['ledger_deposited'] = 'You deposited ',
        ['ledger_removed'] = 'You removed ',
        ['ledger'] = 'in Ledger',
        ['days'] = 'Days until Payment',
        ['topay'] = '$ To Pay',
        ['fully_upgraded'] = 'Already Fully Upgraded',
        ['furniture_removed'] = 'Furniture has been removed',
        ['invalid_furniture'] = 'Invalid Furniture',
        ['missing_requirements'] = 'Missing Requirements',
        ['player_not_online'] = 'Player Not Online',
        ['upgrade_in_progress'] = 'Already Upgrading',
        ['wrong_job'] = 'Wrong Job',
        ['max_furniture'] = 'Reached maximum furniture',
        ['max_houses'] = 'Reached maximum houses',
        -- Prompts
        ['add_key_holder_prompt'] = 'Add Key Holder',
        ['back_prompt'] = 'Back',
        ['building_plan_confirm_prompt'] = 'Confirm Build',
        ['cancel_prompt'] = 'Cancel',
        ['category_prompt'] = 'Category',
        ['confirm_place_prompt'] = 'Confirm Placement',
        ['dresser_prompt'] = 'Open Dresser',
        ['furniture_builder_name'] = 'Furniture Builder: ',
        ['house_builder_name'] = 'House Builder',
        ['house_prompt_name'] = 'House: ',
        ['left_right_prompt'] = 'Left / Right',
        ['lock_prompt'] = 'Toggle Lock',
        ['object_prompt'] = 'Object',
        ['place_dresser_prompt'] = 'Place Dresser',
        ['place_furniture_prompt'] = 'Place Furniture',
        ['ledger_deposit_prompt'] = 'Deposit',
        ['ledger_remove_prompt'] = 'Take Out',
        ['ledger_check_prompt'] = 'Check Ledger',
        ['place_prompt'] = 'Place',
        ['remove_dresser_prompt'] = 'Remove Dresser',
        ['remove_furniture_prompt'] = 'Remove Furniture',
        ['remove_key_holder_prompt'] = 'Remove Key Holder',
        ['rotate_furniture'] = 'Rotate',
        ['rotate_prompt'] = 'Rotate - / +',
        ['storage_prompt'] = 'Open Storage',
        ['transfer_house_prompt'] = 'Transfer House',
        ['up_down_prompt'] = 'Up / Down',
        ['upgrade_prompt'] = 'Upgrade',
        -- Progressbar
        ['progressbar_text'] = 'Building...',
        -- Other
        ['building_plan_display_name'] = 'Building Plan',
        ['blip_house'] = 'House',

        -- NEW STUFF
        ['housing_manage'] = "Manage Housings",
        ['housing_createNewHouse'] = "Create New Housing",
        ['housing_housename'] = "New Housename",
        ['housing_doorMenu'] = "Manage Doors",
        ['housing_rentPrice'] = "Rent Price: ",
        ['housing_buyPrice'] = "Buy Price: ",
        ['housing_createHouse'] = "Create Housing",
        ['housing_createNewHouseTitle'] = "Setup Housing",
        ['housing_changeHouseName'] = "Change Housename",
        ['housing_changeRentPrice'] = "Change Rentprice",
        ['housing_changeBuyPrice'] = "Change Buyprice",
        ['housing_changeStorageSize'] = "Change Item Limit",
        ['housing_changeStorageWeight'] = "Change Storage Weight",
        ['housing_createHouseInfoNeeded'] = "Setup uncomplete",
        ['housing_addDoor'] = "New Door",
        ['housing_addNewDoor'] = "Setup New Door",
        ['housing_addDoubleDoor'] = "Setup Double Door",
        ['housing_removeDoor'] = "Remove Door",
        ['housing_rentInvalid'] = "Invalid Data",
        ['housing_addedDoor'] = "Added Door",
        ['housing_removedDoor'] = "Removed Door",
        ['housing_nodoor'] = "No valid Door detected",
        ['housing_removeHousing'] = "Remove Housing",
        ['housing_updatedRent'] = "Rent Updated",
        ['housing_updatedPrice'] = "Buy Price Updated",
        ['housing_updatedHousename'] = "Housename updated",
        ['housing_updatedDoors'] = "Doors updated",
        ['housing_houseRemoved'] = "House removed",
        ['housing_rentHouseFor'] = "Rent for %s $",
        ['housing_buyHouseFor'] = "Buy for %s $",
        ['housing_nomoney'] = "Not enough money",
        ['housing_stoprent'] = "Stop Renting",
        ['housing_selectdoor'] = "Select Door",
        ['housing_storageSize'] = "Item storage Limit: ",
        ['housing_storageWeight'] = "Storage Weight Limit: ",
        ['housing_updatedStorage'] = "Storage Space Updated",
    },
    ['de'] = {
        -- Notify
        ['blocked_area'] = 'Platzierung ist im gesperrten Bereich',
        ['complete_upgrade'] = 'Upgrade abgeschlossen',
        ['door_locked'] = 'Tür abgeschlossen',
        ['door_unlocked'] = 'Tür aufgeschlossen',
        ['dresser_found'] = 'Du hast bereits eine Kommode',
        ['dresser_placed'] = 'Kommode wurde platziert',
        ['dresser_removed'] = 'Kommode wurde entfernt',
        ['ledger_deposited'] = 'Eingezahlt: ',
        ['ledger_removed'] = 'Abgehoben: ',
        ['ledger'] = 'im Ledger',
        ['days'] = 'Tage bis Zahltag',
        ['topay'] = '$ zu bezahlen',
        ['fully_upgraded'] = 'Bereits vollständig aufgerüstet',
        ['furniture_removed'] = 'Möbelstück wurde entfernt',
        ['invalid_furniture'] = 'Ungültiges Möbelstück',
        ['missing_requirements'] = 'Fehlende Anforderungen',
        ['player_not_online'] = 'Spieler nicht online',
        ['upgrade_in_progress'] = 'Wird bereits aufgerüstet',
        ['wrong_job'] = 'Falscher Job',
        ['max_furniture'] = 'Maximale Anzahl erreicht',
        ['max_houses'] = 'Maximale Anzahl erreicht',
        -- Prompts
        ['add_key_holder_prompt'] = 'Schlüsselinhaber hinzufügen',
        ['back_prompt'] = 'Zurück',
        ['building_plan_confirm_prompt'] = 'Bau bestätigen',
        ['cancel_prompt'] = 'Abbrechen',
        ['category_prompt'] = 'Kategorie',
        ['confirm_place_prompt'] = 'Platzierung bestätigen',
        ['dresser_prompt'] = 'Kommode öffnen',
        ['furniture_builder_name'] = 'Möbelbauer: ',
        ['house_builder_name'] = 'Hausbauer',
        ['house_prompt_name'] = 'Haus: ',
        ['left_right_prompt'] = 'Links / Rechts',
        ['lock_prompt'] = 'Schloss umschalten',
        ['object_prompt'] = 'Objekt',
        ['place_dresser_prompt'] = 'Kommode platzieren',
        ['place_furniture_prompt'] = 'Möbel platzieren',
        ['ledger_deposit_prompt'] = 'Einzahlen',
        ['ledger_remove_prompt'] = 'Abheben',
        ['ledger_check_prompt'] = 'Stand einsehen',
        ['place_prompt'] = 'Platzieren',
        ['remove_dresser_prompt'] = 'Kommode entfernen',
        ['remove_furniture_prompt'] = 'Möbel entfernen',
        ['remove_key_holder_prompt'] = 'Schlüsselinhaber entfernen',
        ['rotate_furniture'] = 'Drehen',
        ['rotate_prompt'] = 'Drehen - / +',
        ['storage_prompt'] = 'Lager öffnen',
        ['transfer_house_prompt'] = 'Haus übertragen',
        ['up_down_prompt'] = 'Hoch / Runter',
        ['upgrade_prompt'] = 'Upgrade',
        -- Progressbar
        ['progressbar_text'] = 'Bauen...',
        -- Other
        ['building_plan_display_name'] = 'Bauplan',
        ['blip_house'] = 'Haus',

        -- NEW STUFF
        ['housing_manage'] = "Unterkünfte verwalten",
        ['housing_createNewHouse'] = "Neue Unterkunft erstellen",
        ['housing_housename'] = "Neuer Hausname",
        ['housing_doorMenu'] = "Türen verwalten",
        ['housing_rentPrice'] = "Mietpreis: ",
        ['housing_buyPrice'] = "Kaufpreis: ",
        ['housing_createHouse'] = "Unterkunft erstellen",
        ['housing_createNewHouseTitle'] = "Unterkunft einrichten",
        ['housing_changeHouseName'] = "Hausnamen ändern",
        ['housing_changeRentPrice'] = "Mietpreis ändern",
        ['housing_changeBuyPrice'] = "Kaufpreis ändern",
        ['housing_changeStorageSize'] = "Gegenstandslimit ändern",
        ['housing_changeStorageWeight'] = "Lagergewicht ändern",
        ['housing_createHouseInfoNeeded'] = "Einrichtung unvollständig",
        ['housing_addDoor'] = "Neue Tür",
        ['housing_addNewDoor'] = "Neue Tür einrichten",
        ['housing_addDoubleDoor'] = "Doppeltür einrichten",
        ['housing_removeDoor'] = "Tür entfernen",
        ['housing_rentInvalid'] = "Ungültige Daten",
        ['housing_addedDoor'] = "Tür hinzugefügt",
        ['housing_removedDoor'] = "Tür entfernt",
        ['housing_nodoor'] = "Keine valide Tür erkannt",
        ['housing_removeHousing'] = "Unterkunft entfernen",
        ['housing_updatedRent'] = "Miete aktualisiert",
        ['housing_updatedPrice'] = "Kaufpreis aktualisiert",
        ['housing_updatedHousename'] = "Hausname aktualisiert",
        ['housing_updatedDoors'] = "Türen aktualisiert",
        ['housing_houseRemoved'] = "Haus entfernt",
        ['housing_rentHouseFor'] = "Mieten für %s $",
        ['housing_buyHouseFor'] = "Kaufen für %s $",
        ['housing_nomoney'] = "Nicht genug Geld",
        ['housing_stoprent'] = "Miete beenden",
        ['housing_selectdoor'] = "Tür auswählen",
        ['housing_storageSize'] = "Lagerlimit: ",
        ['housing_storageWeight'] = "Gewichtslimit: ",
        ['housing_updatedStorage'] = "Lagerplatz aktualisiert",
    },
}
```
:::