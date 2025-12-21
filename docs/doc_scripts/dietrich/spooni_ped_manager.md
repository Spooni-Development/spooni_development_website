---
title: Ped Manager
description: Dynamic ambient and ped behavior system by Dietrich Development. Manage NPCs, spawn pedestrians, and control AI behavior.
---

# 👥 Dynamic Ambient & Ped Behavior System
Documentation relating to the spooni_ped_manager.

:::tabs
== INFO
<iframe width="560" height="315" src="https://dunb17ur4ymx4.cloudfront.net/packages/images/ac6a0c51219a6ecfc4e7920e5ed628ff35ed61d3.png" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

<a href="https://tebex.dietrich-development.com//package/6959754?basket=co6ej7-b01c46a21fd8a4008a42681be1a4986b5c630888" class="button-buy" target="_blank" rel="noopener noreferrer">Buy Now</a>
:::

## 1. Installation
spooni_ped_manager works Standalone.

To install spooni_ped_manager:
- Download the resource
  - On [Cfx.re Portal](https://portal.cfx.re/)
- Drag and drop the resource into your resources folder
  - `spooni_ped_manager`
- Add this ensure in your server.cfg
  ```
    ensure spooni_ped_manager
  ```
- Now you can configure and translate the script as you like
  - `config.lua`
- At the end, restart the server

If you have any problems, you can always open a ticket in the [Spooni Discord](https://discord.gg/spooni).

## 2. Usage
Bring life, logic, and immersion to your RedM server with CrowdSense AI - Dynamic Ambient & Ped Behavior System , the ultimate system for ambient ped control, relationship behavior, and location-based spawn management.
From hostile NPC towns at night to animal-free zones during events — this modular system gives you full control over how the world around your players behaves.

## 3. For developers

:::details Config.lua
```lua
Config = {}

Config.debug = false


-- horse models in this list that are set to true will no longer spawn in the world as wild horses
-- use this to block specific horses from beeing available in the world
-- Config.blackListPeds = {} to disable
Config.blackListPeds = {
    --"a_c_horse_morgan_bayroan",
}


-- Config.replacePeds = {} to disable
-- list of global replacements for peds no matter where they spawn
Config.replacePeds = {
    --['a_c_horse_tennesseewalker_blackrabicano'] = 'a_c_horse_mustang_grullodun',
    ['a_m_m_valtownfolk_02'] = 'a_f_m_sdobesewomen_01',
    ['a_m_m_vallaborer_01'] = 'a_f_m_sdobesewomen_01',
    ['a_m_m_valtownfolk_01'] = 'a_f_m_sdobesewomen_01',
}

Config.pedGroups = {
    valentine = {
        ['a_m_m_valtownfolk_02'] = 'a_f_m_sdobesewomen_01',
        ['a_m_m_vallaborer_01'] = 'a_f_m_sdobesewomen_01', 
        ['a_m_m_valtownfolk_01'] = 'a_f_m_sdobesewomen_01',   
    },
}


--specified horse groups for districts (spawns random horses from the specified group) - so you define which horse group should spawn at which location/district
Config.Districts = {
	[2025841068] = {name = "BayouNwa", zonePedGroup = nil},
	[822658194] = {name = "bigvalley",zonePedGroup = nil},
	[1308232528] = {name = "BluewaterMarsh", zonePedGroup = nil},
	[-108848014] = {name = "ChollaSprings",zonePedGroup = nil},
	[1835499550] = {name = "Cumberland",zonePedGroup = nil},
	[426773653] = {name = "DiezCoronas",zonePedGroup = nil}, --?
	[-2066240242] = {name = "GaptoothRidge",zonePedGroup = nil},
	[476637847] = {name = "greatPlains",zonePedGroup = nil},
	[-120156735] = {name = "GrizzliesEast",zonePedGroup = nil},
	[1645618177] = {name = "GrizzliesWest",zonePedGroup = nil},
	[-512529193] = {name = "GuarmaD",zonePedGroup = nil},
	[131399519] = {name = "Heartlands", zonePedGroup = Config.pedGroups.valentine},
	[892930832] = {name = "HennigansStead",zonePedGroup = nil},
	[-1319956120] = {name = "Perdido",zonePedGroup = nil},
	[1453836102] = {name = "PuntaOrgullo",zonePedGroup = nil},
	[-2145992129] = {name = "RioBravo",zonePedGroup = nil},
	[178647645] = {name = "roanoke", zonePedGroup = nil},
	[-864275692] = {name = "scarlettMeadows", zonePedGroup = nil},
	[1684533001] = {name = "TallTrees",zonePedGroup = nil},
}
```
:::