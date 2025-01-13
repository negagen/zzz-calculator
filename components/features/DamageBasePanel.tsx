import { calculateDamage, calculateExpectedDamage } from "@/core";
import { DamageBase } from "@/types";
import { HelpButton } from "./HelpButton";
import { useTranslation } from "react-i18next";

interface CalculatorProps {
  damageBase: DamageBase;
}

export const DamageBasePanel = ({ damageBase }: CalculatorProps) => {
  const { t } = useTranslation();

  return (
    <>
      <div className="flex flex-col items-center bg-yellow-700 rounded-md p-4 text-slate-200">
        <div className="mb-4 w-full bg-yellow-950 text-center rounded-md p-2 relative">
          {t("components.DamageBasePanel.title")}
          <div className="absolute right-2 top-0 h-full flex items-center">
            <HelpButton
              title={t("components.DamageBasePanel.help1.title")}
              content={
                <div className="flex flex-col gap-1.5">
                  <p>{t("components.DamageBasePanel.help1.0")}</p>
                  <p> {t("components.DamageBasePanel.help1.1")} </p>
                  <br />
                  <p> {t("components.DamageBasePanel.help1.2")} </p>
                  <p>
                    <pre className="bg-gray-700 text-white p-2 text-wrap">
                      {t("components.DamageBasePanel.help1.3")}
                    </pre>
                  </p>
                  <p>
                    <pre className="bg-gray-700 text-white p-2 text-wrap">
                      {t("components.DamageBasePanel.help1.4")}
                    </pre>
                  </p>
                  <p>
                    <pre className="bg-gray-700 text-white p-2 text-wrap">
                      {t("components.DamageBasePanel.help1.5")}
                    </pre>
                    {t("components.DamageBasePanel.help1.6")}
                  </p>
                </div>
              }
            />
          </div>
        </div>

        <div className="flex flex-row max-lg:flex-col items-center justify-center gap-2 w-full">
          <div className="grid max-lg:grid-cols-2 lg:grid-cols-3 gap-2 items-center bg-yellow-700 rounded-md text-slate-200 w-full">
            <CalculatorCard
              text={t("components.DamageBasePanel.battleAttack")}
              value={damageBase.attack}
            />
            <CalculatorCard
              text={t("components.DamageBasePanel.critCoefficient")}
              value={`${damageBase.critBonusRate}%`}
            />
            <CalculatorCard
              text={t("components.DamageBasePanel.damageCoefficient")}
              value={`${damageBase.damageBuff}%`}
            />
            <CalculatorCard
              text={t("components.DamageBasePanel.defenseCoefficient")}
              value={`${damageBase.defenseRate}%`}
            />
            <CalculatorCard
              text={t("components.DamageBasePanel.elementCoefficient")}
              value={`${damageBase.registanceRate}%`}
            />
            <CalculatorCard
              text={t("components.DamageBasePanel.stunCoefficient")}
              value={damageBase.isStun ? `${damageBase.stunBonusRate}%` : "-"}
            />
          </div>

          <div className="flex flex-col w-56 items-center justify-center bg-yellow-950 rounded-md text-slate-200 max-lg:w-full max-lg:py-4 h-full">
            <div className="font-bold">
              {t("components.DamageBasePanel.skillDamageRate")}
            </div>
            <div className="">{damageBase.skillDamageRate}%</div>
          </div>
        </div>
      </div>

      <div className="flex flex-col items-center w-72 max-lg:w-full bg-green-700 grow rounded-md p-4">
        <div className="mb-2.5 w-full bg-green-950 text-center rounded-md p-2 relative">
          <div className="flex flex-col h-32 items-center justify-center rounded-lg shadow-md w-full text-lg">
            <div className="font-bold">
              {t("components.DamageBasePanel.damageExpected")}
            </div>
            <div className="">{calculateExpectedDamage(damageBase)}</div>
            <div className="absolute right-2 top-2 flex items-center">
              <HelpButton
                title={t("components.DamageBasePanel.damageExpected")}
                content={
                  <div className="flex flex-col gap-1.5">
                    <p>{t("components.DamageBasePanel.help2.0")}</p>
                    <br />
                    <p>{t("components.DamageBasePanel.help2.1")}</p>
                    <p>{t("components.DamageBasePanel.help2.2")}</p>
                    <br />
                    <p>{t("components.DamageBasePanel.help2.3")}</p>
                    <p>{t("components.DamageBasePanel.help2.4")}</p>
                  </div>
                }
              />
            </div>
          </div>
        </div>

        <div className="flex flex-row gap-1.5 w-full">
          <div className="flex flex-col h-24 items-center bg-green-900 justify-center border border-gray-200 rounded-lg shadow-md w-1/2">
            <div className="font-bold">
              {t("components.DamageBasePanel.normalDamage")}
            </div>
            <div className="">{calculateDamage(damageBase, false)}</div>
          </div>

          <div className="flex flex-col h-24 items-center bg-green-900 justify-center border border-gray-200 rounded-lg shadow-md w-1/2">
            <div className="font-bold">
              {t("components.DamageBasePanel.critDamage")}
            </div>
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
