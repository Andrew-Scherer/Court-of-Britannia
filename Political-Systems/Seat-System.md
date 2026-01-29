# ⚙️ The Seat System

**Roles as Registry — Authority Without the Job Description**

---


## What Is the Seat System?

Roles are modeled as **Seats** — a lightweight role registry that supports different filling modes, automatically vacates on permadeath, and drives permissions (castle rooms, guard access, etc.).


> **Note**
> **💡 Key Insight: A Seat is Not the Player — It's the Job**
>
> When the holder dies, the Seat auto-vacates. Any permissions tied to that seat update automatically. The role registry (RoleManager) is the single source of truth.


## Each Seat Has:


- **SeatId:** Unique identifier (e.g., "Britain.King", "Britain.Marshal")
- **Title:** Display name (e.g., "King of Britain", "Marshal of the Guard")
- **FillMode:** How the seat is filled (Appointed, Elected, Self-Claim, Inherited, GM/Story)
- **Holder:** Current player occupying the seat (or null if vacant)
- **VacancyState:** Vacant / Occupied / Suspended
- **AppointerSeatId:** For appointed roles, which seat can appoint/dismiss
- **Permissions:** What access or authority this seat grants


## Fill Modes: How Seats Are Filled


## Offices vs Statuses

There are two categories of seats:


| Offices (Exclusive Power-Bearing) | Statuses (Non-Exclusive Identity Tags) |
|---|---|
| King, Marshal, Chancellor, etc. | Disgraced Noble, Exiled Knight, Widower, Refugee, etc. |
| Usually one per player max | Multiple allowed per player |
| Appointment/election required | Self-claim or story-triggered |
| Grants access + authority | Mostly social, minor permissions |

This prevents treating "Disgraced Noble" like a job, while ensuring "Marshal" has real authority.


## 🔧 Technical Implementation


### Role Manager System (Pseudocode)


### Role-Based Door Access


## ⚠️ Common Problems & Solutions


> **❗ Note**
> **Problem: Role Hoarding**
>
> **Symptom:** One player accumulates multiple critical roles
> **Solution:** Hard limit: 1 major role per player (King, Marshal, Land Commissioner are mutually exclusive). Players can hold 1 major + auxiliary roles (guard, scribe). Enforced in AssignSeat() logic.


> **❗ Note**
> **Problem: Offline Role-Holders Blocking Action**
>
> **Symptom:** Marshal offline for 3 days, guards are paralyzed
> **Solution:** Deputies can act when primary is offline. After 7 days of inactivity, King can appoint replacement. Track LastSignificantAction timestamp on each RoleSeat.


> **❗ Note**
> **Problem: Appointment Spam**
>
> **Symptom:** King appoints/fires Marshal 10 times in one hour
> **Solution:** Cooldown timer: once a role is vacated, 1 hour must pass before reassignment (configurable). Exception: death-based vacancy has no cooldown.


> **❗ Note**
> **Problem: "I Never Got Appointed" Disputes**
>
> **Symptom:** Player claims they were promised Marshal but King denies it
> **Solution:** All appointments are logged publicly and irreversibly. Public records are authoritative. Promises that aren't formalized don't count.


## ❓ Frequently Asked Questions

**→ See [[Roles & Offices|Roles]] for the complete FAQ section about roles, appointments, and succession**


## 📋 Summary


> The Seat System in One Sentence:A seat is the job, not the person — when the holder changes or dies, the role automatically updates without breaking the world.

**Key Principles:**


- A Seat is not the player — it's the job
- Seats auto-vacate on death
- Permissions are tied to seats, not players
- Fill modes determine how roles are assigned (appointment, election, self-claim, inheritance, GM/story)
- Offices (exclusive) vs Statuses (non-exclusive)
- Role registry (RoleManager) is the single source of truth

**→ See Roles & Offices** for specific role descriptions
