import { Select } from "antd";
import { Engine, EngineLevel } from "@/types";
import { HelpButton } from "./HelpButton";
import { useTranslation } from "react-i18next";

export const EngineStatusPanel = ({
  engine,
  engines,
  level,
  onChange,
}: {
  engine: Engine;
  engines: Engine[];
  level: EngineLevel;
  onChange: (engine: Engine, level: EngineLevel) => void;
}) => {
  const { t } = useTranslation();

  return (
    <div className="flex flex-col items-center w-72 bg-gray-700 rounded-md p-4 h-full max-lg:w-full">
      <div className="mb-4 w-full bg-gray-900 text-center rounded-md p-2 relative">
        {t("components.EngineStatusPanel.title")}
        <div className="absolute right-2 top-0 h-full flex items-center">
          <HelpButton
            title={t("components.EngineStatusPanel.help.title")}
            content={
              <div className="flex flex-col gap-1.5">
                <p>{t("components.EngineStatusPanel.help.0")}</p>
                <p>{t("components.EngineStatusPanel.help.1")}</p>
                <p>
                  {t("components.EngineStatusPanel.help.2.1")}
                  <br />
                  {t("components.EngineStatusPanel.help.2.2")}
                </p>
                <p className="font-bold">
                  {t("components.EngineStatusPanel.help.3")}
                </p>
              </div>
            }
          />
        </div>
      </div>

      <div className="flex flex-col items-center w-full gap-2">
        <div className="flex flex-row items-center w-full gap-2">
          <div className="w-full">
            <Select
              className="w-full"
              value={engines.indexOf(engine)}
              options={engines.map((engine, i) => ({
                value: i,
                // @ts-expect-error
                label: t(`data.engine.${engine.id}`),
              }))}
              onChange={(e) => {
                onChange(engines[e as number], level);
              }}
            />
          </div>
        </div>

        <div className="flex flex-row items-center w-full gap-2">
          <div className="w-36">{t("components.EngineStatusPanel.level")}</div>
          <div className="grow">
            <Select
              className="w-32 max-md:w-full"
              value={level}
              options={[
                { value: 1, label: "1" },
                { value: 10, label: "10" },
                { value: 20, label: "20" },
                { value: 30, label: "30" },
                { value: 40, label: "40" },
                { value: 50, label: "50" },
                { value: 60, label: "60" },
              ]}
              onChange={(e) => {
                onChange(engine, e as EngineLevel);
              }}
            />
          </div>
          <div>
            <a
              className="bg-gray-800 rounded text-xs p-[3px] text-center hover:opacity-80"
              href={engine.wikiUrl}
              target="_blank"
            >
              WIKI
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
