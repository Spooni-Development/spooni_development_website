---
prev: false
next: false
---

# 🎄 Blackmarket
Documentation relating to the spooni_xmas.

___
<br>
<iframe width="560" height="315" src="https://www.youtube.com/embed/link" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>

## 1. Installation
spooni_xmas works only with VORP.  

To install spooni_xmas:
- Drag and drop the resource into your resources folder
  - `spooni_xmas`
- Add this ensure in your server.cfg
  - `ensure spooni_xmas`
- Execute the SQL file
  - `xmas.sql`
- Now you can configure and translate the script as you like
  - `config.lua`
  - `translation.lua`
- At the end
  - Restart the server

If you have any problems, you can always open a ticket in the [Spooni Discord](https://discord.gg/spooni).

## 2. Usage
Go to a configured calendar and open it with the prompt, there you can complete the tasks daily.

## 3. For developers

:::details Config.lua
```lua
Config = {}

Config.Locale = "de" -- de, en, fr
Config.Webhook = "WEBHOOK LINK" -- Link

Config.Calendar_Location = {
        npc = false,
        npc_hash = "cs_creepyoldlady", -- npc model
        coords = vector4(2704.6113, -1407.2346, 46.0014, 43.7270), -- coords of the npc, blip and prompt
        blip = false, -- true or false
        blip_name = "Adventskalender", -- name
        blip_sprite = 1904459580, -- hash
        blip_scale = 0.7, -- scale
        item = "treasuremap"
}

Config.Quests = {

        -- Treasure Hunt

        [1] = {
            type = "treasurehunt", -- type
            image ="1.png", -- map image
			coords = vector4(-357.299, 301.202, 91.698, 173.172), -- coords of the prop
            blip = false, -- true or false
            blip_radius = 75.0, -- radius
			object = "p_trunk01x", -- prop
			rewards = {
				cash = math.random(50),
				gold = math.random(5),
				items = {
					{ item = "apple", amount = math.random(2), label = "Apple", type = "item" },
					{ item = "WEAPON_REVOLVER_DOUBLEACTION", amount=1, label = "Double Action Revolver", type = "weapon" }
				},
                random_items = {
                    [1] = {
                        { item = "acid",amount=1, label = "Acid", type = "item" },
                        { item = "WEAPON_MELEE_KNIFE", amount = 1, label = "Knife", type = "weapon" }
                    }
                },
			}
        },

        [2] = {
            type = "treasurehunt", -- type
            image ="2.png", -- map image
			coords = vector4(123.200, 1808.629, 198.001, -21.047), -- coords of the prop
            blip = false, -- true or false
            blip_radius = 75.0, -- radius
			object = "p_trunk01x", -- prop
			rewards = {
				cash = math.random(50),
				gold = math.random(5),
				items = {
					{ item = "apple", amount = math.random(2), label = "Apple", type = "item" },
					{ item = "WEAPON_REVOLVER_DOUBLEACTION", amount=1, label = "Double Action Revolver", type = "weapon" }
				},
                random_items = {
                    [1] = {
                        { item = "acid",amount=1, label = "Acid", type = "item" },
                        { item = "WEAPON_MELEE_KNIFE", amount = 1, label = "Knife", type = "weapon" }
                    }
                },
			}
        },

        [3] = {
            type = "treasurehunt", -- type
            image ="3.png", -- map image
			coords = vector4(1618.902, 1488.924, 145.376, -62.051), -- coords of the prop
            blip = false, -- true or false
            blip_radius = 75.0, -- radius
			object = "p_trunk01x", -- prop
			rewards = {
				cash = math.random(50),
				gold = math.random(5),
				items = {
					{ item = "apple", amount = math.random(2), label = "Apple", type = "item" },
					{ item = "WEAPON_REVOLVER_DOUBLEACTION", amount=1, label = "Double Action Revolver", type = "weapon" }
				},
                random_items = {
                    [1] = {
                        { item = "acid",amount=1, label = "Acid", type = "item" },
                        { item = "WEAPON_MELEE_KNIFE", amount = 1, label = "Knife", type = "weapon" }
                    }
                },
			}
        },

        [4] = {
            type = "treasurehunt", -- type
            image ="4.png", -- map image
			coords = vector4(-1044.752, 421.4896, 46.465, -58.054), -- coords of the prop
            blip = false, -- true or false
            blip_radius = 75.0, -- radius
			object = "p_trunk01x", -- prop
			rewards = {
				cash = math.random(50),
				gold = math.random(5),
				items = {
					{ item = "apple", amount = math.random(2), label = "Apple", type = "item" },
					{ item = "WEAPON_REVOLVER_DOUBLEACTION", amount=1, label = "Double Action Revolver", type = "weapon" }
				},
                random_items = {
                    [1] = {
                        { item = "acid",amount=1, label = "Acid", type = "item" },
                        { item = "WEAPON_MELEE_KNIFE", amount = 1, label = "Knife", type = "weapon" }
                    }
                },
			}
        },

        [5] = {
            type = "treasurehunt", -- type
            image ="5.png", -- map image
			coords = vector4(-963.035, 1633.912, 246.182, 31.766), -- coords of the prop
            blip = false, -- true or false
            blip_radius = 75.0, -- radius
			object = "p_trunk01x", -- prop
			rewards = {
				cash = math.random(50),
				gold = math.random(5),
				items = {
					{ item = "apple", amount = math.random(2), label = "Apple", type = "item" },
					{ item = "WEAPON_REVOLVER_DOUBLEACTION", amount=1, label = "Double Action Revolver", type = "weapon" }
				},
                random_items = {
                    [1] = {
                        { item = "acid",amount=1, label = "Acid", type = "item" },
                        { item = "WEAPON_MELEE_KNIFE", amount = 1, label = "Knife", type = "weapon" }
                    }
                },
			}
        },

        [6] = {
            type = "treasurehunt", -- type
            image ="6.png", -- map image
			coords = vector4(418.864, 1638.878, 193.714, -157.767), -- coords of the prop
            blip = false, -- true or false
            blip_radius = 75.0, -- radius
			object = "p_trunk01x", -- prop
			rewards = {
				cash = math.random(50),
				gold = math.random(5),
				items = {
					{ item = "apple", amount = math.random(2), label = "Apple", type = "item" },
					{ item = "WEAPON_REVOLVER_DOUBLEACTION", amount=1, label = "Double Action Revolver", type = "weapon" }
				},
                random_items = {
                    [1] = {
                        { item = "acid",amount=1, label = "Acid", type = "item" },
                        { item = "WEAPON_MELEE_KNIFE", amount = 1, label = "Knife", type = "weapon" }
                    }
                },
			}
        },

        [7] = {
            type = "treasurehunt", -- type
            image ="7.png", -- map image
			coords = vector4(1100.513, -647.917, 96.765, 140.615), -- coords of the prop
            blip = false, -- true or false
            blip_radius = 75.0, -- radius
			object = "p_trunk01x", -- prop
			rewards = {
				cash = math.random(50),
				gold = math.random(5),
				items = {
					{ item = "apple", amount = math.random(2), label = "Apple", type = "item" },
					{ item = "WEAPON_REVOLVER_DOUBLEACTION", amount=1, label = "Double Action Revolver", type = "weapon" }
				},
                random_items = {
                    [1] = {
                        { item = "acid",amount=1, label = "Acid", type = "item" },
                        { item = "WEAPON_MELEE_KNIFE", amount = 1, label = "Knife", type = "weapon" }
                    }
                },
			}
        },

        [8] = {
            type = "treasurehunt", -- type
            image ="8.png", -- map image
			coords = vector4(2665.721, 424.207, 85.033, -96.052), -- coords of the prop
            blip = false, -- true or false
            blip_radius = 75.0, -- radius
			object = "p_trunk01x", -- prop
			rewards = {
				cash = math.random(50),
				gold = math.random(5),
				items = {
					{ item = "apple", amount = math.random(2), label = "Apple", type = "item" },
					{ item = "WEAPON_REVOLVER_DOUBLEACTION", amount=1, label = "Double Action Revolver", type = "weapon" }
				},
                random_items = {
                    [1] = {
                        { item = "acid",amount=1, label = "Acid", type = "item" },
                        { item = "WEAPON_MELEE_KNIFE", amount = 1, label = "Knife", type = "weapon" }
                    }
                },
			}
        },
        
        [9] = {
            type = "treasurehunt", -- type
            image ="9.png", -- map image
			coords = vector4(2318.378, 1049.499, 70.018, 124.327), -- coords of the prop
            blip = false, -- true or false
            blip_radius = 75.0, -- radius
			object = "p_trunk01x", -- prop
			rewards = {
				cash = math.random(50),
				gold = math.random(5),
				items = {
					{ item = "apple", amount = math.random(2), label = "Apple", type = "item" },
					{ item = "WEAPON_REVOLVER_DOUBLEACTION", amount=1, label = "Double Action Revolver", type = "weapon" }
				},
                random_items = {
                    [1] = {
                        { item = "acid",amount=1, label = "Acid", type = "item" },
                        { item = "WEAPON_MELEE_KNIFE", amount = 1, label = "Knife", type = "weapon" }
                    }
                },
			}
        },

        [10] = {
            type = "treasurehunt", -- type
            image ="10.png", -- map image
			coords = vector4(2311.494, -1520.245, 41.090, 177.391), -- coords of the prop
            blip = false, -- true or false
            blip_radius = 75.0, -- radius
			object = "p_trunk01x", -- prop
			rewards = {
				cash = math.random(50),
				gold = math.random(5),
				items = {
					{ item = "apple", amount = math.random(2), label = "Apple", type = "item" },
					{ item = "WEAPON_REVOLVER_DOUBLEACTION", amount=1, label = "Double Action Revolver", type = "weapon" }
				},
                random_items = {
                    [1] = {
                        { item = "acid",amount=1, label = "Acid", type = "item" },
                        { item = "WEAPON_MELEE_KNIFE", amount = 1, label = "Knife", type = "weapon" }
                    }
                },
			}
        },

        -- Snowball

        [11] = { -- House near Braithwaite Manor
            type = "snowball", -- type
            blip = true, -- true or false
            blip_radius = 50.0, -- radius
            coords = vector3(1331.499, -2300.16, 48.398), -- coords of the blip
            locations = {
                { 
                    throw_coords = vector4(1331.499, -2300.16, 48.398, 21.04),
                    npc_hash = "cs_creepyoldlady", 
                    npc_coords = vector4(1326.865, -2287.29, 48.367, 40.49),
                    npc_scenario = "PROP_HUMAN_REPAIR_WAGON_WHEEL_ON_LARGE",
                    -- npc_scenario = "PROP_HUMAN_REPAIR_WAGON_WHEEL_ON_LARGE_MALE_A",
                },
            },
			rewards = {
				cash = math.random(50),
				gold = math.random(5),
				items = {
					{ item = "apple", amount = math.random(2), label = "Apple", type = "item" },
					{ item = "WEAPON_REVOLVER_DOUBLEACTION", amount = 1, label = "Double Action Revolver", type = "weapon" }
				},
                random_items = {
                    [1] = {
                        {item = "acid", amount = 1, label = "Acid", type = "item" },
                        {item = "WEAPON_MELEE_KNIFE", amount = 1, label = "Knife", type = "weapon" }
                    }
                },
			}
        },

        [12] = { -- White House St. Denis
            type = "snowball", -- type
            blip = true, -- true or false
            blip_radius = 50.0, -- radius
            coords = vector3(2415.063, -1039.17, 43.982), -- coords of the blip
            locations = {
                { 
                    throw_coords = vector4(2415.063, -1039.17, 43.982, 63.39),
                    npc_hash = "cs_creepyoldlady", 
                    npc_coords = vector4(2406.584, -1033.38, 42.989, 136.26),
                    npc_scenario = "PROP_HUMAN_REPAIR_WAGON_WHEEL_ON_LARGE",
                    -- npc_scenario = "PROP_HUMAN_REPAIR_WAGON_WHEEL_ON_LARGE_MALE_A",
                },
            },
			rewards = {
				cash = math.random(50),
				gold = math.random(5),
				items = {
					{ item = "apple", amount = math.random(2), label = "Apple", type = "item" },
					{ item = "WEAPON_REVOLVER_DOUBLEACTION", amount = 1, label = "Double Action Revolver", type = "weapon" }
				},
                random_items = {
                    [1] = {
                        {item = "acid", amount = 1, label = "Acid", type = "item" },
                        {item = "WEAPON_MELEE_KNIFE", amount = 1, label = "Knife", type = "weapon" }
                    }
                },
			}
        },

        
        [13] = { -- Emerald Ranch
            type = "snowball", -- type
            blip = true, -- true or false
            blip_radius = 50.0, -- radius
            coords = vector3(1448.119, 331.4157, 89.145), -- coords of the blip
            locations = {
                { 
                    throw_coords = vector4(1448.119, 331.4157, 89.145, 128.84),
                    npc_hash = "cs_creepyoldlady", 
                    npc_coords = vector4(1444.626, 328.0546, 88.018, 93.1),
                    npc_scenario = "PROP_HUMAN_REPAIR_WAGON_WHEEL_ON_LARGE",
                    -- npc_scenario = "PROP_HUMAN_REPAIR_WAGON_WHEEL_ON_LARGE_MALE_A",
                },
            },
			rewards = {
				cash = math.random(50),
				gold = math.random(5),
				items = {
					{ item = "apple", amount = math.random(2), label = "Apple", type = "item" },
					{ item = "WEAPON_REVOLVER_DOUBLEACTION", amount = 1, label = "Double Action Revolver", type = "weapon" }
				},
                random_items = {
                    [1] = {
                        {item = "acid", amount = 1, label = "Acid", type = "item" },
                        {item = "WEAPON_MELEE_KNIFE", amount = 1, label = "Knife", type = "weapon" }
                    }
                },
			}
        },

        [14] = { -- Butcher Creek
            type = "snowball", -- type
            blip = true, -- true or false
            blip_radius = 50.0, -- radius
            coords = vector3(2541.739, 786.5559, 75.145), -- coords of the blip
            locations = {
                { 
                    throw_coords = vector4(2541.739, 786.5559, 75.145, 99.06),
                    npc_hash = "cs_creepyoldlady", 
                    npc_coords = vector4(2534.222, 784.8579, 74.215, 25.21),
                    npc_scenario = "PROP_HUMAN_REPAIR_WAGON_WHEEL_ON_LARGE",
                    -- npc_scenario = "PROP_HUMAN_REPAIR_WAGON_WHEEL_ON_LARGE_MALE_A",
                },
            },
			rewards = {
				cash = math.random(50),
				gold = math.random(5),
				items = {
					{ item = "apple", amount = math.random(2), label = "Apple", type = "item" },
					{ item = "WEAPON_REVOLVER_DOUBLEACTION", amount = 1, label = "Double Action Revolver", type = "weapon" }
				},
                random_items = {
                    [1] = {
                        {item = "acid", amount = 1, label = "Acid", type = "item" },
                        {item = "WEAPON_MELEE_KNIFE", amount = 1, label = "Knife", type = "weapon" }
                    }
                },
			}
        },

        [15] = { -- Flatneck Station
            type = "snowball", -- type
            blip = true, -- true or false
            blip_radius = 50.0, -- radius
            coords = vector3(-327.894, -351.872, 88.035), -- coords of the blip
            locations = {
                { 
                    throw_coords = vector4(-327.894, -351.872, 88.035, 100.18),
                    npc_hash = "cs_creepyoldlady", 
                    npc_coords = vector4(-333.146, -351.374, 87.058, 154.38),
                    npc_scenario = "PROP_HUMAN_REPAIR_WAGON_WHEEL_ON_LARGE",
                    -- npc_scenario = "PROP_HUMAN_REPAIR_WAGON_WHEEL_ON_LARGE_MALE_A",
                },
            },
			rewards = {
				cash = math.random(50),
				gold = math.random(5),
				items = {
					{ item = "apple", amount = math.random(2), label = "Apple", type = "item" },
					{ item = "WEAPON_REVOLVER_DOUBLEACTION", amount = 1, label = "Double Action Revolver", type = "weapon" }
				},
                random_items = {
                    [1] = {
                        {item = "acid", amount = 1, label = "Acid", type = "item" },
                        {item = "WEAPON_MELEE_KNIFE", amount = 1, label = "Knife", type = "weapon" }
                    }
                },
			}
        },
    }
:::
