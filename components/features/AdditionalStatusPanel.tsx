import { BattleStatus, DiskConfig, StatusDetail } from "@/types";
import { StatusInput } from "./StatusInput";
import { HelpButton } from "./HelpButton";
import { useTranslation } from "react-i18next";

export const AdditionalStatusPanel = ({
  battleStatus,
  status,
  onChange,
}: {
  battleStatus: BattleStatus;
  status: StatusDetail;
  onChange: (battleStatus: BattleStatus) => void;
}) => {
  const { t } = useTranslation();

  return (
    <div className="flex flex-col items-center w-72 bg-gray-700 rounded-md p-4 max-md:w-full">
      <div className="mb-4 w-full bg-gray-900 text-center rounded-md p-2 relative">
        {t("components.AdditionalStatusPanel.skillDamageRate")}
      </div>

      <StatusInput
        title={t("components.AdditionalStatusPanel.damageRate")}
        value={battleStatus.skillDamageRate}
        unit="%"
        onChange={(value) =>
          onChange({ ...battleStatus, skillDamageRate: value })
        }
      />

      <div className="mb-4 w-full bg-gray-900 text-center rounded-md p-2 relative mt-4">
        {t("components.AdditionalStatusPanel.battleBuff")}
        <div className="absolute right-2 top-0 h-full flex items-center">
          <HelpButton
            title={t("components.AdditionalStatusPanel.help.title")}
            content={
              <div className="flex flex-col gap-1.5">
                <p>{t("components.AdditionalStatusPanel.help.0")}</p>
                <p>{t("components.AdditionalStatusPanel.help.1")}</p>
                <p>{t("components.AdditionalStatusPanel.help.2")}</p>
                <br />
                <p className="font-bold">
                  {t("components.AdditionalStatusPanel.help.3")}
                </p>
              </div>
            }
          />
        </div>
      </div>

      <div className="flex flex-col items-center w-full gap-2">
        <StatusInput
          title={t("statusBonus.attack")}
          value={battleStatus.attackBonus}
          onChange={(value) =>
            onChange({ ...battleStatus, attackBonus: value })
          }
        />

        <StatusInput
          title={t("statusBonus.battleAttackRate")}
          unit="%"
          base={status.statusBonus.attackBuff}
          value={battleStatus.attackBuff}
          onChange={(value) => onChange({ ...battleStatus, attackBuff: value })}
        />

        <StatusInput
          title={t("statusBonus.critRate")}
          base={status.statusBonus.critRateBonus}
          value={battleStatus.critRateBonus}
          unit="%"
          onChange={(value) =>
            onChange({ ...battleStatus, critRateBonus: value })
          }
        />

        <StatusInput
          title={t("statusBonus.critDamage")}
          base={status.statusBonus.critDamageBonus}
          value={battleStatus.critDamageBonus}
          unit="%"
          onChange={(value) =>
            onChange({ ...battleStatus, critDamageBonus: value })
          }
        />

        <StatusInput
          title={t("statusBonus.penRate")}
          base={status.statusBonus.penRateBonus}
          value={battleStatus.penRateBonus}
          unit="%"
          onChange={(value) =>
            onChange({ ...battleStatus, penRateBonus: value })
          }
        />

        <StatusInput
          title={t("statusBonus.damageBuff")}
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
