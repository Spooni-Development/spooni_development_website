---
title: Attractions
description: Interactive carousel and swing ride entertainment. Standalone scripts with configurable animations and passenger management.
---

# 🎠 Attractions
Documentation relating to the spooni_carrousel & spooni_swingride.

:::tabs
== INFO
<iframe width="560" height="315" src="https://www.youtube.com/embed/x8OSOjHI5rE?si=FI52FjECo-7ihbQg" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

<a href="https://spooni-mapping.tebex.io/package/6747906" class="button-buy" target="_blank" rel="noopener noreferrer">Buy Now</a>
:::

## 1. Installation <Badge type="warning" text="Artifacts version 12735 or higher"/>
spooni_carrousel & spooni_swingride works Standalone.

To install spooni_carrousel & spooni_swingride:
- Download the resource
  - On [Cfx.re Portal](https://portal.cfx.re/)
- Drag and drop the resource into your resources folder
  - `spooni_carrousel`
  - `spooni_swingride`
- Add this ensure in your server.cfg
  ```
    ensure spooni_carrousel
    ensure spooni_swingride
  ```
- Now you can configure and translate the script as you like
  - `config.lua`
- At the end, restart the server

If you have any problems, you can always open a ticket in the [Spooni Discord](https://discord.gg/spooni).

## 2. Usage
With the Carousel & Swing Ride, players can enjoy a fun ride, whether on elegantly spinning horses or soaring through the air on a swing

## 3. For developers

:::details Carrousel Config.lua
```lua
Config = {}

Config.Keys = {
    Seat = { Text = 'Seat', NameHash = 'INPUT_INTERACT_OPTION1' },
    GetOut = { Text = 'Leave seat', NameHash = 'INPUT_INTERACT_OPTION1' },
}

Config.Locations = {
    {   -- Saint Denis
        DistanceSpawn = 350,
        Coords = vector3(2423.419922, -1333.91003, 47.63100),
        Rotation = vector3(0.0, 0.0, 47.625),
    },
    -- {   -- Example
    --     DistanceSpawn = 490,
    --     Coords = vector3(0.0, 0.0, 0.0),
    --     Rotation = vector3(0.0, 0.0, 0.0),
    -- },
}

Config.SeatFunctions = {
    Start = function()
        ExecuteCommand('hidehud')
    end,

    Stop = function()
        ExecuteCommand('hidehud')
    end,
}
```
:::

:::details Swingride Config.lua
```lua
Config = {}

Config.Keys = {
    Seat = { Text = 'Seat', NameHash = 'INPUT_INTERACT_OPTION1' },
    GetOut = { Text = 'Leave seat', NameHash = 'INPUT_INTERACT_OPTION1' },
}

Config.Locations = {
    {   -- Saint Denis
        DistanceSpawn = 350,
        Coords = vector3(2384.219971, -1388.780029, 49.349998),
        Rotation = vector3(0.8, -1.8, 157.00),
    },
    -- {   -- Example
    --     DistanceSpawn = 490,
    --     Coords = vector3(0.0, 0.0, 0.0),
    --     Rotation = vector3(0.0, 0.0, 0.0),
    -- },
}

Config.SeatFunctions = {
    Start = function()
        ExecuteCommand('hidehud')
    end,

    Stop = function()
        ExecuteCommand('hidehud')
    end,
}
```
:::