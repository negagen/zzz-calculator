import {
  AgentStatus,
  DiskStatus,
  EngineStatus,
  EnemyStatus,
  Skill,
} from "./types";

export const defaultAgentStatus: AgentStatus = {
  level: 60,
  attack: 938,
  attackBuff: 0,
  critRate: 5,
  critDamage: 50,
  damageBuff: 0,
  penRate: 0,
};

export const defaultEngineStatus: EngineStatus = {
  attack: 713,
  attackRate: 0,
  critRate: 24,
  critDamage: 0,
  penRatio: 0,
  damageBuff: 0,
};

export const defaultDiskStatus: DiskStatus = {
  slot2: { rank: "S", type: "attack" },
  slot4: { rank: "S", type: "critDamage" },
  slot5: { rank: "S", type: "damageBuff" },
  slot6: { rank: "S", type: "attack" },
  attackCount: 0,
  attackRateCount: 4,
  critRateCount: 4,
  critDamageCount: 4,
  penCount: 0,
};

export const defaultEnemyStatus: EnemyStatus = {
  defense: 952,
  damageRes: 0,
  defenseDown: 0,
  registanceDown: 0,
  stunDamageMultiplier: 150,
  isStun: false,
};

export const defaultSkills: Skill[] = [
  {
    name: "Basic(Physical)",
    damages: [101.1, 111.1, 250.6],
    type: "basic",
  },
  {
    name: "Basic(Ice)",
    damages: [99.6, 184.0, 496.2],
    type: "basic",
  },
];
