# 🏛️ Property & Auctions

**Land as Scarce Political Resource**

---


## Core Philosophy


> *Land is not a reward for logging in. It is a political asset with weight, risk, and consequence.*

**The Fundamental Rule:**

More property = more exposure. No one accumulates land without accumulating risk.


## Why Stewards Cannot Assign at Whim

If Stewards could freely assign properties:


- 🔴 Favoritism accusations explode
- 🔴 Politics collapses into "who knows the Steward"
- 🔴 Land stops feeling earned or risky
- 🔴 The system loses legitimacy instantly


> **✅ Note**

This keeps Stewards:


- ✅ Socially important (everyone needs them)
- ✅ Politically pressured (everyone wants influence)
- ✅ Mechanically constrained (cannot play favorites)


## Property Assignment Methods

**Every property has exactly one assignment method.** This is metadata on the building. Stewards execute the method; they do not choose it.


## Multiple Property Ownership

The critical design question: **Should players and units be allowed to hold more than one property?**

**Answer: Yes — but with hard constraints.**


> **❗ Note**


## How Auctions Work (Keep Them Simple)

You do **not** want a deep economy sim. Auctions must be straightforward or they'll consume admin time and create endless disputes.


### Auction Announcement Example


> **Note**
> **AUCTION NOTICE**
> Property: **East Market Shop #3**  
> 
>             Duration: **48 hours** (ends Saturday 8pm)  
> 
>             Starting Bid: **500 gold**  
> 
>             Current High Bid: **—**  
> 
>             Bidder Restrictions: **Max 2 properties per individual**
> *Contact Land Steward to submit bids. All bids are public and logged.*


### Why Public Bids Matter

All bids are announced publicly (or at minimum, visible to other bidders). This creates:


- Pressure to outbid
- Social consequence (everyone knows who wants what)
- Legitimacy (no secret deals)
- RP fuel (rivalries emerge naturally)


## Eviction + Auctions = Political Engine

This is where property ownership, auctions, and eviction combine into a coherent political system.


### Scenario: House Eviction → Auction

**This is devastating without killing anyone.**

It creates:


- Non-violent punishment (eviction)
- Social mobility (auction)
- Wealth drain (bids remove currency)
- Narrative consequence (who lives where matters)


## Integration with Other Systems


### Permadeath Integration


- Individual dies → property SEALED → grace period (72h) → reverts to OPEN if no successor
- If property method = Auction → goes back to auction pool
- If property method = Royal Grant → King decides fate


### Noble House Integration


- Noble house properties use Internal Allocation method
- Primary holder changes internally; Steward only cares that the house still exists
- If a noble house dissolves → property reverts to Crown → King chooses Royal Grant or Auction


### Exile Integration


- Exiled individuals cannot bid in auctions
- Exiled individuals cannot receive Royal Grants (unless King explicitly pardons)
- Units harboring exiles risk eviction (which strips all properties)


### Role System Integration


- Property ownership is always role-bound
- Individuals enter roles ("Farmer #3", "Shopkeeper - South Market")
- Units hold collective roles ("Rowan Manor", "Guard Barracks")
- Access auto-updates when roles change


## What This System Produces in Play


| Design Goal | How Property System Achieves It |
|---|---|
| Stewards stay neutral | They execute methods, not choose winners |
| Land circulates | Limits prevent hoarding; death reverts to OPEN |
| Commoners can rise | Auctions provide merit-based path |
| Kings have leverage | Royal grants = rewards; eviction = punishment |
| Noble houses can fall | Eviction strips land; dissolution orphans manors |
| Conflict stays political | Auctions compete non-violently |
| Wealth drains | Auction bids remove currency from system |


## Common Questions


### Q: Can a commoner outbid a noble house?

**A:** Yes. Auctions are merit-based (highest bid wins). If a wealthy merchant outbids a noble house, the house loses. This creates excellent drama.


### Q: Can the King rig an auction?

**A:** Indirectly. The King can fund a preferred bidder secretly, but cannot override the auction result directly. If discovered, this creates scandal. Rigging is possible but risky.


### Q: What if no one bids in an auction?

**A:** Failed auction → property reverts to OPEN → King may convert to Royal Grant or re-auction later. No one is forced to take unwanted property.


### Q: Can noble houses lose their manor permanently?

**A:** Yes. If evicted and the King auctions it, and the house cannot/does not bid, they become homeless. A noble house without land is weakened but still exists. Homelessness is a valid state.


### Q: How do I know what properties are available?

**A:** Ask a Steward. They maintain public knowledge of OPEN properties, pending auctions, and upcoming grants. Alternatively, a Public Property Board could list this (bulletin board or gump).


### Q: Can units share a single property?

**A:** No. Each property is assigned to exactly one unit or individual role. However, units can have multiple residents/members who share access. Sharing happens inside the unit, not across units.


### Q: What happens to items in an auctioned property?

**A:** Per Model 1 (if it's in the house, it's at risk), eviction gives 72 hours to remove belongings. After that, items left behind transfer with the property or are considered abandoned. Auction winners inherit an empty building unless the previous occupant left things behind.


## Final Simplified Rules


> **✅ Note**
> **Use this verbatim:**
> *Properties are assigned by method, not discretion.
>             Royal grants are decided by the Crown.
>             Noble house and guild properties are allocated internally.
>             Private properties are won by auction.
>             Individuals and units may hold limited multiple properties, but each additional holding increases exposure to eviction and loss.*


