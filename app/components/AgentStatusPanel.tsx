import { Input, Select } from "antd";
import { AgentStatus } from "@/app/types";
import { StatusInput } from "./StatusInput";

export const AgentStatusPanel = ({
  agentStatus,
  onChange,
}: {
  agentStatus: AgentStatus;
  onChange: (agentStatus: AgentStatus) => void;
}) => {
  return (
    <div className="flex flex-col items-center w-72 bg-gray-700 rounded-md p-4">
      <div className="mb-4 w-full bg-gray-900 text-center rounded-md p-2">
        エージェント
      </div>

      <div className="flex flex-col items-center gap-2 w-full">
        <div className="flex flex-row items-center w-full gap-2">
          <div className="w-32">レベル</div>
          <div>
            <Select
              className="w-36"
              value={agentStatus.level}
              options={[
                { value: 10, label: "10" },
                { value: 20, label: "20" },
                { value: 30, label: "30" },
                { value: 40, label: "40" },
                { value: 50, label: "50" },
                { value: 60, label: "60" },
              ]}
              onChange={(e) => {
                onChange({
                  ...agentStatus,
                  level: e,
                });
              }}
            />
          </div>
        </div>

        <StatusInput
          title="攻撃力"
          value={agentStatus.attack}
          onChange={(value) => onChange({ ...agentStatus, attack: value })}
        />

        <StatusInput
          title="会心率"
          value={agentStatus.critRate}
          onChange={(value) => onChange({ ...agentStatus, critRate: value })}
        />
        <StatusInput
          title="会心ダメージ"
          value={agentStatus.critDamage}
          onChange={(value) => onChange({ ...agentStatus, critDamage: value })}
        />
        <StatusInput
          title="貫通率"
          value={agentStatus.penRate}
          onChange={(value) => onChange({ ...agentStatus, penRate: value })}
        />

        <StatusInput
          title="与ダメージ%"
          value={agentStatus.damageBuff}
          onChange={(value) => onChange({ ...agentStatus, damageBuff: value })}
        />
        <StatusInput
          title="攻撃力%"
          value={agentStatus.attackBuff}
          onChange={(value) => onChange({ ...agentStatus, attackBuff: value })}
        />
      </div>
    </div>
  );
};
