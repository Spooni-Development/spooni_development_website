# 🏠 St. Denis General Store
Documentation relating to the spooni_sd_general_store.

:::tabs
== INFO
<iframe width="560" height="315" src="https://www.youtube.com/embed/cEMjerej46s?si=7ZH_48HjLUJ77PEb" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>

<a href="https://spooni-mapping.tebex.io/package/6133167" class="button-buy">🛒 Buy Now</a>
<a href="https://spooni.de/rdr2/?m=house29" class="button-map">📍 View on Map</a>
:::

## 1. Installation
spooni_sd_general_store works Standalone.  

To install spooni_sd_general_store:
- Download the resource
  - On [Cfx.re Portal](https://portal.cfx.re/)
- Drag and drop the resource into your resources folder
  - `spooni_sd_general_store`
- Add this ensure in your server.cfg
  ```
    ensure spooni_sd_general_store
  ```
- At the end, restart the server

If you have any problems, you can always open a ticket in the [Spooni Discord](https://discord.gg/spooni).

## 2. Collision compatibility <Badge type="danger" text="IMPORTANT"/>

1. Navigate to the folder where the mapping `spooni_sd_general_store` is installed.
2. Search for a folder named `update`.
3. Go to the respective folder `update_sd_bakery_florist`. 
4. Copy the files from this folder.
5. Open the `spooni_sd_general_store` & `spooni_sd_bakery_florist` folder and go to the `stream` folder.
6. Paste the copied files into the `stream` folder and overwrite existing files.
7. Restart the server to apply the changes.

## 3. For developers
| Ground Floor              | Doorhashes
|---------------------------|----------------------------------------------------------------------------------|
| Front Door (L)            | `[876582098] = {876582098,712336173,"door26",2584.360107421875,-1173.800048828125,52.68999862670898}`
| Front Door (M)            | `[1371295691] = {1371295691,712336173,"door26",2593.179931640625,-1163.300048828125,52.68999862670898}`
| Front Door (R)            | `[638154854] = {638154854,712336173,"door26",2588.1650390625,-1154.949951171875,52.69300079345703}`
| Storage Room              | `[-499553944] = {-499553944,169503210,"p_door_val_bank00_rx",2579.053466796875,-1162.925537109375,52.67250061035156}`

| 1st Floor                 | Doorhashes
|---------------------------|----------------------------------------------------------------------------------|
| Room 1                    | `[726203270] = {726203270,31863704,"p_door10x",2588.7099609375,-1161.1600341797,58.209999084473}`
| Room 2                    | `[227196938] = {227196938,31863704,"p_door10x",2588.7099609375,-1162.5799560547,58.209999084473}`
| Room 3                    | `[1993806501] = {1993806501,31863704,"p_door10x",2588.6999511719,-1170.0300292969,58.209999084473}`
| Room 4                    | `[992516957] = {992516957,31863704,"p_door10x",2586.2800292969,-1170.0400390625,58.209999084473}`
| Balcony Door (L)          | `[643332368] = {643332368,-1005172683,"p_door01x",2586.967041015625,-1174.3599853515625,58.16999816894531}`
| Balcony Door (R)          | `[410311997] = {410311997,-1005172683,"p_door01x",2588.06201171875,-1154.4599609375,58.16999816894531}`
| Bath Door                 | `[-789852620] = {-789852620,944234058,"p_door09x",2584.1865234375,-1163.2099609375,58.20000076293945}`

| 2nd Floor                 | Doorhashes
|---------------------------|----------------------------------------------------------------------------------|
| Room 1                    | `[-1077107569] = {-1077107569,436773540,"p_door08x",2588.75,-1161.1600341797,62.360000610352}`
| Room 2                    | `[415751663] = {415751663,436773540,"p_door08x",2588.75,-1162.5799560547,62.360000610352}`
| Room 3                    | `[-117532942] = {-117532942,436773540,"p_door08x",2588.75,-1170.0300292969,62.360000610352}`
| Room 4                    | `[-729756169] = {-729756169,436773540,"p_door08x",2586.2800292969,-1170.0400390625,62.360000610352}`
| Balcony Door (L)          | `[1600842536] = {1600842536,-1005172683,"p_door01x",2586.969970703125,-1174.3599853515625,62.27999877929687}`
| Balcony Door (R)          | `[1133327213] = {1133327213,-1005172683,"p_door01x",2588.06201171875,-1154.4599609375,62.29000091552734}`
| Bath Door                 | `[1298808800] = {1298808800,944234058,"p_door09x",2584.469970703125,-1159.1700439453125,62.28981781005859}`
