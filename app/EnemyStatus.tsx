import { Input, Select } from "antd";
import { EnemyStatus } from "./types";

export const EnemyStatusPanel = ({
  enemyStatus,
  onChange,
}: {
  enemyStatus: EnemyStatus;
  onChange: (enemyStatus: EnemyStatus) => void;
}) => {
  return (
    <div className="flex flex-col items-center w-72">
      <div>エネミー</div>

      <div className="flex flex-col items-center gap-4 w-72">
        <div className="flex flex-row items-center w-full">
          <div className="w-28">防御力</div>
          <div>
            <Input
              placeholder="防御力"
              type="number"
              value={enemyStatus.defense}
              onChange={(e) => {
                onChange({ ...enemyStatus, defense: parseInt(e.target.value) });
              }}
            />
          </div>
        </div>

        <div className="flex flex-row items-center w-full">
          <div className="w-28">防御ダウン%</div>
          <div>
            <Input
              placeholder="防御ダウン%"
              type="number"
              value={enemyStatus.defenseDown}
              onChange={(e) => {
                onChange({
                  ...enemyStatus,
                  defenseDown: parseInt(e.target.value),
                });
              }}
            />
          </div>
        </div>

        <div className="flex flex-row items-center w-full">
          <div className="w-28">属性耐性</div>
          <div>
            <Select
              defaultValue={enemyStatus.damageRes}
              options={[
                { value: -20, label: "弱点" },
                { value: 0, label: "普通" },
                { value: 20, label: "耐性" },
              ]}
              onChange={(value) => {
                onChange({ ...enemyStatus, damageRes: value });
              }}
            />
          </div>
        </div>

        <div className="flex flex-row items-center w-full">
          <div className="w-28">耐性ダウン</div>
          <div>
            <Input
              type="number"
              value={enemyStatus.registanceDown}
              onChange={(e) => {
                onChange({
                  ...enemyStatus,
                  registanceDown: parseInt(e.target.value),
                });
              }}
            />
          </div>
        </div>

        <div className="flex flex-row items-center w-full">
          <div className="w-28">ブレイク弱体倍率</div>
          <div>
            <Input
              placeholder="ブレイク弱体倍率"
              type="number"
              value={enemyStatus.stunDamageMultiplier}
              onChange={(e) => {
                onChange({
                  ...enemyStatus,
                  stunDamageMultiplier: parseInt(e.target.value),
                });
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};
