---
prev: false
next: false
---

# 🌱 VegMod
Documentation relating to the spooni_vegmod.

___
<br>
<iframe width="560" height="315" src="https://www.youtube.com/embed/link" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>

## 1. Installation
spooni_vegmod works Standalone. 

- Download the resource
  - On [Github](https://github.com/Emotion06/spooni_vegmod)
- Ensure that all requirements are installed
  - [uiprompt](https://github.com/kibook/redm-uiprompt)
- Drag and drop the resource into your resources folder
  - `spooni_vegmod`
- Add this ensure in your server.cfg
  - `ensure spooni_vegmod`
- At the end
  - Restart the server

If you have any problems, you can always open a ticket in the [Spooni Discord](https://discord.gg/spooni).

## 2. Usage
Go to one of the configured black markets. There you can open the menu and buy and sell items and weapons, the more you sell, the more share you get from the black market until it possibly belongs to you and then only you can buy.

## 3. For developers

:::details Config.lua
```lua
Config = {}

Config.Locale = "de"
Config.Webhook = "WEBHOOK LINK" -- Link
:::
