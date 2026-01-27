# 📜 Arrest Ledger

**Public Record of Custody and Force**

---


## Core Principle

The Arrest Ledger is a public accounting of force, not a judgment of guilt.

Arrest is an act of authority, not proof of wrongdoing. Therefore, every arrest must be visible by default.

The ledger exists to ensure:


- Custody cannot be hidden
- Force cannot disappear quietly
- Institutional failure leaves a trace


## Automatic Entry Creation

When a player is booked into jail, an Arrest Ledger entry is created automatically.


- No approval is required
- No role is required to be online
- No human action can prevent creation

This ensures the world continues functioning even when no officials are present.


## Physical Location & Access

The Arrest Ledger is physically located at the front of the jail.

Access rules:


- Publicly readable by anyone
- No permissions required
- No role required

The jail is a place of exposure, not disappearance.


## System-Generated Entry Contents

Each entry includes the following immutable fields:


| Field | Description |
|---|---|
| Prisoner Name | Character jailed |
| Arresting Guard(s) | Who delivered custody |
| Time of Arrest | When arrest occurred |
| Location of Arrest | Where arrest occurred |
| Custody Class | Minor / Serious / Capital |
| Booking Time | When delivered to jail |
| Baseline Custody Timer | Default hold duration |
| Current Custody Status | Held / Released / Escalated / Auto-Released |

The ledger does not determine guilt or innocence.


## What the Arrest Ledger Does NOT Contain

The Arrest Ledger does not include:


- Verdicts
- Legal conclusions
- Guilt determinations
- Sentencing outcomes
- Narrative judgments

It records what happened, not what it means.


## Layered Annotations

After creation, limited roles may append information.


### Guard Annotations

Guards may append:


- Clarifying notes
- Corrections
- Error-window releases
- Statements of cause

Guards cannot edit or remove system data.


### Warden Annotations

Wardens may append:


- Custody visibility flags
- Irregular custody notices
- Pattern observations
- Condition-of-custody remarks

Wardens do not alter custody duration or outcome.


### Prisoner Statements

Prisoners may append statements only to their own arrest record.

Examples:


- Denial of charges
- Claim of unlawful arrest
- Statement of coercion or orders

Prisoners cannot edit system or third-party entries.


## Auto-Release Visibility

When custody ends due to timer expiration without human intervention, the Arrest Ledger records: "Released due to unresolved custody."

This indicates institutional failure, not mercy.

Auto-release does not erase:


- Arrest history
- Eligibility for later action
- Political consequence


## Relationship to Other Systems


### Jail System

The Arrest Ledger records entry into custody. Custody mechanics are defined in jail.html.


> **Note**
> **See:** [[Jail System|Jail]] for custody mechanics, timers, and auto-release rules


### Death Ledger

Arrest Ledger = reversible force

Death Ledger = irreversible outcome

Both are:


- Automatic
- Public
- Neutral at creation
- Politically shaped through attention


### Magistrates & Crown

Magistrates and the Crown are not required to review every arrest.

They engage only when:


- Entries are flagged
- Custody is contested
- Escalation occurs

This avoids administrative bottlenecks.


## Institutional Function

The Arrest Ledger ensures:


- Force leaves a record
- Silence is visible
- Patterns accumulate over time
- Power remains legible

No role controls outcomes by managing the ledger. All outcomes occur independently.


## Closing Constraints

The Arrest Ledger:


- Cannot be disabled
- Cannot be hidden
- Cannot be selectively published
- Cannot be retroactively erased

If custody occurs, the record exists.


> *The Arrest Ledger does not determine guilt.It records the use of force.What the realm does with that knowledge is political.*


## See Also


- [[Jail System|Jail]] — Custody mechanics and timers
- [[Jail System|Jail]] — Custody procedures and guard specialization options
- [[Guards|Guards]] — Arrest authority and procedures
- [[Death Ledger|Death-Ledger]] — Permanent outcome records
