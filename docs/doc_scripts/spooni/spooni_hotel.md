---
prev: false
next: false
aside: false
---

# 🏨 Hotel
Documentation relating to the spooni_hotel.

___
<br>
<iframe width="560" height="315" src="https://www.youtube.com/embed/link" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>

## 1. Installation
spooni_hotel works only with VORP. 

To install spooni_hotel:
- Drag and drop the resource into your resources folder
  - `spooni_hotel`
- Add this ensure in your server.cfg
  - `ensure spooni_hotel`
- Execute the SQL file
  - `hotel.sql`
- Now you can configure and translate the script as you like
  - `config.lua`
  - `translation.lua`
- At the end
  - Restart the server

If you have any problems, you can always open a ticket in the [Spooni Discord](https://discord.gg/spooni).

## 2. Usage
Go to a configured room and open the menu with the prompt. You can then rent your room there, with money.

## 3. For developers

:::details Config.lua
```lua
Config = {}

Config.Locale = "de" -- de, en, fr
Config.Webhook = "WEBHOOK LINK" -- Link

Config.Hotels = {
    [1] = {
        name = "Valentine", -- Hotel Name
        manage = {x = -325.824, y = 772.9330, z = 117.43}, -- Hotel location
        price = 100.0, -- Hotel Price
        Blip = true, -- true or false
        BlipSprite = -211556852, -- Sprite
        BlipScale = 0.7, -- Scale
        rooms = {
            [1] = {
                name = "Room 1A", -- Display Name
                hash = 3693364451, -- Doorhash
                x = -322.118, y = 765.5968, z = 117.44, -- Enter location
                price = 2.00, -- Rent Price
                slots = 100, -- Inventory Slots
                Interior = {x = -323.143, y = 765.4176, z = 117.43}, -- Exit location
                Inventory = {x = -325.154, y = 766.4559, z = 117.43}, -- Inventory location
                Blip = false, -- true or false
                BlipSprite = 249721687, -- Sprite
                BlipScale = 0.7 -- Scale
            },
            [2] = {
                name = "Room 1B", -- Display Name
                hash = 183181940, -- Doorhash
                x = -321.428, y = 762.0949, z = 117.45, -- Enter location
                price = 2.00, -- Rent Price
                slots = 100, -- Inventory Slots
                Interior = {x = -322.453, y = 761.9136, z = 117.43}, -- Exit location
                Inventory = {x = -323.497, y = 759.5999, z = 117.43}, -- Inventory location
                Blip = false, -- true or false
                BlipSprite = 249721687, -- Sprite
                BlipScale = 0.7 -- Scale
            },
            [3] = {
                name = "Room 2A", -- Display Name
                hash = 3765902977, -- Doorhash
                x = -322.365, y = 767.4810, z = 121.63, -- Enter location
                price = 2.00, -- Rent Price
                slots = 100, -- Inventory Slots
                Interior = {x = -323.390, y = 767.3016, z = 121.63}, -- Exit location
                Inventory = {x = -327.361, y = 764.3541, z = 121.63}, -- Inventory location
                Blip = false, -- true or false
                BlipSprite = 249721687, -- Sprite
                BlipScale = 0.7 -- Scale
            },
            [4] = {
                name = "Room 2B", -- Display Name
                hash = 238680582, -- Doorhash
                x = -321.440, y = 762.0906, z = 121.63, -- Enter location
                price = 2.00, -- Rent Price
                slots = 100, -- Inventory Slots
                Interior = {x = -322.464, y = 761.9081, z = 121.63}, -- Exit location
                Inventory = {x = -326.472, y = 759.2954, z = 121.63}, -- Inventory location
                Blip = false, -- true or false
                BlipSprite = 249721687, -- Sprite
                BlipScale = 0.7 -- Scale
            },
            [5] = {
                name = "Room 2C", -- Display Name
                hash = 3049177115, -- Doorhash
                x = -323.538, y = 774.0122, z = 121.63, -- Enter location
                price = 2.00, -- Rent Price
                slots = 100, -- Inventory Slots
                Interior = {x = -324.563, y = 773.8328, z = 121.63}, -- Exit location
                Inventory = {x = -328.231, y = 772.6199, z = 121.63}, -- Inventory location
                Blip = false, -- true or false
                BlipSprite = 249721687, -- Sprite
                BlipScale = 0.7 -- Scale
            },

        }
    }
}
:::
