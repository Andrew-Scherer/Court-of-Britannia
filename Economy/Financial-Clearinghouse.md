# 📉 Financial Clearinghouse & Trade Docks

**Status:** Ship-Ready (v1.1)
**Last Edited:** 2026-01-30
**Scope:** The central market for bulk commodities and crafted goods.
**Integrated With:** [Banking System](Banking-System.md), [Crown Taxation](Crown-Taxation.md)

---

## "Gold at Bank, Goods at Docks"

The Kingdom operates on a strict separation of Finance and Logistics. The **Bank** handles the contracts and money, while the **Trade Docks** handle the physical movement of heavy goods.

### 1. The Exchange Floor (Britain Bank)
Located within the Britain Bank, this is where **contracts** are signed. It is a place of numbers, not crates.

*   **Vassals Only:** Access to the Clearinghouse is a privilege of Crown Allegiance.
*   **Escrow Service:** The Bank holds all funds for active orders.
*   **The Ledger:** A public listing of all Buy and Sell orders currently open.

### 2. The Trade Docks (Logistics)
Located at the Britain Port, this is where **fulfillment** happens.

*   **Dock Box:** This functions exactly like a **Local Bank Box**. It is physically located at the Docks.
*   **Transit Only:** This is for moving goods, not storing them.

---

## Trading Mechanics

### Placing a Buy Order
"I want 1,000 Iron Ingots."

1.  **Bank:** Player speaks to the **Exchange Clerk**.
2.  **Order:** Defines Item (Iron Ingots), Quantity (1,000), and Price Per Unit (8gp).
3.  **Escrow:** The total cost (8,000gp) is **immediately removed** from the player's bank and held in Escrow.
4.  **Creation:** The Buy Order is posted to the public Ledger.

### Placing a Sell Order
"Selling 500 Arrows."

1.  **Docks:** Player places the physical items (500 Arrows) into their **Dock Box**.
2.  **Bank:** Player speaks to the **Exchange Clerk**.
3.  **Selection:** The Clerk shows a list of eligible items currently in the player's Dock Box.
4.  **Order:** Player selects the arrows, sets a **Price** (4gp), and an **Expiry Date** (e.g., 7 days).
5.  **Escrow:** The items are **removed** from the Dock Box and held in **Commodity Escrow** (void storage).
6.  **Active:** The order is posted to the Ledger.

### Fulfillment & Expiry
When a match occurs:
*   **Gold:** Transferred from Escrow to Seller's Bank (minus 5% Crown Tax).
*   **Goods:** The items appear in the Buyer's **Dock Box**.

If the order **Expires** or is **Cancelled**:
*   **Return:** The items reappear in the Seller's **Dock Box**.
*   **3-Hour Rule:** The 3-hour transit timer begins immediately upon return. You must collect them or they will despawn.

---

## The 3-Hour Rule (Despawn)

The Crown does not provide free warehouses. The Docks are a high-traffic transit zone.

*   **Transit Limit:** Items can remain in a Dock Box for **3 Hours**.
*   **Abandonment:** If items are not collected within 3 hours, they are considered **Abandoned**.
*   **Consequence:** Abandoned items **Despawn** (are deleted).

> [!IMPORTANT]
> **No Demurrage, No Mercy**
> There is no tax to extend this time. You must move your goods to private storage or a Guild Hall immediately. If you leave it at the docks, the Crown assumes it is trash.
