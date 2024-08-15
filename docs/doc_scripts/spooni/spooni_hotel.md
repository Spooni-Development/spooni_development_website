---
prev: false
next: false
aside: false
---

# 🏨 Hotel
Documentation relating to the [spooni_hotel](https://spooni-mapping.tebex.io/6415043).

___
<br>
<iframe width="560" height="315" src="https://www.youtube.com/embed/43GdPjmo84A?si=_NNRro-2pKUq2xdF" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

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
  - `functions.lua`
- At the end
  - Restart the server

If you have any problems, you can always open a ticket in the [Spooni Discord](https://discord.gg/spooni).

## 2. Usage
With this script, you can create hotels where guests can rent rooms. The script allows you to name rooms, set prices and determine the rental period. You can also create storage and checkroom areas. It offers an easy way to manage and customize your hotel.

## 3. For developers

:::details Config.lua
```lua
Config = {}

Config.DevMode = true
Config.Locale = 'en'
Config.Framework = 'vorp' -- vorp, rsg or rpx

Config.Key = 0x760A9C6F -- [G]
Config.DoorControlKey = 0xCEFD9220 -- [E]

Config.Society = nil -- dl_society, mega_companies, syn_society or nil
Config.HotelManagementCommand = "hotel"

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
          maxRentDays = 3, -- if -1 you can rent it infinitly
          price = 2.0,
          coords = {
            door = vector3(-322.118, 765.5968, 117.44), -- door location
            inv = vector3(-325.154, 766.4559, 117.43), -- inventory location or nil
            closet = vector3(-327.31, 764.16, 117.43), -- closet location or nil
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
          maxRentDays = 3,
          price = 2.0,
          coords = {
            door = vector3(-321.418, 762.2653, 117.45),
            inv = vector3(-322.914, 760.0998, 117.43),
            closet = vector3(-326.688, 758.6583, 117.45),
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
      society = 'sdcasino2', -- job name
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
          hash = 2380840306,
          rotation = 99.81073760986328,
          slots = 100,
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
    -- ANNESBURG REBORN BIERHALLE
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
    -- SD PROMENADE ANTIQUES STORE !! MUST STILL ADD CORR INV AND CLOSET
    {
      enable = true,
      name = 'Antiques Store Hotel', -- hotel name
      society = 'antiquesstore', -- job name
      hotelID = 8, -- must be unique
      management = true, -- if true the job can manage the hotel
      coords = vector3(2633.551, -1360.43, 48.950), -- general load coords
      blip = {
          enabled = true,  -- true or false
          coords = vector3(2633.551, -1360.43, 48.950), -- coords
          sprite = -211556852, -- sprite
          scale = 0.7, -- scale
      },
      rooms = {
        {
          name = 'Apartment 1', -- display name
          roomID = 1, -- must be unique
          management = true, -- if true the room can be managed
          hash = 759667685, -- doorhash
          rotation = 40.20559692382812, -- rotation when door is closed
          slots = 100, -- inventory Slots
          maxRentDays = 3, -- if -1 you can rent it infinitly
          price = 2.0,
          coords = {
            door = vector3(2629.5048828125, -1363.9559326171875, 59.89883804321289), -- door location
            inv = vector3(2626.25439453125, -1360.4371337890625, 59.86679458618164), -- inventory location or nil
            closet = vector3(2635.89453125, -1357.8580322265625, 59.86679458618164), -- closet location or nil
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
          hash = 146395850,
          rotation = -49.87067413330078,
          slots = 100,
          maxRentDays = 3,
          price = 2.0,
          coords = {
            door = vector3(2623.07763671875, -1362.8641357421875, 58.47077178955078),
            inv = vector3(2624.608154296875, -1372.993896484375, 58.45035934448242),
            closet = vector3(2626.96240234375, -1369.002685546875, 58.45035934448242),
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
          hash = 4202247753,
          rotation = 129.83987426757812,
          slots = 100,
          maxRentDays = 3,
          price = 2.0,
          coords = {
            door = vector3(2641.276611328125, -1359.72705078125, 64.35139465332031),
            inv = vector3(2637.05126953125, -1356.650146484375, 64.34550476074219),
            closet = vector3(2639.372314453125, -1352.60400390625, 64.34550476074219),
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
          hash = 519962450,
          rotation = -49.24904632568359,
          slots = 100,
          maxRentDays = 3,
          price = 2.0,
          coords = {
            door = vector3(2623.07763671875, -1362.8641357421875, 62.68118286132812),
            inv = vector3(2625.94580078125, -1369.3594970703125, 62.65630722045898),
            closet = vector3(2624.232177734375, -1372.1207275390625, 62.65630722045898),
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
    -- SD PROMENADE TOY STORE !! MUST STILL ADD CORR INV AND CLOSET
    {
      enable = true,
      name = 'Toy Store Hotel', -- hotel name
      society = 'toystore', -- job name
      hotelID = 9, -- must be unique
      management = true, -- if true the job can manage the hotel
      coords = vector3(2641.958, -1367.20, 48.918), -- general load coords
      blip = {
          enabled = true,  -- true or false
          coords = vector3(2641.958, -1367.20, 48.918), -- coords
          sprite = -211556852, -- sprite
          scale = 0.7, -- scale
      },
      rooms = {
        {
          name = 'Apartment 1', -- display name
          roomID = 1, -- must be unique
          management = true, -- if true the room can be managed
          hash = 4201425067, -- doorhash
          rotation = 130.00001525878906, -- rotation when door is closed
          slots = 100, -- inventory Slots
          maxRentDays = 3, -- if -1 you can rent it infinitly
          price = 2.0,
          coords = {
            door = vector3(2644.591552734375, -1371.1353759765625, 57.19290924072265), -- door location
            inv = vector3(2639.770263671875, -1364.1229248046875, 57.17953491210937), -- inventory location or nil
            closet = vector3(2648.160400390625, -1364.086181640625, 57.17953491210937), -- closet location or nil
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
    -- SD PROMENADE NEWSPAPER !! MUST STILL ADD CORR INV AND CLOSET
    {
      enable = true,
      name = 'Newspaper Hotel', -- hotel name
      society = 'newspaper', -- job name
      hotelID = 10, -- must be unique
      management = true, -- if true the job can manage the hotel
      coords = vector3(2616.772, -1346.83, 50.137), -- general load coords
      blip = {
          enabled = true,  -- true or false
          coords = vector3(2616.772, -1346.83, 50.137), -- coords
          sprite = -211556852, -- sprite
          scale = 0.7, -- scale
      },
      rooms = {
        {
          name = 'Apartment 1', -- display name
          roomID = 1, -- must be unique
          management = true, -- if true the room can be managed
          hash = 2166693749, -- doorhash
          rotation = -142.1488494873047, -- rotation when door is closed
          slots = 100, -- inventory Slots
          maxRentDays = 3, -- if -1 you can rent it infinitly
          price = 2.0,
          coords = {
            door = vector3(2609.169189453125, -1349.22705078125, 60.96007537841797), -- door location
            inv = vector3(2600.449462890625, -1349.6527099609375, 60.94068145751953), -- inventory location or nil
            closet = vector3(2597.87744140625, -1351.6162109375, 60.94068145751953), -- closet location or nil
          },
          blip = {
            enabled = false, -- true or false
            sprite = -211556852, -- sprite
            scale = 0.7, -- scale
            colorOccupied = true, -- true or false
          },
        },
        {
          name = 'Apartment 2', -- display name
          roomID = 2, -- must be unique
          management = true, -- if true the room can be managed
          hash = 130805160, -- doorhash
          rotation = -50.29581069946289, -- rotation when door is closed
          slots = 100, -- inventory Slots
          maxRentDays = 3, -- if -1 you can rent it infinitly
          price = 2.0,
          coords = {
            door = vector3(2615.167236328125, -1344.94873046875, 60.96007537841797), -- door location
            inv = vector3(2624.859130859375, -1343.3021240234375, 60.95200729370117), -- inventory location or nil
            closet = vector3(2621.974853515625, -1331.1356201171875, 60.95200729370117), -- closet location or nil
          },
          blip = {
            enabled = false, -- true or false
            sprite = -211556852, -- sprite
            scale = 0.7, -- scale
            colorOccupied = true, -- true or false
          },
        },
        {
          name = 'Apartment 3', -- display name
          roomID = 3, -- must be unique
          management = true, -- if true the room can be managed
          hash = 4263466771, -- doorhash
          rotation = -49.84155654907226, -- rotation when door is closed
          slots = 100, -- inventory Slots
          maxRentDays = 3, -- if -1 you can rent it infinitly
          price = 2.0,
          coords = {
            door = vector3(2614.8203125, -1344.5845947265625, 65.46558380126953), -- door location
            inv = vector3(2617.458251953125, -1338.8758544921875, 65.44428253173828), -- inventory location or nil
            closet = vector3(2612.46142578125, -1340.1898193359375, 65.45564270019531), -- closet location or nil
          },
          blip = {
            enabled = false, -- true or false
            sprite = -211556852, -- sprite
            scale = 0.7, -- scale
            colorOccupied = true, -- true or false
          },
        },
        {
          name = 'Apartment 4', -- display name
          roomID = 4, -- must be unique
          management = true, -- if true the room can be managed
          hash = 824787050, -- doorhash
          rotation = -140.0610809326172, -- rotation when door is closed
          slots = 100, -- inventory Slots
          maxRentDays = 3, -- if -1 you can rent it infinitly
          price = 2.0,
          coords = {
            door = vector3(2608.655029296875, -1348.623779296875, 65.46558380126953), -- door location
            inv = vector3(2603.809326171875, -1351.940673828125, 65.45564270019531), -- inventory location or nil
            closet = vector3(2602.516357421875, -1352.9796142578125, 65.45564270019531), -- closet location or nil
          },
          blip = {
            enabled = false, -- true or false
            sprite = -211556852, -- sprite
            scale = 0.7, -- scale
            colorOccupied = true, -- true or false
          },
        },
        {
          name = 'Apartment 5', -- display name
          roomID = 5, -- must be unique
          management = true, -- if true the room can be managed
          hash = 1200696398, -- doorhash
          rotation = 40.39239501953125, -- rotation when door is closed
          slots = 100, -- inventory Slots
          maxRentDays = 3, -- if -1 you can rent it infinitly
          price = 2.0,
          coords = {
            door = vector3(2600.466064453125,-1358.2198486328125,69.93123626708984), -- door location
            inv = vector3(2596.058349609375, -1353.34130859375, 69.91152954101562), -- inventory location or nil
            closet = vector3(2599.993408203125, -1350.153076171875, 69.92283630371094), -- closet location or nil
          },
          blip = {
            enabled = false, -- true or false
            sprite = -211556852, -- sprite
            scale = 0.7, -- scale
            colorOccupied = true, -- true or false
          },
        },
        {
          name = 'Apartment 6', -- display name
          roomID = 6, -- must be unique
          management = true, -- if true the room can be managed
          hash = 742896487, -- doorhash
          rotation = 40.04999160766601, -- rotation when door is closed
          slots = 100, -- inventory Slots
          maxRentDays = 3, -- if -1 you can rent it infinitly
          price = 2.0,
          coords = {
            door = vector3(2605.4140625,-1354.0721435546875,69.93123626708984), -- door location
            inv = vector3(2605.543701171875, -1345.589111328125, 69.92283630371094), -- inventory location or nil
            closet = vector3(2601.242431640625, -1349.1246337890625, 69.92283630371094), -- closet location or nil
          },
          blip = {
            enabled = false, -- true or false
            sprite = -211556852, -- sprite
            scale = 0.7, -- scale
            colorOccupied = true, -- true or false
          },
        },
        {
          name = 'Apartment 7', -- display name
          roomID = 7, -- must be unique
          management = true, -- if true the room can be managed
          hash = 1437107752, -- doorhash
          rotation = 39.69633865356445, -- rotation when door is closed
          slots = 100, -- inventory Slots
          maxRentDays = 3, -- if -1 you can rent it infinitly
          price = 2.0,
          coords = {
            door = vector3(2610.8994140625,-1349.4649658203125,69.93523406982422), -- door location
            inv = vector3(2606.618896484375, -1344.47607421875, 69.92283630371094), -- inventory location or nil
            closet = vector3(2612.340087890625, -1342.7464599609375, 69.92283630371094), -- closet location or nil
          },
          blip = {
            enabled = false, -- true or false
            sprite = -211556852, -- sprite
            scale = 0.7, -- scale
            colorOccupied = true, -- true or false
          },
        },
        {
          name = 'Apartment 8', -- display name
          roomID = 8, -- must be unique
          management = true, -- if true the room can be managed
          hash = 672542324, -- doorhash
          rotation = 39.36271286010742, -- rotation when door is closed
          slots = 100, -- inventory Slots
          maxRentDays = 3, -- if -1 you can rent it infinitly
          price = 2.0,
          coords = {
            door = vector3(2616.144287109375,-1345.08447265625,69.94248962402344), -- door location
            inv = vector3(2615.963623046875, -1336.809326171875, 69.92283630371094), -- inventory location or nil
            closet = vector3(2612.18896484375, -1340.1536865234375, 69.92283630371094), -- closet location or nil
          },
          blip = {
            enabled = false, -- true or false
            sprite = -211556852, -- sprite
            scale = 0.7, -- scale
            colorOccupied = true, -- true or false
          },
        },
        {
          name = 'Apartment 9', -- display name
          roomID = 9, -- must be unique
          management = true, -- if true the room can be managed
          hash = 2220254083, -- doorhash
          rotation = -140.15390014648438, -- rotation when door is closed
          slots = 100, -- inventory Slots
          maxRentDays = 3, -- if -1 you can rent it infinitly
          price = 2.0,
          coords = {
            door = vector3(2622.036376953125,-1340.1055908203125,69.94248962402344), -- door location
            inv = vector3(2621.759033203125, -1332.2305908203125, 69.92283630371094), -- inventory location or nil
            closet = vector3(2617.192138671875, -1335.880615234375, 69.92283630371094), -- closet location or nil
          },
          blip = {
            enabled = false, -- true or false
            sprite = -211556852, -- sprite
            scale = 0.7, -- scale
            colorOccupied = true, -- true or false
          },
        },
        {
          name = 'Apartment 10', -- display name
          roomID = 10, -- must be unique
          management = true, -- if true the room can be managed
          hash = 250378413, -- doorhash
          rotation = 130.00001525878906, -- rotation when door is closed
          slots = 100, -- inventory Slots
          maxRentDays = 3, -- if -1 you can rent it infinitly
          price = 2.0,
          coords = {
            door = vector3(2626.5869140625,-1344.9149169921875,69.94248962402344), -- door location
            inv = vector3(2626.65185546875, -1337.3363037109375, 69.92283630371094), -- inventory location or nil
            closet = vector3(2624.749267578125, -1341.4510498046875, 69.92283630371094), -- closet location or nil
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
    if Config.Framework == "vorp" then
        if error then
            VORPcore.NotifyAvanced(text, "menu_textures", "cross", "COLOR_RED", 4000)
        elseif success then
            VORPcore.NotifyAvanced(text, "hud_textures", "check", "COLOR_GREEN", 4000)
        else
            VORPcore.NotifyAvanced(text, "inventory_items", "provision_jail_keys", "COLOR_PURE_WHITE", 4000)
        end
    end
    if Config.Framework == "rpx" then
        if error then
            exports["rpx-core"]:ShowAdvancedRightNotification(text, "menu_textures", "cross", "COLOR_RED", 4000)
        elseif success then
            exports["rpx-core"]:ShowAdvancedRightNotification(text, "hud_textures", "check", "COLOR_GREEN", 4000)
        else
            exports["rpx-core"]:ShowAdvancedRightNotification(text, "inventory_items", "provision_jail_keys", "COLOR_PURE_WHITE", 4000)
        end
    end
    if Config.Framework == "rsg" then
        if error then
            TriggerEvent('RSGCore:Notify', text, 'error')
        elseif success then
            TriggerEvent('RSGCore:Notify', text, 'success')
        else
            TriggerEvent('RSGCore:Notify', text, 'info')
        end
    end
end

function svNotify(src, text, error, success)
    if Config.Framework == "vorp" then
        if error then
            VORPcore.NotifyAvanced(src, text, "menu_textures", "cross", "COLOR_RED", 4000)
        elseif success then
            VORPcore.NotifyAvanced(src, text, "hud_textures", "check", "COLOR_GREEN", 4000)
        else
            VORPcore.NotifyAvanced(src, text, "inventory_items", "provision_jail_keys", "COLOR_PURE_WHITE", 4000)
        end
    end
    if Config.Framework == "rpx" then
        if error then
            exports["rpx-core"]:ShowAdvancedRightNotification(src, text, "menu_textures", "cross", "COLOR_RED", 4000)
        elseif success then
            exports["rpx-core"]:ShowAdvancedRightNotification(src, text, "hud_textures", "check", "COLOR_GREEN", 4000)
        else
            exports["rpx-core"]:ShowAdvancedRightNotification(src, text, "inventory_items", "provision_jail_keys", "COLOR_PURE_WHITE", 4000)
        end
    end
    if Config.Framework == "rsg" then
        if error then
            TriggerClientEvent('RSGCore:Notify', src, text, 'error')
        elseif success then
            TriggerClientEvent('RSGCore:Notify', src, text, 'success')
        else
            TriggerClientEvent('RSGCore:Notify', src, text, 'info')
        end
    end
end

-- Wardrobe
function ClothingMenuEvent()
    -- TriggerEvent('syn_clothing:OpenOutfits')
    TriggerEvent('kd_clothingstore:openWardrobe', false)
end
```
:::