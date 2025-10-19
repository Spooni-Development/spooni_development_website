---
title: Hotel Script
description: SPOONI Hotel script for RedM - Complete hotel management system with room rentals, storage, and closet features. Compatible with VORP, RSG, and RPX frameworks. Create immersive hotel experiences for your RDR2 roleplay server.
head:
  - - meta
    - name: keywords
      content: RedM hotel script, hotel management, room rental system, VORP hotel, RSG hotel, RPX hotel, RedM storage, closet system, spooni hotel, RedM accommodation
  - - meta
    - property: og:image
      content: https://spooni.pages.dev/icons/logo.svg
  - - meta
    - property: og:url
      content: https://spooni.pages.dev/doc_scripts/spooni/spooni_hotel
---

# 🏨 Hotel
Documentation relating to the spooni_hotel.

:::tabs
== INFO
<iframe width="560" height="315" src="https://www.youtube.com/embed/eNOMcOatqvM?si=VLZ4LsspunJoxdXr" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

<a href="https://spooni-mapping.tebex.io/package/6415043" class="button-buy">🛒 Buy Now</a>
:::

## 1. Installation
spooni_hotel works only with VORP, RSG & RPX. 

To install spooni_hotel:
- Download the resource
  - On [Cfx.re Portal](https://portal.cfx.re/)
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
  - `functions.lua`
- At the end, restart the server

If you have any problems, you can always open a ticket in the [Spooni Discord](https://discord.gg/spooni).

## 2. Usage
With this script, you can create hotels where guests can rent rooms. The script allows you to name rooms, set prices and determine the rental period. You can also create storage and checkroom areas. It offers an easy way to manage and customize your hotel.

## 3. For developers

:::details Config.lua
```lua
Config = {}

Config.DevMode = true -- only for testing, not for the live server
Config.Framework = 'vorp' -- select your framework (vorp, rpx, rsg, rsg-old) *rsg-old = old inventory version
Config.Locale = 'en' -- select your language (en, de, fr, es)

Config.Key = 0x760A9C6F -- [G]
Config.DoorControlKey = 0xCEFD9220 -- [E]

Config.Society = nil -- 'dl_society', 'mega_companies', 'syn_society', 'custom' or nil
Config.HotelManagementCommand = 'hotel'
Config.MaxRoomsPerPlayer = 5

Config.Hotels = {
    -- VT HOTEL
    {
      enable = true,
      name = 'Valentine Hotel', -- hotel name
      society = 'valhotel', -- job name
      hotelID = 1, -- must be unique
      management = true, -- if true the job can manage the hotel
      coords = vector3(-326.216, 772.9606, 117.43), -- general load coords
      blip = {
          enabled = true,  -- true or false
          coords = vector3(-326.216, 772.9606, 117.43), -- coords
          sprite = -211556852, -- sprite
          scale = 0.7, -- scale
      },
      rooms = {
        {
          name = 'Room 1A', -- display name
          roomID = 1, -- must be unique
          management = true, -- if true the room can be managed
          hash = 3693364451, -- doorhash
          rotation = 99.90252685546875, -- rotation when door is closed
          slots = 100, -- inventory Slots
          weight = 1000,
          maxRentDays = 3, -- if -1 you can rent it infinitly
          price = 2.0,
          coords = {
            door = vector3(-321.966, 765.6128, 117.44), -- door location
            inv = vector3(-327.947, 764.2562, 117.43), -- inventory location or nil
            closet = vector3(-325.132, 766.4810, 117.43), -- closet location or nil
          },
          blip = {
            enabled = false, -- true or false
            sprite = -211556852, -- sprite
            scale = 0.7, -- scale
            colorOccupied = true, -- true or false
          },
        },
        {
          name = 'Room 1B',
          roomID = 2,
          management = true,
          hash = 183181940,
          rotation = -79.89644622802734,
          slots = 100,
          weight = 1000,
          maxRentDays = 3,
          price = 2.0,
          coords = {
            door = vector3(-322.057, 762.1725, 117.45),
            inv = vector3(-326.643, 761.7160, 117.43),
            closet = vector3(-323.857, 759.5326, 117.45),
          },
          blip = {
            enabled = false,
            sprite = -211556852,
            scale = 0.7,
            colorOccupied = true,
          },
        },
        {
          name = 'Room 2A',
          roomID = 3,
          management = true,
          hash = 3765902977,
          rotation = 100.11988830566406,
          slots = 100,
          weight = 1000,
          maxRentDays = 3,
          price = 2.0,
          coords = {
            door = vector3(-322.365, 767.4810, 121.63), 
            inv = vector3(-327.361, 764.3541, 121.63), 
            closet = vector3(-325.598, 766.8895, 121.63),
          },
          blip = {
            enabled = false,
            sprite = -211556852,
            scale = 0.7,
            colorOccupied = true,
          },
        },
        {
          name = 'Room 2B',
          roomID = 4,
          management = true,
          hash = 238680582,
          rotation = -79.66508483886719,
          slots = 100, 
          weight = 1000,
          maxRentDays = 3,
          price = 2.0,
          coords = {
            door = vector3(-321.440, 762.0906, 121.63),
            inv = vector3(-326.472, 759.2954, 121.63),
            closet = vector3(-325.937, 761.4972, 121.63), 
          },
          blip = {
            enabled = false,
            sprite = -211556852,
            scale = 0.7,
            colorOccupied = true,
          },
        },
        {
          name = 'Room 2C',
          roomID = 5,
          management = true,
          hash = 3049177115,
          rotation = -80.00006866455078,
          slots = 100,
          weight = 1000,
          maxRentDays = 3,
          price = 2.0,
          coords = {
            door = vector3(-323.538, 774.0122, 121.63),
            inv = vector3(-328.231, 772.6199, 121.63),
            closet = vector3(-329.832, 775.4370, 121.63),
          },
          blip = {
            enabled = false,
            sprite = -211556852,
            scale = 0.7,
            colorOccupied = true,
          },
        },
      },
    },
    -- SD CASINO BOAT
    {
      enable = true,
      name = 'St. Denis Casino Boat Hotel', -- hotel name
      society = 'sdcasino', -- job name
      hotelID = 2, -- must be unique
      management = true, -- if true the job can manage the hotel
      coords = vector3(3293.958251953125, -1301.9976806640625, 45.79931640625), -- general load coords
      blip = {
          enabled = true,  -- true or false
          coords = vector3(3293.958251953125, -1301.9976806640625, 45.79931640625), -- coords
          sprite = -211556852, -- sprite
          scale = 0.7, -- scale
      },
      rooms = {
        {
          name = 'Apartment 1', -- display name
          roomID = 1, -- must be unique
          management = true, -- if true the room can be managed
          hash = 568836657, -- doorhash
          rotation = 89.9999771118164, -- rotation when door is closed
          slots = 100, -- inventory Slots
          weight = 1000,
          maxRentDays = 3, -- if -1 you can rent it infinitly
          price = 2.0,
          coords = {
            door = vector3(3293.958251953125, -1301.9976806640625, 45.79931640625), -- door location
            inv = vector3(3297.73486328125, -1301.4080810546875, 45.7857551574707), -- inventory location or nil
            closet = vector3(3296.58251953125, -1300.2508544921875, 45.81586837768555), -- closet location or nil
          },
          blip = {
            enabled = false, -- true or false
            sprite = -211556852, -- sprite
            scale = 0.7, -- scale
            colorOccupied = true, -- true or false
          },
        },
        {
          name = 'Apartment 2',
          roomID = 2,
          management = true,
          hash = 1306597923,
          rotation = 89.9999771118164,
          slots = 100,
          weight = 1000,
          maxRentDays = 3,
          price = 2.0,
          coords = {
            door = vector3(3282.916259765625, -1297.950927734375, 45.89453125),
            inv = vector3(3281.2255859375, -1298.6038818359375, 45.84315872192383),
            closet = vector3(3281.959228515625, -1294.502197265625, 45.94842147827148),
          },
          blip = {
            enabled = false,
            sprite = -211556852,
            scale = 0.7,
            colorOccupied = true,
          },
        },
        {
          name = 'Apartment 3',
          roomID = 3,
          management = true,
          hash = 1614659292,
          rotation = -90.00000762939453,
          slots = 100,
          weight = 1000,
          maxRentDays = 3,
          price = 2.0,
          coords = {
            door = vector3(3282.914306640625, -1325.6790771484375, 45.51763916015625),
            inv = vector3(3280.467529296875, -1328.06787109375, 45.52330780029297),
            closet = vector3(3280.605224609375, -1325.5576171875, 45.52330780029297),
          },
          blip = {
            enabled = false,
            sprite = -211556852,
            scale = 0.7,
            colorOccupied = true,
          },
        },
      },
    },
    -- FROM HERE ALL SPOONI MICOS WITH APARTMENT ROOMS
    -----------------------------------------------------
    -- ST DENIS HOTEL
    {
      enable = true,
      name = 'St. Denis Hotel', -- hotel name
      society = 'sdhotel', -- job name
      hotelID = 3, -- must be unique
      management = true, -- if true the job can manage the hotel
      coords = vector3(2622.229, -1012.455, 44.234), -- general load coords
      blip = {
          enabled = true,  -- true or false
          coords = vector3(2622.229, -1012.455, 44.234), -- coords
          sprite = -211556852, -- sprite
          scale = 0.7, -- scale
      },
      rooms = {
        {
          name = 'Apartment 1', -- display name
          roomID = 1, -- must be unique
          management = true, -- if true the room can be managed
          hash = 1379714587, -- doorhash
          rotation = 99.99993133544922, -- rotation when door is closed
          slots = 100, -- inventory Slots
          weight = 1000,
          maxRentDays = 3, -- if -1 you can rent it infinitly
          price = 2.0,
          coords = {
            door = vector3(2616.3066, -1005.5200, 49.0800), -- door location
            inv = vector3(2610.6520, -1000.6770, 50.00), -- inventory location or nil
            closet = vector3(2613.8928, -1005.8916, 50.00), -- closet location or nil
          },
          blip = {
            enabled = false, -- true or false
            sprite = -211556852, -- sprite
            scale = 0.7, -- scale
            colorOccupied = true, -- true or false
          },
        },
        {
          name = 'Apartment 2',
          roomID = 2,
          management = true,
          hash = 2380840306, -- [4181732049] = {4181732049, -113235247, 'p_door15x', 2621.4523925781, -1006.3774414062, 49.072444915771}
          rotation = 99.81073760986328,
          slots = 100,
          weight = 1000,
          maxRentDays = 3,
          price = 2.0,
          coords = {
            door = vector3(2621.4523, -1006.3774, 49.0724),
            inv = vector3(2620.96337, -999.5526, 50.00),
            closet = vector3(2625.6035, -1005.6461, 50.00),
          },
          blip = {
            enabled = false,
            sprite = -211556852,
            scale = 0.7,
            colorOccupied = true,
          },
        },
        {
          name = 'Apartment 3',
          roomID = 3,
          management = true,
          hash = 3065182112,
          rotation = 100.11162567138672,
          slots = 100,
          weight = 1000,
          maxRentDays = 3,
          price = 2.0,
          coords = {
            door = vector3(2618.6245, -1009.4004, 49.0840),
            inv = vector3(2613.7363, -1006.8591, 50.00),
            closet = nil,
          },
          blip = {
            enabled = false,
            sprite = -211556852,
            scale = 0.7,
            colorOccupied = true,
          },
        },
        {
          name = 'Apartment 4',
          roomID = 4,
          management = true,
          hash = 42209089,
          rotation = 9.61076164245605,
          slots = 100,
          weight = 1000,
          maxRentDays = 3,
          price = 2.0,
          coords = {
            door = vector3(2620.9440, -1014.9393, 49.0724),
            inv = nil,
            closet = vector3(2623.1899, -1014.9474, 50.00),
          },
          blip = {
            enabled = false,
            sprite = -211556852,
            scale = 0.7,
            colorOccupied = true,
          },
        },
      },
    },
    -- SD FLORIST
    {
      enable = true,
      name = 'St. Denis Florist Hotel', -- hotel name
      society = 'sdflorist', -- job name
      hotelID = 4, -- must be unique
      management = true, -- if true the job can manage the hotel
      coords = vector3(2681.038, -1186.50, 59.284), -- general load coords
      blip = {
          enabled = true,  -- true or false
          coords = vector3(2681.038, -1186.50, 59.284), -- coords
          sprite = -211556852, -- sprite
          scale = 0.7, -- scale
      },
      rooms = {
        {
          name = 'Apartment 1', -- display name
          roomID = 1, -- must be unique
          management = true, -- if true the room can be managed
          hash = 3299540066, -- doorhash
          rotation = 90.0150146484375, -- rotation when door is closed
          slots = 100, -- inventory Slots
          weight = 1000,
          maxRentDays = 3, -- if -1 you can rent it infinitly
          price = 2.0,
          coords = {
            door = vector3(2678.64990234375,-1182.5699462890625,56.35373306274414), -- door location
            inv = vector3(2673.696, -1181.39, 57.345), -- inventory location or nil
            closet = vector3(2675.863, -1185.29, 57.345), -- closet location or nil
          },
          blip = {
            enabled = false, -- true or false
            sprite = -211556852, -- sprite
            scale = 0.7, -- scale
            colorOccupied = true, -- true or false
          },
        },
        {
          name = 'Apartment 2',
          roomID = 2,
          management = true,
          hash = 3153235648,
          rotation = 89.99994659423828,
          slots = 100,
          weight = 1000,
          maxRentDays = 3,
          price = 2.0,
          coords = {
            door = vector3(2678.64990234375,-1192.0899658203125,56.38077163696289),
            inv = vector3(2674.596, -1187.16, 57.350),
            closet = vector3(2672.463, -1186.90, 57.349),
          },
          blip = {
            enabled = false,
            sprite = -211556852,
            scale = 0.7,
            colorOccupied = true,
          },
        },
        {
          name = 'Apartment 3',
          roomID = 3,
          management = true,
          hash = 407553899,
          rotation = 89.95580291748047,
          slots = 100,
          weight = 1000,
          maxRentDays = 3,
          price = 2.0,
          coords = {
            door = vector3(2678.64990234375,-1182.5699462890625,59.90999984741211),
            inv = vector3(2675.116, -1181.64, 60.883),
            closet = vector3(2677.298, -1180.88, 60.883),
          },
          blip = {
            enabled = false,
            sprite = -211556852,
            scale = 0.7,
            colorOccupied = true,
          },
        },
        {
          name = 'Apartment 4',
          roomID = 4,
          management = true,
          hash = 2721560444,
          rotation = 89.99994659423828,
          slots = 100,
          weight = 1000,
          maxRentDays = 3,
          price = 2.0,
          coords = {
            door = vector3(2678.64990234375,-1191.949951171875,60.52000045776367),
            inv = vector3(2675.042, -1191.05, 61.529),
            closet = vector3(2672.398, -1186.95, 61.529),
          },
          blip = {
            enabled = false,
            sprite = -211556852,
            scale = 0.7,
            colorOccupied = true,
          },
        },
      },
    },
    -- SD General Store
    {
      enable = true,
      name = 'St. Denis General Store Hotel', -- hotel name
      society = 'sdgeneralstore', -- job name
      hotelID = 5, -- must be unique
      management = true, -- if true the job can manage the hotel
      coords = vector3(2586.397, -1163.36, 59.172), -- general load coords
      blip = {
          enabled = true,  -- true or false
          coords = vector3(2586.397, -1163.36, 59.172), -- coords
          sprite = -211556852, -- sprite
          scale = 0.7, -- scale
      },
      rooms = {
        {
          name = 'Apartment 1', -- display name
          roomID = 1, -- must be unique
          management = true, -- if true the room can be managed
          hash = 726203270, -- doorhash
          rotation = 90.0605697631836, -- rotation when door is closed
          slots = 100, -- inventory Slots
          weight = 1000,
          maxRentDays = 3, -- if -1 you can rent it infinitly
          price = 2.0,
          coords = {
            door = vector3(2588.7099609375,-1161.1600341797,58.209999084473), -- door location
            inv = vector3(2591.22802734375, -1161.448486328125, 58.11981964111328), -- inventory location or nil
            closet = vector3(2589.558837890625, -1158.4837646484375, 58.1590690612793), -- closet location or nil
          },
          blip = {
            enabled = false, -- true or false
            sprite = -211556852, -- sprite
            scale = 0.7, -- scale
            colorOccupied = true, -- true or false
          },
        },
        {
          name = 'Apartment 2',
          roomID = 2,
          management = true,
          hash = 227196938,
          rotation = -90.12598419189453,
          slots = 100,
          weight = 1000,
          maxRentDays = 3,
          price = 2.0,
          coords = {
            door = vector3(2588.7099609375,-1162.5799560547,58.209999084473),
            inv = vector3(2593.039794921875, -1164.9698486328125, 58.11981964111328),
            closet = vector3(2589.48291015625, -1165.9271240234375, 58.11981964111328),
          },
          blip = {
            enabled = false,
            sprite = -211556852,
            scale = 0.7,
            colorOccupied = true,
          },
        },
        {
          name = 'Apartment 3',
          roomID = 3,
          management = true,
          hash = 1993806501,
          rotation = -89.97947692871094,
          slots = 100,
          weight = 1000,
          maxRentDays = 3,
          price = 2.0,
          coords = {
            door = vector3(2588.6999511719,-1170.0300292969,58.209999084473),
            inv = vector3(2593.017822265625, -1171.7730712890625, 58.11981964111328),
            closet = vector3(2589.674072265625, -1172.358154296875, 58.15949630737305),
          },
          blip = {
            enabled = false,
            sprite = -211556852,
            scale = 0.7,
            colorOccupied = true,
          },
        },
        {
          name = 'Apartment 4',
          roomID = 4,
          management = true,
          hash = 992516957,
          rotation = -89.97947692871094,
          slots = 100,
          weight = 1000,
          maxRentDays = 3,
          price = 2.0,
          coords = {
            door = vector3(2586.2800292969,-1170.0400390625,58.209999084473),
            inv = vector3(2585.51708984375, -1173.39404296875, 58.11981964111328),
            closet = vector3(2580.093017578125, -1173.134033203125, 58.1590690612793),
          },
          blip = {
            enabled = false,
            sprite = -211556852,
            scale = 0.7,
            colorOccupied = true,
          },
        },
        {
          name = 'Apartment 5',
          roomID = 5,
          management = true,
          hash = -1077107569,
          rotation = 89.62045288085938,
          slots = 100,
          weight = 1000,
          maxRentDays = 3,
          price = 2.0,
          coords = {
            door = vector3(2588.75,-1161.1600341797,62.360000610352),
            inv = vector3(2592.507080078125, -1161.1142578125, 62.24541091918945),
            closet = vector3(2591.350341796875, -1154.8992919921875, 62.24541091918945),
          },
          blip = {
            enabled = false,
            sprite = -211556852,
            scale = 0.7,
            colorOccupied = true,
          },
        },
        {
          name = 'Apartment 6',
          roomID = 6,
          management = true,
          hash = 415751663,
          rotation = -89.62483215332031,
          slots = 100,
          weight = 1000,
          maxRentDays = 3,
          price = 2.0,
          coords = {
            door = vector3(2588.75,-1162.5799560547,62.360000610352),
            inv = vector3(2591.2763671875, -1168.725341796875, 62.24541091918945),
            closet = vector3(2590.763916015625, -1162.3599853515625, 62.2286148071289),
          },
          blip = {
            enabled = false,
            sprite = -211556852,
            scale = 0.7,
            colorOccupied = true,
          },
        },
        {
          name = 'Apartment 7',
          roomID = 7,
          management = true,
          hash = -117532942,
          rotation = -89.82498931884766,
          slots = 100,
          weight = 1000,
          maxRentDays = 3,
          price = 2.0,
          coords = {
            door = vector3(2588.75,-1170.0300292969,62.360000610352),
            inv = vector3(2591.940673828125, -1173.349609375, 62.28850936889648),
            closet = vector3(2592.446533203125, -1170.223876953125, 62.28850936889648),
          },
          blip = {
            enabled = false,
            sprite = -211556852,
            scale = 0.7,
            colorOccupied = true,
          },
        },
        {
          name = 'Apartment 8',
          roomID = 8,
          management = true,
          hash = -729756169,
          rotation = -89.82498931884766,
          slots = 100,
          weight = 1000,
          maxRentDays = 3,
          price = 2.0,
          coords = {
            door = vector3(2586.2800292969,-1170.0400390625,62.360000610352),
            inv = vector3(2579.8193359375, -1173.4427490234375, 62.22991561889648),
            closet = vector3(2584.27734375, -1169.8275146484375, 62.22991561889648),
          },
          blip = {
            enabled = false,
            sprite = -211556852,
            scale = 0.7,
            colorOccupied = true,
          },
        },
      },
    },
    -- SD Jeweler
    {
      enable = true,
      name = 'St. Denis Jeweler Hotel', -- hotel name
      society = 'sdjeweler', -- job name
      hotelID = 6, -- must be unique
      management = true, -- if true the job can manage the hotel
      coords = vector3(2666.080078125,-1296.1300048828,54.48250579834), -- general load coords
      blip = {
          enabled = true,  -- true or false
          coords = vector3(2666.080078125,-1296.1300048828,54.48250579834), -- coords
          sprite = -211556852, -- sprite
          scale = 0.7, -- scale
      },
      rooms = {
        {
          name = 'Apartment 1', -- display name
          roomID = 1, -- must be unique
          management = true, -- if true the room can be managed
          hash = -1205973305, -- doorhash
          rotation = -65.00010681152344, -- rotation when door is closed
          slots = 100, -- inventory Slots
          weight = 1000,
          maxRentDays = 3, -- if -1 you can rent it infinitly
          price = 2.0,
          coords = {
            door = vector3(2666.080078125,-1296.1300048828,54.48250579834), -- door location
            inv = vector3(2664.863037109375, -1300.5645751953125, 54.47348403930664), -- inventory location or nil
            closet = vector3(2660.93505859375, -1299.5267333984375, 54.4750747680664), -- closet location or nil
          },
          blip = {
            enabled = false, -- true or false
            sprite = -211556852, -- sprite
            scale = 0.7, -- scale
            colorOccupied = true, -- true or false
          },
        },
        {
          name = 'Apartment 2',
          roomID = 2,
          management = true,
          hash = 1038211660,
          rotation = 115.26647186279297,
          slots = 100,
          weight = 1000,
          maxRentDays = 3,
          price = 2.0,
          coords = {
            door = vector3(2665.719970703125, -1295.3599853515625, 54.48250579833984),
            inv = vector3(2660.586181640625, -1292.3057861328125, 54.48635482788086),
            closet = vector3(2660.91162109375, -1296.3355712890625, 54.47644424438476),
          },
          blip = {
            enabled = false,
            sprite = -211556852,
            scale = 0.7,
            colorOccupied = true,
          },
        },
        {
          name = 'Apartment 3',
          roomID = 3,
          management = true,
          hash = -973673864,
          rotation = -65.00010681152344,
          slots = 100,
          weight = 1000,
          maxRentDays = 3,
          price = 2.0,
          coords = {
            door = vector3(2665.9306640625, -1296.239990234375, 58.71552658081055),
            inv = vector3(2661.04736328125, -1301.0660400390625, 58.71421813964844),
            closet = vector3(2666.56591796875, -1299.83984375, 58.71421813964844),
          },
          blip = {
            enabled = false,
            sprite = -211556852,
            scale = 0.7,
            colorOccupied = true,
          },
        },
        {
          name = 'Apartment 4', -- display name
          roomID = 4, -- must be unique
          management = true, -- if true the room can be managed
          hash = -709785107, -- doorhash
          rotation = 114.99994659423828, -- rotation when door is closed
          slots = 100, -- inventory Slots
          weight = 1000,
          maxRentDays = 3, -- if -1 you can rent it infinitly
          price = 2.0,
          coords = {
            door = vector3(2665.460205078125, -1295.199951171875, 58.71552658081055), -- door location
            inv = vector3(2660.604736328125, -1292.7529296875, 58.71421813964844), -- inventory location or nil
            closet = vector3(2661.71630859375, -1289.5330810546875, 58.71421813964844), -- closet location or nil
          },
          blip = {
            enabled = false, -- true or false
            sprite = -211556852, -- sprite
            scale = 0.7, -- scale
            colorOccupied = true, -- true or false
          },
        },
      },
    },
    -- ANNESBURG BEERHALL
    {
      enable = true,
      name = 'Annesburg Bierhalle Hotel', -- hotel name
      society = 'annbierhalle', -- job name
      hotelID = 7, -- must be unique
      management = true, -- if true the job can manage the hotel
      coords = vector3(2958.849853515625, 1347.8719482421875, 48.00776290893555), -- general load coords
      blip = {
          enabled = true,  -- true or false
          coords = vector3(2958.849853515625, 1347.8719482421875, 48.00776290893555), -- coords
          sprite = -211556852, -- sprite
          scale = 0.7, -- scale
      },
      rooms = {
        {
          name = 'Apartment 1', -- display name
          roomID = 1, -- must be unique
          management = true, -- if true the room can be managed
          hash = 991450127, -- doorhash
          rotation = 159.6256866455078, -- rotation when door is closed
          slots = 100, -- inventory Slots
          weight = 1000,
          maxRentDays = 3, -- if -1 you can rent it infinitly
          price = 2.0,
          coords = {
            door = vector3(2958.849853515625, 1347.8719482421875, 48.00776290893555), -- door location
            inv = vector3(2956.545166015625, 1344.5506591796875, 48.01533889770508), -- inventory location or nil
            closet = vector3(2960.760986328125, 1339.8970947265625, 48.00645446777344), -- closet location or nil
          },
          blip = {
            enabled = false, -- true or false
            sprite = -211556852, -- sprite
            scale = 0.7, -- scale
            colorOccupied = true, -- true or false
          },
        },
        {
          name = 'Apartment 2',
          roomID = 2,
          management = true,
          hash = 1474792857,
          rotation = -20.59811973571777,
          slots = 100,
          weight = 1000,
          maxRentDays = 3,
          price = 2.0,
          coords = {
            door = vector3(2959.100830078125, 1351.7640380859375, 48.00776290893555),
            inv = vector3(2967.28369140625, 1353.43505859375, 48.01699066162109),
            closet = vector3(2963.42626953125, 1351.2308349609375, 48.00645446777344),
          },
          blip = {
            enabled = false,
            sprite = -211556852,
            scale = 0.7,
            colorOccupied = true,
          },
        },
        {
          name = 'Apartment 3',
          roomID = 3,
          management = true,
          hash = 1230106754,
          rotation = -20.59811973571777,
          slots = 100,
          weight = 1000,
          maxRentDays = 3,
          price = 2.0,
          coords = {
            door = vector3(2956.53759765625, 1352.7073974609375, 48.00776290893555),
            inv = vector3(2959.455810546875, 1358.690673828125, 48.00645446777344),
            closet = vector3(2958.39111328125, 1354.8404541015625, 48.00645446777344),
          },
          blip = {
            enabled = false,
            sprite = -211556852,
            scale = 0.7,
            colorOccupied = true,
          },
        },
      },
    },
    -- SD Newspaper
    {
      enable = true,
      name = 'St. Denis Newspaper', -- hotel name
      society = 'sdnews', -- job name
      hotelID = 8, -- must be unique
      management = true, -- if true the job can manage the hotel
      coords = vector3(2615.912, -1347.47, 50.137), -- general load coords
      blip = {
          enabled = true,  -- true or false
          coords = vector3(2616.412, -1345.85, 80.174), -- coords
          sprite = -211556852, -- sprite
          scale = 0.7, -- scale
      },
      rooms = {
        {
          name = 'F2 Apartment 1', -- display name
          roomID = 1, -- must be unique
          management = true, -- if true the room can be managed
          hash = 2166693749, -- doorhash
          rotation = -142.00, -- rotation when door is closed
          slots = 100, -- inventory Slots
          weight = 1000,
          maxRentDays = 3, -- if -1 you can rent it infinitly
          price = 2.0,
          coords = {
            door = vector3(2609.169189453125, -1349.22705078125, 61.96007537841797), -- door location
            inv = vector3(2604.98193359375, -1345.042236328125, 61.96668243408203), -- inventory location or nil
            closet = vector3(2600.844482421875, -1355.1136474609375, 61.95890045166015), -- closet location or nil
          },
          blip = {
            enabled = false, -- true or false
            sprite = -211556852, -- sprite
            scale = 0.7, -- scale
            colorOccupied = true, -- true or false
          },
        },
        {
          name = 'F2 Apartment 2',
          roomID = 2,
          management = true,
          hash = 130805160,
          rotation = -49.99,
          slots = 100,
          weight = 1000,
          maxRentDays = 3,
          price = 2.0,
          coords = {
            door = vector3(2615.167236328125, -1344.94873046875, 61.96007537841797),
            inv = vector3(2611.86376953125, -1346.56298828125, 61.94361877441406),
            closet = vector3(2609.059814453125, -1342.126220703125, 61.93889999389648),
          },
          blip = {
            enabled = false,
            sprite = -211556852,
            scale = 0.7,
            colorOccupied = true,
          },
        },
        {
          name = 'F3 Apartment 1',
          roomID = 3,
          management = true,
          hash = 4263466771,
          rotation = -49.90,
          slots = 100,
          weight = 1000,
          maxRentDays = 3,
          price = 2.0,
          coords = {
            door = vector3(2614.8203125, -1344.5845947265625, 66.46558380126953),
            inv = vector3(2617.6875, -1339.1058349609375, 66.4429931640625),
            closet = vector3(2611.779541015625, -1345.4444580078125, 66.44587707519531),
          },
          blip = {
            enabled = false,
            sprite = -211556852,
            scale = 0.7,
            colorOccupied = true,
          },
        },
        {
          name = 'F3 Apartment 2',
          roomID = 4,
          management = true,
          hash = 824787050,
          rotation = -139.99,
          slots = 100,
          weight = 1000,
          maxRentDays = 3,
          price = 2.0,
          coords = {
            door = vector3(2608.655029296875, -1348.623779296875, 66.46558380126953),
            inv = vector3(2604.2421875, -1356.8685302734375, 66.40367889404297),
            closet = vector3(2606.277587890625, -1362.1839599609375, 66.44621276855469),
          },
          blip = {
            enabled = false,
            sprite = -211556852,
            scale = 0.7,
            colorOccupied = true,
          },
        },
        {
          name = 'F4 Room 1',
          roomID = 5,
          management = true,
          hash = 1200696398,
          rotation = 39.99,
          slots = 100,
          weight = 1000,
          maxRentDays = 3,
          price = 2.0,
          coords = {
            door = vector3(2600.466064453125, -1358.2198486328125, 70.93123626708984),
            inv = vector3(2601.629150390625, -1356.6497802734375, 70.91329193115234),
            closet = vector3(2601.405517578125, -1351.8106689453125, 70.92283630371094),
          },
          blip = {
            enabled = false,
            sprite = -211556852,
            scale = 0.7,
            colorOccupied = true,
          },
        },
        {
          name = 'F4 Room 2',
          roomID = 6,
          management = true,
          hash = 742896487,
          rotation = 39.99,
          slots = 100,
          weight = 1000,
          maxRentDays = 3,
          price = 2.0,
          coords = {
            door = vector3(2605.4140625, -1354.0721435546875, 70.93123626708984),
            inv = vector3(2603.220947265625, -1352.1082763671875, 70.91329193115234),
            closet = vector3(2607.05419921875, -1352.080810546875, 70.9814682006836),
          },
          blip = {
            enabled = false,
            sprite = -211556852,
            scale = 0.7,
            colorOccupied = true,
          },
        },
        {
          name = 'F4 Room 3',
          roomID = 7,
          management = true,
          hash = 1437107752 ,
          rotation = 39.99,
          slots = 100,
          weight = 1000,
          maxRentDays = 3,
          price = 2.0,
          coords = {
            door = vector3(2610.8994140625, -1349.4649658203125, 70.93523406982422),
            inv = vector3(2609.12451171875, -1347.8211669921875, 70.91329193115234),
            closet = vector3(2608.278564453125, -1346.8126220703125, 70.91329956054688),
          },
          blip = {
            enabled = false,
            sprite = -211556852,
            scale = 0.7,
            colorOccupied = true,
          },
        },
        {
          name = 'F4 Room 4',
          roomID = 8,
          management = true,
          hash = 672542324 ,
          rotation = 39.99,
          slots = 100,
          weight = 1000,
          maxRentDays = 3,
          price = 2.0,
          coords = {
            door = vector3(2616.144287109375, -1345.08447265625, 70.94248962402344),
            inv = vector3(2617.6875, -1338.6656494140625, 70.91329956054688),
            closet = vector3(2613.939208984375, -1342.77734375, 70.91328430175781),
          },
          blip = {
            enabled = false,
            sprite = -211556852,
            scale = 0.7,
            colorOccupied = true,
          },
        },
        {
          name = 'F4 Room 5',
          roomID = 9,
          management = true,
          hash = 2220254083 ,
          rotation = -139.99,
          slots = 100,
          weight = 1000,
          maxRentDays = 3,
          price = 2.0,
          coords = {
            door = vector3(2622.036376953125, -1340.1055908203125, 70.94248962402344),
            inv = vector3(2619.51123046875, -1333.7606201171875, 70.91404724121094),
            closet = vector3(2623.833984375, -1337.3433837890625, 70.91329193115234),
          },
          blip = {
            enabled = false,
            sprite = -211556852,
            scale = 0.7,
            colorOccupied = true,
          },
        },
        {
          name = 'F4 Room 6',
          roomID = 10,
          management = true,
          hash = 250378413 ,
          rotation = 39.99,
          slots = 100,
          weight = 1000,
          maxRentDays = 3,
          price = 2.0,
          coords = {
            door = vector3(2626.5869140625, -1344.9149169921875, 70.94248962402344),
            inv = vector3(2625.768798828125, -1337.732666015625, 70.91329956054688),
            closet = vector3(2625.49951171875, -1342.9844970703125, 70.91507720947266),
          },
          blip = {
            enabled = false,
            sprite = -211556852,
            scale = 0.7,
            colorOccupied = true,
          },
        },
      },
    },
    -- SD Antiques Store
    {
      enable = true,
      name = 'St. Antiques Store', -- hotel name
      society = 'sdantiques', -- job name
      hotelID = 9, -- must be unique
      management = true, -- if true the job can manage the hotel
      coords = vector3(2635.311, -1358.72, 50.465), -- general load coords
      blip = {
          enabled = true,  -- true or false
          coords = vector3(2631.766, -1361.77, 68.808), -- coords
          sprite = -211556852, -- sprite
          scale = 0.7, -- scale
      },
      rooms = {
        {
          name = 'F1 Apartment 1', -- display name
          roomID = 1, -- must be unique
          management = true, -- if true the room can be managed
          hash = 759667685, -- doorhash
          rotation = 40.00, -- rotation when door is closed
          slots = 100, -- inventory Slots
          weight = 1000,
          maxRentDays = 3, -- if -1 you can rent it infinitly
          price = 2.0,
          coords = {
            door = vector3(2629.506103515625, -1363.954833984375, 60.89883422851562), -- door location
            inv = vector3(2631.934326171875, -1355.080322265625, 60.86739730834961), -- inventory location or nil
            closet = vector3(2637.749755859375, -1356.5975341796875, 60.86998748779297), -- closet location or nil
          },
          blip = {
            enabled = false, -- true or false
            sprite = -211556852, -- sprite
            scale = 0.7, -- scale
            colorOccupied = true, -- true or false
          },
        },
        {
          name = 'F1 Apartment 2',
          roomID = 2,
          management = true,
          hash = 146395850,
          rotation = -49.73,
          slots = 100,
          weight = 1000,
          maxRentDays = 3,
          price = 2.0,
          coords = {
            door = vector3(2623.078857421875, -1362.8653564453125, 59.47077560424805),
            inv = vector3(2625.507080078125, -1366.5794677734375, 59.42181015014648),
            closet = vector3(2627.892333984375, -1369.3450927734375, 59.45175170898437),
          },
          blip = {
            enabled = false,
            sprite = -211556852,
            scale = 0.7,
            colorOccupied = true,
          },
        },
        {
          name = 'F2 Apartment 1',
          roomID = 3,
          management = true,
          hash = 4202247753,
          rotation = 129.89,
          slots = 100,
          weight = 1000,
          maxRentDays = 3,
          price = 2.0,
          coords = {
            door = vector3(2641.276611328125, -1359.72705078125, 65.35139465332031),
            inv = vector3(2634.48193359375, -1359.1959228515625, 65.34432983398438),
            closet = vector3(2633.334716796875, -1354.4552001953125, 65.34456634521484),
          },
          blip = {
            enabled = false,
            sprite = -211556852,
            scale = 0.7,
            colorOccupied = true,
          },
        },
        {
          name = 'F2 Apartment 2',
          roomID = 4,
          management = true,
          hash = 519962450,
          rotation = -49.50,
          slots = 100,
          weight = 1000,
          maxRentDays = 3,
          price = 2.0,
          coords = {
            door = vector3(2623.07763671875, -1362.8641357421875, 63.68118286132812),
            inv = vector3(2625.706298828125, -1372.9234619140625, 63.6578483581543),
            closet = vector3(2628.34521484375, -1370.7412109375, 63.66416168212893),
          },
          blip = {
            enabled = false,
            sprite = -211556852,
            scale = 0.7,
            colorOccupied = true,
          },
        },
      },
    },
    -- SD Toy Store
    {
      enable = true,
      name = 'St. Toy Store', -- hotel name
      society = 'sdtoy', -- job name
      hotelID = 10, -- must be unique
      management = true, -- if true the job can manage the hotel
      coords = vector3(2639.897, -1368.73, 50.649), -- general load coords
      blip = {
          enabled = true,  -- true or false
          coords = vector3(2639.897, -1368.73, 65.649), -- coords
          sprite = -211556852, -- sprite
          scale = 0.7, -- scale
      },
      rooms = {
        {
          name = 'F2 Apartment 1', -- display name
          roomID = 1, -- must be unique
          management = true, -- if true the room can be managed
          hash = 4201425067, -- doorhash
          rotation = 130.00, -- rotation when door is closed
          slots = 100, -- inventory Slots
          weight = 1000,
          maxRentDays = 3, -- if -1 you can rent it infinitly
          price = 2.0,
          coords = {
            door = vector3(2644.591552734375, -1371.1353759765625, 58.19290924072265), -- door location
            inv = vector3(2642.7578125, -1368.44287109375, 58.18084335327148), -- inventory location or nil
            closet = vector3(2647.249755859375, -1368.8896484375, 58.10561370849609), -- closet location or nil
          },
          blip = {
            enabled = false, -- true or false
            sprite = -211556852, -- sprite
            scale = 0.7, -- scale
            colorOccupied = true, -- true or false
          },
        },
      },
    },
}
```
:::

:::details Functions.lua
```lua
local VORPcore

if Config.Framework == 'vorp' then
    VORPcore = exports.vorp_core:GetCore()
end

-- Notify
function clNotify(text, error, success)
    if Config.Framework == 'vorp' then
        if error then
            VORPcore.NotifyAvanced(text, 'menu_textures', 'cross', 'COLOR_RED', 4000)
        elseif success then
            VORPcore.NotifyAvanced(text, 'hud_textures', 'check', 'COLOR_GREEN', 4000)
        else
            VORPcore.NotifyAvanced(text, 'inventory_items', 'provision_jail_keys', 'COLOR_PURE_WHITE', 4000)
        end
    end
    if Config.Framework == 'rpx' then
        if error then
            exports['rpx-core']:ShowAdvancedRightNotification(text, 'menu_textures', 'cross', 'COLOR_RED', 4000)
        elseif success then
            exports['rpx-core']:ShowAdvancedRightNotification(text, 'hud_textures', 'check', 'COLOR_GREEN', 4000)
        else
            exports['rpx-core']:ShowAdvancedRightNotification(text, 'inventory_items', 'provision_jail_keys', 'COLOR_PURE_WHITE', 4000)
        end
    end
    if Config.Framework == "rsg" or Config.Framework == "rsg-old" then
        if error then
            local dataError = {description = text, duration = 4000, type = 'error' }
            TriggerEvent('ox_lib:notify', dataError)
        elseif success then
            local dataSuccess = {description = text, duration = 4000, type = 'success' }
            TriggerEvent('ox_lib:notify', dataSuccess)
        else
            local data = {description = text, duration = 4000, type = 'inform' }
            TriggerEvent('ox_lib:notify', data)
        end
    end
end

function svNotify(src, text, error, success)
    if Config.Framework == 'vorp' then
        if error then
            VORPcore.NotifyAvanced(src, text, 'menu_textures', 'cross', 'COLOR_RED', 4000)
        elseif success then
            VORPcore.NotifyAvanced(src, text, 'hud_textures', 'check', 'COLOR_GREEN', 4000)
        else
            VORPcore.NotifyAvanced(src, text, 'inventory_items', 'provision_jail_keys', 'COLOR_PURE_WHITE', 4000)
        end
    end
    if Config.Framework == 'rpx' then
        if error then
            exports['rpx-core']:ShowAdvancedRightNotification(src, text, 'menu_textures', 'cross', 'COLOR_RED', 4000)
        elseif success then
            exports['rpx-core']:ShowAdvancedRightNotification(src, text, 'hud_textures', 'check', 'COLOR_GREEN', 4000)
        else
            exports['rpx-core']:ShowAdvancedRightNotification(src, text, 'inventory_items', 'provision_jail_keys', 'COLOR_PURE_WHITE', 4000)
        end
    end
    if Config.Framework == "rsg" or Config.Framework == "rsg-old" then
        if error then
            local dataError = {description = text, duration = 4000, type = 'error' }
            TriggerClientEvent('ox_lib:notify', src, dataError)
        elseif success then
            local dataSuccess = {description = text, duration = 4000, type = 'success' }
            TriggerClientEvent('ox_lib:notify', src, dataSuccess)
        else
            local data = {description = text, duration = 4000, type = 'inform' }
            TriggerClientEvent('ox_lib:notify', src, data)
        end
    end
end

-- Wardrobe
function ClothingMenuEvent()
    -- TriggerEvent('syn_clothing:OpenOutfits')
    TriggerEvent('kd_clothingstore:openWardrobe', false)
end

-- Society
function AddMoneyToSociety(society, money)
    if society ~= nil and money > 0 then
        if Config.Society == 'dl_society' then
            exports.dl_society:addSocietyMoney(society, money)
        end

        if Config.Society == 'mega_companies' then
            CompaniesManager.addMoney(society, money)
        end

        if Config.Society == 'syn_society' then
            local ledgerresult = exports.oxmysql:fetchSync('SELECT ledger FROM society_ledger WHERE job = ?', {society})
            if ledgerresult and ledgerresult[1] and ledgerresult[1].ledger then
                local currentLedger = ledgerresult[1].ledger
                local newLedger = currentLedger + money
                exports.oxmysql:execute('UPDATE society_ledger SET ledger = ? WHERE job = ?', {newLedger, society})
            else
                print("No Ledger found for Job '" .. society .. "'!")
            end
        end

        if Config.Society == 'custom' then
            -- Your Add Money to Society Logic here
            print(society, money)
        end
    end
end
```
:::