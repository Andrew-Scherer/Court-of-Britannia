# 🏪 Market Economy System

**Unified Market Spine with Player Vendors & Settlement Boards**

---

> *The economy is unified. Markets are local. Power flows through access.*

## Core Principle

**Unify the economy behind the scenes. Fragment access and presentation in the world.**

The market economy:
- Is **player-driven**, not NPC-driven
- Preserves UO-style player vendors and local flavor
- Supports large-scale trade without vendor spam
- Avoids oversupply flooding
- Creates meaningful economic geography
- Supports lawful and outlaw playstyles

---

## Three Market Layers

The economy consists of three complementary layers that **stack**, not compete:

| Layer | Purpose | Scope |
|-------|---------|-------|
| **Britain Unified Market** | Liquidity & price discovery | Global (backend) |
| **Settlement Market Boards** | Organized regional trade | Per settlement |
| **Player NPC Vendors** | Local, informal trade | Per vendor |

---

## Britain: Unified Market Spine

**Britain is the economic capital of the world.**

Britain does NOT produce goods. It **aggregates trade**.

### What Britain Provides

- Deep liquidity
- Canonical pricing
- Bulk trade
- Export/import hub
- Crown taxation
- **Persistent cross-settlement trade clearing**

### The Unified Market Ledger (Backend)

One unified market ledger tracks:
- Item categories
- Buy/sell orders
- Completed trades
- Price history
- Trade volume
- Taxation

**This system:**
- Is NOT directly browsable by default
- Is accessed through approved interfaces
- Serves as authoritative economic record

**Players never see this as a "database".**

### Britain Market Access (Player Experience)

Players interact with the unified market through **physical interfaces** in Britain:
- Exchange halls
- Licensed brokers
- Market stalls
- Guild trading offices

Each interface:
- Filters items by category
- Applies location-specific rules
- Applies Crown taxes
- Presents results as local trade

**There is no single global market screen exposed everywhere.**

### Britain Market Rules

**Eligibility:**
- Britain accepts only eligible trade goods (e.g., pristine items, bulk commodities)

**Costs:**
- Listing fees
- Transaction taxes

**Requirements:**
- Lawful standing
- Physical presence (or authorized agent)

**Britain is:**
- The most **efficient** place to trade
- The most **regulated**
- The most **expensive** (via taxes)
- The **only place** to create persistent cross-settlement orders

> **Note:** Britain coordinates trade intent and holds escrow, but physical goods are fulfilled at settlements. See [[Cross-Settlement Trade|Cross-Settlement-Trade]] for the full clearinghouse mechanics.

---

## Settlement Market Boards

**Structured trade without becoming full global exchanges.**

### Purpose

Settlement Market Boards allow:
- Regional specialization
- Guild economic identity
- Organized export/import
- Player-managed commerce

**They are optional, not guaranteed.**

### Characteristics

Each settlement market board:
- Is **owned and governed** by the settlement
- Has **configurable rules:**
  - Allowed item categories
  - Condition requirements
  - Access permissions
  - Fees and taxes
- May connect to unified market spine indirectly

**Settlement boards do NOT:**
- Expose full global order books
- Guarantee liquidity
- Replace Britain

### Player Experience

From a player perspective:
- A settlement board shows **only what that settlement trades in**
- If settlement only has furniture → only furniture appears
- If settlement only has weapons → only weapons appears
- **If no one lists items, the board is empty**

**This preserves:**
- Local scarcity
- Settlement identity
- Player dependence

### Relationship to Britain

Settlement boards may:
- Export eligible goods to Britain
- Import goods from Britain (with delay and cost)
- Mirror Britain pricing imperfectly
- **Fulfill cross-settlement buy orders** placed in Britain

**Britain remains:**
- Faster
- Cheaper (net of logistics)
- More liquid

**Settlements remain:**
- Specialized
- Risk-dependent
- Politically controlled

---

## Player NPC Vendors (Classic UO Style)

**Largely unchanged from classic Ultima Online.**

### Role

Player NPC vendors exist to:
- Preserve social flavor
- Enable secondhand trade
- Support new players
- Enable local economies
- Create identity and reputation

### Characteristics

