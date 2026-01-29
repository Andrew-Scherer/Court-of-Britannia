# 🗳️ Housing Auctions
**The Merit-Based Path to Authority**

---

## 📜 Auction Philosophy
Auctions are the primary mechanical driver for land circulation in Britannia. They ensure that land—a scarce political resource—is earned through economic investment rather than granted through administrative favoritism.

> **The Platinum Rule:**
> *Every auction begins at 1gp. The market, not the Crown, determines the value of where you live.*

---

## ⏲️ The Auction Lifecycle

### 1. Triggering an Auction
A property enters the auction pool automatically when:
- **Character Permadeath**: A role-holder dies without an institutional or family successor (after a 72-hour grace period).
- **Eviction Finality**: An eviction notice period (72 hours) expires and the property is cleared.
- **Guild Dissolution**: A guild stone is removed or the guild disbands, forfeiting their seat.
- **New Release**: The [Land Commissioner] releases a newly mapped territory for claim.

### 2. The Bidding Window
- **Duration**: Standard auctions last **48 to 72 hours**.
- **Transparency**: All bids are public and announced via the [Property Ledger].
- **Anti-Sniping**: Any bid placed in the final 5 minutes extends the auction by an additional 10 minutes.

### 3. Eligibility & Constraints
- **Property Caps**: The UI will reject bids if the bidder already holds the maximum allowed properties (determined by their Social Class/Role).
- **Exile Restrictions**: Players with **Red** status or **Exile** status are mechanically barred from placing bids on Britain Civic properties.

---

## 📈 From Auction to Grade (1–10)
The final bid of an auction is the data point that defines the property's **Grade**.

1. **Price Capture**: At the conclusion of the auction, the system records the **Final Per-Tile Price** (Total Bid / Total Tiles).
2. **Category Comparison**: That price is compared against the current **Rolling 30-Day Average** for its category (Britain vs. Wilderness).
3. **Grade Assignment**:
    - **Grade 5**: Exactly matches the category average.
    - **Grade 1-4**: Lower than average (Remote, small, or low-demand).
    - **Grade 6-10**: Higher than average (Prestige, high-density, or strategic).
4. **The Sticky Rule**: This Grade is locked for that property until it is auctioned again. This protects owners from rising taxes after they invest in and "beautify" their land.

> **Note:** Private sales do **not** feed the 30-day auction averages. Only public auction results update the rolling category average.

---

## 💰 Economic Impact
- **Currency Sink**: 100% of the winning bid is **destroyed (Gold Sink)**. Auctions are the shard's most aggressive deflationary engine.
- **Tax/Upkeep Basis**: The Grade assigned at auction determines the ongoing [Property Tax] (Britain) or [Guild Upkeep] (Wilderness) multiplier for the property's lifetime.

---

## ⚖️ Strategic Interactions
- **Political Padding**: A wealthy guild may "overpay" for a property at auction to establish a **Grade 10** seat of power, signaling their dominance.
- **Speculation Risk**: Bidding on a property in an unstable region is risky; if the local jurisdiction changes to "Outlawed," your Grade 10 investment loses its legal protection.

---

## 🔗 Related Documents
- [[Property Types & Grading|Property-Types]] — Categorization and cost math.
- [[Land Commissioner|../Roles/Land-Commissioner]] — The role responsible for manual auction triggers.
- [[Property Ledger|../Ledgers/Property-Ledger]] — The public record of all bids.
