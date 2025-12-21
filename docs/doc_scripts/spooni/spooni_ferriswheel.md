---
title: Ferris Wheel
description: Interactive Ferris wheel with 4-player gondolas and scenic views. Standalone entertainment script.
---

# 🎡 Ferris Wheel
Documentation relating to the spooni_ferriswheel.

:::tabs
== INFO
<iframe width="560" height="315" src="https://www.youtube.com/embed/HOwISUYeIlM?si=R7PwSeTC8gzfPDqb" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

<a href="https://spooni-mapping.tebex.io/package/6626997" class="button-buy" target="_blank" rel="noopener noreferrer">Buy Now</a>
:::

## 1. Installation <Badge type="warning" text="Artifacts version 12735 or higher"/>
spooni_ferriswheel works Standalone. 

To install spooni_ferriswheel:
- Download the resource
  - On [Github](https://github.com/Spooni-Development/spooni_ferriswheel)
- Drag and drop the resource into your resources folder
  - `spooni_ferriswheel`
- Add this ensure in your server.cfg
  ```
    ensure spooni_ferriswheel
  ```
- Now you can configure and translate the script as you like
  - `config.lua`
- At the end, restart the server

If you have any problems, you can always open a ticket in the [Spooni Discord](https://discord.gg/spooni).

## 2. Usage
With the Ferris Wheel, up to 4 players per gondola can ride a Ferris wheel and enjoy the view. 

## 3. For developers

:::details Config.lua
```lua
Config = {}

Config.Keys = {
    Seat1 = { Text = 'Seat 1', NameHash = 'INPUT_EMOTE_TWIRL_GUN_VAR_B' },
    Seat2 = { Text = 'Seat 2', NameHash = 'INPUT_EMOTE_TWIRL_GUN_VAR_A' },
    Seat3 = { Text = 'Seat 3', NameHash = 'INPUT_EMOTE_TWIRL_GUN_VAR_D' },
    Seat4 = { Text = 'Seat 4', NameHash = 'INPUT_EMOTE_TWIRL_GUN_VAR_C' },
    GetOut = { Text = 'Leave seat', NameHash = 'INPUT_INTERACT_OPTION1' },
}

Config.Locations = {
    {   -- Saint Denis
        DistanceSpawn = 490,
        Coords = vector3(2393.718506, -1357.584839, 64.577484),
        Rotation = vector3(0.0, 0.0, 59.00),
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