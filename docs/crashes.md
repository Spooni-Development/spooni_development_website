---
layout: doc
title: RedM Crash Codes
---

# 🔧 RedM Crash Codes & Solutions

This comprehensive guide helps you identify and resolve common RedM crashes. Understanding these error codes can save you hours of debugging.

## 📋 Quick Reference

| Crash Code | Category | Description |
|------------|----------|-------------|
| `0x496AC5DF:961` | 📊 Pool Limits | Object pool overflow (3000 objects limit) |
| `0x9952DB5E:212` | 📊 Pool Limits | YTYP error or object pool full (990 YDR max) |
| `0x2914FEF:439` | 📊 Pool Limits | Pool allocation error (too many files) |
| `RDR2_b1491.exe!sub_140E89DBC (0x4d4)` | 📊 Pool Limits | ItemSet pool limit exceeded (400 max) |
| `0x6263F616:223` | 📊 Pool Limits | MLO portal limit exceeded |
| `0x5C385C12:2130` | 📁 File Corruption | Corrupted YDR file |
| `0x9B8D153B:581` | 📁 File Corruption | Corrupt YTYP file (particle effect) |
| `RDR2_b1491.exe!sub_142E835C0 (0xe)` | 📁 File Corruption | Damaged texture file (YTD) |
| `RDR2_b1491.exe!sub_142B925B0 (0x72)` | 📁 File Corruption | Damaged YTYP file |
| `RDR2_b1491.exe!._ZN4rage14fwMapDataStore13FinishLoadingENS_13strLocalIndexERNS_22fwPsoStoreLoadInstanceE (0x68)` | 📁 File Corruption | Damaged YMAP file |
| `0x1F045E58:441` | ⚙️ Configuration | File added without restart or broken YDR |
| `0x840C4442:762` | ⚙️ Configuration | Incompatible mod loaded |
| `RDR2_b1491.exe!sub_140E35DF0 (0x1e1)` | ⚙️ Configuration | Inconsistent object information |
| `RDR2_b1491.exe!sub_142597CD4 (0x7e)` | ⚙️ Configuration | Empty YMAP file loaded |
| `RDR2_b1491.exe!?Entities_Create@fwMapDataContents@rage@@S?_PPAVfwMapData@rage@@PAVfwMapDataContents@Entities_Create@@H@Z (0x10a)` | ⚙️ Configuration | Too many door extensions |
| `ERR_GFX_STATE` | 🎨 Graphics | Graphics driver issue or GPU overheating |
| `RDR2_b1491.exe!sub_142B27784 (0x4a, 0x3f)` | 🌍 Environment | Faulty time cycle |
| `RDR2_b1491.exe!sub_142B8E35C (0x1d3)` | 🌍 Environment | YBN artifact issue (Blender 3) |
| `0x16634BF9:435` | ❓ Unknown | No specific information available |

## 📊 Pool & Resource Limits

These crashes occur when you exceed RedM's built-in resource limits.

:::details 0x496AC5DF:961 - Object Pool Overflow
**Problem:** Too many props being unloaded in YMAP or YTYP files.

**Details:** RedM has an object pool limit of 3,000 objects. Crashes typically occur when exceeding 2,500.

**Solution:**
- Reduce the number of props in your YMAP files
- Split large mappings into multiple smaller files
- Optimize by removing unnecessary objects
:::

:::details 0x9952DB5E:212 - YTYP Error / Object Pool Full
**Problem:** Error in an edited YTYP file of an MLO or object pool is full.

**Details:** Maximum YDR files: 990

**Solution:**
- Check your YTYP file for errors
- Reduce the number of YDR files on your server
- Review `gameconfig.xml` for pool limits
:::

:::details 0x2914FEF:439 - Pool Allocation Error
**Problem:** Pool allocation error when too many files are loaded.

**Details:** Occurs with excessive YDR, YFT, YBN, XML, or YMAP files. Maximum YDR files: 990.

**Solution:**
- Check pool limits in `gameconfig.xml`
- Reduce the number of resource files
- Optimize your resource loading order
:::

:::details RDR2_b1491.exe!sub_140E89DBC (0x4d4) - ItemSet Pool Limit
**Problem:** Pool size error for `Pool Size ItemSet`.

**Details:** Exceeding the limit of 400 ItemSets.

**Solution:**
- Reduce the number of item sets in your files
- Combine similar items where possible
:::

:::details 0x6263F616:223 - MLO Portal Limit
**Problem:** Too many MLO portals on the server.

**Details:** RedM has a strict portal limit for MLO interiors.

**Solution:**
- Use MICO system instead of traditional MLOs
- Reduce the number of MLO interiors
- Optimize portal placement in existing MLOs
:::

## 📁 File Corruption Errors

These crashes are caused by corrupted or malformed files.

:::details 0x5C385C12:2130 - Corrupted YDR File
**Problem:** Crash due to a corrupted YDR (model) file.

