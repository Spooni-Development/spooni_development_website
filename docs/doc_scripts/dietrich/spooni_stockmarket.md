# 📈 Stockmarket
Documentation relating to the spooni_stockmarket.

:::tabs
== INFO
<iframe width="560" height="315" src="https://www.youtube.com/embed/MFGGdoAU7bU?si=SIPcDGngWJQzTMNq" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

<a href="https://tebex.dietrich-development.com//package/6955285?basket=cnzri3-60bbee153696f561e0e0d4de10d5667e42d0c521" class="button-buy">🛒 Buy Now</a>
:::

## 1. Installation
spooni_stockmarket works Standalone.

To install spooni_stockmarket:
- Download the resource
  - On [Cfx.re Portal](https://portal.cfx.re/)
- Drag and drop the resource into your resources folder
  - `spooni_stockmarket`
- Add this ensure in your server.cfg
  ```
    ensure spooni_stockmarket
  ```
- Now you can configure and translate the script as you like
  - `config.lua`
- At the end, restart the server

If you have any problems, you can always open a ticket in the [Spooni Discord](https://discord.gg/spooni).

## 2. Usage
Bring true economic depth to your RedM roleplay experience by giving players the ability to invest, speculate, and build portfolios through a full-featured, immersive stock market system.
With Stockmarket, you get live price tracking, manual dividend payouts, a fully integrated in-game interface, and a complete admin panel to manage everything from RP-based events to real-world price mapping.

## 3. For developers

:::details Config.lua
```lua
Config = {}

Config.debug = true

-- General Settings
Config.General = {
    PriceUpdateInterval = 12, --in hours (and every restart automatically)
    EnableRPEvents = true,
    EnableDividends = true,
    DividendInterval = 3, --how long the holder must hold at least one stock of that company to receive dividends (default 3 days)
    DividendPayoutDay = 15, --day in month
    Language = "en", --must be defined in language.lua
}

Config.Administration = {
    isAdmin = function(src)
        return IsPlayerAceAllowed(src, "spooni_stockmarket.admin") --in permissions it would look like "add_ace group.admin spooni_stockmarket.admin allow"
    end,
    --if you want to use a custom function to check if a player is admin, you can set it here
    --example:
    --isAdmin = function(src)
    --    return exports['myframework']:IsAdmin(src)
    --end
    -- or with jobs:
    --isAdmin = function(src)
    --    return Bridge.getJob(src) == "police"
    --end
}

-- Custom Influence your Stocks (Only use if you know what you are doing)
Config.CustomDataSources = {
    --[[ ["VCC"] = function()
        local cash = exports.myeconomy:getCompanyBalance("valentine_coal")
        return cash / 1000
    end,

    ["SBF"] = function()
        local reserves = exports.bank_system:getReserves("saint_denis")
        return reserves / 500
    end, ]]
}

Config.Commands = {
    enabled = true, --enable commands (set to false if you dont want players to access it everywhere via command)
    onlyAdmin = true, -- if true, only admins can use the command
    openStockmarketCommand = "stockmarket", --open stockmarket 
}

--if you want to use locations to open the stockmarket, you can set them here (leave Config.Locations empty if you dont want to use locations)
Config.useLocationNames = false --if you want to use the name of the location as Title of the Stockmarket
Config.PromptKey = 0x760A9C6F --key to open the stockmarket
Config.Locations = {
    SaintDenis = {
        name = "Saint Denis Stockmarket",
        blipsprite = 249721687, --set to false if you dont want a blip
        coords = vector3(2651.8323, -1292.5818, 52.2455),
        distance = 2.0,
        jobs = {"police"}, --if you want to joblock it, set it here otherwise leave empty
    }
}
```
:::