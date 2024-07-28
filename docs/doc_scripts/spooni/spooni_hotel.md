---
prev: false
next: false
aside: false
---

# 🏨 Hotel <Badge type="danger" text="IN WORK"/>
Documentation relating to the [spooni_hotel](https://spooni-mapping.tebex.io/).

___
<br>
<iframe width="560" height="315" src="https://www.youtube.com/embed/" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>

## 1. Installation
spooni_hotel works only with VORP, RSG & RPX. 

To install spooni_hotel:
- Drag and drop the resource into your resources folder
  - `spooni_hotel`
- Add this ensure in your server.cfg
  ```
    ensure spooni_hotel
  ```
- Execute the SQL file
  - `hotel.sql`
- Now you can configure and translate the script as you like
  - `config.lua`
  - `translation.lua`
- At the end
  - Restart the server

If you have any problems, you can always open a ticket in the [Spooni Discord](https://discord.gg/spooni).

## 2. Usage
With this script, you can create hotels where guests can rent rooms. The script allows you to name rooms, set prices and determine the rental period. You can also create storage and checkroom areas. It offers an easy way to manage and customize your hotel.

## 3. For developers

:::details Config.lua
```lua
:::
