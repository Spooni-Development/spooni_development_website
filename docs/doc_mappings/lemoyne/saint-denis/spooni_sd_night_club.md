---
title: St. Denis Night Club
description: SPOONI St. Denis Night Club MLO for RedM - Upscale entertainment venue with bar and stage. Nightlife establishment for Saint Denis roleplay in Red Dead Redemption 2.
head:
  - - meta
    - name: keywords
      content: Saint Denis night club, entertainment venue, Lemoyne nightclub, St Denis nightlife, cabaret, RedM night club, RDR2 entertainment
  - - meta
    - property: og:image
      content: https://spooni.pages.dev/icons/logo.svg
  - - meta
    - property: og:url
      content: https://spooni.pages.dev/doc_mappings/lemoyne/saint-denis/spooni_sd_night_club
---

# 🏠 St. Denis Night Club
Documentation relating to the spooni_sd_night_club.

<Badge type="warning" text="DISCLAIMER: This MLO is only an add-on to the existing St. Denis Saloon MLO from R*" />

:::tabs
== INFO
<iframe width="560" height="315" src="https://www.youtube.com/embed/R52JiHn3LC8?si=NV0t88goGJOK2ITa" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

<a href="https://spooni-mapping.tebex.io/package/6520499" class="button-buy">🛒 Buy Now</a>
<a href="https://spooni.de/rdr2/?m=house3" class="button-map">📍 View on Map</a>
:::

## 1. Installation
spooni_sd_night_club works Standalone.  

