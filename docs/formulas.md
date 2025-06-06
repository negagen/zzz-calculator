# ZZZ Damage Formulas

## Table of Contents

- [Stats](#stats)
  - [Base Stats](#base-stats)
  - [Initial Stats](#initial-stats)
  - [Combat Stats](#combat-stats)
- [General Damage](#general-damage)
  - [Base DMG](#base-dmg)
  - [DMG% Modifier](#dmg-modifier)
  - [Crit Modifier](#crit-modifier)
  - [RES Modifier](#res-modifier)
  - [DEF Modifier](#def-modifier)
  - [Stun Modifier](#stun-modifier)
  - [DMG Taken Modifier](#dmg-taken-modifier)
  - [Distance](#distance)
- [Anomaly and Disorder](#anomaly-and-disorder)
  - [Anomaly Behavior and Base DMG](#anomaly-behavior-and-base-dmg)
  - [Disorder Base DMG](#disorder-base-dmg)
  - [Anomaly% Mod](#anomaly-mod)
  - [AP Bonus](#ap-bonus)
  - [Buff Level Mod](#buff-level-mod)
- [Anomaly Buildup](#anomaly-buildup)
  - [Base Buildup](#base-buildup)
  - [AM Bonus](#am-bonus)
  - [Anomaly Buildup Bonus Mod](#anomaly-buildup-bonus-mod)
  - [Anomaly Buildup RES Mod](#anomaly-buildup-res-mod)
  - [Anomaly Trigger Thresholds](#anomaly-trigger-thresholds)
- [Impact and Daze](#impact-and-daze)
  - [Disorder Daze Accumulation](#disorder-daze-accumulation)
- [Chain Attacks](#chain-attacks)

## Stats

Character stats in Zenless Zone Zero are divided into 3 different categories: Base Stats, Initial/Standard Stats and Combat Stats.

### Base Stats

Base Stats are the initial values each Agent has before any bonuses from Drive Disks and other sources are added.

Currently, Base Stats can only be increased through the following methods:
- Agent's own Base Stats, which are increased by Leveling, and Ascending character
- Agent Core Passives, which grant a slight increase to specific base stats when leveled up
- W-Engine Base Stats

$$\text{Base Stat} = \text{Agent Base Stat} + \text{Core Passive Base Stat} + \text{W-Engine Base Stat}$$

### Initial Stats

Initial Stats are a Character's stats as they appear on the Character Stat menu outside of combat. When calculating these, all sources of % increases of a stat are added together additively before multiplying the Base Stat.

Sources that can increase Initial Stats include:
- W-Engine Advanced Stats
- Drive Disk Main Stats
- Drive Disk Substats
- Drive Disk 2-Pc set effects

### Combat Stats

Combat stats are Stat increases that only appear in Combat. Percentage Combat Stat buffs, multiply on top of Initial Stats, but are additive with other Combat Stat buffs of the same type, just like Initial Stat bonuses.

Sources that can increase Combat Stats include:
- Drive Disk 4-Pc set effects
- W-Engine passives
- Agent Buff effects (e.g Soukaku, Lucy, Caesar buffs etc)
- Noodle Shop buffs

Final stat values are therefore calculated using the following equation:

$$\text{Final Stat} = \text{Initial Stat} \times (1 + \Sigma\text{Combat Stat}\%) + \text{Combat Flat Stat}$$

**Note:** When calculating stats, the final result may differ from the values shown in game due to the game not displaying decimals. There can be other sources that increase Base/Initial/Combat stats and the lists above include most, but may not be exhaustive.

## General Damage

Non-Anomaly damage in Zenless Zone Zero is calculated using the following equation:

$$\text{DMG} = \text{Base DMG} \times \text{DMG\% Mod} \times \text{Crit Mod} \times \text{RES Mod} \times \text{DEF Mod} \times \text{Stun Mod} \times \text{DMG Taken}$$

### Base DMG

The Base DMG of an attack is given by the following equation:

$$\text{Base DMG} = \text{Skill MV} \times \text{Scaling Stat} + \text{Flat MV}$$

Where:
- **Skill MV** = Motion Value = Scaling of the attack, this can be found in the Skill description
- **Scaling Stat** = The stat the attack scales on, such as ATK
- **Flat MV** is an additional bonus conferred by another source

### DMG% Modifier

The DMG% Modifier is the sum of all relevant DMG% bonuses added together additively.

$$\text{DMG\% Mod} = 1 + \Sigma\text{DMG}\%$$

Only relevant DMG% bonuses should be included, as certain DMG% bonuses only apply to specific types of damage. These include Attribute, Basic, Skill, Dash Attack, Style, All-Type bonuses and even more specific categories.

### Crit Modifier

The Crit modifier is given by the following equation if the attack inflicts a critical hit. If the attack does not inflict a critical hit, the modifier is 1.

$$\text{Crit Mod} = 1 + \text{Crit Damage}$$

To calculate expected average damage, apply this formula as the Crit Modifier:

$$\text{Average CRIT Mod} = 1 + \text{Crit Rate} \times \text{Crit Damage}$$

An example would be using 80% Crit Rate and 150% Crit Damage, giving you a modifier of 2.2:

$$\text{Average Crit Mod} = 1 + 0.8 \times 1.5 = 2.2$$

### RES Modifier

The Resistance Modifier is given by the following equation:

$$\text{RES Mod} = 1 - \text{Attribute RES}\% - \text{All Type RES}\% + \text{RES Reduction}\% + \text{RES PEN}\%$$

Where:
- **Attribute RES%** is the % resistance the target has to the attacking attribute
- **All Type RES%** is the % resistance the target has to all damage
- **RES Reduction%** is the % reduction to applicable resistances
- **RES PEN%** is the % of applicable resistance the attack ignores

Most enemies have 0% Attribute RES% to Attributes they are neutral to, -20% against Attributes they are Weak against and 20% against Attributes they resist, however, exceptions to this can exist.

### DEF Modifier

The Defense Modifier is given by the following equation:

$$\text{Target DEF} = \text{Target Base DEF} \times (1 + \text{DEF}\% - \text{DEF Reduction}\% - \text{DEF Ignore}\%) + \text{Flat DEF}$$
$$\text{Effective DEF} = \text{Target DEF} \times (1 - \text{PEN Ratio}\%) - \text{Flat PEN}$$

$$\text{DEF Mod} = \frac{\text{Level Coefficient}}{\text{Level Coefficient} + \text{Effective DEF}}$$

Where:
- **Level Coefficient** is based on the Level of the Attacker, and can be found in the Simple DMG Calculation Sheet
- **Target Base DEF** varies based on the enemy in question that is attacked
- **DEF%** and **Flat DEF** are any % and Flat buffs to DEF on the target
- **DEF Reduction%** is the sum of Defense Reduction% applied to the attacked target
- **DEF Ignore%** is the sum of DEF Ignore effects on the attacker
- **PEN Ratio%** is the sum of PEN Ratio on the attacker
- **Flat PEN** is the total amount of PEN on the attacker

**Effective DEF can not go below 0, resulting in a DEF multiplier of 1.**

### Stun Modifier

The Stun Modifier is given by the following equation:

$$\text{Stun Mod} = 1 + \text{Stun Bonus}\%$$

When an enemy is not stunned, the Stun Bonus is always 0%. While an enemy is stunned the Stun Bonus varies depending on the enemy Type. For most Common and Elite enemies this bonus is 100%, while most Bosses have a 50% modifier. Certain Agents and effects can also increase this bonus, such as Von Lycaon and Qingyi.

### DMG Taken Modifier

The Damage Taken modifier is given by the following equation:

$$\text{DMG Taken Mod} = 1 - \Sigma\text{DMG Reduction}\% + \Sigma\text{DMG Taken}\%$$

Where:
- **DMG Reduction%** is the sum of all sources of applicable Damage Reduction
- **DMG Taken%** is the sum of all sources of applicable Damage Taken increase

Damage Reduction is present in certain Agent attacks such as Piper (EX) Skill and Mindscapes like Zhu Yuan M2.

There are currently no Agents with DMG Taken increasing effects, despite the wording on certain abilities such as Zhu Yuan's M2, which instead provides a normal DMG Bonus% effect.

### Distance

In addition, certain Agents have a damage reduction penalty on their ranged attacks. The strength of this reduction depends on the Agent in question and the distance they are from their target.

Agents that have this Distance reduction currently include:
- Billy
- Grace
- Harumasa
- Rina
- Zhu Yuan

Most Agents suffer a 25% reduction if they are more than 15m from their target, with an additional 25% for every additional 5m. Some Agents can also have different Distance modifiers, such as some of Grace's attacks which have a 30% reduction when enemies are more than 15m away.

## Anomaly and Disorder

The damage formula for Attribute Anomalies is the following:

$$\text{DMG} = \text{Base DMG} \times \text{DMG\% Mod} \times \text{Anomaly\% Mod} \times \text{RES Mod} \times \text{DEF Mod} \times \text{Stun Mod} \times \text{DMG Taken} \times \text{AP Bonus} \times \text{Buff Level Mod}$$

Unless listed below, the above modifiers are the same as the General Damage formula.

Some notes about Attribute Anomalies:
- Unless stated otherwise, Anomaly damage cannot critically hit
- Stats used for calculating Anomaly damage are proportional to the amount of the Anomaly Buildup contributed by each Agent that helped apply the triggering Anomaly. This means if Burnice applies 80% of a Fire Anomaly and Lucy the remaining 20% the Anomaly will use 80% of Burnice's stats and 20% of Lucy's when calculating damage
- Anomalies use Agent stats at the moment the Buildup they contribute is accumulated. Not their current stats when the Anomaly is triggered, this allows buffs that were present when the Buildup was accumulated but not when the Anomaly triggers to still affect the resulting damage
- Buildup contributed by Bangboos does not affect the resulting Anomaly damage. If a Bangboo contributes 50% of an Anomaly, and a single Agent provides the remaining 50%, the Anomaly will calculate damage using 100% of that Agent's stats
  - However, if a Bangboo fills 100% of the Anomaly Gauge, then an Agent trigger the Anomaly, the resulting Anomaly will do 0 damage
- There is a 3 second cooldown per enemy for triggering the same Attribute Anomaly per enemy. When triggering Disorder, a global 3 second cooldown is applied for all Attributes for that enemy.
- Using an Ultimate resets this cooldown

### Anomaly Behavior and Base DMG

The Base Damage and behavior of Attribute Anomalies are different based on the type of Anomaly that is applied.

#### Fire
Fire Anomalies inflict Burn, which deals continuous Fire DMG to the afflicted target using the following equation:

$$\text{Burn Base DMG} = 50\% \times \text{ATK}$$

By default, a single Burn application lasts for 10 seconds and deals damage once every 0.5 seconds. In addition, enemies belonging to the Organic group will be interrupted when inflicted with Burn.

#### Electric
Electric Anomalies inflict Shock, which deal Electric DMG to the afflicted target when they are attacked using the following equation:

$$\text{Shock Base DMG} = 125\% \times \text{ATK}$$

By default, a single Shock application lasts for 10 seconds and can inflict damage up to 1 time every second. In addition, enemies belonging to the Machine group will be interrupted when inflicted with Shock.

#### Ice
Ice Anomalies inflict Freeze, Shatter, and Frostbite. Upon inflicting Shatter, Ice DMG is dealt to the afflicted target using the following equation:

$$\text{Shatter Base DMG} = 500\% \times \text{ATK}$$

The duration of Freeze is dependent on the enemy it is inflicted upon. Against Common enemies this is usually up to 3.5 seconds, while most Elites and Bosses can be Frozen for up to 2.5 seconds.

By default, Shatter inflicts damage 1 time, and Frostbite lasts for 10 seconds and increases Crit Damage taken by 10%. This Crit Damage bonus is additive with regular Crit Damage.

#### Frost
Frost Anomalies inflict Freeze, Shatter, and Frostbite. Upon inflicting Shatter, Ice DMG is dealt to the afflicted target using the following equation:

$$\text{Shatter Base DMG} = 500\% \times \text{ATK}$$

The duration of Freeze is dependent on the enemy it is inflicted upon. Against Common enemies this is usually up to 3.5 seconds, while most Elites and Bosses can be Frozen for up to 2.5 seconds.

Frost Anomaly Shatter inflicts damage 1 time, and Frostbite lasts for 20 seconds and increases Crit Damage taken by 10%. This Crit Damage bonus is additive with regular Crit Damage.

#### Physical
Physical Anomalies inflict Assault, and Flinch. Upon inflicting Assault, Physical DMG is dealt to the afflicted target using the following equation:

$$\text{Assault Base DMG} = 713\% \times \text{ATK}$$

By default, a single Assault application deals damage 1 time, and Flinch lasts for 10 seconds and increases enemy Daze Taken by 7.5%.

#### Ether
Ether Anomalies inflict Corruption, which deal Ether DMG to the afflicted target when they are attacked using the following equation:

$$\text{Corruption Base DMG} = 62.5\% \times \text{ATK}$$

By default, a single application of Corruption lasts for 10 seconds and can inflict damage up to 1 time every 0.5 seconds. In addition, enemies belonging to the Ethereal group will be interrupted when inflicted with Shock.

### Disorder Base DMG

Disorder occurs when an Attribute Anomaly of a different Attribute is used to overwrite an existing Anomaly on an enemy. Disorder Base DMG is based on the Attribute of the Anomaly that is removed, and the stats used for calculation are the same ones used for the Anomaly that is removed (snapshotting the same way the initial Anomaly did).

- When overwriting an Anomaly of the same Attribute, Disorder will not be triggered but the original Anomaly will be removed
- Enemy stats are not snapshot from the original Anomaly, meaning if Enemy DEF or other attributes are lowered after the original Anomaly the current stats will be used for damage calculation

Just like regular Anomalies, the Base DMG of Disorders are based on the Attribute of the Anomaly that is removed.

**Fire:**
$$\text{Burn Disorder DMG} = (450\% + \frac{t}{0.5} \times 50\%) \times \text{ATK}$$

**Electric:**
$$\text{Shock Disorder DMG} = (450\% + t \times 125\%) \times \text{ATK}$$

**Ice:**
$$\text{Frostbite Disorder DMG} = (450\% + t \times 7.5\%) \times \text{ATK}$$

**Frost:**
$$\text{Frostbite (Frost) Disorder DMG} = (600\% + t \times 75\%) \times \text{ATK}$$

**Physical:**
$$\text{Assault Disorder DMG} = (450\% + t \times 7.5\%) \times \text{ATK}$$

**Ether:**
$$\text{Corruption Disorder DMG} = (450\% + \frac{t}{0.5} \times 62.5\%) \times \text{ATK}$$

Where \(t\) is the duration remaining of the original Anomaly that is removed in seconds, rounded down.

### Anomaly% Mod

Anomaly DMG% Modifier is separate from the regular DMG% Modifier, stacking multiplicatively with regular DMG%.

$$\text{Anomaly\% Mod} = 1 + \Sigma\text{Anomaly DMG\%}$$

Only include applicable Anomaly DMG% modifiers, these can range between All Anomaly, Burn, Shock, Shatter, Assault, Corruption and Disorder etc.

Note that not all Anomaly DMG% modifiers will affect Disorder. An example would be Grace's Shock DMG increase, which increases Shock damage but not Shock Disorder.

### AP Bonus

The AP bonus is a modifier based on the Anomaly Proficiency stat of the Agent(s):

$$\text{AP Bonus} = \frac{\text{AP}}{100}$$

### Buff Level Mod

The Buff Level Modifier is based on the attacker's level, and is given by the following equation:

$$\text{Buff Level Mod} = 1 + \frac{\text{Attacker Level} - 1}{99}$$

See the Simple DMG Calculation sheet for more info.

## Anomaly Buildup

Anomaly Buildup is the rate that Agents fill the Anomaly Bar of enemies. This is primarily influenced by an ability's Base Buildup and the Agent's Anomaly Mastery stat. Every Attribute accumulates Buildup separately. For example, this allows 2 Fire Agents to contribute to the same Fire Anomaly, but it will not affect the Buildup of an Ice anomaly application that would be happening simultaneously.

- Physical Buildup can only be accumulated by Physical Agents, Physical attacks by Agents of other attributes will not contribute any Buildup

Buildup is calculated using the following equation:

$$\text{Buildup} = \text{Base Buildup} \times \text{AM Bonus} \times \text{Anomaly Buildup Bonus Mod} \times \text{Anomaly Buildup RES Mod}$$

### Base Buildup

The Base Buildup of an ability is given by the attack in question used. This does not scale on the ability's level.

### AM Bonus

The Anomaly Mastery Bonus is given by the Anomaly Mastery of the Agent in question:

$$\text{AM Bonus} = \frac{\text{AM}}{100}$$

### Anomaly Buildup Bonus Mod

The Anomaly Buildup Bonus Modifier is the sum of all bonuses to Anomaly Buildup that are applicable, summed together additively:

$$\text{Anomaly Buildup Bonus} = 1 + \Sigma\text{Anomaly Buildup Bonus}\%$$

### Anomaly Buildup RES Mod

The Anomaly Buildup Resistance Modifier is given by the following equation:

$$\text{Anomaly Buildup RES} = 1 - (\text{Target Anomaly RES} - \Sigma\text{Anomaly RES Reduction}\%)$$

Where:
- **Target Anomaly RES** is the target's innate Anomaly Resistance to the applicable Attribute
- **Anomaly RES** often (but not always) corresponds to the amount of Attribute DMG Resistance enemies have
- **Anomaly RES Reduction** is the sum of the total reduction to the applicable Anomaly Resistance, summed together additively

### Anomaly Trigger Thresholds

Trigger Thresholds are how much Buildup that needs to be accumulated to trigger an Anomaly on an enemy. This threshold is based on the Type of enemy, and increases by 2% after how many times an Anomaly of the same Attribute has been inflicted on that enemy within a certain period of time, stacking up to 10 times:

$$\text{nth Application Threshold} = \text{Base Threshold} \times 1.02^{n-1}$$

The Base Threshold is the same for all Attributes, except Physical which is 20% higher:
- **Common enemies:** 600 (720)
- **Elite enemies:** 2250 (2700)
- **Boss enemies:** 3000 (3600)

## Impact and Daze

To inflict Stun on enemies, their Daze bar needs to be completely filled up. While Impact has no innate effect on the damage an Agent deals, it will increase the amount of Daze they are able to inflict, allowing them to Stun enemies faster to increase damage through the Stun window.

Daze Buildup is calculated using the following equation:

$$\text{Daze Buildup} = \text{Daze MV} \times \text{Impact} \times (1 - \text{Daze RES}) \times (1 + \Sigma\text{Daze}\%) \times (1 + \text{Daze Taken})$$

Where:
- **Daze MV** is the Daze Scaling of the ability in question, this can be found in the Agent Skill descriptions
- **Impact** is the Impact stat of the Agent
- **Daze RES** is the total resistance the target has to Daze of the corresponding attribute
  - Daze RES often (but not always) corresponds to the amount of Attribute DMG Resistance enemies have
- **Daze%** is the total amount of bonus Daze buildup applicable, summed additively
- **Daze Taken** is a modifier on the enemy that adjusts the amount of Daze buildup the target takes

### Disorder Daze Accumulation

When Disorder is triggered on an enemy, Daze is accumulated based on the Agent stats of the Anomaly that is overwritten. Time remaining on the Anomaly does not affect the Daze Buildup, which is given by the following equation:

$$\text{Disorder Daze Buildup} = 200\% \times (1 + 0.0075 \times \text{Level}) \times \text{Impact} \times (1 - \text{Daze RES}) \times (1 + \Sigma\text{Daze}\%) \times (1 + \text{Daze Taken})$$

## Chain Attacks

When enemies are Stunned, Chain Attacks can be initiated against them by using Heavy attacks. The number of Chain Attacks that can be initiated depends on the enemy type. Common enemies can have 1 Chain initiated, Elite enemies 2 and Boss enemies 3. Canceling a Chain Attack prompt consumes 1 Chain Attack attempt.

---

*Thanks to Arkkus for document setup inspiration and the DMG Calculation Sheet.*

*Last updated 29/04/2025*


---