**Solution:**
- Identify and remove the corrupted YDR file
- Re-export the model from your 3D software
- Verify file integrity before uploading
:::

:::details 0x9B8D153B:581 - Corrupt YTYP File
**Problem:** Corrupt YTYP file, often caused by faulty `CExtensionDefParticleEffect`.

**Solution:**
- Check particle effects in your YTYP file
- Remove or fix the faulty `CExtensionDefParticleEffect`
- Use a YTYP validator tool
:::

:::details RDR2_b1491.exe!sub_142E835C0 (0xe) - Damaged Texture
**Problem:** Crash due to a damaged texture file (YTD).

**Solution:**
- Find and replace the corrupted YTD file
- Re-export textures at proper resolution
- Ensure textures use supported formats
:::

:::details RDR2_b1491.exe!sub_142B925B0 (0x72) - Damaged YTYP
**Problem:** Crash caused by a damaged YTYP file.

**Solution:**
- Validate your YTYP file structure
- Check for missing or incorrect entries
- Re-create the YTYP file if necessary
:::

:::details RDR2_b1491.exe!._ZN4rage14fwMapDataStore13FinishLoadingENS_13strLocalIndexERNS_22fwPsoStoreLoadInstanceE (0x68) - Damaged YMAP
**Problem:** Crash caused by a damaged YMAP file.

**Solution:**
- Check YMAP file for corruption
- Verify coordinates and entity references
- Re-export the YMAP from CodeWalker
:::

## ⚙️ Configuration & Loading Errors

Issues related to server configuration and resource loading.

:::details 0x1F045E58:441 - File Added Without Restart / Broken YDR
**Problem:** New file added to server without restart, or YDR file is broken.

**Solution:**
- Always restart your server after adding new files
- Verify YDR file integrity
- Check file permissions and paths
:::

:::details 0x840C4442:762 - Incompatible Mod
**Problem:** Loading mods that are not allowed in RedM.

**Solution:**
- Remove the incompatible mod
- Check RedM compatibility before installing mods
- Use only RedM-specific resources
:::

:::details RDR2_b1491.exe!sub_140E35DF0 (0x1e1) - Inconsistent Object Information
**Problem:** YTYP file loaded and unloaded with inconsistent object information.

**Solution:**
- Ensure consistent object definitions
- Check for duplicate entries
- Verify all referenced models exist
:::

:::details RDR2_b1491.exe!sub_142597CD4 (0x7e) - Empty YMAP File
**Problem:** Empty YMAP file is loaded onto the server.

**Solution:**
- Remove or populate the empty YMAP file
- Check your resource structure
- Ensure all YMAP files contain valid data
:::

:::details RDR2_b1491.exe!?Entities_Create@fwMapDataContents@rage@@S?_PPAVfwMapData@rage@@PAVfwMapDataContents@Entities_Create@@H@Z (0x10a) - Too Many Door Extensions
**Problem:** Too many door extensions in YMAP or YTYP files.

**Solution:**
- Reduce the number of door extensions
- Optimize door placement
- Use alternative methods for door management
:::

## 🎨 Rendering & Graphics Errors

Crashes related to graphics and rendering issues.

:::details ERR_GFX_STATE - Graphics Driver Issue
**Problem:** Faulty graphics card drivers or GPU overheating.

**Solution:**
- Update your graphics card drivers
- Adjust graphics settings (lower quality)
- Improve GPU cooling
- Check for GPU hardware issues
- Clean dust from GPU fans
:::

## 🌍 World & Environment Errors

Issues with world data and environmental systems.

:::details RDR2_b1491.exe!sub_142B27784 (0x4a, 0x3f) - Faulty Time Cycle
**Problem:** Faulty time cycle configuration or overlapping time cycles.

**Solution:**
- Check time cycle XML files
- Remove overlapping time cycles
- Verify time cycle transitions
- Use only one time cycle mod at a time
:::

:::details RDR2_b1491.exe!sub_142B8E35C (0x1d3) - YBN Artifact Issue
**Problem:** YBN file created in Blender 3 using artifacts above 9800.

**Details:** Only occurs with new server artifacts.

**Solution:**
- Use artifacts below 9800 when creating YBN files
- Update your Blender export settings
- Recreate collision files with proper settings
:::

## ❓ Unknown / Unresolved Errors

:::details 0x16634BF9:435 - Unknown Error
**Problem:** No specific information available for this crash code.

**Solution:**
- Check recent changes to your server
- Review server logs for additional context
- Join the [SPOONI Discord](https://discord.gg/spooni) for community support
:::

## 🆘 Additional Help

If you continue experiencing crashes after trying these solutions:

- **Join our Discord:** [discord.gg/spooni](https://discord.gg/spooni)
- **Check Server Console:** Look for additional error messages
- **Review Recent Changes:** Identify what was modified before the crash started