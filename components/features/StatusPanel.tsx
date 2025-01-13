import { StatusDetail } from "@/types";
import { calculateStatus } from "@/core";
import { HelpButton } from "./HelpButton";
import { useTranslation } from "react-i18next";

export const StatusPanel = ({
  baseStatus: detail,
}: {
  baseStatus: StatusDetail;
}) => {
  const baseStatus = detail.base;
  const status = calculateStatus(baseStatus);
  const { t } = useTranslation();

  return (
    <div className="flex flex-col items-center w-84 bg-yellow-700 rounded-md p-4 text-slate-300 max-lg:w-full">
      <div className="mb-4 w-full bg-yellow-950 text-center rounded-md p-2 relative">
        {t("components.StatusPanel.title")}
        <div className="absolute right-2 top-0 h-full flex items-center">
          <HelpButton
            title={t("components.StatusPanel.help.title")}
            content={
              <div className="flex flex-col gap-1.5">
                <p>{t("components.StatusPanel.help.0")}</p>
                <p>{t("components.StatusPanel.help.1")}</p>
                <br />
                <p>
                  {t("components.StatusPanel.help.2.1")}
                  {t("components.StatusPanel.help.2.2")}
                </p>
                <br />
                <p className="font-bold">
                  {t("components.StatusPanel.help.3")}
                </p>
              </div>
            }
          />
        </div>
      </div>

      <div className="flex flex-col gap-1.5 bg-yellow-950 rounded-md p-4 w-full h-full">
        <div className="flex flex-row">
          <div className="w-28">{t("components.StatusPanel.attack")}</div>

          <div className="flex flex-col">
            <div>
              {`${status.attack} (${baseStatus.attack} + ${status.attack - baseStatus.attack})`}
            </div>
          </div>
        </div>

        <div className="flex flex-row">
          <div className="w-28">{t("components.StatusPanel.critRate")}</div>

          <div className="flex flex-col">
            <div>{status.critRate}%</div>
          </div>
        </div>

        <div className="flex flex-row">
          <div className="w-28">{t("components.StatusPanel.critDamage")}</div>

          <div className="flex flex-col">
            <div>{status.critDamage}%</div>
          </div>
        </div>

        <div className="flex flex-row">
          <div className="w-28">{t("components.StatusPanel.penRate")}</div>

          <div className="flex flex-col">
            <div>{status.penRate}%</div>
          </div>
        </div>

        <div className="flex flex-row">
          <div className="w-28">{t("components.StatusPanel.pen")}</div>

          <div className="flex flex-col">
            <div>{status.pen}</div>
          </div>
        </div>

        <div className="flex flex-row">
          <div className="w-28">{t("components.StatusPanel.damageBuff")}</div>

          <div className="flex flex-col">
            <div>{status.damageBuff}%</div>
          </div>
        </div>
      </div>
    </div>
  );
};
