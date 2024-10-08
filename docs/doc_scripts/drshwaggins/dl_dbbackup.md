# 💾 dl_dbbackup
Documentation relating to the [dl_dbbackup](https://drshwaggins-scripts.tebex.io/package/5986293).

:::tabs
== PREVIEW
<iframe width="570" height="321" src="https://dunb17ur4ymx4.cloudfront.net/packages/images/d13175ec053e5ff7902ddb1a2c5ce57c40c48cd1.png" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>

== BUY
[Buy the script](https://drshwaggins-scripts.tebex.io/package/5986293)
:::

## 1. Installation
dl_questionwhitelist works Standalone. 

To install dl_dbbackup:
- Drag and drop the resource into your resources folder
  - `dl_dbbackup`
- Add this ensure in your server.cfg
  ```
    ensure dl_dbbackup
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
Config.BackupPrints = true

Config.Databasename = "YOUR_DATABASE_HERE" --importend for keys and constraints

----------- INFORMATIONS-----------
-- MIN AMOUNTS FOR TIME DIFFERENCES
-- MIN HOUR = 1
-- MIN MINUTE = 10

-- IF YOU USE "m"(minute) or "h"(hour) the script will make a backup after each script restart and after x amount of time you setup
-- If you want to backup only after each script restart you can set Config.TimeDifference = "d" and Config.SaveEveryUnit = 0
-- If you use Config.TimeDifference = "d" and a Config.SaveEveryUnit over 0 the script will backup on the next script restart the after time limit it reached


Config.TimeDifference = "d" -- "d":day, "h":hour, "m":minute
Config.SaveEveryUnit = 1  -- IF "h" MIN AMOUNT 1 , IF "m" MIN AMOUNT 10
Config.MaxBackups = 14


Config.ManualDataseBackupCommand = "dbbackup"
Config.AllowedBackupCommand = { -- INSERT STEAM IDS OF PEOPLE WHO ARE ALLOWED TO DO A DATABASE BACKUP MANUAL WITH COMMAND
  'steam:1100001243g2348'
}
:::
