import { Input, Select, Checkbox } from "antd";
import { EnemyStatus } from "@/app/types";
import { StatusInput } from "./StatusInput";

export const EnemyStatusPanel = ({
  enemyStatus,
  onChange,
}: {
  enemyStatus: EnemyStatus;
  onChange: (enemyStatus: EnemyStatus) => void;
}) => {
  return (
    <div className="flex flex-col items-center w-72 bg-gray-700 rounded-md p-4">
      <div className="mb-4 w-full bg-gray-900 text-center rounded-md p-2">
        エネミー
      </div>

      <div className="flex flex-col items-center gap-4 w-full">
        <div className="flex flex-row items-center w-full">
          <div className="w-32">レベル</div>
          <Select
            className="w-32"
            value={enemyStatus.level}
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
                ...enemyStatus,
                level: e,
              });
            }}
          />
        </div>

        <div className="flex flex-row items-center w-full">
          <div className="w-32">基礎防御力</div>
          <Select
            className="w-32"
            value={enemyStatus.defense}
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
                ...enemyStatus,
                defense: e,
              });
            }}
          />
        </div>

        <StatusInput
          title="防御ダウン%"
          value={enemyStatus.defenseDown}
          onChange={(value) => onChange({ ...enemyStatus, defenseDown: value })}
        />

        <div className="flex flex-row items-center w-full">
          <div className="w-32">属性耐性</div>
          <Select
            className="w-32"
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

        <StatusInput
          title="耐性ダウン%"
          value={enemyStatus.registanceDown}
          onChange={(value) =>
            onChange({ ...enemyStatus, registanceDown: value })
          }
        />

        <div className="flex flex-row items-center w-full">
          <div>
            <Checkbox
              checked={enemyStatus.isStun}
              onChange={(e) => {
                onChange({
                  ...enemyStatus,
                  isStun: e.target.checked,
                });
              }}
            >
              <p className="text-white">ブレイク状態にする</p>
            </Checkbox>
          </div>
        </div>

        <div className="flex flex-row items-center w-full">
          <div className="w-32">
            ブレイク
            <br />
            弱体倍率
          </div>
          <Input
            className="w-32"
            placeholder="ブレイク弱体倍率"
            type="number"
            value={enemyStatus.stunDamageMultiplier}
            disabled={!enemyStatus.isStun}
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
  );
};
