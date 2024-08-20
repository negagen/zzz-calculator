import { Input } from "antd";
import { EngineStatus } from "@/app/types";
import { StatusInput } from "./StatusInput";

export const EngineStatusPanel = ({
  engineStatus,
  onChange,
}: {
  engineStatus: EngineStatus;
  onChange: (engineStatus: EngineStatus) => void;
}) => {
  return (
    <div className="flex flex-col items-center w-72 bg-gray-700 rounded-md p-4">
      <div className="mb-4 w-full bg-gray-900 text-center rounded-md p-2">
        音動機
      </div>

      <div className="flex flex-col items-center gap-2 w-64">
        <StatusInput
          title="レベル"
          disabled={true}
          value={60}
          onChange={(value) => {}}
        />
        <StatusInput
          title="攻撃力"
          value={engineStatus.attack}
          onChange={(value) => onChange({ ...engineStatus, attack: value })}
        />
        <StatusInput
          title="攻撃力%"
          value={engineStatus.attackRate}
          onChange={(value) => onChange({ ...engineStatus, attackRate: value })}
        />
        <StatusInput
          title="会心率"
          value={engineStatus.critRate}
          onChange={(value) => onChange({ ...engineStatus, critRate: value })}
        />
        <StatusInput
          title="会心ダメージ"
          value={engineStatus.critDamage}
          onChange={(value) => onChange({ ...engineStatus, critDamage: value })}
        />
        <StatusInput
          title="与ダメージ%"
          value={engineStatus.damageBuff}
          onChange={(value) => onChange({ ...engineStatus, damageBuff: value })}
        />
        <StatusInput
          title="貫通率"
          value={engineStatus.penRatio}
          onChange={(value) => onChange({ ...engineStatus, penRatio: value })}
        />
      </div>
    </div>
  );
};
