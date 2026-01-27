# Decoration System & Theme Contribution

## Purpose

The Decoration System exists to allow settlements to express identity, culture, and atmosphere **freely and immediately**, without introducing economic friction, hoarding pressure, or mechanical abuse.

Decoration is cosmetic, communal, and impermanent.  
Structure is earned. Expression is free.

---

## Core Principles

> **Decoration is expressive, not economic.  
> Themes are owned by accounts and applied by settlements.  
> Decorators use the settlement's themes, not their own.**

The system prioritizes:

* visual identity
* shared investment
* spam prevention
* ease of reset and change

---

## Decoration vs Construction

Decorations are **not** structures.

### Decorations:

* are cosmetic only
* do not affect construction density
* do not affect upkeep
* are reset when property changes hands
* are placed via the Decoration system

### Construction elements (handled elsewhere):

* floors
* walls
* roofs
* doors
* stairs
* structural dividers

---

## Decoration Cap

Each property has a hard decoration limit based on its size.

* **Decoration cap = 3 decorations per property tile**

Examples:

* 100 tiles → 300 decorations
* 500 tiles → 1,500 decorations

This cap is fixed and does not scale with upkeep.

---

## Decorator Role

Only players assigned the **Decorator** role for a property may interact with the Decoration system.

Decorators may:

* spawn preview decorations
* lock decorations in place
* unlock and remove decorations

Decorators may **only** place decorations:

* on properties they are assigned to
* within the active settlement themes

Decorators cannot place decorations in the open world.

---

## Decoration Placement Flow

### Preview Phase

Decorations are spawned in a **Preview state**.

Preview decorations:

* do not block movement
* do not count toward the decoration cap
* expire automatically if not locked
* are limited to prevent spam

**Limits:**

* Maximum **10 active preview decorations per decorator**
* Preview decorations auto-despawn after a short timer (≈60–90 seconds)

To place more, decorators must lock or allow previews to expire.

---

### Lockdown Phase

When locked:

* the decoration becomes permanent
* it counts toward the decoration cap
* it persists until removed or the property resets

---

## Movement Blocking Rules

By default:

* decorations **do not block movement**

A small whitelist of **craftable furniture** may block movement:

* tables
* chairs
* benches

These are produced via crafting systems and retain physical presence.

All other decorations (rugs, banners, plants, lights, props) are non-blocking.

---

## Decoration Themes

### Theme Unlocks

* Decoration themes are **account-level unlocks**
* Any character created on the account inherits access to unlocked themes
* Themes are cosmetic only and grant no mechanical advantages

Examples:

* Orc
* Pirate
* Noble
* Cultural / regional sets

---

## The Primary/Accessory Theme Model

> **Each theme is a single product with two unlock modes:**
>
> * **Primary Mode (Full Pack)**
> * **Accessory Mode (Accent Pack)**

The *same* theme behaves differently depending on how the settlement assigns it.

### Primary Theme (Full Pack)

When a theme is assigned as the **Primary Theme**, it unlocks:

* all decorations in the theme
* identity-defining objects
* large props and silhouettes
* banners and symbols
* major furniture
* centerpiece items

This defines:

> **What kind of place this is**

Only **one** primary theme may be active.

---

### Accessory Theme (Accent Pack)

When the *same* theme is assigned as an **Accessory Theme**, it unlocks **only accent items**.

Accent items include:

* rugs
* lighting
* small props
* wall details
* decorative clutter
* minor furniture variants

Accessory themes **do not** unlock:

* banners
* thrones
* large statues
* identity-defining symbols
* major wall hangings

This answers:

> **What makes this place unique**

A settlement may have **up to two** accessory themes.

---

### Example: Primary + Accessory in Practice

**Settlement Setup:**

* **Primary Theme:** Pirate / Seafaring
* **Accessory Themes:** Orc Warcamp + Dark Cult

**Result:**

* Pirate flags, ship furniture, nautical layout (primary)
* Orc skull props, crude rugs, bone accents (accessory)
* Cult candles, ritual rugs, dark lighting (accessory)

**What you don't get:**

* Orc war banners replacing pirate flags
* Cult altars as centerpieces
* Visual identity confusion

The silhouette stays pirate.  
The flavor becomes unique.

---

## One-Line Rule

> **A theme unlocks everything when primary,  
> and only accents when secondary.**

---

## Settlement Theme Selection

Each settlement may have **up to two (2) active accessory themes** at any time, plus **one primary theme**.

* Settlement leadership selects the active themes
* Decorators may only place decorations from these themes
* Mixing arbitrary themes is not allowed

This ensures visual coherence and strong settlement identity.

---

## Theme Contribution

### Who Can Contribute Themes

* **Guild members only**

Non-members may decorate if assigned, but cannot contribute themes.

---

### How Contribution Works

* A guild member may contribute one or more themes they own to the settlement
* Contributed themes become available for selection
* Leadership chooses up to **one primary** and **two accessory themes** from contributed themes
* Decorators may use only the active themes

A theme may only be actively contributed to **one settlement at a time**.

---

### Theme Persistence & Removal

* Removing a theme:
  * prevents further placement from that theme
  * does **not** remove existing decorations
* Theme access persists through contributor death
* All decorations reset automatically if the property resets or changes hands

---

## Decorator's Palette

Decorations are placed using a **Decorator's Palette**.

The palette:

* lists available settlement themes
* allows category browsing (rugs, banners, plants, etc.)
* spawns preview decorations
* enforces preview and cap limits
* clearly distinguishes primary vs accessory theme items

The palette reflects **settlement theme availability**, not personal unlocks.

---

## Admin & Governance Cleanup Controls

Settlement governors and leadership have cleanup tools to manage decoration abuse, mistakes, or aesthetic changes.

### Available Cleanup Actions

Governors may:

1. **Remove all decorations placed by a specific decorator**
   * Options:
     * last 24 hours
     * last 7 days
     * all decorations

2. **Remove all decorations of a specific theme**
   * Instantly clears a theme from the settlement
   * Used when changing active themes

3. **Remove all decorations on the property**
   * Full aesthetic reset
   * Does not affect structures

These actions are administrative tools, not routine gameplay.

---

## What Happens on Property Reset

If a property:

* changes hands
* is destroyed
* or the guild relocates

Then:

* all decorations are removed
* the property returns to its static world state

Decoration loss is expected and non-punitive.

---

## Decorator Overlays

Decorator Contractors may also apply **thematic overlays** to pre-existing structures (walls, roofs, floors, etc.).

These overlays:

* change the visual appearance of structural elements
* do not alter their function
* follow the same theme system rules

*(Full details in the Decorator Overlays documentation.)*

---

## Design Intent

This system ensures:

* settlements become visually alive immediately
* no single player controls aesthetics
* donations remain cosmetic and non-exploitative
* decoration spam is impossible
* resets feel natural, not punitive
* expression does not interfere with economy or combat

---

## Summary

> **Decorations are free.  
> Themes are pooled.  
> Identity is communal.  
> Cleanup is easy.**

Structure defines power.  
Decoration defines culture.

One theme, two modes.  
The context determines the power.
