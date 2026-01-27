# Vendors & Commerce

## Purpose

Vendors exist to support crafting, trade, and transient play within guild-controlled settlements.

They allow players to sell goods while offline, support internal guild logistics, and create living markets—without reintroducing hoarding, free storage, or economic stagnation.

Vendors are settlement infrastructure.  
Profits belong to crafters—unless taxed.

---

## Core Principles

* Vendors belong to the settlement.
* Profits belong to the crafter.
* Storage is never free.
* Commerce may be taxed.
* Vendors enable trade.
* Guilds control the terms under which trade occurs on their land.

---

## Vendor Placement & Limits

Vendors may only be placed on guild-controlled property.

### Vendor Cap

Each property has a maximum number of vendors based on its size.

**1 vendor per 10 property tiles**

Examples:

* 10-tile property → 1 vendor
* 100-tile property → 10 vendors
* 500-tile property → 50 vendors

This prevents vendor sprawl while scaling naturally with settlement size.

---

## Vendor Assignment

Each vendor has exactly one assigned owner at a time.

### Assigned Vendor Owner

The assigned owner may:

* stock and remove items
* set prices
* withdraw gold (after taxes)
* manage their vendor inventory

No other player may:

* remove items
* withdraw gold
* change prices

Guild leaders, merchants, and governors cannot access another player's vendor inventory or untaxed gold.

This protects crafters from internal theft or interference.

---

## Merchant Role (Guild Role)

Guilds may assign one or more members the **Merchant** role.

Merchants:

* assign vendors to players
* reassign vendors when needed
* oversee settlement commerce

Merchants do **not**:

* set prices
* access inventory
* withdraw gold
* control individual vendor sales

They administer infrastructure, not profits.

---

## Vendor Ownership & Death

If a vendor's assigned owner dies:

* the vendor becomes unassigned
* inventory remains intact
* gold remains intact
* the vendor continues operating

Only a Merchant may reassign the vendor to a new player.

This preserves settlement infrastructure while respecting permadeath.

---

## Vendor Costs (Anti-Hoarding System)

Vendors incur two daily costs, both scaled to the economy using the average tile price.

### 1. Base Vendor Rent

* Every vendor charges a daily base rent
* The rent is a small percentage of the average tile price
* This cost applies even if:
  * the vendor is empty
  * no items sell
  * prices are set to 1 gold

This prevents free vendors and vendor spam.

### 2. Inventory Rent (Per Item)

* Each item (or stack) on a vendor incurs an additional daily inventory rent
* Inventory rent is also derived from the average tile price
* The listed sale price of the item is irrelevant

This ensures:

* large inventories cost more than small ones
* pricing tricks cannot bypass upkeep
* long-term storage becomes economically expensive

---

## Guild Commerce Taxation

Guilds may impose a settlement-wide commerce tax on all vendor sales occurring on their property.

* The tax rate is set by the guild
* The tax applies automatically at the point of sale
* Taxed gold is diverted to the guild treasury
* The remaining gold is credited to the vendor owner

Tax rates may range from:

* 0% (tax-free market)
* to 100% (guild-controlled commerce)

This power allows guilds to:

* fund settlement upkeep
* support wars or infrastructure
* operate guild-run economies
* or exploit crafters if they choose

The system does not protect players from unfair taxation.  
Economic pressure and exit are the checks.

*(Exact taxation mechanics are defined in a separate document.)*

---

## Vendor Failure

Vendor costs are paid from the vendor's gold.

If a vendor cannot pay its rent:

* it quits
* it leaves the world
* all inventory is removed with it

There is no partial failure and no grace-period abuse.

---

## Commerce Log

Each property maintains a **Commerce Log**, which is a read-only audit interface.

The Commerce Log displays:

* all vendors on the property
* assigned owner (or unassigned)
* vendor status
* current daily upkeep
* gold currently held
* recent sales
* recent withdrawals
* taxes collected per vendor

### Access to the Commerce Log

The Commerce Log may be viewed by:

* the Merchant role
* Property Governors
* Guild leadership
* individual vendor owners (their own detailed logs only)

It cannot be viewed by:

* regular guild members
* visitors
* other vendors' owners

The log provides transparency without exposing private records.

---

## What Vendors Are For

Vendors support:

* crafter income
* guild armories and supply vendors
* internal discounted markets
* public or private trade hubs
* offline selling and transient play

