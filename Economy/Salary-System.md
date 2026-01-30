**Status:** Ship-Ready (v1.0)
**Last Edited:** 2026-01-29
**Scope:** Automated salary calculation and distribution for city roles based on revenue indexing.
**Integrated With:** [Fiscal Ledgers](../Ledgers/Fiscal-Ledgers.md), [Crown Taxation](Crown-Taxation.md), [Civic Guard System](../Roles/Guard/Civic-Guard-System.md)
**Explicitly Excludes:** Debt accumulation, retroactive payments, login blocking, judicial involvement.

---

# ⚖️ City Salary System

**Constitutional Documentation**

---


## Canon Rule


> Wages scale with the life of the city. Prosperity pays. Decline starves. Authority absorbs the blame.


## Overview

The City Salary System calculates and distributes wages to Guards, Nobles, and Office holders based on indexed percentage bands tied to city revenue. The system operates automatically without manual oversight, scales with economic activity, and remains functional when players are offline.

Fiscal stress converts into political consequence, not mechanical failure.


## Core Principles


### Indexed Pay, Not Fixed Wages


- Salaries are calculated as percentage bands tied to city revenue
- No role has a static gold value
- Inflation and deflation affect pay automatically without rule changes
- Economic expansion increases wages without constitutional amendment


### Per-Seat Payroll


- Each filled role seat incurs its own cost
- Pay is not pooled or diluted across holders of the same role
- Increasing the number of guards or officials directly increases total payroll burden
- Total payroll = number of filled seats × individual wage


### Daily Revenue Index


- Once per pay cycle (daily), the system records total city revenue
- This value functions as a reference point only
- No gold moves when the index is calculated
- The index represents the previous 24-hour period's economic activity


### Expectation vs Payment Separation


- Expected pay is calculated independently of treasury balance
- Payment is attempted only when the character logs in
- Expectation exists even if no one is online
- Shortfall occurs only when payment cannot match expectation


### Login Requirement


- Salary is paid only if the character logs in during the 24-hour period
- This prevents absentee pay, AFK drain, and inactive role exploitation
- No retroactive payment for missed login days
- Expectation exists regardless of login, but payment requires presence


## Absolute Rule


> **❗ Note**


## Payment Flow


### Step 1: Daily Revenue Index Calculation

**When:** Once per 24-hour cycle at server reset

**Process:**


- System aggregates city revenue from the previous 24 hours
- Sources include: vendor taxes, NPC fees, market tariffs, property taxes
- Total is recorded as the Daily Revenue Index
- No gold moves during this calculation


### Step 2: Expected Pay Calculation

**When:** Immediately after Daily Revenue Index is recorded

**Process:**


- Each role has a defined pay formula (percentage of Daily Revenue Index)
- System calculates expected pay for each filled seat
- Creates ledger entry: "On Day X, Role Y was owed Z gold"
- No gold moves
- No one is blocked


### Step 3: Payment Attempt on Login

**When:** Character logs in (once per 24-hour period)

**Process:**


- System retrieves expected pay for that character
- System checks current treasury balance
- Payment is attempted from available funds
- Ledger is updated with payment result


### Scenario A: Treasury Can Pay (Full Payment)


### Scenario B: Treasury Cannot Pay (Partial Payment)


### Scenario C: Treasury Depleted (Zero Payment)


## Shortfall Handling

When treasury balance cannot fulfill expected pay:


- Unpaid amounts are logged as partial or failed payment
- No recalculation occurs at payment time
- Failure is visible in administrative ledgers
- No debt accumulation system
- Pattern of failure creates political consequence, not financial obligation

**Unpaid wages are framed as institutional failure, not player punishment.**


## Per-Seat Cost Examples


| Daily Revenue Index | Number of Guards | Cost Per Guard (0.4%) | Total Payroll Cost |
|---|---|---|---|
| 100,000 gold | 5 | 400 gold | 2,000 gold |
| 100,000 gold | 20 | 400 gold | 8,000 gold |
| 100,000 gold | 50 | 400 gold | 20,000 gold |

Increasing guard numbers increases total treasury burden. No dilution occurs.


## Roles & Responsibilities


| Entity | Responsibility |
|---|---|
| Constitutional Document | Defines indexed pay bands for each role |
| Royal Finance Ledger | Tracks revenue inflows and salary outflows automatically |
| Finance Minister | Adjusts tax rates; issues affordability warnings; no payment approval required |
| Crown | Bears legitimacy and political consequences of pay failure |
| System | Executes all calculations and payments automatically |
| Players | Never required to approve or process payroll |


## System Benefits


- **Automatic inflation adjustment:** Wages scale with economy without manual intervention
- **Zero administrative burden:** No daily button-pressing or approval workflows
- **Explicit expansion cost:** Adding guards/officials increases payroll visibly
- **Offline operation:** System functions when no administrators are present
- **Transparent failure states:** Payment shortfalls create records, not crashes
- **Per-seat accountability:** Each role's cost is individually visible
- **Login-gated payment:** Inactive characters do not drain treasury


## Pitfalls & System Resolutions


| Potential Issue | Mechanical Resolution |
|---|---|
| Guard expansion abuse | Per-seat cost makes expansion expensive; Finance Minister issues warnings; Crown bears political cost |
| Offline payroll blocking | Expectation calculated regardless of login; payment attempted only on login; no deadlock |
| Inflation destabilizing wages | Indexed percentages auto-scale with revenue; no constitutional changes needed |
| Treasury depletion halting play | Payment failure creates ledger entry, not login block; roles remain functional |
| AFK salary drain | Login requirement prevents payment to absent characters |
| Manual approval bottleneck | System processes payments automatically; no player approval required |


## Decision Authority Summary


| Question | Authority |
|---|---|
| Who defines pay? | Constitution (indexed bands, not fixed numbers) |
| Who controls affordability? | Finance Minister (tax rates + warnings) |
| Who gets blamed when pay fails? | The Crown |
| Who presses buttons daily? | No one |
| Does inflation break the system? | No — it becomes content |


## Explicit Exclusions

The salary system does **not**:


- Require judges or trials
- Pause or suspend roles due to nonpayment
- Retroactively change expectations after calculation
- Redistribute pay between players
- Create debt obligations that accrue over time
- Block login, character creation, or system progression
- Force manual processing by administrators


## Institutional Summary

The City Salary System converts fiscal stress into political consequence through:


- **Automation over discretion:** System executes payments without human approval
- **Consequence over control:** Pay failure creates visible records, not mechanical locks
- **Visibility over enforcement:** Ledgers expose patterns; Crown absorbs political cost

Expectation is calculated on schedule. Payment is attempted on login. Shortfall exists only when reality fails to meet expectation.


> **Note**
