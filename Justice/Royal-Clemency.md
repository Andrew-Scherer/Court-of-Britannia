**Status:** Ship-Ready (v1.0)  
**Last Edited:** 2026-01-29  
**Scope:** The King's power to pardon Red players at economic cost with political consequences.  
**Integrated With:** [Bounty System](Bounty-System.md), [Justice Records](../Ledgers/Justice-Records.md), [Fiscal Ledgers](../Ledgers/Fiscal-Ledgers.md)  
**Explicitly Excludes:** Mechanical locks, role objections, time limits.

---

# Royal Clemency

## Overview

**Royal Clemency** is the King's power to pardon criminals. The King can grant clemency to any Red player, anytime, with full discretion.

**The Trade-off:**
- **Economic Cost:** Crown must refund the entire bounty from Treasury
- **Political Cost:** Every clemency is publicly recorded and creates political ammunition
- **Historical Record:** Murder counts remain in Mortuary Rolls forever

---

## Core Mechanics

### How It Works

1. **King initiates clemency** for any Red criminal
2. **System checks Crown treasury**
   - If Treasury ≥ bounty value → Proceed
   - If Treasury < bounty value → **Clemency blocked**
3. **Crown refunds bounty** to all contributors (victims and public donors)
4. **Criminal status changes:** Red → Blue
5. **Bounty cleared** from Most Wanted Board
6. **Murder counts remain** in Mortuary Rolls (permanent historical record)
7. **Public record created** in Court Ledger

### The Economic Cost

**When clemency is granted, the Crown must refund the entire bounty pot:**

**Example: 100,000g bounty**
- Victim contributions: 40,000g → Refunded to victim's estate
- Public donations: 20,000g → Refunded to donors
- Crown match: 40,000g → Cancelled (Crown paid itself)
- **Net cost to Crown: 60,000g**

**This creates Economic Warfare:**
- Players can "outpay" the Crown by raising bounties higher than Treasury reserves
- Wealthy guilds can make clemency mathematically impossible
- Forces the King to choose between pardoning allies and funding other operations

### The Political Cost

**Every clemency is publicly visible:**
- **Court Ledger** records: criminal name, bounty paid, date, King's name
- **Mortuary Rolls** retain all murder counts with pardon notation
- Rivals can compile clemency patterns as political ammunition
- "The King pardoned 8 murderers this month and spent 500,000 gold"

---

## What Clemency Does (and Doesn't Do)

