# 👑 Roles & Offices

**Systems Keep Britain Running — Players Decide What Britain Means**

---


## Core Design Philosophy


> *You don't need a title to matter.Britain is watching who speaks, not just who rules.*

Roles exist because **something in Britain is broken**. Your job is to decide whether to fix it, exploit it, or make it worse.

This is not a simulation of a city running smoothly. This is a simulation of **who gets blamed when things go wrong**.


> Critical Rule:If the world must continue functioning when a player is offline or dead, that responsibility belongs to an NPC or system — not a role.


## The Seat System

Roles are modeled as **Seats** — a lightweight role registry that automatically vacates on permadeath and drives permissions. A seat is the job, not the person.


> **Note**
> **💡 Key Concept**
>
> When a role holder dies, the Seat auto-vacates. Permissions update automatically. Roles can be filled through appointment, election, self-claim, inheritance, or GM/story events.
> **Offices** (King, Marshal, Magistrate) are exclusive power-bearing roles. **Statuses** (Disgraced Noble, Exiled Knight) are non-exclusive identity tags that multiple players can hold.

**→ See The Seat System for complete technical details, fill modes, and implementation**


## 👑 Sovereignty & Legitimacy


## 🛡 Force & Security

**→ See Guards System, Death & Downed States, and Jail System for complete mechanics**


## ⚖️ Law, Justice & Death

**→ See Jail System for imprisonment mechanics and Death & Downed States for execution procedures**


## 🌍 Foreign Relations & Faction Diplomacy


## 🏠 Property & Space


## 🎭 Wildcard Roles

The King can designate a limited number of **Wildcard Roles** — flexible, customizable positions that come with a private royal apartment in the castle. These roles (Chancellor, King's Guard, Court Jester, Court Astrologer, etc.) grant castle access and proximity to power, but carry no mechanical authority beyond that.

Wildcard roles are political tools that signal who the King trusts and values. They're entirely dependent on royal favor — high-risk, high-reward positions that can vanish instantly if the King dies or loses trust.

**→ See Wildcard Roles for complete details, examples, historical parallels (Rasputin, Court Jesters), and the politics of informal power**


## 🧑‍🤝‍🧑 Commoner & Non-Office Gameplay

Commoners are not "less important" than officials — they are **the pressure that makes power real**. If elites are the actors, commoners are the audience that reacts, remembers, whispers, and ultimately decides whether the play succeeds.

Commoners serve as witnesses to power, spreaders of reputation, recruitm targets for factions, and the voices that force elites to justify themselves. Many players will choose to stay commoners permanently because there's no pressure to "win" — only to react, survive, and shape the narrative.

**→ See Commoner Gameplay for the complete gameplay loop, commoner roles (Beggar, Tavern Regular, Agitator, Mourner, etc.), and why audience power matters**


## ❌ Roles That Should Be NPCs

These roles create chores, not drama. They are **automated to keep Britain functioning**:


- ❌ **Master of Coin** — NPC Royal Treasury handles wages, taxes, income
- ❌ **Tax Collector** — Automated collection
- ❌ **Payroll Officer** — Guards paid automatically
- ❌ **Quartermaster** — Supply management automated
- ❌ **Bureaucratic Clerks** — Record-keeping automated


> **Note**
> **The Golden Rule for Role Design**
>
> "If this player doesn't log in for 3 days, does the server break?"
> **If yes →** NPC it
> **If no →** player role is safe

Players influence NPC systems via decrees, pressure, scandal, protest, and legitimacy. But they do not run them manually.


## Guild/Faction Leadership and Court Positions


> **Note**
> **⚔️ Role-Stacking is Allowed**
>
> **Guild and Faction leadership does NOT count as a court office.**
> This means a player can simultaneously:
> - Hold a major court position (King, Marshal, Magistrate, etc.)
> - **AND** lead a Guild or Faction
> **Examples:**
> - A **King who also leads** a religious guild or merchant faction
> - A **Marshal who also commands** a mercenary guild or military order
> - A **Magistrate who also heads** a legal guild or faction
> - A **Claimant who holds court office** while leading an external faction power base
> **Why this matters:** Throughout history, political power and organizational leadership were routinely fused. Caliphs held both political and religious authority. Prince-Bishops ruled territories while leading churches. Merchant-princes controlled both guilds and city governments. This creates layered power structures where removing someone from one position doesn't eliminate their influence.
> **→ See Claimants for extensive historical parallels and full implications of role-stacking**


## ⚠️ Common Problems & Solutions


> **❗ Note**
> **Problem: Role Hoarding**
>
> **Symptom:** One player accumulates multiple critical roles
> **Solution:** Hard limit: 1 major *court* role per player (King, Marshal, Magistrate are mutually exclusive). Players can hold 1 major court role + auxiliary roles (guard, scribe) + guild/faction leadership. Guild/Faction leadership is NOT a court office and doesn't count against this limit. Enforced in AssignSeat() logic.


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


### Q: Can I hold multiple roles at once?

**A:** Yes, but with restrictions. You can hold 1 official Court role (King, Marshal, Magistrate, Guard). You cannot be King and Marshal simultaneously. You can hold both a role in the Court AND a separate role in your faction/guild.


### Q: What happens if the King dies and there's no Regent?

**A:** Britain enters Interregnum. The Marshal or senior Magistrate may declare a temporary regency, or a coronation is called immediately. NPC systems keep the city functioning, but legitimacy fractures. This is a crisis, not a game-over.


### Q: Can I refuse an appointment?

**A:** Yes. The appointment gump requires your consent ("Accept" or "Decline"). Declining a royal appointment has social consequences but is mechanically allowed. Refusal is logged.


### Q: How do I get appointed to a role?

**A:** Position yourself politically. Build relationships with the King or Regent. Demonstrate competence. Survive long enough to be trusted. There is no application system — appointments are political acts, not job postings.


### Q: What if I'm a commoner — is the game fun for me?

**A:** Commoners have immense social power without admin responsibility. You can provoke, witness, gossip, ask dangerous questions, and force elites to justify themselves. Many players will choose to stay commoners permanently because there's no pressure to "win" — only to react and survive.


## 📋 Summary


> Roles don't exist to do jobs — they exist to apply pressure to power.

**Key Principles:**


- NPC systems run Britain. Players decide what Britain means.
- A Seat is not the player — it's the job.
- Roles should create conflict by interpreting power, not operating power.
- Commoners are the terrain. Without their reactions, elite conflict feels fake.
- Every role has a breaking point where everything changes.
- Absence creates story, not deadlock.
