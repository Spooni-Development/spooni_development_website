---
title: Weapon Controller Script
description: Dynamic weapon management system for RedM by Dietrich Development. Control weapon behavior, damage, and configurations for your Red Dead Redemption 2 roleplay server.
head:
  - - meta
    - name: keywords
      content: RedM weapon controller, weapon management, gun script, Dietrich Development, weapon system, RedM weapons, RDR2 firearms, weapon configuration
  - - meta
    - property: og:image
      content: https://spooni.pages.dev/icons/logo.svg
  - - meta
    - property: og:url
      content: https://spooni.pages.dev/doc_scripts/dietrich/spooni_weapon_controller
---

# 🔫 Dynamic Weapon Controller
Documentation relating to the spooni_weapon_controller.

:::tabs
== INFO
<iframe width="560" height="315" src="https://dunb17ur4ymx4.cloudfront.net/packages/images/2461b380c35cc8a6248758887af39481d98fe228.png" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

<a href="https://tebex.dietrich-development.com//package/6923352?basket=cmw12v-844c3a494a9770e1d59e3b7f3874fcf8082974c4" class="button-buy">🛒 Buy Now</a>
:::

## 1. Installation
spooni_weapon_controller works Standalone.

To install spooni_weapon_controller:
- Download the resource
  - On [Cfx.re Portal](https://portal.cfx.re/)
- Drag and drop the resource into your resources folder
  - `spooni_weapon_controller`
- Add this ensure in your server.cfg
  ```
    ensure spooni_weapon_controller
  ```
- Now you can configure and translate the script as you like
  - `config.lua`
- At the end, restart the server

If you have any problems, you can always open a ticket in the [Spooni Discord](https://discord.gg/spooni).

## 2. Usage
Take full control over how weapons behave on your RedM server with the Dynamic Weapon Controller. This powerful system allows you to fine-tune damage, recoil, accuracy, and other weapon stats – either globally or per player – based on configurable skill progression.

Designed for maximum flexibility, this script works with any framework and is fully open-source, so you can adapt it exactly to your server's needs.

## 3. For developers

:::details Config.lua
```lua
-- This file controls how weapon damage, recoil, and accuracy
-- scale with player skill levels. Adjust the values below
-- to change progression type or define custom curves per level.

Config = {
    debug = true,

    -- Experience awarded per relevant action (e.g., shot fired)
    PerkExperience = {
        amount = 1,  -- Perk points gained per action
    },

    -- Define how stats evolve from minLevel to maxLevel
    PerkCurve = {
        minLevel = 0,   -- Lowest skill level
        maxLevel = 1000,  -- Highest skill level

        -- Choose interpolation type: "linear", "exponential", or "custom"
        interpolation = "linear",
        -- If exponential: power to raise t (e.g., 2 for quadratic curve)
        expPower = 2.0,

        -- If custom: supply a table of overrides per level
        -- Example: customValues = { [10] = { minAccuracy = 0.12, maxAccuracy = 2.0, ... }, ... }
        customValues = {},

        -- Base and target values for each stat (used for linear/exponential)
        accuracy = { start = 0.20, finish = 0.00 },
        maxAccuracy = { start = 2.50, finish = 1.00 },
        accuracyGainSpeed = { start = 0.005, finish = 0.010 },
        bowInaccuracyThreshold = { start = 0.08, finish = 0.00 },
        scopeRecoil = { start = 4.50, finish = 1.00 },
        reloadFailChance = { start = 0.5, finish = 0.0 }, -- 50%-0% chance to fail reload
        reloadSpeedFactor = { start = 0.5, finish = 1.5 }, -- >1 = faster, <1 = slower --time for disabling firing after reload !NOT DELAYING ANIMATION!
    },

    reloadFailedNotification = true,  --if true, a notification will be shown when reload fails


    -- Per-weapon damage multipliers (lower = weaker damage)
    DamageModifiers = {
        [`WEAPON_BOW`]             = 0.5,
        [`WEAPON_MELEE_HATCHET`]   = 0.4,
        [`WEAPON_THROWN_TOMAHAWK`] = 0.5,
    },
    -- Disable headshot damage modifier, that player can't do greater damage with headshot
    DisableHeadshotDamage = true,

    -- Global recoil step per shot multiplier
    RecoilStep = 0.35,

    -- Per-weapon recoil multipliers (higher = more recoil)
    RecoilModifiers = {
        [`WEAPON_REPEATER_WINCHESTER`] = 1.0,
        [`WEAPON_RIFLE_BOLTACTION`]    = 2.5,
    },

}







-------------------------------------------------
-- Helper functions for Developer
-------------------------------------------------


-- Helper: linear interpolation
local function lerp(a, b, t)
    return a + (b - a) * t
end

-- Compute t based on interpolation type
local function getInterpT(curve, level)
    local minL, maxL = curve.minLevel, curve.maxLevel
    local range = maxL - minL
    local t = (range > 0) and ((level - minL) / range) or 0

    if curve.interpolation == "linear" then
        return t
    elseif curve.interpolation == "exponential" then
        return math.pow(t, curve.expPower or 1)
    elseif curve.interpolation == "custom" then
        return nil  -- custom values handled separately
    else
        return t  -- fallback to linear
    end
end

-- Build table of computed perk values per level
Config.PerkLevels = {}
do
    local c = Config.PerkCurve
    for lvl = c.minLevel, c.maxLevel do
        -- If a custom override exists for this level, use it directly
        if c.interpolation == "custom" and c.customValues[lvl] then
            Config.PerkLevels[lvl] = c.customValues[lvl]
        else
            -- Compute interpolation factor
            local t = getInterpT(c, lvl)
            -- Populate stats via interpolation
            Config.PerkLevels[lvl] = {
                minAccuracy               = lerp(c.accuracy.start, c.accuracy.finish, t),
                maxAccuracy               = lerp(c.maxAccuracy.start, c.maxAccuracy.finish, t),
                accuracyIncreaseSpeed     = lerp(c.accuracyGainSpeed.start, c.accuracyGainSpeed.finish, t),
                maxPitchDeltaForBowInaccuracy = lerp(c.bowInaccuracyThreshold.start, c.bowInaccuracyThreshold.finish, t),
                maxScopeRecoil            = lerp(c.scopeRecoil.start, c.scopeRecoil.finish, t),
                reloadFailChance          = lerp(c.reloadFailChance.start, c.reloadFailChance.finish, t),
                reloadSpeedFactor         = lerp(c.reloadSpeedFactor.start, c.reloadSpeedFactor.finish, t),
            }
        end
    end
end


function Config.GetPerk(level)
    local c = Config.PerkCurve
    -- Clamp level to valid range
    local lvl = math.max(c.minLevel, math.min(c.maxLevel, level))
    return Config.PerkLevels[lvl]
end
```
:::