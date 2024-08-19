import { Input } from "antd";
import { EngineStatus } from "./types";

export const EngineStatusPanel = ({
  engineStatus,
  onChange,
}: {
  engineStatus: EngineStatus;
  onChange: (engineStatus: EngineStatus) => void;
}) => {
  return (
    <div className="flex flex-col items-center w-72">
      <div>音動機</div>

      <div className="flex flex-col items-center gap-4 w-72">
        <div className="flex flex-row items-center w-full">
          <div className="w-28">攻撃力</div>
          <div>
            <Input
              placeholder="攻撃力実数"
              type="number"
              value={engineStatus.attack}
              onChange={(e) => {
                onChange({
                  ...engineStatus,
                  attack: parseInt(e.target.value),
                });
              }}
            />
          </div>
        </div>

        <div className="flex flex-row items-center w-full">
          <div className="w-28">攻撃力%</div>
          <div>
            <Input
              placeholder="攻撃力%"
              type="number"
              step="0.1"
              value={engineStatus.attackRate}
              onChange={(e) => {
                onChange({
                  ...engineStatus,
                  attackRate: parseFloat(e.target.value),
                });
              }}
            />
          </div>
        </div>

        <div className="flex flex-row items-center w-full">
          <div className="w-28">会心率</div>
          <div>
            <Input
              placeholder="会心率"
              type="number"
              step="0.1"
              value={engineStatus.critRate}
              onChange={(e) => {
                onChange({
                  ...engineStatus,
                  critRate: parseFloat(e.target.value),
                });
              }}
            />
          </div>
        </div>

        <div className="flex flex-row items-center w-full">
          <div className="w-28">会心ダメージ</div>
          <div>
            <Input
              placeholder="会心ダメージ"
              type="number"
              step="0.1"
              value={engineStatus.critDamage}
              onChange={(e) => {
                onChange({
                  ...engineStatus,
                  critDamage: parseFloat(e.target.value),
                });
              }}
            />
          </div>
        </div>

        <div className="flex flex-row items-center w-full">
          <div className="w-28">貫通率</div>
          <div>
            <Input
              placeholder="貫通率"
              type="number"
              step="0.1"
              value={engineStatus.penRatio}
              onChange={(e) => {
                onChange({
                  ...engineStatus,
                  penRatio: parseFloat(e.target.value),
                });
              }}
            />
          </div>
        </div>

        <div className="flex flex-row items-center w-full">
          <div className="w-28">与ダメージ%</div>
          <div>
            <Input
              placeholder="与ダメージ%"
              type="number"
              step="0.1"
              value={engineStatus.damageBuff}
              onChange={(e) => {
                onChange({
                  ...engineStatus,
                  damageBuff: parseFloat(e.target.value),
                });
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};