Player vendors:
- Are individually owned
- Have manually stocked inventory
- Can sell any items allowed by the game
- Do NOT auto-aggregate pricing
- Do NOT expose market analytics
- Are location-bound

**They are:**
- Fragmented
- Inconvenient
- Personal

**This is intentional.**

### Economic Role

Player vendors act as:
- Secondary markets
- Local redistribution channels
- Price-imperfect outlets
- Social trade points

**They do NOT threaten economic balance because:**
- They lack liquidity concentration
- They are not globally searchable
- They are limited by geography and attention

---

## Market Access Summary

| Market Type | Can Buy | Can Sell | Scope |
|-------------|---------|----------|-------|
| **Britain Market** | Yes | Yes | Eligible goods only |
| **Settlement Board** | Yes | Yes | Settlement-defined |
| **Player Vendor** | Sell (optional buy) | Yes | Anything |

---

## Outlaws & Market Access

**Outlaws cannot access Britain directly.**

### Outlaw Options

Outlaws may use:
- Player vendors
- Settlement boards that allow them
- Intermediaries
- Smuggling networks

**This preserves:**
- Law vs crime asymmetry
- Smuggling gameplay
- Political leverage

---

## Oversupply Prevention

Oversupply is prevented at the market level by:

✅ Britain accepting only eligible trade goods
✅ Fragmented player vendors absorbing used/junk goods
✅ Settlement boards limiting scope
✅ No NPC buyback floors
✅ No infinite global listings

**Crafting progression, durability, and item destruction are handled in separate systems.**

See [[Item Durability|Item-Durability]] and [[Crafting System|Crafting-System]].

---

## Market Progression

| Player Stage | Primary Market |
|--------------|----------------|
| New player | Player vendors |
| Mid-game | Settlement boards |
| Late-game | Britain market |
| Outlaw | Vendors & smuggling |

**No market becomes obsolete.**

---

## Integration with Other Systems

### Banking System

- **Britain Market escrow held in Britain Bank**
- **Cross-settlement trade order escrow** locked in Britain Bank
- Settlement banks validate physical fulfillment
- Settlement boards draw from settlement banks
- Player vendor inventory stored locally

See [[Banking System|Banking-System]] for storage details.

### Cross-Settlement Trade

- Britain creates **persistent buy orders** with escrowed gold
- Settlements handle **physical fulfillment** of those orders
- Gold releases automatically when goods are delivered to settlement banks
- Orders survive buyer logout, death, and permadeath

See [[Cross-Settlement Trade|Cross-Settlement-Trade]] for the clearinghouse system.

### Logistics Contracts

- Moving goods between settlements creates demand
- Settlement import/export creates courier jobs
- Britain acts as central hub for logistics

See [[Logistics Contracts|Logistics-Contracts]].

### Settlements

- Settlement market boards controlled by settlement authority
- Access rules set by settlement government
- Settlement specialization determines trade focus

### Crafting & Items

- Item condition affects Britain eligibility
- Pristine items → Britain market
- Used/damaged items → player vendors
- Durability system creates ongoing demand

---

## Failure State Safeguards

### What This System Avoids

❌ Global junk flooding
❌ Vendor spam as liquidity
❌ Invisible price manipulation
❌ One-click global arbitrage
❌ NPC-driven economies

### Emergency Backstops (Invisible)

Only if necessary:
- Adjust market fees
- Adjust access restrictions
- Adjust settlement import/export costs

**NPC intervention is never player-facing.**

---

## Design Thesis

**The economy is unified.**
**Markets are local.**
**Power flows through access.**

Players trade at stalls, shops, and boards—
The system keeps score behind the curtain.

This preserves:
- Ultima Online's soul
- Economic stability
- Player identity
- Long-term viability

---

## See Also

- [[Banking System|Banking-System]] — Where gold and goods are stored
- [[Cross-Settlement Trade|Cross-Settlement-Trade]] — Britain clearinghouse and settlement fulfillment
- [[Settlement Market Boards|Settlement-Markets]] — Regional trade details
- [[Logistics Contracts|Logistics-Contracts]] — Moving goods between markets
- [[Crafting System|Crafting-System]] — Item creation and quality
- [[Item Durability|Item-Durability]] — Item lifecycle and demand creation
