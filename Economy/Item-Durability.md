# ⚙️ Item Durability System

**Status:** Ship-Ready (v1.0)
**Last Edited:** 2026-01-28
**Scope:** Durability loss, repair mechanics, scrapping, material recovery, tool consumption
**Integrated With:** [Market Economy](Market-Economy.md), [Crafting Progression](../Building-Crafting/Crafting-Progression.md), [Permadeath](../Permadeath/Permadeath-Downed.md)
**Explicitly Excludes:** Infinite repair, full recovery

**Durability, Repair, and Material Recovery**

---

> **Core Tenet:** Items are born, used, repaired, reused, recycled, and destroyed. Nothing lasts forever. That is what keeps the economy alive.

## Core Principle

Items may be repaired to extend usefulness, **but they may never be made immortal.**

This system:
- Prevents long-term item oversupply.
- Ensures items leave the world permanently.
- Preserves a meaningful secondhand economy.
- Creates constant replacement demand.
- Feeds materials back into crafting (with guaranteed loss).

---

## Item State Model

Every equippable or usable item exists in one of three states:

| State | Description | Britain Market Eligible? |
|-------|-------------|--------------------------|
| **Pristine** | New, undamaged | ✅ Yes |
| **Used** | Functional but worn | ❌ No |
| **Broken** | Non-functional, scrap only | ❌ No |

**Items transition one direction only over time.**

---

## Durability System

### Durability Attributes
Each item tracks:
- **Current Durability**
- **Maximum Durability**
- **Repair Count**

**Maximum Durability only decreases over an item's life.** There is no mechanic that restores max durability.

### Durability Loss Triggers
Durability decreases from combat use, environmental hazards, PvP deaths, and time-based wear.

---

## Tool Durability & Consumption

Tools (Hammers, Mortars, Sewing Kits, etc.) are consumable items that degrade with every use.

### 1. Consumption Mechanics
*   **Per Action:** Every attempt (Success or Failure) reduces tool durability.
*   **Quality Matters:**
    *   **NPC Tools:** Low Max Durability. No bonus to craft chance.
    *   **Player Tools (Tinker Crafted):** High Max Durability. Bonus to Exceptional Craft chance.
*   **Breakage:** When a tool reaches 0 durability, it is destroyed immediately.

**Concept:** The Tinker profession fuels all other professions.

---

## Repair System

Repairing is a core social loop. Players must choose between **Convenience (NPCs)** and **Quality/Social (Players)**.

### 1. NPC Repair (The Price Floor)
*   **Cost:** High Gold Fee + Ingots/Raw Materials.
*   **Efficiency:** **Low.** Causes significant Max Durability loss (-10% to -20% per repair).
*   **Role:** Emergency sink for gold.

### 2. Player Repair (The Social Engine)
*   **Cost:** Low Gold Fee + **Scrap Materials** (from Scrapping).
*   **Efficiency:** **High.** Minimal Max Durability loss (-5% or less based on skill).
*   **Crafter Incentive:** Offers exceptional skill gain and social capital.

### 3. The Grandmaster's Incentive ("Master's Insight")
To solve "GM Boredom," Grandmaster Crafters receive a tangible benefit for repairing other players' gear:
*   **Trigger:** Repairing a high-tier item.
*   **Effect:** Grants **"Master's Insight"** buff (Duration: 10 mins or 1 Craft).
*   **Benefit:** significantly boosts the RNG roll for creating an **Exceptional** or **Masterwork** item on the next attempt.

---

## Market Interaction Rules

### Britain Market Eligibility
**Britain accepts only pristine items.**
An item must be at full current durability and meet pristine eligibility thresholds.

### Player Vendors
- **Player vendors** may sell any item state (Used, Broken).
- **Used items** naturally circulate locally through player markets.

**This preserves:**
- Secondhand markets
- Social trade hubs
- New-player accessibility

---

## Scrapping System

### Purpose of Scrapping
Scrapping exists to provide a value floor for junk, prevent inventory dead-ends, and destroy items permanently.

### Scrap Outputs
Scrapping yields **Scrap Materials** (e.g., Scrap Iron, Leather Scraps).
*   **Yields:** Recovery rates are intentionally lossy.
    *   **Common:** 20-35% material return.
    *   **Rare:** 10-25% material return.
    *   **Masterwork:** Low material + **Masterwork Shard** (used in elite repair).
*   **Loss is guaranteed.** You scrap a sword to repair a dagger.

---

## Anti-Exploitation Rules

To prevent economic manipulation:
*   **Cost-Negative Loops:** The cost of repairing an item to "Pristine" plus the Crown Tariff will always exceed the profit of selling it in Britain compared to scrapping it.
*   **Repair Scaling:** Repair costs increase exponentially with each repair count.
*   **Breakage:** When an item's **Maximum Durability** drops below a threshold (e.g., 10%), it becomes **Broken** and can only be scrapped.

---

## Permadeath Interaction (Lootable Corpse)

When a character is executed (permadeath):
1.  **The Corpse Remains:** It does not vanish.
2.  **Lootable:** All equipped and inventory items remain on the corpse.
3.  **PvP Reward:** Validates the "Killer" archetype. Items enter the economy of the looters.

**Permadeath redistributes wealth; it does not destroy it.**

---

## Design Thesis

**Items are born, used, repaired, reused, recycled, and destroyed.**
**Nothing lasts forever.**
**That is what keeps the economy alive.**

---

## See Also
- [Market Economy](Market-Economy.md) — How items are traded.
- [Banking System](Banking-System.md) — Where items are stored.
- [Crafting Progression](../Building-Crafting/Crafting-Progression.md) — How items are created.
- [Permadeath System](../Permadeath/Permadeath-Downed.md) — Ultimate item sink.

