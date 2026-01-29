# Fast Travel System

**Status:** Season 1 Foundation  
**Last Updated:** 2026-01-28  
**Scope:** UO magic-based travel (Recall/Gate) for Season 1 (no hauling)  
**Future Integration:** Cargo anchoring system ready for Season 2+ when hauling is introduced

---

## 1. Core Philosophy

> [!IMPORTANT]
> **The Three Movement Categories:**
> - **Intent** (orders, contracts) → Moves freely
> - **Players** (characters) → Move conditionally  
> - **Goods** (items, materials) → Never teleport *(enforced in Season 2+)*

### Why Travel Matters

Travel determines:
- Where goods live
- Where markets function
- Where power concentrates
- Where risk exists
- How the economy breathes

**If travel is trivial, geography collapses and systems lose meaning.**

---

## 2. Season 1 Implementation (No Hauling)

Since Season 1 does **not include hauling mechanics**, the fast travel system is simplified:

### 2.1 Recall (Solo Teleport)

**How it works:**
- Single player teleports to marked rune location
- Requires reagents
- Standard UO weight limits apply

**Restrictions:**
- Must be within normal carry weight
- Cannot recall while overloaded
- Personal items (weapons, armor, potions, tools, materials) → Allowed

**Purpose:** Fast solo travel for social/coordination/exploration

---

### 2.2 Gate Travel (Portal)

**How it works:**
- Mage opens portal to marked rune location
- Multiple players can walk through
- Requires reagents

**Restrictions:**
- Standard weight limits apply
- Players can bring personal gear and materials through gates

**Purpose:** Group movement for combat/social/exploration

---

### 2.3 What This Means for Season 1

**Players can:**
- ✅ Recall/Gate freely with normal carry weight
- ✅ Move materials and goods within weight limits
- ✅ Use magic travel for social/combat/coordination
- ✅ Transport items manually or via magic

