# ⚔️ Seizure, Enforcement & Insolvency

**Status:** Ship-Ready (v1.0)
**Last Edited:** 2026-01-28
**Scope:** Defines the mechanism for financial asset confiscation (Treasury Drainage) by the Crown to induce indirect eviction through upkeep failure.
**Integrated With:** [Crown Liens](Crown-Liens.md), [Tax Roles](Tax-Roles.md), [Guards](../Political-Systems/Guards.md), [Guilds](../Guilds/Guilds.md)
**Explicitly Excludes:** Direct seizure of real estate (The Crown does not evict; it bankrupts), Guard AI acting without player initiation.

---

**When Economic Pressure Becomes Force**

---


## What Is Seizure?

Seizure is the Crown's attempt to convert authority into resources through force. It is a deliberate political action that requires:


- Royal decree authorizing the action
- Formal notice to the target
- Public announcement of enforcement
- Guard participation (which may be refused)
- Online representation from the target

Seizure is **not** a Crown lien (which intercepts future income automatically). Seizure is a one-time confiscation attempt that may succeed or fail based on circumstances.


## Seizure Eligibility Checklist

Seizure may only occur when **ALL** of the following conditions are met:


## The Five-Phase Seizure Timeline

Seizure is not a single event. It is a phased escalation that gives all parties time to respond, negotiate, or resist.


### Phase 1: Assessment (Passive)


- Taxes are assessed by the Steward
- Debt accrues on the public Tax Ledger
- No force, no action


### Phase 2: Notice of Delinquency


- The Tax Envoy serves formal notice to the target
- Notice includes: amount owed, deadline, consequences if unpaid
- A copy is posted publicly (at court or on a notice board)
- This is the first roleplay-visible event


### Phase 3: Royal Decree


- If the debt remains unpaid, the King issues a decree authorizing enforcement
- The decree specifies: target, scope (gold, vendors, property), duration
- Guards are *permitted*, not *required*, to enforce
- Legitimacy is tested here—does the decree carry weight?


### Phase 4: Enforcement Window


- A public announcement is made declaring the time and location of enforcement
- The window is 2-4 hours, during peak server time
- This prevents ambushes and ensures witnesses


### Phase 5: Seizure Attempt

The Tax Envoy, backed by guards, arrives at the enforcement window. Possible outcomes:


## Offline Protection vs. Scheduled Seizure

To prevent "offline raiding" by admins, strict rules govern when seizure can occur.

### A. Surprise Seizure (Requires Online Presence)
If the Tax Envoy arrives unannounced:
*   **Rule:** At least one Officer must be online.
*   **If Offline:** Seizure is forbidden.

### B. Scheduled Seizure (Mandatory Attendance)
If the Crown posts a **Public Writ of Enforcement** at least **24 hours in advance**:
*   **Rule:** The event occurs at the scheduled time regardless of attendance.
*   **If Offline:** The Tax Envoy proceeds with the seizure unchallenged.
*   **Writ of Abandonment:** If the guild is offline for 3 consecutive scheduled windows, the Crown may declare the property abandoned and seize/auction the structure itself (an exception to the "No Property Seizure" rule, as it is no longer owned).

> **Design Note:** This prevents weaponized logouts. You can hide from a surprise inspection, but you cannot hide from a court date.


## What May Be Seized (Financial Scope Only)

**Direct property seizure is illegal.** The Crown does not take keys; it takes gold. The goal of seizure is to **drain the Treasury**, forcing the guild to fail its own Upkeep payments (Indirect Eviction).

| Seizable Assets | Protected Assets |
|---|---|
| ✅ **Treasury Gold** (The primary target) | ❌ **Real Estate/Property Title** (Never seized directly) |
| ✅ **Vendor Proceeds** (Escrowed taxes/funds) | ❌ **Upkeep Ledger** (Cannot be drained by force) |
| ✅ **Stored Trade Goods** (If Treasury is empty) | ❌ **Player Banks/Inventories** |

> **The Strategy:** By draining the Treasury, the guild loses its ability to reload the Upkeep Ledger. Once the ledger runs dry, the property goes delinquent and collapses naturally. "The Crown didn't evict you; you failed to pay rent."

## Justice System Integration

Seizure is a lawful act. Resisting it is a crime. The **Justice System** handles the consequences of resistance automatically based on player actions.

### 1. The Enforcers (Blue)
*   **The Tax Envoy & Guards:** Legally sanctioned agents.
*   **Status:** **Blue (Innocent)**.
*   **Protection:** Attacking them is a criminal act.

