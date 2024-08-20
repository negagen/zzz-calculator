import { DamageBase } from "@/app/types";
import { calculateDamage } from "@/app/calculator";

interface CalculatorProps {
  damageBase: DamageBase;
}

export const DamageBasePanel = ({ damageBase }: CalculatorProps) => {
  return (
    <>
      <div className="flex flex-col items-center bg-yellow-700 rounded-md p-4">
        <div className="flex flex-row gap-1.5 justify-between">
          <CalculatorCard text="攻撃力" value={damageBase.attack} />
          <CalculatorCard
            text="会心係数"
            value={`${damageBase.critBonusRate}%`}
          />
          <CalculatorCard
            text="与ダメ係数"
            value={`${damageBase.damageBuff}%`}
          />
        </div>
        <div className="flex flex-row gap-1.5 justify-between">
          <CalculatorCard
            text="防御係数"
            value={`${damageBase.defenceRate}%`}
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
      <div className="flex flex-row gap-1.5 justify-between">
        <div>
          <CalculatorCard
            text="ダメージ基礎値(通常)"
            value={calculateDamage(damageBase, 100, false)}
          />
          <CalculatorCard
            text="ダメージ基礎値(会心)"
            value={calculateDamage(damageBase, 100, true)}
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
      <h1 className="font-bold">{text}</h1>
      <p className="">{value}</p>
    </div>
  );
};
