import { Input } from "antd";
import { AgentStatus } from "./types";

export const AgentStatusPanel = ({
  agentStatus,
  onChange,
}: {
  agentStatus: AgentStatus;
  onChange: (agentStatus: AgentStatus) => void;
}) => {
  return (
    <div className="flex flex-col items-center w-72">
      <div>エージェント</div>

      <div className="flex flex-col items-center gap-4 w-52">
        <div className="flex flex-row items-center w-full">
          <div className="w-48">レベル</div>
          <div>
            <Input
              placeholder="レベル"
              type="number"
              value={agentStatus.level}
              onChange={(e) => {
                onChange({
                  ...agentStatus,
                  level: parseInt(e.target.value),
                });
              }}
            />
          </div>
        </div>

        <div className="flex flex-row items-center w-full">
          <div className="w-48">攻撃力</div>
          <div>
            <Input
              placeholder="攻撃力"
              type="number"
              value={agentStatus.attack}
              onChange={(e) => {
                onChange({
                  ...agentStatus,
                  attack: parseInt(e.target.value),
                });
              }}
            />
          </div>
        </div>

        <div className="flex flex-row items-center w-full">
          <div className="w-48">攻撃力%</div>
          <div>
            <Input
              placeholder="攻撃力%"
              type="number"
              value={agentStatus.attackBuff}
              onChange={(e) => {
                onChange({
                  ...agentStatus,
                  attackBuff: parseInt(e.target.value),
                });
              }}
            />
          </div>
        </div>

        <div className="flex flex-row items-center w-full">
          <div className="w-48">会心率</div>
          <div>
            <Input
              placeholder="会心率"
              type="number"
              step="0.1"
              value={agentStatus.critRate}
              onChange={(e) => {
                onChange({
                  ...agentStatus,
                  critRate: parseFloat(e.target.value),
                });
              }}
            />
          </div>
        </div>

        <div className="flex flex-row items-center w-full">
          <div className="w-48">会心ダメージ</div>
          <div>
            <Input
              placeholder="会心ダメージ"
              type="number"
              step="0.1"
              value={agentStatus.critDamage}
              onChange={(e) => {
                onChange({
                  ...agentStatus,
                  critDamage: parseFloat(e.target.value),
                });
              }}
            />
          </div>
        </div>

        <div className="flex flex-row items-center w-full">
          <div className="w-48">与ダメージ%</div>
          <div>
            <Input
              placeholder="与ダメージ%"
              type="number"
              value={agentStatus.damageBuff}
              onChange={(e) => {
                onChange({
                  ...agentStatus,
                  damageBuff: parseInt(e.target.value),
                });
              }}
            />
          </div>
        </div>

        <div className="flex flex-row items-center w-full">
          <div className="w-48">貫通率</div>
          <div>
            <Input
              placeholder="貫通率"
              type="number"
              value={agentStatus.penRate}
              onChange={(e) => {
                onChange({
                  ...agentStatus,
                  penRate: parseInt(e.target.value),
                });
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};
