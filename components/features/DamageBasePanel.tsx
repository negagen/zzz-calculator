import { DamageBase, calculateDamage, calculateExpectedDamage } from "@/core";
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
                  <p>ダメージは以下の式で計算されます。</p>
                  <br />
                  <p>
                    <pre className="bg-gray-700 text-white p-2">
                      ダメージ = 攻撃力 * 会心係数 * 与ダメ係数 * スキル倍率 *
                      防御係数 * ブレイク弱体倍率 * 属性係数
                    </pre>
                  </p>
                  <br />
                  <p>
                    スキル倍率は通常スキルや特殊スキルなどに表示されている倍率そのものになります。
                  </p>
                  <p>
                    この計算機では、スキル倍率が100%の場合を基準として計算しています。
                  </p>
                </div>
              }
            />
          </div>
        </div>

        <div className="flex flex-row gap-1.5 justify-between">
          <CalculatorCard text="戦闘攻撃力" value={damageBase.attack} />
          <CalculatorCard
            text="会心係数"
            value={`${damageBase.critBonusRate}%`}
          />
          <CalculatorCard
            text="与ダメ係数"
            value={`${damageBase.damageBuff}%`}
          />
        </div>

        <div className="flex flex-row gap-1.5 justify-between mt-1.5">
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
      </div>

      <div className="flex flex-col items-center bg-green-700 grow rounded-md p-4">
        <div className="mb-2.5 w-full bg-green-950 text-center rounded-md p-2 relative">
          <div className="flex flex-col h-32 items-center justify-center rounded-lg shadow-md w-full text-lg">
            <div className="font-bold">ダメージ期待値</div>
            <div className="">{calculateExpectedDamage(damageBase, 100)}</div>
            <div className="absolute right-2 top-2 flex items-center">
              <HelpButton
                title="ダメージ期待値"
                content={
                  <div className="flex flex-col gap-1.5">
                    <p>
                      ダメージ基礎値に基づいて、ダメージの期待値を計算しています。
                    </p>
                    <p>ダメージは以下の式で計算されます。</p>
                    <br />
                    <p>
                      <pre className="bg-gray-700 text-white p-2">
                        ダメージ = 攻撃力 * 会心係数 * 与ダメ係数 * スキル倍率 *
                        防御係数 * ブレイク弱体倍率 * 属性係数
                      </pre>
                    </p>
                    <br />
                    <p>
                      スキル倍率は通常スキルや特殊スキルなどに表示されている倍率そのものになります。
                    </p>
                    <p>
                      この計算機では、スキル倍率が100%の場合を基準として計算しています。
                    </p>
                    <p>
                      実際のダメージを計算する際は、計算結果に対してスキル倍率を掛けてください。
                    </p>
                    <br />
                    <p>
                      ここに表示される値は期待値です。実際のダメージは下部の通常ダメージ、および会心ダメージを参照してください。
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
            <div className="">{calculateDamage(damageBase, 100, false)}</div>
          </div>

          <div className="flex flex-col h-24 items-center bg-green-900 justify-center border border-gray-200 rounded-lg shadow-md w-1/2">
            <div className="font-bold">会心ダメージ</div>
            <div className="">{calculateDamage(damageBase, 100, true)}</div>
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
    <div className="flex flex-col w-40 h-24 items-center justify-center bg-yellow-950 rounded-lg shadow-md text-slate-200">
      <div className="font-bold">{text}</div>
      <div className="">{value}</div>
    </div>
  );
};
