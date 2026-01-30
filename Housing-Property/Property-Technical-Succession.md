# 🏗️ Property System: Technical & Succession

**Status:** Ship-Ready (v1.0)  
**Last Edited:** 2026-01-29  
**Scope:** Technical property metadata structure, role-based succession mechanics, and institutional ownership transfer rules.  
**Integrated With:** [Housing Auctions](Housing-Auctions.md), [Housing Philosophy](Housing-Philosophy.md), [Guild Landholder System](Guild-Landholder-System.md), [Justice System](../Justice/Justice-System.md)  
**Explicitly Excludes:** Private housing transfers, auction bidding rules, property grading methodology, guild-specific governance

---

## 1. Technical: Property Metadata

To support the Grading and Assignment systems, each property object requires the following metadata:

| Field | Type | Purpose |
|---|---|---|
| PropertyId | string | Unique identifier (e.g., "BRI-017") |
| AssignmentMethod | enum | RoyalGrant, Auction, InternalAllocation, AutoReversion |
| Jurisdiction | enum | Britain Civic, Wilderness Territorial |
| Grade | int | 1-10 (Determined by Auction as per [[Housing Auctions|Housing-Auctions]]) |
| State | enum | OPEN, HELD, SEALED, EVICTING |
| RoleHolder | Mobile/Unit | Current occupant (individual or unit) |
| MaxOccupancy | int | How many residents (if unit property) |
| AuctionData | object | If method=Auction: start time, end time, current high bid, bidder |

This metadata drives all assignment logic without requiring Steward judgment calls.

---

## 2. Succession Mechanics & Role Transfer

When a role changes hands (death, abdication, election), property ownership must transfer cleanly without manual intervention. This applies to **Civic Roles** (King, insane Chancellor) and **Guild Seats**.

### The Transfer Process

| Element | On Succession | Reasoning |
|---|---|---|
| House Ownership | **Transfers to new role holder** | Keys follow the role, not the person. |
| Personal Co-owners | **Cleared/wiped** | Clean succession; no inherited personal friends. |
| Role-based Staff | **Persists** (re-added from template) | Guards, stewards are institutional, not personal. |
| Institutional Bans | **Persist** | Exiles remain exiled regardless of who holds the role. |
| Personal Items | **See Edge Cases** | Handling of personal items vs institutional assets. |
| Sign Name | **Updates to Role** | "King's Palace" not "Bob's House". |

---

## 3. Critical Edge Cases

### Case 1: Role-Holder Dies Inside Estate (Interregnum)
*   **Trigger:** Death of propertied role-holder.
*   **State:** Estate enters **INTERREGNUM** state.
    *   Doors remain unlocked OR designated steward NPC can open.
    *   No lockdowns can be added.
    *   No evictions can occur.
*   **Resolution:** On new role assignment, ownership locks back down.
*   **Max Duration:** 72 hours (reverts to OPEN if no successor).

### Case 2: Personal Items Left Behind
*   **Design Choice:** All items in role-held estates are considered **Institutional Property**.
*   **Rule:** When a Role Holder dies/leaves, the successor inherits everything in the structure.
*   **Mitigation:** Players must store personal wealth in their Account/Guild Bank, not the Civic Role house.

### Case 3: Role-Swap Exploitation
*   **Problem:** Quickly swapping roles to transfer house control.
*   **Mitigation:**
    *   **Witness Requirement:** Role assumption requires official witness.
    *   **Cooldown:** 10-30 minute cooldown on swapping.
    *   **Logs:** All role assumptions timestamped.

---

## 4. Castle-Specific Succession

For complex buildings like **Britain Castle** with multiple zones:

| Element | Behavior |
|---|---|
| Royal Suite access | Transfers to new King |
| Crown administrative rights | Transfers to new King |
| Chancellor's room | NO CHANGE (separate role) |
| Guard barracks | NO CHANGE (group-owned) |
| Noble apartments | NO CHANGE (separate roles) |
| Public zones | NO CHANGE (always accessible) |

### Staff Access Groups
Access is defined by **Group Membership**, not individual lists:
*   **RoyalFamily:** King, Queen, Heirs
*   **RoyalGuard:** Marshal, Captain, Guards
*   **CastleStaff:** Stewards, servants
*   **Council:** Chancellor, advisors

**Logic:** When a staff member is hired/fired, they are added/removed from the *Group*. The Doors checks the Group. No manual door edits required.
