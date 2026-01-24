# Editing Rules for Kingdoms of Britannia Wiki

This document contains the rules and guidelines for editing the wiki pages. These rules ensure consistency, maintainability, and prevent information conflicts.

---

## Core Principles

### 1. Single Source of Truth Files
**Try to keep information about something on a single page.**

- **Example:** `roles.html` should contain a **general overview** about each role, but `steward.html` will contain **ALL specific information** about the Steward role.
- **Rationale:** If a general page contains too much information about a specific topic, that topic should be contained in its own specific page. This prevents conflicting points of information throughout the wiki.
- **Result:** Information should be **incredibly modular**.

**When editing:**
- Before adding detailed information to a general/overview page, ask: "Does this topic have its own dedicated page?"
- If yes → Link to that page instead of duplicating content
- If no, but the content is substantial → Consider creating a dedicated page
- Keep overview pages focused on summaries and navigation
- Keep specific pages focused on exhaustive detail

---

## Additional Guidelines

### 2. Consistent Styling
- All HTML pages share the same CSS variables defined in `:root`
- Maintain the dark fantasy aesthetic (dark blues, gold accents, red highlights)
- Use consistent class names: `.header`, `.nav`, `.container`, `.quote`, `.card`, `.principle`, `.warning`
- Icons in headings should match the existing style (emoji or consistent icon set)

### 3. Navigation System
**Current Implementation:** Centralized Navigation via navigation.js

- **nav-styles.css** contains all navigation styling (dropdowns, hover effects, colors)
- **navigation.js** contains the centralized navigation HTML structure
- All pages load navigation dynamically from navigation.js
- **To change navigation:** Edit only navigation.js - changes propagate to all pages automatically

**Navigation Structure in HTML Pages:**
```html
<link rel="stylesheet" href="nav-styles.css">

<nav class="nav">
    <!-- Navigation content loaded dynamically from navigation.js -->
</nav>

<script src="navigation.js"></script>
```

**Current Navigation Menu Structure (as defined in navigation.js):**
- Home
- Philosophy
- Bloodlines
- Houses
- **Roles ▼** (dropdown)
  - All Roles
  - King
  - Heir Presumptive
  - Regent
  - Claimants
  - Land Commissioner & Steward
  - Guards
- **Game Systems ▼** (dropdown)
  - Succession & Crown Transfer
  - Coronation Ceremony
  - Combat & Death
  - Downed State
  - Permadeath
  - Jail System
  - Housing & Land
  - Property & Auctions
  - Bounty System
  - Seat System
- **Special Items ▼** (dropdown)
  - Noble Appointments Ledger

**Important Rules:**
- **To add/remove pages from navigation:** Edit navigation.js only
- **To add a new dropdown menu:** Add the dropdown structure in navigation.js
- Active page highlighting is handled automatically by checking the current page URL
- Keep nav-styles.css synchronized if changing dropdown styling/behavior
- When creating new pages, ensure they include the navigation.js script

**Benefits of Centralized Navigation:**
- Single source of truth for navigation structure
- No need to update navigation on every HTML file
- Easier to add/remove pages
- Consistent navigation across all pages

### 4. Cross-Referencing
- When mentioning a topic that has its own page, link to it
- Use inline links with appropriate styling: `<a href="page.html" style="color: var(--accent);">Topic Name</a>`
- Include "See [Page Name] for complete details" when referencing comprehensive information elsewhere

### 5. Quote and Principle Formatting
- Use `.quote` divs for thematic/philosophical statements
- Use `.principle` divs for structured rule explanations
- Use `.warning` divs for important caveats or alerts

### 6. Tone and Voice
- Maintain the design document voice: analytical, intentional, design-focused
- Use strong declarative statements for rules
- Explain the "why" behind systems, not just the "what"
- Write as if explaining to fellow game designers, not players

### 7. Footer Links
- Include back navigation in footers where appropriate
- Keep footer minimal and consistent

---

## Page Structure Template

When creating new pages, follow this structure:

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>[Page Topic] - Kingdoms of Britannia</title>
    <style>
        /* Standard CSS from other pages */
    </style>
</head>
<body>
    <header class="header">
        <h1>[Icon] [Page Title]</h1>
        <p>[Subtitle/Tagline]</p>
    </header>
    
    <nav class="nav">
        <!-- Full navigation with current page marked active -->
    </nav>
    
    <main class="container">
        <!-- Content -->
    </main>
    
    <footer>
        <p><a href="index.html">← Back to Home</a></p>
    </footer>
</body>
</html>
```

---

## Before Making Changes

**Always ask:**
1. Am I creating duplicate information that exists elsewhere?
2. Am I updating ALL instances if this information appears in multiple places (navigation, links, etc.)?
3. Does this change maintain the single source of truth principle?
4. Am I maintaining consistent styling and tone?

---

**Last Updated:** January 23, 2026
