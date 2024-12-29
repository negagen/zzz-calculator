import {
  Agent,
  AgentLevel,
  CoreSkillLevel,
  Engine,
  EngineLevel,
  DiskConfig,
  DiskSlotConfig,
  Status,
  StatusDetail,
  AgentConfig,
  EngineConfig,
  StatusBase,
  Drive,
  DiskSetBonus1,
  BattleStatus,
  Attribute,
} from "@/types";
import {
  engineAttackTable,
  engineAttackRateTable,
  engineCritRateTable,
  engineCritDamageTable,
  enginePenRateTable,
  agents,
  engines,
} from "@/data";
import Decimal from "decimal.js";

export const calculateStatus = (statusBase: StatusBase): Status => {
  const attack = new Decimal(statusBase.attack)
    .plus(new Decimal(statusBase.attack).times(statusBase.attackRate).div(100))
    .plus(statusBase.attackBonus)
    .floor()
    .toNumber();

  const defense = new Decimal(statusBase.defense)
    .plus(new Decimal(statusBase.defense).times(statusBase.defenseRate))
    .floor()
    .toNumber();

  const hp = new Decimal(statusBase.hp)
    .plus(new Decimal(statusBase.hp).times(statusBase.hpRate))
    .floor()
    .toNumber();

  return {
    hp,
    attack,
    defense,
    critRate: statusBase.critRate,
    critDamage: statusBase.critDamage,
    pen: statusBase.pen,
    penRate: statusBase.penRate,
    damageBuff: statusBase.damageBuff,
    anomalyProficiency: statusBase.anomalyProficiency,
    impact: statusBase.impact,
    energy: statusBase.energy,
  };
};

export const calculateStatusDetail = (
  agentConfig: AgentConfig,
  engineConfig: EngineConfig,
  diskStatusConfig: DiskConfig
): StatusDetail => {
  const agentStatus = calculateAgentStatus(agentConfig);
  const engineStatus = calculateEngineStatus(engineConfig);
  const diskStatus = calculateDiskStatus(diskStatusConfig, agentConfig.agent);

  const statusBase = combineStatus([
    agentStatus,
    engineStatus,
    diskStatus.status,
  ]);

  return {
    agentConfig: agentConfig,
    engineConfig: engineConfig,
    diskConfig: diskStatusConfig,
    statusBonus: diskStatus.bonus,
    base: statusBase,
  };
};

const combineStatus = (statuses: StatusBase[]): StatusBase => {
  const status = statuses.reduce((acc, status) => {
    return {
      hp: new Decimal(acc.hp).plus(status.hp).toNumber(),
      hpRate: new Decimal(acc.hpRate).plus(status.hpRate).toNumber(),
      attack: new Decimal(acc.attack).plus(status.attack).toNumber(),
      attackBonus: new Decimal(acc.attackBonus)
        .plus(status.attackBonus)
        .toNumber(),
      defense: new Decimal(acc.defense).plus(status.defense).toNumber(),
      attackRate: new Decimal(acc.attackRate)
        .plus(status.attackRate)
        .toNumber(),
      defenseRate: new Decimal(acc.defenseRate)
        .plus(status.defenseRate)
        .toNumber(),
      critRate: new Decimal(acc.critRate).plus(status.critRate).toNumber(),
      critDamage: new Decimal(acc.critDamage)
        .plus(status.critDamage)
        .toNumber(),
      pen: new Decimal(acc.pen).plus(status.pen).toNumber(),
      penRate: new Decimal(acc.penRate).plus(status.penRate).toNumber(),
      damageBuff: new Decimal(acc.damageBuff)
        .plus(status.damageBuff)
        .toNumber(),
      anomalyProficiency: new Decimal(acc.anomalyProficiency)
        .plus(status.anomalyProficiency)
        .toNumber(),
      impact: new Decimal(acc.impact).plus(status.impact).toNumber(),
      energy: new Decimal(acc.energy).plus(status.energy).toNumber(),
    };
  }, emptyStatus);

  return status;
};

const emptyStatus: StatusBase = {
  hp: 0,
  attack: 0,
  attackBonus: 0,
  defense: 0,
  hpRate: 0,
  attackRate: 0,
  defenseRate: 0,
  critRate: 0,
  critDamage: 0,
  pen: 0,
  penRate: 0,
  damageBuff: 0,
  anomalyProficiency: 0,
  impact: 0,
  energy: 0,
};