### ✅ What Changes
- Criminal status: Red → Blue (no longer attackable, guards don't kill on sight)
- Bounty cleared (no valid execution writ)
- Legal protection restored

### ❌ What Doesn't Change
- **Murder counts remain** in Mortuary Rolls (permanent historical record)
- **Reputation tainted forever** (everyone can see murder history)
- **Social consequences persist** (NPCs/players can still ostracize)

**Philosophy:** The Crown can forgive, but history doesn't forget.

---

## King's Powers

### Unrestricted Authority
- ✅ Grant clemency to any Red criminal
- ✅ Appoint criminals to high offices
- ✅ Dismiss criminal appointees freely
- ✅ Pardon same criminal multiple times
- ✅ Set Crown match rate for bounties

### Only Economic Limit
- ❌ Cannot pardon if Crown treasury < bounty value
- This is a **hard economic constraint**, not political restriction
- King must fund treasury before granting clemency

**No time locks, no role objections, no mechanical restrictions—only economics and politics.**

---

## Edge Cases

**Criminal commits new murder after pardon?**
- New murder count added to Mortuary Rolls
- Returns to Red status (if counts > threshold)
- King can pardon again (if can afford new bounty)
- Pattern becomes visible: "Pardoned 3 times, murdered 15 people total"

**King dies during criminal's appointment?**
- Criminal remains Blue (pardon already granted)
- Murder counts remain in Mortuary Rolls
- New King can dismiss appointee freely

**King lacks funds for clemency?**
- Clemency blocked by system
- King must: raise taxes, seize assets, reduce bounty match rate, or abandon clemency

**Criminal killed after pardon?**
- Remains Blue permanently (even in death)
- Killer gains murder count (killed Blue player)
- Political drama: "King's pardoned criminal murdered in office"

---

## Examples

### Example 1: Successful Clemency

**Initial State:**
- Criminal: "Blackblade" (8 murder counts, Red)
- Bounty: 50,000 gold
- Crown Treasury: 200,000 gold

**Result:**
- Crown pays: 50,000g (refunded to contributors)
- Blackblade: Red → Blue
- Treasury: 150,000g remaining
- Court Ledger: "Clemency granted to Blackblade. Bounty refund: 50,000g. Historical record: 8 murders."
- Mortuary Rolls: Murder entries retained + pardon notation

**Political Fallout:**
- Rival faction: "The King appointed a mass murderer and paid 50,000 gold to pardon him"

---

### Example 2: Blocked Clemency

**Initial State:**
- Criminal: "Redhand" (12 murder counts, Red)
- Bounty: 300,000 gold
- Crown Treasury: 80,000 gold

**Result:**
- **Clemency blocked:** "Insufficient Crown funds. Bounty: 300,000g, Treasury: 80,000g"
- Redhand remains Red
- King must raise taxes, seize property, or abandon clemency

**Political Drama:**
- Rivals: "The King wants to pardon a murderer with a 300,000 gold bounty"

---

### Example 3: Economic Warfare

**Timeline:**
- Month 1: King pardons 3 criminals (125,000g total)
- Month 2: King pardons 4 criminals (220,000g total)
- Month 3: King pardons 2 criminals (175,000g total)
- **Total spent: 520,000 gold**

**Political Consequence:**
- Rival faction: "The King has pardoned 23 murderers and spent 520,000 gold in 3 months"
- Claimant emerges: "I will restore justice to Britannia"
- Economic crisis: Crown cannot fund Guard patrols due to depleted treasury

---

## Ledger Integration

### Court Ledger Entry Format

```
CLEMENCY GRANTED
Date: [Timestamp]
Criminal: [Character Name]
Status Change: Red → Blue
Bounty Value: [X] gold
Crown Payment: [X] gold (refunded to contributors)
Historical Record: [N] murder counts (retained)
Granted By: King [Name]
```

### Mortuary Rolls Update

**Original murder entries remain intact:**
```
[Date] [Victim Name] murdered by [Criminal Name]
[Date] [Victim Name] murdered by [Criminal Name]
...
[N total murders]
```

**Pardon notation added:**
```
[Date] CLEMENCY GRANTED by King [Name]
Status: Red → Blue
Murder Count: [N] (historical record retained)
```

---

## Design Philosophy

### Why refund the money instead of destroying it?
- Enables **Economic Warfare**: Players can outpay the Crown
- Turns wealth into a **check on royal power**
- Prevents feeling that King "stole" bounty money

### Why block clemency if Crown can't afford it?
- **Economic consequence**, not political restriction
- Creates meaningful resource management gameplay
- Prevents infinite pardons (which would trivialize bounty system)

### Why no time locks or appointment restrictions?
- Mechanical locks remove player agency
- Political consequences **are the game**
- Court Ledger transparency enables player response

### Why keep murder counts in Mortuary Rolls?
- Records are permanent truth
- Players can research appointee backgrounds
- Creates social consequences even after legal pardon
- Medieval concept: Pardon erases punishment, not guilt

---

## Summary: Philosophy Alignment

✅ **Power Is Political** — King can pardon freely; opposition comes from players, not mechanics

✅ **Death Is Permanent** — Murder counts never erased; victims stay dead

✅ **Legitimacy Is Everything** — Clemency abuse creates legitimacy crisis

✅ **Bold Failure Rewarded** — Corrupt King creates great stories

✅ **Systems Run Without Babysitting** — Automatic ledger updates, economic constraint self-enforces

---

**The clemency system is pure player agency with economic cost and political consequence—no mechanical locks, no role gatekeepers, just the weight of gold and the judgment of history.**
