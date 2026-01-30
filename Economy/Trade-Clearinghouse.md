# ⚖️ The Britain Unified Market & Clearinghouse

**The Economic Spine of the Realm**

---

## ⚓ The Central Hub
While **[Player Vendors](../Guilds/Player-Vendors.md)** handle local, decentralized trade for finished goods, the **Britain Unified Market** serves as the **Global Commodity Exchange**.

It ensures that the economy has a "baseload" of liquidity for raw materials (ingots, wood, leather, reagents) without forcing players to visit 20 different vendor houses to find basic supplies.

### Purpose
| Feature | Britain Unified Market | Player Vendors |
|---------|------------------------|----------------|
| **Core Role** | Bulk Commodities & Liquidity | Finished Goods & Rare Items |
| **Location** | Britain Docks (Centralized) | Guild Towns (Decentralized) |
| **Mechanic** | Buy/Sell Orders (Escrow) | Direct Purchase |
| **Persistence** | Offline Orders Supported | Requires Vendor Stocking |

---

## 📜 The Clearinghouse Mechanics

The Clearinghouse allows merchants to place **Buy Orders** and **Sell Orders** that persist even when they are offline or dead.

### 1. Placing Orders
- **Buy Orders:** The buyer specifies Item, Quantity, and Price Per Unit.
    > [!IMPORTANT]
    > **Vassals Only**
    > Only **Crown-Aligned Guilds/Players** can place Buy Orders. The Crown does not procure goods for the Wilderness.
    - **Escrow:** 100% of the total cost + **2% Crown Tariff** is deducted immediately.
    - **Listing:** The order appears on the public ledger.
- **Sell Orders:** The seller deposits items into the Clearinghouse.
    - **Escrow:** Items are held in system storage.
    - **Listing:** Items are listed for sale at the set price.

### 2. Matching Engine (FIFO)
The market matches orders automatically:
- If a Sell Order is placed for 10g and a Buy Order exists for 10g, the transaction happens instantly.
- Priority is given to the **Oldest Order** (First-In-First-Out).

### 3. Fulfillment & Retrieval
- **For Sellers:** Gold is deposited instantly into their Bank Box upon sale.
- **For Buyers:** Purchased items are sent to their **Dockside Storage Bin** for collection.

> **Note:** Items must be physically collected. They do not magically appear in your bank. This creates a "logistics leg" where goods must be transported from the Docks to their final destination.

---

## 💀 Permadeath & Market Positions

Market positions are tied to the *character*, not the account. When a character suffers **Permadeath**:

1.  **Active Orders:** Instantly Cancelled.
2.  **Unfulfilled Gold Escrow:** **BURNED** (Gold Sink). The Crown claims it as inheritance tax.
3.  **Unclaimed Items:** **DESTROYED** (Item Sink). Goods left on the docks are considered "lost to the confusion of death."

> **Strategy:** Do not leave massive wealth escrowed in long-term buy orders if you plan to do something dangerous.

---

## See Also
- **[Player Vendors](../Guilds/Player-Vendors.md)** — The decentralized market for finished goods.
- **[Economic Philosophy](Economic-Philosophy.md)** — Why the economy is split this way.
- **[Crown Taxation](Crown-Taxation.md)** — Details on Tariffs.
