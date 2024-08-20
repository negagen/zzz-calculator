import { Table } from "antd";
import type { TableProps } from "antd";
import Decimal from "decimal.js";
import { DamageBase, Skill } from "@/app/types";
import { calculateDamage, calculateExpectedDamage } from "@/app/calculator";

interface SkillDamageDataType {
  key: string;
  name: string;
  skillDamageRate: number;
  normal: number;
  critDamage: number;
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

export const SkillDamagePanel = ({
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

  const damageAmount = data.reduce(
    (acc, curr) => new Decimal(acc).add(curr.skillDamageRate).toNumber(),
    0
  );

  data.push({
    key: "total",
    name: "合計",
    skillDamageRate: damageAmount,
    normal: calculateDamage(damageBase, damageAmount, false),
    critDamage: calculateDamage(damageBase, damageAmount, true),
    expected: calculateExpectedDamage(damageBase, damageAmount),
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
