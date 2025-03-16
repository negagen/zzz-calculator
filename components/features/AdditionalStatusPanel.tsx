import { BattleStatus, DiskConfig, StatusDetail, EnemyStatus } from "@/types";
import { Input, Select, Checkbox } from "antd";
import { StatusInput } from "./StatusInput";
import { HelpButton } from "./HelpButton";
import { useTranslation } from "react-i18next";
import { useState } from "react";

export const AdditionalStatusPanel = ({
  baseStatus,
  battleStatus,
  setBattleStatus,
  enemyStatus,
  setEnemyStatus,
}: {
  baseStatus: StatusDetail;
  battleStatus: BattleStatus;
  setBattleStatus: (battleStatus: BattleStatus) => void;
  enemyStatus: EnemyStatus;
  setEnemyStatus: (enemyStatus: EnemyStatus) => void;
}) => {
  const { t } = useTranslation();
  const [tab, setTab] = useState<"enemy" | "additional" | "skill">(
    "additional"
  );

  return (
    <div className="flex flex-col w-80 bg-gray-700 rounded-md gap-2 p-4 max-lg:w-full">
      <div className="flex flex-row gap-2 text-[11px] items-left">
        <button>
          <div
            className={`${
              tab === "additional"
                ? "bg-gray-700 text-white border border-gray-500"
                : "bg-gray-600 text-gray-300"
            } rounded-md p-2`}
            onClick={() => setTab("additional")}
          >
            {t("components.AdditionalStatusPanel.battleBuff")}
          </div>
        </button>
        <button>
          <div
            className={`${
              tab === "enemy"
                ? "bg-gray-700 text-white border border-gray-500"
                : "bg-gray-600 text-gray-300"
            } rounded-md p-2`}
            onClick={() => setTab("enemy")}
          >
            {t("components.EnemyStatusPanel.title")}
          </div>
        </button>
        <button>
          <div
            className={`${
              tab === "skill"
                ? "bg-gray-700 text-white border border-gray-500"
                : "bg-gray-600 text-gray-300"
            } rounded-md p-2`}
            onClick={() => setTab("skill")}
          >
            {t("components.AdditionalStatusPanel.skillDamageRate")}
          </div>
        </button>
      </div>

      <div className={`${tab === "skill" ? "" : "hidden"}`}>
        <SkillDamageRateTab
          battleStatus={battleStatus}
          onChange={setBattleStatus}
        />
      </div>

      <div className={`${tab === "enemy" ? "" : "hidden"}`}>
        <EnemyStatusTab enemyStatus={enemyStatus} onChange={setEnemyStatus} />
      </div>

      <div className={`${tab === "additional" ? "" : "hidden"}`}>
        <CombatSettingTab
          status={baseStatus}
          battleStatus={battleStatus}
          onChange={setBattleStatus}
        />
      </div>
    </div>
  );
};

const SkillDamageRateTab = ({
  battleStatus,
  onChange,
}: {
  battleStatus: BattleStatus;
  onChange: (battleStatus: BattleStatus) => void;
}) => {
  const { t } = useTranslation();

  return (
    <>
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
    </>
  );
};

const CombatSettingTab = ({
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
    <>
      <div className="mb-4 w-full bg-gray-900 text-center rounded-md p-2 relative">
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

        <StatusInput
          title={t("statusBonus.attrBuff")}
          base={status.statusBonus.attrBuffBonus}
          value={battleStatus.attrBuffBonus}
          unit="%"
          onChange={(value) =>
            onChange({ ...battleStatus, attrBuffBonus: value })
          }
        />
      </div>
    </>
  );
};

const EnemyStatusTab = ({
  enemyStatus,
  onChange,
}: {
  enemyStatus: EnemyStatus;
  onChange: (enemyStatus: EnemyStatus) => void;
}) => {
  const { t } = useTranslation();

  return (
    <>
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
    </>
  );
};
