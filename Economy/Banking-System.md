# 🏦 Banking System

**Status:** Ship-Ready (v1.0)
**Last Edited:** 2026-01-28
**Scope:** Defines the tripartite banking system (Local Banks for items, Britain Bank for gold, Guild Banks for shared storage), limiting global teleportation.
**Integrated With:** [Market Economy](Market-Economy.md), [Bounty System](../Justice/Bounty-System.md), [Guilds](../Guilds/Guilds.md)
**Explicitly Excludes:** Global item teleportation, remote access, personal bounty escrow in Britain Bank.

---

**Localized Storage, Centralized Finance, Meaningful Logistics**

> *Gold is trust. Goods are territory. Power belongs to those who can move both.*

## Core Principle

The banking system creates meaningful economic geography by separating where **gold** is stored (Britain) from where **goods** are stored (local banks). This forces logistics gameplay while preventing global item teleportation.

**Three Banking Types:**
- **Local Banks** — Localized item storage
- **Britain Bank** — Gold-only financial hub (Crown Treasury)
- **Guild Banks** — Shared organizational vaults

---

## Local Banks (Item Storage)

**Location-bound storage facilities tied to specific cities or regions.**

### What They Store

✅ Items
✅ Materials
✅ Crafted goods
✅ (Optional) Local gold

❌ No global access

### Access Rules

Local banks may have different access policies based on the location:
- Public access
- Resident-only access
- Reputation thresholds
- Fees or storage taxes
- Lawful/outlaw restrictions

**All access is physical** — players must be present.

### Properties

- Storage NOT shared between locations
- Items do not teleport
- Capacity may be limited

> Local banks define **where goods live**.

---

## Britain Bank (Crown Treasury)

**The Crown's financial authority and backbone of the unified market system.**

Britain Bank is a **specialized financial institution**, NOT a warehouse.

### What They Store

✅ Gold
✅ Market escrow funds
✅ Trade settlement balances
✅ Market order escrow

❌ Items
❌ Materials
❌ Equipment

**This is non-negotiable.**

### Access Rules

- Requires **lawful standing**
- Requires **physical presence** in Britain (or licensed broker)
- **Outlaws are denied access**
- Gold stored here **cannot be looted on death**

### Relationship to Markets

- All Britain market trades draw from Britain Bank gold
- Market taxes are deducted automatically
- Market escrow is held here
- **Market order escrow** is locked and released upon fulfillment

> Britain Bank controls **money**, not **stuff**.

---

## Britain Trade Docks (Logistics Hub)

**The physical intake and storage facility for the capital.**

Since the Crown Treasury does not store items, the **Trade Docks** serve as the "Local Bank" for Britain.

### What They Store

✅ Import/Export cargo
✅ Logistics contract deliveries
✅ Bulk resources for capital consumption
✅ Personal item storage for Britain residents

### Logistics Role

#### Inbound (Imports)
- **All logistics contracts destined for Britain deliver here.**
- **Storage Policy:**
  - First **72 hours**: Free storage.
  - **After 72 hours**: Daily storage fee of **2.5% of total purchase value**.
  - Fees accrue indefinitely until paid. Cargo cannot be released until all fees are cleared.

#### Outbound (Exports)
- **No loose items accepted.**
- **Requirement:** Goods must be packed in **Export Crates** (crafted by Carpenters).
- **Process:**
  1. Merchant packs Crate.
  2. Merchant brings Crate to Dock Clerk.
  3. Merchant pays **Administrative Bond** (non-refundable upfront).
     - **Bond:** 5% of Verified Cargo Value.
     - **Success Refund:** 50% of Bond refunded upon successful delivery.
     - **Crown Tax:** 25% of the refund goes to the Crown; remainder is a gold sink.
     - **Net Cost to Merchant:** ~3.125% of value (on success).

- **Cancellation:** If contract is cancelled, Crate moves to **Inbound** storage. **The 72h free window DOES NOT RESET.**

### Anti-Exploit Safeguards (The "Anti-Reset" Rule)
- **Item Timestamping:** When goods enter outgoing staging, they are stamped with `first_staged_at`.
- **Persistent Timer:** The 72h free window starts at `first_staged_at`. Canceling and re-contracting **does not reset** this timer.
- **7-Day Sticky Rule:** The timestamp follows the item stack for **7 days**. Cycling contracts only burns bonds; it does not buy free storage time.
- **Value Verification:** Storage fees and Bonds are calculated based on **server-verified value** (30-day median), not player declaration.

