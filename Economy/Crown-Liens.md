# ⚖️ Crown Liens & Economic Pressure

**Status:** Ship-Ready (v1.0)
**Last Edited:** 2026-01-28
**Scope:** Defines the mechanism for intercepting guild/faction revenue to enforce Crown debt without deleting the entity.
**Integrated With:** [Crown Taxation](Crown-Taxation.md), [Guild Banking](../Guilds/Guild-Banking.md), [Seizure Enforcement](Seizure-Enforcement.md), [Tax Roles](Tax-Roles.md)
**Explicitly Excludes:** Seizure of assets (handled in Seizure Enforcement), Eviction loops (protected by Upkeep Ledger).

---

**Economic Siege Without Deletion**

---


## What Is a Crown Lien?

A **Crown Lien** is a legal instrument placed on a guild or faction stone by the Tax Envoy, acting under Royal Decree. The lien represents recorded Crown debt and restricts the financial operations of the target entity.

A lien is **not seizure**. It does not confiscate existing wealth. Instead, it intercepts future income, creating continuous economic pressure that can last indefinitely until the debt is satisfied.


## How Crown Liens Are Applied


### Requirements

A Crown lien may only be placed when:


- Crown debt exists and is recorded
- A Royal Decree authorizing the lien has been issued
- The Tax Envoy executes the decree by interacting with the guild/faction stone


### Application Process


1. The King or Regent issues a decree authorizing a lien
2. The Tax Envoy travels to the guild/faction property
3. The Tax Envoy interacts with the faction stone
4. Crown debt is publicly recorded on the stone
5. Lien status becomes visible to all players who inspect the stone

The lien remains in effect until Crown debt is fully paid or the decree is rescinded.

> **Note:** Royal Decrees authorizing liens **persist through the death of a Monarch.** A change in leadership does not erase debts owed to the Crown as an institution.


## What a Crown Lien Does


### Financial Restrictions


- **Attaches Debt to the Stone:** Crown debt is publicly recorded on the faction or guild stone, visible to all
- **Intercepts Surplus Revenue:** Gold deposited into the Treasury is intercepted and applied to Crown debt before it becomes accessible
- **Restricts Commerce:** Vendor proceeds may be diverted before reaching the Treasury
- **Freezes Discretionary Spending:** The faction or guild cannot expand, profit, or stockpile wealth


### What Occurs Under Lien


| Action | Normal | Under Lien |
|---|---|---|
| Treasury Deposit | Gold enters Treasury | Intercepted, applied to Crown debt |
| Vendor Sale | Tax goes to Treasury | Intercepted, applied to Crown debt |
| Upkeep Payment | Paid from Upkeep Ledger | Still paid from Upkeep Ledger (PROTECTED) |
| Member Donations | Enter Treasury | Intercepted, applied to Crown debt |


## What a Crown Lien Cannot Do


> **❗ Note**
> **Hard Limits of Lien Authority:**
> - ❌ **Cannot interfere with property upkeep.** Liens may not block or intercept gold added to the Upkeep Ledger.
> - ❌ **Cannot drain existing Treasury balances.** Liens intercept future income, not existing reserves.
> - ❌ **Cannot delete factions or guilds.** A lien pressures, but does not destroy.
> - ❌ **Cannot force upkeep failure.** If a faction cannot pay upkeep under lien, it is sovereign collapse, not Crown eviction.


### Why Upkeep Is Protected

If a lien could block upkeep, it would enable **backdoor eviction by decree**—a mechanical deletion disguised as political pressure. This violates the core principle that authority must be demonstrated, not assumed.

Instead:


- Players may add gold directly to the Upkeep Ledger, bypassing the Treasury
- Liens intercept Treasury income but cannot touch the Upkeep Ledger
- If a faction under lien cannot pay upkeep, it is sovereign collapse (failure to sustain existence), not Crown eviction


## Payment Priority Order

When a Crown lien is in effect, incoming gold follows this strict hierarchy:


| Priority | Purpose | Effect |
|---|---|---|
| 1. Mandatory Upkeep | Property survival costs | Always payable. Liens cannot block. |
| 2. Crown Debt (via Lien) | Intercept surplus income | Vendor proceeds, donations, and Treasury deposits intercepted and applied to debt. |
| 3. Discretionary Spending | Commerce, salaries, war funds | Not possible until Crown debt is cleared. |

This ensures that entities under lien can **survive** (by paying upkeep) but cannot **thrive** (growth is blocked).


## Economic Siege Conditions

A Crown lien creates a state of **economic siege**. The target organization remains intact but operates under severe constraints:


### What the Faction/Guild Can Do


