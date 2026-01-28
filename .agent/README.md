# Game Systems Ideation Agent

Welcome to the **Game Systems Ideation Agent** for Kingdoms of Britannia! This specialized agent helps you design, validate, and iterate on game systems that align with your core philosophical principles.

---

## What Is This?

This is a custom agent specifically designed to:
- ✅ Design new game systems from philosophical principles down to granular mechanics
- ✅ Validate existing systems against your core philosophy
- ✅ Spot contradictions and conflicts between systems
- ✅ Ensure every system serves multiple player archetypes
- ✅ Maintain integration across your complex political simulation

**This is not just a documentation assistant—it's a design partner** that understands your shard's philosophy and will challenge proposals that don't fit.

---

## How to Use the Agent

### Invoking the Agent

When you want to work on game systems, start your conversation with:

```
@game_systems_ideation [your request]
```

**Example requests:**
- `@game_systems_ideation I want to design a naval warfare system`
- `@game_systems_ideation Does the current bounty system align with our philosophy?`
- `@game_systems_ideation How does the jail system interact with guilds and factions?`
- `@game_systems_ideation I think the permadeath system needs refinement`

### What the Agent Knows

The agent has deep knowledge of:
- All philosophy documentation (`/Philosophy`)
- All existing game systems and roles
- Your three core pillars (Death, Power, Legitimacy)
- Your design principles (Pressure not Chores, Autonomy, etc.)
- All eight player archetypes (Simpson's 4 + your extended 4)
- Your complete role hierarchy and ledger systems

---

## Workflows

Use these structured workflows for systematic design and validation:

### `/design-new-system`
**Use when:** Creating a completely new game system from scratch

**What it does:**
- Guides you through philosophical validation
- Checks player archetype service
- Designs core mechanics
- Maps integration points
- Identifies edge cases
- Creates documentation plan

**Start with:** `/design-new-system`

---

### `/validate-system`
**Use when:** Checking if an existing system aligns with core philosophy

**What it does:**
- Evaluates philosophical alignment
- Checks all design principles
- Assesses player archetype service
- Analyzes integration and records
- Identifies edge cases and failure modes
- Provides overall rating and recommendations

**Start with:** `/validate-system [System Name]`

---

## Templates

### System Proposal Template
Location: `.agent/templates/system-proposal-template.md`

Use this template when creating proposals for new systems. It includes:
- Philosophical alignment section
- Mechanics design
- Integration planning
- Edge case analysis
- Player archetype service
- Review checklist

**Copy the template and fill it out for structured system design.**

---

## Agent Personality & Approach

### What to Expect

The agent will:
- **Challenge proposals that violate core philosophy**
  - If you suggest something that contradicts your pillars, it will say so
  
- **Offer alternatives, not just criticism**
  - Won't just say "no" - will suggest refinements
  
- **Think interconnected**
  - Always considers how systems interact
  
- **Protect player archetypes**
  - Ensures systems serve multiple motivations
  
- **Embrace dramatic failure**
  - Systems should make loss interesting, not punishing

### Example Interaction

**You:** "What if we let the King personally execute anyone?"

**Agent:**
```
❌ PHILOSOPHICAL VIOLATION

Conflicts with:
1. "Roles Create Pressure, Not Chores"
   - This removes Executioner role relevance
   - Eliminates checks and balances

2. "Power Is Political"
   - Authority needs justification
   - This makes King above legitimacy

Alternative:
King can ORDER executions (political power) but Executioner 
carries them out (procedural check). Magistrate can review 
legality (legitimacy check). This maintains pressure while 
preserving institutional structure.
```

---

## When to Use This Agent

### ✅ Good Use Cases
- Designing new game systems
- Validating existing mechanics
- Spotting contradictions between systems
- Ensuring philosophical coherence
- Planning system integration
- Checking for griefing vulnerabilities
- Iterating on incomplete systems

### ❌ Not Ideal For
- Simple documentation edits (use normal workflow)
- Writing lore or narrative content
- Technical implementation details
- Server configuration
- Art/visual design

---

## Quick Start Examples

### Example 1: New System Design
```
@game_systems_ideation I want to add a reputation system 
for tracking player behavior
```

The agent will:
1. Check philosophical alignment (which pillars?)
2. Ask clarifying questions (who tracks it? public or private?)
3. Identify archetype service (who benefits?)
4. Map integration (how does this interact with ledgers?)
5. Spot edge cases (what happens when someone dies?)
6. Propose concrete mechanics aligned with your philosophy

---

### Example 2: System Validation
```
@game_systems_ideation /validate-system Bounty
```

The agent will:
1. Analyze current Bounty.md documentation
2. Check against all three pillars
3. Validate design principles
4. Assess player archetype service
5. Check integration with Guards, Jail, Death systems
6. Identify gaps or contradictions
7. Provide rating and recommended improvements

---

### Example 3: Integration Check
```
@game_systems_ideation How should guilds interact 
with the housing system?
```

The agent will:
1. Review existing Guild and Housing documentation
2. Identify philosophical principles at play
3. Spot potential conflicts
4. Suggest integration mechanics
5. Map affected ledgers and records
6. Consider edge cases (guild collapse, leader death)
7. Propose solutions aligned with your philosophy

---

## Tips for Best Results

### Be Specific About Context
**Instead of:** "Is this a good idea?"  
**Try:** "Does a merchant reputation system align with our philosophy, considering we already have public ledgers?"

### Use Workflows for Structure
**Instead of:** Free-form brainstorming  
**Try:** `/design-new-system` to follow a structured process

### Challenge the Agent Back
The agent is designed to be challenged. If it says something doesn't fit, ask:
- "What would make this fit?"
- "Could we modify X to preserve Y?"
- "What's the smallest change that would align this?"

### Iterate
Don't expect perfect systems on the first try. Use the agent to:
1. Propose initial idea
2. Get feedback and refinement
3. Check integration
4. Validate philosophy
5. Iterate again

---

## Philosophy Quick Reference

### Three Core Pillars
1. **Death Is Permanent** - Permadeath creates weight, tests institutions
2. **Power Is Political** - Authority requires recognition, justification, defense
3. **Legitimacy Is Everything** - "Why should anyone accept your rule?"

### Design Principles
- **Roles Create Pressure, Not Chores** - Force/delay/reframe/endanger decisions
- **Systems Run Without Babysitting** - Timers, NPCs, auto-resolution
- **Inaction Has Consequences** - Social/political pressure, not mechanical penalties
- **Bold Failure Is Rewarded** - Dying spectacularly > surviving quietly

### Player Archetypes (Serve Multiple)
- Socializers, Killers, Achievers, Explorers (Simpson's 4)
- Schemers, Institutional Loyalists, Crafters, Tragic Players (Extended 4)

### Anti-Pattern to Avoid
- **Parasitical Griefers** - Counter with public records, permadeath consequences, role scarcity

---

## Getting Help

### If the agent seems off-track:
1. Reference specific philosophy documents
2. Use workflows for structure
3. Ask for alternatives
4. Challenge assumptions

### If you need to teach the agent something new:
1. Update relevant documentation in `/Philosophy` or other folders
2. The agent pulls from your wiki structure

### If you want to improve the agent:
1. Edit `.agent/agents/game_systems_ideation.md`
2. Add new workflows to `.agent/workflows/`
3. Create new templates in `.agent/templates/`

---

## File Structure

```
.agent/
├── agents/
│   └── game_systems_ideation.md    # Main agent configuration
├── workflows/
│   ├── design-new-system.md        # Workflow for new systems
│   └── validate-system.md          # Workflow for validation
├── templates/
│   └── system-proposal-template.md # Template for proposals
└── README.md                        # This file
```

---

## Next Steps

1. **Try the agent with an existing system:**
   ```
   /validate-system Permadeath
   ```

2. **Design something new:**
   ```
   /design-new-system
   ```

3. **Ask a complex integration question:**
   ```
   @game_systems_ideation How should faction warfare 
   interact with the property system?
   ```

---

**Remember:** This agent is here to help you maintain philosophical coherence while designing complex, interlocking political systems. Use it to challenge your ideas, spot contradictions, and ensure every system creates pressure, not busywork.

Happy designing! 🎭⚔️👑
