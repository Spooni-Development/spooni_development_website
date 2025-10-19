---
title: Zeppelin Script
description: SPOONI Zeppelin for RedM - Interactive airship transportation system with flight controls and passenger management. Aerial travel for VORP, RSG, RPX, and RedEM frameworks.
head:
  - - meta
    - name: keywords
      content: RedM zeppelin, airship script, aerial transport, RedM flight system, VORP zeppelin, RSG zeppelin, RedEM airship, RDR2 aircraft, RedM vehicle
  - - meta
    - property: og:image
      content: https://spooni.pages.dev/icons/logo.svg
  - - meta
    - property: og:url
      content: https://spooni.pages.dev/doc_scripts/spooni/spooni_zeppelin
---

# 🚁 Zeppelin
Documentation relating to the spooni_zeppelin.

:::tabs
== INFO
<iframe width="560" height="315" src="https://www.youtube.com/embed/D_GwOyjhw9c?si=Cta0JOYYaWa9fSX8" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

<a href="https://spooni-mapping.tebex.io/package/6835454" class="button-buy">🛒 Buy Now</a>
:::

## 1. Installation
spooni_zeppelin works only with VORP, RSG, RPX & RedEM.

To install spooni_zeppelin:
- Download the resource
  - On [Cfx.re Portal](https://portal.cfx.re/)
- Drag and drop the resource into your resources folder
  - `spooni_zeppelin`
- Add this ensure in your server.cfg
  ```
    ensure spooni_zeppelin
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

Config.Framework = 'Vorp'   -- Vorp, RSG, RPX, RedEM

Config.Keys = {
    Seat = { Text = 'Seat', TextPrice = 'Seat:~COLOR_GREEN~ %d$', NameHash = 'INPUT_INTERACT_OPTION1' },
    GetOut = { Text = 'Leave seat', NameHash = 'INPUT_INTERACT_OPTION1' },
}

Config.Timer = {
    Position = vector2(0.5,  0.9),  -- min 0.0, max 1.0
    Scale = 0.55,
    Color = { r = 255, g = 255, b = 255, alpha = 255 },
}

Config.Locations = {
    {   -- Saint Denis
        Price = 1,  -- number (Amount of money to sit) or false
        DistanceSpawn = 490,
        PassengerWaitingTime = 60, -- number (seconds)
        Destination1 = { Coords = vector3(-828.30, -1291.95, 52.58), Rotation = vector3(0.0, 0.0, 180.0) },
        Destination2 = { Coords = vector3(2620.38, -1340.42, 79.17), Rotation = vector3(0.0, 0.0, 130.0) },
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