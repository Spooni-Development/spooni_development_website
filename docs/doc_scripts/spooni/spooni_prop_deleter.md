---
title: Prop Deleter
description: Remove unwanted props and objects from your server. Standalone tool for cleaning up and customizing your world.
---

# 🗑️ Prop Deleter
Documentation relating to the spooni_prop_deleter.

:::tabs
== INFO
<iframe width="560" height="315" src="https://www.youtube.com/embed/" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

<a href="https://spooni-mapping.tebex.io/package/6564260" class="button-buy" target="_blank" rel="noopener noreferrer">Buy Now</a>
:::

## 1. Installation
spooni_prop_deleter works Standalone. 

To install spooni_prop_deleter:
- Download the resource
  - On [Cfx.re Portal](https://portal.cfx.re/)
- Drag and drop the resource into your resources folder
  - `spooni_prop_deleter`
- Add this ensure in your server.cfg
  ```
    ensure spooni_prop_deleter
  ```
- Now you can configure the script as you like
  - `config.lua`
- At the end, restart the server

If you have any problems, you can always open a ticket in the [Spooni Discord](https://discord.gg/spooni).

## 2. Usage
The script provides an efficient method for delete objects within a polyzone, which significantly improves performance. Unlike traditional methods, it is no longer necessary to use XMLs, which simplifies and speeds up the development process. 

## 3. For developers

:::details Config.lua
```lua
Config = {}

Config.DevMode = true

local glm = require "glm"

Config.Zones = {
    {
        name = "Test Zone 1", -- name of the zone
        thickness = 20, -- height
        point = glm.polygon.new(
            {
                vec3(2917.712158203125, 1276.58837890625, 43.62795257568359),
                vec3(2906.699951171875, 1244.9959716796875, 43.94738006591797),
                vec3(2927.9658203125, 1229.2623291015625, 41.55755996704101),
                vec3(2957.04345703125, 1264.7918701171875, 42.81037139892578),
            }
        ),
        outerZone = nil, -- defines the outer zone. if nil, then it is generated automatically.
        outerZoneDistance = 50.0, -- size of the distance from the outer zone
        deleteAll = true, -- deletes all objects in the zone. 
        objects = { -- objects in the list will be deleted.
            {
                model = `p_tree_apple_01`,
                coords = vec3(2996.754638, 1396.794067, 43.584380),
                distance = 1.0
            },
        },
    },
    {
        name = "Test Zone 2", -- name of the zone
        thickness = 20, -- height
        point = glm.polygon.new(
            {
                vec3(3001.654541015625, 1399.3458251953125, 43.19),
                vec3(2998.39990234375, 1393.282958984375, 43.19),
                vec3(2991.999267578125, 1395.465576171875, 43.19),
                vec3(2994.195556640625, 1401.05322265625, 43.19),
            }
        ),
        outerZone = nil, -- defines the outer zone. if nil, then it is generated automatically.
        outerZoneDistance = 50.0, -- size of the distance from the outer zone
        deleteAll = true, -- deletes all objects in the zone. 
        objects = { -- objects in the list will be deleted.
            {
                model = `p_tree_apple_01`,
                coords = vec3(2996.754638, 1396.794067, 43.584380),
                distance = 1.0
            },
        },
    },
}
```
:::
