# 🏘️ Property Types & Grading
**The Dual Model of Britannian Land**

---

## 📜 The Primary Distinction
Britannia uses a binary classification for all land. A property is either **Britain Civic** or **Wilderness Territorial**. This determines the jurisdiction and the economic cost-basis.

| Feature | **Britain Civic Property** | **Wilderness Territorial Property** |
| :--- | :--- | :--- |
| **Zone** | Within Britain Walls / Suburbs | Wilderness, Ruins, Frontier |
| **Authority** | Crown (Civic Law) | Guild (Territorial Authority) |
| **Mechanics** | [Eviction], [Harboring] Revocation | [Upkeep] Failure, Political Outlawry |
| **Revenue** | 100% to **Britain Treasury** | 100% to **VOID (Gold Sink)** |
| **Valuation** | Rolling 30-Day Britain Average | Rolling 30-Day Wilderness Average |

---

## 📈 The Grading Scale (1–10)
Rather than rigid roles like "Cottage" or "Manor," every property is assigned a **Grade** based on its market value at auction.

### How Grade is Determined
- **Auction Capture**: When a property is sold at auction, the **final per-tile price** is recorded.
- **Grading Scale**: The property is classified on a scale of **1 to 10** based on how its price compares to the category average.
    - **Grade 1-3**: Low-value/Remote structures (Lower multipliers).
    - **Grade 5**: Market Average.
    - **Grade 8-10**: High-value/Prestige structures (Higher multipliers).

### The "Sticky Grade" vs. Dynamic Cost
Once a grade is established at auction, it is **static (sticky)** until the next time the property is auctioned. However, the gold cost of that grade is **dynamic (stepped up)**:
- **The Grade (1-10)**: Does not change if the owner renovates or the neighborhood improves.
- **The Per-Tile Cost**: Recalculates every 30 days based on the current **Category Average**.
- **The Result**: If the market value for Grade 6 properties rises from 1,000gp to 3,000gp, the owner's upkeep/tax will reflect that new "stepped up" market reality.

---

## 💰 Calculation Logic
To prevent urban prestige from inflating frontier costs, the system uses two separate **Rolling 30-Day Averages**:

1. **Britain Civic Category**: Tracks all auction/sales data within Britain Walls.
2. **Wilderness Territorial Category**: Tracks all auction/sales data outside the city.

**Monthly Cost = (Category Average) × (Tile Count) × (Grade Multiplier)**

---

## 🔗 Related Documents
- [[Britain as Sole Civic System|../Philosophy/Britain-Sole-Civic]]
- [[Justice System|../Justice/Justice-System]] — Harboring and Eviction.
- [[Crown Taxation|../Economy/Crown-Taxation]] — The two cost basises.
- [[Guild Upkeep|../Guilds/Guild-Upkeep]] — Mechanical costs for Wilderness property.
