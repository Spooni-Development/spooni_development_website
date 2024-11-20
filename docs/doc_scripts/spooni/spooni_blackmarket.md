# 💀 Blackmarket
Documentation relating to the spooni_blackmarket.

:::tabs
== BUY
[Buy the script](https://spooni-shop.fragmentor.io/product/)
:::

## 1. Installation
spooni_blackmarket works only with VORP. 

To install spooni_blackmarket:
- Drag and drop the resource into your resources folder
  - `spooni_blackmarket`
- Add this ensure in your server.cfg
  ```
    ensure spooni_blackmarket
  ```
- Execute the SQL file
  - `blackmarket.sql`
- Now you can configure and translate the script as you like
  - `config.lua`
  - `translation.lua`
- At the end
  - Restart the server

If you have any problems, you can always open a ticket in the [Spooni Discord](https://discord.gg/spooni).

## 2. Usage
Go to one of the configured black markets. There you can open the menu and buy and sell items and weapons, the more you sell, the more share you get from the black market until it possibly belongs to you and then only you can buy.

## 3. For developers

:::details Config.lua
```lua
Config = {}

Config.Locale = "de"
Config.Webhook = "WEBHOOK LINK" -- Link

Config.Blackmarkets = {
    [1] = {
        Name = "Blackmarket", -- Name
        Owner_Sell_Percentage = 50,
        Locations = {
            {
                object_coords = vector4(1993.5844, -1945.4652, 29.0, 359.9963), 
                coords = vector4(1997.18, -1947.0, 41.0, 123.01)
            },
            {
                object_coords = vector4(2165.1594, -1101.1597, 29.0, 273.5488), 
                coords = vector4(2164.139, -1105.02, 41.277, 40.76)
            },
            {
                object_coords = vector4(2766.0520, -575.5786, 29.0, 196.1057), 
                coords =vector4(2762.2686, -575.2551, 41.0913, 326.5792)
            },
            {
                object_coords = vector4(2460.2578, -296.3556, 29.0, 359.9369), 
                coords =vector4(2463.4568, -298.0996, 40.9272, 129.6745)
            },
        },
        Object = "ship3", -- Prop
        Ped = "MP_U_M_M_FOS_SDSALOON_GAMBLER_01", -- Ped
        Blip = false, -- Blip
        BlipSprite = 874255393, -- Sprite
        BlipScale = 0.7, -- Scale
        Buy = {
            {
                item = "water", -- Item or Weapon Name 
                label = "Water", -- Label
                price = 1.0, -- Price
                type = "item" -- Item or Weapon
            },
            {
                item = "WEAPON_MELEE_KNIFE", -- Item or Weapon Name 
                label = "Knife", -- Label
                price = 7.0, -- Price
                type = "weapon" -- item or weapon
            },
        },
        Sell = {
            {
                item = "water", -- Item or Weapon Name 
                label = "Water", -- Label
                price = 1.5, -- Price
                percentage = 10.0, -- How much percentage you get from the blackmarket
                type = "item" -- Item or Weapon
            },
            {
                item = "WEAPON_MELEE_KNIFE", -- Item or Weapon Name 
                label = "Knife", -- Label
                price = 4.5, -- Price
                percentage = 25.0, -- How much percentage you get from the blackmarket
                type = "weapon" -- item or weapon
            },
        }
    }
}
:::