Vendors are not vaults.

---

## Design Intent

This system ensures that:

* crafters retain control over their goods and pricing
* guilds retain sovereignty over commerce on their land
* storage carries an ongoing economic cost
* hoarding is naturally discouraged
* inflation automatically adjusts vendor costs
* no hard caps or activity policing are required

Commerce is free—but never neutral.

---

## Summary

Vendors are infrastructure.  
Merchants assign them.  
Crafters control them.  
Guilds tax them.  
Storage costs money.

Markets grow with settlements, and settlements decide who profits.

---

# Vendor Contractors

## Purpose

Vendor Contractors allow settlements to participate in commerce with **non-guild members** while preserving trust, fairness, and player agency.

This system enables crafters to sell goods within settlements **without requiring guild membership**, while ensuring that merchants and guild leadership cannot confiscate labor, inventory, or profits through permission abuse.

Vendor Contractors are economic participants, not political actors.

---

## Definition

A **Vendor Contractor** is a player who is assigned ownership of a vendor on guild-controlled property without becoming a member of the guild.

Vendor Contractors:

* provide goods and services
* participate in settlement commerce
* retain full ownership of their inventory and earnings (subject to taxes)

Vendor Contractors do **not**:

* gain guild membership
* gain political rights
* gain property access
* gain governance authority

---

## Vendor Assignment

### Eligibility

* Vendor Contractors **do not need to be guild members**
* Any player may be assigned a vendor by a Merchant

### Assignment Authority

* Vendors are assigned by the **Merchant** guild role
* Assignment is explicit and recorded in the Commerce Log
* Each vendor has **exactly one assigned owner**

Assignment grants **vendor access only**.

---

## Contractor Rights

While assigned to a vendor, a Vendor Contractor may:

* stock items
* remove items
* set prices
* withdraw gold (after settlement taxes)
* view their own vendor's detailed logs

No other player may access the contractor's vendor inventory or gold.

---

## Contractor Limitations

Vendor Contractors may **not**:

* access guild storage
* access doors or buildings
* assign other contractors
* bypass settlement taxes
* control vendor placement
* access other vendors' logs or inventory

Vendor access is isolated and scoped.

---

## Revocation of Vendor Access

Vendor access may be revoked **at any time** by a Merchant.

### On Revocation

When vendor access is revoked:

* the vendor becomes **unassigned**
* the vendor immediately stops selling
* **all inventory** is transferred to the contractor's private bank
* **all gold** is transferred to the contractor's private bank
* the vendor remains in place, empty

No inventory or gold may be seized, redistributed, or reassigned.

Revocation does not require cause or notice.

---

## Contractor Death (Permadeath)

When a Vendor Contractor dies:

* the vendor becomes **unassigned**
* the vendor immediately stops selling
* **all inventory** is transferred to the contractor's private bank
* **all gold** is transferred to the contractor's private bank
* the vendor remains in place, empty

The Merchant may reassign the vendor to another player.

The new assignee receives **no inherited inventory or gold**.

---

## Voluntary Exit

If a Vendor Contractor voluntarily relinquishes their vendor:

* the vendor becomes unassigned
* inventory and gold are transferred to the contractor's bank
* the settlement retains the vendor infrastructure

This allows contractors to exit without penalty.

---

## Property Loss or Guild Collapse

If the property hosting the vendor:

* changes hands
* enters destruction
* or the guild collapses or relocates

Then:

* all vendors on the property are destroyed
* inventory and gold are transferred to their respective owners' banks

No contractor loses items due to political outcomes.

---

## Commerce Log Visibility

Vendor Contractors may view:

* their own vendor's sales history
* their own withdrawals
* taxes applied to their sales

They may **not** view:

* other vendors' logs
* settlement-wide commerce data

This preserves privacy while maintaining transparency.

---

## Design Guarantees

This system guarantees that:

* merchants cannot confiscate contractor inventory
* guilds cannot profit directly from contractor death
* contractors can always exit cleanly
* economic participation does not require political allegiance
* abuse is social, not mechanical

Trust is enforced by rules, not goodwill.

---

## Summary

> **Vendor Contractors sell within settlements,  
> but never surrender ownership of their work.**

Merchants manage access.  
Guilds tax commerce.  
Contractors keep their labor.

This separation enables vibrant markets without internal exploitation.
