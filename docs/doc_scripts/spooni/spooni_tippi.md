---
prev: false
next: false
---

# 🏹 Tippi
Documentation relating to the spooni_tippi.

___
<br>
<iframe width="560" height="315" src="https://www.youtube.com/embed/link" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>

## 1. Installation
spooni_tippi works only with VORP. 

To install spooni_tippi:
- Drag and drop the resource into your resources folder
  - `spooni_tippi`
- Add this ensure in your server.cfg
  - `ensure spooni_tippi`
- Execute the SQL file
  - `tippi.sql`
- Now you can configure and translate the script as you like
  - `config.sql`
  - `translation.sql`
- At the end
  - Restart the server

If you have any problems, you can always open a ticket in the Spooni Discord.

## 2. Usage
Go to a configured tippi and open the menu with the prompt, here you can then claim the tippi with money or items.

## 3. For developers

:::details Config.lua
```lua
Config = {}

Config.Locale = "de"
Config.Webhook = "WEBHOOK LINK" -- Link

Config.Tippi = {
    [1] = {
        name = "Wapiti", -- Native Camp
        manage = {x = 166.0832, y = 2641.909, z = 306.52},
        price = 100.0,
        Blip = false,
        BlipSprite = -211556852, -- Sprite
        BlipScale = 0.7,
        rooms = {
            [1] = {
                name = "Tippi 1",
                hash = 3123768086,
                x = 466.4355,
                y = 2230.088,
                z = 247.37,
                price = {
                    cash = false,
                    cash_amount = 0.0,
                    items = {
                        {
                            item = "leather",
                            label = "Leder",
                            amount = 5
                        }
                    }
                },
                slots = 50,
                Interior = {x = 465.3668, y = 2229.245, z = 247.38},
                Inventory = {x = 464.5184, y = 2226.670, z = 247.33},
                Blip = false,
                BlipSprite = 249721687,
                BlipScale = 0.7
            },
            [2] = {
                name = "Tippi 2",
                hash = 3827646210,
                x = 469.1813,
                y = 2226.069,
                z = 247.22,
                price = {
                    cash = false,
                    cash_amount = 0.0,
                    items = {
                        {
                            item = "leather",
                            label = "Leder",
                            amount = 5
                        }
                    }
                },
                slots = 50,
                Interior = {x = 469.5184, y = 2224.584, z = 247.18},
                Inventory = {x = 469.5012, y = 2221.830, z = 247.10},
                Blip = false,
                BlipSprite = 249721687,
                BlipScale = 0.7
            },
            [3] = {
                name = "Tippi 3",
                hash = 1620457442,
                x = 482.1076,
                y = 2248.997,
                z = 248.17,
                price = {
                    cash = false,
                    cash_amount = 0.0,
                    items = {
                        {
                            item = "leather",
                            label = "Leder",
                            amount = 5
                        }
                    }
                },
                slots = 50,
                Interior = {x = 482.8182, y = 2250.448, z = 248.41},
                Inventory = {x = 483.1941, y = 2253.610, z = 248.43},
                Blip = false,
                BlipSprite = 249721687,
                BlipScale = 0.7
            },
            [4] = {
                name = "Tippi 4",
                hash = 2236449104,
                x = 461.2655,
                y = 2258.679,
                z = 249.11,
                price = {
                    cash = false,
                    cash_amount = 0.0,
                    items = {
                        {
                            item = "leather",
                            label = "Leder",
                            amount = 5
                        }
                    }
                },
                slots = 50,
                Interior = {x = 461.5562, y = 2260.218, z = 249.11},
                Inventory = {x = 462.9302, y = 2262.731, z = 249.21},
                Blip = false,
                BlipSprite = 249721687,
                BlipScale = 0.7
            },
            [5] = {
                name = "Tippi 5",
                hash = 4074691701,
                x = 448.8528,
                y = 2251.810,
                z = 249.10,
                price = {
                    cash = false,
                    cash_amount = 0.0,
                    items = {
                        {
                            item = "leather",
                            label = "Leder",
                            amount = 5
                        }
                    }
                },
                slots = 50,
                Interior = {x = 447.5226, y = 2252.831, z = 249.38},
                Inventory = {x = 445.1626, y = 2254.332, z = 249.71},
                Blip = false,
                BlipSprite = 249721687,
                BlipScale = 0.7
            }
        }
    }
}
:::
