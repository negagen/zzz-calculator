import { Input, Select, Checkbox } from "antd";
import { EnemyStatus } from "@/types";
import { StatusInput } from "./StatusInput";
import { HelpButton } from "./HelpButton";
import { useTranslation } from "react-i18next";

export const EnemyStatusPanel = ({
  enemyStatus,
  onChange,
}: {
  enemyStatus: EnemyStatus;
  onChange: (enemyStatus: EnemyStatus) => void;
}) => {
  const { t } = useTranslation();
  return (
    <div className="flex flex-col items-center w-72 bg-gray-700 rounded-md p-4 max-md:w-full">
      <div className="mb-4 w-full bg-gray-900 text-center rounded-md p-2 relative">
        {t("components.EnemyStatusPanel.title")}
        <div className="absolute right-2 top-0 h-full flex items-center">
          <HelpButton
            title={t("components.EnemyStatusPanel.help.title")}
            content={
              <div className="flex flex-col gap-1.5 text-wrap">
                <p>{t("components.EnemyStatusPanel.help.0")}</p>
                <p>{t("components.EnemyStatusPanel.help.1")}</p>
                <p>{t("components.EnemyStatusPanel.help.2")}</p>
                <p>{t("components.EnemyStatusPanel.help.3")}</p>
                <br />
                <p>
                  {t("components.EnemyStatusPanel.help.4.1")}
                  <br />
                  {t("components.EnemyStatusPanel.help.4.2")}
                </p>
                <br />
                <p>{t("components.EnemyStatusPanel.help.5")}</p>
                <p>
                  <pre className="bg-gray-700 text-white p-2 text-wrap">
                    {t("components.EnemyStatusPanel.help.6")}
                  </pre>

                  <pre className="bg-gray-700 text-white p-2 text-wrap">
                    {t("components.EnemyStatusPanel.help.7")}
                  </pre>

                  <pre className="bg-gray-700 text-white p-2 text-wrap">
                    {t("components.EnemyStatusPanel.help.8")}
                  </pre>

                  <pre className="bg-gray-700 text-white p-2 text-wrap">
                    {t("components.EnemyStatusPanel.help.9")}
                  </pre>
                </p>
              </div>
            }
          />
        </div>
      </div>

      <div className="flex flex-col items-center gap-2 w-full">
        <div className="flex flex-row items-center w-full gap-1">
          <div className="w-38 max-md:w-48">
            {t("components.EnemyStatusPanel.level")}
          </div>
          <Select
            className="w-20 grow mr-5 ml-1"
            value={enemyStatus.level}
            options={[
              { value: 10, label: "10" },
              { value: 20, label: "20" },
              { value: 30, label: "30" },
              { value: 40, label: "40" },
              { value: 50, label: "50" },
              { value: 60, label: "60" },
            ]}
            onChange={(e) => {
              onChange({
                ...enemyStatus,
                level: e,
              });
            }}
          />
        </div>

        <div className="flex flex-row items-center w-full gap-1">
          <div className="w-38 max-md:w-48">
            {t("components.EnemyStatusPanel.defense")}
          </div>
          <Select
            className="w-20 grow mr-5 ml-1"
            value={enemyStatus.defense}
            options={[
              { value: 10, label: "10" },
              { value: 20, label: "20" },
              { value: 30, label: "30" },
              { value: 40, label: "40" },
              { value: 45, label: "45" },
              { value: 50, label: "50" },
              { value: 51, label: "51" },
              { value: 52, label: "52" },
              { value: 53, label: "53" },
              { value: 54, label: "54" },
              { value: 55, label: "55" },
              { value: 56, label: "56" },
              { value: 57, label: "57" },
              { value: 58, label: "58" },
              { value: 59, label: "59" },
              { value: 60, label: "60" },
            ]}
            onChange={(e) => {
              onChange({
                ...enemyStatus,
                defense: e,
              });
            }}
          />
        </div>

        <StatusInput
          title={t("components.EnemyStatusPanel.defenseDown")}
          value={enemyStatus.defenseDown}
          unit="%"
          onChange={(value) => onChange({ ...enemyStatus, defenseDown: value })}
        />

        <div className="flex flex-row items-center w-full gap-1">
          <div className="w-38 max-md:w-48">
            {t("components.EnemyStatusPanel.registance")}
          </div>
          <Select
            className="w-20 grow mr-5 ml-1"
            defaultValue={enemyStatus.damageRes}
            options={[
              {
                value: -20,
                label: t("components.EnemyStatusPanel.registanceType.weekness"),
              },
              {
                value: 0,
                label: t("components.EnemyStatusPanel.registanceType.normal"),
              },
              {
                value: 20,
                label: t(
                  "components.EnemyStatusPanel.registanceType.resitance"
                ),
              },
            ]}
            onChange={(value) => {
              onChange({ ...enemyStatus, damageRes: value });
            }}
          />
        </div>

        <StatusInput
          title={t("components.EnemyStatusPanel.registanceDown")}
          value={enemyStatus.registanceDown}
          unit="%"
          onChange={(value) =>
            onChange({ ...enemyStatus, registanceDown: value })
          }
        />

        <div className="flex flex-row items-center w-full">
          <div>
            <Checkbox
              checked={enemyStatus.isStun}
              onChange={(e) => {
                onChange({
                  ...enemyStatus,
                  isStun: e.target.checked,
                });
              }}
            >
              <p className="text-white">
                {t("components.EnemyStatusPanel.registanceDown.stun")}
              </p>
            </Checkbox>
          </div>
        </div>

        <div className="flex flex-row items-center w-full gap-1">
          <div className="w-38 max-md:w-48">
            {t("components.EnemyStatusPanel.stunBonus")}
          </div>
          <Input
            className="w-20 grow ml-1"
            placeholder={t("components.EnemyStatusPanel.stunBonus")}
            type="number"
            value={enemyStatus.stunDamageMultiplier}
            disabled={!enemyStatus.isStun}
            onChange={(e) => {
              onChange({
                ...enemyStatus,
                stunDamageMultiplier: parseInt(e.target.value),
              });
            }}
          />
          <div className="w-4">%</div>
        </div>
      </div>
    </div>
  );
};
