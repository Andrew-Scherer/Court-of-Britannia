# Court of Britannia

A comprehensive documentation system for a permadeath Ultima Online roleplay shard focused on legitimacy, authority, and political consequence.

## Overview

This wiki contains complete game design documentation for Kingdoms of Britannia, covering constitutional systems, roles, mechanics, and public record systems. The documentation is formatted as a **GitHub Wiki** using Markdown files with structured navigation.

## Features

- **Constitutional Framework**: Complete governance structure with checks and balances
- **Timer-Based Systems**: Automated custody, succession, and record systems
- **Public Ledgers**: Transparent record-keeping for arrests, deaths, lands, and appointments
- **Role Documentation**: Detailed pages for King, Regent, Heir, Warden, Guards, Executioner, and more
- **Game Systems**: Jail, execution, bounty, housing, and property mechanics
- **GitHub Wiki Format**: Easy-to-navigate Markdown structure with sidebar navigation

## Key Pages

### Core Concepts
- [[Home]] - Main landing page
- [[Why Play|Why-Play]] - Player archetypes and appeal
- [[Philosophy]] - Design philosophy and principles
- [[New Player Experience|New-Player-Experience]]

### Roles & Governance
- [[Succession]] & [[Becoming King|Becoming-King]]
- [[Heir Presumptive|Heir]]
- [[Regent]]
- [[Claimant]]
- [[Official Roles|Roles]] & [[Unofficial Roles|Unofficial-Roles]]
- [[Tax Roles|Tax-Roles]] & [[Wildcard Roles|Wildcard-Roles]]

### Britain's Forces
- [[Guards]] - [[Marshal of the Guard|Marshal-Guard]], [[Captain of the Guard|Captain-Guard]], [[City Guard|City-Guard]]
- [[Magistrate]]

### Game Systems
- [[Jail System|Jail]] (timer-based custody)
- [[Execution Mechanics|Execution-Mechanics]]
- [[Bounty System|Bounty]]
- [[Housing]] & [[Property]]
- [[Permadeath & Downed States|Permadeath-Downed]]
- [[Crown Taxation|Crown-Taxation]]
- [[Seat System|Seat-System]]

### Guilds & Factions
- [[Guilds]]
- [[Emergent Factions|Emergent-Factions]]
- [[Guild Banking|Guild-Banking]] & [[Guild Upkeep|Guild-Upkeep]]
- [[Guild-Faction Economy|Guild-Faction-Economy]]
- [[One Faction Per Guild|One-Faction-Per-Guild]]

### Public Records
- [[Appointments Ledger|Appointments-Ledger]]
- [[Land Ledger|Land-Ledger]]
- [[Registry of Estates|Registry-Estates]]
- [[Jail Ledger|Jail-Ledger]]
- [[Death Ledger|Death-Ledger]]
- [[Treasury Ledger|Treasury-Ledger]]
- [[Tax Ledger|Tax-Ledger]]
- [[Faction Standing Chronicle|Faction-Standing-Chronicle]]

### Diplomacy & Economics
- [[Diplomacy]] - [[Emissary of the Crown|High-Emissary]], [[Envoy]], [[Diplomat]]
- [[Crown Liens|Crown-Liens]] & [[Seizure Enforcement|Seizure-Enforcement]]
- [[Player Controlled Vendors|Player-Controlled-Vendors]]
- [[Economic Philosophy|Economic-Philosophy]]

## Documentation Structure

### GitHub Wiki Format

All documentation is now in **Markdown format** (.md files) optimized for GitHub Wiki:

- **Home.md** - Main landing page (replaces index.html)
- **_Sidebar.md** - Contains structured navigation with all categories
- **74+ Content Pages** - All game mechanics, roles, and systems documented

### Navigation

The wiki uses GitHub Wiki navigation:
- **_Sidebar.md** contains the complete navigation structure with dropdown categories
- Internal links use wiki-style syntax: `[[Display Text|Page-Name]]`
- All pages are in the root directory for easy access

### Documentation Guidelines

All pages follow strict guidelines defined in `EDITING_RULES.md`:
- Single source of truth principle
- Constitutional tone
- No redundancy
- Mechanical focus over narrative
- Clear cross-referencing between related systems

## Design Philosophy