**Why this works for Season 1:**
- No hauling contracts = no need to restrict cargo movement
- Players still experience weight/inventory management
- Geography still matters (can't carry everything at once)
- Magic feels useful and convenient
- No artificial restrictions on a system that doesn't exist yet

---

## 3. Design Principles (Always True)

These principles guide all travel decisions, now and in future seasons:

### 3.1 Distance Must Always Have a Cost

That cost may be:
- Time
- Risk
- Money
- Scarcity
- Opportunity

**But it must exist.**

### 3.2 Asymmetry Is a Feature

Travel does not need to be fair, symmetric, or uniform. Examples:
- Easy to reach Britain, harder to leave with goods *(Season 2+)*
- Safer routes that are longer
- Faster routes that are dangerous
- Outlaws having fewer options

### 3.3 Travel Should Reinforce World Hierarchy

Travel naturally teaches players that:
- **Britain** is for coordination and clearing
- **Settlements** are for storage and fulfillment
- **Wilderness** is for risk and reward

### 3.4 The Litmus Test

When evaluating any travel feature, ask:

> **"Does this move value without effort?"**

If the answer is yes, it violates the design.

---

## 4. Future: Season 2+ Cargo Anchoring

When hauling is introduced in future seasons, the following system activates:

### 4.1 The Anchored Cargo System

**Items will be categorized:**

**Personal Items** (Can teleport):
- Weapons, armor, shields
- Potions, reagents, bandages
- Food and drink
- Tools (pickaxes, axes, saws, hammers)
- Gold (up to threshold, e.g., 10,000 gp)
- Quest items, personal effects

**Anchored Items** (Cannot teleport):
- Raw materials (ore, logs, hides, wool, cotton)
- Processed goods (ingots, boards, leather, cloth)
- Bulk trade goods (barrels, crates, furniture)
- High-value trade items flagged as cargo
- Large amounts of gold (over threshold)

### 4.2 How Anchoring Works (Future)

**Gate Travel:**
- Player carrying anchored items cannot pass through
- System message: *"Your cargo prevents you from passing through the gate"*
- Must drop cargo or travel manually

**Recall Travel:**
- Anchored items count as extremely heavy
- Weight limit exceeded → Cannot recall
- Message: *"You are too heavily burdened to recall"*

**Manual Travel:**
- Only way to move anchored items
- Walk/ride through world
- Subject to encounters, ambushes, weather
- Creates demand for escorts and haulers

### 4.3 Why Wait for Season 2+?

The cargo anchoring system only makes sense when:
- ✅ Hauling contracts exist
- ✅ Escort roles are defined
- ✅ Logistics gameplay is implemented
- ✅ Trade routes matter mechanically

**Without hauling, cargo restrictions are just annoying.**

---

## 5. Integration with Other Systems

### 5.1 Britain Clearing System

**Current (Season 1):**
- Players Gate/Recall to Britain easily
- Place buy/sell orders (intent travels freely)
- Coordinate trade and contracts

**Future (Season 2+):**
- Same coordination in Britain
- Must manually haul to settlements for fulfillment
- Creates rhythm: **coordinate in Britain, fulfill in settlements**

### 5.2 Settlement & Guild Banks

**Current (Season 1):**
- Players can Recall/Gate to access banks
- Storage location matters (can't carry everything)
- Weight limits create strategic choices

**Future (Season 2+):**
- Anchored goods remain in banks
- Players must travel TO goods, not summon them
- Storage becomes even more strategic

### 5.3 Logistics Contracts (Future)

**When hauling is introduced:**
- Players see Britain buy orders
- Accept delivery contracts
- Must manually haul anchored goods to destination
- Escort services become valuable for high-value shipments

---

## 6. Roles Created by Travel

### Current Season 1 Roles:
- **Mages:** Provide Gate services for group movement
- **Merchants:** Coordinate trade via Britain clearing
- **Combatants:** Use Gates for rapid response

### Future Season 2+ Roles:
- **Haulers:** Specialize in moving anchored goods between settlements
- **Escorts:** Guard haulers on dangerous routes
- **Scouts:** Map safe routes and report dangers
- **Smugglers:** Move restricted goods through wilderness

---

## 7. Edge Cases & Failure Modes

### 7.1 Current Season 1

**Q: Can I carry unlimited materials via Gate?**  
A: No, standard weight limits apply.

**Q: What about gold?**  
A: Subject to normal carry weight.

**Q: Can I store items in multiple banks?**  
A: Yes, but you must travel to each bank to access them.

### 7.2 Future Season 2+ (Cargo Anchoring)

**Q: Can I drop cargo, gate through, then pick it back up?**  
A: No. Cargo stays behind when you teleport.

**Q: What about containers (backpacks, crates)?**  
A: If container holds ANY anchored items, the container itself becomes anchored.

**Q: Can I trade cargo to an unencumbered friend so they can gate?**  
A: Once they receive anchored items, they're blocked from gating too.

**Q: Death in transit?**  
A: Corpse appears at death location with all cargo, lootable by anyone. Creates rescue missions.

---

## 8. Success Metrics

### Season 1 Success:
✅ Players use Recall/Gate for social gatherings  
✅ Magic travel feels convenient and useful  
✅ Weight limits create meaningful inventory choices  
✅ Settlement banks remain relevant for storage  
✅ Britain serves as coordination hub  

### Season 2+ Success (with Hauling):
✅ Cargo movement creates hauler/escort roles  
✅ Trade routes have geographic meaning  
✅ Death during transport creates dramatic moments  
✅ Players understand: *"I can travel light, but cargo requires care"*  

### System Failure (Any Season):
❌ Geography feels cosmetic  
❌ Storage location doesn't matter  
❌ Distance has no cost  
❌ Everyone stores everything in one location  

---

## 9. Design North Star

> **Travel should make the world feel large, not inconvenient.  
> Trade should feel deliberate, not tedious.**

### The Three Truths (Always):
1. **Goods are physical** (anchored, cannot teleport) *[Season 2+]*
2. **Intent is abstract** (moves freely via Britain clearing)
3. **Players sit in between** (can teleport light, not loaded) *[Season 2+]*

**Distance matters.**

---

## 10. What We're NOT Deciding Yet

These are **intentionally postponed** until hauling is implemented:

- Exact weight penalty for anchored items
- Gold threshold for "cargo" designation
- Specific item categorization lists
- Container weight calculations
- Reagent costs for Gate/Recall

**Once hauling exists, these become obvious.**

---

## Related Systems

- [Economy: Britain as Clearinghouse](../Economy/Britain-Clearinghouse.md)
- [Settlement Banks](../Economy/Settlement-Banks.md)
- [Guild Banks](../Guilds/Guild-Banks.md)
- Logistics Contracts *(Season 2+)*
---

## Document History

- **2026-01-28:** Consolidated from Fast-Travel-Revamp.md and Fast-Travel-System.md
- **Decision:** Simplified for Season 1 (no hauling), preserved cargo anchoring design for Season 2+
- **Rationale:** No point restricting cargo movement when hauling gameplay doesn't exist yet
