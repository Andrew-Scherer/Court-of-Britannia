# Fast Travel & Cargo System — Design Document

**Status:** Ship-Ready Foundation (v2.0)  
**Scope:** UO magic-based travel (Recall/Gate), cargo anchoring mechanics, logistics preservation  
**Integrated With:** Settlement Banks, Guild Banks, Economy, Logistics Contracts  
**Explicitly Excludes:** Specific weight values, exact item lists (tunable later)

---

## 1. Design Purpose

This system exists to:
- Enable convenient player movement via UO magic (Recall/Gate)
- Preserve physical goods logistics and trade routes
- Prevent cargo teleportation while allowing personal travel
- Create organic demand for hauler/escort roles
- Reinforce geographic meaning of settlements

> [!IMPORTANT]
> **Core Principle:** Players may move conditionally. Goods may never teleport. Distance always has a cost.

---

## 2. The Three-Category Foundation

All movement follows these rules:

### 2.1 Intent (Abstract) — **MOVES FREELY**
- Trade orders visible everywhere via Britain clearing system
- Contracts and agreements persist across locations
- Communication and coordination unrestricted
- **Already implemented** via Britain Market system

### 2.2 Goods (Physical) — **NEVER TELEPORT**
- Items exist in specific locations
- Must be physically carried, shipped, or escorted
- Storage is strategic choice (settlement banks, guild banks)
- Logistics gameplay preserved
- **Anchored items cannot pass through Gates or Recall**

### 2.3 Players (Conditional) — **THIS SYSTEM**
- May move with restrictions via Recall and Gate spells
- Light travel (personal gear) = fast and convenient
- Loaded travel (cargo) = slow and manual
- Clear mental model: **"I can travel light, but cargo requires care"**

---

## 3. UO Magic Travel System

### 3.1 Recall (Solo Teleport)

**How it works:**
- Single player teleports to marked rune location
- Requires reagents
- Weight-limited (standard UO mechanics)

**Restrictions:**
- Personal items (weapons, armor, potions, tools) → Allowed
- Anchored items (cargo/trade goods) → Massively heavy, effectively blocks Recall
- Over weight limit → Cannot recall

**Purpose:** Fast solo travel for social/coordination/exploration when traveling light

---

### 3.2 Gate Travel (Portal)

**How it works:**
- Mage opens portal to marked rune location
- Multiple players can walk through
- Requires reagents

**Restrictions:**
- Personal items → Pass through freely
- **Anchored items → BLOCKED** (cannot pass through Gate)
- System message: *"Your cargo prevents you from passing through the gate"*

**Purpose:** Group movement for combat/social/exploration, NOT for hauling goods

---

## 4. Anchored Cargo System (The Solution)

### 4.1 Core Mechanic

**Items are categorized into two types:**

**Personal Items:**
- Weapons, armor, shields
- Potions, reagents, bandages
- Food and drink
- Tools (pickaxes, axes, saws, hammers)
- Gold (up to reasonable carry limit)
- Quest items, personal effects
- **Can pass through Gates**
- **Normal weight for Recall**

**Anchored Items (Cargo):**
- Raw materials (ore, logs, hides, wool, cotton)
- Processed goods (ingots, boards, leather, cloth)
- Bulk trade goods (barrels, crates, furniture)
- High-value trade items (marked as cargo)
- **Cannot pass through Gates**
- **Massively heavy for Recall purposes**
- **Must be physically transported**

---

### 4.2 How Anchored Cargo Works

**Gate Travel:**
- Player approaches Gate while carrying anchored items
- System blocks passage
- Message: *"Your cargo prevents you from passing through the gate"*
- Must drop cargo or travel manually

**Recall Travel:**
- Anchored items count as extremely heavy
- Weight limit exceeded → Cannot recall
- Message: *"You are too heavily burdened to recall"*

**Manual Travel:**
- Only way to move anchored items
- Walk/ride through world
- Subject to encounters, ambushes, weather
- Creates demand for escorts

---

### 4.3 Edge Case Handling

**Q: Can I drop cargo, gate through, then pick it back up?**  
A: No. Cargo stays behind when you teleport.

**Q: Can I gate TO a settlement, then manually haul cargo out?**  
A: Yes! Gate to destination, then physically transport cargo.

**Q: What about containers (backpacks, crates)?**  
A: If container holds ANY anchored items, the container itself becomes anchored.

**Q: Can I trade cargo to an unencumbered friend so they can gate?**  
A: Once they receive anchored items, they're blocked from gating too.

**Q: What about gold?**  
A: Small amounts = personal. Large amounts (over threshold) = anchored cargo.

---

## 5. Item Categorization (Examples)

### Anchored (Cargo) Items
- **Raw Materials:** Iron ore, logs, raw hides, raw wool
- **Processed Goods:** Ingots (all types), boards, leather, cloth
- **Bulk Goods:** Barrels, crates, large furniture, building materials
- **Trade Goods:** Flagged items intended for bulk trade

### Non-Anchored (Personal) Items
- **Combat Gear:** Weapons, armor, shields (equipped or carried)
- **Consumables:** Potions, reagents, bandages, food
- **Tools:** Pickaxe, axe, saw, hammer, tongs
- **Currency:** Gold (up to X amount)
- **Personal:** Quest items, runebooks, recall runes

### Special Cases
- **Containers:** Anchored if containing any anchored items
- **Gold:** Personal up to 10,000 gp, cargo beyond
- **Crafted Items:** Weapons/armor = personal, bulk goods = anchored

---

## 6. Why This Preserves Logistics

