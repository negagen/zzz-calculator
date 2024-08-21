import { DamageBase, calculateDamage, calculateExpectedDamage } from "@/core";

interface CalculatorProps {
  damageBase: DamageBase;
}

export const DamageBasePanel = ({ damageBase }: CalculatorProps) => {
  return (
    <>
      <div className="flex flex-col items-center bg-yellow-700 rounded-md p-4">
        <div className="mb-4 w-full bg-yellow-900 text-center rounded-md p-2">
          ダメージ基礎値
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
        <div className="mb-4 w-full bg-green-900 text-center rounded-md p-2">
          ダメージ
        </div>

        <div className="flex flex-row gap-1.5">
          <CalculatorCard
            text="通常ダメージ"
            value={calculateDamage(damageBase, 100, false)}
          />
          <CalculatorCard
            text="会心ダメージ"
            value={calculateDamage(damageBase, 100, true)}
          />
          <CalculatorCard
            text="ダメージ期待値"
            value={calculateExpectedDamage(damageBase, 100)}
          />
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
    <div className="flex flex-col w-40 h-20 items-center justify-center border border-gray-200 rounded-lg shadow-md">
      <div className="font-bold">{text}</div>
      <div className="">{value}</div>
    </div>
  );
};
