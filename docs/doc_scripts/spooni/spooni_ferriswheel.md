# 🎡 Ferris Wheel
Documentation relating to the spooni_ferriswheel.

:::tabs
== PREVIEW
<iframe width="560" height="315" src="https://www.youtube.com/embed/" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
== BUY
[Buy the script](https://spooni-mapping.tebex.io/package/)
:::

## 1. Installation
spooni_ferriswheel works Standalone. 

To install spooni_ferriswheel:
- Download the resource
  - On [Github](https://github.com/Spooni-Development/spooni_ferriswheel)
- Drag and drop the resource into your resources folder
  - `spooni_ferriswheel`
- Add this ensure in your server.cfg
  ```
    ensure spooni_ferriswheel
  ```
- Now you can configure and translate the script as you like
  - `config.lua`
- At the end, restart the server

If you have any problems, you can always open a ticket in the [Spooni Discord](https://discord.gg/spooni).

## 2. Usage
With the Ferris Wheel, up to 4 players per gondola can ride a Ferris wheel and enjoy the view. 

## 3. For developers

:::details Config.lua
```lua
Config = {}

Config.Keys = {
    Seat1 = { Text = 'Seat 1', NameHash = 'INPUT_EMOTE_TWIRL_GUN_VAR_B' },
    Seat2 = { Text = 'Seat 2', NameHash = 'INPUT_EMOTE_TWIRL_GUN_VAR_A' },
    Seat3 = { Text = 'Seat 3', NameHash = 'INPUT_EMOTE_TWIRL_GUN_VAR_D' },
    Seat4 = { Text = 'Seat 4', NameHash = 'INPUT_EMOTE_TWIRL_GUN_VAR_C' },
    GetOut = { Text = 'Leave seat', NameHash = 'INPUT_INTERACT_OPTION1' },
}

Config.Locations = {
    {   -- Saint Denis
        DistanceSpawn = 490,
        Coords = vector3(2393.718506, -1357.584839, 64.577484),
        Rotation = vector3(0.0, 0.0, 59.00),
    },
}
```
:::