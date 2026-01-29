# Crafting Skill & Progression Overhaul

**Status:** Ship-Ready (v1.0)
**Last Edited:** 2026-01-28
**Scope:** Crafting skills, skill gain, practice systems, production rules, repair loops
**Integrated With:** [Market Economy](../Economy/Market-Economy.md), [Item Durability](../Economy/Item-Durability.md)
**Explicitly Excludes:** Market UI, durability math, scrapping math (handled elsewhere)

**Practice, Maintenance, and Intentional Production**

---

## 1. Design Goals

This crafting system must:
- Eliminate crafting-driven oversupply
- Decouple skill gain from item creation
- Preserve the fantasy of becoming a master artisan
- **Make Repairing a core social loop**
- Ensure only intentional production creates market goods
- Prevent macro/bot abuse through active repair incentives

**Core Principle:** Learning consumes value. Production creates value. Maintenance creates connection.

---

## 2. Core Structural Change

Crafting is split into three distinct modes:

| Mode | Purpose | Produces Items? | Skill Gain? |
|---|---|---|---|
| **Practice Crafting** | Initial learning & training | ❌ No | ✅ Moderate |
| **Maintenance (Repair)** | Service & Mastery | ❌ No | ✅ **High** |
| **Production Crafting** | Market & player goods | ✅ Yes | ❌ Minimal |

Players explicitly choose which mode they are in.

---

## 3. Practice Crafting (Basic Training)

### 3.1 Purpose
Practice crafting exists to raise skill from Novice to Journeyman. It represents training, experimentation, and failed attempts.

### 3.2 Mechanics
- **Inputs:** Reduced raw materials + Fuel.
- **Output:** Slag/Scrap (Non-market items).
- **Skill Gain:** Standard rate based on difficulty.
- **Role:** The "Macro" sink. It burns resources to gain skill without flooding the world with trash daggers.

---

## 4. Maintenance Crafting (The Social Loop)

### 4.1 Purpose
Repairing items for other players is the **primary method** for High-Level skill gain and social relevance.

### 4.2 Mechanics
- **Inputs:** Scrap Materials (from Scrapping) + Small Gold Fee.
- **Output:** Restored item durability (Player Repair is more efficient than NPC).
- **Skill Gain:** **Highest Rate.** Repairing a high-tier item teaches more than hammering a practice ingot.

### 4.3 The Grandmaster's Loop ("Master's Insight")
To prevent GM crafters from becoming bored AFK producers, the system incentivizes active repair work.

1.  **Action:** GM Smith repairs a warrior's damaged platemail.
2.  **Reward:** GM gains **"Master's Insight"** buff.
3.  **Effect:** Next **Production** attempt has a significantly higher chance to be **Exceptional** or **Masterwork**.
4.  **Result:** The best items on the server are made by smiths who run active repair shops.

> *You cannot master the steel if you do not understand how it breaks.*

---

## 5. Production Crafting (Item Creation)

### 5.1 Purpose
Production is how real items enter the world. It is intentional, costly, and risk-bearing.

### 5.2 Mechanics
- **Inputs:** Full Raw Materials + **Tools**.
- **Output:** Finished Item (or Fail).
- **Risk:** Failure destroys materials.
- **Skill:** Influences Quality Tier (Normal, Exceptional, Masterwork).

---

## 6. Tools & Consumption

Tools are the fuel of the economy. They are consumable and tiered.

### 6.1 Tool Durability
- Every craft attempt (Success/Fail) consumes tool durability.
- When durability hits 0, the tool breaks.

### 6.2 Tool Quality (Tinkers Matter)
The quality of the **Tool** affects the quality of the **Product**.

| Tool Source | Durability | Exceptional Bonus? |
|---|---|---|
| **NPC Bought** | Low | None |
| **Player Crafted (Tinker)** | High | **Yes** |
| **GM Tinker Tool** | Very High | **Major Bonus** |

**Eco-System:** Smashers need Smiths. Smiths need Tinkers. Tinkers need Miners.

---

## 7. Skill Progression Curve

### 7.1 Early Game (0-50)
- **Method:** Practice Crafting.
- **Cost:** Low.
- **Goal:** Unlock basic recipes.

### 7.2 Mid Game (50-90)
- **Method:** Mix of Practice and **Maintenance**.
- **Incentive:** Repairing pays better skill gains than burning ingots.
- **Social:** Apprentices hang out at banks/forges looking for repair work.

### 7.3 Late Game (90-100)
- **Method:** **Maintenance Heavy.**
- **Incentive:** "Master's Insight" buff required for top-tier production.
- **Status:** The town smith is a known figure, not a vending machine.

---

## 8. Anti-Oversupply Guarantees

This system structurally prevents oversupply because:
1.  **Practice** produces no items.
2.  **Maintenance** consumes scrap (value destruction) to fix existing items.
3.  **Production** is deliberate and consumes tools.
4.  **Junk** never floods global markets.

Oversupply is no longer possible by accident.

---

## 9. Final Design Thesis

**You do not get better by flooding the world with junk.**  
**You get better by fixing what is broken.**  
**You earn your place by producing when it matters.**

This crafting overhaul:
- Fixes UO's core failure (Macro spam = Trash flood)
- Creates a mandatory social role for crafters (Repair)
- Makes Tinkers essential (Tools)
- Rewards active play over AFK macroing
- Supports your market architecture
- Scales indefinitely
- Preserves fantasy
- Makes mastery meaningful

---

## See Also

- [[Market Economy|../Economy/Market-Economy]] — How crafted items enter markets
- [[Item Durability|Item-Durability]] — Durability and repair mechanics
- [[Maker Mark & Provenance|Maker-Mark-Provenance]] — Crafter signatures and item history