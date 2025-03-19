---
layout: home
title: RedM Crashes
sidebar: false
---

# RedM Crashes

| Name                                       | Description                                                                 |
|--------------------------------------------|-----------------------------------------------------------------------------|
| `0x496AC5DF:961`                           | Crash occurs when unloading too many props in a YMAP or YTYP file. RedM has an object pool limit of 3,000 objects, and crashes can occur when exceeding 2,500.
| `0x1F045E58:441`                           | Occurs when a new file is added to the server without restarting it or if a YDR file is broken.
| `0x6263F616:223`                           | Caused by having too many MLO portals on the server, as RedM has a portal limit.
| `0x9952DB5E:212`                           | Error in an edited YTYP file of an MLO or if the object pool is full. Maximum YDR files: 990.
| `0x840C4442:762`                           | Triggered when loading mods that are not allowed in RedM.
| `0x16634BF9:435`                           | No specific information available.
| `0x5C385C12:2130`                          | Crash due to a corrupted YDR file.
| `0x9B8D153B:581`                           | Corrupt YTYP file, often caused by a faulty `CExtensionDefParticleEffect`.
| `0x2914FEF:439`                            | Pool allocation error, similar to a pool size issue. Occurs when too many YDR, YFT, YBN, XML, or YMAP files are loaded. Maximum YDR files: 990. All pool limits can be found in `gameconfig.xml` in the RedM folder.
| `ERR_GFX_STATE`                            | Caused by faulty graphics card drivers or GPU overheating. Solution: Update drivers, adjust graphics settings, or improve cooling.
| `RDR2_b1491.exe!sub_142E835C0 (0xe)`       | Crash due to a damaged texture file (YTD).
| `RDR2_b1491.exe!sub_142B27784 (0x4a, 0x3f)` | Faulty time cycle, e.g., incorrect configuration or overlapping time cycles.
| `RDR2_b1491.exe!sub_142B8E35C (0x1d3)`     | YBN issue with new artifacts. Occurs when a YBN file is created in Blender 3 and uses artifacts above 9800.
| `RDR2_b1491.exe!sub_140E89DBC (0x4d4)`     | Pool size error for `Pool Size ItemSet` when exceeding the limit of 400.
| `RDR2_b1491.exe!?Entities_Create@fwMapDataContents@rage@@S?_PPAVfwMapData@rage@@PAVfwMapDataContents@Entities_Create@@H@Z (0x10a)` | Crash due to too many door extensions in YMAP or YTYP files.
| `RDR2_b1491.exe!sub_142B925B0 (0x72)`      | Crash caused by a damaged YTYP file.
| `RDR2_b1491.exe!sub_140E35DF0 (0x1e1)`     | Occurs when a YTYP file is loaded and unloaded but contains inconsistent object information.
| `RDR2_b1491.exe!._ZN4rage14fwMapDataStore13FinishLoadingENS_13strLocalIndexERNS_22fwPsoStoreLoadInstanceE (0x68)` | Crash caused by a damaged YMAP file.
| `RDR2_b1491.exe!sub_142597CD4 (0x7e)`      | Occurs when an empty YMAP file is loaded onto the server.