"use client";

import { useState } from "react";
import { Table } from "antd";
import type { TableProps } from "antd";
import type {
  Agent,
  Engine,
  Skill,
  AgentStatus,
  EnemyStatus,
  DiskStatus,
  EngineStatus,
  BaseStatus,
  DamageBase,
} from "./types";
import { AgentStatusPanel } from "./AgentStatus";
import { EngineStatusPanel } from "./EngineStatus";
import { DiskStatusPanel } from "./DiskStatus";
import { EnemyStatusPanel } from "./EnemyStatus";
import { calculateDamageBase, calculateStatus } from "./calculate";
import {
  defaultAgentStatus,
  defaultEngineStatus,
  defaultDiskStatus,
  defaultEnemyStatus,
  defaultSkills,
} from "./data";

export default function Home() {
  const [agentStatus, setAgentStatus] =
    useState<AgentStatus>(defaultAgentStatus);
  const [engineStatus, setEngineStatus] =
    useState<EngineStatus>(defaultEngineStatus);
  const [diskStatus, setDiskStatus] = useState<DiskStatus>(defaultDiskStatus);
  const [enemyStatus, setEnemyStatus] =
    useState<EnemyStatus>(defaultEnemyStatus);
  const baseStatus = calculateStatus(agentStatus, engineStatus, diskStatus);
  const damageBase = calculateDamageBase(baseStatus, enemyStatus);
  const skills = defaultSkills;

  return (
    <main className="flex min-h-screen flex-col">
      <div className="flex flex-col p-4 border border-gray-200 rounded-lg shadow-md">
        <div className="text-xl font-bold">ステータス</div>
        <div className="flex flex-row gap-2.5">
          <AgentStatusPanel
            agentStatus={agentStatus}
            onChange={setAgentStatus}
          />
          <EngineStatusPanel
            engineStatus={engineStatus}
            onChange={setEngineStatus}
          />
          <DiskStatusPanel diskStatus={diskStatus} onChange={setDiskStatus} />
          <EnemyStatusPanel
            enemyStatus={enemyStatus}
            onChange={setEnemyStatus}
          />
        </div>
      </div>

      <div className="flex flex-row items-center">
        <StatusPanel baseStatus={baseStatus} />
      </div>

      <div className="flex flex-row items-center">
        <DamageBasePanel damageBase={damageBase} />
      </div>

      <div className="flex flex-row">
        {skills.map((skill, i) => (
          <SkillDamage key={i} damageBase={damageBase} skill={skill} />
        ))}
      </div>
    </main>
  );
}

interface CalculatorProps {
  damageBase: DamageBase;
}

const DamageBasePanel = ({ damageBase }: CalculatorProps) => {
  return (
    <>
      <div className="flex flex-col border border-gray-200 rounded-lg shadow-md">
        <div className="flex flex-row gap-1.5 justify-between">
          <CalculatorCard text="攻撃力" value={damageBase.attack} />
          <CalculatorCard
            text="会心係数"
            value={`${damageBase.critBonusRate}%`}
          />
          <CalculatorCard
            text="与ダメ係数"
            value={`${damageBase.damageBuff}%`}
          />
        </div>
        <div className="flex flex-row gap-1.5 justify-between">
          <CalculatorCard
            text="防御係数"
            value={`${damageBase.defenceRate}%`}
          />
          <CalculatorCard
            text="属性係数"
            value={`${damageBase.registanceRate}%`}
          />
          <CalculatorCard
            text="ブレイク弱体倍率"
            value={`${damageBase.stunBonusRate}%`}
          />
        </div>
      </div>
      <div className="flex flex-row gap-1.5 justify-between">
        <div>
          <CalculatorCard
            text="ダメージ基礎値(通常)"
            value={calculateDamage(damageBase, 100, false)}
          />
          <CalculatorCard
            text="ダメージ基礎値(会心)"
            value={calculateDamage(damageBase, 100, true)}
          />
        </div>
      </div>
    </>
  );
};

const CalculatorCard = ({
  text,
  value,
}: {
  text: string;
  value: string | number;
}) => {
  return (
    <div className="flex flex-col w-40 h-20 items-center justify-center border border-gray-200 rounded-lg shadow-md">
      <h1 className="text font-bold">{text}</h1>
      <p className="text text-gray-800">{value}</p>
    </div>
  );
};

interface SkillDamageDataType {
  key: string;
  name: string;
  skillDamageRate: number;
  expected: number;
}

const columns: TableProps<SkillDamageDataType>["columns"] = [
  {
    title: "Name",
    dataIndex: "name",
    key: "name",
  },
  {
    title: "スキル係数（合計）",
    dataIndex: "skillDamageRate",
    key: "skillDamageRate",
  },
  {
    title: "通常",
    dataIndex: "normal",
    key: "normal",
  },
  {
    title: "会心",
    dataIndex: "critDamage",
    key: "critDamage",
  },
  {
    title: "期待値",
    dataIndex: "expected",
    key: "expected",
  },
];

const calculateDamage = (
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

const calculateExpectedDamage = (
  damageBase: DamageBase,
  skillDamageRate: number
) => {
  const damage = Math.floor(
    calculateDamage(damageBase, skillDamageRate, false) *
      (damageBase.critBonusRate / 100)
  );
  return damage;
};

const SkillDamage = ({
  damageBase,
  skill,
}: {
  damageBase: DamageBase;
  skill: Skill;
}) => {
  const data: SkillDamageDataType[] = skill.damages.map((damage, index) => {
    {
      return {
        key: index.toString(),
        name: skill.name + " " + (index + 1) + "段目",
        skillDamageRate: damage,
        normal: calculateDamage(damageBase, damage, false),
        critDamage: calculateDamage(damageBase, damage, true),
        expected: calculateExpectedDamage(damageBase, damage),
      };
    }
  });

  return (
    <div className="flex flex-col items-center justify-between p-4 border border-gray-200 rounded-lg shadow-md">
      <h1 className="text-xl font-bold">{skill.name}</h1>
      <div className="text-sm text-gray-500">
        <Table columns={columns} dataSource={data} />
      </div>
    </div>
  );
};

const StatusPanel = ({ baseStatus }: { baseStatus: BaseStatus }) => {
  return (
    <div className="flex flex-col p-4 border border-gray-200 rounded-lg shadow-md">
      <div className="text-xl font-bold">ステータス</div>
      <div className="flex flex-col">
        <div className="flex flex-row">
          <div className="w-28">攻撃力</div>

          <div className="flex flex-col">
            <div>
              {`${baseStatus.attack}(${baseStatus.baseAttack} + ${baseStatus.attackBonus})`}
            </div>
          </div>
        </div>

        <div className="flex flex-row">
          <div className="w-28">会心率</div>

          <div className="flex flex-col">
            <div>{baseStatus.critRate}%</div>
          </div>
        </div>

        <div className="flex flex-row">
          <div className="w-28">会心ダメージ</div>

          <div className="flex flex-col">
            <div>{baseStatus.critDamage}%</div>
          </div>
        </div>

        <div className="flex flex-row">
          <div className="w-28">与ダメージ%</div>

          <div className="flex flex-col">
            <div>{baseStatus.damageBuff}%</div>
          </div>
        </div>

        <div className="flex flex-row">
          <div className="w-28">貫通率</div>

          <div className="flex flex-col">
            <div>{baseStatus.penRate}%</div>
          </div>
        </div>
      </div>
    </div>
  );
};
