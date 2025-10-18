# 🏠 Riding Center
Documentation relating to the spooni_riding_center.

:::tabs
== INFO
<iframe width="560" height="315" src="https://www.youtube.com/embed/xb5ER9LvMuc?si=AiT_Wi4B8Pn0aQng" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

<a href="https://spooni-mapping.tebex.io/package/6986008" class="button-buy">🛒 Buy Now</a>
<a href="https://spooni.de/rdr2/?m=house236" class="button-map">📍 View on Map</a>
:::

## 1. Installation
spooni_riding_center works Standalone.  

To install spooni_riding_center:
- Download the resource
  - On [Cfx.re Portal](https://portal.cfx.re/)
- Ensure that all requirements are installed
  - [vorp_menu](https://github.com/VORPCORE/vorp_menu)
- Drag and drop the resource into your resources folder
  - `spooni_riding_center`
  - `spooni_riding_center_script`
- Add this ensure in your server.cfg
  ```
    ensure spooni_riding_center
    ensure spooni_riding_center_script
  ```
- Now you can configure and translate the script as you like
  - `config.lua`
- At the end, restart the server

If you have any problems, you can always open a ticket in the [Spooni Discord](https://discord.gg/spooni).

## 2. For developers
### Config Preview
:::details  Config.lua
```lua
Config = {}
Config.Locale = "en" -- Used locale for translation (add your own files to locale/languages/) // Remember to name the file the same as the abbreviation used in this variable
Config.Framework = "vorp" -- Look at server/framework.lua and client/framework.lua to adjust it to your needs ("vorp" and "rsg" are added by default)

Config.JobLock = false -- Do you want to job-lock the menu to manage the obstacles and race options? (false to deactivate or a table containing job-name and rank, like {["horsetrainerva"]=0, ["horsetrainerbw"] = 0})

--------------------------------------------- [[ RIDINGCENTER OBSTACLE MODULE ]] ---------------------------------------------

Config.ObstacleManagementCommand = {
	enable = true, -- Do you want to use a command to open the menu to manage the obstacles?
	name = "obstacles", -- Name of the command
	range = 100.0 -- Range to use the command, starting from the center of the obstacle ground
}

Config.ObstacleManagementPrompt = {
	enable = true, -- Do you want to use a prompt to open the menu to manage the obstacles?
	key = 0xA1ABB953, -- The key used for the action
	position = vector3(1288.5798, 40.4245, 92.4121), -- The position where the prompt is visible
	range = 2.0, -- The prompts range
	npcData = {
		enable = true, -- Do you want to add a NPC?
		model = "a_m_m_nbxdockworkers_01", -- NPC Model
		modelOutfit = false, -- NPC Outfit (false for random or a number)
		position = vector4(1288.5798, 40.4245, 92.4121, 36.4958), -- NPC Position
		range = 100.0, -- NPC streaming range
		playScenario = "WORLD_HUMAN_STRAW_BROOM_WORKING", -- Should the NPC play a scenario animation? (false to deactivate or scenario-name as string)
	}
}

Config.ObstacleStreamingRange = 2000.0 -- Streaming range for the placed obstacles
Config.Obstacles = { -- List of obstacles containing the name of the obstacle used in the menu, a description and the hash to load/unload the IPL
	{ ["label"]="Dressage arena", ["description"]="A venue for dressage events.", ["hash"]=-374485189 },
	{ ["label"]="Jumping arena 1", ["description"]="A venue for jumping competitions.", ["hash"]=-95250280 },
	{ ["label"]="Jumping arena 2", ["description"]="A venue for jumping competitions.", ["hash"]=680850716 },
}

--------------------------------------------- [[ RIDINGCENTER RACETRACK / BETTING MODULE ]] ---------------------------------------------

Config.TimestampOffset = 0 -- Timestamp offset in seconds for the racing-times as the time is per default UTC

Config.Laps = 3 -- The number of laps a race lasts
Config.BetMinimum = 10 -- Minimum bet amount in Dollar
Config.BetMaximum = 100 -- Maximum bet amount in Dollar
Config.BookmakerMaxBudget = 10000 -- The virtual value in dollars that the bookmaker distributes among the competing horses to calculate the odds

Config.OperatorSharePercentage = 10 -- The amount in percent of the income which will be credited to the cash register of the riding center
Config.OperatorBankJobLock = false -- Do you want to job-lock withdrawing money? (false to deactivate or a table containing job-name and rank, like {["horsetrainerva"]=0, ["horsetrainerbw"] = 0}) 

Config.RacemanagerPreparePromptKey = 0xA1ABB953 -- The key that must be pressed to prepare a race
Config.RacemanagerStartPromptKey = 0x71F89BBC -- The key that must be pressed to start a race
Config.RacemanagerAnnouncePromptKey = 0xD3ECF82F -- The key that must be pressed to announce a race

Config.StarterNPC = { -- The NPC that is used to fire the starting signal for a race
    model = "s_m_m_cghworker_01", -- NPC Model
    modelOutfit = 2, -- NPC Outfit (false for random or a number)
    position = vector4(1300.6313, 33.4714, 92.4121, 89.8132), -- NPC Position
    range = 200.0, -- NPC streaming range
    playScenario = "WORLD_HUMAN_BADASS", -- Should the NPC play a scenario animation? (false to deactivate or scenario-name as string)
}

Config.RacemanagerNPC = { -- The NPC that is used to manage the races
    model = "MP_ASN_SDWEDDING_MALES_01", -- NPC Model
    modelOutfit = 2, -- NPC Outfit (false for random or a number)
    position = vector4(1289.8585, 32.0789, 98.5280, 271.0376), -- NPC Position
    range = 200.0, -- NPC streaming range
    playScenario = "WORLD_HUMAN_LEAN_RAILING", -- Should the NPC play a scenario animation? (false to deactivate or scenario-name as string)
    promptRange = 2.0, -- The prompt range
}

Config.BookmakerPromptKey = 0xA1ABB953 -- The key that must be pressed to talk to the bookmaker
Config.BookmakerNPCs = { -- The list containing the placed bookmaker NPCs
    {
        model = "a_m_m_blwtownfolk_01", -- NPC Model
        modelOutfit = 1, -- NPC Outfit (false for random or a number)
        position = vector4(1279.302, -9.021, 92.8185, 263.6131), -- NPC Position
        range = 200.0, -- NPC streaming range
        playScenario = "WORLD_HUMAN_CLIPBOARD", -- Should the NPC play a scenario animation? (false to deactivate or scenario-name as string)
        promptRange = 2.0,  -- The prompt range
    },
    {
        model = "a_m_m_rhdobesemen_01", -- NPC Model
        modelOutfit = 1, -- NPC Outfit (false for random or a number)
        position = vector4(1276.039, 72.0295, 92.8185, 86.6960), -- NPC Position
        range = 200.0, -- NPC streaming range
        playScenario = "WORLD_HUMAN_CLIPBOARD", -- Should the NPC play a scenario animation? (false to deactivate or scenario-name as string)
        promptRange = 2.0, -- The prompt range
    }
}

Config.TrumpetNPCs = { -- The list containing the placed NPCs that are announcing the races
    {
        model = "a_m_m_sdfancytravellers_01", -- NPC Model
        modelOutfit = 1, -- NPC Outfit (false for random or a number)
        position = vector4(1315.4272, 85.5291, 98.5309, 179.8296), -- NPC Position
        range = 200.0, -- NPC streaming range
    },
    {
        model = "a_m_m_sdfancytravellers_01", -- NPC Model
        modelOutfit = 2, -- NPC Outfit (false for random or a number)
        position = vector4(1315.5387, -18.8986, 98.5068, 4.6615), -- NPC Position
        range = 200.0, -- NPC streaming range
    }
}

Config.Horses = { -- The list of horses and their riders
    { name = "Acatenango", riderFirstname = "Oliver", riderLastname = "Smith", riderGender = "male", model = "A_C_Horse_Thoroughbred_BloodBay", groundOffset = 0.14 },
    { name = "Alchimist", riderFirstname = "Amelia", riderLastname = "Clarke", riderGender = "female", model = "A_C_Horse_Thoroughbred_ReverseDappleBlack", groundOffset = 0.14 },
    { name = "All My Dreams", riderFirstname = "Kevin", riderLastname = "Woodburn", riderGender = "male", model = "A_C_Horse_Thoroughbred_Brindle", groundOffset = 0.14 },
    { name = "Eclipse", riderFirstname = "George", riderLastname = "Taylor", riderGender = "male", model = "A_C_Horse_Thoroughbred_BlackChestnut", groundOffset = 0.14 },
    { name = "Mandarin", riderFirstname = "Hans", riderLastname = "Wagner", riderGender = "male", model = "A_C_Horse_Thoroughbred_DappleGrey", groundOffset = 0.14 },
    { name = "Haleb", riderFirstname = "Tyler", riderLastname = "Cooper", riderGender = "male", model = "A_C_Horse_Arabian_RedChestnut", groundOffset = -0.01 },
    { name = "Herold", riderFirstname = "Willhelm", riderLastname = "Bachmann", riderGender = "male", model = "A_C_Horse_Thoroughbred_ReverseDappleBlack", groundOffset = 0.14 },
    { name = "Kincsem", riderFirstname = "Katalin", riderLastname = "Fekete", riderGender = "female", model = "A_C_Horse_Thoroughbred_BlackChestnut", groundOffset = 0.14 },
    { name = "Goldsmith Maid", riderFirstname = "Robin", riderLastname = "Harris", riderGender = "male", model = "A_C_Horse_AmericanStandardbred_Buckskin", groundOffset = 0.1 },
    { name = "Lou Dillon", riderFirstname = "Ashley", riderLastname = "Thompson", riderGender = "female", model = "A_C_Horse_AmericanStandardbred_PalominoDapple", groundOffset = 0.1 },
    { name = "Man o' War", riderFirstname = "Brandon", riderLastname = "Scott", riderGender = "male", model = "A_C_Horse_AmericanStandardbred_SilverTailBuckskin", groundOffset = 0.1 },
    { name = "Monsoon", riderFirstname = "Jack", riderLastname = "Wilson", riderGender = "male", model = "A_C_Horse_AmericanStandardbred_Black", groundOffset = 0.1 },
    { name = "Spirit", riderFirstname = "Little", riderLastname = "Creek", riderGender = "male", model = "A_C_Horse_Mustang_Buckskin", groundOffset = -0.02 },
    { name = "Secretariat", riderFirstname = "Madison", riderLastname = "Wright", riderGender = "female", model = "A_C_Horse_Thoroughbred_BloodBay", groundOffset = 0.14 },
    { name = "Comanche", riderFirstname = "Myles", riderLastname = "Keogh", riderGender = "male", model = "A_C_Horse_Morgan_Bay", groundOffset = -0.02 },
    { name = "Joey", riderFirstname = "Albert", riderLastname = "Narracott", riderGender = "male", model = "A_C_Horse_Gang_Hosea", groundOffset = 0.1 },
    { name = "Ploetze", riderFirstname = "Geralt", riderLastname = "Riva", riderGender = "male", model = "A_C_Horse_MissouriFoxTrotter_Buckskinbrindle", groundOffset = 0.05 },
    { name = "Ostwind", riderFirstname = "Mika", riderLastname = "Schwarz", riderGender = "female", model = "A_C_Horse_Andalusian_DarkBay", groundOffset = 0.07 },
    { name = "Hidalgo", riderFirstname = "Frank", riderLastname = "Hopkins", riderGender = "male", model = "A_C_Horse_AmericanPaint_Overo", groundOffset = -0.01 },
    { name = "Uncle Sam", riderFirstname = "Oliver", riderLastname = "Stone", riderGender = "male", model = "A_C_Horse_MissouriFoxTrotter_Blueroan", groundOffset = 0.05 },
    { name = "Red Rum", riderFirstname = "Tommy", riderLastname = "Stack", riderGender = "male", model = "A_C_Horse_Gang_Kieran", groundOffset = 0.04 },
    { name = "Phar Lap", riderFirstname = "Jim", riderLastname = "Pike", riderGender = "male", model = "A_C_Horse_Turkoman_Chestnut", groundOffset = 0.1 },
    { name = "Seabiscuit", riderFirstname = "George", riderLastname = "Wolf", riderGender = "male", model = "A_C_Horse_Turkoman_DarkBay", groundOffset = 0.1 },
    { name = "Nijinsky", riderFirstname = "Lester", riderLastname = "Piggott", riderGender = "male", model = "A_C_Horse_Gang_John", groundOffset = 0.14 },
    { name = "Kelso", riderFirstname = "John", riderLastname = "Block", riderGender = "male", model = "A_C_Horse_Gang_John", groundOffset = 0.14 },
    { name = "Citation", riderFirstname = "Eddie", riderLastname = "Arcaro", riderGender = "male", model = "A_C_Horse_Turkoman_Gold", groundOffset = 0.1 },
    { name = "Seattle Slew", riderFirstname = "Jean", riderLastname = "Cruguet", riderGender = "male", model = "A_C_Horse_Gang_Micah", groundOffset = 0.05 },
}

Config.JockeyOutfits = { -- The list of the jockey-outfits
    -- Blue
    {
        ["male"] = {Hat = {[-2049778329] = {index = 105, tint1 = 50, color = 0, tint2 = 255, tint0 = 39, palette = 399232131}}, Vest = {[-348778908] = {palette = 1090645383, color = 5, tint1 = 150, index = 5, tint0 = 152, tint2 = 19}}, Boots = {[342937140] = {palette = -183908539, tint2 = 0, tint0 = 0, tint1 = 34}}, Shirt = {[-751393211] = {palette = 399232131, tint2 = 39, tint0 = 39, tint1 = 50}}, Pant = {[999986051] = {index = 34, tint1 = 15, color = 0, tint2 = 20, tint0 = 15, palette = 1090645383}}},
        ["female"] = {Vest = {[-1705495798] = {palette = 1090645383, color = 5, tint1 = 150, index = 5, tint0 = 152, tint2 = 19}}, Hat = {[1197809276] = {index = 105, tint1 = 50, color = 0, tint2 = 255, tint0 = 39, palette = 399232131}}, Shirt = {[-1895546752] = {palette = 399232131, tint2 = 39, tint0 = 39, tint1 = 50}}, Boots = {[1520662761] = {palette = -183908539, tint2 = 0, tint0 = 0, tint1 = 34}}, Pant = {[671788415] = {index = 34, tint1 = 15, color = 0, tint2 = 20, tint0 = 15, palette = 1090645383}}}
    },
    -- Red
    {
        ["male"]={Vest={[-1792777678]={palette=1090645383,color=2,tint1=72,index=5,tint0=75,tint2=21}},Hat={[-2049778329]={palette=-783849117,tint1=0,tint0=0,tint2=0}},Boots={[342937140]={palette=-183908539,color=1,tint1=34,index=7,tint0=0,tint2=0}},Pant={[999986051]={palette=1090645383,color=1,tint1=15,index=34,tint0=15,tint2=20}},Shirt={[-751393211]={palette=1090645383,color=1,tint1=15,index=4,tint0=15,tint2=20}}},
        ["female"] = {Vest = {[-1705495798] = {palette=1090645383,color=2,tint1=72,index=5,tint0=75,tint2=21}}, Hat = {[1197809276] = {palette=-783849117,tint1=0,tint0=0,tint2=0}}, Shirt = {[-1895546752] = {palette=1090645383,color=1,tint1=15,index=4,tint0=15,tint2=20}}, Boots = {[1520662761] = {palette=-183908539,color=1,tint1=34,index=7,tint0=0,tint2=0}}, Pant = {[671788415] = {palette=1090645383,color=1,tint1=15,index=34,tint0=15,tint2=20}}}
    },
    -- Yellow
    {
        ["male"]={Vest={[-348778908]={palette=1090645383,color=5,tint1=33,index=5,tint0=31,tint2=19}},Hat={[-2049778329]={palette=-783849117,color=1,tint1=43,index=105,tint0=43,tint2=43}},Boots={[342937140]={palette=-183908539,color=1,tint1=34,index=7,tint0=0,tint2=0}},Pant={[999986051]={palette=1090645383,color=1,tint1=15,index=34,tint0=15,tint2=20}},Shirt={[-751393211]={palette=1090645383,color=1,tint1=15,index=4,tint0=15,tint2=20}}},
        ["female"] = {Vest = {[-1705495798] = {palette=1090645383,color=5,tint1=33,index=5,tint0=31,tint2=19}}, Hat = {[1197809276] = {palette=-783849117,color=1,tint1=43,index=105,tint0=43,tint2=43}}, Shirt = {[-1895546752] = {palette=1090645383,color=1,tint1=15,index=4,tint0=15,tint2=20}}, Boots = {[1520662761] = {palette=-183908539,color=1,tint1=34,index=7,tint0=0,tint2=0}}, Pant = {[671788415] = {palette=1090645383,color=1,tint1=15,index=34,tint0=15,tint2=20}}}
    },
    -- Green
    {
        ["male"]={Vest={[-1792777678]={palette=1090645383,color=2,tint1=182,index=5,tint0=181,tint2=21}},Hat={[-2049778329]={palette=1090645383,tint1=20,tint0=195,tint2=195}},Boots={[342937140]={palette=-183908539,color=1,tint1=34,index=7,tint0=0,tint2=0}},Pant={[999986051]={palette=1090645383,color=1,tint1=15,index=34,tint0=15,tint2=20}},Shirt={[-751393211]={palette=1090645383,color=1,tint1=19,index=4,tint0=19,tint2=20}}},
        ["female"] = {Vest = {[-1705495798] = {palette=1090645383,color=2,tint1=182,index=5,tint0=181,tint2=21}}, Hat = {[1197809276] = {palette=1090645383,tint1=20,tint0=195,tint2=195}}, Shirt = {[-1895546752] = {palette=1090645383,color=1,tint1=19,index=4,tint0=19,tint2=20}}, Boots = {[1520662761] = {palette=-183908539,color=1,tint1=34,index=7,tint0=0,tint2=0}}, Pant = {[671788415] = {palette=1090645383,color=1,tint1=15,index=34,tint0=15,tint2=20}}}
    }
}

Config.PopulationNPCs = { -- The list of NPCs that are placed to populate the area
    { model = "a_m_m_blwtownfolk_01", modelOutfit = 1, position = vector4(1292.377197265625, 68.79944610595703, 92.4120864868164, 72.10022735595703), playScenario = "WORLD_HUMAN_LEAN_BACK_WALL" },
    { model = "s_f_m_bwmworker_01", modelOutfit = 13, position = vector4(1290.449951171875, 64.40760803222656, 92.41217803955078, -124.99999237060547), playScenario = "WORLD_HUMAN_INSPECT" },
    { model = "s_f_m_bwmworker_01", modelOutfit = 4, position = vector4(1272.625, 25.61978912353515, 98.53022003173828, -85.00001525878906), playScenario = "WORLD_HUMAN_INSPECT" },
    { model = "a_m_m_middlesdtownfolk_01", modelOutfit = 3, position = vector4(1258.4569091796875, -10.0574836730957, 100.53195190429688, -89.40550231933594), playScenario = "PROP_HUMAN_SEAT_CHAIR_CIGAR", useProp = true },
    { model = "a_m_m_middlesdtownfolk_01", modelOutfit = 4, position = vector4(1256.83935546875, -5.99282217025756, 101.53434753417969, -89.40816497802734), playScenario = "GENERIC_SEAT_BENCH_SCENARIO", useProp = true },
    { model = "a_m_m_middlesdtownfolk_01", modelOutfit = 5, position = vector4(1261.474365234375, -4.52323532104492, 100.52972412109375, -89.53269958496094), playScenario = "PROP_HUMAN_SEAT_CHAIR_LANGTON", useProp = true },
    { model = "a_m_m_middlesdtownfolk_01", modelOutfit = 6, position = vector4(1264.2591552734375, -7.21985292434692, 99.51097106933594, -87.95845031738281), playScenario = "MP_LOBBY_PROP_HUMAN_SEAT_CHAIR", useProp = true },
    { model = "a_m_m_middlesdtownfolk_01", modelOutfit = 7, position = vector4(1265.6947021484375, -1.7278424501419, 99.51475524902344, -88.52851867675781), playScenario = "GENERIC_SEAT_BENCH_SCENARIO", useProp = true },
    { model = "a_m_m_middlesdtownfolk_01", modelOutfit = 8, position = vector4(1254.8795166015625, 8.08950614929199, 101.53588104248047, -87.41511535644531), playScenario = "PROP_HUMAN_SEAT_CHAIR_CIGAR", useProp = true },
    { model = "a_m_m_middlesdtownfolk_01", modelOutfit = 9, position = vector4(1258.3929443359375, 12.26017761230468, 100.53211212158203, -87.60459899902344), playScenario = "GENERIC_SEAT_BENCH_SCENARIO", useProp = true },
    { model = "a_m_m_middlesdtownfolk_01", modelOutfit = 10, position = vector4(1262.718017578125, 6.63208770751953, 99.51730346679688, -88.92851257324219),  playScenario = "PROP_HUMAN_SEAT_CHAIR_PORCH", useProp = true },
    { model = "a_m_m_middlesdtownfolk_01", modelOutfit = 11, position = vector4(1265.5924072265625, 13.56106185913086, 99.5108871459961, -86.03156280517578), playScenario = "MP_LOBBY_PROP_HUMAN_SEAT_CHAIR", useProp = true },
    { model = "a_m_m_middlesdtownfolk_01", modelOutfit = 12, position = vector4(1258.473388671875, 3.84478449821472, 100.5318832397461, -88.11605072021484), playScenario = "GENERIC_SEAT_BENCH_SCENARIO", useProp = true },
    { model = "a_m_m_sdserversformal_01", modelOutfit = 5, position = vector4(1254.2110595703125, 29.78362083435058, 98.95594024658203, -93.0000228881836), playScenario = "WORLD_HUMAN_BARTENDER_CLEAN_GLASS" },
    { model = "re_trappedwoman_females_01", modelOutfit = 1, position = vector4(1258.484375, -8.82787990570068, 100.5267333984375, -87.55693817138672), playScenario = "PROP_HUMAN_SEAT_CHAIR_FAN", useProp = true },
    { model = "re_trappedwoman_females_01", modelOutfit = 3, position = vector4(1265.6234130859375, -0.60774952173233, 99.51195526123047, -89.00658416748047), playScenario = "PROP_HUMAN_SEAT_CHAIR_READING", useProp = true },
    { model = "mp_beau_bink_females_01", modelOutfit = 1, position = vector4(1256.6722412109375, -4.59956312179565, 101.5313949584961, -87.57023620605469), playScenario = "PROP_HUMAN_SEAT_CHAIR_READING", useProp = true },
    { model = "mp_fm_knownbounty_informants_females_01", modelOutfit = 1, position = vector4(1264.231201171875, -6.04679632186889, 99.5110855102539, -87.50933837890625), playScenario = "GENERIC_SEAT_BENCH_SCENARIO", useProp = true },
    { model = "female_skeleton", modelOutfit = 4, position = vector4(1265.5892333984375, 12.31855010986328, 99.51193237304688, -88.6451416015625), playScenario = "PROP_HUMAN_SEAT_CHAIR_FAN", useProp = true },
    { model = "loansharking_undertaker_females_01", modelOutfit = 3, position = vector4(1262.671875, 7.71886396408081, 99.51270294189453, -81.96894836425781), playScenario = "GENERIC_SEAT_BENCH_SCENARIO", useProp = true },
    { model = "mbh_rhodesrancher_females_01", modelOutfit = 1, position = vector4(1261.3817138671875, -3.46307277679443, 100.52656555175781, -87.64006805419922), playScenario = "GENERIC_SEAT_BENCH_SCENARIO", useProp = true },
    { model = "mes_finale2_females_01", modelOutfit = 1, position = vector4(1254.9393310546875, 9.17136573791503, 101.539794921875, -89.15479278564453), playScenario = "GENERIC_SEAT_BENCH_SCENARIO", useProp = true },
    { model = "mes_marston6_females_01", modelOutfit = 1, position = vector4(1266.4952392578125, -10.17042922973632, 98.53022003173828, -42), playScenario = "WORLD_HUMAN_FAN" },
    { model = "mp_asn_shadybelle_females_01", modelOutfit = 1, position = vector4(1264.143798828125, 55.19602966308594, 99.51171112060547, -86.83384704589844), playScenario = "GENERIC_SEAT_BENCH_SCENARIO", useProp = true }, 
    { model = "mp_campdef_chollasprings_females_01", modelOutfit = 1, position = vector4(1258.513671875, 52.47595977783203, 100.53194427490234, -85.89552307128906), playScenario = "PROP_HUMAN_SEAT_CHAIR_PORCH", useProp = true }, 
    { model = "mp_campdef_eastnewhanover_females_01", modelOutfit = 1, position = vector4(1259.97802734375, 58.00242233276367, 100.5260238647461, -85.83356475830078), playScenario = "GENERIC_SEAT_BENCH_SCENARIO", useProp = true }, 
    { model = "mp_campdef_gaptoothridge_females_01", modelOutfit = 1, position = vector4(1272.689453125, 42.7599983215332, 98.53024291992188, -87.39402770996094), playScenario = "WORLD_HUMAN_LEAN_WALL_LEFT" },
    { model = "mp_campdef_heartlands2_females_01", modelOutfit = 1, position = vector4(1262.7379150390625, 62.17031478881836, 99.51160430908203, -84.89811706542969), playScenario = "GENERIC_SEAT_BENCH_SCENARIO", useProp = true }, 
    { model = "mp_campdef_riobravo_females_01", modelOutfit = 1, position = vector4(1261.4425048828125, 60.98453521728515, 100.52874755859375, -91.76654052734375), playScenario = "PROP_HUMAN_SEAT_CHAIR_PORCH", useProp = true }, 
    { model = "mp_chu_kid_saintdenis_females_01", modelOutfit = 1, position = vector4(1254.9638671875, 56.84645080566406, 101.5351791381836, -87.86495208740234), playScenario = "GENERIC_SEAT_BENCH_SCENARIO", useProp = true }, 
    { model = "mp_chu_rob_benedictpoint_females_01", modelOutfit = 1, position = vector4(1256.6754150390625, 61.36361312866211, 101.53131866455078, -90.00801849365234), playScenario = "GENERIC_SEAT_BENCH_SCENARIO", useProp = true }, 
    { model = "mp_chu_rob_fortmercer_females_01", modelOutfit = 1, position = vector4(1256.697021484375, 70.73735046386719, 101.53412628173828, -87.17700958251953), playScenario = "PROP_HUMAN_SEAT_CHAIR_READING", useProp = true }, 
    { model = "mp_chu_rob_macfarlanes_females_01", modelOutfit = 1, position = vector4(1264.14990234375, 67.44654083251953, 99.51156616210938, -90.13958740234375), playScenario = "PROP_HUMAN_SEAT_CHAIR_FAN", useProp = true }, 
    { model = "mp_lbt_m6_females_01", modelOutfit = 1, position = vector4(1265.460205078125, 73.38125610351562, 99.50908660888672, -92.72445678710938), playScenario = "GENERIC_SEAT_BENCH_SCENARIO", useProp = true }, 
    { model = "mp_lbt_m6_females_01", modelOutfit = 2, position = vector4(1261.4180908203125, 69.29269409179688, 100.52853393554688, -88.88431549072266), playScenario = "PROP_HUMAN_SEAT_CHAIR_PORCH", useProp = true }, 
    { model = "mp_post_relay_females_01", modelOutfit = 1, position = vector4(1258.5263671875, 73.19890594482422, 100.5271224975586, -89.70724487304688), playScenario = "GENERIC_SEAT_BENCH_SCENARIO", useProp = true }, 
    { model = "gc_skinnertorture_males_01", modelOutfit = 2, position = vector4(1258.511962890625, 53.45299530029297, 100.52755737304688, -90.08686065673828), playScenario = "PROP_HUMAN_SEAT_CHAIR_SMOKE_ROLL", useProp = true }, 
    { model = "loansharking_horsechase1_males_01", modelOutfit = 2, position = vector4(1295.9298095703125, 88.93970489501953, 92.41193389892578, -135.1582489013672), playScenario = "WORLD_HUMAN_BROOM_WORKING" }, 
    { model = "mes_finale2_males_01", modelOutfit = 1, position = vector4(1264.1468505859375, 56.19466018676758, 99.511474609375, -87.00538635253906), playScenario = "MP_LOBBY_PROP_HUMAN_SEAT_BENCH_PORCH_DRINKING", useProp = true }, 
    { model = "mes_marston2_males_01", modelOutfit = 1, position = vector4(1262.7369384765625, 61.02362060546875, 99.51704406738281, -91.22770690917969), playScenario = "MP_LOBBY_PROP_HUMAN_SEAT_BENCH_PORCH_SMOKING", useProp = true }, 
    { model = "mes_marston6_males_01", modelOutfit = 1, position = vector4(1261.4627685546875, 61.89874267578125, 100.5277099609375, -91.4178237915039), playScenario = "GENERIC_SEAT_BENCH_SCENARIO", useProp = true }, 
    { model = "mp_asn_braithwaitemanor_males_03", modelOutfit = 2, position = vector4(1254.9765625, 57.79294967651367, 101.53965759277344, -89.66154479980469), playScenario = "PROP_HUMAN_SEAT_CHAIR_CIGAR", useProp = true }, 
    { model = "mp_asn_braithwaitemanor_males_03", modelOutfit = 1, position = vector4(1256.69775390625, 60.3443603515625, 101.5323715209961, -85.69371032714844), playScenario = "PROP_HUMAN_SEAT_CHAIR_LANGTON", useProp = true }, 
    { model = "mp_chu_kid_armadillo_males_01", modelOutfit = 1, position = vector4(1264.1495361328125, 66.57561492919922, 99.5115737915039, -86.83271026611328), playScenario = "PROP_HUMAN_SEAT_CHAIR_SMOKE_ROLL", useProp = true }, 
    { model = "mp_chu_kid_armadillo_males_01", modelOutfit = 2, position = vector4(1261.5350341796875, 70.29410552978516, 100.52848815917969, -89.6683120727539), playScenario = "GENERIC_SEAT_BENCH_SCENARIO", useProp = true }, 
    { model = "mp_chu_kid_armadillo_males_01", modelOutfit = 3, position = vector4(1265.418212890625, 72.3301773071289, 99.50994873046875, -88.34654998779297), playScenario = "MP_LOBBY_PROP_HUMAN_SEAT_BENCH_PORCH_SMOKING", useProp = true }, 
    { model = "mp_chu_kid_diabloridge_males_01", modelOutfit = 4, position = vector4(1258.52685546875, 72.12919616699219, 100.53178405761719, -85.32355499267578), playScenario = "GENERIC_SEAT_BENCH_SCENARIO", useProp = true }, 
    { model = "mp_chu_kid_emrstation_males_01", modelOutfit = 3, position = vector4(1256.76220703125, 71.78802490234375, 101.53298950195312, -84.00215911865234), playScenario = "MP_LOBBY_PROP_HUMAN_SEAT_BENCH_PORCH_SMOKING", useProp = true }, 
    { model = "mp_chu_kid_emrstation_males_01", modelOutfit = 2, position = vector4(1259.948486328125, 76.04277038574219, 100.5259017944336, -90.2398910522461), playScenario = "GENERIC_SEAT_BENCH_SCENARIO", useProp = true }, 
    { model = "mp_chu_kid_lagras_males_01", modelOutfit = 4, position = vector4(1268.8746337890625, 46.1840705871582, 98.53022003173828, 158), playScenario = "WORLD_HUMAN_SMOKE" },
    { model = "mp_chu_kid_greatplains_males_01", modelOutfit = 3, position = vector4(1268.1416015625, 45.28650283813476, 98.53022003173828, -26.68305015563965), playScenario = "WORLD_HUMAN_DRINK_CHAMPAGNE" },
    { model = "mp_chu_kid_greatplains_males_01", modelOutfit = 1, position = vector4(1271.53271484375, 16.05330085754394, 98.53022003173828, -86.15094757080078), playScenario = "WORLD_HUMAN_COFFEE_DRINK" },
    { model = "cs_rhodeputy_02", modelOutfit = 1, position = vector4(1282.6385498046875, 67.05545043945312, 92.4120864868164, -2.44232821464538), playScenario = "WORLD_HUMAN_STAND_WAITING" },
    { model = "cs_strdeputy_02", modelOutfit = 1, position = vector4(1283.6259765625, -11.62884712219238, 92.41220092773438, -87.80347442626953), playScenario = "WORLD_HUMAN_STAND_WAITING" },
    { model = "a_m_m_nbxdockworkers_01", modelOutfit = 25, position = vector4(1265.3544, -25.7816, 92.4122, 195.0955), playScenario = "WORLD_HUMAN_CLIPBOARD" },
    { model = "a_m_m_nbxdockworkers_01", modelOutfit = 1, position = vector4(1293.884521484375, -23.33427429199218, 92.41220092773438, -15), playScenario = "WORLD_HUMAN_BROOM_WORKING" },
    { model = "a_m_m_nbxdockworkers_01", modelOutfit = 2, position = vector4(1276.0216064453125, 25.77239227294922, 92.4120864868164, -52.59650039672851), playScenario = "SC_WORLD_HUMAN_STRAW_BROOM_WORKING" },
    { model = "cs_braithwaitemaid", modelOutfit = 1, position = vector4(1258.683349609375, 24.46913337707519, 98.53022003173828, -38.6227912902832), playScenario = "WORLD_HUMAN_STAND_WAITING" },
    { model = "re_fundraiser_females_01", modelOutfit = 1, position = vector4(1268.6661376953125, 32.61477279663086, 98.53022003173828, -51.91968536376953), playScenario = "WORLD_HUMAN_DRINK_CHAMPAGNE" },
    { model = "re_coachrobbery_females_01", modelOutfit = 1, position = vector4(1268.8133544921875, 33.36675643920898, 98.53022003173828, -109.93364715576172), playScenario = "WORLD_HUMAN_DRINK_CHAMPAGNE" },
    { model = "mp_chu_rob_paintedsky_males_01", modelOutfit = 4, position = vector4(1290.48291015625, 25.03821754455566, 92.4120864868164, -85.43509674072266), playScenario = "WORLD_HUMAN_STAND_WAITING" },
    { model = "mp_chu_rob_paintedsky_males_01", modelOutfit = 1, position = vector4(1291.64892578125, -2.51547789573669, 92.41213989257812, -65.541015625), playScenario = "WORLD_HUMAN_SMOKE_CIGAR" },
    { model = "mp_u_m_m_fos_dockworker_01", modelOutfit = 1, position = vector4(1272.5537109375, 78.60514068603516, 98.53022003173828, -32.15876007080078), playScenario = "SC_WORLD_HUMAN_STRAW_BROOM_WORKING" },
    { model = "s_m_o_cktworker_01", modelOutfit = 3, position = vector4(1290.2252197265625, 45.9311294555664, 92.4120864868164, -85.765625), playScenario = "WORLD_HUMAN_BROOM_RESTING" },
    { model = "cs_captainmonroe", modelOutfit = 1, position = vector4(1255.9517822265625, -11.3969612121582, 101.53541564941406, -108.99999237060547), playScenario = "WORLD_HUMAN_DRINK_CHAMPAGNE" },
    { model = "mp_outlaw2_males_01", modelOutfit = 1, position = vector4(1255.9146728515625, -12.34217643737793, 101.53584289550781, -57.99999618530273), playScenario = "WORLD_HUMAN_DRINK_CHAMPAGNE" },
    { model = "mp_re_rivalcollector_males_01", modelOutfit = 3, position = vector4(1272.7783203125, -2.69000005722045, 98.53036499023438, 1.703857421875), playScenario = "WORLD_HUMAN_LEAN_BARREL" },
    { model = "u_m_o_blwbartender_01", modelOutfit = 3, position = vector4(1253.0650634765625, 73.54624938964844, 92.79971313476562, 88.8317642211914), playScenario = "WORLD_HUMAN_BARTENDER_CLEAN_GLASS" },
    { model = "mes_marston6_females_01", modelOutfit = 1, position = vector4(1261.1082763671875, 66.20881652832031, 92.79290771484375, -175.73573303222656), playScenario = "WORLD_HUMAN_LEAN_BACK_WALL_SMOKING" },
    { model = "mp_u_f_m_nat_worker_01", modelOutfit = 1, position = vector4(1269.919677734375, 65.12875366210938, 92.79036712646484, 76.76567840576172), playScenario = "SC_WORLD_HUMAN_STRAW_BROOM_WORKING" },
    { model = "mp_u_m_m_lom_rhd_smithassistant_01", modelOutfit = 1, position = vector4(1253.3435, 5.4389, 92.7703, 10.7039), playScenario = "PROP_HUMAN_GRINDSTONE", useProp = true },
    { model = "msp_mudtown3b_females_01", modelOutfit = 6, position = vector4(1290.815673828125, 14.79636764526367, 92.4120864868164, -86.23968505859375), playScenario = "WORLD_HUMAN_FAN" }
}

```
:::

### Doorhashes
| Door                      | Hash
|---------------------------|----------------------------------------------------------------------------------|
| Door                      | `wwww`