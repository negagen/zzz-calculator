import { BattleStatus, DiskConfig, StatusDetail } from "@/types";
import { StatusInput } from "./StatusInput";
import { HelpButton } from "./HelpButton";

export const AdditionalStatusPanel = ({
  battleStatus,
  status,
  onChange,
}: {
  battleStatus: BattleStatus;
  status: StatusDetail;
  onChange: (battleStatus: BattleStatus) => void;
}) => {
  return (
    <div className="flex flex-col items-center w-72 bg-gray-700 rounded-md p-4 max-md:w-full">
      <div className="mb-4 w-full bg-gray-900 text-center rounded-md p-2 relative">
        スキルダメージ倍率
      </div>

      <StatusInput
        title="ダメージ倍率"
        value={battleStatus.skillDamageRate}
        unit="%"
        onChange={(value) =>
          onChange({ ...battleStatus, skillDamageRate: value })
        }
      />

      <div className="mb-4 w-full bg-gray-900 text-center rounded-md p-2 relative mt-4">
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

      <div className="flex flex-col items-center w-full gap-2">
        <StatusInput
          title="攻撃力実数"
          value={battleStatus.attackBonus}
          onChange={(value) =>
            onChange({ ...battleStatus, attackBonus: value })
          }
        />

        <StatusInput
          title="戦闘攻撃力%"
          unit="%"
          base={status.statusBonus.attackBuff}
          value={battleStatus.attackBuff}
          onChange={(value) => onChange({ ...battleStatus, attackBuff: value })}
        />

        <StatusInput
          title="会心率"
          base={status.statusBonus.critRateBonus}
          value={battleStatus.critRateBonus}
          unit="%"
          onChange={(value) =>
            onChange({ ...battleStatus, critRateBonus: value })
          }
        />

        <StatusInput
          title="会心ダメージ"
          base={status.statusBonus.critDamageBonus}
          value={battleStatus.critDamageBonus}
          unit="%"
          onChange={(value) =>
            onChange({ ...battleStatus, critDamageBonus: value })
          }
        />

        <StatusInput
          title="貫通率"
          base={status.statusBonus.penRateBonus}
          value={battleStatus.penRateBonus}
          unit="%"
          onChange={(value) =>
            onChange({ ...battleStatus, penRateBonus: value })
          }
        />

        <StatusInput
          title="与ダメージ%"
          base={status.statusBonus.damageBuffBonus}
          value={battleStatus.damageBuffBonus}
          unit="%"
          onChange={(value) =>
            onChange({ ...battleStatus, damageBuffBonus: value })
          }
        />
      </div>
    </div>
  );
};
