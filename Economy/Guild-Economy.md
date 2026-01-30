**Status:** Ship-Ready (v1.0)
**Last Edited:** 2026-01-28
**Scope:** Guild economics, commercial infrastructure, vendor markets, hauling integration.
**Integrated With:** [Guilds](../Guilds/Guilds.md), [Player Vendors](../Guilds/Player-Controlled-Vendors.md), [Crown Liens](Crown-Liens.md)
**Explicitly Excludes:** Faction politics, internal member dues, Crown taxation mechanics (citywide).

---

# 🏛️ Guild Economy

**Commercial Infrastructure & Revenue Sources**

---

## The Guild as an Economic Entity

A guild is not just a social organization; it is an **economic entity**. Guilds generate revenue by providing infrastructure for trade and commerce on their property.

## 1. Vendor Marketplaces

The primary revenue source for any guild is the **Player Vendor Market**.

### Vendor Stall Rental Fees (Automatic)
*   **Mechanic:** Weekly system-enforced rent charged to the vendor owner.
*   **Scope:** Applied to every vendor frame placed on guild property.
*   **Revenue:** Flows directly to the **Guild Treasury**.
*   **Failure to Pay:** If a vendor cannot pay rent, it packs up automatically (escrowed to owner's bank).

#### The Efficiency Loop
*   **Rent:** Prevents "dead shops" by forcing merchants to sell enough to cover overhead.
*   **Tax:** Captures specific high-value transaction revenue.

### Vendor Sales Taxes (Automatic)
*   **Mechanic:** System-enforced deduction at the point of sale.
*   **Scope:** Applies to **all** player vendors located on guild property.
*   **Revenue:** Flows directly to the **Guild Treasury**.

#### Tax Guardrails (Transparency & Gradualism)
To prevent "bait-and-switch" taxation, the following rules apply:
*   **Tax Increases:** Delayed by **24 hours**. Increases are announced immediately but only take effect after the window closes.
*   **Tax Cuts:** Take effect **immediately**.
*   **Gradualism:** Tax may increase by a maximum of **10% per 24-hour period**.
*   **Public Visibility:** All rates and pending changes are visible on vendor UIs and guild ledgers.

#### The Political Loop
Leaders set tax rates to balance **Traffic vs. Revenue**:
*   **High Tax:** Maximizes profit per sale but drives merchants to rival guilds.
*   **Low Tax:** Attracts high-volume merchants and makes the guild property a trade destination.

> [!IMPORTANT]
> **Crown Lien Protection**
> If the guild is under a [Crown Lien](Crown-Liens.md), the **Guild's Tax Share** is intercepted. The **Merchant (Vendor Owner) is protected** and receives their full profit.

## 2. Logistics & Transport Integration

Guilds serve as critical nodes in the logistics network.

### The Contract Hub
*   **Hauling Destination:** Merchants designate guild property as delivery points for Trade Crates.
*   **Fulfillment Fees:** **Guild Leaders** can set fees on **Contract Fulfillment** (delivery of crates).
    *   *Effect:* High fulfillment fees discourage merchants from using the guild as a depot.

### Packing & Commercial Services

Guilds provide the "soft services" that make trade possible:
*   **Secured Packing:** Providing public Trade Crates for merchants to pack goods.
*   **Escort Services:** Guild members offering protection for haulers moving through their territory.
*   **Resupply:** Alchemists and Cooks selling supplies to visiting haulers.

## Summary: The Guild's Economic Role

A Guild does not just "own land." It **manages a market**.
1.  **Attract Merchants:** By setting competitive vendor taxes.
2.  **Attract Haulers:** By offering low fulfillment fees and safe routes.
3.  **Provide Services:** By offering protection, supplies, and infrastructure.

> [!WARNING]
> **Economic Failure State**
> If a guild cannot cover upkeep through trade and taxation, the property decays or falls to auction. See [Guild Upkeep](../Guilds/Guild-Upkeep.md).

## See Also
*   [Player Vendors](../Guilds/Player-Vendors.md) - Market stalls and mechanics.
*   [Guild Upkeep](../Guilds/Guild-Upkeep.md) - Property maintenance costs.
