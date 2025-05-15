# 🎭 Theater & Cinema
Documentation relating to the spooni_showtime.

:::tabs
== PREVIEW
<iframe width="560" height="315" src="https://www.youtube.com/embed/L4-URtw1zWQ?si=BczKKxxKtBAkQs8b" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
== BUY
[Buy the script](https://spooni-mapping.tebex.io/package/6825079)
:::

## 1. Installation
spooni_showtime works Standalone. 

To install spooni_showtime:
- Download the resource
  - On [Github](https://github.com/Spooni-Development/spooni_showtime)
- Drag and drop the resource into your resources folder
  - `spooni_showtime`
- Add this ensure in your server.cfg
  ```
    ensure spooni_showtime
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

Config.Debug = false

Config.RandomTransitions = false
Config.ticketCost = 5 --default value when not customized in a specific show
Config.Shows = Globals.Shows
Config.Projections = Globals.Projections
Config.Movies = Globals.Movies

Config.ShowStartDelay = 120 -- delay in seconds before the show starts aftert someone bought a ticket


Config.Curtains = { --Show Locations
	["SAINTDENIS"] = {
	  ownedBy        = "cinema", -- job that owns the theater (only needed when Config.Society is enabled or oyu want to use stop ticket sales)
	  stopTicketsControl = 0x018C47CF, -- cant be same as ticketVendor
	  animscene = nil,
	  object    = nil,
	  coords    = vector3(2546.522, -1307.835, 48.26664),
	  curtainPoints = {
		{
		  id         = "SAINT_DENIS_CURTAIN_1",
		  pos        = vector3(2550.2897, -1307.112060, 49.2147),
		  radius     = 2.0,
		},
		{
		  id         = "SAINT_DENIS_CURTAIN_2",
		  pos        = vector3(2540.8730, -1312.1302, 49.2168),
		  radius     = 2.0,
		},
	  },
	  state    = "CLOSED",
	  prompts  = {},
  
	  jobMenus = {
		{
		  id      = "SAINT_DENIS_MENU_1",
		  pos     = vector3(2553.6218, -1292.314, 49.214),
		  control = 0x018C47CF, -- default “E”
		  radius  = 2.0,
		  jobs    = { "unemployed", "cinema" },        -- job who can see the menu
		},
	  },
	  ticketVendors = {
		{
		  id           = "SAINT_DENIS_TICKET_1",
		  model        = `s_m_m_sdticketseller_01`,
		  promptPos    = vector3(2542.13, -1282.52, 48.22),
		  promptRadius = 2.0,
		  spawnRadius  = 15.0,
		  control      = 0x760A9C6F,                -- default “G”
		  holdType     = "hold",                    -- hold prompt
		  timeEvent    = "MEDIUM_TIMED_EVENT",      -- timed event
		  scenario     = `WORLD_HUMAN_WAITING_IMPATIENT`,
		  heading      = 30.0,
		  sound        = 'cinematicket.mp3',
		  soundDur     = 4500,
		  soundVol     = 0.5,
		},
		-- additional vendors here
	  },
	},
	-- weitere Zonen…
}

Config.Backgrounds = { --setup all selectable Backgrounds in the job menu
	["new_theater_cancan"] = "Cancan",
	["new_theater_fireperformer"] = "Fire Performer",
	["new_theater_snakedancer"] = "Snake Dancer",
	["new_theater_magician"] = "Magician",
	["new_theater_strongwoman"] = "Strong Woman",
	["new_theater_theOddFellows"] = "The Odd Fellows",
}

Config.Cinemas = {
	["SAINTDENIS"] = {
		ticketPrice = 5,
		vendor = {
			model        = `s_m_m_sdticketseller_01`,
			promptPos    = vector3(2686.8310546875, -1362.1712646484375, 48.21417617),
			promptRadius = 2.0,
			spawnRadius  = 15.0,
			control      = 0x760A9C6F,                -- default “G”
			holdType     = "hold",                    -- hold prompt
			timeEvent    = "MEDIUM_TIMED_EVENT",      -- timed event
			scenario     = `WORLD_HUMAN_WAITING_IMPATIENT`,
			heading      = 129.86,
			sound        = 'cinematicket.mp3',
			soundDur     = 4500,
			soundVol     = 0.5,
		}
	},
	["VALENTINE"] = {
		ticketPrice = 5,
		vendor = {
			model        = `am_valentinedoctors_females_01`,
			promptPos    = vector3(-355.19, 705.08, 115.94),
			promptRadius = 2.5,
			spawnRadius  = 15.0,
			control      = 0x760A9C6F,                -- default “G”
			holdType     = "hold",                    -- hold prompt
			timeEvent    = "MEDIUM_TIMED_EVENT",      -- timed event
			scenario     = `WORLD_HUMAN_WAITING_IMPATIENT`,
			heading      = 331.7,
			sound        = 'cinematicket.mp3',
			soundDur     = 4500,
			soundVol     = 0.5,
		}
	},
	["BLACKWATER"] = {
		ticketPrice = 5,
		vendor = {
			model        = `s_m_m_sdticketseller_01`,
			promptPos    = vector3(-789.796, -1362.61, 43.822),
			promptRadius = 2.0,
			spawnRadius  = 15.0,
			control      = 0x760A9C6F,                -- default “G”
			holdType     = "hold",                    -- hold prompt
			timeEvent    = "MEDIUM_TIMED_EVENT",      -- timed event
			scenario     = `WORLD_HUMAN_WAITING_IMPATIENT`,
			heading      = 269.04,
			sound        = 'cinematicket.mp3',
			soundDur     = 4500,
			soundVol     = 0.5,
		}
	},
}

Config.Society = 'mega_companies' -- Options: 'dl_society', 'mega_companies', 'syn_society', 'custom' or false
Config.AddMoneyToSociety = function(society, money)
    if society ~= nil and money > 0 then
        if Config.Society == 'dl_society' then
            exports.dl_society:addSocietyMoney(society, money)
        elseif Config.Society == 'mega_companies' then
            exports["mega_companies"]:api().addMoney(society, money)
        elseif Config.Society == 'syn_society' then
            local ledgerresult = exports.oxmysql:fetchSync('SELECT ledger FROM society_ledger WHERE job = ?', {society})
            if ledgerresult and ledgerresult[1] and ledgerresult[1].ledger then
                local currentLedger = ledgerresult[1].ledger
                local newLedger = currentLedger + money
                exports.oxmysql:execute('UPDATE society_ledger SET ledger = ? WHERE job = ?', {newLedger, society})
            else
                Debug("No Ledger found for Job '" .. society .. "'!")
            end
        elseif Config.Society == 'custom' then
            -- Your money to society logic here
            Debug(society, money)
        else
            Debug("^8Warning:^4 Invalid society configuration. Found '" .. tostring(Config.Society) .. "'!^0")
        end
    end
end


Config.Language = {
	["cinema"] = "Cinema",
	["cinema_job"] = "Job-Menu",
	["cinema_ticket"] = "Ticket",
	["cinema_ticket_desc"] = "You have bought a ticket for the cinema.",
	["cinema_ticket_error"] = "You don't have enough money to buy a ticket.",
	["cinema_ticket_buy_stopped"] = "The Owner stopped the sale for now.",
	["cinema_show_start_delay"] = "The show will start in %s seconds.",


	["opencurtain"] = "Open curtain",
	["closecurtain"] = "Close curtain",
	["showAlreadyRunning"] = "A Show is already running",

	["cinema_menu"] = "Cinema Menu",
	["ticket_menu"] = "Ticket Menu",
	["ticket_buy"] = "Buy Ticket",
	["cinema_showtime"] = "Showtime",
	["cinema_showtime_desc"] = "Select the showtime you want to watch.",
	["cinema_showtime_select"] = "Select Show",
	["cinema_showtime_select_desc"] = "Select the showtime you want to watch.",
	["cinema_showtime_select_success"] = "You have selected the showtime: %s",
	["cinema_showtime_select_error"] = "You have not selected a showtime.",
	["cinema_showtime_select_error2"] = "You have not selected a show.",
	["cinema_show_start"] = "Start a Show",
	["cinema_show"] = "Show",
	["cinema_actors"] = "Actors for show: ",
	["cinema_toggle_tickets"] = "Toggle Ticket Sale",
	["cinema_stopped_tickets"] = "You stopped the ticket sale",
	["cinema_start_tickets"] = "You started the ticket sale",
	["cinema_ticket_menu"] = "Ticket Menu",
	["cinema_select_movie"] = "Select Movie",
	["cinema_background_select"] = "Select Background",



	["confirm"] = "Confirm",
	["cancel"] = "Cancel",
	["yes"] = "Yes",
	["no"] = "No",

}


Config.Soundsets = {
	["Curtain_Open_Music"] = "3160317806_action",
	["Curtain_Opens_Music"] = "2245181467_action",
	["Escape_Noose_Curtain_Music"] = "4224921010_action"
}


Config.CreatedEntries = {} --do not change
```
:::

:::details Config2.lua
```lua
Globals = {}

Globals.Shows = {
	["BIGBAND_A"] = {
		animscene = { "script@shows@band_play@p1_and_p2", 2, "PL_P1", false, true },
		curtain = "SAINTDENIS",
		endAtProgress = 0.95,
		ticketCost = 5,
		entities = {
			{ fields = { "CS_BANDSINGER", 0 }, model = `CS_BANDSINGER` },
			{ fields = { "CS_BANDBASSIST", 0 }, model = `CS_BANDBASSIST` },
			{ fields = { "CS_BANDPIANIST", 0 }, model = `CS_BANDPIANIST` },
			{ fields = { "CS_BANDDRUMMER", 0 }, model = `CS_BANDDRUMMER` },
			{ fields = { "p_benchpiano02x", 0 }, model = `P_BENCHPIANO02X` },
			{ fields = { "p_benchPiano02x^1", 0 }, model = `P_BENCHPIANO02X` },
			{ fields = { "p_cs_contrabass01x", 0 }, model = `P_CS_CONTRABASS01X` },
			{ fields = { "p_cs_drumkit01x", 0 }, model = `P_CS_DRUMKIT01X` },
			{ fields = { "p_drumstick01x", 0 }, model = `P_DRUMSTICK01X` },
			{ fields = { "p_drumstick01x^1", 0 }, model = `P_DRUMSTICK01X` },
			{ fields = { "p_piano01x", 0 }, model = `P_NBXPIANO01X` }
		},
		background = "new_theater_cancan" --you can add a background here or leave it empty // Available Backgrounds see Config.Backgrounds
	},
	["BIGBAND_B"] = {
		animscene = { "script@shows@band_play@p1_and_p2", 2, "PL_P2", false, true },
		curtain = "SAINTDENIS",
		endAtProgress = 0.95,
		ticketCost = 5,
		entities = {
			{ fields = { "CS_BANDSINGER", 0 }, model = `CS_BANDSINGER` },
			{ fields = { "CS_BANDBASSIST", 0 }, model = `CS_BANDBASSIST` },
			{ fields = { "CS_BANDPIANIST", 0 }, model = `CS_BANDPIANIST` },
			{ fields = { "CS_BANDDRUMMER", 0 }, model = `CS_BANDDRUMMER` },
			{ fields = { "p_benchpiano02x", 0 }, model = `P_BENCHPIANO02X` },
			{ fields = { "p_benchPiano02x^1", 0 }, model = `P_BENCHPIANO02X` },
			{ fields = { "p_cs_contrabass01x", 0 }, model = `P_CS_CONTRABASS01X` },
			{ fields = { "p_cs_drumkit01x", 0 }, model = `P_CS_DRUMKIT01X` },
			{ fields = { "p_drumstick01x", 0 }, model = `P_DRUMSTICK01X` },
			{ fields = { "p_drumstick01x^1", 0 }, model = `P_DRUMSTICK01X` },
			{ fields = { "p_piano01x", 0 }, model = `P_NBXPIANO01X` }
		}
	},
	["BULLETCATCH"] = {
		animscene = { "script@shows@bulletcatcher@action", 2, "PL_A_Performance", false, true },
		curtain = "SAINTDENIS",
		ticketCost = 5,
		entities = {
			{ fields = { "Benjamin", 0 }, model = `CS_ESCAPEARTIST`, flags = { 263, 245, 19, 18, 17, 16, 6 }, ragdollFlag = 524369, ragdoll = false },
			{ fields = { "Assistant", 0 }, model = `CS_ESCAPEARTISTASSISTANT` },
			{ fields = { "BUCKET", 0 }, model = `P_BUCKET03X` },
			{ fields = { "Stool", 0 }, model = `P_BARSTOOL01X` },
			{ fields = { "BOTTLE", 0 }, model = `P_BOTTLEBEER01X` },
			{ fields = { "Gun", 0 }, model = "WEAPON_REVOLVER_CATTLEMAN" },

			{ fields = { "Crowd_Member", 0 }, model = `A_M_O_BlWUpperClass_01` },
			{ fields = { "Crowd_Member_Gun", 0 }, model = "WEAPON_REVOLVER_CATTLEMAN" }
		},
		sequence = {
			{ "PL_E_Volunteer_Challenge", "PL_E_Volunteer_Challenge_ALT" }
		} 

		--[[ Player sequence
			"PL_Player_Volunteered"
			{ "PL_Player_Shot_Stomach", "PL_Player_Shot_Magician" } --// here we can use GetPedLastDamageBone to identify if player hit Benjamin in head
		]]
	},
	["CANCAN_A"] = {
		animscene = { "script@shows@cancan_dance@CanCanDanceP1", 2, "PB_MAIN", false, true },
		position = vector3(2546.41, -1303.55, 46.9),
		rotation = vector3(0.0, 0.0, 40.0),
		curtain = "SAINTDENIS",
		ticketCost = 5,
		entities = {
			{ fields = { "CS_CANCAN_01", 0 }, model = `CS_CANCAN_01` },
			{ fields = { "CS_CANCAN_02", 0 }, model = `CS_CANCAN_02` },
			{ fields = { "CS_CANCAN_03", 0 }, model = `CS_CANCAN_03` },
			{ fields = { "CS_CANCAN_04", 0 }, model = `CS_CANCAN_04` },
			{ fields = { "CS_CANCANMAN_01", 0 }, model = `CS_CANCANMAN_01` }
		}
	},
	["CANCAN_B"] = {
		animscene = { "script@shows@cancan_dance@CanCanDanceP2", 2, 0, false, true },
		position = vector3(2546.41, -1303.55, 46.9),
		rotation = vector3(0.0, 0.0, 40.0),
		curtain = "SAINTDENIS",
		ticketCost = 5,
		entities = {
			{ fields = { "CS_CANCAN_01", 0 }, model = `CS_CANCAN_01` },
			{ fields = { "CS_CANCAN_02", 0 }, model = `CS_CANCAN_02` },
			{ fields = { "CS_CANCAN_03", 0 }, model = `CS_CANCAN_03` },
			{ fields = { "CS_CANCAN_04", 0 }, model = `CS_CANCAN_04` },
			{ fields = { "CS_CANCANMAN_01", 0 }, model = `CS_CANCANMAN_01` }
		}
	},
	["ESCAPEARTIST"] = {
		animscene = { "script@shows@escape_artist@act2_p1@action", 2, "PL_A_Performance", false, true },
		curtain = "SAINTDENIS",
		ticketCost = 5,
		entities = {
			{ fields = { "Benjamin", 0 }, model = `CS_ESCAPEARTIST` },
			{ fields = { "ASSISTANT_", 0 }, model = `CS_ESCAPEARTISTASSISTANT` },
			{ fields = { "BOX", 0 }, model = `S_ESCAPEBOX01X` },
			{ fields = { "Knife", 0 }, model = `W_MELEE_KNIFE05` },
			{ fields = { "mask", 0 }, model = `P_CS_ESCAPEARTIST_MASK` }
		},
		sequence = {
			{ "PL_C_Reappears_Among_Crowd", "PL_C_Reappears_Among_Crowd_AI" },
			"PL_E_Outro"
		}
	},
	["ESCAPENOOSE"] = { 
		animscene = { "script@shows@escape_noose@act3_p1@action", 2, "PL_A_Performance", false, true },
		curtain = "SAINTDENIS",
		endAtProgress = 0.65,
		ticketCost = 5,
		entities = {
			{ fields = { "BENJAMIN_NO_JACKET", 0 }, model = `CS_ESCAPEARTIST` },
			{ fields = { "Assistant", 0 }, model = `CS_ESCAPEARTISTASSISTANT` },
			{ fields = { "NOOSE_STAND", 0 }, model = `S_NOOSESTAND01X` },
			{ fields = { "JACKET", 0 }, model = `P_CS_STRAIGHTJACKET` },
			{ fields = { "DIVIDER", 0 }, model = `P_DIVIDER01X` },
			{ fields = { "Noose", 0 }, model = `P_CS_NOOSE01XB` }
		},
		sequence = {
			"PL_B_Trying_To_Escape",
			"PL_C_Choking",
			"PL_E_Shoot_Rope"
		}
	},
	["FIREBREATH"] = {
		animscene = { "script@shows@fire_breather@act2_p1@action", 2, "PL_Dance", false, true },
		curtain = "SAINTDENIS",
		ticketCost = 5,
		entities = {
			{ fields = { "DANCER", 0 }, model = `CS_FIRE_BREATHER` },
			{ fields = { "BOTTLE", 0 }, model = `P_BOTTLE03X` },
			{ fields = { "STICK_0_", 0 }, model = `S_FIRESTICK01X` },
			{ fields = { "STICK_1_", 0 }, model = `S_FIRESTICK01X` },
			{ fields = { "TABLE", 0 }, model = `P_TABLE_SD_THEATER01X` },
			{ fields = { "lantern", 0 }, model = `P_LIGHT_SD_THEATER01X` }
		},
		sequence = {
			{ "Pl_BreathWin", "Pl_BreathFail" }
		}
	},
	["FIREDANCE_A"] = {
		animscene = { "script@shows@fire_performer@act1_p1@action", 2, 0, false, true },
		curtain = "SAINTDENIS",
		ticketCost = 5,
		entities = {
			{ fields = { "PERFORMER", 0 }, model = `CS_FIRE_BREATHER` },
			{ fields = { "BOTTLE", 0 }, model = `P_BOTTLE03X` },
			{ fields = { "lantern", 0 }, model = `P_LIGHT_SD_THEATER01X` },
			{ fields = { "TABLE", 0 }, model = `P_TABLE_SD_THEATER01X` },
			{ fields = { "BATON", 0 }, model = `S_FIREBATON01X` }
		}
	},
	["FIREDANCE_B"] = {
		animscene = { "script@shows@fire_dancer@act3_p1@action", 2, 0, false, true },
		curtain = "SAINTDENIS",
		ticketCost = 5,
		entities = {
			{ fields = { "DANCER", 0 }, model = `CS_FIRE_BREATHER` },
			{ fields = { "LOTUS_0", 0 }, model = `S_LOTUSFIREPALM_01X` },
			{ fields = { "LOTUS_1", 0 }, model = `S_LOTUSFIREPALM_01X` },
			{ fields = { "LANTERN", 0 }, model = `P_LIGHT_SD_THEATER01X` }
		}
	},
	["FLEXFIGHT"] = {
		animscene = { "script@shows@flex_fight@act2@action", 2, "pbl_FightIntro", false, true },
		curtain = "SAINTDENIS",
		ticketCost = 5,
		entities = {
			{ fields = { "PERFORMER", 0 }, model = `CS_FEATSOFSTRENGTH` },
			{ fields = { "Stool", 0 }, model = `P_BARSTOOL01X` },
			{ fields = { "Chair", 0 }, model = `P_THEATERCHAIR01B01X` },
			{ fields = { "Chair^1", 0 }, model = `P_THEATERCHAIR01B01X` },

			{ fields = { "CrowdMember", 0 }, model = `A_M_O_BlWUpperClass_01` }
		},
		sequence = {
			{ "pbl_CrowdChallenge_P2", "pbl_CrowdChallenge_P1" }
		}
	},
	["ODDFELLOWS"] = {
		animscene = { "script@rcm@roddf@ig@roddf_s3@roddf_s3", 2, "pl_Performance", false, true },
		curtain = "SAINTDENIS",
		ticketCost = 5,
		entities = {
			{ fields = { "CS_GENSTORYFEMALE", 0 }, model = `CS_MISSMARJORIE` },
			{ fields = { "CS_ODDFELLOWSPINHEAD", 0 }, model = `CS_ODDFELLOWSPINHEAD` },
			{ fields = { "CS_MAGNIFICO", 1 }, model = `CS_MAGNIFICO` },
			{ fields = { "p_cs_bullwhip01x", 0 }, model = `P_CS_BULLWHIP01X` },

			{ fields = { "CS_GENSTORYMALE", 0 }, model = `CS_MICAHBELL` }
		}
	},
	["SNAKEDANCE_A"] = {
		animscene = { "script@shows@snake_dancer@act1_p1@action", 2, "PL_DANCE", false, true },
		curtain = "SAINTDENIS",
		ticketCost = 5,
		entities = {
			{ fields = { "DANCER", 0 }, model = `CS_SWORDDANCER` },
			{ fields = { "SNAKE", 0 }, model = `A_C_SNAKEREDBOA10FT_01` }
		},
		sequence = {
			{ "PL_KISSWIN", "PL_KISSFAIL" }
		}
	},
	["SNAKEDANCE_B"] = {
		animscene = { "script@shows@snake_dancer@act2_p1@action", 2, "PL_DANCE", false, true },
		curtain = "SAINTDENIS",
		ticketCost = 5,
		entities = {
			{ fields = { "DANCER", 0 }, model = `CS_SWORDDANCER` },
			{ fields = { "SNAKE", 0 }, model = `A_C_SNAKEREDBOA10FT_01` }
		},
		sequence = {
			{ "PL_KISSWIN", "PL_KISSFAIL" }
		}
	},
	["STRONGWOMAN"] = {
		animscene = { "script@shows@feats_of_strength@act1@action", 2, "Pbl_Intro", false, true },
		curtain = "SAINTDENIS",
		ticketCost = 5,
		entities = {
			{ fields = { "Female", 0 }, model = `CS_FEATSOFSTRENGTH` },
			{ fields = { "male", 0 }, model = `U_M_M_SDSTRONGWOMANASSISTANT_01` },
			{ fields = { "BAR", 0 }, model = `S_RE_STRONGBAR01X` },
			{ fields = { "CHEST", 0 }, model = `P_SDTHEATER_CHEST01X` },
			{ fields = { "HAMMER", 0 }, model = `P_SLEDGEHAMMER01X` },
			{ fields = { "Block", 0 }, model = `S_CINDERBLOCK01X` },
			{ fields = { "BOOK", 0 }, model = `S_RIPPABLEBOOK01X` }
		},
		sequence = {
			{ "PBL_SUCCESS", "pbl_Fail" }
		}
	},
	["SWORDDANCE"] = {
		animscene = { "script@shows@sword_dancer@act3_p1@action", 2, "s_Performance", false, true },
		curtain = "SAINTDENIS",
		ticketCost = 5,
		entities = {
			{ fields = { "DANCER", 0 }, model = `CS_SWORDDANCER` },
			{ fields = { "Sword", 0 }, model = `P_SWORD01X` }
		},
		sequence = {
			{ "s_Breakout_DownStage", "s_Breakout_CenterStage" }
		}
	},
	["CANCAN_GANG"] = {
		animscene = { "script@shows@cancan_dance@CanCanDanceP1", 2, "PB_MAIN", false, true },
		position = vector3(2546.41, -1303.55, 46.9),
		rotation = vector3(0.0, 0.0, 40.0),
		curtain = "SAINTDENIS",
		ticketCost = 5,
		entities = {
			{ fields = { "CS_CANCAN_01", 0 }, model = `cs_javierescuella` },
			{ fields = { "CS_CANCAN_02", 0 }, model = `cs_micahbell` },
			{ fields = { "CS_CANCAN_03", 0 }, model = `cs_johnmarston` },
			{ fields = { "CS_CANCAN_04", 0 }, model = `player_zero` },
			{ fields = { "CS_CANCANMAN_01", 0 }, model = `cs_dutch` }
		}
	},
	["ODDFELLOWS_SPECIAL"] = {
		animscene = { "script@rcm@roddf@ig@roddf_s3@roddf_s3", 2, "pl_Performance", false, true },
		curtain = "SAINTDENIS",
		ticketCost = 5,
		entities = {
			{ fields = { "CS_GENSTORYFEMALE", 0 }, model = `CS_MISSMARJORIE` },
			{ fields = { "CS_ODDFELLOWSPINHEAD", 0 }, model = `A_C_BUFFALO_01` },
			{ fields = { "CS_MAGNIFICO", 0 }, model = `CS_MAGNIFICO` },
			{ fields = { "p_cs_bullwhip01x", 0 }, model = `P_CS_BULLWHIP01X` },

			{ fields = { "CS_GENSTORYMALE", 0 }, model = `CS_MICAHBELL` }
		}
	},
	["FIREDANCE_C"] = {
		animscene = { "script@shows@fire_dancer@act3_p1@action", 2, 0, false, true },
		curtain = "SAINTDENIS",
		ticketCost = 5,
		entities = {
			{ fields = { "DANCER", 0 }, model = `CS_FIRE_BREATHER` },
			{ fields = { "LOTUS_0", 0 }, model = `S_LOTUSFIREPALM_01X` },
			{ fields = { "LOTUS_1", 0 }, model = `S_LOTUSFIREPALM_01X` },
			{ fields = { "LANTERN", 0 }, model = `P_LIGHT_SD_THEATER01X` }
		}
	},


	["MOVIE"] = {
		animscene = { "( ͡° ͜ʖ ͡°)", 2, "pl_action", false, true },
		entities = {
			{ fields = { "PROJECTIONIST", 0 }, model = `S_M_M_MAGICLANTERN_01` },
			{ fields = { "SLIDE0", 0 }, model = `P_MAGICLANTERNSLIDE01X` },
			{ fields = { "SLIDE1", 0 }, model = `P_MAGICLANTERNSLIDE01X` },
			{ fields = { "SLIDE2", 0 }, model = `P_MAGICLANTERNSLIDE01X` },
			{ fields = { "SLIDE3", 0 }, model = `P_MAGICLANTERNSLIDE01X` },
			{ fields = { "SLIDE4", 0 }, model = `P_MAGICLANTERNSLIDE01X` }
		}
	}
}

Globals.Movies = {
	["BEAR"] = {
		clip = "PL_MLAN_BEAR",
		audio = "ML_Bear_Story_Soundset",
		animscene = "script@shows@magic_lantern@ig2_projectionist@thebear"
	},
	["JOSIAH"] = {
		clip = "PL_MLAN_JOSIAH_BLACKWATER",
		audio = "ML_Blackwater_Soundset",
		animscene = "script@shows@magic_lantern@ig2_projectionist@legendofblackwater"
	},
	["SECRET_OF_MANFLIGHT"] = {
		clip = "PL_MLAN_SECRET_OF_MANFLIGHT",
		audio = "ML_Man_Flight_Soundset",
		animscene = "script@shows@magic_lantern@ig2_projectionist@manflight"
	},
	["SAVIORS_AND_SAVAGES"] = {
		clip = "PL_MLAN_SAVIORS_AND_SAVAGES",
		audio = "ML_See_The_World_Soundset",
		animscene = "script@shows@magic_lantern@ig2_projectionist@saviorsandsavages"
	},
	["GHOST_STORY"] = {
		clip = "PL_MLAN_GHOST_STORY",
		audio = "ML_Ghost_Story_Soundset",
		animscene = "script@shows@magic_lantern@ig2_projectionist@ghastlyserenade"
	},
	["DIRECT_CURRENT_DAMNATION"] = {
		clip = "PL_TOON_DIRECT_CURRENT_DAMNATION",
		audio = "Cartoon_Direct_Current_Soundset"
	},
	["FARMERS_DAUGHTER"] = {
		clip = "PL_TOON_FARMERS_DAUGHTER",
		audio = "Cartoon_Farmers_Daughter_Soundset"
	},
	["MODERN_MEDICINE"] = {
		clip = "PL_TOON_MODERN_MEDICINE",
		audio = "Cartoon_Modern_Medicine_Soundset"
	},
	["WORLDS_STRONGEST_MAN"] = {
		clip = "PL_TOON_WORLDS_STRONGEST_MAN",
		audio = "Cartoon_Strongest_Man_Soundset"
	},
	["SKETCHING_FOR_SWEETHEART"] = {
		clip = "PL_TOON_SKETCHING_FOR_SWEETHEART",
		audio = "Cartoon_Sketching_For_Sweetheart_Soundset"
	},
	["BEAR_TENT"] = {
		clip = "PL_MLAN_BEAR",
		audio = "ML_Bear_Story_Soundset_Tent",
		animscene = "script@shows@magic_lantern@ig2_projectionist@thebear"
	},
	["JOSIAH_TENT"] = {
		clip = "PL_MLAN_JOSIAH_BLACKWATER",
		audio = "ML_Blackwater_Soundset_Tent",
		animscene = "script@shows@magic_lantern@ig2_projectionist@legendofblackwater"
	},
	["SECRET_OF_MANFLIGHT_TENT"] = {
		clip = "PL_MLAN_SECRET_OF_MANFLIGHT",
		audio = "ML_Man_Flight_Soundset_Tent",
		animscene = "script@shows@magic_lantern@ig2_projectionist@manflight"
	},
	["SAVIORS_AND_SAVAGES_TENT"] = {
		clip = "PL_MLAN_SAVIORS_AND_SAVAGES",
		audio = "ML_See_The_World_Soundset_Tent",
		animscene = "script@shows@magic_lantern@ig2_projectionist@saviorsandsavages"
	},
	["GHOST_STORY_TENT"] = {
		clip = "PL_MLAN_GHOST_STORY",
		audio = "ML_Ghost_Story_Soundset_Tent",
		animscene = "script@shows@magic_lantern@ig2_projectionist@ghastlyserenade"
	}
}

Globals.Projections = {
	["SAINTDENIS"] = {
		originPos = vector3(2688.55, -1361.38, 54.24),
		originRot = vector3(7.1, 0.0, 145.6),
		radius = 15.0,

		renderTarget = "bla_theater",
		targetModel = `SCRIPT_RT_VAL_MAGICLANTERN`,
		screenPos = vector3(2702.49, -1348.78, 49.61),
		screenRot = vector3(0.0, 0.0, 130.1),
		renderX = 0.5,
		renderY = 0.5,
		renderScaleX = 1.0,
		renderScaleY = 1.0,
		audiencePos = vector3(2697.2, -1353.5, 49.01),
		volume = 6.0
	},
	["VALENTINE"] = {
		originPos = vector3(-350.055, 701.392, 117.679),
		originRot = vector3(0.0, 0.0, 30.0),
		radius = 10.0,

		renderTarget = "bla_theater",
		targetModel = `SCRIPT_RT_VAL_MAGICLANTERN`,
		screenPos = vector3(-346.890, 692.441, 118.300),
		screenRot = vector3(0.0, 0.0, 14.60),
		renderX = 0.5,
		renderY = 0.5,
		renderScaleX = 1.0,
		renderScaleY = 1.0,
		audiencePos = vector3(-348.45, 697.24, 118.46),
		volume = 1.5
	},
	["BLACKWATER"] = {
		originPos = vector3(-772.289, -1362.650, 45.319),
		originRot = vector3(0.0, 0.0, 90.0),
		radius = 15.0,

		renderTarget = "bla_theater",
		targetModel = `SCRIPT_RT_BLA_THEATER`,
		screenPos = vector3(-772.29, -1362.65, 45.32),
		screenRot = vector3(0.0, 0.0, 90.0),
		renderX = 0.5,
		renderY = 0.5,
		renderScaleX = 1.0,
		renderScaleY = 1.0,
		audiencePos = vector3(-778.2, -1362.5, 44.75),
		volume = 1.5
	}
}
```
:::