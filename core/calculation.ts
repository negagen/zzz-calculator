import {
  AgentStatus,
  EngineStatus,
  DiskStatus,
  BaseStatus,
  EnemyStatus,
  DamageBase,
  AdditionalStatus,
} from "./types";
import Decimal from "decimal.js";

export const calculateBaseStatus = (
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
  diskCritRate += diskStatus.setBonus1.critRate || 0;
  diskCritRate += diskStatus.setBonus2.critRate || 0;
  diskCritRate += diskStatus.setBonus3.critRate || 0;

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
  diskAttackRate += diskStatus.setBonus1.attackRate || 0;
  diskAttackRate += diskStatus.setBonus2.attackRate || 0;
  diskAttackRate += diskStatus.setBonus3.attackRate || 0;

  let diskDamageBuff = 0;
  if (diskStatus.slot5.type === "damageBuff") {
    diskDamageBuff +=
      diskStatus.slot5.rank === "S"
        ? 30
        : diskStatus.slot5.rank === "A"
          ? 20
          : 10;
  }
  diskDamageBuff += diskStatus.setBonus1.damageBuff || 0;
  diskDamageBuff += diskStatus.setBonus2.damageBuff || 0;
  diskDamageBuff += diskStatus.setBonus3.damageBuff || 0;

  let diskPenRate = 0;
  if (diskStatus.slot5.type === "penRate") {
    diskPenRate +=
      diskStatus.slot5.rank === "S"
        ? 24
        : diskStatus.slot5.rank === "A"
          ? 16
          : 8;
  }
  diskPenRate += diskStatus.setBonus1.penRate || 0;
  diskPenRate += diskStatus.setBonus2.penRate || 0;
  diskPenRate += diskStatus.setBonus3.penRate || 0;

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
    damageBuff: diskDamageBuff,
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
  45: 502,
  50: 592,
  51: 610,
  52: 629,
  53: 649,
  54: 669,
  55: 689,
  56: 709,
  57: 730,
  58: 751,
  59: 772,
  60: 794,
};

export const calculateDamageBase = (
  baseStatus: BaseStatus,
  enemyStatus: EnemyStatus,
  battleStatus: AdditionalStatus
): DamageBase => {
  const critRate = Math.min(
    baseStatus.critRate + battleStatus.critRateBonus,
    100
  );
  const critDamage = baseStatus.critDamage + battleStatus.critDamageBonus;
  const damageBuff = baseStatus.damageBuff + battleStatus.damageBuffBonus;
  const penRate = baseStatus.penRate + battleStatus.penRateBonus;

  const attack = new Decimal(baseStatus.attack)
    .times(new Decimal(100 + battleStatus.attackRateBonus).div(100))
    .floor()
    .add(battleStatus.attackBonus)
    .toNumber();

  const critBonusRate = new Decimal(100)
    .add(new Decimal(critRate).div(100).times(critDamage))
    .times(100)
    .floor()
    .div(100)
    .toNumber();
  const damageBuffRate = 100 + damageBuff;

  const defense = Math.max(
    new Decimal(enemyStatus.defense)
      .div(50)
      .times(damageLevel[Math.min(enemyStatus.level, 60)])
      .floor()
      .times(new Decimal(100).sub(enemyStatus.defenseDown).div(100))
      .times(new Decimal(100).sub(penRate).div(100))
      .toNumber() - baseStatus.pen,
    0
  );

  const defenseRate = new Decimal(damageLevel[baseStatus.level])
    .div(new Decimal(damageLevel[baseStatus.level]).add(defense))
    .times(10000)
    .floor()
    .div(100)
    .toNumber();

  const resistanceRate =
    100 - enemyStatus.damageRes + enemyStatus.registanceDown;
  const stunBonusRate = enemyStatus.stunDamageMultiplier;

  return {
    attack: attack,
    skillDamageRate: battleStatus.skillDamageRate,
    damageBuff: damageBuffRate,
    critDamage: 100 + critDamage,
    critBonusRate: critBonusRate,
    pen: baseStatus.pen,
    penRatio: penRate,
    defenseRate: defenseRate,
    registanceRate: resistanceRate,
    stunBonusRate: stunBonusRate,
    isStun: enemyStatus.isStun,
  };
};

export const calculateDamage = (damageBase: DamageBase, isCrit: boolean) => {
  const attack = new Decimal(damageBase.attack);
  const skillDamage = new Decimal(damageBase.skillDamageRate).div(100);
  const damageBuff = new Decimal(damageBase.damageBuff).div(100);
  const defenseRate = new Decimal(damageBase.defenseRate).div(100);
  const registanceRate = new Decimal(damageBase.registanceRate).div(100);
  const stunBonusRate = new Decimal(
    damageBase.isStun ? damageBase.stunBonusRate : 100
  ).div(100);

  const damage = attack
    .times(skillDamage)
    .times(damageBuff)
    .times(defenseRate)
    .times(registanceRate)
    .times(stunBonusRate);

  const critDamage = new Decimal(damageBase.critDamage).div(100);

  if (isCrit) {
    return damage.times(critDamage).floor().toNumber();
  }
  return damage.floor().toNumber();
};

export const calculateExpectedDamage = (damageBase: DamageBase) => {
  const damage = new Decimal(calculateDamage(damageBase, false))
    .times(damageBase.critBonusRate / 100)
    .floor()
    .toNumber();
  return damage;
};
