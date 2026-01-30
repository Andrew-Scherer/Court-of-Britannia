# ⚖️ Crown Liens & Economic Pressure

**Status:** Ship-Ready (v1.0)
**Last Edited:** 2026-01-29
**Scope:** Defines the mechanism for intercepting guild/faction revenue to enforce Crown debt without deleting the entity.
**Integrated With:** [Crown Taxation](Crown-Taxation.md), [Guild Banking](../Guilds/Guild-Banking.md), [Seizure Enforcement](Seizure-Enforcement.md), [Master of Treasury](../Roles/Royal/Master-Treasury.md)
**Explicitly Excludes:** Seizure of assets (handled in Seizure Enforcement), Eviction loops (protected by Upkeep Ledger).

---

**Economic Siege Without Deletion**

## Overview

A **Crown Lien** is a legal instrument placed on a guild or faction stone by the Tax Envoy under Royal Decree. It intercepts future income to satisfy Crown debt without seizing existing assets or destroying the entity.

## How it Works

When a lien is active:
1.  **Debt Recording:** Crown debt is publicly visible on the guild/faction stone.
2.  **Income Interception:** All gold deposited into the **Treasury** (vendor sales, donations) is automatically intercepted and applied to the debt.
3.  **Upkeep Protection:** The **Upkeep Ledger** is immune to liens. Members can still prepay upkeep to prevent house decay.

This creates an **Economic Siege**: The entity can survive (pay upkeep) but cannot thrive (stockpile wealth or fund war) until the debt is cleared.

## Payment Priority

Incoming gold follows a strict hierarchy:

| Priority | Purpose | Effect |
| :--- | :--- | :--- |
| **1. Mandatory Upkeep** | Property Survival | **ALWAYS PAYABLE**. Liens cannot block upkeep. |
| **2. Crown Debt** | Intercepting Surplus | Treasury deposits & vendor income are seized until debt = 0. |
| **3. Discretionary** | Spending / War | Blocked until debt is cleared. |

## Strategy & Termination

### To Satisfy a Lien
*   **Pay it off:** Members donate to the Treasury (auto-intercepted) until debt matches zero.
*   **Royal Pardon:** King/Regent issues a decree forgiving the debt.
*   **Collapse:** If the guild fails to pay upkeep and dissolves, the lien ends. The property attached to the guild is then placed on auction for 1gp, in which anyone can purchase it.

### Strategic Choices
*   **Compliance:** Pay the debt to restore full operations.
*   **Survival:** Pay only upkeep; operate vendors externally or use shell guilds to hold wealth.
*   **Negotiation:** Offer services or tribute for a pardon.

> **Restriction:** A lien **cannot** force eviction, drain existing savings, or delete a guild. It only stops growth.

## See Also
*   **[Crown Taxation](Crown-Taxation.md)**: How debt is generated.
*   **[Seizure Enforcement](Seizure-Enforcement.md)**: Physical enforcement if liens fail.
*   **[Guild Banking](../Guilds/Guild-Banking.md)**: Treasury vs Upkeep Ledger mechanics.
