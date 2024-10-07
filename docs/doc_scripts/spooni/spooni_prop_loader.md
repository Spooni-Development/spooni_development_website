---
prev: false
next: false
aside: false
---

# 🧩 Prop Loader
Documentation relating to the [spooni_prop_loader](https://spooni-mapping.tebex.io/package/6284606).

___
<br>
<iframe width="560" height="315" src="https://www.youtube.com/embed/H83ZO_y2hdU?si=QoFrjKJwYYfuGScf" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

## 1. Installation
spooni_prop_loader works Standalone. 

To install spooni_prop_loader:
- Drag and drop the resource into your resources folder
  - `spooni_prop_loader`
- Add this ensure in your server.cfg
  ```
    ensure spooni_prop_loader
  ```
- Now you can configure the script as you like
  - `config.lua`
- At the end
  - Restart the server

If you have any problems, you can always open a ticket in the [Spooni Discord](https://discord.gg/spooni).

## 2. Usage
The script provides an efficient method for loading objects within a polyzone, which significantly improves performance. Unlike traditional methods, it is no longer necessary to use XMLs, which simplifies and speeds up the development process. 
However, it should be noted that doors do not work with this script and the placement of house props is not recommended. MLOs can be mapped without any problems.

## 3. For developers

:::details Config.lua
```lua
Config = {}

Config.DevMode = true -- only for testing, not for the live server

local glm = require "glm"

Config.Zones = {
    {
        name = "annesburg-apple-tree", -- name of the zone
        thickness = 20, -- height
        point = glm.polygon.new({
            vec3(3001.654541015625, 1399.3458251953125, 43.19),
            vec3(2998.39990234375, 1393.282958984375, 43.19),
            vec3(2991.999267578125, 1395.465576171875, 43.19),
            vec3(2994.195556640625, 1401.05322265625, 43.19),
        }),
        objects = {
            {
                model = `p_tree_apple_01`,
                coords = vec3(2996.754638, 1396.794067, 43.584380),
                rotation = vec3(0.000000,0.000000,0.000000),
            },
        },
    },
    {
        name = "sd-apple-tree", -- name of the zone
        thickness = 20, -- height
        point = glm.polygon.new({
            vec3(2388.52685546875, -1365.8651123046875, 44.60),
            vec3(2393.53857421875, -1358.3861083984375, 44.60),
            vec3(2400.209716796875, -1362.7315673828125, 44.60),
            vec3(2396.250732421875, -1370.1510009765625, 44.60),
        }),
        objects = {
            {
                model = `p_tree_apple_01`,
                coords = vec3(2395.054443359375, -1364.2969970703125, 45.21649169921875),
                rotation = vec3(0.000000,0.000000,0.000000),
            },
        },
    },
}
```
:::
