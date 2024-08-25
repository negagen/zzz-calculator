export type Speciality = "Attack" | "Stun" | "Anomaly" | "Defense" | "Support";
export type Attribute = "Fire" | "Ether" | "Ice" | "Physical" | "Electric";
export type AgentRank = "S" | "A";

export type AgentLevel = 1 | 10 | 20 | 30 | 40 | 50 | 60;
export type CoreSkillLevel = 1 | 2 | 3 | 4 | 5 | 6 | 7;

export interface Agent {
  name: string;
  rank: AgentRank;
  speciality: Speciality;
  attackTable: Record<AgentLevel, number>;
  coreSkillLevelBonusType:
    | "critRate"
    | "critDamage"
    | "penRate"
    | "energy"
    | "anomalyMastery"
    | "anomalyProficiency"
    | "impact";
}

export type EngineBaseAttack = 32 | 40 | 42 | 46 | 48;
export type EngineRank = "S" | "A" | "B";
export type EngineLevel = 0 | 10 | 20 | 30 | 40 | 50 | 60;

export type EngineStatusType =
  | "attackRate"
  | "critRate"
  | "critDamage"
  | "penRate"
  | "energy"
  | "impact"
  | "hp"
  | "defense"
  | "anomalyProficiency";

export interface Engine {
  name: string;
  rank: EngineRank;
  speciality: Speciality;
  baseAttack: EngineBaseAttack;
  statusType: EngineStatusType;
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
  critRate: number;
  critDamage: number;
  penRate: number;
}

export interface EngineStatus {
  level: EngineLevel;
  rank: EngineRank;
  statusType: EngineStatusType;
  attack: number;
  attackRate: number;
  critRate: number;
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
  setBonus1: DiskSetBonus;
  setBonus2: DiskSetBonus;
  setBonus3: DiskSetBonus;
  penCount: number;
}

export interface DiskSetBonus {
  type: "none" | "attackRate" | "critRate" | "penRate" | "damageBuff";
  attackRate?: number;
  critRate?: number;
  penRate?: number;
  damageBuff?: number;
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
  skillDamageRate: number;
  damageBuff: number;
  critDamage: number;
  critBonusRate: number;
  pen: number;
  penRatio: number;
  defenseRate: number;
  registanceRate: number;
  stunBonusRate: number;
  isStun: boolean;
}

export interface AdditionalStatus {
  attackBonus: number;
  attackRateBonus: number;
  skillDamageRate: number;
  critRateBonus: number;
  critDamageBonus: number;
  damageBuffBonus: number;
  penRateBonus: number;
}
