# Cross-Settlement Trade Clearing System

**Status:** Ship-Ready (v1.0)  
**Scope:** Market order origination, escrow, fulfillment, settlement interaction  
**Integrated With:** Market Economy System, Banking Revamp, Settlement Banks, Britain Bank  
**Explicitly Excludes:** Transport mechanics, item durability, crafting rules

---

## 1. Design Purpose

This system exists to:
- Make Britain meaningfully different from settlement markets
- Enable large-scale trade without item teleportation
- Preserve settlement relevance and geography
- Allow persistent trade intent without requiring player presence
- Centralize financial risk without centralizing physical goods

### Core Principle
**Britain coordinates trade.**  
**Settlements fulfill trade.**

---

## 2. Problem This Solves

### Without a clearing system:
- Settlement markets feel interchangeable
- Buy orders die when players log off
- Large-scale trade requires constant babysitting
- Britain has no functional advantage

### With this system:
- Demand persists
- Supply remains local
- Logistics remain gameplay
- Britain becomes indispensable without becoming a warehouse

---

## 3. Key Concept Definitions

### 3.1 Trade Intent
A **trade intent** is a binding promise to pay for goods under defined conditions.

Trade intent exists **only in Britain**.

### 3.2 Cleared Gold
Gold deposited in the Britain Bank and escrowed for trade.
- Guaranteed
- Persistent
- Independent of player presence
- System-enforced

### 3.3 Fulfillment
The act of delivering physical goods into a settlement market or bank to satisfy a trade intent.

Fulfillment happens **only in settlements**.

---

## 4. Britain Market: Trade Origination & Clearing

### 4.1 What Britain Does

Britain is the **only location** where players may:
- Create cross-settlement buy orders
- Escrow cleared gold
- Specify delivery locations
- Create long-duration or large-volume orders
- Aggregate demand across the world

Britain **does not**:
- Store items
- Fulfill deliveries
- Teleport goods

### 4.2 Britain Buy Order Creation (Player Experience)

A player in Britain creates a buy order with:
1. Item type
2. Quantity
3. Price
4. Accepted delivery settlements (one or many)
5. Order duration

**Upon confirmation:**
- Gold is withdrawn from the Britain Bank
- Gold is placed into escrow
- The order becomes globally visible
- The player may log off
- **The order persists**

---

## 5. Settlement Markets: Physical Fulfillment

### 5.1 Settlement Market Role

Settlement markets are **fulfillment nodes**, not clearinghouses.

They:
- Display eligible Britain buy orders
- Accept physical item delivery
- Release escrowed gold upon successful delivery
- Apply local fees and taxes

Settlement markets **cannot**:
- Create cross-settlement orders
- Escrow cleared gold
- Guarantee demand persistence

### 5.2 Settlement Fulfillment Flow (Player Experience)

A player in a settlement:
1. Opens the local market board
2. Sees a list of active Britain buy orders that accept delivery here
3. Selects an order
4. Deposits items into the settlement bank
5. System validates quantity and quality
6. Gold is released from Britain Bank to the seller
7. Trade completes
8. **Goods remain in the settlement unless later moved**

---

## 6. Order Persistence & Risk Handling

### 6.1 Persistence Guarantees

| Scenario | Settlement Order | Britain Order |
|----------|------------------|---------------|
| Buyer logs off | Order ends | Order persists |
| Buyer dies | Order ends | Order persists |
| Buyer permadeaths | Order ends | Order persists |
| Region depopulates | Market empties | Market thins but survives |

**Britain orders are system-guaranteed.**  
**Settlement orders are player-guaranteed.**

---

## 7. Liquidity & Scale Differences

### Settlement Markets
- Local gold only
- Limited order size
- Vulnerable to population changes
- Best-effort fulfillment

### Britain Market
- Centralized escrow
- Large-scale orders normal
- Aggregated global demand
- Stable pricing anchor

This ensures Britain remains the **only place for serious trade coordination**.

---

## 8. Economic Geography Preservation

