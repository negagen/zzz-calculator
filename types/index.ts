export type Speciality = "Attack" | "Stun" | "Anomaly" | "Defense" | "Support";
export type Attribute = "Fire" | "Ether" | "Ice" | "Physical" | "Electric";
export type AgentRank = "S" | "A";

export type AgentLevel = 1 | 10 | 20 | 30 | 40 | 50 | 60;
export type CoreSkillLevel = 1 | 2 | 3 | 4 | 5 | 6 | 7;

export interface Agent {
  name: string;
  rank: AgentRank;
  attribute: Attribute;
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

export type DiskRank = "S" | "A" | "B";
export const Drives = [
  "none",
  "FangedMetal",
  "PolarMetal",
  "ThunderMetal",
  "ChaoticMetal",
  "InfernoMetal",
  "SoulRock",
  "HormonePunk",
  "FreedomBlues",
  "ShockstarDisco",
  "PufferElectro",
  "WoodpeckerElectro",
  "SwingJazz",
] as const;
export type Drive = (typeof Drives)[number];

export interface DiskSlotConfig {
  rank: DiskRank;
  drive: Drive;
  mainStatus:
    | "hp"
    | "attack"
    | "defense"
    | "attackRate"
    | "defenseRate"
    | "critRate"
    | "critDamage"
    | "penRate"
    | "damageBuff"
    | "impact"
    | "energy"
    | "anomalyProficiency"
    | "anomalyMastery";
  subStatusUp: {
    hp: number;
    hpRate: number;
    attack: number;
    attackRate: number;
    defense: number;
    defenseRate: number;
    critRate: number;
    critDamage: number;
    anomalyProficiency: number;
    pen: number;
  };
}

export interface Status {
  hp: number;
  attack: number;
  defense: number;
  critRate: number;
  critDamage: number;
  pen: number;
  penRate: number;
  damageBuff: number;
  anomalyProficiency: number;
  impact: number;
  energy: number;
}

export interface DiskConfig {
  slot1: DiskSlotConfig;
  slot2: DiskSlotConfig;
  slot3: DiskSlotConfig;
  slot4: DiskSlotConfig;
  slot5: DiskSlotConfig;
  slot6: DiskSlotConfig;
}

export interface DiskSetBonus1 {
  attackRate: number;
  critRate: number;
  penRate: number;
  damageBuff: number;
  defenseRate: number;
  energy: number;
  anomalyProficiency: number;
  impact: number;
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

export interface Status {
  hp: number;
  attack: number;
  defense: number;
  critRate: number;
  critDamage: number;
  pen: number;
  penRate: number;
  damageBuff: number;
  anomalyProficiency: number;
  impact: number;
  energy: number;
}

export interface StatusBase {
  hp: number;
  hpRate: number;
  attack: number;
  attackBonus: number;
  attackRate: number;
  defense: number;
  defenseRate: number;
  critRate: number;
  critDamage: number;
  pen: number;
  penRate: number;
  damageBuff: number;
  anomalyProficiency: number;
  impact: number;
  energy: number;
}

export interface AgentConfig {
  agent: Agent;
  level: AgentLevel;
  coreSkillLevel: CoreSkillLevel;
}

export interface EngineConfig {
  engine: Engine;
  level: EngineLevel;
}

export interface StatusDetail {
  agentConfig: AgentConfig;
  engineConfig: EngineConfig;
  diskConfig: DiskConfig;
  statusBonus: BattleStatus;
  base: StatusBase;
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

export interface BattleStatus {
  attackBonus: number;
  attackBuff: number;
  skillDamageRate: number;
  critRateBonus: number;
  critDamageBonus: number;
  damageBuffBonus: number;
  penRateBonus: number;
}
