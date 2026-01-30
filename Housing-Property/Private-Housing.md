# 🏠 Private Housing & Transfers

**Status:** Ship-Ready (v1.1)  
**Last Edited:** 2026-01-29  
**Scope:** Property ownership, title transfer mechanics, transfer tax, co-ownership risks, death/probate/inheritance  
**Integrated With:** [Housing Auctions](Housing-Auctions.md), [Storage Rules](Storage-Rules.md)  
**Explicitly Excludes:** Construction mechanics, decoration limits

---

**Liquid Assets, Market Sales, and Inheritance**

---

## 1. Property Ownership

All property in Britannia can be owned by individual characters for personal use, trade, or shops.

*   **Ownership:** Individual Character (Title Holder).
*   **Market:** Open. Can be bought, sold, and traded—**unless a Guild is connected** (See [[Guild Property Connection|Guild-Landholder-System]]).
*   **Valuation:** Determined by the [Housing Auctions](Housing-Auctions.md) system (Grades 1-10), not by arbitrary vendor pricing.

---

## 2. Regulated Title Transfer (Selling a House)

Private homes are liquid assets. We encourage a healthy real estate market, regulated by the Crown to prevent tax evasion.

### The Plaque Interface
Every private home has a brass plaque at the door.
*   **View Title:** Shows the legal owner (Title Holder).
*   **Tax Status:** Shows upkeep owed based on its [Grade](Housing-Auctions.md).
*   **Transfer Title:** The specific mechanic to sell the house.

### The Transfer Tax
When a home is sold via the Plaque:
*   **Tax Rate:** **Variable Property Tax** (20% of Assessed Value). Set by the Crown.
*   **Assessed Value:** Derived from the property's Grade and the rolling market average (see [Housing Auctions](Housing-Auctions.md)).
*   **Why:** This prevents players from "selling" a mansion to a friend/alt for 1 gold to dodge the tax. You pay the Fair Market Tax regardless of the deal price.
*   **Destination:** 50% to Crown Treasury, 50% Removed from Economy.

---

## 3. Property Allegiance (Tax vs. Upkeep)
The Title Holder decides the political standing of the property. This choice flows downward to all Co-Owners and Tenants regarding this specific property.

### Option A: Crown Allegiance (Vassal)
*   **Cost:** **Crown Tax**. Rates set by the King/Master of Treasury.
*   **Destination:** Revenue flows to the **Crown Treasury** (pays City Salaries).
*   **Benefit:** The property is protected by **Guards** (if in zone) and **Justice Laws** (Burglary/Trespass is a crime).

### Option B: Non-Aligned (Independents)
*   **Cost:** **Void Upkeep**. A flat sink calculated to match the "Fair Market" cost of maintenance.
*   **Destination:** **VOID**. The gold is destroyed (Gold Sink). The Crown receives 0g.
*   **Benefit:** Immunity to Seizure (except for prior debts).
*   **Consequence:** No legal protection. Trespass/theft here is "Warfare," not crime.

> **Why pay Upkeep if you don't pay Tax?**
> To prevent infinite hoarding. Land has value. If you don't pay the universe for the privilege of holding it, it decays. You cannot starve the Crown by holding free land.

---

## 4. Co-Ownership is NOT Ownership

Players often try to bypass the Transfer Tax by selling "Co-Owner" slots instead of the Title.

**This is unsafe by design.**
*   **Title Holder:** Has legal rights. Controls the house.
*   **Co-Owner:** Has **Access Only**. Can be removed at any time.
*   **The Risk:** If the Title Holder stops paying taxes, gets banned, or deletes their character, the house **Collapses** or goes to **Auction**.
*   **The Loss:** Co-Owners lose **Access**, **Decorations**, and **Location**.

> **Note on Storage:**
> Physical houses are **not** safe storage. Co-owners have no legal claim to items inside.
> See [[Storage Rules|Storage-Rules]] for details on Warm Storage vs. Bank Storage.

---

## 4. Death & Probate (Inheritance)

When a Private Title Holder suffers Permadeath, the property enters **Probate**. Use this mechanic to pass property to heirs.

### The Probate Window (48 Hours)
1.  **Status:** House Plaque marked "In Probate".
2.  **Access:** Remains open to Friends/Co-Owners.
3.  **Risk:** Decay timers accelerate.

### First Right of Refusal
Any listed **Co-Owner** has the option to Claim Title within the 48-hour window.
*   **Action:** Click Plaque -> "Claim Inheritance".
*   **Cost:** Must pay the **Transfer Tax** (20% of Assessed Value).
*   **Result:** Co-Owner becomes the new Title Holder.
*   **Logic:** You verify you are the legitimate heir by paying the state its due.

### Failure State (Public Auction)
If 48 hours pass and no Co-Owner pays the tax:
1.  **Eviction:** All Co-Owners/Friends removed.
2.  **Title Revocation:** The Title is stripped from the deceased character.
3.  **Auction:** The Title is listed on the **Public Auction House** (Starting Bid: 1gp).

---

## 5. Summary

| Action | Mechanic | Cost |
| :--- | :--- | :--- |
| **Sell House** | Plaque Transfer | Price (to Seller) + Tax (to Crown) |
| **Buy Co-Ownership** | Friend List | Unsafe (Zero Rights) |
| **Inherit (Death)** | Probate Claim | Tax (20% Assessed Value) |
| **Tax Evasion** | 1g Sale | Fails (Tax based on Grade/Market) |

---

## See Also
*   [[Guild Landholder System|Guild-Landholder-System]] — Guild Property Rules.
*   [[Housing Philosophy|Housing-Philosophy]] — Why houses are not bank boxes.
