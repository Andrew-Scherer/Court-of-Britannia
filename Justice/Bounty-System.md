# ⚔️ Bounty System

**Justice, Criminals, and Bounty Hunters**

---

> *Crime has consequences. Justice has a price. Hunters have a career.*

## Core Principle

The Bounty System creates real consequences for criminal behavior through **player-driven justice** (personal bounties with forensic proof) and **state authority** (Crown bounties based on charges). 

Forensic investigation is **optional but valuable**—it enables player-driven bounties and provides stronger evidence, but **justice can proceed without it** via Crown bounties.

---

## Two Types of Bounties

### 1. Personal Bounties (Player-Funded, Forensic-Gated)

**Player-driven justice backed by mechanical proof.**

**Requirements:**
- Forensic investigator uses Forensic Evaluation skill on victim's corpse (within 24 hours)
- Victim must NOT have been criminal-flagged (self-defense exemption)
- Bounty placer deposits gold in escrow

**Evidence Tier:** Always **Tier 2 (Forensic)** — mechanical proof, hardest to dispute

**Payment:** See [Payment Structure](#payment-structure)

**Expiry:** 7 days if unclaimed → auto-refund to placer

---

### 2. Crown Bounties (Treasury-Funded, Charge-Required)

**State-sanctioned justice requiring formal accusation.**

**Requirements:**
- Target must be **formally charged** or **declared outlaw** (Justice Ledger entry)
- Marshal/Magistrate suggests bounty
- King/Regent approves

**Evidence Tier:** Board displays evidence quality (Tier 0/1/2) — see [Evidence Tiers](#evidence-tiers-political-transparency)

**Payment:** See [Payment Structure](#payment-structure)

**Political Cost:**
- Tier 0/1 bounties publicly marked as lacking forensic proof
- Can be contested: "Show us the evidence or admit it's political"
- Multiple testimony-based bounties create scandal

**Expiry:** Must be manually renewed by issuing authority → political signal

---

## Payment Structure

### Service Fee Model

**Why this structure:**
- Incentivizes alive capture (more total gold possible)
- Protects hunters from clemency abuse (service fee guaranteed)
- Preserves King's political power (can still pardon)
- Creates feedback loop (frequent clemency → hunters switch to killing)

### Personal Bounties

**Total bounty** = Displayed amount + 25g forensic pot

Example: Board shows "100g bounty", actual total is 125g (100g main + 25g forensic)

**Alive delivery:**
- Service fee: 50g immediate (paid upon jail booking)
- Contingent: 50g (paid when execution is sentenced, not when executed)
- Forensic: 25g (paid when execution is sentenced)
- **If clemency:** Service fee kept by hunter, contingent cancelled, forensic paid, remainder refunded to placer

**Dead delivery:**
- Hunter: 50g immediate
- Forensic: 25g immediate
- Contingent: N/A

### Crown Bounties

**Alive delivery:**
- Service fee: 50% immediate from Treasury (paid upon jail booking)
- Contingent: 50% from Treasury (paid when execution is sentenced)
- **If clemency:** Service fee kept, contingent cancelled (Treasury saves money)

**Dead delivery:**
- Hunter: 50% immediate from Treasury
- Contingent: N/A

### Jail Booking Definition

**"Delivery to jail" means successful booking into jail custody:**
- Not "standing in jail building"
- Not "dragged near jail"
- **Custody transfers to the system** = service fee paid

**This prevents:**
- Drag-and-rescue exploits
- Handoff scams
- "Almost captured" abuse

### Contingent Payout Resolution

**Contingent portion pays when Magistrate sentences execution**, not when execution actually occurs.

**This prevents:**
- Indefinite trial delays
- Hostage-holding via delayed sentencing
- Bounty hunter never getting paid

**Execution can happen later for political theater**, but bounty resolves on sentencing.

---

## Forensic Evaluation: Optional But Valuable

Forensic Evaluation is **not required for justice**—it's an **enhanced evidence path**.

### Why Use Forensics?

✅ **Mechanical proof** (harder to dispute than testimony)
✅ **Player-driven bounties** (no authority approval needed)
✅ **Economic opportunity** (investigator profession, 25g cut)
✅ **Political legitimacy** (Tier 2 evidence strongest)

### The 24-Hour Window

- Corpse decays after 24 hours
- Anyone with Forensic Evaluation skill can investigate before decay
- Skill writes to Justice Ledger automatically:
  - Victim identity
  - Killer identity
  - Criminal flag status (self-defense check)
  - Timestamp and location
  - Investigator name

**If victim was criminal-flagged:** Justified kill, no personal bounty possible

**If corpse not found:** Forensic evidence lost, but Crown bounties can still be issued based on testimony

**The window creates opportunity for investigative gameplay, not obligation for justice to exist.**

---

## Evidence Tiers (Political Transparency)

**Every bounty displays Evidence Tier on public board.**

### Tier 2: Forensic Proof
- Backed by Forensic Evaluation skill
- Mechanically confirmed in Justice Ledger
- Hardest to dispute politically

### Tier 1: Testimony
- Based on witness statements, circumstantial evidence
- Can be contested

### Tier 0: Royal Decree
- Political determination
- **Formal charge exists but evidence section is blank** (paperwork with no proof listed)
- Justice Ledger shows: "Charged with murder—evidence: [none listed]"
- Most vulnerable to legitimacy attacks

**No mechanical difference—pure transparency for political leverage.**

Opposition can cite Evidence Tier:
- "The Crown issued 8 Tier 0 bounties with zero proof"
- "Show us forensics or admit it's a political hit"

---

## Who Can Do What

| Action | Who |
|--------|-----|
| **Place personal bounty** | Anyone (if forensics confirm) |
| **Suggest Crown bounty** | Marshal, Magistrate |
| **Approve Crown bounty** | King, Regent |
| **Issue direct Crown bounty** | King, Regent (bypasses approval) |
| **Collect any bounty** | Anyone (hunters, guards, citizens) |
| **Perform forensics** | Anyone (who learns skill) |
| **Grant clemency** | King (unlimited) |

---

## Formal Charge Requirement

**Crown bounties require formal accusation.**

Target must be:
- **Declared Outlaw** (Justice Ledger entry), OR
- **Formally Charged** (crime specified, logged)

**This creates:**
- Public record for opposition to cite
- Political cost for frivolous accusations
- Clear state procedure (not arbitrary hits)

**Personal bounties do NOT require formal charge** (forensics are the requirement).

---

## King Clemency

**The King can pardon any criminal at any time (unlimited).**

### Effects:

**Criminal:** Released immediately, bounty removed

**Payments:** See [Payment Structure](#payment-structure) for details

**Political Record:**
- Clemency logged in Justice & Punishment Ledger
- Evidence Tier still visible: "Pardoned despite Tier 2 forensics" vs "Pardoned a Tier 0 accusation"
- Opposition cites: "He pardoned his conspirators"

### Chain-Clemency Feedback Loop

**If King pardons frequently:**
1. Bounty hunters stop arresting alive (service fee not worth risk)
2. Hunters switch to killing (50% guaranteed)
3. Magistrate loses relevance (no trials)
4. Justice system degrades
5. Opposition gains legitimacy argument

**Self-regulating player behavior, not mechanical restriction.**

---

## Overlapping Bounties

**If both personal and Crown bounty exist on same target: bounties stack.**

Example:
- Personal: 100g + Crown: 150g = **250g total**
- Alive: 125g service fee + 125g contingent
- Dead: 125g immediate

**This makes high-profile criminals extremely valuable targets.**

---

## Bounty Refunds & Expiry

### Target Dies Without Claim
- **Personal:** Auto-refund to placer
- **Crown:** Treasury keeps funds (sunk cost)

### Expiry
- **Personal:** 7 days → auto-refund
- **Crown:** Must be manually renewed (political signal)

---

## Treasury Budget Tracking

**Soft cap with political consequences:**
- Treasury ledger tracks total spent on bounties
- No mechanical limit (King can always issue)
- **If budget exceeded:** Creates scandal
  - "The Crown spent 40% of Treasury on bounties"
  - Opposition cites overspending

---

## The Public Bounty Board

### Display

**For each bounty:**
- Target Name
- Crime
- Bounty Type (Personal/Crown)
- Displayed Amount (main bounty, excludes forensic pot for personal)
- Evidence Tier (0/1/2)
- Alive/Dead Split
- Issue Date
- Issuing Authority
- Expiry (personal only)

### Threaded Message Board

Players can:
- Leave tips on criminal movements
- Coordinate hunting efforts
- Warn of dangerous targets
- Dispute Evidence Tier

---

## Justice & Punishment Ledger

**Single source of truth for all justice actions.**

**Records:**
- Formal charges and outlaw declarations
- Forensic evaluations
- Bounties (type, tier, amount, suggestions, approvals)
- Collections (method, payout)
- Trials, sentences, executions
- Clemencies granted
- Treasury bounty spending
- Refunds and expiries

**Who Can View:**
- **Full:** Magistrate, King, Regent, Master of Treasury
- **Public:** Anyone (bounties, clemencies, charges, Evidence Tiers)

---

## Preventing Abuse

### Personal Bounty Safeguards
✅ Forensic proof required
✅ Self-defense auto-excluded
✅ Gold in escrow
✅ Auto-refund on expiry/death
✅ Cannot be blocked by Crown (only clemency after capture)

### Crown Bounty Safeguards
✅ Formal charge required
✅ Approval workflow (prevents single-person treasury drain)
✅ Evidence Tier transparency
✅ Treasury budget tracking
✅ Manual renewal required

### General Safeguards
✅ Service fee model (protects from clemency abuse)
✅ Jail booking requirement (prevents drag-and-rescue)
✅ Contingent payout on sentencing (prevents stall grief)
✅ Forensic Evaluation mechanical (no corruption)
✅ Public ledger (transparency creates accountability)

---

## Quick Reference

| Question | Answer |
|---|---|
| Can forensics be skipped? | Yes—Crown bounties work without them |
| Who can place personal bounties? | Anyone, if forensics confirm crime |
| Who can suggest Crown bounties? | Marshal, Magistrate |
| Who can approve Crown bounties? | King, Regent |
| Service fee (alive)? | 50% immediate on jail booking |
| Contingent (alive)? | 50% when execution is sentenced |
| Dead delivery? | 50% immediate, no contingent |
| Forensic cut? | 25g from separate pot (personal only) |
| Do bounties stack? | Yes |
| Crown requirement? | Formal charge or outlaw declaration |
| Evidence Tier purpose? | Political transparency, no mechanical effect |
| Personal expiry? | 7 days, auto-refund |
| Crown expiry? | Must be manually renewed |
| Clemency limits? | None (unlimited, but political cost) |
| Target dies without claim? | Personal: refund, Crown: no refund |
| Can Crown block personal bounties? | No (only clemency after capture) |
| Treasury budget limit? | Soft cap—overspending creates scandal |

---

## Design Promises

✅ **Player-driven justice remains viable** even under corrupt regimes

✅ **Crown bounties provide default justice path** (testimony-based works)

✅ **Forensics enhance but don't gatekeep** justice (opportunity, not obligation)

✅ **Alive capture stays rational** even with frequent clemency (service fee protects)

✅ **Political power preserved** (King unlimited clemency, direct bounties)

✅ **Political consequences enforced** (transparency, budget tracking, formal charges)

✅ **No mechanical restrictions on choice** (only visibility and social pressure)

✅ **Self-regulating feedback loops** (corrupt system = hunters kill = trials disappear = scandal)

---

## See Also

- [[Jail System|Jail]] — Where arrested criminals await trial
- [[Magistrate|Magistrate]] — Holds trials, determines sentences
- [[Guards|Guards]] — Can collect bounties, make arrests
- [[Death Ledger|Death-Ledger]] — Records all deaths
- [[Execution Mechanics|Execution-Mechanics]] — Final punishment

---

**Crown bounties issued without forensic proof are explicitly marked as testimony-based and may be contested publicly, creating legitimacy pressure on the issuing authorities.**

---

# Appendix: Example Scenarios

### Scenario 1: Player-Driven Justice with Forensics

1. Assassin murders noble
2. Noble's brother finds corpse within 12 hours
3. Hires forensic investigator
4. Forensic confirms murder (Tier 2)
5. Brother places 125g bounty (board shows 100g)
6. Hunter arrests assassin alive, criminal booked
7. Service fee: 50g paid immediately
8. Magistrate sentences execution
9. Contingent: 50g to hunter, 25g to forensic
10. **Total:** Hunter 100g, Forensic 25g

---

### Scenario 2: Crown Bounty Without Forensics

1. Merchant murdered, body never found
2. Witnesses saw killer fleeing
3. Marshal files formal charge
4. Suggests 100g Crown bounty (Tier 1: Testimony)
5. King approves
6. Hunter kills target
7. Payout: 50g from Treasury
8. Opposition: "Another testimony-based bounty with no proof"

---

### Scenario 3: Corrupt King Chain-Clemency

1. King's guild commits murders
2. Forensics confirm (Tier 2), personal bounties placed
3. Hunters arrest alive
4. Service fee: 50g paid per criminal
5. King grants clemency to all
6. Contingent: Cancelled (50g not paid)
7. Hunters frustrated
8. Next murderer: executed on sight (50g guaranteed)
9. Magistrate irrelevant (no trials)
10. Opposition: "King pardoned 10 Tier 2 murderers, justice is theater"

---

### Scenario 4: Successful Claimant Self-Clemency

1. Claimant murders King during coup
2. Forensics confirm (Tier 2), personal bounty placed
3. Claimant races to coronation
4. Crowned as new King
5. Grants self clemency
6. Bounty cancelled, placer refunded
7. Recorded: "King pardoned self for Tier 2 murder of predecessor"
8. Political scandal but mechanically allowed

---

### Scenario 5: Overlapping Bounties

1. Noble murdered, forensics confirm
2. Family places 100g personal bounty (Tier 2)
3. Marshal suggests 150g Crown bounty
4. King approves
5. **Total:** 250g
6. Hunter arrests alive
7. Service fee: 125g immediate
8. Sentenced to execution
9. Contingent: 125g + 25g forensic
10. **Total:** Hunter 250g, Forensic 25g

---

### Scenario 6: Evidence Tier Political Drama

1. King issues 5 Tier 0 Crown bounties
2. All targets are Opposition members
3. Opposition contests: "Show evidence or admit persecution"
4. Public examines ledger: all Tier 0 (no proof)
5. Scandal: "State bounties are faction warfare tools"
6. King's legitimacy damaged
7. Next succession, Opposition uses this
