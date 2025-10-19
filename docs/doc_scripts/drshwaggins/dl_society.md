---
title: Society Script
description: Advanced company and society management for RedM by DrShwaggins. Create businesses, manage employees, and handle finances for Red Dead Redemption 2 roleplay servers.
---

# 🧮 dl_society
Documentation relating to the dl_society.

:::tabs
== INFO
<iframe width="560" height="315" src="https://www.youtube.com/embed/ET6X3eYkQlA?si=rbXCE-GZIrryJAWP" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>

<a href="https://drshwaggins-scripts.tebex.io/package/5638677" class="button-buy">🛒 Buy Now</a>
:::

## 1. Installation
dl_society works only with VORP & RedEM:RP. 

To install dl_society:
- Download the resource
  - On [Cfx.re Portal](https://portal.cfx.re/)
- Drag and drop the resource into your resources folder
  - `dl_society`
- Add this ensure in your server.cfg
  ```
    ensure dl_society
  ```
- Execute the SQL file
  - `society.sql`
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
Translation = {}

Config.Framework = "vorpcore" -- "vorpcore" or "redem"

Config.Locale = 'en'  -- Change Language
Config.PositionTimer = 3  -- Job Locations only changable every x days
Config.UseNPlayerSelector = true  -- NPLAYER SELECTOR SCRIPT IS NEEDED FOR THIS TO WORK ! Otherwise using nearestplayer (if using Menu) or playerID (if using Command)

-- ADMIN COMMANDS
Config.AdminOverviewAccess = {} -- Players with this group can open Table and Storage of every job
Config.AdminViewCommand = "adView"
Config.AdminReplaceCommand = "adPlace"
Config.AdminViewInventoryCommand = "adViewInv"
Config.AdminDeleteJobCommand = "adDelete"


Config.CreateJobAccess = {'admin'}  -- if empty every user has Access to create a job


-- USER COMMANDS AND MENUS
Config.UseMenu = true -- Use MenuApi if false use Commands below
Config.JobMenuCommand = "jobMenu" -- Command to open Boss Menu for placing Interaktion Points or invite Players
Config.ChangeBossLocationCommand = "setJobBossLocation" -- Replace Boss Interaction Point
Config.ChangeArmoryLocationCommand = "setJobArmoryLocation" -- Replace Storage Interaction Point


-- INTERACTION KEYS
Config.BossMenuKey = 0x760A9C6F -- G
Config.ArmoryKey = 0x760A9C6F -- G
Config.depositCashKey = 0x760A9C6F  -- G
Config.withDrawCashKey = 0x80F28E95  -- L
Config.BuyJobKey = 0x26E9DC00   -- Z
Config.OnOffDutyKey = 0xB2F377E8  -- F


-- LOGGING
Config.UseLogger = false  -- Turn if Logging
Config.WalletWebhook = ""
Config.webhookAvatar = ""
Config.WebhookName = "DL-Society"


-- SALARY AND MONEY
Config.PayFromCompany = false  -- Pay Salary from Job Wallet
Config.PayFromCompanyExceptions = {""} -- If PayFromCompany = true these jobs are exceptions and will not get payed from job wallet
Config.MaxSalary = -1 -- (-1 = no Limit)
Config.PayUnemployed = false  -- Pay Unemployed Players
Config.UnemployedMoney = 1 -- Pay x$ to Unemployed Players per Interval
Config.UnemployedInterval = 30 -- Paycheckinterval for Unemployed Players in x Minutes


-- ARMORY SIZES
Config.MaxArmorySize = -1 -- (-1 = no limit)
Config.AllowWeaponsArmory = true


-- PROPS
Config.UseProps = true -- Use Props on Interaction Points
Config.TableHash = "p_tablecul01x"  -- Boss Location Table
Config.ArmoryHash = "p_storagebox01x" -- Storage Box Hash
Config.CaseHash = "s_lootablecampcase"  -- Money Case Hash
Config.BalanceAnim = "PROP_PLAYER_OPEN_CASHBOX" -- Put Money in Case Animation


-- MARKERS AND DISTANCES
Config.DrawMarkerDistance = 10.0
Config.InteractionDistance = 1.0

Config.BossMarkerType = 0x94FDAE17
Config.BossMarkerScaleX = 1.0
Config.BossMarkerScaleY = 1.0
Config.BossMarkerScaleZ = 0.1
Config.BossMarkerR = 255
Config.BossMarkerG = 255
Config.BossMarkerB = 255
Config.BossMarkerAlpha = 100

Config.ArmoryMarkerType = 0x94FDAE17
Config.ArmoryMarkerScaleX = 1.0
Config.ArmoryMarkerScaleY = 1.0
Config.ArmoryMarkerScaleZ = 0.1
Config.ArmoryMarkerR = 255
Config.ArmoryMarkerG = 255
Config.ArmoryMarkerB = 255
Config.ArmoryMarkerAlpha = 100


------------ DLC´s ----------------------
Config.UseDLAdvancedStores = false





------------------------------------------

-- Secondary Job Stations
Config.SecondaryJobStations = { -- Second Table Position for Specific Jobs -- The Job Still has exist in the dl_jobs table !! Players cant move these stations

  -- EXAMPLES
  -- {
  --   job = "testjob",
  --   position = {x = -216.303, y = 679.9822, z = 113.48}, -- Position for Table Marker | If empty no boss position and prop is used
  --   storagePos = {x = -209.436, y = 675.6641, z = 113.47}, -- Position for Storage Marker | If empty no storage position and prop is used
  --   propLocations = {
  --     tablePropLocation = {x = -217.52, y = 678.29, z = 113.39, h = 323.03}, -- Position for Table Prop | If Empty no prop is spawning
  --     storagePropLocation = {x = -208.94, y = 674.26, z = 113.46, h = 12.21} -- Position for Storage Prop | If Empty no prop is spawning
  --   },
  --   blipSprite = -507621590,  -- If -1 no blip is used
  --   blipColor = "BLIP_MODIFIER_MP_COLOR_10",  -- if -1 standard color is used
  --   blipLabel = "Test Blip"
  -- },

  -- EXAMPLE 2 | Only Having Table Location without Prop, also no Blip is Spawning
  -- {
  --   job = "testjob2",
  --   position = {x = -203.67, y = 691.25, z = 113.89},
  --   storagePos = {},
  --   propLocations = {
  --     tablePropLocation = {},
  --     storagePropLocation = {}
  --   },
  --   blipSprite = -1,
  --   blipColor = "BLIP_MODIFIER_MP_COLOR_10",
  --   blipLabel = "Test Blip 2"
  -- },

}


-- BLIPS MANAGEMENT
Config.AllowBlips = true  -- Allow Players with Boss Rank to Setup a Blip -- Also Controls if Blips are Presented at all
Config.BlipsStatusExceptions = {""} -- IF BLIPS ARE ALLOWED, BLIPS FROM THIS JOBS WILL STILL NOT SHOW | IF BLIPS ARE NOT ALLOWED, BLIPS IN THIS LIST WILL STILL SHOW
Config.BlipScale = 0.2
Config.Blips = {  -- All Blips allowed to setup by players (Keep in mind you need to have and image with the same name in html/images/blips)
   	-180188163,
   	-507621590,
    -426139257,
    -592068833,
   	-1357626643,
   	-2034972265,
   	233295963,
    1974270787,
   	-1018164873,
    -1103135225,
    1151744703,
    1433472988,
    -1018697504,
    1961764827,
    -963916715,
   	1322310532,
   	-2108463156,
   	-392465725,
   	553094466,
   	1391579593,
    -1741111493,
    -2030232380,
   	-1396905917,
   	-1693203215,
   	-818533067,
   	-1117222502,
   	60954128,
    -235048253,
 	  2123729925,
   	1834871186,
   	-1371003729,
    2119977580,
    354734005,
    263099185,
    2005921736,
    564457427,
    1258184551,
    1735233562,
    -813538438,
    214435071,
    -266617465,
    -569968788,
    90287351,
    2107754879,
    -243818172,
    -693644997,
    -1954662204,
    -1739686743,
    1938782895,
    819673798,
    1195729388,
    552659337,
    -695368421,
    1879260108,
    -1665418949,
   	-73168905,
    669307703,
    -1606321000,
    -675651933
}


-- TRANSLATION

Translation = {

    ['de'] = {
        ['create_jobalreadyexist'] = 'Ein Job mit diesen Namen existiert bereits',
        ['create_wronginput'] = 'Bitte gebe ein Job Namen und ein Job Label an!',
        ['create_wronginput_off'] = 'Der Jobname darf nicht mit "off_" anfangen!',
        ['create_successfull_created'] = 'Der Job wurde erfolgreich erstellt!',
        ['create_error_grade'] = 'Der Jobgrade konnte nicht erstellt werden',
        ['create_error_job'] = 'Der Job konnte nicht erstellt werden',
        ['not_boss_grade'] = 'Du musst für diese Aktion den Boss Rang besitzen!',
        ['locationchange_oncooldown'] = 'Du hast den Standort erst kürzlich geändert, bitte warte noch etwas!',
        ['bossmenutitle'] = 'Firmen Management',
        ['armorymenutitle'] = 'Lager Management',
        ['open_bossmenu'] = 'Bossmenü öffnen',
        ['open_deposit'] = 'Geld einzahlen',
        ['open_withdraw'] = 'Geld abheben',
        ['open_armory'] = 'Lager öffnen',
        ['placement_rotations'] = 'Verschieben',
        ['placement_left'] = 'Links',
        ['placement_right'] = 'Rechts',
        ['placement_front'] = 'Vorne',
        ['placement_back'] = 'Zurück',
        ['placement_rotate'] = 'Drehen',
        ['placement_place'] = 'Platzieren und Speichern',
        ['invite_job_usernotfound'] = 'Einwohner wurde nicht gefunden',
        ['invite_job_noplayeridea'] = 'Einwohner ID wurde nicht übermittelt',
        ['invite_job_youaccepted'] = 'Du hast einen neuen Job!',
        ['invite_job_useraccepted'] = 'Dein Jobangebot wurde angenommen!',
        ['invite_job_userdenied'] = 'Dein Jobangebot wurde abgelehnt!',
        ['not_enough_money'] = 'Du hast nicht so viel Geld!',
        ['not_enough_money_society'] = 'So viel Geld ist nicht auf dem Firmenkonto!',
        ['job_promoted'] = 'Du wurdest befördert!',
        ['job_demoted'] = 'Du wurdest degradiert!',
        ['job_fired'] = 'Du wurdest gefeuert!',
        ['buyJob'] = 'Firma erwerben',
        ['job_paycheck'] = 'Du hast eine Gehaltszahlung erhalten!',
        ['job_paycheck_nomoney'] = 'Deine Firma/Gang kann dir kein Gehalt mehr auszahlen!',
        ['unemployed_paycheck'] = 'Du hast Arbeitslosengeld erhalten!',
        ['negative_amount'] = 'Du musst einen positiven Betrag angeben!',
        ['no_perms'] = 'Dazu hast du keine Berechtigungen!',
        ['bossmenu_title'] = 'Bossmenü Options',
        ['change_bossmenu_position'] = 'Bossmenü Position ändern',
        ['change_armory_position'] = 'Lagerposition ändern',
        ['jobInvite'] = 'Einwohner zum Job einladen',
        ['company_buy'] = "Firma zum Verkauf: ",
        ['on_duty'] = "In den Dienst gehen",
        ['off_duty'] = "Außer Dienst gehen",
        ['createJobStore'] = "Firmen Store gründen",
        ['salaryToHigh']  = "Das gewählte Gehalt ist zu hoch gewählt",
        ['job_doesent_exist'] = "Der gewählte Job existiert nicht!",
        ['job_removed'] = "Job entfernt!",
    },


    ['en'] = {

      ['create_jobalreadyexist'] = 'A job with this name already exists!',
      ['create_wronginput'] = 'Please enter a job name and a job label!',
      ['create_wronginput_off'] = 'The job name must not start with "off_" !',
      ['create_successfull_created'] = 'The job was created successfully!',
      ['create_error_grade'] = 'The job grade could not be created',
      ['create_error_job'] = 'The job could not be created',
      ['not_boss_grade'] = 'You must have the Boss rank for this action!',
      ['locationchange_oncooldown'] = 'You recently changed location, please wait a little longer!',
      ['bossmenutitle'] = 'Company Management',
      ['armorymenutitle'] = 'Storage Management',
      ['open_bossmenu'] = 'Open boss menu',
      ['open_deposit'] = 'Deposit money',
      ['open_withdraw'] = 'Withdraw money',
      ['open_armory'] = 'Open storage',
      ['placement_rotations'] = 'Move',
      ['placement_left'] = 'Left',
      ['placement_right'] = 'Right',
      ['placement_front'] = 'Front',
      ['placement_back'] = 'Back',
      ['placement_rotate'] = 'Rotate',
      ['placement_place'] = 'Place and Save',
      ['invite_job_usernotfound'] = 'Inhabitant was not found',
      ['invite_job_noplayeridea'] = 'Resident ID was not submitted',
      ['invite_job_youaccepted'] = 'You have a new job!',
      ['invite_job_useraccepted'] = 'Your job offer has been accepted!',
      ['invite_job_userdenied'] = 'Your job offer has been rejected!',
      ['not_enough_money'] = 'You dont have that much money!',
      ['not_enough_money_society'] = 'There is not that much money in the company account!',
      ['job_promoted'] = 'You have been promoted!',
      ['job_demoted'] = 'You have been demoted!',
      ['job_fired'] = 'You got fired!',
      ['buyJob'] = 'Acquire company',
      ['job_paycheck'] = 'You have received a salary payment!',
      ['job_paycheck_nomoney'] = 'Your company can no longer pay you a salary!',
      ['unemployed_paycheck'] = 'You received unemployment benefits!',
      ['negative_amount'] = 'You must enter a positive amount!',
      ['no_perms'] = 'You dont have permission to do this!',
      ['bossmenu_title'] = 'Boss Menu Options',
      ['change_bossmenu_position'] = 'Change boss menu position',
      ['change_armory_position'] = 'Change storage position',
      ['jobInvite'] = 'Invite residents to the job',
      ['company_buy'] = "Company for sale: ",
      ['on_duty'] = "Go into service",
      ['off_duty'] = "Go off duty",
      ['createJobStore'] = "Create Job Store",
      ['salaryToHigh']  = "The Choosen Salary is to Hight!",
      ['job_doesent_exist'] = "The Job doesent exist!",
      ['job_removed'] = "Job removed!",

    }

}
:::