### 2. The Resistance (Criminal/Treason)
If a guild chooses to defend their gold, they face escalating legal statuses:

| Action | Status Result | Consequence |
|---|---|---|
| **Interfering / Blocking** | **Gray (Criminal)** | Guards may attack non-lethally or arrest. |
| **Attacking an Enforcer** | **Gray (Criminal)** | Free for anyone to attack. Guards engage to kill. |
| **Killing an Enforcer** | **Red (Treason)** | **Instant Murder Count.** Permanent record. "Treason" flag applied. |

### 3. Guard Behavior (The "Blue Shield")
Guards are **NOT** programmed to attack guild members by default.
*   **Passive:** Guards stand watch as the Envoy works (removes gold).
*   **Reactive:** Guards **ONLY** attack if a guild member turns **Gray** (by attacking the Envoy) or **Red** (by being a known murderer).
*   **Refusal:** Guards may strictly refuse to engage "Blue" targets. If the King orders them to attack innocent (Blue) protesters, the Guards may refuse (Roleplay choice), or if they obey, they become **Criminals** themselves (Abuse of Power).

> **Result:** A "Blue" guild can stand in their hall and protest peacefully. The Envoy will take their gold, but no blood is shed. Bloodshed only happens if the guild draws weapons.


## Insolvency

Insolvency occurs when the Crown attempts seizure but finds no recoverable assets. The target's Treasury is empty, vendors have no proceeds, and no gold can be taken.


### What Insolvency Is Not


- Insolvency does not delete the faction or guild
- Insolvency does not evict the property
- Insolvency does not transfer ownership


> **❗ Note**
> **Doctrine:** An inability to collect assets does not dissolve, evict, or delete a guild or faction. It escalates the political situation.


### The Escalation Ladder

A failed seizure due to insolvency is recorded publicly. The Crown must then choose how to escalate:


### Declaring Insolvency

The Crown may formally declare a faction or guild insolvent. Effects:


- No deletion or eviction
- Severe trade penalties
- Reputation damage
- Third parties avoid dealing with them
- Creates internal faction pressure to raise funds


## Guilds vs Factions

The distinction between guilds and factions is critical to understanding seizure and eviction.


| Entity Type | Relationship to Crown | Seizure | Eviction |
|---|---|---|---|
| Guilds | Inside the civic compact. Accepted city jurisdiction. | May be seized from by decree. | May be evicted if unpaid and property is city-owned. |
| Factions | Sovereign entities. Operate outside formal city-state governance. | May be seized from by decree (as an act of force). | Cannot be evicted. May only be pressured, isolated, suppressed, or confronted. |


### Why This Distinction Exists

Guilds have accepted the Crown's authority by operating within its jurisdiction. Eviction is a legitimate consequence of failed obligations.

Factions have not accepted the Crown's authority. They are sovereign, contestable actors. The Crown may seize from them, sanction them, or wage war against them—but it cannot simply delete them by decree. Factions must be defeated, not administered away.


## Records & Transparency

All economic enforcement actions must be recorded and made public. Legitimacy is created by visibility, choice, and accountability.


### Public Records Include


- Tax assessments and debts (Tax Ledger)
- Notice of delinquency dates and responses
- Royal decrees authorizing enforcement
- Seizure attempts (successful or failed)
- Asset seizures (amount, date, witnesses)
- Insolvency declarations
- Guard participation or refusal

If a seizure happens in secret, it is not enforcement—it is theft. If guards refuse and it is not recorded, the system fails to capture what actually matters: the demonstration of power, or its absence.


## Summary


- Seizure is a political act requiring decree, notice, enforcement window, and guard participation
- All seven conditions must be met for seizure to be valid
- Offline representation is required—no surprise deletions
- Guards may refuse, causing seizure to fail materially
- Insolvency (empty treasury) does not delete factions—it triggers escalation
- Guilds may be evicted; factions cannot
- All enforcement actions are recorded publicly
- Seizure tests legitimacy—failure is part of the design


## See Also


- [[Economic Philosophy & Overview|Economic-Philosophy]] — Foundation principles
- [[Crown Taxation & Revenue|Crown-Taxation]] — How tax debt accrues
- [[Crown Liens & Economic Pressure|Crown-Liens]] — Alternative to seizure
- [[Tax-Related Roles & Administration|Tax-Roles]] — Tax Envoy and enforcement authority
- [[Guards|Guards]] — Guard structure and choice
- [[Tax Ledger|Tax-Ledger]] — Public records
