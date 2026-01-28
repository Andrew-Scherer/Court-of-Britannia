Crafting Skill & Progression Overhaul
Absolutely. Below is a ship-ready design document for the Crafting Skill & Progression Overhaul, written to plug directly into the two prior documents: Market Economy System Item Lifecycle / Repair / Scrapping System This document solves oversupply at the root, preserves mastery fantasy, and cleanly separates learning from production.
Crafting Skill & Progression Overhaul
Practice, Mastery, and Intentional Production
Status: Ship-Ready (v1.0) Scope: Crafting skills, skill gain, practice systems, production rules Explicitly Integrated With: Market Economy System Item Lifecycle / Repair / Scrapping System Explicitly Excluded: Market UI, durability math, scrapping math (handled elsewhere)
1. Design Goals
This crafting system must: Eliminate crafting-driven oversupply Decouple skill gain from item creation Preserve the fantasy of becoming a master artisan Ensure only intentional production creates market goods Scale from low population to high population servers Prevent macro/bot abuse Keep crafting economically meaningful at all stages Core Principle: Learning consumes value. Production creates value.
2. Core Structural Change
Crafting is split into two distinct modes: Mode Purpose

Produces Items? Practice Crafting
Skill gain & mastery No Production Crafting Market & player goods  Yes Players explicitly choose which mode they are in.
3. Practice Crafting (Skill Progression)
3.1 Purpose Practice crafting exists only to raise skill. It represents: Training Experimentation Failed attempts Technique refinement Practice never produces finished items.
3.2 Player Experience A blacksmith approaches a forge and sees: Practice: Weaponsmithing Practice: Armorsmithing Practice: Tool Forging The player selects a practice recipe. They see: Materials required (partial) Time required Skill gain range No item output After completion: Skill increases Materials are consumed Scrap or slag may be generated (non-market items)

3.3 Practice Costs Practice consumes: Raw materials (reduced amount vs production) Fuel or reagents (if applicable) Time Optional gold fee (station use) These costs scale with: Skill level Item complexity Practice repetition
3.4 Skill Gain Behavior Skill gain is based on difficulty vs current skill Repeating the same practice yields diminishing returns Players must rotate techniques to advance efficiently This prevents: AFK macroing Single-recipe grinding Infinite loops
4. Production Crafting (Item Creation)
4.1 Purpose Production crafting is how real items enter the world. It is: Intentional Costly Risk-bearing
4.2 Production Requirements To produce an item, the player must: Meet minimum skill threshold Use full materials Select Production mode Use appropriate station Accept failure risk Production always results in:

A finished item or A failed attempt with partial loss
4.3 Production Outcomes Production results vary by skill: Skill Level Outcome Bare minimum Low quality, low durability Competent Standard item Expert High quality Master Masterwork / special properties This makes high-skill crafters: Rare Valuable Economically powerful
5. Item Quality Tiers (High Level)
Crafted items may have: Quality rating Material efficiency modifiers Repair resilience modifiers Cosmetic distinctions Quality is never guaranteed. Skill influences: Chance of higher tiers Reduced failure rates Access to advanced recipes
6. Skill Progression Curve
6.1 Early Game Fast progression

Cheap practice Broad experimentation 6.2 Mid Game Slower gains Specialized practice paths Meaningful material costs 6.3 Late Game Very slow gains Narrow mastery focus Expensive practice Prestige outcomes This preserves long-term goals without infinite junk.
7. Anti-Oversupply Guarantees
This system structurally prevents oversupply because: Practice produces no items Production is slower and deliberate Failed production destroys materials High-end crafting is scarce Junk never floods global markets Oversupply is no longer possible by accident.
8. Integration With Markets
8.1 Britain Market Only production items eligible Practice outputs never eligible High-quality items dominate exports 8.2 Settlement Boards Local crafters supply intentionally Specialization emerges naturally 8.3 Player Vendors Used and low-tier production items circulate New players access affordable gear
9. Integration With Scrapping & Repair
Practice outputs may generate scrap-only byproducts

Failed production yields partial scrap Master crafters recover slightly more on failure Practice cannot be exploited for materials Skill progression always consumes value net-negative.
10. Anti-Bot & Anti-Macro Design
This system resists automation because: Practice recipes rotate Diminishing returns exist Production has failure risk Inputs vary by context Optimal paths require decision-making Bots cannot efficiently progress.
11. Optional Advanced Systems (Post-Launch)
Safe to add later: Technique unlock trees Crafting research Guild specialization bonuses Signature maker marks Regional crafting bonuses None are required for v1.
12. Player Progression Summary
Player Type Interaction New player
Practice heavily Casual crafter Limited production Dedicated artisan Specialized mastery Master crafter Rare, high-value output

No stage invalidates another.
13. Final Design Thesis
You do not get better by flooding the world with junk. You get better by learning. You earn your place by producing when it matters. This crafting overhaul: Fixes UO's core failure Supports your market architecture Scales indefinitely Preserves fantasy Makes mastery meaningful
If you want next, we can: Numerically define skill gain formulas Map exact practice vs production costs Design crafting UI flows Integrate crafting with guild settlements Stress-test population extremes But as written: This is a complete, ship-ready crafting skill system that cleanly solves oversupply at the root.

