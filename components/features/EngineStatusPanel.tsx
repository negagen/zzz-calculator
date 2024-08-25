import { Select } from "antd";
import { Engine, EngineLevel } from "@/types";
import { HelpButton } from "./HelpButton";

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
  return (
    <div className="flex flex-col items-center w-72 bg-gray-700 rounded-md p-4 h-full max-md:w-full">
      <div className="mb-4 w-full bg-gray-900 text-center rounded-md p-2 relative">
        音動機
        <div className="absolute right-2 top-0 h-full flex items-center">
          <HelpButton
            title="音動機"
            content={
              <div className="flex flex-col gap-1.5">
                <p>音動機を設定します。</p>
                <p>
                  レベルに応じた音動機のステータス、および上級ステータスは自動的にステータスへ反映されます。
                </p>
                <p>
                  上級ステータスのボーナスは上限突破前のステータスです。
                  <br />
                  また、情報が足りずAランクおよびBランクのレベル50以下のステータスに関しては正確ではないものが含まれています。
                </p>
                <p className="font-bold">
                  音動機の効果は反映されません。戦闘中バフへ手動で反映してください。
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
              className="lg:w-64 max-md:w-full"
              value={engines.indexOf(engine)}
              options={engines.map((engine, i) => ({
                value: i,
                label: engine.name,
              }))}
              onChange={(e) => {
                onChange(engines[e as number], level);
              }}
            />
          </div>
        </div>

        <div className="flex flex-row items-center w-full gap-2">
          <div className="w-36">レベル</div>
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
        </div>
      </div>
    </div>
  );
};
