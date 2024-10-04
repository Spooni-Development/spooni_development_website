---
prev: false
next: false
aside: false
---

# 🎥 dl_cutscenes
Documentation relating to the [dl_cutscenes](https://drshwaggins-scripts.tebex.io/package/5876605).

___
<br>
<iframe width="560" height="315" src="https://dunb17ur4ymx4.cloudfront.net/packages/images/2b0727aaa2fcb8c08eeedfabca283a9fa5266304.png" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>

## 1. Installation
dl_cutscenes works only with VORP & RedEM:RP. 

To install dl_cutscenes:
- Drag and drop the resource into your resources folder
  - `dl_cutscenes`
- Add this ensure in your server.cfg
  ```
    ensure dl_cutscenes
  ```
- Now you can configure and translate the script as you like
  - `config.lua`
- At the end
  - Restart the server

If you have any problems, you can always open a ticket in the [DrShwaggins Discord](https://discord.gg/K9H27J5VaS).

## 2. Usage
Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum.

## 3. For developers

:::details Config.lua
```lua
Config = {}
Config.Framework = "vorpcore" -- 'vorpcore' or 'redem'
Config.DevMode = false
Config.AllowEndCommand = true
Config.PlayerInvincibleInVideo = true
:::