This system ensures:
- Goods must still be moved
- Settlements still matter
- Trade routes still exist
- Smuggling remains viable
- Regional specialization emerges

**Britain does not replace settlements — it connects them.**

---

## 9. Outlaw & Faction Interaction

- Outlaws **cannot** place Britain buy orders
- Outlaws **may** fulfill them if settlement rules allow
- Smuggling goods into lawful settlements becomes viable
- Britain remains a lawful authority without total exclusion

---

## 10. Anti-Exploitation Safeguards

- Orders require **full escrow**
- Escrow is **locked** until fulfillment or expiration
- Settlement markets **cannot redirect escrow**
- **No remote item delivery**
- **No auto-routing of goods**
- All physical movement remains **player-driven**

---

## 11. Player Mental Model (Intended)

Players should intuitively understand:

> **"Britain is where I post serious demand."**  
> **"Settlements are where I deliver goods."**  
> **"Money waits in Britain."**  
> **"Goods live in towns."**  
> **"If I want scale, I go to Britain."**

**If players think Britain is "just another market," the system has failed.**

---

## 12. Design North Star (Final)

**Britain holds promises.**  
**Settlements hold goods.**  
**Trade is the act of connecting them.**

---

## Philosophical Alignment

### ✅ Roles Create Pressure, Not Chores
- Merchants decide *where* to place persistent demand
- Suppliers decide *where* to fulfill orders for best profit
- Logistics players connect supply and demand routes
- No mandatory babysitting required

### ✅ Systems Run Without Babysitting
- Orders persist through logout, death, absence
- System-enforced escrow eliminates trust dependency
- NPC banks handle storage and validation
- No admin cleanup required

### ✅ Inaction Has Consequences
- Unfilled orders signal economic gaps
- Merchants who over-escrow lose liquidity
- Settlements with no fulfillment lose relevance
- Trade routes shift based on participation

### ✅ Power Is Political
- Britain's authority enforces the clearing system
- Outlaws excluded from Britain orders (political consequence)
- Settlement rulers can tax fulfillment locally
- Economic power flows through institutional legitimacy

---

## Player Archetype Service

| Archetype | How This System Serves Them |
|-----------|----------------------------|
| **Socializers** | Trading creates social connections, merchant relationships |
| **Achievers** | Becoming a major merchant, controlling trade routes |
| **Explorers** | Discovering price disparities, optimal fulfillment routes |
| **Crafters** | Persistent demand creates reliable income |
| **Schemers** | Manipulating markets, cornering supply chains |
| **Institutional Loyalists** | Supporting Britain's economic authority |

---

## Integration Points

### Systems
- **Britain Bank** - Escrow management
- **Settlement Banks** - Fulfillment validation, item storage
- **Tax System** - Settlement taxes on fulfillment
- **Property Ledger** - Potential for warehouse mechanics
- **Faction Standing** - Outlaw restrictions

### Roles
- **Master of Treasury** - Can view aggregate Britain orders for economic policy
- **Settlement Administrators** - Can set local fulfillment taxes/fees
- **Guards** - Enforce outlaw restrictions at Britain markets

### Ledgers
- **Britain Market Ledger** - All orders placed, fulfilled, expired
- **Settlement Fulfillment Ledger** - Local delivery records
- **Treasury Ledger** - Escrow tracking, tax collection

---

## Future Extension Possibilities (Not Part of v1.0)

These are **explicitly out of scope** for initial implementation but noted for future consideration:

- Caravan contracts linked to Britain orders (See [Logistics-Contracts](Logistics-Contracts.md) for conceptual design)
- Warehouse storage at settlements for bulk fulfillment
- Private trade contracts using same escrow mechanics
- Guild-exclusive fulfillment rights
- Diplomatic trade agreements affecting accepted settlements

---

## Final Verdict

This system:
- Makes Britain meaningfully unique ✅
- Preserves logistics and geography ✅
- Enables persistent large-scale trade ✅
- Avoids global item storage ✅
- Scales with population ✅
- Completes the economic loop ✅

**It is structural, not cosmetic.**

**This document represents the final missing piece of the economy.**