- Pay upkeep to maintain property
- Continue to exist
- Seek ways to generate income outside the lien (external trade, raiding, smuggling)
- Negotiate with the Crown


### What the Faction/Guild Cannot Do


- Accumulate Treasury reserves
- Fund military campaigns
- Pay member salaries
- Expand property holdings
- Stockpile resources for future use

The lien does not kill the faction or guild. It **strangles growth** while preserving life.


## Interaction with Banking System

Guilds and factions maintain two financial constructs: the **Treasury** (withdrawable general wealth) and the **Upkeep Ledger** (non-withdrawable prepaid meter).


### Treasury


- **Subject to lien interception**
- Any gold deposited here is seized by the lien
- Members cannot withdraw from Treasury while lien is active


### Upkeep Ledger


- **Protected from lien**
- Gold added here converts to upkeep credit
- Credit is used automatically to pay daily upkeep
- Capped at 14 days maximum (prevents long-term hoarding)


> **Note**
> **Strategic Implication:** Members of a guild or faction under lien must decide where to put their gold. Depositing to Treasury = seized immediately. Adding to Upkeep = faction survives another day, but gold is gone forever.

See: [[Faction & Guild Banking|Guild-Banking]]


## How to Satisfy a Lien

A Crown lien remains in effect until one of the following occurs:


### 1. Debt Fully Paid

Members deposit gold to Treasury, which is intercepted by the lien and applied to Crown debt. Once debt reaches zero, the lien is automatically released.


### 2. Royal Pardon

The King or Regent issues a decree forgiving the debt and releasing the lien.


### 3. Negotiated Settlement

The faction/guild negotiates partial payment or alternative terms (service, tribute, political concessions) in exchange for lien release.


### 4. Faction/Guild Collapse

If the faction or guild fails to pay upkeep and collapses, the lien becomes moot. The debt technically remains, but there is no entity left to collect from.


## Visible Lien Status

A faction or guild operating under lien displays visible markers:


- **Stone Inspection:** "This faction is operating under Crown lien. Crown debt: 50,000 gold."
- **Public Notice:** Decrees and lien applications are recorded in public ledgers
- **Transaction Logs:** Every interception is logged: "5,000g intercepted under Crown lien (Decree #47)"

This visibility ensures that lien status is political information, not hidden admin action.


## Strategic Responses to Liens

Factions and guilds under lien face strategic choices:


### Compliance


- Pay off the Crown debt through member donations
- Accept reduced operations until debt is cleared
- Maintain good standing with the Crown


### Defiance


- Continue operations while donating just enough to Upkeep to survive
- Generate income through external means (raiding, smuggling, foreign trade)
- Endure economic pressure as a form of resistance


### Negotiation


- Offer political concessions in exchange for debt reduction
- Provide services to the Crown (military aid, intelligence, etc.)
- Seek third-party mediation or guarantors


### Circumvention (Risky)


- Operate vendors outside faction property (requires other guilds' cooperation)
- Use shell organizations to funnel income
- Stockpile resources instead of gold

Each approach carries different risks and consequences.


## Liens vs Seizure


| Feature | Crown Lien | Seizure |
|---|---|---|
| Nature | Continuous interception of future income | One-time confiscation attempt |
| Duration | Until debt paid or decree rescinded | Single event during enforcement window |
| Can Fail? | No—interception is automatic | Yes—if treasury empty or guards refuse |
| Requires Guards? | No (Tax Envoy applies lien alone) | Yes (guards must enforce seizure) |
| Affects Upkeep? | No—upkeep remains payable | No—upkeep ledger never seizable |

See: [[Seizure, Enforcement & Insolvency|Seizure-Enforcement]]


## Summary


- Crown liens are legal instruments that intercept future income without confiscating existing wealth
- Liens are applied by the Tax Envoy under Royal Decree and recorded publicly on faction stones
- All Treasury income is intercepted and applied to Crown debt
- Upkeep Ledger is protected—factions can survive but cannot grow
- Liens create economic siege conditions: pressure without deletion
- Liens remain until debt is paid, decree is rescinded, or the entity collapses
- Strategic responses include compliance, defiance, negotiation, or circumvention


## See Also


- [[Economic Philosophy & Overview|Economic-Philosophy]] — Foundation principles
- [[Crown Taxation & Revenue|Crown-Taxation]] — How the Crown generates revenue
- [[Faction & Guild Banking|Guild-Banking]] — Treasury vs Upkeep Ledger mechanics
- [[Seizure, Enforcement & Insolvency|Seizure-Enforcement]] — What happens when liens aren't enough
- [[Tax-Related Roles & Administration|Tax-Roles]] — Tax Envoy's lien authority
