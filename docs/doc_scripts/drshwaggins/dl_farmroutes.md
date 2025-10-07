# 🍊 dl_farmroutes
Documentation relating to the dl_farmroutes.

:::tabs
== INFO
<iframe width="570" height="321" src="https://dunb17ur4ymx4.cloudfront.net/packages/images/9e5bc4cd8c9f86ae0a601e1b8f382bb02277198a.png" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>

<a href="https://drshwaggins-scripts.tebex.io/package/5783283" class="button-buy">🛒 Buy Now</a>
:::

## 1. Installation
dl_farmroutes works only with VORP. 

To install dl_farmroutes:
- Download the resource
  - On [Cfx.re Portal](https://portal.cfx.re/)
- Drag and drop the resource into your resources folder
  - `dl_farmroutes`
- Add this ensure in your server.cfg
  ```
    ensure dl_farmroutes
  ```
- Now you can configure and translate the script as you like
  - `config.lua`
- At the end, restart the server

If you have any problems, you can always open a ticket in the [DrShwaggins Discord](https://discord.gg/K9H27J5VaS).

## 2. Usage
Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum.

## 3. For developers

:::details Config.lua
```lua
Config = {}
Config.Locale = "en"

Config.FarmControl = 0xC7B5340A
Config.ProcessingControl = 0xC7B5340A
Config.SellingControl = 0xC7B5340A

Config.BaseHarvestAnimDict = "amb_work@world_human_box_pickup@1@male_a@stand_exit_withprop"
Config.BaseHarvestAnimName = "exit_front"

Config.BaseProcessingAnimDict = ""
Config.BaseProcessingAnimName = ""


Config.Farms = {
  {
    x = 1068.1593,
    y = -1438.9380,
    z = 56.2615,
    time = 2000,  -- TIME TO HARVEST the Item in ms
    item = 'cotton', -- ITEM TO GET
    itemLabel = "Baumwolle",
    modelHash = 'crp_cotton_bb_sim', -- ITEM HASH OF MODELS | IF EMPTY YOUR STILL ABLE TO FARM IN THE AREA OF THE FARM
    animation = '', -- ANIMATION PLAYED FOR COLLECTING | IMPORTANT USE SCENARIO ANIMS FOR THE PROP YOU SETUP! (IF EMPTY USING STANDARD ANIMATION -> See BaseHarvestAnim)
    allowedJobs = {}, -- if empty ever job is allowed to farm this ressource
    itemNeeded = {},  -- if empty no items needed for farming on this farm
    timeSlot = {'00:00-24:00'}, -- Available in time (ingame Time)
    blipsprite = '-984192463',  -- if empty no blip is displayed
    blipscale = 0.7,
    bliptext = "Baumwolle | Sammeln"
  },
  {
    x = 2659.6913,
    y = -783.2247,
    z = 42.9578,
    time = 2000,
    item = 'Zuckerrohr',
    itemLabel = "Zuckerrohr",
    modelHash = 'crp_sugarcane_ac_sim',
    animation = '',
    allowedJobs = {},
    itemNeeded = {"Sichel"},
    timeSlot = {'00:00-24:00'},
    blipsprite = '-984192463',
    blipscale = 0.7,
    bliptext = "Zuckerrohr | Sammeln"
  },
  {
    x = 2658.1750,
    y = -776.9623,
    z = 42.4969,
    time = 2000,
    item = 'Zuckerrohr',
    itemLabel = "Zuckerrohr",
    modelHash = 'crp_sugarcane_ac_sim',
    animation = '',
    allowedJobs = {},
    itemNeeded = {"Sichel"},
    timeSlot = {'00:00-24:00'},
    blipsprite = '',
    blipscale = 0.7,
    bliptext = "Zuckerrohr | Sammeln"
  },
  {
    x = 2658.4097,
    y = -784.9093,
    z = 42.3197,
    time = 2000,
    item = 'Zuckerrohr',
    itemLabel = "Zuckerrohr",
    modelHash = 'crp_sugarcane_ac_sim',
    animation = '',
    allowedJobs = {},
    itemNeeded = {"Sichel"},
    timeSlot = {'00:00-24:00'},
    blipsprite = '',
    blipscale = 0.7,
    bliptext = "Zuckerrohr | Sammeln"
  },
  {
    x = 2009.6913,
    y = -853.2247,
    z = 41.9578,
    time = 2000,
    item = 'Orange',
    itemLabel = "Orange",
    modelHash = 'p_basketorange01x',
    animation = '',
    allowedJobs = {},
    itemNeeded = {"Sammelkorb"},
    timeSlot = {'00:00-24:00'},
    blipsprite = '-984192463',
    blipscale = 0.7,
    bliptext = "Orangen | Sammeln"
  },
  {
    x = 1176.8167,
    y = -972.4994,
    z = 67.7940,
    time = 2000,
    item = 'Tabakblatt',
    itemLabel = "Tabakblatt",
    modelHash = 'crp_tobaccoplant_ab_sim',
    animation = '',
    allowedJobs = {},
    itemNeeded = {"Sammelkorb"},
    timeSlot = {'00:00-24:00'},
    blipsprite = '-984192463',
    blipscale = 0.7,
    bliptext = "Tabak | Sammeln"
  },
  {
    x = 1236.3169,
    y = -2131.3528,
    z = 52.8907,
    time = 2000,
    item = 'Lehmbrocken',
    itemLabel = "Lehmbrocken",
    modelHash = 'mp005_p_dirtpile_sca03_buried',
    animation = '',
    allowedJobs = {},
    itemNeeded = {"Schaufel"},
    timeSlot = {'00:00-24:00'},
    blipsprite = '-984192463',
    blipscale = 0.7,
    bliptext = "Lehm | Sammeln"
  },
  {
    x = 1069.3549,
    y = -1762.2081,
    z = 48.1878,
    time = 2000,
    item = 'Apfel',
    itemLabel = "Apfel",
    modelHash = 'p_basketapple01x',
    animation = '',
    allowedJobs = {},
    itemNeeded = {"Sammelkorb"},
    timeSlot = {'00:00-24:00'},
    blipsprite = '-984192463',
    blipscale = 0.7,
    bliptext = "Apfel | Sammeln"
  },
  {
    x = 1513.6781,
    y = -805.0624,
    z = 44.3661,
    time = 2000,
    item = 'Wildkraeuter',
    itemLabel = "Wildkräuter",
    modelHash = 'oregano_p',
    animation = '',
    allowedJobs = {},
    itemNeeded = {"Sichel"},
    timeSlot = {'00:00-24:00'},
    blipsprite = '',
    blipscale = 0.7,
    bliptext = "Wildkräuter | Sammeln"
  },
  {
    x = -788.3364,
    y = 1492.2585,
    z = 48.8006,
    time = 2000,
    item = 'Wildkraeuter',
    itemLabel = "Wildkräuter",
    modelHash = 'oregano_p',
    animation = '',
    allowedJobs = {},
    itemNeeded = {"Sichel"},
    timeSlot = {'00:00-24:00'},
    blipsprite = '',
    blipscale = 0.7,
    bliptext = "Wildkräuter | Sammeln"
  },
  {
    x = 1222.7506,
    y = -567.7342,
    z = 67.9210,
    time = 2000,
    item = 'Wildkraeuter',
    itemLabel = "Wildkräuter",
    modelHash = 'oregano_p',
    animation = '',
    allowedJobs = {},
    itemNeeded = {"Sichel"},
    timeSlot = {'00:00-24:00'},
    blipsprite = '',
    blipscale = 0.7,
    bliptext = "Wildkräuter | Sammeln"
  },
  {
    x = 2306.9355,
    y = -239.5076,
    z = 42.1549,
    time = 2000,
    item = 'Heilkraeuter',
    itemLabel = "Heilkräuter",
    modelHash = 'orleander_p',
    animation = '',
    allowedJobs = {},
    itemNeeded = {"Sichel"},
    timeSlot = {'00:00-24:00'},
    blipsprite = '',
    blipscale = 0.7,
    bliptext = "Heilkräuter | Sammeln"
  },
}


Config.Processing = {

--  {
--      x = -427.46,
--      y = 508.39,
--      z = 98.0,
--      time = 850,
--      remove = {{["name"] = "carrots", ["amount"] = 3}},
--      add =  {{["name"] = "carrotjuice", ["amount"] = 1}},
--      allowedJobs = {},
--      itemNeeded = {},
--      timeSlot = {},
--      useAnim = false, -- USES PROCESSING ANIM
--      blipsprite = '',
--      blipscale = '',
--      bliptext = ""
--  },



  {
       x = 471.24,
       y = 704.43,
       z = 117.29,
       time = 4000, -- time to process
       remove = {{["name"] = "oil", ["amount"] = 2}},
       add =  {{["name"] = "rein_oil", ["amount"] = 1}},
       allowedJobs = {},
       itemNeeded = {},
       timeSlot = {}, -- Available in time (ingame Time)
       blipsprite = '214435071',
       blipscale = 0.7,
       bliptext = "Oil | Verarbeitung"
  },
  {
        x = 2963.13,
        y = 791.4,
        z = 51.4,
        time = 4000, -- time to process
        remove = {{["name"] = "iron", ["amount"] = 5}},
        add =  {{["name"] = "ironbar", ["amount"] = 1}},
        allowedJobs = {},
        itemNeeded = {},
        timeSlot = {}, -- Available in time (ingame Time)
        blipsprite = '2107754879',
        blipscale = 0.7,
        bliptext = "Eisen | Verarbeitung"
  },
  {
        x = 2904.31,
        y = 1442.19,
        z = 57.67,
        time = 4000, -- time to process
        remove = {{["baumstamm"] = "Baumstamm", ["amount"] = 1}},
        add =  {{["holzbretter"] = "Holzbretter", ["amount"] = 3}},
        allowedJobs = {},
        itemNeeded = {},
        timeSlot = {}, -- Available in time (ingame Time)
        blipsprite = '2107754879',
        blipscale = 0.7,
        bliptext = "Holzbretter | Verarbeitung"
  },
  {
      x = 2896.07,
      y = 1431.11,
      z = 57.69,
      time = 4000, -- time to process
      remove = {{["baumstamm"] = "Baumstamm", ["amount"] = 1}},
      add =  {{["kantholz"] = "Kantholz", ["amount"] = 3}},
      allowedJobs = {},
      itemNeeded = {},
      timeSlot = {}, -- Available in time (ingame Time)
      blipsprite = '2107754879',
      blipscale = 0.7,
      bliptext = "Kantholz | Verarbeitung"
  }


}


Config.Sellers = {

  {
      x = 496.49,
      y = 672.95,
      z = 121.04,
      heading = 83.7,
      item = 'rein_oil',
      model = "p_oillamp01x",
      price = 0.15,
      npcHash = "u_m_m_sdexoticsshopkeeper_01", -- if empty no npc spawns
      timeSlot = {},
      allowedJobs = {},
      blipsprite = '-1567930587',
      sellText = "Vielen dank für deine Arbeit",
      bliptext = "Reinoil | Verkauf",
  }

}





Translation = {}
Translation = {

    ['de'] = {
      ['start_farming'] = "Sammeln",
      ['start_processing'] = "Verarbeiten",
      ['missing_item'] = "Zum Sammeln benötigst du ",
      ['wrong_job'] = "Du hast zum Sammeln nicht den passenden Job",
      ['notenoughspace'] = "Du hast nicht mehr genug Platz in deiner Tasche",
      ['notenoughitems'] = "Du hast nicht die benötigten Gegenstände",
      ['items_processed'] = "Gegenstände verarbeitet",
      ['notintime'] = "Du kannst dies immoment nicht tun, komm später wieder!",
      ['item_sold'] = "Gegenstand verkauft für ",
      ['start_selling'] = "Verkaufen",
    },

    ['en'] = {
      ['start_farming'] = "Collect",
      ['start_processing'] = "Process",
      ['missing_item'] = "To collect you need ",
      ['wrong_job'] = "You don't have the right job to collect",
      ['notenoughspace'] = "You no longer have enough space in your bag",
      ['notenoughitems'] = "You don't have the items you need",
      ['items_processed'] = "items processed",
      ['notintime'] = "You can't do this right now, come back later!",
      ['item_sold'] = "item sold for ",
      ['start_selling'] = "Sell",
    }

}
:::
