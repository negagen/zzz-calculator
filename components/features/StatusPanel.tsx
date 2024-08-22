import { BaseStatus } from "@/core";
import { HelpButton } from "./HelpButton";

export const StatusPanel = ({ baseStatus }: { baseStatus: BaseStatus }) => {
  return (
    <div className="flex flex-col items-center w-80 bg-yellow-700 rounded-md p-4 text-slate-300 max-md:w-full">
      <div className="mb-4 w-full bg-yellow-950 text-center rounded-md p-2 relative">
        ステータス
        <div className="absolute right-2 top-0 h-full flex items-center">
          <HelpButton
            title="ステータス"
            content={
              <div className="flex flex-col gap-1.5">
                <p>最終的なエージェントのステータスを表示しています。</p>
                <p>
                  ステータスはエージェント、音動機、ディスクの設定によって変化します。
                </p>
                <br />
                <p>
                  編成画面のステータス画面で表示されるものと同じです。
                  ただし、属性ダメージバフは与ダメージバフと合算して計算しています。
                </p>
                <br />
                <p className="font-bold">
                  戦闘中バフはステータスには直接反映されず、ダメージ基礎値に反映されます。
                </p>
              </div>
            }
          />
        </div>
      </div>

      <div className="flex flex-col gap-1.5 bg-yellow-950 rounded-md p-4 w-full h-full">
        <div className="flex flex-row">
          <div className="w-28">攻撃力</div>

          <div className="flex flex-col">
            <div>
              {`${baseStatus.attack} (${baseStatus.baseAttack} + ${baseStatus.attackBonus})`}
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
          <div className="w-28">貫通率</div>

          <div className="flex flex-col">
            <div>{baseStatus.penRate}%</div>
          </div>
        </div>

        <div className="flex flex-row">
          <div className="w-28">貫通値</div>

          <div className="flex flex-col">
            <div>{baseStatus.pen}</div>
          </div>
        </div>

        <div className="flex flex-row">
          <div className="w-28">与ダメージ%</div>

          <div className="flex flex-col">
            <div>{baseStatus.damageBuff}%</div>
          </div>
        </div>
      </div>
    </div>
  );
};
