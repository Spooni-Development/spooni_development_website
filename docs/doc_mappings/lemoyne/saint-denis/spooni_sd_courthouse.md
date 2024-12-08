# 🏠 St. Denis Courthouse
Documentation relating to the [spooni_sd_courthouse](https://spooni-shop.fragmentor.io/product/5824786).

:::tabs
== PREVIEW
<iframe width="560" height="315" src="https://www.youtube.com/embed/4S6kANgY18E?si=OOaKElMleW4WXWO3" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
== BUY
[Buy the mapping](https://spooni-shop.fragmentor.io/product/5824786)
:::

## 1. Installation
spooni_sd_courthouse works Standalone.  

To install spooni_sd_courthouse:
- Drag and drop the resource into your resources folder
  - `spooni_sd_courthouse`
- Add this ensure in your server.cfg
  ```
    ensure spooni_sd_courthouse
  ```
- At the end, restart the server

If you have any problems, you can always open a ticket in the [Spooni Discord](https://discord.gg/spooni).

## 2. Collision compatibility <Badge type="danger" text="IMPORTANT"/>

1. Navigate to the folder where the mapping `spooni_sd_courthouse` is installed.
2. Search for a folder named `update`.
3. Go to the respective folder `update_sd_promenade` or `update_sd_spaldings`.
4. Copy the files from this folder.
5. Open the `spooni_sd_courthouse` & `spooni_sd_promenade` or `spooni_sd_spaldings` folder and go to the `stream` folder.
6. Paste the copied files into the `stream` folder and overwrite existing files.
7. Restart the server to apply the changes.

*Note*: If you have installed all mappings, search for a folder named `update_all`. Copy the files from this folder and paste them into the `stream` folder of `spooni_sd_courthouse`, `spooni_sd_promenade` and `spooni_sd_spaldings`. Overwrite the existing files.

## 3. For developers

| Exterior                  | Doorhashes
|---------------------------|----------------------------------------------------------------------------------|
| Front Doors               | `[4231642606] = {4231642606,1707793145,"p_doorbrafrench02rx",2595.3898925781,-1299.79296875,51.875}` <br> `[516162306] = {516162306,541633066,"p_doorbrafrench02lx",2595.9699707031,-1301.0300292969,51.875}`
| Right Doors               | `[2185644549] = {2185644549,1707793145,"p_doorbrafrench02rx",2580.4201660156,-1289.0311279297,51.870410919189}` <br> `[2017441272] = {2017441272,541633066,"p_doorbrafrench02lx",2581.6535644531,-1288.4533691406,51.875003814697}`
| Left Doors                | `[881012352] = {881012352,1707793145,"p_doorbrafrench02rx",2595.8171386719,-1318.8203125,51.870410919189}` <br> `[1349969511] = {1349969511,541633066,"p_doorbrafrench02lx",2594.58203125,-1319.4114990234,51.875003814697}`
| Back Doors                | `[3706191639] = {3706191639,1707793145,"p_doorbrafrench02rx",2580.8747558594,-1308.0676269531,51.865142822266}` <br> `[2492001930] = {2492001930,541633066,"p_doorbrafrench02lx",2580.2978515625,-1306.8304443359,51.865142822266}`

| Interior Floor Left       | Doorhashes
|---------------------------|----------------------------------------------------------------------------------|
| Metal Door (L)            | `[3025864288] = {3025864288,-102921904,"p_doortrolley02x",2593.5883789063,-1311.578125,51.885669708252}`
| Wood Door (L)             | `[3669898052] = {3669898052,202254792,"p_door13x_beecher",2596.37109375,-1317.5249023438,51.876438140869}`
| Wood Door 1 (R)           | `[3438843833] = {3438843833,-113235247,"p_door15x",2589.2158203125,-1310.4891357422,51.87813949585}`
| Wood Door 2 (R)           | `[4181889070] = {4181889070,-113235247,"p_door15x",2592.7355957031,-1318.0310058594,51.87813949585}`

| Interior 2 Floor Left     | Doorhashes
|---------------------------|----------------------------------------------------------------------------------|
| Door                      | `[2965471021] = {2965471021,367033685,"p_doornbd39x",2593.5017089844,-1306.6903076172,58.792251586914}`
| Door                      | `[192165009] = {192165009,367033685,"p_doornbd39x",2595.5029296875,-1305.7645263672,58.792251586914}`

| Interior Floor Right      | Doorhashes
|---------------------------|----------------------------------------------------------------------------------|
| Wood Door Toilet (R)      | `[3885329620] = {3885329620,430302479,"p_door12x",2586.7319335938,-1296.8422851563,51.885715484619}`
| Wood Door (R)             | `[3970693133] = {3970693133,202254792,"p_door13x_beecher",2583.4958496094,-1289.8621826172,51.874141693115}`
| Wood Door (L)             | `[2054296207] = {2054296207,-619255230,"p_door11x_beecher",2579.830078125,-1290.3161621094,51.870143890381}`

| Interior 2 Floor Right    | Doorhashes
|---------------------------|----------------------------------------------------------------------------------|
| Door                      | `[3289556431] = {3289556431,367033685,"p_doornbd39x",2591.4948730469,-1297.1612548828,58.792251586914}`
| Door                      | `[3604925287] = {3604925287,367033685,"p_doornbd39x",2589.5021972656,-1298.0874023438,58.792251586914}`
