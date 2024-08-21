import {
  AgentStatus,
  DiskStatus,
  EngineStatus,
  EnemyStatus,
  AdditionalStatus,
  Skill,
} from "@/core";

export const defaultAgentStatus: AgentStatus = {
  level: 60,
  attack: 938,
  critRate: 5,
  critDamage: 50,
  penRate: 0,
};

export const defaultEngineStatus: EngineStatus = {
  level: 60,
  rank: "S",
  statusType: "critRate",
  attack: 684,
  attackRate: 0,
  critRate: 24,
  critDamage: 0,
  penRatio: 0,
};

export const defaultDiskStatus: DiskStatus = {
  slot2: { rank: "S", type: "attack" },
  slot4: { rank: "S", type: "critDamage" },
  slot5: { rank: "S", type: "damageBuff" },
  slot6: { rank: "S", type: "attack" },
  attackCount: 4,
  attackRateCount: 4,
  critRateCount: 4,
  critDamageCount: 4,
  penCount: 0,
  setBonus1: { type: "critRate", critRate: 8 },
  setBonus2: { type: "damageBuff", damageBuff: 10 },
  setBonus3: { type: "none" },
};

export const defaultEnemyStatus: EnemyStatus = {
  level: 70,
  defense: 60,
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

export const defaultBattleStatus: AdditionalStatus = {
  attackBonus: 0,
  attackRateBonus: 0,
  critRateBonus: 0,
  critDamageBonus: 0,
  damageBuffBonus: 0,
  penRateBonus: 0,
};
