item durability, repairing, and scrapping
Perfect. Here is the second ship-ready design document, covering item durability, repairing, and scrapping, written to interlock cleanly with the market economy document you already have, without repeating it. This is production-ready, opinionated, and scoped so engineering can build it without guesswork.
Item Lifecycle, Repair, and Scrapping Design Document
Durability, Loss, and Material Recovery Systems
Status: Ship-Ready (v1.0) Scope: Item durability, repair mechanics, scrapping, material recovery Explicitly Integrated With: Market Economy System (Britain, settlement boards, player vendors) Explicitly Excluded: Crafting skill progression (covered elsewhere)
1. Design Goals
This system must: Prevent long-term item oversupply Ensure items leave the world permanently Preserve a meaningful secondhand economy Support pristine-only global trade Feed materials back into crafting without full recovery Create constant replacement demand Avoid complex market condition math in Britain Feel intuitive and physical to players Core Principle: Items may be repaired to extend usefulness, but they may never be made immortal.
2. Item State Model

Every equippable or usable item exists in one of three states: State Description Pristine
Eligible for Britain market Used Functional but worn Broken Non-functional, scrap only Items transition one direction only over time.
3. Durability System (High-Level)
3.1 Durability Attributes Each item tracks: Current Durability Maximum Durability Repair Count Maximum Durability only decreases over an item's life. There is no mechanic that restores max durability.
3.2 Durability Loss Triggers Durability decreases from: Combat use Environmental hazards PvP deaths Time-based wear (optional per item type) Durability loss rates vary by: Item tier Material Use intensity
4. Repair System
4.1 Repair Eligibility An item can be repaired if:

It is not broken Its max durability is above minimum threshold The correct crafting station exists
4.2 Repair Costs Each repair requires: Base materials (same type as item) Gold fee Time Repair cost increases with: Item tier Repair count Remaining max durability
4.3 Repair Effects A repair: Restores partial durability Reduces maximum durability Increments repair count Example: Before: 60 / 100 After: 85 / 96
4.4 Repair Outcome Rules Repairs never restore to original max durability Repairs become inefficient over time Eventually, repair becomes uneconomical or impossible This ensures replacement beats maintenance long-term.
5. Market Interaction Rules
5.1 Britain Market Eligibility Britain accepts only pristine items. An item must: Be at full current durability Meet pristine eligibility thresholds Have no excessive repair degradation

Items failing these checks: Cannot be listed Prompt the player with alternatives
5.2 Settlement Boards & Player Vendors Settlement boards may define their own condition rules Player vendors may sell any item state Used items naturally circulate locally This preserves: Secondhand markets Local pricing New-player accessibility
6. Scrapping System
6.1 Purpose of Scrapping Scrapping exists to: Provide a value floor for junk Prevent inventory dead-ends Feed materials back into crafting Destroy items permanently Scrapping is not a primary profit path.
6.2 Scrapping Eligibility Items can be scrapped if: They are used or broken The correct station exists The player has the required skill (optional gating)
6.3 Scrap Outputs Scrapping yields: Base materials (ingots, boards, cloth, leather, etc.) Optional salvage components (shards, fittings, fragments) Recovery rates are intentionally lossy. Target Recovery Ranges (Design Targets) Item Tier Material Return

Common 20­35% Rare 10­25% Masterwork Low material + special shard Loss is guaranteed.
6.4 Scrap Skill Scaling Higher skill: Slightly increases yield Unlocks salvage components Reduces scrap time Skill never approaches full recovery.
7. Scrap vs Resale Decision (Player Choice)
Players always face a meaningful decision: Sell used gear locally or Scrap it into commodities The system ensures: Good condition  resale often better Poor condition  scrap better No universally optimal choice This keeps: Vendors relevant Markets active Items flowing
8. Material Re-Entry Into Economy
8.1 Scrap Outputs Are Commodities Scrap outputs: Are pristine commodities Can be sold on settlement boards Can be sold in Britain bulk markets Re-enter crafting pipelines cleanly

No used items ever enter the Britain market.
9. Anti-Exploitation Rules
To prevent abuse: Repair  pristine  sell loops are cost-negative Scrap returns never exceed input Broken items cannot be repaired Repair costs scale faster than item value The system enforces net value destruction at every step.
10. Permadeath Interaction
When a character is executed: All carried items are deleted All stored items are deleted No scrapping or recovery occurs Permadeath remains the strongest item sink.
11. Failure States & Safeguards
Prevented By Design: Infinite item circulation Crafting trash floods Junk laundering into global markets Market spam of degraded items Tunable Levers: Repair efficiency curves Scrap yield percentages Material recovery tables Repair material costs
12. Player Experience Summary
From the player's perspective: Items feel physical and temporary Repairs are helpful, not permanent Junk always has some value Pristine goods feel special Loss is expected, not shocking

13. Final Design Thesis
Items are born, used, repaired, reused, recycled, and destroyed. Nothing lasts forever. That is what keeps the economy alive. This system: Completes the market loop Prevents oversupply Supports long-term play Requires no NPC buyback Works at any population scale
If you want next, we can: Numerically model item lifespans Tie durability loss to combat intensity Define exact pristine eligibility rules Integrate crafting skill progression cleanly Stress-test extreme edge cases But as written: This is a complete, ship-ready item lifecycle system that cleanly plugs into your economy.

