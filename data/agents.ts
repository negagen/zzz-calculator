import { Agent, AgentLevel, CoreSkillLevel, AgentStatus } from "@/core";
import Decimal from "decimal.js";

export const agents: Agent[] = [
  {
    name: "猫宮又奈",
    attackTable: {
      1: 131,
      10: 202,
      20: 329,
      30: 456,
      40: 582,
      50: 708,
      60: 835,
    },
    coreSkillLevelBonusType: "critRate",
  },
  {
    name: "エレン・ジョー",
    attackTable: {
      1: 135,
      10: 209,
      20: 339,
      30: 470,
      40: 602,
      50: 732,
      60: 863,
    },
    coreSkillLevelBonusType: "critRate",
  },
  {
    name: "朱鳶",
    attackTable: {
      1: 132,
      10: 204,
      20: 332,
      30: 461,
      40: 588,
      50: 716,
      60: 844,
    },
    coreSkillLevelBonusType: "critDamage",
  },
];

export const calculateAgentStatus = (
  agent: Agent,
  level: AgentLevel,
  coreSkillLevel: CoreSkillLevel
): AgentStatus => {
  let attack = agent.attackTable[level];
  let critRate = 5;
  let critDamage = 50;
  let penRate = 0;

  for (let i = 1; i < coreSkillLevel; i++) {
    if (i % 2 === 0) {
      switch (agent.coreSkillLevelBonusType) {
        case "critRate":
          critRate = new Decimal(critRate).add(4.8).toNumber();
          break;
        case "critDamage":
          critDamage = new Decimal(critDamage).add(9.6).toNumber();
          break;
        case "penRate":
          penRate = new Decimal(penRate).add(4.8).toNumber();
          break;
      }
    } else {
      attack += 25;
    }
  }

  return { level, attack, critRate, critDamage, penRate };
};
