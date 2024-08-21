import { AdditionalStatus } from "@/core";
import { StatusInput } from "./StatusInput";

export const AdditionalStatusPanel = ({
  battleStatus,
  onChange,
}: {
  battleStatus: AdditionalStatus;
  onChange: (battleStatus: AdditionalStatus) => void;
}) => {
  return (
    <div className="flex flex-col items-center w-72 bg-gray-700 rounded-md p-4">
      <div className="mb-4 w-full bg-gray-900 text-center rounded-md p-2">
        戦闘中バフ
      </div>

      <div className="flex flex-col items-center w-full gap-4">
        <StatusInput
          title="攻撃力実数"
          value={battleStatus.attackBonus}
          onChange={(value) =>
            onChange({ ...battleStatus, attackBonus: value })
          }
        />

        <StatusInput
          title="戦闘攻撃力%"
          value={battleStatus.attackRateBonus}
          onChange={(value) =>
            onChange({ ...battleStatus, attackRateBonus: value })
          }
        />

        <StatusInput
          title="会心率"
          value={battleStatus.critRateBonus}
          onChange={(value) =>
            onChange({ ...battleStatus, critRateBonus: value })
          }
        />

        <StatusInput
          title="会心ダメージ"
          value={battleStatus.critDamageBonus}
          onChange={(value) =>
            onChange({ ...battleStatus, critDamageBonus: value })
          }
        />

        <StatusInput
          title="貫通率"
          value={battleStatus.penRateBonus}
          onChange={(value) =>
            onChange({ ...battleStatus, penRateBonus: value })
          }
        />

        <StatusInput
          title="与ダメージ%"
          value={battleStatus.damageBuffBonus}
          onChange={(value) =>
            onChange({ ...battleStatus, damageBuffBonus: value })
          }
        />
      </div>
    </div>
  );
};
