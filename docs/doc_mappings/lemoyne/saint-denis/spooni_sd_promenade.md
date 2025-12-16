---
title: St. Denis Promenade
description: Waterfront boardwalk with shops and entertainment in Saint-Denis, Lemoyne.
---

# 🏠 St. Denis Promenade
Documentation relating to the spooni_sd_promenade.

:::tabs
== INFO
<iframe width="560" height="315" src="https://www.youtube.com/embed/oe0tt2gpLew?si=YoH8Por8fDNfs1fs" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

<a href="https://spooni-mapping.tebex.io/package/6477821" class="button-buy">🛒 Buy Now</a>
<a href="https://spooni.de/rdr2/?m=house28" class="button-map">📍 View on Map</a>
:::

## 1. Installation
spooni_sd_promenade works Standalone.  

To install spooni_sd_promenade:
- Download the resource
  - On [Cfx.re Portal](https://portal.cfx.re/)
- Drag and drop the resource into your resources folder
  - `spooni_sd_promenade`
- Add this ensure in your server.cfg
  ```
    ensure spooni_sd_promenade
  ```
- At the end, restart the server

If you have any problems, you can always open a ticket in the [Spooni Discord](https://discord.gg/spooni).

## 2. For developers
### Collision compatibility <Badge type="danger" text="IMPORTANT"/>
1. Navigate to the folder where the mapping `spooni_sd_promenade` is installed.
2. Search for a folder named `update`.
3. Go to the respective folder `update_sd_courthouse` or `update_sd_spaldings`.
4. Copy the files from this folder.
5. Open the `spooni_sd_promenade` & `spooni_sd_courthouse` or `spooni_sd_spaldings` folder and go to the `stream` folder.
6. Paste the copied files into the `stream` folder and overwrite existing files.
7. Restart the server to apply the changes.

*Note*: If you have installed all mappings, search for a folder named `update_all`. Copy the files from this folder and paste them into the `stream` folder of `spooni_sd_courthouse`, `spooni_sd_promenade` and `spooni_sd_spaldings`. Overwrite the existing files.

### Doorhashes
| Antiques Store            | Doorhashes
|---------------------------|----------------------------------------------------------------------------------|
| `Ground Floor`            |
| Front Door                | `[635336099] = {635336099, 2087704282, "door_news1", 2641.156982421875, -1355.208984375, 47.93399810791015}` <br> `[3005681718] = {3005681718, 2087704282, "door_news1", 2639.705078125, -1353.4840087890625, 47.93399810791015}`
| Back Dopr                 | `[1383589445] = {1383589445, 460918133, "p_doorwhite01x", 2621.133544921875, -1370.7249755859375, 47.98786544799805}` <br> `[159956216] = {159956216, 460918133, "p_doorwhite01x", 2622.55126953125, -1372.4093017578125, 47.98786544799805}`
| Bar Door                  | `[449535869] = {449535869, -1457216850, "p_door53x", 2626.905029296875, -1361.285400390625, 48.00204086303711}`
| Cellar soon               | `[1623098066] = {1623098066, -302968547, "s_clothingcasedoor01x", 2628.844482421875, -1370.384033203125, 47.39473342895508}`
| `1st Floor`               |
| Apartment Door 1          | `[759667685] = {759667685, -113235247, "p_door15x", 2629.5048828125, -1363.9559326171875, 59.89883804321289}`
| Apartment Door 2          | `[146395850] = {146395850, -29643421, "p_door11x", 2623.0776367188, -1362.8641357422, 58.470771789551}`
| `2st Floor`               |
| Apartment Door 1          | `[4202247753] = {4202247753, -113235247, "p_door15x", 2641.276611328125, -1359.72705078125, 64.35139465332031}`
| Apartment Door 2          | `[519962450] = {519962450, -113235247, "p_door15x", 2623.07763671875, -1362.8641357421875, 62.68118286132812}`

| Music Store               | Doorhashes
|---------------------------|----------------------------------------------------------------------------------|
| Front Door Left           | `[1205772103] = {1205772103, -1437756396, "p_doornbfrench1b_x", 2659.287841796875, -1375.5556640625, 47.57047653198242}` <br> `[827224611] = {827224611, -1860805927, "p_doornbfrench1a_x", 2658.423583984375, -1374.5247802734375, 47.57061386108398}`
| Front Door Right          | `[232368954] = {232368954, -1437756396, "p_doornbfrench1b_x", 2655.30517578125, -1370.78515625, 47.56647872924805}` <br> `[1527825835] = {1527825835, -1860805927, "p_doornbfrench1a_x", 2654.44384765625, -1369.7518310546875, 47.57061386108398}`
| Workshop Door             | `[1758355750] = {1758355750, 31863704, "p_door10x", 2649.502685546875, -1375.6812744140625, 47.45557403564453}`

| Newspaper                 | Doorhashes
|---------------------------|----------------------------------------------------------------------------------|
| `Ground Floor`            |
| Front Door                | `[1004883146] = {1004883146,-1459762606,"p_door_nbx_theater01x_l",2626.2202148437,-1338.083862304687,49.2038421630859}` <br> `[3727069514] = {3727069514,1136459726,"p_door_nbx_theater01x_r",2624.80004882812,-1336.40502929687,49.2046279907226}`
| Side Door                 | `[3361727933] = {3361727933,1136459726,"p_door_nbx_theater01x_r",2604.73999023437,-1347.99877929687,49.140125274658}` <br> `[3029155352] = {3029155352,-1459762606,"p_door_nbx_theater01x_l",2603.059570312,-1349.42456054687,49.1378822326660}`
| Darkroom Door      | `[3126380975] = {3126380975, -807564273, "p_door06x", 2616.50048828125, -1347.551025390625, 49.13681411743164}`
| Office Door               | `[4261599482] = {4261599482,-1064149940,"p_doorbrafrench01lx",2606.590087890625,-1355.0999755859375,49.13676071166992}` <br> `[442667497] = {442667497, -1064149940,"p_doorbrafrench01lx",2604.35009765625,-1352.530029296875,49.1500015258789}`
| `1st Floor`               |
| Kitchen Door              | `[3733527331] = {3733527331, 1443436130, "p_doorrhogensto01x", 2623.03515625, -1341.4482421875, 56.4381217956543}`
| Diningroom Door           | `[3116682847] = {3116682847,760370349,"p_door_val_bank01",2618.445068359375,-1338.6854248046875,56.43812561035156}`
| Office Door               | `[3105820516] = {3105820516,169503210,"p_door_val_bank00_rx",2606.243408203125,-1345.0032958984375,56.4263916015625}`
| Meetingroom Door          | `[1152935864] = {1152935864, 169503210, "p_door_val_bank00_rx", 2609.4775390625, -1351.788818359375, 56.4263916015625}`
| Manager Office Door       | `[721744686] = {721744686, 160636303,"p_door_val_bank00_lx",2600.9521484375,-1358.89013671875,56.43122100830078}ww`
| `2st Floor`               |
| Apartment Door 1          | `[2166693749] = {2166693749, -494116837, "p_door35x", 2609.169189453125, -1349.22705078125, 60.96007537841797}`
| Apartment Door 2          | `[130805160] = {130805160, -494116837, "p_door35x", 2615.167236328125, -1344.94873046875, 60.96007537841797}`
| `3rd Floor`               |
| Apartment Door 1          | `[4263466771] = {4263466771, 202254792, "p_door13x_beecher", 2614.8203125, -1344.5845947265625, 65.46558380126953}`
| Apartment Door 2          | `[824787050] = {824787050, 202254792, "p_door13x_beecher", 2608.655029296875, -1348.623779296875, 65.46558380126953}`
| `4th Floor`               |
| Apartment Door 1          | `[1200696398] = {1200696398,1840336152,"p_doorriverboat01x",2600.466064453125,-1358.2198486328125,69.93123626708984}`
| Apartment Door 2          | `[742896487] = {742896487,1840336152,"p_doorriverboat01x",2605.4140625,-1354.0721435546875,69.93123626708984}`
| Apartment Door 3          | `[1437107752] = {1437107752,1840336152,"p_doorriverboat01x",2610.8994140625,-1349.4649658203125,69.93523406982422}`
| Apartment Door 4          | `[672542324] = {672542324,-619255230,"p_door11x_beecher",2616.144287109375,-1345.08447265625,69.94248962402344}`
| Apartment Door 5          | `[2220254083] = {2220254083,-619255230,"p_door11x_beecher",2622.036376953125,-1340.1055908203125,69.94248962402344}`
| Apartment Door 6          | `[250378413] = {250378413,-619255230,"p_door11x_beecher",2626.5869140625,-1344.9149169921875,69.94248962402344}`

| Pharmacy                  | Doorhashes
|---------------------------|----------------------------------------------------------------------------------|
| Front Door                | `[1385805199] = {1385805199, 2087704282, "door_news1", 2634.158935546875, -1347.5, 48.05699920654297}` <br> `[1618760020] = {1618760020, 2087704282, "door_news1", 2632.7080078125, -1345.7750244140625, 48.05699920654297}`
| Treatmentroom Door        | `[2958553358] = {2958553358, 31863704, "p_door10x", 2624.9013671875, -1348.3148193359375, 48.0471076965332}`

| Toy Store                 | Doorhashes
|---------------------------|----------------------------------------------------------------------------------|
| `Ground Floor`            |
| Front Door                | `[1661860332] = {1661860332, 2087704282, "door_news1", 2648.1220703125, -1363.47705078125, 47.94200134277344}` <br> `[3876520388] = {3876520388, 2087704282, "door_news1", 2646.66796875, -1361.751953125, 47.94200134277344}`
| Back Door                 | `[416146753] = {416146753, -198436444, "p_door02x", 2627.6298828125, -1375.97998046875, 45.18999862670898}`
| Floor Door                | `[895753881] = {895753881, -1866470762, "p_doorrhosheriff02x", 2627.88232421875, -1373.15087890625, 45.11939239501953}`
| Staircase Door            | `[3953265430] = {3953265430, 471175027, "p_doornbdaly01x", 2638.56298828125, -1368.0013427734375, 47.95034790039062}`
| `1st Floor`               |
| Office Door               | `[120308265] = {120308265, 471175027, "p_doornbdaly01x", 2638.840087890625, -1364.2626953125, 52.57614135742187}`
| Balcony Door              | `[435251124] = {435251124, 1081626861, "p_door_wglass01x", 2650.621337890625, -1364.851318359375, 53.12338638305664}`
| `2st Floor`               |
| Apartment Door            | `[4201425067] = {4201425067, 471175027, "p_doornbdaly01x", 2644.591552734375, -1371.1353759765625, 57.19290924072265}`
