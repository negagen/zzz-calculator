import { BaseStatus } from "@/app/types";

export const StatusPanel = ({ baseStatus }: { baseStatus: BaseStatus }) => {
  return (
    <div className="flex flex-col items-center w-72 bg-yellow-700 rounded-md p-4">
      <div className="mb-4 w-full bg-yellow-900 text-center rounded-md p-2">
        ステータス
      </div>

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
