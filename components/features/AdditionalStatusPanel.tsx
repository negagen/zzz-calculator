import { AdditionalStatus } from "@/core";
import { StatusInput } from "./StatusInput";
import { HelpButton } from "./HelpButton";

export const AdditionalStatusPanel = ({
  battleStatus,
  onChange,
}: {
  battleStatus: AdditionalStatus;
  onChange: (battleStatus: AdditionalStatus) => void;
}) => {
  return (
    <div className="flex flex-col items-center w-72 bg-gray-700 rounded-md p-4">
      <div className="mb-4 w-full bg-gray-900 text-center rounded-md p-2 relative">
        戦闘中バフ
        <div className="absolute right-2 top-0 h-full flex items-center">
          <HelpButton
            title="戦闘中バフ設定"
            content={
              <div className="flex flex-col gap-1.5">
                <p>戦闘中のバフの効果を設定します。</p>
                <p>
                  エージェントのスキルやコアスキルによる効果、音動機の効果、ディスクの4セット効果、追加能力による効果などはここに入力してください。
                </p>
                <p>
                  現在、属性ダメージバフは与ダメージバフと合算して計算しています。属性ダメージバフも与ダメージ%に追加してください。
                </p>
                <br />
                <p className="font-bold">
                  ここに入力した内容はステータスには直接反映されず、ダメージ基礎値に反映されます。
                </p>
              </div>
            }
          />
        </div>
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
