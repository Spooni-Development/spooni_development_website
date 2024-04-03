---
prev: false
next: false
aside: false
---

# 📦 dl_storages
Documentation relating to the [dl_storages](https://drshwaggins-scripts.tebex.io/package/5855834).

___
<br>
<iframe width="560" height="315" src="https://www.youtube.com/embed/JjLrjQpgcGM?si=AswNDJAGUQduWLI1" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>

## 1. Installation
dl_storages works only with VORP. 

To install dl_storages:
- Drag and drop the resource into your resources folder
  - `dl_storages`
- Add this ensure in your server.cfg
  - `ensure dl_storages`
- Execute the SQL file
  - `storages.sql`
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

Config.BackUpModelHash = "p_storagebox01x"

Config.DisableMarkers = false
Config.ArmoryMarkerR = 255
Config.ArmoryMarkerG = 255
Config.ArmoryMarkerB = 255
Config.ArmoryMarkerAlpha = 255

Config.AllowNonEmptyPickup = false


Config.StorageItems = {

    -- LARGE STORAGE BOX
    {
      item = "large_storagebox",  -- STORAGE ITEM USED IN INV TO PLACE THE STORAGE
      modelHash = "p_storagebox01x",
      storageSpace = 100, -- max items allowed to store | Minimum Value = 1
      allowWeapons = true,  -- Are Weapons Allowed
      jobAllowed = {"sherrif","police"}, -- PLAYERS WITH THIS JOB DOESENT NEED THE PASSWORD TO OPEN THIS STORAGE TYPE
      blacklistedItems = {"water"},  -- ITEMS AND WEAPONS WHO SHOULDNT BE ALLOWED IN THE STORAGE | if -1 no items are allowed (Weapons still allowed)
      itemLimits = {
        {name="bread",amount=10}, -- MAX 10 Bread Allowed in Storage
      },
      weaponLimits = {
        {name="WEAPON_REPEATER_CARBINE",amount=1}, -- MAX 1 'WEAPON_REPEATER_CARBINE' Allowed in Storage
      },
    },


    -- SMALL STORAGE BOX
    -- {
    --   item = "",
    --   modelHash = "p_storagebox01x",
    --   storageSpace = 50,
    --   allowWeapons = false,
    --   jobAllowed = {""},
    --   blacklistedItems = {""},
    --
    --   },
    --   weaponLimits = {
    --
    --   },
    -- },


    -- WEAPON CRATE
    -- {
    --   item = "",  -- STORAGE ITEM USED IN INV TO PLACE THE STORAGE
    --   modelHash = "p_storagebox01x",
    --   storageSpace = 5, -- max items allowed to store
    --   allowWeapons = true,  -- Are Weapons Allowed
    --   jobAllowed = {""}, -- PLAYERS WITH THIS JOB DOESENT NEED THE PASSWORD TO OPEN THIS STORAGE TYPE
    --   blacklistedItems = -1,  -- ITEMS AND WEAPONS WHO SHOULDNT BE ALLOWED IN THE STORAGE | if -1 no items are allowed (Weapons still allowed)
    --   itemLimits = {
    --
    --   },
    --   weaponLimits = {
    --
    --   },
    -- },
}


Config.StorageBags = {

  -- SMALL BAG
  {
    item = "small_bag",  -- STORAGE ITEM USED IN INV TO PLACE THE STORAGE
    storageSpace = 100, -- max items allowed to store | Minimum Value = 1
    allowWeapons = false,  -- Are Weapons Allowed
    blacklistedItems = {"water"},  -- ITEMS AND WEAPONS WHO SHOULDNT BE ALLOWED IN THE STORAGE | if -1 no items are allowed (Weapons still allowed)
    itemLimits = {
      {name="bread",amount=10}, -- MAX 10 Bread Allowed in Storage
    },
    weaponLimits = {
      {name="WEAPON_REPEATER_CARBINE",amount=1}, -- MAX 1 'WEAPON_REPEATER_CARBINE' Allowed in Storage
    },
  },

}
:::
