# 🏠 Build my Home
Documentation relating to the spooni_build_my_home.

:::tabs
== PREVIEW
<iframe width="560" height="315" src="https://dunb17ur4ymx4.cloudfront.net/packages/images/c592bf08c16cdfdffc78082171f18499b816c45e.png" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
== BUY
[Buy the script](https://spooni-mapping.tebex.io/package/6194363)
:::

## 1. Installation
spooni_build_my_home works only with VORP, RSG & RPX. 

To install spooni_build_my_home:
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
- At the end
  - Restart the server

If you have any problems, you can always open a ticket in the [Spooni Discord](https://discord.gg/spooni).

## 2. Usage
Build your own house with our house props in 21 steps anywhere on the map, furnish them or transfer them. 

## 3. For developers

:::details Config.lua
```lua
Config = {}

Config.DevMode = true -- only for testing, not for the live server
Config.Framework = 'vorp' -- select your framework (vorp, rpx, rsg, rsg-old) *rsg-old = old inventory version
Config.Locale = 'en' -- select your language (en, de, fr, es)

Config.DeleteCommand = 'deletespoonihouse' -- command to delete the houses
Config.DeleteCommandPerms = {"admin", "mod"}
Config.BuildingJob = false -- turn false to disable joblock
Config.NoTXAdmin = false -- if you have no txAdmin on your Server.
Config.Furniture = true -- if you want to furnish the houses.
Config.Blip = true -- if you want a blip for the houses.
Config.Dresser = true -- if you want to have a wardrobe in the houses.
Config.Storage = true -- if you want to have a storage in the houses.
Config.Ledger = true -- if you want to have a ledger in the houses.
Config.OnlyOwnerCanAccessLedger = true
Config.TaxSystem = true -- if you want to have a tax for the houses.
Config.DistanceBetweenHouses = 25.0 -- the minimum distance a new house must have before it can be built.
Config.MaxHousesPerPlayer = 5 -- the maximum amount of houses a player may own.

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
    ['remove_dresser'] = `INPUT_FRONTEND_RUP`, -- [LEFT CONTROL]
    ['open_dresser'] = `INPUT_INTERACT_OPTION1`, -- [G]
    ['ledger_deposit_prompt'] = `INPUT_FRONTEND_RUP`, -- [LEFT CONTROL]
    ['ledger_remove_prompt'] = `INPUT_INTERACT_POS`,   -- [R]
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
        TaxInDaysAfterBuilding = 14, -- 14 days after building tax will be acquired if enabled above
        TaxAmount = 500, -- amount in cash that must be in ledger
        LoadRadius = 200,
        MaxFurniture = 5,
        Setup = {
            [1] = {            -- Step
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
        TaxInDaysAfterBuilding = 14, -- 14 days after building tax will be acquired if enabled above
        TaxAmount = 500, -- amount in cash that must be in ledger
        LoadRadius = 200,
        MaxFurniture = 5,
        Setup = {
            [1] = {            -- Step
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
        TaxInDaysAfterBuilding = 14, -- 14 days after building tax will be acquired if enabled above
        TaxAmount = 500, -- amount in cash that must be in ledger
        LoadRadius = 200,
        MaxFurniture = 5,
        Setup = {
            [1] = {            -- Step
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
        TaxInDaysAfterBuilding = 14, -- 14 days after building tax will be acquired if enabled above
        TaxAmount = 500, -- amount in cash that must be in ledger
        LoadRadius = 200,
        MaxFurniture = 5,
        Setup = {
            [1] = {            -- Step
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
        TaxInDaysAfterBuilding = 14, -- 14 days after building tax will be acquired if enabled above
        TaxAmount = 500, -- amount in cash that must be in ledger
        LoadRadius = 200,
        MaxFurniture = 5,
        Setup = {
            [1] = {            -- Step
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
        TaxInDaysAfterBuilding = 14, -- 14 days after building tax will be acquired if enabled above
        TaxAmount = 500, -- amount in cash that must be in ledger
        LoadRadius = 200,
        MaxFurniture = 5,
        Setup = {
            [1] = {            -- Step
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
    if Config.Framework == "vorp" then
        if error then
            VORPcore.NotifyAvanced(text, "menu_textures", "cross", "COLOR_RED", 4000)
        elseif success then
            VORPcore.NotifyAvanced(text, "hud_textures", "check", "COLOR_GREEN", 4000)
        else
            VORPcore.NotifyAvanced(text, "inventory_items", "provision_jail_keys", "COLOR_PURE_WHITE", 4000)
        end
    end
    if Config.Framework == "rpx" then
        if error then
            exports["rpx-core"]:ShowAdvancedRightNotification(text, "menu_textures", "cross", "COLOR_RED", 4000)
        elseif success then
            exports["rpx-core"]:ShowAdvancedRightNotification(text, "hud_textures", "check", "COLOR_GREEN", 4000)
        else
            exports["rpx-core"]:ShowAdvancedRightNotification(text, "inventory_items", "provision_jail_keys", "COLOR_PURE_WHITE", 4000)
        end
    end
    if Config.Framework == "rsg" or "rsg-old" then
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
    if Config.Framework == "vorp" then
        if error then
            VORPcore.NotifyAvanced(src, text, "menu_textures", "cross", "COLOR_RED", 4000)
        elseif success then
            VORPcore.NotifyAvanced(src, text, "hud_textures", "check", "COLOR_GREEN", 4000)
        else
            VORPcore.NotifyAvanced(src, text, "inventory_items", "provision_jail_keys", "COLOR_PURE_WHITE", 4000)
        end
    end
    if Config.Framework == "rpx" then
        if error then
            exports["rpx-core"]:ShowAdvancedRightNotification(src, text, "menu_textures", "cross", "COLOR_RED", 4000)
        elseif success then
            exports["rpx-core"]:ShowAdvancedRightNotification(src, text, "hud_textures", "check", "COLOR_GREEN", 4000)
        else
            exports["rpx-core"]:ShowAdvancedRightNotification(src, text, "inventory_items", "provision_jail_keys", "COLOR_PURE_WHITE", 4000)
        end
    end
    if Config.Framework == "rsg" or "rsg-old" then
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
Furniture = {}

Furniture.Categories = {
    [1] = {
        Label = "tables",
        Setup = {
            Items = {
                wood = 1, -- item name -- quantity
            },
            Props = {
                "p_table01x", -- prop name
                "p_table02x",
                "p_table10x",
                "p_table11x",
                "p_table14x",
                "p_table31x",
                "p_table32x",
                "p_table38x",
                "p_table41x",
                "p_table42_cs",
                "p_table44x",
                "p_table46x",
                "p_table50x",
                "p_table51x",
                "p_tabledining03xb",
                "p_tableprep01x",
                "p_tablebedside01x",
                "p_tablebedside02x",
                "p_grp_w_tra_sidetable01x",
                "p_tablework02x",
                "p_tableconsole01x",
                "p_tableconsole02x",
                "p_tableconsole03bx",
                "p_tableconsole03x",
                "p_tableconsole04x",
                "p_tableconsole05bx",
                "p_tablegiltconsole01x",
                "p_tablegiltwood01x",
            },
        },
    },
    [2] = {
        Label = "chairs",
        Setup = {
            Items = {
                wood = 1, -- item name -- quantity
            },
            Props = {
                "p_chair02x", -- prop name
                "p_chair04x",
                "p_chair05x",
                "p_chair06x",
                "p_chair09x",
                "p_chair15x",
                "p_chair17x",
                "p_chair18x",
                "p_chair19x",
                "p_chair22x",
                "p_chair34x",
                "p_chair37x",
                "p_chaircomfy01x",
                "p_chaircomfy02",
                "p_chaircomfy03x",
                "p_chaircomfy04x",
                "p_chaircomfy04x",
                "p_chaircomfy07x",
                "p_chaircomfy12x",
                "p_chaircomfy14x",
                "p_chairdesk01x",
                "p_chairdesk02x",
                "p_chairpokerfancy01x",
                "p_woodendeskchair01x",
            },
        },
    },
    [3] = {
        Label = "plants inside",
        Setup = {
            Items = {
                wood = 1, -- item name -- quantity
            },
            Props = {
                "p_plant_moneytree", -- prop name
                "p_exoticprops14x",
                "p_plantpotnbx05x",
                "p_plantpotnbx06x",
                "p_plantpotnbx07x",
                "p_plantpothangnbx01x",
                "p_pot_flowerarng02x",
                "p_pot_flowerarng03x",
                "p_pot_flowerarng05x",
                "p_pot_flowerarng07x",
                "p_pot_flowerarng08x",
                "p_pot_flowerarng09bx",
                "p_pot_flowerarng16x",
                "p_pot_flowerarng17x",
                "p_pot_flowerarng18x",
                "p_pot_flowerarng23x",
                "p_pot_flowerarngdead02",
                "p_pot_leafyvase",
                "p_pot_plant_05a",
                "p_pot_plant_05b",
                "p_pot_plant_6a",
                "p_pot_plant_6b",
                "p_pot_plant_08a",
                "p_group_flowertable01",
                "p_plant_philo",
                "p_plant_philo2",
                "p_plant05x",
                "p_plant06x",
                "p_planter",
                "p_planter03a",
                "p_planter03x",
                "p_planternbx04a",
                "p_planternbx04b",
            },
        },
    },
    [4] = {
        Label = "lights",
        Setup = {
            Items = {
                wood = 1, -- item name -- quantity
            },
            Props = {
                "p_candle01x", -- prop name
                "p_candlebot01x",
                "p_candlestand",
                "p_candlegroup05x",
                "p_lanternhang01x",
                "p_lantern08x",
                "p_walllampnbx02x",
                "p_gnomeoillamp01x",
                "p_chandelier14x",
                "p_lamp17x",
                "p_lamp30x",
                "p_lampbar01x",
                "p_lamphanging03x",
                "p_lamphanging07x",
                "p_lamphangnbx01x",
                "p_lamphanging08x",
                "p_lantern04xlowfuel",
                "p_lantern05x",
                "p_lampstanding03x",
                "p_lampstanding04x",
                "p_lampstanding07x",
                "p_lampstanding09x",
                "p_medlight02x",
                "p_kerosenetablelamp01x",
                "p_lamp27x",
                "p_lamp32x",
                "p_lamp33x",
                "p_lanternbrass02x",
                "p_kerosenewalllamp01x",
                "p_lamp01x",
                "p_lampwall02x",
                "p_lampwall04x",
                "p_lampwall07x",
                "p_lampwall12x",
                "p_sconcelight01x",
            },
        },
    },
    [5] = {
        Label = "bathroom",
        Setup = {
            Items = {
                wood = 1, -- item name -- quantity
            },
            Props = {
                "p_bath02bx", -- prop name
                "p_bath02x",
                "p_bath03x",
                "p_bathsponge01x",
                "p_comb01x",
                "p_shavingboxclosed01x",
                "p_tub01bx",
                "p_tub02x",
                "p_val_hotel_int_tub_01x",
                "p_washstand02x_static",
                "p_bathbrush01x",
                "p_bedpanladies01x",
                "p_cupboard07x",
                "p_shaving_set01x",
                "p_shavingbox01x",
                "p_shavingbrush01x",
                "p_shavingcup01x",
                "p_soap01x",
                "p_straightrazor01x",
                "p_towelrack01x",
                "p_washbasin01x",
                "p_washbasinregal01x",
                "p_washbasinset01ax",
                "p_washbasinset01bx",
                "p_washbasinset01x",
                "p_washboard_01",
                "p_washstand02x",
                "p_washstand03x",
            },
        },
    },
    [6] = {
        Label = "bedroom",
        Setup = {
            Items = {
                wood = 1, -- item name -- quantity
            },
            Props = {
                "p_bed_abigail3x", -- prop name
                "p_bed01x",
                "p_bed02bx",
                "p_bed02x",
                "p_bed04x",
                "p_bed08x",
                "p_bed09x",
                "p_bed12x",
                "p_bed15brassx",
                "p_bed18x",
                "p_bed03x",
                "p_bed05x",
                "p_bed10x",
                "p_bed13x",
                "p_bed14x",
                "p_bed17x",
                "p_bed20madex",
                "p_bed20x",
                "p_bed21x",
                "p_bed22x",
                "p_bed20bloodyx",
                "p_bedindian01x",
                "p_bedking01x",
                "p_bedlog01x",
                "p_bedmosquitonet01x",
                "p_bedsleptin01x",
                "p_bedsleptinold04x",
                "p_blanketfolded01x",
                "p_chamberpot_pot",
                "p_clothingcase01x",
                "p_cradle01x",
                "p_dresser08x",
                "p_dressmirror01x",
                "p_foldedrug01x",
                "p_footlocker01x",
                "p_footlockeranim01x",
                "p_mattress03x",
                "p_mattress07x",
                "p_mattress08x",
                "p_nightbedking01x",
                "p_nightstand04x",
                "p_singlebrassbed01x",
                "p_alarmclock01x",
                "p_armoir02x_loot",
                "p_armoir02x",
                "p_armoir03x",
                "p_armoir04x_loot",
                "p_armoir04x",
                "p_armoir05x_loot",
                "p_armoir05x",
                "p_armoir06x",
                "p_armoir07bx",
                "p_armoir07x_loot",
                "p_armoir07x",
                "p_armoir08x",
                "p_armoireregal01",
                "p_bedbunk03x",
                "p_bedking02x",
                "p_cabinet03x",
                "p_cabinet04x",
                "p_cabinet05x",
                "p_chamberpot01x",
                "p_chest01x",
                "p_chest02x",
                "p_chest03x",
                "p_commode01x",
                "p_commode02x",
                "p_dresser01x",
                "p_dresser03x",
                "p_dresser04x",
                "p_dresser05x",
                "p_dresser06x",
                "p_dresser07x",
                "p_dresser09x",
                "p_dresserval01x",
                "p_foldedblanket01x",
                "p_foldedblanket02x",
                "p_footlocker07x_loot",
                "p_footlocker07x",
                "p_lacepillow01x",
                "p_lacepillow02x",
                "p_mattress04x",
                "p_mirror_shave01x",
                "p_nightstand03x",
                "p_nightstandwinter03x",
                "p_pillow01x_sea",
                "p_pillow01x",
                "p_pillow02x",
                "p_pillow03x",
                "p_pillow06x",
                "p_pillow08x",
                "p_pillow09x",
                "p_pillow10x",
                "p_pillow11x",
                "p_pillow12x",
                "p_steamer_trunk_001",
                "p_vanity01x",
                "p_vanity02x",
            },
        },
    },
    [7] = {
        Label = "livingroom",
        Setup = {
            Items = {
                wood = 1, -- item name -- quantity
            },
            Props = {
                "p_seatbench01x", -- prop name
                "p_sit_chairwicker01a",
                "p_couchwicker01x",
                "p_trunkvar01x_noloot",
                "p_weddingchest01x",
                "s_footlocker01x",
                "p_couch06x",
                "p_couch08x",
                "p_couch10x",
                "p_loveseat01x",
                "p_settee_05x",
                "p_settee02bx",
                "p_settee02x",
                "p_sofa01x",
                "p_victoriansofa01x",
                "p_armoiroffice66x",
                "p_buffet01x",
                "p_cabinetdoctor01x",
                "p_shelf06x",
                "p_bw_desk01x",
                "p_desk01x",
                "p_desk03x",
                "p_desk04x",
                "p_desk10x",
                "p_desk13x",
                "p_drdesk01x",
                "p_trolleymaildesk_01x",
                "p_vanitydresserdesk01x",
                "p_coatstand01x",
                "p_doc_coatstandrack01x",
                "p_gun_hangitem02x",
                "p_gunsmithprops16x",
                "p_hatstandbear01x",
                "p_desk10x",
            },
        },
    },
    [8] = {
        Label = "deco inside",
        Setup = {
            Items = {
                wood = 1, -- item name -- quantity
            },
            Props = {
                "p_books01x", -- prop name
                "p_books02x",
                "p_bookset04x",
                "p_bookset05x",
                "p_book04x",
                "p_book05x",
                "p_book06x",
                "p_jug01bx",
                "p_bottlebeer01a",
                "p_grp_new_sal02_props04x",
                "p_boxlrgcotton01x",
                "p_boxlrgleather01x",
                "p_boxmeddeposit01x",
                "p_boxmedpaint01x",
                "p_boxmedsuitcase01x",
                "p_boxsmljewelery01x",
                "p_sto_buysellbox02x",
                "s_saddiessupply01x",
                "p_basket05x",
                "p_basket06x",
                "p_basket13x",
                "p_baskethalf01x",
                "p_bag01x",
                "p_baghang02x",
                "p_cs_suitcase01x",
                "s_pistolchest_loot",
                "p_scalecandy01x",
                "p_basket06cx",
                "p_piestand01x",
                "p_knifeblock03x",
                "p_valbankclock01x",
                "p_clock06x",
                "p_mantle_clock_old",
                "p_deskstand01x",
                "p_deskorganizer01x",
                "p_fandesk_off01x",
                "p_letterbox_01x",
                "mp007_p_nat_pictureframe01x",
                "mp007_p_nat_pictureframe02x",
                "mp007_p_nat_pictureframe03x",
                "mp007_p_nat_pictureframe04x",
                "p_flowerframe01x",
                "p_painting_newgala_sml01x",
                "p_picturemirror02x",
                "mp006_p_mshn_painting01x",
                "mp006_p_mshn_painting02x",
                "mp006_p_mshn_painting03x",
                "mp006_p_mshn_painting04x",
                "mp006_p_mshn_painting05x",
                "mp006_p_mshn_painting06x",
                "mp006_p_mshn_painting07x",
                "mp006_p_mshn_painting08x",
                "mp006_p_mshn_painting09x",
                "mp006_p_mshn_painting10x",
                "p_cs_photowolves",
                "p_bag01x",
                "p_bag01x",
                "mp006_p_bowl_apple01x",
                "mp006_p_bowl_banana01x",
                "p_gourdsbundle01x",
                "p_stewplate01x",
                "p_tutlesoup01x",
                "p_sink02x",
                "p_sink04x",
                "p_drysink01x",
                "p_pedestal01x",
                "p_counterdoctor01x",
            },
        },
    },
    [9] = {
        Label = "deco outsie",
        Setup = {
            Items = {
                wood = 1, -- item name -- quantity
            },
            Props = {
                "p_hitchingpost01x", -- prop name
                "p_hitchingpost05x",
                "p_bra_cal_sgn_tress2a",
                "p_scarecrow01x",
                "p_chickencoopcart01x",
                "p_bucketpigfeed02x",
                "p_outhouse03x",
                "p_bench03x",
                "p_bench09x",
                "p_bespoketable01x",
                "p_sawbucktable01x",
                "p_tablesur01x",
                "p_tableset01x",
                "p_haybale01x",
                "p_haybalecover01x",
                "p_haycartcover01x",
                "p_haypile01x",
                "p_haypile04x",
                "p_harness04x",
                "p_jumphurdles01x",
                "p_grp_sdlstand01x_car_sd",
                "p_feedtroughsml01x",
            },
        },
    },
    [10] = {
        Label = "plants outside",
        Setup = {
            Items = {
                wood = 1, -- item name -- quantity
            },
            Props = {
                "s_inv_bloodflower_bunch01x", -- prop name
                "engmace_p",
                "prariepoppy_p",
                "s_violetsnowdrop01x",
                "viosnwdrp_p",
                "s_inv_blackberry01x",
                "oregano_p",
                "milkweed_p",
                "p_ambfloorleaves01x",
                "p_ambfloorleaves02x",
                "rdr_bush_hedgecore_aa",
                "rdr_bush_fern_ab_sim",
                "rdr_bush_neat_ba_sim",
                "rdr_bush_neat_bc_sim",
                "rdr_bush_neat_ae_sim",
                "rdr_bush_paradise_aa_sim",
                "p_tree_cedar_decor_02",
                "rdr_bush_neat_ab_sim",
                "rdr_bush_wandering_aa_sim",
                "rdr_bush_soga_aa_sim",
            },
        },
    },
    [11] = {
        Label = "camp",
        Setup = {
            Items = {
                wood = 1, -- item name -- quantity
            },
            Props = {
                "p_ambcloth03x", -- prop name
                "p_bandage01x",
                "p_bandage02x",
                "p_bandage03x",
                "p_bedrollopen01x",
                "p_bedrollopen03x",
                "p_boilercamp01x",
                "p_campfire_06x",
                "p_campfire_coloursmoke01x",
                "p_campfire_under01x",
                "p_campfire_win2_01x",
                "p_campfire_win2_smolder01x",
                "p_campfire01x_nofire",
                "p_campfire01x",
                "p_campfire02_amb",
                "p_campfire02x_script",
                "p_campfire02x",
                "p_campfire02xb",
                "p_campfire03x_nofire",
                "p_campfire03x",
                "p_campfire04x",
                "p_campfire05x_script",
                "p_campfire05x",
                "p_campfirebasin01x",
                "p_campfireburnedout05x",
                "p_campfireburntout02x",
                "p_campfirechar01x",
                "p_campfirecharsml01x",
                "p_campfirecombined01x_off",
                "p_campfirecook01x",
                "p_campfirecook02x",
                "p_campfiredebris01x",
                "p_campfiredirt01x",
                "p_campfiredirt01x002",
                "p_campfiredirtsml01x",
                "p_campfireembers01x",
                "p_campfirefresh01x",
                "p_campfirenosmoke01x",
                "p_campfirerock01x",
                "p_campfirerock02x",
                "p_campfirerocksml01x",
                "p_campfirerocksml02x",
                "p_campfiresmlsmolder01x",
                "p_campfiresmolder01x",
                "p_campfiretemplate01x",
                "p_campfirewhitefish03x",
                "p_canopy66x",
                "p_compass01x",
                "p_cookgrate01x",
                "p_cookgrate02x",
                "p_cot01x",
                "p_coverboar01x",
                "p_coverpronghorn01x",
                "p_coverpronghorn02x",
                "p_craftingpot01x",
                "p_firebarrel01x",
                "p_firesignal01x",
                "p_leantopine01x",
                "p_map01x",
                "p_map02x",
                "p_map03x",
                "p_matchstick01x_pickup",
                "p_prisoncage02x",
                "p_stake01x",
                "p_stick01x",
                "p_stick02x",
                "p_stick03x",
                "p_stick04x",
                "p_stickfirepoker01x",
                "p_stump_01bx",
                "p_stump_01x",
                "p_stump",
                "p_stumpwoodsplit01x",
                "p_stumpwoodsplit02x",
                "p_tentarmypupbroken02x",
                "p_tentarmypupbroken04x",
                "p_tentrack01x",
                "p_tentrolled01x",
                "p_tentrolled02x",
                "p_amb_tent01x",
                "p_amb_tent02x",
                "p_amb_tent03x",
                "p_bedrollclosed_sml01x",
                "p_bedrollclosed_sml02x",
                "p_bedrollclosed01x",
                "p_bedrollclosed03x",
                "p_camp_cup_01x",
                "p_camp_plate_01x",
                "p_camp_plate_02x",
                "p_camp_plate_03x",
                "p_campfire02x_combo",
                "p_campfire02x_dynamic",
                "p_campfirecombined01x",
                "p_campfirecombined02x",
                "p_campfirecombined03x",
                "p_campfirecombined04x",
                "p_campfireprop02x",
                "p_canopycloth",
                "p_canopycloth03x",
                "p_clothesline01x",
                "p_cookfirestructure02x",
                "p_firesticks01x",
                "p_kindlingpile01x",
                "p_leanto02x",
                "p_leanto03x",
                "p_matches01x",
                "p_matchstick01x",
                "p_platedog01x",
                "p_prisoncage01x",
                "p_tarp01x",
                "p_tarp04x",
                "p_tarpbutcher01x",
                "p_tent_leento01x",
                "p_tent_leento02x",
                "p_tent_leento03x",
                "p_tent_leento04x",
                "p_tent0101x",
                "p_tentarmypup01bx",
                "p_tentarmypup01x",
                "p_tentarmypup02x_open",
                "p_tentarmypup02x",
                "p_tentarmypupbroken01x",
                "p_tentarmypupbroken03x",
                "p_tentarmypupbrokensnow01x",
                "p_tentdamaged02x",
                "p_tentmexican01x",
                "p_tentmountainmen01x",
                "p_tentmountainmen02x",
                "p_tentnorth01bx",
                "p_tentnorth01x",
                "p_tentplain01x",
                "p_tentrack02x",
                "p_tentrolled04x",
                "p_tentstripebroken01x",
                "p_amb_mattress04x",
                "p_ambblanketroll01x",
                "p_ambburnbarrel01x",
                "p_ambcart01x",
                "p_ambclothdrape01x_static",
                "p_ambclothhang01x",
                "p_ambclothpile01x",
                "p_ambcorddried01x",
                "p_ambcordfresh01x",
                "p_ambfishbone02x",
                "p_ambfloorfur01x",
                "p_ambfloorfur02x",
                "p_ambfloorleaves01x",
                "p_ambfloorleaves02x",
                "p_ambfloorleaves03x",
                "p_ambfloormoss01x",
                "p_ambfloorplandecor01x",
                "p_ambfloorplantent01x",
                "p_ambfloorplantravel01x",
                "p_ambfloorroll01x",
                "p_ambfloorrug01x",
                "p_ambfloorrug02x",
                "p_ambfloorrug03x",
                "p_ambfloorrug04x",
                "p_ambfloorrug05x",
                "p_ambfloorrug06x",
                "p_ambfloorrug07x",
                "p_ambfloorrug08x",
                "p_ambfloorscrub01x",
                "p_ambfloortarp01x",
                "p_ambforage02x",
                "p_ambframe01x",
                "p_ambframe04x",
                "p_ambpelt01x",
                "p_ambpelt02x",
                "p_ambpeltstack01x",
                "p_ambropedraped01x_static",
                "p_ambropeloop01x",
                "p_ambropepile01x",
                "p_ambstake01x",
                "p_ambstove01x",
                "p_ambtentbark01b",
                "p_ambtentdebris01x",
                "p_ambtentdebris02x",
                "p_ambtentdebris03x",
                "p_ambtentgrass01x",
                "p_ambtentmulch01b",
                "p_ambtentpanel01x",
                "p_ambtentscrub01b",
                "p_ambtentscrub01x",
                "p_ambtentsticks01x",
                "p_ambtentstring01b",
                "p_ambtentswamp01x",
                "p_ambtenttrunk01x",
                "p_bucketcamphob01x",
                "p_bucketcampsav01x",
                "p_camphitchhook01x",
                "p_campropetie02x",
                "p_campropetie03x",
                "p_cratetablemil01x",
                "p_gangbandana01x",
                "p_gangcratecloth01x",
                "p_gangfence01x",
                "p_gangfence02x",
                "p_gangfence03x",
                "p_gangodriscollmask01x",
                "p_gangpost01x",
                "p_gangscarf01x",
                "p_gangwagoncloth02x",
                "p_gangwood01x",
                "p_ladlecampcul01x",
                "p_ladlecamphob01x",
                "p_ladlecampsav01x",
                "p_ladlecampsur01x",
                "p_mp_feedbaghang01x",
                "p_tablehob1x",
                "p_tablesav01x",
                "p_tablesur01x",
                "p_ambbed01x",
                "p_ambbundle01x",
                "p_ambcache01x",
                "p_ambcart02x",
                "p_ambchair01x",
                "p_ambchair02x",
                "p_ambclothdrape01x",
                "p_ambclothhang02x",
                "p_ambclothseat01x",
                "p_ambfishgut02x",
                "p_ambfloorwood01x",
                "p_ambforage01x",
                "p_ambforage03x",
                "p_ambpack01x",
                "p_ambpack02x",
                "p_ambpack04x",
                "p_ambpack05x",
                "p_ambpelt03x",
                "p_ambpeltstring01x",
                "p_ambropedraped01x",
                "p_ambropepile02x",
                "p_ambsack02x",
                "p_ambsticks01x",
                "p_ambtentburlap01b",
                "p_ambtentburlap01x",
                "p_ambtenthide01b",
                "p_ambtenthide01x",
                "p_ambtentleather01b",
                "p_ambtentleather01x",
                "p_ambtentmulch01x",
                "p_ambtentoilskin01b",
                "p_ambtentoilskin01x",
                "p_ambtentpatch01b",
                "p_ambtentpatch01x",
                "p_ambtentplaid01b",
                "p_ambtentplaid01x",
                "p_ambtentrope01x",
                "p_ambtentrope02x",
                "p_ambtentrug01b",
                "p_ambtentrug01x",
                "p_ambtentstring01x",
                "p_ambtentstripe01x",
                "p_ambwoodpile01x",
                "p_ambwoodstack01x",
                "p_barrelladle1x_culture",
                "p_barrelladle1x_hobo",
                "p_barrelladle1x_military",
                "p_barrelladle1x_savage",
                "p_barrelladle1x_survivor",
                "p_bottlecrate_cul",
                "p_bottlecrate_hob",
                "p_bottlecrate_mil",
                "p_bottlecrate_sav",
                "p_bottlecrate_sur",
                "p_bucketcampcul01x",
                "p_bucketcampmil01x",
                "p_chairhob01x",
                "p_chairhob02x",
                "p_chairrusticsav01x",
                "p_gangbed01x",
                "p_gangblanket01x",
                "p_gangframe01x",
                "p_gangtablemake01x",
                "p_gangtablemake02x",
                "p_gangtentlemoyne01x",
                "p_gangtenttarp01x",
                "p_gangwagoncloth01x",
                "p_tablecul01x",
                "s_awningcul",
                "s_awninghob",
                "s_awningmil",
                "s_awningsav",
                "s_awningsur",
                "s_cul_cookfire01x",
                "s_hobo_cookfire01x",
                "s_mil_cookfire01x",
                "s_sav_cookfire01x",
                "s_sur_cookfire01x",
            },
        },
    },
    [12] = {
        Label = "barrier",
        Setup = {
            Items = {
                wood = 1, -- item name -- quantity
            },
            Props = {
                "p_barricadewood_sml01x", -- prop name
                "p_avoidancebound01x",
                "p_barricade01x",
                "p_barricade03x",
                "p_barricade04x",
                "p_barricade05x",
                "p_barricadewood_lrg01x",
                "p_concretesack01x",
                "p_bra_fence01x",
                "p_bra_fence03x",
                "p_bra_fencepost01x",
                "p_chickenfence01x",
                "p_chickenfencepost",
                "p_emrfence02bx",
                "p_emrfence03cx",
                "p_fence01ax",
                "p_fence01bx",
                "p_fence01cx",
                "p_fence01dx",
                "p_fence01ax",
                "p_fence02cx",
                "p_fence02x",
                "p_fence04ax",
                "p_fence04bx",
                "p_fence06ax",
                "p_fence06bx",
                "p_spooni_fence",
            },
        },
    },
}
```
:::