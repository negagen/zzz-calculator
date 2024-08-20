import {
  AgentStatus,
  EngineStatus,
  DiskStatus,
  BaseStatus,
  EnemyStatus,
  DamageBase,
} from "./types";
import Decimal from "decimal.js";

export const calculateStatus = (
  agent: AgentStatus,
  engine: EngineStatus,
  diskStatus: DiskStatus
): BaseStatus => {
  const diskAttack =
    diskStatus.slot2.rank === "S"
      ? 316
      : diskStatus.slot2.rank === "A"
        ? 212
        : 104;

  let diskCritRate = 0;
  if (diskStatus.slot4.type === "critRate") {
    diskCritRate +=
      diskStatus.slot4.rank === "S"
        ? 24
        : diskStatus.slot4.rank === "A"
          ? 16
          : 8;
  }

  let diskCritDamage = 0;
  if (diskStatus.slot4.type === "critDamage") {
    diskCritDamage +=
      diskStatus.slot4.rank === "S"
        ? 48
        : diskStatus.slot4.rank === "A"
          ? 32
          : 16;
  }

  let diskAttackRate = 0;
  if (diskStatus.slot4.type === "attack") {
    diskAttackRate +=
      diskStatus.slot4.rank === "S"
        ? 30
        : diskStatus.slot4.rank === "A"
          ? 20
          : 10;
  }
  if (diskStatus.slot5.type === "attack") {
    diskAttackRate +=
      diskStatus.slot5.rank === "S"
        ? 30
        : diskStatus.slot5.rank === "A"
          ? 20
          : 10;
  }
  if (diskStatus.slot6.type === "attack") {
    diskAttackRate +=
      diskStatus.slot6.rank === "S"
        ? 30
        : diskStatus.slot6.rank === "A"
          ? 20
          : 10;
  }

  let diskDamageBuff = 0;
  if (diskStatus.slot5.type === "damageBuff") {
    diskDamageBuff +=
      diskStatus.slot5.rank === "S"
        ? 30
        : diskStatus.slot5.rank === "A"
          ? 20
          : 10;
  }

  let diskPenRate = 0;
  if (diskStatus.slot5.type === "penRate") {
    diskPenRate +=
      diskStatus.slot5.rank === "S"
        ? 24
        : diskStatus.slot5.rank === "A"
          ? 16
          : 8;
  }

  const baseAttack = agent.attack + engine.attack;
  const subAttackRate = diskStatus.attackRateCount * 3;
  const subAttack = diskStatus.attackCount * 19;
  const attackBonus = Math.floor(
    baseAttack * ((engine.attackRate + diskAttackRate + subAttackRate) / 100) +
      diskAttack +
      subAttack
  );
  const attack = baseAttack + attackBonus;

  const subCritRate = new Decimal(diskStatus.critRateCount)
    .times(2.4)
    .toNumber();
  const subCritDamage = new Decimal(diskStatus.critDamageCount)
    .times(4.8)
    .toNumber();

  return {
    level: agent.level,
    attack: attack,
    baseAttack: baseAttack,
    attackBonus: attackBonus,
    critRate: Math.min(
      new Decimal(agent.critRate)
        .add(engine.critRate)
        .add(diskCritRate)
        .add(subCritRate)
        .toNumber(),
      100
    ),
    critDamage: new Decimal(agent.critDamage)
      .add(engine.critDamage)
      .add(diskCritDamage)
      .add(subCritDamage)
      .toNumber(),
    damageBuff: agent.damageBuff + engine.damageBuff + diskDamageBuff,
    pen: diskStatus.penCount * 9,
    penRate: agent.penRate + engine.penRatio + diskPenRate,
  };
};

const damageLevel: Record<number, number> = {
  1: 50,
  10: 94,
  20: 172,
  30: 281,
  40: 421,
  50: 592,
  55: 689,
  60: 794,
};

export const calculateDamageBase = (
  baseStatus: BaseStatus,
  enemyStatus: EnemyStatus
): DamageBase => {
  const critBonusRate = Math.floor(
    100 + (baseStatus.critRate / 100) * baseStatus.critDamage
  );
  const damageBuffRate = 100 + baseStatus.damageBuff;
  const defense = Math.max(
    Math.floor(
      enemyStatus.defense *
        (1 - enemyStatus.defenseDown / 100) *
        (1 - baseStatus.penRate / 100)
    ) - baseStatus.pen,
    0
  );
  const defenseRate =
    Math.floor(
      (damageLevel[baseStatus.level] /
        (damageLevel[baseStatus.level] + defense)) *
        1000
    ) / 10;
  const resistanceRate =
    100 - enemyStatus.damageRes + enemyStatus.registanceDown;
  const stunBonusRate = enemyStatus.stunDamageMultiplier;

  return {
    attack: baseStatus.attack,
    damageBuff: damageBuffRate,
    critDamage: 100 + baseStatus.critDamage,
    critBonusRate: critBonusRate,
    pen: baseStatus.penRate,
    penRatio: baseStatus.penRate,
    defenceRate: defenseRate,
    registanceRate: resistanceRate,
    stunBonusRate: stunBonusRate,
  };
};

export const calculateDamage = (
  damageBase: DamageBase,
  skillDamageRate: number,
  isCrit: boolean
) => {
  const damage =
    (((((((damageBase.attack *
      (skillDamageRate / 100) *
      damageBase.damageBuff) /
      100) *
      damageBase.defenceRate) /
      100) *
      damageBase.registanceRate) /
      100) *
      damageBase.stunBonusRate) /
    100;
  if (isCrit) {
    return Math.floor(damage * (damageBase.critDamage / 100));
  }
  return Math.floor(damage);
};

export const calculateExpectedDamage = (
  damageBase: DamageBase,
  skillDamageRate: number
) => {
  const damage = Math.floor(
    calculateDamage(damageBase, skillDamageRate, false) *
      (damageBase.critBonusRate / 100)
  );
  return damage;
};