## Technical: Property Metadata

Each property in the system needs these fields:


| Field | Type | Purpose |
|---|---|---|
| PropertyId | string | Unique identifier (e.g., "BRI-017") |
| AssignmentMethod | enum | RoyalGrant, Auction, InternalAllocation, AutoReversion |
| PropertyType | enum | Manor, Cottage, Shop, Farm, Hall, Office |
| State | enum | OPEN, HELD, SEALED, EVICTING |
| RoleHolder | Mobile/Unit | Current occupant (individual or unit) |
| MaxOccupancy | int | How many residents (if unit property) |
| AuctionData | object | If method=Auction: start time, end time, current high bid, bidder |

This metadata drives all assignment logic without requiring Steward judgment calls.


## Succession Mechanics & Role Transfer

When a role changes hands (death, abdication, election), property ownership must transfer cleanly without manual intervention.


### The Transfer Process


### What Transfers vs. What Persists


| Element | On Succession | Reasoning |
|---|---|---|
| House Ownership | Transfers to new role holder | Keys follow the role, not the person |
| Personal Co-owners | Cleared/wiped | Clean succession, no inherited personal friends |
| Role-based Staff | Persists (re-added from template) | Guards, stewards are institutional, not personal |
| Institutional Bans | Persist | Exiles remain exiled regardless of who holds role |
| Personal Items | Depends on design choice | See edge cases below |
| Vendors | Persist if institutional | Court vendors remain; personal shops may pack up |
| Sign Name | Shows role, not person | "King of Britain's Palace" not "Bob's House" |


## Critical Edge Cases


### Case 1: Role-Holder Dies Inside Estate


> **❗ Note**

**Solution: Interregnum State**


- On death of role-holder: Estate enters INTERREGNUM state
- During interregnum:
                
Doors remain unlocked OR designated steward NPC can open
No lockdowns can be added
No evictions can occur


- On new role assignment: Ownership locks back down
- Duration: Until successor is assigned (max 72 hours)


### Case 2: Personal Items Left Behind

**Design Options:**


> **Note**
> All items in role-held estates are institutional property. When King dies, successor inherits everything. Simple, clear, RP-friendly.
> **Pros:** Clean, no edge cases, encourages use of personal storage elsewhere
> **Cons:** Players may feel item loss is harsh


> **Note**
> System identifies "personal" containers (marked somehow) and auto-packs them to a neutral vault or executor.
> **Pros:** Players keep personal items
> **Cons:** Complex, requires container tagging system


> **Note**
> 72-hour window where old character can enter to remove items before lockdown.
> **Pros:** Fair warning system
> **Cons:** Requires ghost/spirit access, creates awkward RP


### Case 3: Role-Swap Exploitation


> **❗ Note**

**Mitigations:**


- **Witness Requirement:** Role assumption requires another player in official capacity to witness
- **Location Requirement:** Must occur at designated Seat Hall (throne room, court)
- **Cooldown Timer:** 10-30 minute cooldown before swapping roles again
- **Log Everything:** All role assumptions logged with timestamp and witness


### Case 4: Multi-Property Collapse

When a noble house holding 3 properties (manor + 2 auxiliaries) is evicted:


- **Eviction applies to ALL properties simultaneously**
- 72-hour notice applies to all
- At expiry, all 3 revert to OPEN status
- Can be re-granted or auctioned separately

**Impact:** Total collapse is intentionally devastating. Makes eviction a serious political weapon.


### Case 5: Auction Winner Already at Max


> **❗ Note**

**Solution:**


- Auction UI checks property count BEFORE accepting bid
- If at max: "You must relinquish a property before bidding"
- Alternative: Allow "conditional bid" — player designates which property to forfeit if they win


## ServUO Implementation Pseudocode


## Integration: Succession + Auctions + Eviction


### Complete Lifecycle Example

**Result:** Complete property lifecycle without staff intervention. System enforces rules; politics provides drama.


## Castle-Specific Succession

For complex buildings like Britain Castle with multiple zones and apartments:


### What Changes When King Dies


| Element | Behavior |
|---|---|
| Royal Suite access | Transfers to new King |
| Crown administrative rights | Transfers to new King |
| Chancellor's room | NO CHANGE (separate role) |
| Guard barracks | NO CHANGE (group-owned) |
| Noble apartments | NO CHANGE (separate roles) |
| Public zones | NO CHANGE (always accessible) |


> **✅ Note**


## Staff Access Groups (Prevents Re-Adding Everyone)

Define access by role groups, not individual names:


| Access Group | Members | Access Granted |
|---|---|---|
| RoyalFamily | King, Queen, Heirs | Private royal zones, administrative |
| RoyalGuard | Marshal, Guard Captain, Guards | Guard zones, patrol routes |
| CastleStaff | Stewards, servants, cooks | Service areas, kitchens, storage |
| Council | Chancellor, Magistrates, advisors | Council chamber, archives |
| Envoy | Temporary diplomatic guests | Guest quarters (time-limited) |

**When staff hired/fired:**


- Add/remove from group membership
- No manual door edits needed
- Access automatically updates based on group


## Final Mental Model


> *Properties are not owned by people. They are held by roles. When someone dies, the role remains; only the occupant changes.*

**This means:**


- Death doesn't break the housing system
- Succession is automatic and logged
- Access follows institutional logic, not personal favor
- Eviction is devastating but clean
- Auctions create legitimate upward mobility
