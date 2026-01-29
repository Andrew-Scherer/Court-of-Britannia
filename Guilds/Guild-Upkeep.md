# 🏰 Guild Upkeep

**Automatic Daily Maintenance Cost for Property Ownership**

---


## What Upkeep Is

**Upkeep** is an automatic, daily charge applied to guilds based on the amount of property they control. It exists to:


- Prevent land hoarding by inactive or abandoned groups
- Scale maintenance costs with the size and value of controlled property
- Ensure that territory requires active economic engagement to maintain
- Create clean failure states—groups that cannot sustain upkeep collapse automatically

Upkeep is **not a tax**. It does not require Crown authority, royal decree, or political justification. It is a neutral, mechanical cost of ownership.


## Why Upkeep Exists

Without upkeep, guilds could claim territory indefinitely, regardless of activity level. This leads to:


- Stagnant, unclaimed-but-occupied land
- Zombie guilds that persist long after players quit
- No consequence for overextension or neglect
- Admin burden to manually clean up inactive properties

Upkeep solves this by making property ownership **time-bound**. If a faction cannot pay, it fails. If it can pay, it survives. No ambiguity, no admin interpretation, no limbo states.


## How Upkeep Works


### Payment Source

Upkeep is paid automatically from the **Upkeep Ledger**, not the Treasury.

Players add gold to the Upkeep Ledger as prepaid credit. Each day, the system deducts the upkeep cost from the ledger balance. If the ledger has sufficient credit, upkeep is paid. If not, upkeep fails.


### Base Property Upkeep

Base upkeep is calculated as a percentage of the **assessed value** of controlled property, charged daily.

**Rate range:** 0.05% to 0.25% of assessed property value per day


- The exact rate is set by server staff and may vary by property type or location
- Assessed value is based on housing tiles controlled and average market prices
- Base upkeep scales with size: larger properties cost more to maintain


> **Note**
> **Example:** A faction controls property assessed at 500,000 gold. If the upkeep rate is 0.1% daily, the faction pays 500 gold per day. At this rate, 14 days of upkeep credit costs 7,000 gold.



### Assessed Value

Property value is determined by:


- Number of housing tiles controlled
- Average market price per tile (based on recent housing sales)
- Location and strategic importance (staff-adjusted multipliers may apply)

Assessed value updates periodically to reflect market conditions. Factions are notified of reassessments.


## Ownership Types & Upkeep Responsibility


| Ownership Type | Who Pays Upkeep | Failure Consequence |
|---|---|---|
| Player-Owned Property | The individual player | Property decays, becomes unclaimed |
| Guild-Owned Property | The guild (via Upkeep Ledger) | Guild property becomes unclaimed, guild stone may reset |
| Faction-Owned Property | The faction (via Upkeep Ledger) | Faction property becomes unclaimed, faction stone resets, vendors disappear |

Upkeep responsibility is tied to **ownership**. If a guild or faction owns the property, the collective must fund the Upkeep Ledger. If an individual owns it, that player is responsible.


## Failure States & Timeline

When upkeep cannot be paid, property does not immediately vanish. Instead, it enters a series of escalating failure states:


| Stage | Timeline | Effect |
|---|---|---|
| Current | Upkeep paid | Normal operation. No warnings. |
| Low Credit Warning | 3 days remaining | guild receives in-game warning: "Upkeep credit low. Property will decay in 3 days." |
| Delinquent | 0 days remaining | Upkeep payment fails. Grace period begins. Faction stone displays: "Delinquent - Decay in 48 hours." |
| Grace Period | 48 hours | Property functions normally but is marked at risk. Vendors remain active. Members may add upkeep credit to restore status. |
| Decay Stage 1 | 48-72 hours | Vendors shut down. Property access restricted. Building appearance degrades visually. |
| Decay Stage 2 | 72-96 hours | Property becomes "Condemned." All access restricted except to leader/treasurer. |
| Disowned | 96+ hours | Property becomes unclaimed. guild stone resets. All vendors and stored items disappear. Territory is available for new claimants. |

This timeline gives guilds time to respond without enabling indefinite zombie states.


## Crown Liens & Upkeep

Crown Liens are designed to create **economic siege** without forcing immediate eviction.

