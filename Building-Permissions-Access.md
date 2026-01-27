# Building Permissions & Access Control

## Purpose

Building permissions exist to ensure that guild-controlled property can be **used, modified, and lived in** without relying on a single character.

Authority is distributed through the guild, not concentrated in the property owner.

This system is designed to be:

* resilient to player absence and permadeath
* easy to understand
* difficult to abuse
* consistent with classic Ultima Online housing expectations

---

## Core Principle

> **Stewards bind land.  
> Guilds operate land.**

Once a property is bound to a guild, all day-to-day use, access, and construction decisions are handled internally by the guild.

---

## Steward Authority (Defined Elsewhere)

The steward:

* legally owns the property
* consumes one property ownership slot
* binds the property to a guild

After binding:

* the steward does **not** manage access
* the steward does **not** assign builders or decorators
* the steward does **not** control doors
* the steward does **not** govern daily use

All operational control flows through the guild.

---

## Guild Operational Authority

The guild controls all operational aspects of a bound property, including:

* who may enter the property
* who may build structures
* who may decorate space
* how doors behave
* who may live or work there

These controls are managed using **guild-assigned roles**.

---

## Property Governor (Guild Role)

A **Property Governor** is a guild-level role assigned to manage a specific property.

Property Governors are:

* appointed and removed by guild leadership
* scoped to a specific property
* fully replaceable
* not tied to the steward
* not consuming property ownership slots

Property Governors exist to prevent operational lockup if any single player becomes inactive.

---

### Property Governor Permissions

A Property Governor may:

* assign and remove Builders
* assign and remove Decorators
* configure property access rules
* manage who may live, work, or operate on the property
* oversee construction and space usage

A Property Governor may **not**:

* unbind the property from the guild
* transfer ownership
* override steward-level rules
* bypass guild leadership authority

They administer.  
They do not own.

---

## Builder Role

Builders are authorized to **shape space** on guild-controlled land.

Builders may:

* create spaces through construction (as long as they have enough parts to do so)

Builders may **not**:

* change access rules
* assign other builders
* remove permissions
* override guild decisions

Builders build.  
They do not govern.

---

## Decorator Role

Decorators are authorized to control **cosmetic expression**.

Decorators may:

* place decorative, non-structural items
* arrange interiors and exteriors visually
* customize appearance of buildings without affecting function

Decorators may **not**:

* build or remove structures
* affect doors or access
* interfere with construction

Decoration and construction are intentionally separate permissions.

---

## Merchant Role

Merchants are authorized to **manage commerce infrastructure** on guild-controlled land.

Merchants may:

* assign vendors to players (including non-guild contractors)
* reassign vendors when needed
* oversee settlement commerce

Merchants may **not**:

* set prices on vendors
* access vendor inventory
* withdraw gold from vendors
* control individual vendor sales

Merchants administer infrastructure, not profits.

---

## Door Access & Inheritance

Doors do **not** have individual access lists.

All doors:

* automatically inherit access rules from the property
* enforce the same access for every door on that property
* update instantly when property access rules change

There are:

* no per-door permissions
* no door ownership
* no door micromanagement

Doors enforce authority; they do not define it.

---

## Property Access Rules

Property access rules are defined at the property level and may include:

* guild members
* specific guild ranks
* named individuals
* allied guilds
* public or restricted access

These rules apply uniformly to:

* all doors
* all interior spaces
* all constructed structures

---

## Failure States & Reset

If a property:

* changes ownership
* is abandoned by the guild
* loses its guild binding
* collapses under existing property rules

Then:

* all constructed structures are immediately destroyed
* all permissions are cleared
* the land reverts to its original static world state

No construction survives loss of control.

---

## Design Intent

This system ensures that:

* no single player can hold a guild hostage
* guilds remain functional through death and absence
* carpentry is powerful but safe
* decoration is expressive but non-destructive
* access control is simple and familiar
* housing remains shared, not hoarded

---

## Summary

> **Stewards bind land.  
> Guilds govern land.  
> Governors administer land.  
> Builders shape land.  
> Decorators express land.  
> Merchants enable commerce.**

Authority flows downward.  
No single role can collapse the system.
