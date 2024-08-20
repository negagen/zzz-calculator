import { BaseStatus } from "./types";

export const StatusPanel = ({ baseStatus }: { baseStatus: BaseStatus }) => {
  return (
    <div className="flex flex-col p-4 border border-gray-200 rounded-lg shadow-md">
      <div className="text-xl font-bold">ステータス</div>
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