export const calculateAgentStatus = ({
  agent,
  level,
  coreSkillLevel,
}: {
  agent: Agent;
  level: AgentLevel;
  coreSkillLevel: CoreSkillLevel;
}): StatusBase => {
  let attack = agent.attackTable[level];
  let critRate = 5;
  let critDamage = 50;
  let penRate = 0;

  for (let i = 1; i <= coreSkillLevel; i++) {
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

  return { ...emptyStatus, attack, critRate, critDamage, penRate };
};

export const calculateEngineStatus = ({
  engine,
  level,
}: {
  engine: Engine;
  level: EngineLevel;
}): StatusBase => {
  switch (engine.statusType) {
    case "attackRate":
      return {
        ...emptyStatus,
        attack: engineAttackTable[engine.baseAttack][level],
        attackRate: engineAttackRateTable[engine.rank][level],
      };
    case "critRate":
      return {
        ...emptyStatus,
        attack: engineAttackTable[engine.baseAttack][level],
        critRate: engineCritRateTable[engine.rank][level],
      };
    case "critDamage":
      return {
        ...emptyStatus,
        attack: engineAttackTable[engine.baseAttack][level],
        critDamage: engineCritDamageTable[engine.rank][level],
      };
    case "penRate":
      return {
        ...emptyStatus,
        attack: engineAttackTable[engine.baseAttack][level],
        penRate: enginePenRateTable[engine.rank][level],
      };
    default:
      return {
        ...emptyStatus,
        attack: engineAttackTable[engine.baseAttack][level],
      };
  }
};

export const calculateDiskStatus = (
  config: DiskConfig,
  agent: Agent
): { status: StatusBase; bonus: BattleStatus } => {
  const bonus = calculateDiskSetBonus(config, agent);

  const statuses = [
    calculateDiskSlotStatus(config.slot1),
    calculateDiskSlotStatus(config.slot2),
    calculateDiskSlotStatus(config.slot3),
    calculateDiskSlotStatus(config.slot4),
    calculateDiskSlotStatus(config.slot5),
    calculateDiskSlotStatus(config.slot6),
    bonus.status,
  ];

  return { status: combineStatus(statuses), bonus: bonus.bonus };
};

const calculateDiskSlotStatus = (config: DiskSlotConfig): StatusBase => {
  const status = {
    ...emptyStatus,
  };

  switch (config.mainStatus) {
    case "hp":
      switch (config.rank) {
        case "S":
          status.hp = 2200;
          break;
        case "A":
          status.hp = 1468;
          break;
        case "B":
          status.hp = 732;
          break;
      }
      break;
    case "attack":
      switch (config.rank) {
        case "S":
          status.attackBonus = 316;
          break;
        case "A":
          status.attackBonus = 212;
          break;
        case "B":
          status.attackBonus = 104;
          break;
      }
      break;
    case "defense":
      switch (config.rank) {
        case "S":
          status.defense = 184;
          break;
        case "A":
          status.defense = 124;
          break;
        case "B":
          status.defense = 60;
          break;
      }
      break;
    case "attackRate":
      switch (config.rank) {
        case "S":
          status.attackRate = 30;
          break;
        case "A":
          status.attackRate = 20;
          break;
        case "B":
          status.attackRate = 10;
          break;
      }
      break;
    case "defenseRate":
      switch (config.rank) {
        case "S":
          status.defenseRate = 48;
          break;
        case "A":
          status.defenseRate = 32;
          break;
        case "B":
          status.defenseRate = 16;
          break;
      }
      break;
    case "critRate":
      switch (config.rank) {
        case "S":
          status.critRate = 24;
          break;
        case "A":
          status.critRate = 16;
          break;
        case "B":
          status.critRate = 8;
          break;
      }
      break;
    case "critDamage":
      switch (config.rank) {
        case "S":
          status.critDamage = 48;
          break;
        case "A":
          status.critDamage = 32;
          break;
        case "B":
          status.critDamage = 16;
          break;
      }
      break;
    case "anomalyProficiency":
      switch (config.rank) {
        case "S":
          status.anomalyProficiency = 92;
          break;
        case "A":
          status.anomalyProficiency = 60;
          break;
        case "B":
          status.anomalyProficiency = 28;
          break;
      }
      break;
    case "damageBuff":
      switch (config.rank) {
        case "S":
          status.damageBuff = 30;
          break;
        case "A":
          status.damageBuff = 20;
          break;
        case "B":
          status.damageBuff = 10;
          break;
      }
      break;
    case "penRate":
      switch (config.rank) {
        case "S":
          status.penRate = 24;
          break;
        case "A":
          status.penRate = 16;
          break;
        case "B":
          status.penRate = 8;
          break;
      }
      break;
    case "energy":
      switch (config.rank) {
        case "S":
          status.energy = 60;
          break;
        case "A":
          status.energy = 40;
          break;
        case "B":
          status.energy = 20;
          break;
      }
      break;
    case "impact":
      switch (config.rank) {
        case "S":
          status.impact = 24;
          break;
        case "A":
          status.impact = 16;
          break;
        case "B":
          status.impact = 8;
          break;
      }
      break;
    case "anomalyMastery":
      switch (config.rank) {
        case "S":
          status.impact = 30;
          break;
        case "A":
          status.impact = 20;
          break;
        case "B":
          status.impact = 10;
          break;
      }
      break;
  }

  const subStatus = calculateDiskSubStatus(config);

  return combineStatus([status, subStatus]);
};

interface DiskSetBonus {
  attribute?: Attribute;
  2: DiskSetBonus1;
  4: BattleStatus;
}

const emptyBattleStatus: BattleStatus = {
  attackBuff: 0,
  skillDamageRate: 0,
  attackBonus: 0,
  critRateBonus: 0,
  critDamageBonus: 0,
  penRateBonus: 0,
  damageBuffBonus: 0,
  // anomalyProficiency: 0,
  // impact: 0,
  // energy: 0,
};

const emptyDiskSet1Bonus: DiskSetBonus1 = {
  attackRate: 0,
  defenseRate: 0,
  critRate: 0,
  anomalyProficiency: 0,
  penRate: 0,
  damageBuff: 0,
  impact: 0,
  energy: 0,
};

const diskSetBonuses: Record<Drive, DiskSetBonus> = {
  none: {
    2: { ...emptyDiskSet1Bonus },
    4: { ...emptyBattleStatus },
  },
  WoodpeckerElectro: {
    2: { ...emptyDiskSet1Bonus, critRate: 8 },
    4: { ...emptyBattleStatus, attackBuff: 18 },
  },
  HormonePunk: {
    2: { ...emptyDiskSet1Bonus, attackRate: 10 },
    4: { ...emptyBattleStatus, attackBuff: 25 },
  },
  SwingJazz: {
    2: { ...emptyDiskSet1Bonus, energy: 20 },
    4: { ...emptyBattleStatus, damageBuffBonus: 15 },
  },
  PufferElectro: {
    2: { ...emptyDiskSet1Bonus, penRate: 8 },
    4: { ...emptyBattleStatus },
  },
  FreedomBlues: {
    2: { ...emptyDiskSet1Bonus, anomalyProficiency: 10 },
    4: { ...emptyBattleStatus },
  },
  ShockstarDisco: {
    2: { ...emptyDiskSet1Bonus, impact: 10 },
    4: { ...emptyBattleStatus },
  },
  SoulRock: {
    2: { ...emptyDiskSet1Bonus, defenseRate: 16 },
    4: { ...emptyBattleStatus },
  },
  PolarMetal: {
    attribute: "Ice",
    2: { ...emptyDiskSet1Bonus, damageBuff: 10 },
    4: { ...emptyBattleStatus, damageBuffBonus: 40 },
  },
  ThunderMetal: {
    attribute: "Electric",
    2: { ...emptyDiskSet1Bonus, damageBuff: 10 },
    4: { ...emptyBattleStatus, attackBuff: 28 },
  },
  ChaoticMetal: {
    attribute: "Ether",
    2: { ...emptyDiskSet1Bonus, damageBuff: 10 },
    4: { ...emptyBattleStatus, critDamageBonus: 53 },
  },
  FangedMetal: {
    attribute: "Physical",
    2: { ...emptyDiskSet1Bonus, damageBuff: 10 },
    4: { ...emptyBattleStatus, damageBuffBonus: 35 },
  },
  InfernoMetal: {
    attribute: "Fire",
    2: { ...emptyDiskSet1Bonus, damageBuff: 10 },
    4: { ...emptyBattleStatus, critRateBonus: 28 },
  },
  ProtoPunk: {
    2: { ...emptyDiskSet1Bonus },
    4: { ...emptyBattleStatus, damageBuffBonus: 15 },
  },
  ChaosJazz: {
    2: { ...emptyDiskSet1Bonus, anomalyProficiency: 30 },
    4: { ...emptyBattleStatus, damageBuffBonus: 15 },
  },
  AstralVoice: {
    2: { ...emptyDiskSet1Bonus, attackRate: 10 },
    4: { ...emptyBattleStatus },
  },
  BranchAndBladeSong: {
    attribute: "Frost",
    2: { ...emptyDiskSet1Bonus, critDamage: 16 },
    4: { ...emptyBattleStatus, critDamageBonus: 30, critRateBonus: 12 },
  },
};

const calculateDiskSetBonus = (
  config: DiskConfig,
  agent: Agent
): { status: StatusBase; bonus: BattleStatus } => {
  const drives: Map<Drive, number> = new Map();

  drives.set(config.slot1.drive, (drives.get(config.slot1.drive) || 0) + 1);
  drives.set(config.slot2.drive, (drives.get(config.slot2.drive) || 0) + 1);
  drives.set(config.slot3.drive, (drives.get(config.slot3.drive) || 0) + 1);
  drives.set(config.slot4.drive, (drives.get(config.slot4.drive) || 0) + 1);
  drives.set(config.slot5.drive, (drives.get(config.slot5.drive) || 0) + 1);
  drives.set(config.slot6.drive, (drives.get(config.slot6.drive) || 0) + 1);

  let status: StatusBase = { ...emptyStatus };
  let battleBonus: BattleStatus = { ...emptyBattleStatus };

  drives.forEach((count, drive) => {
    if (count === 2 || count === 4) {
      status = applyDiskSet1Bonus(status, diskSetBonuses[drive][2]);
    }
    if (count == 4) {
      const bonus = diskSetBonuses[drive];
      if (bonus.attribute == null || bonus.attribute === agent.attribute) {
        battleBonus = mergeBattleStatus(battleBonus, bonus[4]);
      }
    }
  });

  return { status, bonus: battleBonus };
};

const applyDiskSet1Bonus = (
  status1: StatusBase,
  status2: DiskSetBonus1
): StatusBase => {
  return {
    hp: status1.hp,
    hpRate: status1.hpRate,
    attack: status1.attack,
    attackRate: status1.attackRate + status2.attackRate || 0,
    attackBonus: status1.attackBonus,
    defense: status1.defense,
    defenseRate: status1.defenseRate + status2.defenseRate,
    critRate: status1.critRate + status2.critRate,
    critDamage: status1.critDamage + status2.critDamage,
    pen: status1.pen,
    anomalyProficiency: status1.anomalyProficiency + status2.anomalyProficiency,
    penRate: status1.penRate + status2.penRate,
    damageBuff: status1.damageBuff + status2.damageBuff,
    impact: status1.impact + status2.impact,
    energy: status1.energy + status2.energy,
  };
};

export const mergeBattleStatus = (
  status1: BattleStatus,
  status2: BattleStatus
): BattleStatus => {
  return {
    attackBuff: status1.attackBuff + status2.attackBuff,
    skillDamageRate: status1.skillDamageRate + status2.skillDamageRate,
    attackBonus: status1.attackBonus + status2.attackBonus,
    critRateBonus: status1.critRateBonus + status2.critRateBonus,
    critDamageBonus: status1.critDamageBonus + status2.critDamageBonus,
    penRateBonus: status1.penRateBonus + status2.penRateBonus,
    damageBuffBonus: status1.damageBuffBonus + status2.damageBuffBonus,
    // anomalyProficiency: status1.anomalyProficiency + status2.anomalyProficiency,
    // impact: status1.impact + status2.impact,
    // energy: status1.energy + status2.energy,
  };
};

const calculateDiskSubStatus = (config: DiskSlotConfig): StatusBase => {
  return {
    hp: new Decimal(config.subStatusUp.hp).times(112).toNumber(),
    hpRate: new Decimal(config.subStatusUp.hpRate).times(3).toNumber(),
    attack: 0,
    attackBonus: new Decimal(config.subStatusUp.attack).times(19).toNumber(),
    defense: new Decimal(config.subStatusUp.defense).times(15).toNumber(),
    attackRate: new Decimal(config.subStatusUp.attackRate).times(3).toNumber(),
    defenseRate: new Decimal(config.subStatusUp.defenseRate)
      .times(4.8)
      .toNumber(),
    critRate: new Decimal(config.subStatusUp.critRate).times(2.4).toNumber(),
    critDamage: new Decimal(config.subStatusUp.critDamage)
      .times(4.8)
      .toNumber(),
    pen: new Decimal(config.subStatusUp.pen).times(9).toNumber(),
    anomalyProficiency: new Decimal(config.subStatusUp.anomalyProficiency)
      .times(9)
      .toNumber(),
    penRate: 0,
    damageBuff: 0,
    impact: 0,
    energy: 0,
  };
};
