**Status:** Ship-Ready (v1.0)
**Last Edited:** 2026-01-29
**Scope:** Carpentry crafting of building parts, consumption mechanics, and irreversibility rules.
**Integrated With:** [Building Permissions & Access](Building-Permissions-Access.md), [Construction Limits & Upkeep](Construction-Limits-Upkeep.md)
**Explicitly Excludes:** Ownership, storage mechanisms, permanence, decorative styling.

---

# Carpentry: Building Parts

## Purpose

Carpentry supports settlement-building by producing standardized building parts that can be bought, sold, stockpiled, transported, and consumed to create structures on guild-controlled land.

Carpenters manufacture.  
Builders assemble.

---

## Core Model

Carpenters can craft **Building Parts** as inventory items.

Building Parts are:

* tradeable items
* vendor-sellable
* lootable/stealable like normal goods
* consumed when used in construction
* never refunded once confirmed

Building is a **consumption system**, not a placement-deed system.

---

## Building Part Types

Carpenters can craft the following building part items:

* Floor Parts
* Roof Parts
* Wall Parts
* Door Parts

Each part type has a fixed **"part weight"** used for construction accounting.

### Part Weights (for coding clarity)

* **Floor Part = 1**
* **Roof Part = 2**
* **Wall Part = 3**
* **Door Part = 4**

These weights represent how much construction budget a placed element consumes.

---

## How Building Parts Are Used

Building parts are consumed only when a player:

* has **Builder permission** on a property, and
* is physically **within that property's buildable area**, and
* **confirms** a construction placement

A player may own the parts without permission, but cannot place them without Builder authorization.

---

## Construction Budget

Every structure a player builds has a single tracked value:

**Total Part Count**

This is the sum of all part weights used in the structure.

### Example:

* 10 floors → 10 × 1 = **10**
* 6 walls → 6 × 3 = **18**
* 2 doors → 2 × 4 = **8**
* 4 roof pieces → 4 × 2 = **8**

**Total Part Count = 44**

This number is used for:

* construction accounting
* future limits / density systems (defined elsewhere)

---

## Preview vs Confirm

Construction occurs in two phases:

### 1) Preview Placement (No Cost)

Builders may place construction elements in **Preview Mode**.

Preview Mode:

* shows the planned structure layout
* allows adjustment before committing
* does not consume parts
* is temporary and can be cancelled

Builders may place multiple preview elements before confirming.

### 2) Confirm Placement (Consumes Parts)

When the builder confirms:

* each preview element becomes real
* required building parts are consumed from the builder's inventory
* the construction becomes locked to the property

Confirmation is the only moment parts are consumed.

---

## Consumption Rules

On confirm:

* parts are consumed based on the part weight of each placed element
* consumption fails if inventory lacks required parts
* if consumption fails, nothing confirms (no partial builds)

Builders must have enough parts for the full confirmation.

---

## Irreversibility Rule

Once a construction element is confirmed:

* it **cannot** be converted back into parts
* it **cannot** be refunded
* it **cannot** be recovered

It can only be:

* destroyed

This ensures:

* no infinite recycling exploits
* clean resource sinks
* meaningful commitment

---

## Destruction Rule (No Refund)

If a constructed element is destroyed for any reason:

* it is removed from the world
* **no parts are returned**
* the builder loses the invested parts permanently

This remains true even if:

* the guild changes plans
* the structure is remodeled
* the property changes hands

---

## Economic Role of Carpentry

This system makes carpenters economically essential because:

* construction requires consumable goods
* settlements must continuously build, rebuild, and expand
* parts can be traded and stockpiled
* raids and conflict can disrupt supply lines

Carpenters become the backbone of settlement growth.

---

## What Carpentry Does Not Do

Building Parts do **not** provide:

* ownership
* storage
* permanence
* cosmetic styling

They provide only:

* functional structure

---

## Summary

Carpenters craft standardized Building Parts:

* Floor Part (1)
* Roof Part (2)
* Wall Part (3)
* Door Part (4)

Builders can preview structures freely, but:

> **Parts are consumed only on confirm.**  
> **Confirmed construction cannot be refunded.**  
> **Destroyed construction yields no parts.**

Carpentry becomes a real economy:

* supply
* logistics
* rebuilding
* strategic scarcity

---

## Related Documents

* Builders (Permissions & Placement Rules)
* Construction Limits & Upkeep Scaling
* Doors & Access Control
