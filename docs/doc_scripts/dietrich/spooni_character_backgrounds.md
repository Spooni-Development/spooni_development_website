---
title: Character Backgrounds
description: Immersive character background selection system by Dietrich Development. Create unique character stories and origins.
---

# 🤠 Immersive Character Background Selection
Documentation relating to the spooni_character_backgrounds.

:::tabs
== INFO
<iframe width="560" height="315" src="https://dunb17ur4ymx4.cloudfront.net/packages/images/8b9064685749ed979722caa88372a887c5ced559.png" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

<a href="https://tebex.dietrich-development.com//package/6922033?basket=cmukmd-bd8c89a4e16af2c22654ed1542f0eae5790e5c51" class="button-buy">🛒 Buy Now</a>
:::

## 1. Installation
spooni_character_backgrounds works Standalone.

To install spooni_character_backgrounds:
- Download the resource
  - On [Cfx.re Portal](https://portal.cfx.re/)
- Drag and drop the resource into your resources folder
  - `spooni_character_backgrounds`
- Add this ensure in your server.cfg
  ```
    ensure spooni_character_backgrounds
  ```
- Now you can configure and translate the script as you like
  - `config.lua`
- At the end, restart the server

If you have any problems, you can always open a ticket in the [Spooni Discord](https://discord.gg/spooni).

## 2. Usage
Allows players to choose from customizable backgrounds such as Outlaw, Hunter, or Doctor after character creation. Each background grants starter items and perks, managed by a standalone perk-level system with database support for full compatibility with future character-based features.

## 3. For developers

:::details Config.lua
```lua
Config = {}

-- Debug mode
Config.debug = true

-- Background configurations
-- To add a new background, simply add a new entry to the Config.Backgrounds table
---EXAMPLE:
--[[ 
my_new_background = {
    -- UI Settings
    label = "My New Background",          -- Name shown in UI
    description = "Description here...",  -- Description shown in UI
    image = "images/my_image.png",        -- Image path relative to html folder
    
    -- Gameplay Settings
    job = "myjob",
    money = 100,  -- Optional: starting money (can be negative)
    
    -- Optional: starting perks (compatible with spooni_weaponController)
    perks = {     
        { name = "some_perk", amount = 1000 }
    },
    
    -- Optional: starting items
    items = {     
        { name = "some_item", amount = 5 },
        { name = "WEAPON_SOMETHING", isWeapon = true }
    },
    
    -- Optional: custom code (server side)
    custom = function(source, charid, background)
        --custom code here to call custom events or do custom things (server side)
        
    end
} 
]]

-- Background configurations with UI data
Config.Backgrounds = {
    hunter = {
        -- UI Settings
        label = "Hunter",
        description = "A skilled character, experienced in the art of hunting and survival in the wilderness.",
        image = "images/hunter.jpg",
        
        -- Gameplay Settings
        job = "hunter",
        perks = {
            { name = "hunting", amount = 5000 },
            { name = "gunslinger", amount = 2000 }
        },
        items = {
            { name = "WEAPON_BOW", isWeapon = true },
            { name = "ammoarrownormal", amount = 2 }
        },

        custom = function(source, charid, background)
            --custom code here to call custom events or do custom things (server side)
            
        end
    },
    herbalist = {
        label = "Herbalist",
        description = "A wise healer, familiar with the hidden powers of nature and its remedies.",
        image = "images/herbalist.jpg",

        job = "herbalist",
        perks = {
            { name = "herbalism", amount = 7600 }
        },
        items = {
            { name = "herbal_medicine", amount = 5 },
            { name = "splint", amount = 5 },
            { name = "syringe_herbalist", amount = 5 }
        }
    },
    rich = {
        label = "Wealthy Heir",
        description = "A wealthy heir, accustomed to a life of luxury and possessing considerable financial means.",
        image = "images/rich.jpg",

        job = "rich",
        money = 500,
        items = {
            { name = "compass", amount = 1 },
            { name = "pocket_watch", amount = 1 }
        }
    },
    miner = {
        label = "Miner",
        description = "A hardened miner, experienced in extracting ores and minerals from the deep mines of the West.",
        image = "images/miner.jpg",

        job = "miner",
        perks = {
            { name = "mining", amount = 5000 }
        },
        items = {
            { name = "pickaxe", amount = 1 },
            { name = "chisel", amount = 1 },
            { name = "WEAPON_MELEE_LANTERN", isWeapon = true }
        }
    },
    lumberjack = {
        label = "Lumberjack",
        description = "A strong lumberjack who knows the forests like the back of his hand and is skilled with an axe.",
        image = "images/lumberjack.jpg",

        job = "lumberjack",
        perks = {
            { name = "lumber", amount = 5000 }
        },
        items = {
            { name = "lumberaxe", amount = 1 }
        }
    },
    farmer = {
        label = "Farmer",
        description = "A hardworking farmer who dedicates his life to growing crops and raising livestock.",
        image = "images/farmer.jpg",

        job = "farmer",
        perks = {
            { name = "farming", amount = 5000 }
        },
        items = {
            { name = "hoe", amount = 1 },
            { name = "wateringcan", amount = 1 },
            { name = "fertilizer", amount = 20 },
            { name = "carrot_seed", amount = 5 },
            { name = "potato_seed", amount = 5 },
            { name = "wheat_seed", amount = 10 }
        }
    },
    medic = {
        label = "Medic",
        description = "A trained healer with extensive medical knowledge and the ability to treat injuries.",
        image = "images/medic.jpg",

        job = "medic",
        perks = {
            { name = "medic", amount = 5000 }
        },
        items = {
            { name = "bandage", amount = 5 },
            { name = "consumable_medicine", amount = 5 },
            { name = "syringe", amount = 5 },
            { name = "antisepticum", amount = 1 }
        }
    },
    horsetrainer = {
        label = "Horse Trainer",
        description = "An experienced horse expert with a deep understanding of horse care and training.",
        image = "images/horsetrainer.jpg",

        job = "horsetrainer",
        items = {
            { name = "horsebrush", amount = 1 },
            { name = "horsefood", amount = 20 },
            { name = "horseshoe", amount = 5 },
            { name = "horse_catalogue", amount = 1 },
            { name = "horse_token", amount = 1, metadata = { description = "American Paint Splashed White", id = "A_C_Horse_AmericanPaint_SplashedWhite" }}
        }
    },
    fisherman = {
        label = "Fisherman",
        description = "A patient fisherman who knows and makes use of the waters of the West.",
        image = "images/fisher.jpg",

        job = "fisherman",
        perks = {
            { name = "fishing", amount = 5000 }
        },
        items = {
            { name = "p_baitBread01x", amount = 10 },
            { name = "p_baitCorn01x", amount = 10 },
            { name = "p_baitCheese01x", amount = 10 },
            { name = "p_baitWorm01x", amount = 10 },
            { name = "WEAPON_FISHINGROD", isWeapon = true }
        }
    },
    cook = {
        label = "Cook",
        description = "A talented cook who can prepare delicious meals from simple ingredients.",
        image = "images/cook.jpg",
        job = "cook",
        perks = {
            { name = "cooking", amount = 5000 }
        },
        items = {
            { name = "huevos_rancheros", amount = 10 },
            { name = "wine", amount = 1 },
            { name = "barrel_whisky", amount = 1 },
            { name = "barrel_beer", amount = 1 }
        }
    },
    veteran = {
        label = "Veteran",
        description = "An experienced veteran with military training and extensive knowledge in handling weapons.",
        image = "images/veteran.jpg",
        job = "veteran",
        perks = {
            { name = "gunslinger", amount = 5000 }
        },
        items = {
            { name = "pocket_watch", amount = 1 },
            { name = "compassimproved", amount = 1 },
            { name = "WEAPON_REVOLVER_NAVY", isWeapon = true },
            { name = "weapon_cleaning_kit", amount = 1 },
            { name = "ammorevolvernormal", amount = 1 }
        }
    },
    precision_mechanic = {
        label = "Precision Mechanic",
        description = "A skilled craftsman specialized in fine mechanical work and valuable materials.",
        image = "images/precision_mechanic.jpg",

        job = "precision_mechanic",
        items = {
            { name = "engravingtool", amount = 1 },
            { name = "diamond_cut", amount = 1 },
            { name = "goldring", amount = 5 },
            { name = "pocket_watch", amount = 1 },
            { name = "pocket_watch_gold", amount = 1 }
        }
    },
    swindler = {
        label = "Swindler",
        description = "A cunning con artist who gets by with trickery and deceit.",
        image = "images/swindler.jpg",

        job = "swindler",
        money = 10,
        items = {
            { name = "lockpick", amount = 5 },
            { name = "cigarette", amount = 10 },
            { name = "matches", amount = 1 }
        }
    },
    homeless = {
        label = "Homeless",
        description = "A penniless loner who gets by with the bare essentials and hopes for a better future.",
        image = "images/homeless.jpg",

        job = "homeless",
        money = -25, -- Negative value means removing money
        perks = {
            { name = "gunslinger", amount = 1000 }
        },
        items = {
            { name = "cigarette", amount = 10 },
            { name = "matches", amount = 1 },
            { name = "whisky", amount = 5 },
            { name = "beer", amount = 5 },
            { name = "goldpan", amount = 1 },
            { name = "newspaper", amount = 10 }
        }
    },
    baker = {
        label = "Baker",
        description = "A penniless loner who gets by with the bare essentials and hopes for a better future.",
        image = "images/baker.jpg",

        job = "baker",
        perks = {
            { name = "cooking", amount = 5000 }
        },
        items = {
            { name = "bread", amount = 5 },
            { name = "sugar", amount = 5 },
            { name = "bread_fish", amount = 5 },
            { name = "bread_meat", amount = 5 },
            { name = "chocolate", amount = 5 },
            { name = "birthday_cake", amount = 1 }
        }
    },
    blacksmith = {
        label = "Blacksmith",
        description = "A skilled craftsman who forges weapons, tools, and horseshoes, essential to frontier life.",
        image = "images/blacksmith.jpg",

        job = "blacksmith",
        perks = {
            { name = "blacksmithing", amount = 5000 }
        }
    },
    civilian = {
        label = "Civilian",
        description = "An ordinary settler, making their way through the challenges of daily life in the West.",
        image = "images/civilian.jpg",

        job = "civilian"
    },
    law = {
        label = "Law",
        description = "A dedicated enforcer of justice, upholding order and protecting the townsfolk.",
        image = "images/lawmen.jpg",

        job = "law"
    },
    gunslinger = {
        label = "Gunslinger",
        description = "A fearless duelist, renowned for quick reflexes and unmatched skill with firearms.",
        image = "images/gunslinger.jpg",

        job = "gunslinger",
        perks = {
            { name = "gunslinger", amount = 8400 }
        }
    },
    gunsmith = {
        label = "Gunsmith",
        description = "An expert in repairing and customizing firearms, ensuring every weapon is battle-ready.",
        image = "images/gunsmith.jpg",

        job = "gunsmith"
    },
    vet = {
        label = "Veterinarian",
        description = "A compassionate animal doctor, tending to the needs of horses and livestock across the frontier.",
        image = "images/veteran.jpg",

        job = "vet"
    },
    carpenter = {
        label = "Carpenter",
        description = "A master of woodwork, building homes, wagons, and furniture for the growing settlements.",
        image = "images/carpenter.jpg",

        job = "carpenter"
    },
    native = {
        label = "Native",
        description = "A member of the land’s original people, deeply connected to nature and the traditions of their ancestors.",
        image = "images/native.jpg",

        job = "native"
    }
}



--name of a Event Handler that is called before the background select is showing
Config.triggerEvent = "vorp:initNewCharacter"


-- UI Settings
Config.UISettings = {
    -- Set to true to make the player invisible while the UI is open
    playerInvisible = true,
    
    -- UI Text (can be customized for different languages)
    text = {
        title = "Background Selection",
        description = "Select your background to define your character through his past and origin – a choice that significantly shapes your game start.",
        confirmationTitle = "Are you sure?",
        confirmationMessage = "This selection is final and cannot be changed.",
        confirmButton = "Confirm",
        cancelButton = "Cancel",
        selectButton = "Select"
    }
}

-- Event Handlers
Config.triggerEvent = "vorp:initNewCharacter" --for RSG it is Config.triggerEvent = "rsg-spawn:client:newplayer"
Config.afterSelectClientEvent = false -- Set to false if no event should be triggered after selection
```
:::