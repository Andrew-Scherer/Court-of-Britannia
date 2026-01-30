**Status:** Ship-Ready (v1.0)
**Last Edited:** 2026-01-29
**Scope:** Structural Styling (Visual variants for confirmed buildings)
**Integrated With:** [Carpentry](Carpentry-Building-Parts.md), [Permissions](Building-Permissions-Access.md), [Decoration](Decoration-System.md)
**Explicitly Excludes:** Collision, Access Permissions, Ownership, Upkeep

---

# Structural Styling

Structural Styling allows builders to transform neutral construction pieces into themed structures (e.g., stone keeps, orc palisades) without changing the underlying construction mechanics or collision.

## Core Rules

*   **Visual Only:** Styling changes how walls, floors, and roofs look. It does **not** affect collision, durability, or ownership.
*   **Confirmed Construction:** Only finished, confirmed structural elements can be styled.
*   **Reversible:** Styling consumes no resources and can be changed or removed at any time by authorized builders.
*   **No Budget Cost:** Styling does not count against decoration limits.

## Authority & Enforcement

*   **Builder Control:** Only players with **Builder** permission can apply styles.
*   **Active Themes:** Styles are limited to the settlement's currently active themes. If a theme is removed, all matching styles revert to neutral.
*   **Governance:** Settlement leadership can mass-revert styling by theme or player to correct griefing or aesthetic issues.

## Selection & Process

1.  **Select:** Builder selects a structural element. The selection type (wall, floor, etc.) locks the batch to that type.
2.  **Style:** Choose a variant from active themes (e.g., "Orc Wall").
3.  **Apply:** The change is immediate. No preview is needed as it is free and reversible.