> **Rule:** Liens intercept **Treasury** income but cannot touch the **Upkeep Ledger**.

This ensures that a guild can always pay for its survival (Upkeep) even if it cannot grow or profit. 

See [[Crown Liens & Economic Pressure|../Economy/Crown-Liens.md]] for the full mechanics of interception.


## Operational Tools


### Gump Options

When interacting with the faction stone or guild gump, authorized members see:


- **"View Upkeep Status"** → Displays current credit balance, daily cost, days remaining
- **"Add to Upkeep"** → Opens interface to convert gold to upkeep credit
- **"View Ledger History"** → Shows transaction log (deposits, deductions, warnings)
- **"Set Permissions"** (leader only) → Grant or revoke upkeep access for members


### Warnings & Notifications

The system provides automatic warnings at key thresholds:


- **7 days remaining:** "Upkeep credit below one week."
- **3 days remaining:** "Upkeep credit critical. Property will decay in 3 days."
- **0 days remaining:** "Upkeep failed. Grace period begins. Decay in 48 hours."
- **24 hours until decay:** "Final warning. Property decays in 24 hours."

Warnings are sent to all members with treasurer permissions and posted prominently on the faction stone.


### Ledger Cap

The Upkeep Ledger has a maximum capacity of **14 days** of upkeep credit. This prevents:


- Using the ledger as a vault
- Bypassing Crown liens through excessive prepayment
- Creating indefinite economic immunity


### Best Practices

Recommended strategies for stable upkeep management:


- Maintain 7-10 days of credit as a buffer
- Grant treasurer permissions to multiple trusted members
- Check upkeep status weekly
- Plan for vacations or downtime by maxing the ledger before absence
- If under Crown lien, prioritize upkeep over Treasury deposits


## Edge Cases


### Partial Payment

**Q:** What happens if a player adds gold to the ledger, but not enough to cover a full day?

**A:** Partial credit accumulates. If a faction owes 500g/day and a player adds 250g, the ledger shows "+12 hours of credit." Multiple small deposits combine until a full day is reached.


### Leader Inactive

**Q:** What if the faction leader goes inactive and no one else can add upkeep?

**A:** The faction will collapse after the ledger empties and the grace period expires. This is intentional. Factions must delegate authority properly. Lack of preparation equals failure.


### Treasurer Permissions

**Q:** Can multiple members have treasurer permissions?

**A:** Yes. The leader may designate as many treasurers as desired. Each treasurer may add upkeep credit, view balances, and access transaction history.


### Multiple Properties

**Q:** If a faction controls multiple buildings, is upkeep calculated separately?

**A:** No. Upkeep is calculated on the faction's **total controlled tiles**. All properties owned by the faction contribute to a single daily upkeep cost, paid from one Upkeep Ledger.


### Transferring Ownership

**Q:** What happens to upkeep credit if property is transferred to another faction?

**A:** Upkeep credit does not transfer. It remains with the original faction's ledger. The new owner must fund their own Upkeep Ledger from scratch.


### Changing Tile Count

**Q:** If a faction expands or reduces property, does upkeep adjust immediately?

**A:** Yes. Upkeep cost recalculates at the next daily reset based on current tile count. If expansion increases upkeep, existing credit covers fewer days. If reduction decreases upkeep, existing credit lasts longer.


## Summary

Upkeep is an automatic, daily maintenance cost scaled to property size. It prevents land hoarding, punishes neglect, and creates clean failure states. Upkeep is paid from the Upkeep Ledger—a prepaid, non-withdrawable meter capped at 14 days.

Crown liens may intercept Treasury income but cannot interfere with upkeep payments. Failure to pay upkeep under lien is sovereignty collapse, not eviction. This keeps upkeep neutral and liens political.

guilds must actively manage upkeep to survive. Delegation, planning, and economic vigilance are required. Failure is automatic, clean, and requires no admin intervention.


## See Also


- [[Faction & Guild Banking|Guild-Banking]] — Treasury vs Upkeep Ledger system
- [[How Taxes Work|How-Taxes]] — Crown liens and political enforcement
- [[Guards|Guards]] — Enforcement of seizure and decrees
- [[Property & Auctions|Property]] — Land ownership mechanics
- [[Player Controlled Vendors|Player-Controlled-Vendors]] — Commerce and vendor systems
