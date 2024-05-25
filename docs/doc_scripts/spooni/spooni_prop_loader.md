---
prev: false
next: false
aside: false
---

# 🧩 Prop Loader
Documentation relating to the [spooni_prop_loader](https://spooni-mapping.tebex.io/).

___
<br>
<iframe width="560" height="315" src="https://www.youtube.com/embed/link" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>

## 1. Installation
spooni_prop_loader works Standalone. 

To install spooni_prop_loader:
- Drag and drop the resource into your resources folder
  - `spooni_prop_loader`
- Add this ensure in your server.cfg
  ```
    ensure spooni_prop_loader
  ```
- Now you can configure and translate the script as you like
  - `config.lua`
- At the end
  - Restart the server

If you have any problems, you can always open a ticket in the [Spooni Discord](https://discord.gg/spooni).

## 2. Usage
Allows efficient loading of objects in a polyzone through optimization techniques, which improves resource utilization and increases performance.

## 3. For developers

:::details Config.lua
```lua
Config = {}

local glm = require "glm"

Config.Zones = {
    {
        name = "sd-church1", -- name of the zone
        thickness = 30, -- height
        point = glm.polygon.new(
            {
                vec3(-1333.0216064453125, -1142.6717529296875, 60.76),
                vec3(-1319.1705322265625, -1062.4726562500000, 60.76),
                vec3(-1270.1605224609375, -1048.8553466796875, 60.76),
                vec3(-1260.6340332031250, -1113.5958251953125, 60.76),
            }
        ),
        objects = {
            {
                model = `house16`,
                coords = vec3(-1310.764771, -1112.900757, 76.219727),
                rotation = vec3(0.000000, 0.000000, 22.433189),
            },
        },
    },
}
```
:::
