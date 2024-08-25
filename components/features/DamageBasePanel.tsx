import { calculateDamage, calculateExpectedDamage } from "@/core";
import { DamageBase } from "@/types";
import { HelpButton } from "./HelpButton";

interface CalculatorProps {
  damageBase: DamageBase;
}

export const DamageBasePanel = ({ damageBase }: CalculatorProps) => {
  return (
    <>
      <div className="flex flex-col items-center bg-yellow-700 rounded-md p-4 text-slate-200">
        <div className="mb-4 w-full bg-yellow-950 text-center rounded-md p-2 relative">
          ダメージ基礎値
          <div className="absolute right-2 top-0 h-full flex items-center">
            <HelpButton
              title="ダメージ基礎値"
              content={
                <div className="flex flex-col gap-1.5">
                  <p>
                    ダメージの計算式に最終的に利用される値を表示しています。
                  </p>
                  <p>
                    ブレイク弱体倍率を有効にしたい場合はエネミーステータスの「ブレイク状態にする」のチェックを入れてください。
                  </p>
                  <br />
                  <p>ダメージは以下の式で計算されます。</p>
                  <p>
                    <pre className="bg-gray-700 text-white p-2 text-wrap">
                      ダメージ = 攻撃力 * 会心係数 * 与ダメ係数 *
                      スキルダメージ倍率 * 防御係数 * ブレイク弱体倍率 *
                      属性係数
                    </pre>
                  </p>
                  <p>
                    <pre className="bg-gray-700 text-white p-2 text-wrap">
                      会心係数 = 100 + 会心ダメージ * 会心率
                    </pre>
                  </p>
                  <p>
                    <pre className="bg-gray-700 text-white p-2 text-wrap">
                      属性係数 = 100 + 属性耐性補正 + 属性耐性ダウン
                    </pre>
                    属性耐性補正は弱点なら20%、耐性なら-20%です。
                  </p>
                </div>
              }
            />
          </div>
        </div>

        <div className="flex lg:flex-row max-md:flex-col items-center justify-center gap-2 w-full">
          <div className="grid max-md:grid-cols-2 lg:grid-cols-3 gap-2 items-center bg-yellow-700 rounded-md text-slate-200 w-full">
            <CalculatorCard text="戦闘攻撃力" value={damageBase.attack} />
            <CalculatorCard
              text="会心係数"
              value={`${damageBase.critBonusRate}%`}
            />
            <CalculatorCard
              text="与ダメ係数"
              value={`${damageBase.damageBuff}%`}
            />
            <CalculatorCard
              text="防御係数"
              value={`${damageBase.defenseRate}%`}
            />
            <CalculatorCard
              text="属性係数"
              value={`${damageBase.registanceRate}%`}
            />
            <CalculatorCard
              text="ブレイク弱体倍率"
              value={damageBase.isStun ? `${damageBase.stunBonusRate}%` : "-"}
            />
          </div>

          <div className="flex flex-col w-56 items-center justify-center bg-yellow-950 rounded-md text-slate-200 max-md:w-full max-md:py-4 h-full">
            <div className="font-bold">スキルダメージ倍率</div>
            <div className="">{damageBase.skillDamageRate}%</div>
          </div>
        </div>
      </div>

      <div className="flex flex-col items-center bg-green-700 grow rounded-md p-4">
        <div className="mb-2.5 w-full bg-green-950 text-center rounded-md p-2 relative">
          <div className="flex flex-col h-32 items-center justify-center rounded-lg shadow-md w-full text-lg">
            <div className="font-bold">ダメージ期待値</div>
            <div className="">{calculateExpectedDamage(damageBase)}</div>
            <div className="absolute right-2 top-2 flex items-center">
              <HelpButton
                title="ダメージ期待値"
                content={
                  <div className="flex flex-col gap-1.5">
                    <p>
                      ダメージ基礎値に基づいて、ダメージの期待値を計算しています。
                    </p>
                    <br />
                    <p>
                      ダメージは仕様が推定に基づくものであることや、小数点の端数処理などの理由で、実際のゲーム内のダメージとは異なる可能性があります。
                    </p>
                    <p>
                      検証を行った範囲では、誤差は±5%の範囲に収まっていました。もし大きなずれがある場合は報告してもらえると助かります。
                    </p>
                    <br />
                    <p>期待値の算出には会心係数を使用しています。</p>
                    <p>
                      下部に表示されているものは通常ダメージと会心ダメージのそれぞれの実際のダメージです。
                    </p>
                  </div>
                }
              />
            </div>
          </div>
        </div>

        <div className="flex flex-row gap-1.5 w-full">
          <div className="flex flex-col h-24 items-center bg-green-900 justify-center border border-gray-200 rounded-lg shadow-md w-1/2">
            <div className="font-bold">通常ダメージ</div>
            <div className="">{calculateDamage(damageBase, false)}</div>
          </div>

          <div className="flex flex-col h-24 items-center bg-green-900 justify-center border border-gray-200 rounded-lg shadow-md w-1/2">
            <div className="font-bold">会心ダメージ</div>
            <div className="">{calculateDamage(damageBase, true)}</div>
          </div>
        </div>
      </div>
    </>
  );
};

const CalculatorCard = ({
  text,
  value,
}: {
  text: string;
  value: string | number;
}) => {
  return (
    <div className="flex flex-col h-24 items-center justify-center bg-yellow-950 rounded-lg shadow-md text-slate-200 w-full">
      <div className="font-bold">{text}</div>
      <div className="">{value}</div>
    </div>
  );
};
