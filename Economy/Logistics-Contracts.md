# Mercantile Transport Contracts
**A Player-Driven, Risk-Based Trade Economy**

> **Status:** Royal Charter Approved (v2.0)
> **Core Tenet:** A merchant may own the goods, but the Hauler bears the weight. The road tests them both.

---

## 1. The System of Trade

Mercantile Contracts allow merchants to move **wealth** (goods) across **the realm** without magic. It establishes the "Hauler" profession by separating the *ownership* of goods from the *burden* of transport.

### The Three Pillars
1.  **Shared Peril:** Neither Merchant nor Hauler can cheat fate. Loss is a spectre that haunts both.
2.  **Sealed Cargo:** Loose goods are for peddlers. Serious trade is packed into a `[Trade Crate]`. The Hauler moves the Crate, not the trinkets.
3.  **The Price of Danger:** The market decides the cost of safety. Merchants "Anchor" a bounty; Haulers "Seal" the pact.

---

## 2. Tools of the Trade & Infrastructure

### 2.1 The Trade Crate (`[Trade Crate]`)
*   **Atomic Manifest:** Each crate holds a specific list of items.
*   **Capacity:** Max **400 Stones** per crate.
    *   *Packing Logic:* If goods exceed 400 stones, they are split into multiple crates automatically.
*   **Physics:** **Anchored.** Cannot be moved via Magic. Weight is `ItemWeight + 10 stones`.

### 2.2 The Contract Structure
*   **Batching:** A Contract tracks `Total Weight` and `Crate Count`.
*   **Resolution:** Per Crate (Independent).
    *   **Rule:** Each Trade Crate within a Contract is resolved independently; partial delivery pays out only for delivered crates.
    *   *Example:* If 2 of 3 crates arrive, the Hauler is paid for 2, and forfeits Bond for 1.

---

## 3. The Lifecycle of a Contract

### Phase 1: The Commission (The Merchant)
A Merchant wishes to move **5,000 Iron Ingots** (500 stones? No, Ingots are heavy. Let's say 1 Ingot = 0.1 stone -> 500 stones).
*   **Packing:**
    *   The System calculates weight: 500 Stones.
    *   **Split:** Requires **2 Crates** (400 in #1, 100 in #2).
    *   Merchant pays for 2 Crates.
*   **Declaration:** Value, Bond, and Reward are set for the **Total Shipment**.

### Phase 2: The Pact (The Hauler)
A Hauler consults the Ledger. They read: "Minoc -> Britain, Weight: 500 Stones (2 Crates)".

1.  **Evaluation:** "Can my Pack Horse carry 500 stones?"
2.  **The Pledge:** Hauler posts 100% Bond.
3.  **The Handover:**
    *   **Load Check:** Hauler must have physical capacity (Backpack or Pack Animal).
    *   *Result:* Hauler is now carrying 520 Stones (Goods + Crate Weight). Speed may be affected.

### Phase 3: The Road (Transit)
The Hauler travels the physical world.

*   **Peril:** If the Hauler falls:
    *   **The Crate Drops.** It remains physically in the world (or corpse).
    *   **The Timer Ticks:** The 24-hour Contract Timer does **not** stop.
    *   **The Race:** Pirates must steal and fence the crate before it expires.

### Phase 4: The Black Market (Piracy)
If a Pirate obtains a Sealed Crate:
1.  **Action:** Bring to a **Fencer NPC** within the 24h window.
2.  **Payout:** Fencer pays **20% of Verified Value**.
3.  **Result:** Bond is Forfeit (Theft). Merchant gets 80%.

### Phase 5: Arrival & Expiration
**Condition A: Successful Delivery**
*   Hauler arrives at Britain before 24h.
*   Hauler gets Wage + Bond. Merchant gets Crate.

**Condition B: Expiration (Spoilage)**
*   If the Crate is not delivered or fenced within **24 Hours**:
    *   **Status:** Becomes "Spoiled Goods" (Trash Item).
    *   **Bond:** Forfeit (Late Delivery).
    *   **Payout:** Merchant receives 80% of Bond (Compensation).
    *   **Sink:** The item is effectively destroyed by time.

---

## 4. The Laws of Fair Trade & Anti-Collusion

### 4.1 The Simplified Risk Model (EVE-Lite)
To create a perfectly balanced economy without complex insurance forms:
*   **The Bond:** Hauler posts **100% of Declared Value**.
*   **The Failure Rule:** If the Contract fails (Stolen/Destroyed/Lost):
    *   **Hauler:** Forfeits 100% of Bond (Total Loss).
    *   **Merchant:** Receives **80% of Bond**. (System taxes 20% "Deductible").
    *   **System:** Burns the remaining 20%.

### 4.2 The Anti-Collusion Math
This model makes "Self-Raiding" and "Baiting" mathematically useless.
*   **Baiting:** Merchant (80% Payout) + Pirate (20% Fence) = **100% Total**. (Break Even / Zero Profit).
*   **Theft:** Hauler (Lose 100%) + Pirate (Gain 20%) = **-80% Loss**. (Theft is ruinous).

### 4.3 The "Anti-Hoarding" Law
To prevent Merchants from using Contracts as "Infinite Vaults":
*   **The Mark:** Packed goods are marked with the date of packing.
*   **The Limit:** The "72-Hour Grace" begins at packing.
*   **The Stain:** This timer **does not wash away** if the contract is cancelled. It stains the items for **7 days**.
*   **Result:** Abuse of the system burns the Royal Tariff (5%) for no gain.

---

## 5. Reputation (The Service Record)

With 100% Bonds, **Reputation is purely historical.**
*   The System does not grant perks for it.
*   Players use it to decide: *"Do I want my 10,000gp back (Bond), or do I want my Iron Ingots delivered (Success)?"*
*   High Rep = Higher chance of being picked for urgent jobs.
*   Low Rep = Must rely on being the only option available.

---

## 6. Time Limits & Spoilage

**The Clock:**
*   Each contract has a Crown-imposed delivery window: `Distance * Multiplier` (e.g., Minoc->Brit = 6 Hours).
*   **Real-Time Rule:** The timer **continues to elapse** regardless of login state, death, or possession. It is non-pausing.
*   **The Expiry Rule:** Failure to arrive before expiry turns goods into **Spoiled Goods**.
*   **Outcome:** Treated exactly as destruction. Bond Forfeit (100%), Merchant Payout (80%).
*   **Why:** Prevents "Limbo" states where a Hauler logs off with goods for days.

---

## 7. Tragedies & Resolutions

| Scenario | Outcome |
| :--- | :--- |
| **Hauler Abandons the Road** | Crate "Lost". Bond Forfeit. Merchant gets 80%. |
| **Hauler Vanishes (Sleeps)** | Timer continues (Non-Pausing). Eventually "Spoiled". |
| **Crate Destroyed (Violence)** | Contract Failed. Bond Forfeit. Merchant gets 80%. |
| **Merchant Recalls (Pre-Departure)** | Crate returns to Vault. Royal Tariff Forfeit. Timer NOT reset. |
| **Pirate Seizes Crate** | Pirate Fences (20%). Bond Forfeit. Merchant gets 80%. |

---

## 7. Design Philosophy

This system ensures that:
1.  **Wealth must Walk.** No magic shortcuts.
2.  **Trust is Gold.** Reputation fills the purse.
3.  **Risk is the Law.** Insurance is a shelter, not a shield.
4.  **Taxes are Inevitable.** Cycling is ruinous.

Trade is not a menu. It is the blood in the veins of Britannia.