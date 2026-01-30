# 📦 Storage & Banking Rules

**Status:** Ship-Ready (v2.0)
**Last Edited:** 2026-01-29
**Scope:** The single source of truth for all storage mechanics: Gold (Global) and Items (Local).
**Integrated With:** [Banking Policies](../Economy/Banking-System.md), [Guilds](../Guilds/Guilds.md), [Housing System](../Housing-Property/Housing-Philosophy.md)

---

## 1. The Core Philosophy

> **"Gold is Global. Items are Local."**

The storage system is built on a strict separation of currency and physical goods:

1.  **Gold** exists in a **Single Crown Ledger**. It is accessible from anywhere but belongs to the state (and is thus visible, seizable, and fragile).
2.  **Items** exist in **Physical Locations**. They do not teleport. If you leave a sword in Britain, you must go to Britain to get it.

---

## 2. Gold: The Global Crown Ledger

There is no such thing as "local gold." All banks, guild vaults, and house secure chests are merely **interfaces** (ATMs) to the same global account.

### Mechanics
*   **Universal Access:** You can deposit gold in Yew and withdraw it in Trinsic.
*   **Universal Visibility:** The Crown (and Justice System) sees your *total* wealth. You cannot hide gold in a "private" bank to avoid fines or taxes.
*   **Universal Risk:**
    *   **Death:** If you suffer Permadeath, your **entire gold balance** in the Crown Ledger is lost/taxed, regardless of which "bank" you last used.
    *   **Seizure:** Bounties, unpaid taxes, and court fines deduct directly from this global provision.

### The Interfaces
While the *ledger* is global, the *access points* differ:

| Interface | Requirements | Notes |
| :--- | :--- | :--- |
| **Britain Bank** | Public | The central clearinghouse. |
| **City Banks** | Civic Status / Fee | Access may be restricted by Mayor/Governor policies. |
| **Guild Vaults** | Guild Membership | Convenient access for members. |
| **Private Housing** | Ownership | Your personal secure terminal. |

---

## 3. Items: Physical & Local Storage

Unlike gold, **items never teleport**. Storage is strictly **local**.

### A. Private Housing ("The Personal Cache")
*   **Philosophy:** Houses are for living, not hoarding.
*   **Access:** Strictly **Private** to the character owner. (Roommates cannot access your personal bank).
*   **Capacity:** **Capped** and **Low**. Inferior to Guild Vaults.
*   **Function:** Intended for active gear, daily supplies, and decoration.
*   **Risk:** If the house is lost (decay/eviction), contents are **held** for a limited time, then destroyed.
*   **Security:** **No Secure Chests.** Access to the house means access to loose items. Use the Personal Bank interface for security.

### B. City Banks ("Civic Infrastructure")
*   **Philosophy:** Regional silos for local economies.
*   **Access:** Restricted by local laws (Citizenship, Reputation, etc.).
*   **Capacity:** Moderate.
*   **Locality:** Items stored in the Yew Bank **stay in Yew**. They are not accessible from Britain.
*   **Risk:** Safe from death, but vulnerable to **Political Seizure** (if the city is captured or taxes are unpaid).

### C. Guild Vaults ("The Institution")
*   **Philosophy:** Massive shared logistics for war and industry.
*   **Access:** Permission-based (Rank). Shared by all members.
*   **Capacity:** **High**. The best storage for bulk resources.
*   **Risk:** Linked to the **Guildstone**. If the Guildstone is destroyed (War/Disband), the **entire vault is deleted**.

---

## 4. Storage Matrix & Risk Profile

| storage Type | Gold Access | Item Storage | Item Locality | Primary Risk |
| :--- | :--- | :--- | :--- | :--- |
| **Britain Bank** | ✅ Global | ❌ None | N/A | Total Loss on Death |
| **City Bank** | ✅ Global | ✅ Medium | **Local Only** | Political Seizure / Lockout |
| **Guild Vault** | ✅ Global | ✅ **High** | Shared (Linked to Stone) | **Total Deletion** on Guild Collapse |
| **Private House** | ✅ Global | ✅ Low (Capped) | **Local Only** | Loss on Eviction |

---

## 5. Trade Storage (Specialized)

*   **Dockside Bins (Market Purchases):**
    *   Items bought on the Global Market (which draws gold from the Crown Ledger) are delivered to physical **Dockside Bins** in Britain.
    *   They do not appear in your bank. You must physically travel to the docks to collect them.
    *   *See [Trade Clearinghouse](../Economy/Trade-Clearinghouse.md) for details.*

*   **Escrow:**
    *   Items meant for sale are held in Market Escrow. They are removed from your possession until sold or cancelled.

---

## 6. Deprecated Systems
*   **Inn Storage:** Replaced by City Banks. New players should utilize local City Bank services immediately upon arrival.
