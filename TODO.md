# ZZZ Damage Calculator - TODO

This document outlines the development tasks to evolve the ZZZ Damage Calculator into a comprehensive and accurate theorycrafting tool, integrating all mechanics from the `formulas.md` document.

---

## Part 1: UI Overhaul & Core Structure

*Tasks to build the new foundational layout and navigation.*

- [ ] **Implement Tabbed Interface:** Convert the static layout into a dynamic, three-tab system.
    - [ ] Create the **"Main Damage Calculator"** tab as the default view.
    - [ ] Create the **"Anomaly Center"** tab.
    - [ ] Create the **"Daze Calculator"** tab.
- [ ] **Implement Header Bar Enhancements:**
    - [ ] Add a **"Save for Comparison"** button to snapshot the current build's output.

---

## Part 2: Main Damage Calculator Implementation

*Tasks for building the primary damage calculation view.*

### Left Column: Agent & Equipment
- [ ] **Enhance Agent Panel:**
    - [ ] Dynamically show/hide a **"Distance (m)"** input field when a ranged Agent is selected.
- [ ] **Overhaul Disk Panel:**
    - [ ] Remove the old "Sub Stat Upgrades" section.
    - [ ] Implement **granular substat inputs**: four input slots for each of the six Disks.

### Center Column: Combat & Skill Settings
- [ ] **Enhance Skill Properties:**
    - [ ] Add a **`Flat MV` (Flat Motion Value)** input field for base damage calculations.
- [ ] **Create "Enemy Debuffs" Section:** Add inputs for player-applied debuffs on the enemy.
    - [ ] Input for `DEF Reduction %`.
    - [ ] Input for `DEF Ignore %`.
    - [ ] Input for `RES Reduction %`.
    - [ ] Input for `DMG Taken %`.

### Right Column: Enemy Target Settings
- [ ] **Build the Enemy Settings Panel:** Create a new, dedicated column for all enemy-related stats.
    - [ ] Add an **"Enemy Presets"** dropdown (e.g., "Lv 60 Boss," "Lv 50 Elite").
    - [ ] Input for **Enemy Level**.
    - [ ] Input for **Enemy Base DEF**.
    - [ ] Create **Enemy Resistances** section:
        - [ ] Input for `Attribute RES %`.
        - [ ] Input for `All Type RES %`.
        - [ ] Input for `Daze RES %`.
        - [ ] Input for `Target Anomaly RES %`.
    - [ ] Create **Stun Status** section:
        - [ ] Add a `[✓] Enemy is Stunned` checkbox.
        - [ ] Add a `Stun Bonus %` input field.

---

## Part 3: Anomaly Center Implementation

*Tasks for building the Anomaly calculation tab.*

- [ ] **Build Anomaly Center Tab Structure:**
    - [ ] Add a **"Calculation Mode" toggle** to switch between "Anomaly Damage" and "Anomaly Buildup".
- [ ] **Implement "Anomaly Damage" Mode:**
    - [ ] Show inputs for `Anomaly Proficiency (AP)` and `Anomaly DMG %`.
    - [ ] Disable/hide crit-related inputs when this mode is active.
    - [ ] Calculate damage using the correct Anomaly Damage formula.
    - [ ] Automatically calculate and apply the `Buff Level Mod` based on Agent level.
- [ ] **Implement "Anomaly Buildup" Mode:**
    - [ ] Show inputs for `Base Buildup` and `Anomaly Mastery (AM)`.
    - [ ] Calculate and display the final `Buildup` value per hit.
    - [ ] Calculate and display the `nth Application Threshold` for the selected enemy.

---

## Part 4: Daze Calculator Implementation

*Tasks for building the Daze utility tab.*

- [ ] **Build Daze Calculator Tab UI:**
    - [ ] Add input for `Daze MV` (from skill descriptions).
    - [ ] The calculator should use the character's `Impact` stat.
    - [ ] The calculation should automatically pull `Daze RES %` from the Enemy Target Settings.
    - [ ] Display the final `Daze Buildup` value per hit.

---

## Part 5: Output Section & UX Enhancements

*Tasks to improve the clarity of results and overall user experience.*

- [ ] **Enhance the "Status" Panel:**
    - [ ] Implement **detailed tooltips** that appear on hover over each final stat, showing a full breakdown of its sources (Base, Engine, Disks, Buffs, etc.).
- [ ] **Enhance the "Base Damage" Panel:**
    - [ ] Display the calculated value of each individual multiplier from the damage formula (`Crit Mod`, `DEF Mod`, `RES Mod`, etc.) for full transparency.
- [ ] **Enhance the "Expected Damage" Panel:**
    - [ ] Ensure output labels are dynamic and adapt to the current calculation mode (e.g., show "Anomaly DMG").
- [ ] **Implement the Build Comparison Feature:**
    - [ ] Create the **"Comparison Panel"** UI area.
    - [ ] When a build is saved for comparison, display the key stats of the "Current Build" and "Saved Build" side-by-side, highlighting the percentage differences.


---
