# ⚙️ Item Durability System

**Durability, Repair, and Material Recovery**

---

> *Items are born, used, repaired, reused, recycled, and destroyed. Nothing lasts forever. That is what keeps the economy alive.*

## Core Principle

Items may be repaired to extend usefulness, **but they may never be made immortal.**

This system:
- Prevents long-term item oversupply
- Ensures items leave the world permanently
- Preserves a meaningful secondhand economy
- Creates constant replacement demand
- Feeds materials back into crafting (with guaranteed loss)

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

**Maximum Durability only decreases over an item's life.**

There is **no mechanic** that restores max durability.

### Durability Loss Triggers

Durability decreases from:
- Combat use
- Environmental hazards
- PvP deaths
- Time-based wear (optional per item type)

**Durability loss rates vary by:**
- Item tier
- Material
- Use intensity

---

## Repair System

### Repair Eligibility

An item can be repaired if:
- It is NOT broken
- Its max durability is above minimum threshold
- The correct crafting station exists

### Repair Costs

Each repair requires:
- Base materials (same type as item)
- Gold fee
- Time

**Repair cost increases with:**
- Item tier
- Repair count
- Remaining max durability

### Repair Effects

A repair:
- Restores **partial** durability
- **Reduces** maximum durability
- Increments repair count

**Example:**
```
Before repair: 60 / 100
After repair:  85 / 96
```

### Repair Outcome Rules

- Repairs **never** restore to original max durability
- Repairs become **inefficient** over time
- Eventually, repair becomes **uneconomical** or impossible

**This ensures replacement beats maintenance long-term.**

---

## Market Interaction Rules

### Britain Market Eligibility

**Britain accepts only pristine items.**

An item must:
- Be at full current durability
- Meet pristine eligibility thresholds
- Have no excessive repair degradation

**Items failing these checks:**
- Cannot be listed on Britain Market
- Prompt the player with alternatives (settlement boards, vendors, scrap)

See [[Market Economy|Market-Economy]] for Britain market details.

### Settlement Boards & Player Vendors

- **Settlement boards** may define their own condition rules
- **Player vendors** may sell any item state
- **Used items** naturally circulate locally

**This preserves:**
- Secondhand markets
- Local pricing
- New-player accessibility

---

## Scrapping System

### Purpose of Scrapping

Scrapping exists to:
- Provide a value floor for junk
- Prevent inventory dead-ends
- Feed materials back into crafting
- **Destroy items permanently**

**Scrapping is NOT a primary profit path.**

### Scrapping Eligibility

Items can be scrapped if:
- They are **used** or **broken**
- The correct station exists
- The player has the required skill (optional gating)

### Scrap Outputs

Scrapping yields:
- Base materials (ingots, boards, cloth, leather, etc.)
- Optional salvage components (shards, fittings, fragments)

**Recovery rates are intentionally lossy.**

#### Target Recovery Ranges

| Item Tier | Material Return |
|-----------|----------------|
| Common | 20–35% |
| Rare | 10–25% |
| Masterwork | Low material + special shard |

**Loss is guaranteed.**

### Scrap Skill Scaling

Higher skill:
- Slightly increases yield
- Unlocks salvage components
- Reduces scrap time

**Skill never approaches full recovery.**

---

## Scrap vs Resale Decision

Players always face a meaningful decision:

**Sell used gear locally** OR **Scrap it into commodities**

The system ensures:
- **Good condition** → resale often better
- **Poor condition** → scrap better
- **No universally optimal choice**

**This keeps:**
- Vendors relevant
- Markets active
- Items flowing

---

## Material Re-Entry Into Economy

### Scrap Outputs Are Commodities

Scrap outputs:
- Are **pristine commodities**
- Can be sold on settlement boards
- Can be sold in Britain bulk markets
- Re-enter crafting pipelines cleanly

**No used items ever enter the Britain market.**

---

## Anti-Exploitation Rules

To prevent abuse:

✅ Repair → pristine → sell loops are **cost-negative**
✅ Scrap returns **never exceed input**
✅ Broken items **cannot be repaired**
✅ Repair costs scale **faster than item value**

**The system enforces net value destruction at every step.**

---

## Permadeath Interaction

When a character is executed (permadeath):
- All carried items are **deleted**
- All stored items are **deleted**
- **No scrapping or recovery occurs**

**Permadeath remains the strongest item sink.**

See [[Permadeath System|Permadeath-Downed]] for details.

---

## Integration with Other Systems

### Market Economy

- **Britain Market** accepts only pristine items
- **Settlement boards** may accept used items (configurable)
- **Player vendors** accept any item state
- Creates tiered market structure

### Banking System

- Items stored in settlement banks retain durability state
- Britain Bank doesn't store items (gold only)
- Guild banks store items as-is

### Crafting System

- Scrap materials feed back into crafting
- Repair requires crafting stations
- Higher crafting skill improves scrap yields
- Constant item replacement creates demand

See [[Crafting System|Crafting-System]] for crafting details.

### Death & Permadeath

- Normal death: items in inventory may be looted/damaged
- Permadeath: all items deleted (ultimate sink)
- Banked items safe from normal death

---

## Failure State Prevention

**Prevented By Design:**

❌ Infinite item circulation
❌ Crafting trash floods
❌ Junk laundering into global markets
❌ Market spam of degraded items

**Tunable Levers:**

⚙️ Repair efficiency curves
⚙️ Scrap yield percentages
⚙️ Material recovery tables
⚙️ Repair material costs

---

## Player Experience Summary

From the player's perspective:

- Items feel **physical and temporary**
- Repairs are **helpful, not permanent**
- Junk always has **some value**
- Pristine goods feel **special**
- Loss is **expected, not shocking**

---

## Design Thesis

**Items are born, used, repaired, reused, recycled, and destroyed.**

**Nothing lasts forever.**

**That is what keeps the economy alive.**

This system:
- Completes the market loop
- Prevents oversupply
- Supports long-term play
- Requires no NPC buyback
- Works at any population scale

---

## See Also

- [[Market Economy|Market-Economy]] — How items are traded
- [[Banking System|Banking-System]] — Where items are stored
- [[Crafting System|Crafting-System]] — How items are created
- [[Permadeath System|Permadeath-Downed]] — Ultimate item sink