- **Authority Through Process**: No single role controls everything
- **Automatic Resolution**: Systems function without requiring human intervention
- **Public Accountability**: All use of force and power is recorded
- **Political Consequence**: Actions create leverage, not just outcomes
- **Timer-Based Systems**: Prevent gameplay stalls and bottlenecks
- **Player Agency**: Unofficial roles and emergent gameplay opportunities

## File Structure

Documentation is organized into folders matching the sidebar navigation:

```
Root Directory:
├── Home.md
├── _Sidebar.md
├── README.md
├── EDITING_RULES.md
├── Philosophy/
│   ├── Philosophy.md
│   ├── Britain-Sole-Civic.md
│   ├── New-Player-Experience.md
│   └── Why-Play.md
├── Guilds/
│   ├── Guilds.md
│   ├── Guild-Banking.md
│   ├── Guild-Upkeep.md
│   ├── Crown-Recognition.md
│   ├── Guild-Interactions.md
│   ├── Player-Controlled-Vendors.md
│   └── Settlement-Taxation.md
├── Factions/
│   ├── Emergent-Factions.md
│   ├── Factions-Leaderless.md
│   ├── One-Faction-Per-Guild.md
│   └── Faction-Ledger.md
├── Economy/
│   ├── Economic-Philosophy.md
│   ├── Crown-Taxation.md
│   ├── Guild-Faction-Economy.md
│   ├── Vendors-Commerce.md
│   ├── Crown-Liens.md
│   ├── Seizure-Enforcement.md
│   └── Tax-Roles.md
├── Housing-Property/
│   ├── Housing-Philosophy.md
│   ├── Historic-Property.md
│   ├── Housing-Not-Storage.md
│   ├── Sharing-Housing.md
│   ├── No-Player-Housing.md
│   ├── Property-Loss-Political.md
│   ├── City-Vs-Historic-Property.md
│   ├── Stewardship-Property.md
│   └── Decoration.md
├── Roles/
│   ├── Official/
│   │   ├── Roles.md
│   │   └── Commoners.md
│   ├── Royal/
│   │   ├── Becoming-King.md
│   │   ├── Regent.md
│   │   ├── Heir.md
│   │   └── Claimant.md
│   ├── Noble/
│   │   ├── Master-Treasury.md
│   │   ├── High-Emissary.md
│   │   ├── Land-Commissioner-Deputy.md
│   │   ├── Marshal-Guard.md
│   │   └── Property-Assessor.md
│   ├── Guard/
│   │   ├── Guards.md
│   │   ├── Captain-Guard.md
│   │   └── City-Guard.md
│   ├── Diplomacy/
│   │   ├── Diplomacy.md
│   │   ├── Envoy.md
│   │   └── Diplomat.md
│   ├── Unofficial/
│   │   └── Unofficial-Roles.md
│   └── Wildcard/
│       └── Wildcard-Roles.md
├── Justice/
│   ├── Magistrate.md
│   ├── Execution-Mechanics.md
│   ├── Jail.md
│   └── Bounty.md
├── Political-Systems/
│   ├── Succession.md
│   ├── Coronation.md
│   ├── Royal-Tenure.md
│   └── Seat-System.md
├── City-Services/
│   ├── Salary-System.md
│   ├── Housing.md
│   └── Property.md
├── Ledgers/
│   ├── Appointments-Ledger.md
│   ├── Land-Ledger.md
│   ├── Treasury-Ledger.md
│   ├── Registry-Estates.md
│   ├── Tax-Ledger.md
│   ├── Jail-Ledger.md
│   ├── Arrest-Records.md
│   ├── Death-Ledger.md
│   ├── Faction-Standing-Chronicle.md
│   ├── Item-Signatures.md
│   └── Player-Shops.md
├── Combat-Death/
│   ├── Permadeath-Downed.md
│   └── Guilds-Factions-At-War.md
└── Building-Crafting/
    ├── Sacking-Britain.md
    ├── Carpentry-Building-Parts.md
    ├── Contractors.md
    ├── Decoration-System.md
    ├── Construction-Limits-Upkeep.md
    ├── Building-Permissions-Access.md
    ├── Account-Skill-Boosts-Mastery.md
    └── Structural-Styling.md
```

## Conversion Notes

This wiki was converted from an HTML/CSS/JS website to GitHub Wiki Markdown format to:
- Simplify content iteration and updates
- Enable easier collaboration
- Improve readability and accessibility
- Reduce technical overhead
- Leverage GitHub's built-in wiki features

The original HTML files are preserved for reference but the Markdown files are the active documentation.

## License

Private repository - All rights reserved.
