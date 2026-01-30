**Status:** Ship-Ready (v1.0)  
**Last Edited:** 2026-01-29  
**Scope:** Defines the soft-cap construction limit system and how complexity scales property upkeep.  
**Integrated With:** [Property Specs](../Housing-Property/Property-Technical-Succession.md), [Decoration System](Decoration-System.md)  
**Explicitly Excludes:** Guild upkeep, hard-cap limits.

---

# Construction Limits & Upkeep Scaling

**Core Principle:** Land supports construction for free up to a point. Beyond that, complexity increases upkeep. There are no hard caps—only economic pressure.

## Construction Density
Each property has a **base construction allowance** of **3 constructed objects per world tile**.
- **Within Allowance:** No additional upkeep.
- **Exceeding Allowance:** Upkeep scales progressively for every 100 objects over the limit. This applies to the entire property.

**Example:**
- A 100-tile property allows 300 objects for free.
- At 400 objects (+100), upkeep increases modestly.
- At 1,000 objects (+700), upkeep reflects high density.

## What Counts?
**Included in Density (Functional Structures):**
Floors, walls, roofs, doors, stairs, structural dividers.

**Excluded from Density (Free Decoration):**
Cosmetic decorations, lights, banners, rugs, visual props.

## Summary
> **Build freely. Pay for complexity. Decoration is always free.**
