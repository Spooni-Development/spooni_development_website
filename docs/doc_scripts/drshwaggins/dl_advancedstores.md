---
prev: false
next: false
aside: false
---

# 🏪 dl_advancedstores
Documentation relating to the [dl_advancedstores](https://drshwaggins-scripts.tebex.io/package/5736588).

___
<br>
<iframe width="560" height="315" src="https://www.youtube.com/embed/0EkeFqSfrFc?si=k5EA8VCC_tOQx93f" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>

## 1. Installation
dl_advancedstores works only with VORP. 

To install dl_advancedstores:
- Drag and drop the resource into your resources folder
  - `dl_advancedstores`
- Add this ensure in your server.cfg
  ```
    ensure dl_advancedstores
  ```
- Execute the SQL file
  - `sql.sql`
- Now you can configure and translate the script as you like
  - `config.lua`
  - `translation.lua`
- At the end
  - Restart the server

If you have any problems, you can always open a ticket in the [DrShwaggins Discord](https://discord.gg/K9H27J5VaS).

## 2. Usage
Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum.

## 3. For developers

:::details Config.lua
```lua
Config = {}
Config.Locale = 'en'

Config.DevMode = false

Config.CreateStoreAccess = {'admin'}  -- if empty EVERY user has Access and can create a private store to sell his items

Config.CreateBuyableStoreAccess = {'admin'}  -- if empty NO user has Access | Should only be available for team/staff

Config.CreateStoreCommand = "createstore"
Config.CreateBuyableStoreCommand = "createstorebuy"

Config.MaxOwnedStores = 1
Config.MaxJobStores = 1

Config.UseDLSociety = false -- Use Dl-Society to create Job Stores (employees can manage the store and money will be transfered to the society wallet) (to create Job Stors read README)

Config.ShowPlayerStoreBlips = true
Config.BasePlayerStoreBlip = "-426139257" -- texture hash
Config.BlipSize = 0.2

Config.ExtraBlipsForPlayerStores = {
  -- {shopID=43, blipSprite="-426139257", blipColor = "BLIP_MODIFIER_MP_COLOR_8"}
}






Config.OpenStoreKey = 0x760A9C6F
Config.ManageStoreKey = 0xE30CD707
Config.SelltoStoreKey = 0x26E9DC00


Config.DrawMarkerDistance = 10.0
Config.InteractionDistance = 3.0

Config.DisableMarker = false
Config.StoreMarkerR = 255
Config.StoreMarkerG = 255
Config.StoreMarkerB = 255
Config.StoreMarkerAlpha = 100


Config.AllowSellingToPlayerStore = true


Config.AllowSellingWeapons = {} -- Jobs Who are allowed to sell weapons, if empty everybody can sell weapons for example: 'sherrif','police','marshal'


Config.ItemBlacklist = {    -- items that cant be selled by players

}


Config.BuyAbleItemsBlackList = {      -- Items which players can sell to player stores

}


Config.BaseStores = {

  {
    name = "valstore",  -- must be unique
    label = "Valentine Store",
    blip = "748106308", -- texture hash
    categories = {
      {name='food', display="Eat and Drink"},
      {name='weapons', display="Weapons"},
    },
    npcmodel = "u_m_m_sdexoticsshopkeeper_01",
    position = {x = -263.387, y = 762.3051, z = 117.10, h = 303.22},
    items = {
      {name="water", display="Water", price=0.23, categorie='food', type="item"},
      {name="bread", display="Bread", price=0.19, categorie='food', type="item"},
      {name="WEAPON_REVOLVER_SCHOFIELD", display="Schofield Revolver", price=0.23, categorie='weapons', type="weapon"},
    },
    buying = {
      {name="water", display="Water", price=0.10 , type="item"},
      {name="WEAPON_REVOLVER_SCHOFIELD", display="Revolver", price=0.10 , type="weapon"},
    }
  },

}


Config.WeaponDisplayNames = {
  {
    Name     = "Lasso",                                                                 -- TRANSLATE NAME ONLY
    HashName = "WEAPON_LASSO",                                                          -- DONT TOUCH
  },
  {
    Name     = "Reinforced Lasso",
    HashName = "WEAPON_LASSO_REINFORCED",
  },
  {
    Name = "Knife",
    HashName = "WEAPON_MELEE_KNIFE",
  },
  {
    Name = "Knife Rustic",
    HashName = "WEAPON_MELEE_KNIFE_RUSTIC",
  },
  {
    Name = "Knife Horror",
    HashName = "WEAPON_MELEE_KNIFE_HORROR",
  },
  {
    Name = "Knife Civil War",
    HashName = "WEAPON_MELEE_KNIFE_CIVIL_WAR",
  },
  {
    Name = "Knife Jawbone",
    HashName = "WEAPON_MELEE_KNIFE_JAWBONE",
  },
  {
    Name = "Knife Miner",
    HashName = "WEAPON_MELEE_KNIFE_MINER",
  },
  {
    Name = "Knife Vampire",
    HashName = "WEAPON_MELEE_KNIFE_VAMPIRE",
  },
  {
    Name = "Cleaver",
    HashName = "WEAPON_MELEE_CLEAVER",
  },
  {
    Name = "Hachet",
    HashName = "WEAPON_MELEE_HATCHET",
  },
  {
    Name = "Hachet Double Bit",
    HashName = "WEAPON_MELEE_HATCHET_DOUBLE_BIT",
  },
  {
    Name = "Hachet Hewing",
    HashName = "WEAPON_MELEE_HATCHET_HEWING",
  },
  {
    Name = "Hachet Hunter",
    HashName = "WEAPON_MELEE_HATCHET_HUNTER",
  },
  {
    Name = "Hachet Viking",
    HashName = "WEAPON_MELEE_HATCHET_VIKING",
  },
  {
    Name = "Tomahawk",
    HashName = "WEAPON_THROWN_TOMAHAWK",
  },
  {
    Name = "Tomahawk Ancient",
    HashName = "WEAPON_THROWN_TOMAHAWK_ANCIENT",
  },
  {
    Name = "Throwing Knifes",
    HashName = "WEAPON_THROWN_THROWING_KNIVES",
  },
  {
    Name = "Machete",
    HashName = "WEAPON_MELEE_MACHETE",
  },
  {
    Name = "Bow",
    HashName = "WEAPON_BOW",
  },
  {
    Name = "Pistol Semi-Auto",
    HashName = 'WEAPON_PISTOL_SEMIAUTO',
  },
  {
    Name = "Pistol Mauser",
    HashName = "WEAPON_PISTOL_MAUSER",
  },
  {
    Name = "Pistol Volcanic",
    HashName = "WEAPON_PISTOL_VOLCANIC",
  },
  {
    Name = "Pistol M1899",
    HashName = "WEAPON_PISTOL_M1899",
  },
  {
    Name = "Revolver Schofield",
    HashName = "WEAPON_REVOLVER_SCHOFIELD",
  },
  {
    Name = "Revolver Navy",
    HashName = "WEAPON_REVOLVER_NAVY",
  },
  {
    Name = "Revolver Navy Crossover",
    HashName = "WEAPON_REVOLVER_NAVY_CROSSOVER",
  },
  {
    Name = "Revolver Lemat",
    HashName = "WEAPON_REVOLVER_LEMAT",
  },
  {
    Name = "Revolver Double Action",
    HashName = "WEAPON_REVOLVER_DOUBLEACTION",
  },
  {
    Name = "Revolver Cattleman",
    HashName = "WEAPON_REVOLVER_CATTLEMAN",
  },
  {
    Name = "Revolver Cattleman mexican",
    HashName = "WEAPON_REVOLVER_CATTLEMAN_MEXICAN",
  },
  {
    Name = "Varmint Rifle",
    HashName = "WEAPON_RIFLE_VARMINT",
  },
  {
    Name = "Winchester Repeater",
    HashName = "WEAPON_REPEATER_WINCHESTER",
  },
  {
    Name = "Henry Reapeater",
    HashName = "WEAPON_REPEATER_HENRY",
  },
  {
    Name = "Evans Repeater",
    HashName = "WEAPON_REPEATER_EVANS",
  },
  {
    Name = "Carabine Reapeater",
    HashName = "WEAPON_REPEATER_CARBINE",
  },
  {
    Name = "Rolling Block Rifle",
    HashName = "WEAPON_SNIPERRIFLE_ROLLINGBLOCK",
  },
  {
    Name = "Carcano Rifle",
    HashName = "WEAPON_SNIPERRIFLE_CARCANO",
  },
  {
    Name = "Springfield Rifle",
    HashName = "WEAPON_RIFLE_SPRINGFIELD",
  },
  {
    Name = "Elephant Rifle",
    HashName = "WEAPON_RIFLE_ELEPHANT",
  },
  {
    Name = "BoltAction Rifle",
    HashName = "WEAPON_RIFLE_BOLTACTION",
  },
  {
    Name = "Semi-Auto Shotgun",
    HashName = "WEAPON_SHOTGUN_SEMIAUTO",
  },
  {
    Name = "Sawedoff Shotgun",
    HashName = "WEAPON_SHOTGUN_SAWEDOFF",
  },
  {
    Name = "Repeating Shotgun",
    HashName = "WEAPON_SHOTGUN_REPEATING",
  },
  {
    Name = "Double Barrel Exotic Shotgun",
    HashName = "WEAPON_SHOTGUN_DOUBLEBARREL_EXOTIC",
  },
  {
    Name = "Pump Shotgun",
    HashName = "WEAPON_SHOTGUN_PUMP",
  },
  {
    Name = "Double Barrel Shotgun",
    HashName = "WEAPON_SHOTGUN_DOUBLEBARREL",
  },
  {
    Name = "Camera",
    HashName = "WEAPON_KIT_CAMERA",
  },
  {
    Name = "Improved Binoculars",
    HashName = "WEAPON_KIT_BINOCULARS_IMPROVED",
  },
  {
    Name = "Knife Trader",
    HashName = "WEAPON_MELEE_KNIFE_TRADER",
  },
  {
    Name = "Binoculars",
    HashName = "WEAPON_KIT_BINOCULARS",
  },
  {
    Name = "Advanced Camera",
    HashName = "WEAPON_KIT_CAMERA_ADVANCED",
  },
  {
    Name = "Lantern",
    HashName = "WEAPON_MELEE_LANTERN",
  },
  {
    Name = "Davy Lantern",
    HashName = "WEAPON_MELEE_DAVY_LANTERN",
  },
  {
    Name = "Halloween Lantern",
    HashName = "WEAPON_MELEE_LANTERN_HALLOWEEN",
  },
  {
    Name = "Poison Bottle",
    HashName = "WEAPON_THROWN_POISONBOTTLE",
  },
  {
    Name = "Metal Detector",
    HashName = "WEAPON_KIT_METAL_DETECTOR",
  },
  {
    Name = "Dynamite",
    HashName = "WEAPON_THROWN_DYNAMITE",
  },
  {
    Name = "Molotov",
    HashName = "WEAPON_THROWN_MOLOTOV",
  },
  {
    Name = "Improved Bow",
    HashName = "WEAPON_BOW_IMPROVED",
  },
  {
    Name = "Machete Collector",
    HashName = "WEAPON_MELEE_MACHETE_COLLECTOR",
  },
  {
    Name = "Electric Lantern",
    HashName = "WEAPON_MELEE_LANTERN_ELECTRIC",
  },
  {
    Name = "Torch",
    HashName = "WEAPON_MELEE_TORCH",
  },
  {
    Name = "Moonshine Jug",
    HashName = "WEAPON_MOONSHINEJUG_MP",
  },
  {
    Name = "Bolas",
    HashName = "WEAPON_THROWN_BOLAS",
  },
  {
    Name = "Bolas Hawkmoth",
    HashName = "WEAPON_THROWN_BOLAS_HAWKMOTH",
  },
  {
    Name = "Bolas Ironspiked",
    HashName = "WEAPON_THROWN_BOLAS_IRONSPIKED",
  },
  {
    Name = "Bolas Intertwined",
    HashName = "WEAPON_THROWN_BOLAS_INTERTWINED",
  },
  {
    Name = "Fishing Rod",
    HashName = "WEAPON_FISHINGROD",
  },
  {
    Name = "Machete Horror",
    HashName = "WEAPON_MACHETE_HORROR",
  },
  {
    Name = "Lantern Haloween",
    HashName = "WEAPON_MELEE_LANTERN_HALOWEEN",
  },
  {
    Name = "Hammer",
    HashName = "WEAPON_MELEE_HAMMER",
  }
}
:::