> The Treasury holds the **value**. The Docks hold the **volume** (and charge for it).


---

## Guild Banks (Shared Vaults)

**Shared storage vaults owned by guilds.**

### What They Store

✅ Items
✅ Materials
✅ War supplies
✅ Crafting stockpiles
✅ (Optional) Gold (not market-connected)

### Access & Governance

Guild banks feature:
- **Rank-based permissions**
- **Withdrawal limits**
- **Audit logs**
- **Optional time delays**
- **Physical access requirements**

> Guild banks are **organizational power**, not **geographic power**.

### ⚠️ Risk of Total Loss
If a guild is disbanded, or if its **Guildstone is destroyed** (during war or by decree), the **Guild Bank and all its contents are permanently deleted**. There is no recovery. The vault dies with the guild.

### Relationship to Property
- Guild banks are **layered on top** of guild property infrastructure
- They do NOT replace local banks
- A guild must **control or lease space** to operate one

---

## Gold Flow

| Action | Result |
|--------|--------|
| Monster kills | Gold enters inventory |
| Deposit in Britain | Gold becomes secure |
| Market trade | Uses Britain Bank gold |
| Withdrawal | Physical gold in inventory |

**Gold must be physically moved to Britain to be secured.**

---

## Item Flow

| Action | Result |
|--------|--------|
| Craft item | Item exists locally |
| Store item | Goes to local or guild bank |
| Trade item | Must be physically moved |
| Market listing | Requires delivery to Britain |

**No item teleportation exists.**

---

## New Player Banking Flow

### Starter Banks

New players begin with access to a **starter bank**:
- Safe
- Generous storage limits
- Minimal fees
- High security
- **No Britain access initially**

**This teaches:**
- Local storage
- Geography
- Risk containment

### Britain Access Unlock

Access to Britain Bank is **earned** via:
- Reputation or citizenship
- Completion of orientation objectives
- Trade or courier tasks
- Payment of a Crown fee

> Britain is **aspirational**, not default.

---

## Outlaw Banking

**Outlaws cannot access Britain Bank.**

### Outlaw Options

Outlaws may use:
- Local banks that allow them
- Pirate or black-market zones
- Guild vaults

**Outlaw banking is:**
- Risky
- Profitable
- Unstable

---

## Death & Banking Interaction

### Normal Death

- Inventory dropped or lootable
- **Banked assets remain safe**

### Permadeath Execution

- Inventory destroyed
- Personal containers destroyed
- **Local bank items remain**
- **Guild bank items remain**
- **Britain gold remains**

**This balances loss with continuity.**

---

## Integration with Other Systems

### Bounty System

**Personal bounty escrow is NOT held in Britain Bank.**

Personal bounties use a **separate Justice escrow system** to avoid requiring lawful standing to place bounties.

See [Bounty System](../Justice/Bounty-System.md) for details.

### Market Economy

- Britain Bank holds all market escrow
- Local banks hold physical goods awaiting delivery
- Logistics contracts move goods to Britain

See [Market Economy](Market-Economy.md) for market mechanics.


### Guilds

- Guild banks require physical presence
- Guild vault control = organizational power
- Siege affects guild bank access

---

## Anti-Exploitation Safeguards

✅ **No remote access**
✅ **No global storage**
✅ **No instant transfers**
✅ **Optional withdrawal timers**
✅ **Capacity pressure encourages distribution**

---

## Player Mental Model

Players should naturally think:

> "My gold is safe in Britain."
> "My gear is stored in that town."
> "Our guild supplies are in our vault."

If a system contradicts this, it's wrong.

---

## Design Thesis

**Britain holds trust.**
**Regional locations hold goods.**
**Guilds hold coordination.**

This banking system:
- Preserves logistics
- Ensures geography matters
- Makes trade routes matter
- Supports all playstyles
- Prevents economic flattening

---

## See Also

- [Market Economy](Market-Economy.md) — Trading and vending systems
- [Bounty System](../Justice/Bounty-System.md) — Justice escrow handling
- [Guild System](../Guilds/Guilds.md) — Guild vault management
