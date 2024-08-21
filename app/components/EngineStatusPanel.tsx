import { Select } from "antd";
import { EngineStatus } from "@/app/types";
import { StatusInput } from "./StatusInput";
import { useState } from "react";

type EngineLevel = 10 | 20 | 30 | 40 | 50 | 60;
type EngineRank = "S" | "A" | "B";
type EngineStatusType =
  | "attackRate"
  | "critRate"
  | "critDamage"
  | "penRate"
  | "other";

export const EngineStatusPanel = ({
  onChange,
}: {
  onChange: (engineStatus: EngineStatus) => void;
}) => {
  const [level, setLevel] = useState<EngineLevel>(60);
  const [attack, setAttack] = useState(713);
  const [rank, setRank] = useState<EngineRank>("S");
  const [statusType, setStatusType] = useState<EngineStatusType>("attackRate");

  return (
    <div className="flex flex-col items-center w-72 bg-gray-700 rounded-md p-4">
      <div className="mb-4 w-full bg-gray-900 text-center rounded-md p-2">
        音動機
      </div>

      <div className="flex flex-col items-center w-full gap-2">
        <StatusInput
          title="攻撃力"
          value={attack}
          onChange={(value) => {
            setAttack(value);
            onChange(changeEngine(value, level, rank, statusType));
          }}
        />

        <div className="flex flex-row items-center w-full">
          <div className="w-32">レベル上限</div>
          <Select
            className="w-32"
            value={level}
            options={[
              { value: 10, label: "10" },
              { value: 20, label: "20" },
              { value: 30, label: "30" },
              { value: 40, label: "40" },
              { value: 50, label: "50" },
              { value: 60, label: "60" },
            ]}
            onChange={(value) => {
              setLevel(value as EngineLevel);

              onChange(
                changeEngine(attack, value as EngineLevel, rank, statusType)
              );
            }}
          />
        </div>

        <div className="flex flex-row items-center w-full">
          <div className="w-32">武器ランク</div>
          <Select
            className="w-32"
            value={rank}
            options={[
              { value: "S", label: "S" },
              { value: "A", label: "A" },
              { value: "B", label: "B" },
            ]}
            onChange={(value) => {
              setRank(value as EngineRank);

              onChange(
                changeEngine(attack, level, value as EngineRank, statusType)
              );
            }}
          />
        </div>

        <div className="flex flex-row items-center w-full">
          <div className="w-32">上級ステータス</div>
          <Select
            className="w-32"
            value={statusType}
            options={[
              { value: "critRate", label: "会心率" },
              { value: "critDamage", label: "会心ダメージ" },
              { value: "attackRate", label: "攻撃力%" },
              { value: "penRate", label: "貫通率" },
              { value: "other", label: "その他" },
            ]}
            onChange={(value) => {
              setStatusType(value as EngineStatusType);

              onChange(
                changeEngine(attack, level, rank, value as EngineStatusType)
              );
            }}
          />
        </div>
      </div>
    </div>
  );
};

const critRateTable: Record<EngineRank, Record<EngineLevel, number>> = {
  S: {
    10: 9.6,
    20: 12.5,
    30: 15.4,
    40: 18.2,
    50: 21.1,
    60: 24,
  },
  // unknown data
  A: {
    10: 8,
    20: 10.4,
    30: 12.8,
    40: 15.2,
    50: 17.6,
    60: 20,
  },
  // unknown data
  B: {
    10: 6.4,
    20: 8.3,
    30: 10.2,
    40: 12,
    50: 14,
    60: 16,
  },
};

const critDamageTable: Record<EngineRank, Record<EngineLevel, number>> = {
  S: {
    10: 19.2,
    20: 25,
    30: 30.8, // unknown data
    40: 36.4, // unknown data
    50: 42.2, // unknown data
    60: 48,
  },
  // unknown data
  A: {
    10: 16,
    20: 20.8,
    30: 25.6,
    40: 30.4,
    50: 35.2,
    60: 40,
  },
  // unknown data
  B: {
    10: 12.8,
    20: 16.6,
    30: 20.4,
    40: 24.2,
    50: 28,
    60: 32,
  },
};

const penRateTable: Record<EngineRank, Record<EngineLevel, number>> = {
  S: {
    10: 9.6,
    20: 12.5,
    30: 15.4,
    40: 18.2,
    50: 21.1,
    60: 24,
  },
  // unknown data
  A: {
    10: 8,
    20: 10.4,
    30: 12.8,
    40: 15.2,
    50: 17.6,
    60: 20,
  },
  // unknown data
  B: {
    10: 6.4,
    20: 8.3,
    30: 10.2,
    40: 12,
    50: 14,
    60: 16,
  },
};

const attackRateTable: Record<EngineRank, Record<EngineLevel, number>> = {
  S: {
    10: 12,
    20: 15.6, // unknown data
    30: 19.2, // unknown data
    40: 22.8, // unknown data
    50: 26.4, // unknown data
    60: 30,
  },
  A: {
    10: 10,
    20: 13,
    30: 16,
    40: 19,
    50: 22,
    60: 25,
  },
  B: {
    10: 8,
    20: 10.4, // unknown data
    30: 12.8, // unknown data
    40: 15.2, // unknown data
    50: 17.6, // unknown data
    60: 20,
  },
};

const changeEngine = (
  attack: number,
  level: EngineLevel,
  rank: EngineRank,
  statusType: EngineStatusType
): EngineStatus => {
  switch (statusType) {
    case "attackRate":
      return {
        attack: attack,
        attackRate: attackRateTable[rank][level],
        critRate: 0,
        critDamage: 0,
        penRatio: 0,
      };
    case "critRate":
      return {
        attack: attack,
        attackRate: 0,
        critRate: critRateTable[rank][level],
        critDamage: 0,
        penRatio: 0,
      };
    case "critDamage":
      return {
        attack: attack,
        attackRate: 0,
        critRate: 0,
        critDamage: critDamageTable[rank][level],
        penRatio: 0,
      };
    case "penRate":
      return {
        attack: attack,
        attackRate: 0,
        critRate: 0,
        critDamage: 0,
        penRatio: penRateTable[rank][level],
      };
  }

  return {
    attack: attack,
    attackRate: 0,
    critRate: 0,
    critDamage: 0,
    penRatio: 0,
  };
};
