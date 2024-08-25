import { StatusDetail, EnemyStatus, DamageBase, BattleStatus } from "@/types";

import Decimal from "decimal.js";
import { calculateStatus, mergeBattleStatus } from "./status";

export const calculateDamageBase = (
  detail: StatusDetail,
  enemyStatus: EnemyStatus,
  buffStatus: BattleStatus
): DamageBase => {
  const battleStatus = mergeBattleStatus(buffStatus, detail.statusBonus);
  const status = calculateStatus(detail.base);
  const critRate = Math.min(status.critRate + battleStatus.critRateBonus, 100);
  const critDamage = status.critDamage + battleStatus.critDamageBonus;
  const damageBuff = status.damageBuff + battleStatus.damageBuffBonus;
  const penRate = status.penRate + battleStatus.penRateBonus;

  const attack = new Decimal(status.attack)
    .plus(
      new Decimal(status.attack)
        .times(new Decimal(battleStatus.attackBuff).div(100))
        .floor()
    )
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
      .toNumber() - status.pen,
    0
  );

  const defenseRate = new Decimal(damageLevel[detail.agentConfig.level])
    .div(new Decimal(damageLevel[detail.agentConfig.level]).add(defense))
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
    pen: status.pen,
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
