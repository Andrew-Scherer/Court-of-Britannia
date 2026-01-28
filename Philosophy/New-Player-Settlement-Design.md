# New Player Settlement: "The Proving Grounds"

**Status:** Design Specification  
**Purpose:** Environmental teaching infrastructure that aligns player expectations with the shard's diverse systems (Permadeath, Economy, Logistics) before entering the main world.

---

## Executive Summary

The Proving Grounds are not a tutorial—they are a filtered microcosm of the real world.
The settlement exists to normalize **friction** and **consequence** in a controlled environment.

**Core Philosophy:**
> *"The Settlement doesn't teach you how to play. It teaches you how to lose."*

---

## Core System Adjustments (The Pivot)

We have removed arbitrary "gamey" mechanics (lives, fixed gold sums) in favor of **concept-based environmental teaching**.

| Concept | Old Logic | New Logic (Aligned) |
| :--- | :--- | :--- |
| **Death** | "You have 3 extra lives" | **"The King's Peace"** (Execution is blocked; Downed State is real) |
| **Economy** | "Here is 500g starter cash" | **"Commissioned Gear"** (Soulbound loaner equipment) |
| **Housing** | "Buy a starter plot" | **"Tenements"** (Instanced rooms with real Upkeep timers) |
| **Banking** | "Banks store items" | **"Local vs Capital"** (Settlement holds items; Britain holds wealth) |
| **Graduation** | "Wait 30 days" | **"The Crossing"** (One-way player choice to leave safety) |

---

## 1. Death & Justice: "The King's Peace"

**The Lesson:** *Downed ≠ Dead. Execution is a choice.*

### The Zone Mechanic
The Settlement operates under **The King's Peace**:
- **Downed State:** Active. Combat reduces you to 0 HP, you fall unconscious.
- **Execution:** **Mechanically Blocked.** Players cannot target downed players for execution.
- **Arrest:** NPC Guards will arrest downed criminals (standard behavior).

### Why This Works
- Aligns with [[Permadeath-Downed]]: Teaches the difference between "I fell" (Downed) and "I died" (Executed).
- Prevents griefing: Veterans cannot execute newbies.
- Teaches vulnerability: You still fall, drop your weapon (if applicable), and wait for stabilization/natural wake.

### Scripted Event: "The Breach" (Rare)
NPC Event where an outlaw breaks the King's Peace and executes an NPC, triggering massive Guard response.
*Teaches that safety is enforced by blades, not walls.*

---

## 2. Economy: "Commissioned Gear"

**The Lesson:** *Wealth is earned, not given. Inflation is prevented.*

### The "Stipend" Exploit Fix
Instead of giving transferable Gold (which encourages Alt-Farming):
- New players are issued **Commissioned Equipment**.
- **Properties:**
    - `NoDrop` / `NoTrade`
    - `ZeroValue` (Vendors won't buy it)
    - **Function:** Effective stats for learning, but worthless for economy.
    - **Return Policy:** Must be "returned" (deleted) to buy passage to Britain.

### Local Markets (The "Trading Post")
- **Local Bank:** Stores Items. Explicitly shown as *disconnected* from Britain.
- **Local Market:** Players can buy/sell, but with **Settlement Currency** (non-transferable tokens earned from local tasks).
- **Result:** A functioning micro-economy that cannot flood the main world.

---

## 3. Housing: "Tenements & Upkeep"

**The Lesson:** *Property requires maintenance. Failure means eviction.*

### The Tenement System
- **Instanced Rooms:** "The Barracks" or "Merchant Quarters".
- **Rent Meter:** Visible UI on the door.
- **Mechanic:**
    - First 7 days: "Paid by Crown".
    - Day 8+: Must pay 10 Settlement Tokens/day.
    - **Failure:** Door locks. 24h later, generic items deleted.
- **Teaches:** The [[Guild-Upkeep]] system mechanics (decay/eviction) without consuming global map space.

---

## 4. Banking & Logistics

**The Lesson:** *Gold goes to Britain. Goods stay here.*

### The Split
- **Settlement Bank:** "This vault holds **goods**. It is local to this town."
- **Britain Treasury (Locked):** "This vault holds **wealth**. You cannot access it until you reach the Capital."
- **Interactive Lesson:**
    - Quest: "Move these supplies to the Trading Post."
    - Player realizes bank contents *do not teleport* between the Town Center and Trading Post.

---

## 5. Guilds & Society

**The Lesson:** *Organization is power.*

### The "Free Company" (NPC Guild)
- A physical **Guild Hall** in the settlement.
- **Guild Stone:** Players can "touch" the stone to see the interface.
- **Features Visible:**
    - Guild Charter (Rules)
    - Guild Tax Rate (set by NPC Guildmaster)
    - Guild War Status (Peace)
- **Teaches:** How to read a guild tag, how taxes work on members, and the concept of collective property.

---

## 6. Graduation: "The Crossing"

**The Lesson:** *Commitment is final.*

### The Mechanic
There is no timer. There is no gold requirement. There is only **The Crossing**.
- **Location:** The Docks / Main Gate.
- **NPC:** The Ticket Master.
- **Dialogue:**
    > *"Beyond this gate, the King's Peace ends. Death is permanent. Your Settlement Gear must be returned. You take only what you have earned. There is no return."*
- **Action:** Player accepts.
- **Result:**
    - Commissioned Gear deleted.
    - Settlement Tokens converted to a small amount of Britain Gold (capped low).
    - Character teleported to Britain arrival zone.
    - **Settlement Access Revoked.** (One-way trip).

---

## Scenario Walkthrough

1.  **Login:** Player wakes in Tenement. "Rent Paid until Tuesday."
2.  **Combat:** Player spans in Arena. Gets Downed. Realizes they don't die instantly. Someone helps them up (Revive).
3.  **Economy:** Player does a task, earns Tokens. Buys a better sword (Commissioned).
4.  **Logistics:** Player runs to Trading Post bank. Realizes sword is in Town Center bank. Curses. Runs back. Learns lesson.
5.  **Observation:** Sees NPC Guild Hall. Checks stone. Sees "Tax Rate: 5%". Understands Guilds tax members.
6.  **Graduation:** Decides they are ready. Goes to Docks. Surrenders Commissioned Sword. Boards ship.
7.  **Main World:** Arrives in Britain naked but knowledgeable.

---

## Risk Analysis (Rules Lawyer Check)

| Exploit | Fix | Status |
| :--- | :--- | :--- |
| **Alt-Farming Gold** | No transferable gold given. Gear is Soulbound. | ✅ Fixed |
| **Property Blocking** | Housing is Instanced (Tenements). | ✅ Fixed |
| **Safe-Zone Scouting** | Settlement is logically separated (Instance or Island). | ✅ Fixed |
| **Graduation Muling** | One-way trip. Cap on Token-to-Gold conversion. | ✅ Fixed |

---

## See Also
- [[Permadeath-Downed]] - The mechanics of downed state vs execution.
- [[Banking-System]] - Local vs Global storage.
- [[Guilds]] - Organization structures.
