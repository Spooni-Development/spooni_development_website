---
prev: false
next: false
aside: false
---

# 🧩 Prop Loader
Documentation relating to the [spooni_prop_loader](https://spooni-mapping.tebex.io/).

___
<br>
<iframe width="560" height="315" src="https://www.youtube.com/embed/" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>

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
Provides an efficient method for loading objects within a polyzone, which significantly improves performance. Unlike traditional methods, it is no longer necessary to use XML's, which simplifies and speeds up the development process. However, it should be noted that doors do not work with this script and the placement of house props is not recommended.

## 3. For developers

:::details Config.lua
```lua
Config = {}

local glm = require "glm"

Config.Zones = {
    {
        name = "test-house16", -- name of the zone
        thickness = 30, -- height
        point = glm.polygon.new(
            {
                vec3(-1103.442138671875, -1036.9124755859375, 65.7997055053711),
                vec3(-1094.2259521484375, -1053.654296875, 65.49501037597656),
                vec3(-1115.611328125, -1063.375732421875, 66.67459869384766),
                vec3(-1124.4923095703125, -1039.748779296875, 66.6490707397461),
            }
        ),
        objects = {
            {
                model = `house16`,
                coords = vec3(-1107.861816,-1051.015869,69.010002),
                rotation = vec3(0.000000,0.000000,25.323042),
            },
        },
    },
}
```
:::
