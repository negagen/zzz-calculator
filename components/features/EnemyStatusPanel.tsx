import { Input, Select, Checkbox } from "antd";
import { EnemyStatus } from "@/core";
import { StatusInput } from "./StatusInput";
import { HelpButton } from "./HelpButton";

export const EnemyStatusPanel = ({
  enemyStatus,
  onChange,
}: {
  enemyStatus: EnemyStatus;
  onChange: (enemyStatus: EnemyStatus) => void;
}) => {
  return (
    <div className="flex flex-col items-center w-72 bg-gray-700 rounded-md p-4 max-md:w-full">
      <div className="mb-4 w-full bg-gray-900 text-center rounded-md p-2 relative">
        エネミー
        <div className="absolute right-2 top-0 h-full flex items-center">
          <HelpButton
            title="エネミー設定"
            content={
              <div className="flex flex-col gap-1.5 text-wrap">
                <p>エネミーのステータスを設定できます。</p>
                <p>
                  防御係数や属性係数、ブレイク弱体倍率は自動的にダメージ基礎値へと反映されます。
                </p>
                <p>
                  ライカンによる属性耐性ダウンや、ニコによる防御ダウンはここに設定してください。
                </p>
                <p>
                  リナの貫通率デバフなどは戦闘中バフへ手動で反映してください。
                </p>
                <br />
                <p>
                  基礎防御力はエネミーのレベルが1の時の防御力を指定します。基礎防御力からエネミーの防御力が自動的に計算されます。
                  <br />
                  Ver1.1現在、ボスの場合は一律で60という話もありますが、ここはゲーム側の設定によって変更される値なので参考程度にしてください。よくわからなければ60を指定するのがいいでしょう。
                </p>
                <br />
                <p>防御係数は以下の式で計算しています。</p>
                <p>
                  <pre className="bg-gray-700 text-white p-2 text-wrap">
                    防御係数 = エージェントレベル係数 / ( エージェントレベル係数
                    + 有効防御力 )
                  </pre>

                  <pre className="bg-gray-700 text-white p-2 text-wrap">
                    有効防御力 = [ 防御力 × ( 1 - 防御デバフ ) × ( 1 - 貫通率 )
                    ] - 貫通値
                  </pre>

                  <pre className="bg-gray-700 text-white p-2 text-wrap">
                    防御力 = エネミーレベル係数 * 基礎防御力 / 50
                  </pre>

                  <pre className="bg-gray-700 text-white p-2 text-wrap">
                    有効防御力 ≧ 0
                  </pre>
                </p>
              </div>
            }
          />
        </div>
      </div>

      <div className="flex flex-col items-center gap-2 w-full">
        <div className="flex flex-row items-center w-full">
          <div className="w-36">レベル</div>
          <Select
            className="w-32 grow"
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
          <div className="w-36">基礎防御力</div>
          <Select
            className="w-32 grow"
            value={enemyStatus.defense}
            options={[
              { value: 10, label: "10" },
              { value: 20, label: "20" },
              { value: 30, label: "30" },
              { value: 40, label: "40" },
              { value: 45, label: "45" },
              { value: 50, label: "50" },
              { value: 51, label: "51" },
              { value: 52, label: "52" },
              { value: 53, label: "53" },
              { value: 54, label: "54" },
              { value: 55, label: "55" },
              { value: 56, label: "56" },
              { value: 57, label: "57" },
              { value: 58, label: "58" },
              { value: 59, label: "59" },
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
          <div className="w-36">属性耐性</div>
          <Select
            className="w-32 grow"
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
          <div className="w-36">ブレイク弱体倍率</div>
          <Input
            className="w-32 grow"
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
