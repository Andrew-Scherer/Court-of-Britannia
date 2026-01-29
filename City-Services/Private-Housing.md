# 🏠 Private Housing

**Status:** Ship-Ready (v1.0)  
**Last Edited:** 2026-01-28  
**Scope:** Property ownership, title transfer mechanics, transfer tax, co-ownership risks, death/probate/inheritance  
**Integrated With:** [Guild Property Connection](../Housing-Property/Guild-Landholder-System.md), [Storage Rules](../Housing-Property/Storage-Rules.md), [Housing Philosophy](../Housing-Property/Housing-Philosophy.md), [Property System](../City-Services/Property.md)  
**Explicitly Excludes:** Guild-specific property rules (see Guild Property Connection), construction mechanics, decoration limits

---

**Liquid Assets, Market Sales, and Inheritance**

---

## 1. Property Ownership

All property in Britannia can be owned by individual characters for personal use, trade, or shops.

*   **Types:** Cottages, Villas, Towers, City Shops, Castles, Forts, Abbeys.
*   **Ownership:** Individual Character (Title Holder).
*   **Market:** Open. Can be bought, sold, and traded—**unless a Guild is connected** (See [[Guild Property Connection|../Housing-Property/Guild-Landholder-System]]).

---

## 2. Regulated Title Transfer (Selling a House)

Private homes are liquid assets. We encourage a healthy real estate market, regulated by the Crown to prevent tax evasion.

### The Plaque Interface
Every private home has a brass plaque at the door.
*   **View Title:** Shows the legal owner (Title Holder).
*   **Tax Status:** Shows upkeep owed.
*   **Transfer Title:** The specific mechanic to sell the house.

### The "Values" of a House
To ensure fair taxation, every house has two values:
1.  **Sale Price:** The gold amount the Seller asks for.
2.  **Assessed Value:** The system-calculated worth of the property.

### Average Tile Value (ATV)
The Assessed Value is calculated dynamically:
*   **ATV:** Rolling 30-day average of all public house sales per tile.
*   **Formula:** `Total Tiles * ATV` = Assessed Value.
*   **Logic:** If the market is hot, your tax assessment rises.

### The Transfer Tax
When a home is sold via the Plaque:
*   **Tax Rate:** **Variable Property Tax** (5% - 20% of Assessed Value). Set by the Crown.
*   **Why:** This prevents players from "selling" a mansion to a friend/alt for 1 gold to dodge the tax. You pay the Fair Market Tax regardless of the deal price.
*   **Destination:** 50% to Crown Treasury, 50% Removed from Economy.

### Auction Wins Also Pay Transfer Tax
When a property is won at public auction:
*   **Bid Price:** May be as low as 1gp (auction starting price)
*   **Transfer Tax:** Calculated on **Assessed Value**, NOT bid price
*   **Total Cost:** Bid Price + Transfer Tax (on Assessed Value)
*   **Example:** Win auction @ 1gp for a 1M gold castle = 1gp + 200k tax (if tax rate is 20%)

This prevents tax evasion via abandonment schemes (player intentionally abandons property so friend can win cheap auction).

---

## 3. Co-Ownership is NOT Ownership

Players often try to bypass the Transfer Tax by selling "Co-Owner" slots instead of the Title.

**This is unsafe by design.**
*   **Title Holder:** Has legal rights. Controls the house.
*   **Co-Owner:** Has **Access Only**. Can be removed at any time.
*   **The Risk:** If the Title Holder stops paying taxes, gets banned, or deletes their character, the house **Collapses**.
*   **The Loss:** Co-Owners lose **Access**, **Decorations**, and **Location**.

### Britain Property Warning
**Britain properties have private storage attached to the house.**
*   **If the Title Holder abandons or dies without inheritance:** Co-Owners lose **ALL items stored in the private storage**.
*   **There is no bank protection** for Britain house storage—it is tied to the property itself.
*   **This makes Britain Co-Ownership extremely risky.** You are trusting the Title Holder with everything you store.

> *Buying Co-Ownership is not buying a house. It is renting a room from a landlord who might vanish tomorrow—and in Britain, they take your belongings with them.*

---

## 4. Death & Probate (Inheritance)

When a Private Title Holder suffers Permadeath, the property enters **Probate**. Use this mechanics to pass property to heirs.

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
3.  **Auction:** The Title is listed on the **Public Auction House** (Starting Bid: Assessed Value).

> *Note: Since items are stored in the Global Bank, players do not lose their loot. They lose the specific location, the decoration, and the prestige of the address.*

---

## 5. Summary

| Action | Mechanic | Cost |
| :--- | :--- | :--- |
| **Sell House** | Plaque Transfer | Price (to Seller) + Tax (to Crown) |
| **Buy Co-Ownership** | Friend List | Unsafe (Zero Rights) |
| **Inherit (Death)** | Probate Claim | Tax (20% Assessed Value) |
| **Tax Evasion** | 1g Sale | Fails (Tax based on ATV) |

---

## See Also
*   [[Guild Landholder System|../Housing-Property/Guild-Landholder-System]] — Guild Property Rules.
*   [[Housing Philosophy|../Housing-Property/Housing-Philosophy]] — Why houses are not bank boxes.
*   [[Civic Systems Agent|../.agent/agents/civic_systems]] — Design Authority.
