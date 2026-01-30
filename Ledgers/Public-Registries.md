# 📋 Public Registries
**The Institutional Memory of Britain**

---

## 🎖️ Appointments & Offices
The **Appointments Ledger** records the current and historical occupancy of all [Civic Seats].

### Granular Data Tracked:
- **Seat ID**: (e.g., `Britain.King`, `Britain.Marshall`).
- **Holder Account**: The player currently occupying the seat.
- **Appointment Date**: When the role was conferred.
- **Conferred By**: The authority who signed the appointment (e.g., *By Royal Decree of King Arthur*).
- **Vacation Reason**: Why the previous holder left (Death, Dismissal, Resignation).

---

## 🚩 Register of Standing
The definitive record of guild and individual legitimacy.

### Granular Data Tracked:
- **Entity ID**: The Guild or Individual name.
- **Current Standing**: (Recognized, Tolerated, Outlawed).
- **Warrant Status**: Active warrants for the entity or its leadership.
- **Lien Status**: Active [Crown Liens] being intercepted.
- **Last Tribute**: Date and amount of the last fealty payment to the Crown.

---

## 🏰 Property Ledger
Tracks the ownership and valuation of all land in the realm.

### Granular Data Tracked:
- **Property ID**: Unique map-coordinate ID.
- **Owner Account**: The individual or [RoleSeat] that holds the title.
- **Acquisition Type**: (Auction, Royal Grant, Inheritance).
- **Final Sale Price**: The per-tile price from the last public auction.
- **Property Grade**: The derived [Grade 1-10] used for tax/upkeep calculation.

---

## 📖 Mortuary Rolls
The public record of all character deaths.

### Granular Data Tracked:
- **Casualty ID**: Unique ID for the death event.
- **Victim Name**: The character who died.
- **Killer Name**: (If identified by Forensics) The character responsible.
- **Death Classification**: (Murder, Combat, Natural/Accidental).
- **Forensic State**: (Unexamined, Verified, Annotated).
- **Clemency Status**: Whether a Royal Pardon has been issued for this event.

---

## 🔗 Related Systems
- [[Housing Auctions|../Housing-Property/Housing-Auctions]] — How grades are calculated.
- [[Justice System|../Justice/Justice-System]] — The rules of death and status.
- [[Succession|../Political-Systems/Succession]] — How roles and property move.