### Without Cargo Anchoring (Broken)
- Mage gates caravan loaded with ore to Britain
- Goods teleport instantly
- No need for haulers, escorts, trade routes
- Geography becomes cosmetic
- Economy collapses

### With Cargo Anchoring (Fixed)
- Players can gate for social/combat
- Cargo must be manually transported
- Haulers have purpose
- Escorts protect valuable shipments
- Trade routes create geographic meaning
- Travel choices matter

---

## 7. Role Integration

### 7.1 How Travel Creates Roles

**Haulers:**
- Specialize in moving anchored goods between settlements
- Accept logistics contracts from Britain orders
- Build reputation for reliable delivery
- **Cannot use Gates while loaded**

**Escorts:**
- Guard haulers on dangerous routes
- Payment for safe passage through wilderness
- Combat-focused players gain economic purpose
- Can Gate to/from escort missions (when unloaded)

**Mages:**
- Provide Gate services for group movement
- Enable rapid response for combat/events
- **Cannot bypass cargo system**

**Merchants:**
- Coordinate logistics
- Hire haulers for delivery
- Store goods in settlement/guild banks

---

## 8. Cross-System Integration

### 8.1 Integration with Britain Clearing System

**Synergy:**
- Players Gate to Britain easily (unloaded)
- Place buy orders (intent travels freely)
- Must manually haul to settlements for fulfillment
- Creates rhythm: **coordinate in Britain, fulfill in settlements**

### 8.2 Integration with Settlement & Guild Banks

**Preservation:**
- Anchored goods remain in banks
- Players must travel TO goods, not summon them
- Storage becomes strategic choice
- Question: *"Where should I store my cargo?"* remains meaningful

### 8.3 Integration with Logistics Contracts

**Enablement:**
- Players see Britain buy orders
- Accept delivery contracts
- Must manually haul anchored goods to destination
- Escort services become valuable for high-value shipments

---

## 9. Edge Cases & Failure Modes

### 9.1 Death in Transit

**Scenario:** Hauler dies while manually traveling with cargo  
**Resolution:**
- Corpse appears at death location with all cargo
- Goods lootable by anyone
- Creates rescue missions, bounty hunting
- **This is good** — death matters, escorts matter

### 9.2 Container Exploits

**Scenario:** Player tries to hide cargo in nested containers  
**Resolution:**
- Any container holding anchored items = anchored itself
- System recursively checks container contents
- No bypass allowed

### 9.3 Trading Cargo Mid-Gate

**Scenario:** Player tries to trade cargo to companion while gating  
**Resolution:**
- Once companion receives anchored items, they're blocked
- Both players must manually travel

### 9.4 Massive Gold Transport

**Scenario:** Player wants to move 1,000,000 gold  
**Resolution:**
- Gold over threshold (e.g., 10,000 gp) = anchored
- Must manually transport or use multiple trips
- Creates demand for escorts (bank runs)

---

## 10. Implementation Phases (Suggested)

### Phase 1: Foundation (MVP)
- Implement anchored item flagging system
- Add Gate passage check for anchored items
- Add Recall weight penalty for anchored items
- Create UI messaging

### Phase 2: Item Categorization
- Flag all raw materials as anchored
- Flag all processed goods as anchored
- Define personal item list
- Set gold threshold

### Phase 3: Container System
- Recursive anchored check for containers
- Prevent cargo hiding exploits

### Phase 4: Polish
- Refine weight values
- Tune gold threshold
- Add contextual help messages
- Track hauler contracts

---

## 11. Tunable Parameters (Deliberate Postponement)

These are **intentionally not specified yet**:

- Exact weight penalty for anchored items on Recall
- Gold threshold for "cargo" designation
- Specific item list (raw materials, processed goods)
- Container weight calculations
- Reagent costs for Gate/Recall

**Once principles are approved, these become obvious.**

---

## 12. Design North Star (Final)

> **Players can fast-travel light.  
> Cargo must move through the world.**

**The Three Truths Locked In:**
1. Goods are physical (anchored, cannot teleport)
2. Intent is abstract (moves freely via Britain clearing)
3. Players sit in between (can teleport light, not loaded)

**Distance matters.**

---

## 13. Success Metrics

This system succeeds when:

✅ Players use Gates for combat/social gatherings  
✅ Cargo movement creates hauler/escort roles  
✅ Settlement banks remain relevant for storage  
✅ Trade routes have geographic meaning  
✅ Death during transport creates dramatic moments  
✅ Players say *"I can travel light, but cargo requires care"*

This system fails when:

❌ Players find cargo teleportation exploits  
❌ Hauler role becomes pointless  
❌ Geography feels cosmetic  
❌ Everyone stores everything in one location  

---

## 14. Final Verdict

This system:
- **Preserves UO magic utility** (Recall/Gate work great for personal travel)
- **Prevents cargo teleportation** (anchored items cannot Gate/Recall)
- **Creates logistics roles** (haulers, escorts matter)
- **Maintains geographic meaning** (distance matters for goods)
- **Integrates elegantly** with Britain clearing, banks, contracts
- **Scales naturally** (system-enforced, not admin-dependent)

**This is philosophically aligned and structurally complete.**

---

## Related Systems

- [Economy: Britain as Clearinghouse, Settlements as Fulfillment Nodes](Economy_%20Britain%20as%20Clearinghouse,%20Settlements%20as%20Fulfillment%20Nodes.md)
- [Banking System Revamp](Banking%20System%20Revamp.md)
- [Logistics Contracts](Logístics%20contracts.md)