To install spooni_sd_night_club:
- Download the resource
  - On [Cfx.re Portal](https://portal.cfx.re/)
- Drag and drop the resource into your resources folder
  - `spooni_sd_night_club`
- Add this ensure in your server.cfg
  ```
    ensure spooni_sd_night_club
  ```
- At the end, restart the server

If you have any problems, you can always open a ticket in the [Spooni Discord](https://discord.gg/spooni).

## 2. For developers
### Collision compatibility <Badge type="danger" text="IMPORTANT"/>
1. Navigate to the folder where the mapping `spooni_sd_night_club` is installed.
2. Search for a folder named `update`.
3. Go to the respective folder `update_sd_jeweler`.
4. Copy the files from this folder.
5. Open the `spooni_sd_night_club` & `spooni_sd_jeweler` folder and go to the `stream` folder.
6. Paste the copied files into the `stream` folder and overwrite existing files.
7. Restart the server to apply the changes.

### Doorhashes <Badge type="warning" text="INFO: Some doorlocks have been overwritten. To avoid problems, we recommend entering our doorlocks at the top of the list in your doorlock script." />
| Groundfloor               | Doorhashes
|---------------------------|----------------------------------------------------------------------------------|
| Front Door                | `[1961682744] = {1961682744, -705727376, "p_doornbd31x", 2629.29541015625, -1220.293212890625, 52.39814376831055}` <br> `[1127154621] = {1127154621, -1480266885, "p_doornbd31rx", 2627.745361328125, -1221.854736328125, 52.39814376831055}`
| Back Door                 | `[3488717596] = {3488717596, -705727376, "p_doornbd31x", 2641.5322265625, -1232.9658203125, 52.39528656005859}`
| Club Door                 | `[953969904] = {953969904, -705727376, "p_doornbd31x", 2639.6220703125, -1229.8468017578125, 52.39528656005859}`

| 1st Floor                 | Doorhashes
|---------------------------|----------------------------------------------------------------------------------|
| Storage Door              | `[1467100227] = {1467100227, -1322808940, "door_bastille", 2638.132080078125, -1227.0758056640625, 58.5652847290039}`
| Balcony Door              | `[997782609] = {997782609, -1860805927, "p_doornbfrench1a_x", 2633.919677734375, -1219.7867431640625, 58.59626770019531}` <br> `[162336954] = {162336954, -1437756396, "p_doornbfrench1b_x", 2632.5693359375, -1219.7867431640625, 58.59828567504883}`
| Room Door                 | `[536034630] = {536034630, 367033685, "p_doornbd39x", 2634.680908203125, -1225.0213623046875, 58.59611511230469}`
| Room Balcony Left Door    | `[3998767633] = {3998767633, -1860805927, "p_doornbfrench1a_x", 2640.3271484375, -1219.7867431640625, 58.59290313720703}` <br> `[4292214028] = {4292214028, -1437756396, "p_doornbfrench1b_x", 2638.980712890625, -1219.7867431640625, 58.59322357177734}`
| Room Balcony Right Door   | `[150572027] = {150572027, -1860805927, "p_doornbfrench1a_x", 2637.20751953125, -1219.7867431640625, 58.59626770019531}` <br> `[993259631] = {993259631, -1437756396, "p_doornbfrench1b_x", 2635.858642578125, -1219.7867431640625, 58.5894546508789}`

| 2st Floor                 | Doorhashes
|---------------------------|----------------------------------------------------------------------------------|
| Big Door                  | `[1856035488] = {1856035488, -1322808940, "door_bastille", 2632.97216796875, -1231.3458251953125, 64.74528503417969}`

| Night Club                | Doorhashes
|---------------------------|----------------------------------------------------------------------------------|
| Dressing Room             | `[3534893579] = {3534893579, 325782917, "p_door03x", 2623.082275390625, -1231.69580078125, 48.92528533935547}`
| Restroom                  | `[3885784031] = {3885784031, 325782917, "p_door03x", 2639.942138671875, -1220.5557861328125, 48.61528778076172}`
| Kitchen Door              | `[4292119635] = {4292119635, 849871129, "p_door62x", 2630.172119140625, -1237.1258544921875, 48.58528137207031}`
| Private Room 1            | `[1457142361] = {1457142361, -113235247, "p_door15x", 2633.922119140625, -1240.2857666015625, 48.58528137207031}`
| Private Room 2            | `[690773758] = {690773758, -113235247, "p_door15x", 2636.482177734375, -1238.0657958984375, 48.58528137207031}`
| Private Room 3            | `[3033228496] = {3033228496, 325782917, "p_door03x", 2640.542236328125, -1238.6258544921875, 48.58528137207031}`
| Office 1                  | `[169451741] = {169451741, 1650744725, "p_door33x", 2630.192138671875, -1244.4658203125, 48.58528137207031}`
| Office 2                  | `[856978126] = {856978126, 1650744725, "p_door33x", 2634.7451171875, -1246.0958251953125, 48.58528137207031}`
| Head Office               | `[91199365] = {91199365, 1650744725, "p_door33x", 2640.6181640625, -1245.57080078125, 48.58528137207031}`
| Safe Door                 | `[3719542432] = {3719542432, -788527275, "p_door_val_bankvault02x", 2645.564208984375, -1243.6358642578125, 48.55528259277344}`

| Basement                  | Doorhashes
|---------------------------|----------------------------------------------------------------------------------|
| Basement Door             | `[4183228244] = {4183228244, 325782917, "p_door03x", 2639.692138671875, -1234.066162109375, 48.58528137207031}`
| Distillery Room           | `[2704915885] = {2704915885, 1650744725, "p_door33x", 2636.002197265625, -1229.8858642578125, 44.08528137207031}`
| Library Door              | `[3816309289] = {3816309289, 1650744725, "p_door33x", 2633.402099609375, -1227.1358642578125, 44.08528137207031}`
| Torture Room              | `[20413863] = {20413863, -102921904, "p_doortrolley02x", 2633.502197265625, -1225.0758056640625, 44.08528137207031}`
| Cell Door 1               | `[169250661] = {169250661, -798350419, "p_door_val_jail_cell01x", 2636.132080078125, -1226.6458740234375, 44.07528686523437}`
| Cell Door 2               | `[1163790371] = {1163790371, -798350419, "p_door_val_jail_cell01x", 2634.8720703125, -1223.2158203125, 44.07528686523437}`
| Cell Door 3               | `[350987535] = {350987535, -798350419, "p_door_val_jail_cell01x", 2639.382080078125, -1221.98583984375, 44.08528137207031}`