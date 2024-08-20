export type Speciality = "Attack" | "Stun" | "Anomaly" | "Defense";
export type Attribute = "Fire" | "Ether" | "Ice" | "Physical" | "Electric";

export interface Agent {
  name: string;
  speciality: Speciality;
  attributes: Attribute;
  hp: number;
  attack: number;
  defense: number;
  critRate: number;
  impact: number;
  penRatio: number;
  critDamage: number;
  damageBuff: number;
  coreSkillLevel: number;
  coreSkillLevelBonusType:
    | "critRate"
    | "critDamage"
    | "penRate"
    | "energy"
    | "anomalyMastery";
  skills: Skill[];
}

export interface Engine {
  name: string;
  attack: number;
  attackBuff: number;
  critRate: number;
  critDamage: number;
  impact: number;
  penRatio: number;
}

export interface DiskConfig {}

export interface Character {
  agent: Agent;
  engine: Engine;
}

export interface Skill {
  name: string;
  damages: number[];
  type:
    | "basic"
    | "dashAttack"
    | "dodgeCounter"
    | "quickAssist"
    | "defensiveAssist"
    | "defensiveCounter"
    | "special"
    | "exSpecial"
    | "chainAttack"
    | "ultimate";
}

export type Team = Character[];

export interface AgentStatus {
  level: number;
  attack: number;
  attackBuff: number;
  critRate: number;
  critDamage: number;
  damageBuff: number;
  penRate: number;
}

export interface EngineStatus {
  attack: number;
  attackRate: number;
  critRate: number;
  damageBuff: number;
  critDamage: number;
  penRatio: number;
}

export interface DiskConfig {
  rank: "S" | "A" | "B";
  type: "attack" | "critRate" | "critDamage" | "penRate" | "damageBuff";
}

export interface DiskStatus {
  slot2: DiskConfig;
  slot4: DiskConfig;
  slot5: DiskConfig;
  slot6: DiskConfig;
  attackCount: number;
  attackRateCount: number;
  critRateCount: number;
  critDamageCount: number;
  penCount: number;
}

export interface EnemyStatus {
  level: number;
  defense: number;
  defenseDown: number;
  damageRes: number;
  registanceDown: number;
  stunDamageMultiplier: number;
  isStun: boolean;
}

export interface BaseStatus {
  level: number;
  attack: number;
  baseAttack: number;
  attackBonus: number;
  critRate: number;
  critDamage: number;
  pen: number;
  penRate: number;
  damageBuff: number;
}

export interface DamageBase {
  attack: number;
  damageBuff: number;
  critDamage: number;
  critBonusRate: number;
  pen: number;
  penRatio: number;
  defenceRate: number;
  registanceRate: number;
  stunBonusRate: number;
  isStun: boolean;
}

export interface AdditionalStatus {
  attackBonus: number;
  attackRateBonus: number;
  critRateBonus: number;
  critDamageBonus: number;
  damageBuffBonus: number;
  penRateBonus: number;
}
