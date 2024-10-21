import { Input, Select } from "antd";
import { DiskSetBonus1, DiskConfig } from "@/types";
import { HelpButton } from "./HelpButton";

export const DiskStatusPanel = ({
  diskStatus,
  onChange,
}: {
  diskStatus: DiskConfig;
  onChange: (diskStatus: DiskConfig) => void;
}) => {
  return (
    <div className="flex flex-col items-center bg-gray-700 rounded-md p-4 max-md:w-full">
      <div className="mb-2 w-full bg-gray-900 text-center rounded-md p-2">
        ディスク
      </div>

      <div className="flex flex-col gap-2 w-full">
        <div className="mb-2 w-full text-sm bg-gray-800 text-center rounded-md py-1 px-2 relative">
          パーティション
          <div className="absolute right-2 top-0 h-full flex items-center">
            <HelpButton
              title="ディスク（パーティション）"
              content={
                <div className="flex flex-col gap-1.5">
                  <p>ディスクの各パーティションを設定します。</p>
                  <p>
                    ランクに応じたディスクのステータスは自動的にステータスへ反映されます。
                  </p>
                  <p>レベルは最大レベル時のステータスです。</p>
                  <p>
                    4セット効果を発動したいときは、x2を2つセットしてください。
                  </p>
                </div>
              }
            />
          </div>
        </div>
        <div className="flex lg:flex-row max-md:flex-col gap-2 w-full">
          <div className="flex flex-col gap-2 w-full">
            <div className="flex flex-row items-center w-full gap-2">
              <div className="w-6 text-center">1</div>
              <div className="flex flex-row gap-2 w-full">
                <Select
                  className="w-18"
                  value={"S"}
                  options={[{ value: "S", label: "S" }]}
                />
                <Select
                  className="w-32 grow"
                  value={"hp"}
                  options={[{ value: "hp", label: "HP" }]}
                />
              </div>
            </div>
            <div className="flex flex-row items-center w-full gap-2 w-full">
              <div className="w-6 text-center">2</div>
              <div className="flex flex-row gap-2 w-full">
                <Select
                  className="w-18"
                  value={diskStatus.slot2.rank}
                  options={[
                    { value: "S", label: "S" },
                    { value: "A", label: "A" },
                    { value: "B", label: "B" },
                  ]}
                  onChange={(value) => {
                    onChange({
                      ...diskStatus,
                      // @ts-ignore
                      slot2: { ...diskStatus.slot2, rank: value },
                    });
                  }}
                />
                <Select
                  className="w-32 grow"
                  value={"attack"}
                  options={[{ value: "attack", label: "攻撃力" }]}
                />
              </div>
            </div>

            <div className="flex flex-row items-center w-full gap-2">
              <div className="w-6 text-center">3</div>
              <div className="flex flex-row gap-2 w-full">
                <Select
                  className="w-18"
                  value={"S"}
                  options={[{ value: "S", label: "S" }]}
                />
                <Select
                  className="w-32 grow"
                  value={"defense"}
                  options={[{ value: "defense", label: "防御力" }]}
                />
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-2 w-full">
            <div className="flex flex-row items-center w-full gap-2">
              <div className="w-6 text-center">6</div>
              <div className="flex flex-row gap-2 w-full">
                <Select
                  className="w-18"
                  value={diskStatus.slot6.rank}
                  options={[
                    { value: "S", label: "S" },
                    { value: "A", label: "A" },
                    { value: "B", label: "B" },
                  ]}
                  onChange={(value) => {
                    onChange({
                      ...diskStatus,
                      // @ts-ignore
                      slot6: { ...diskStatus.slot6, rank: value },
                    });
                  }}
                />

                <Select
                  className="w-32 grow"
                  value={diskStatus.slot6.mainStatus}
                  options={[
                    { value: "attackRate", label: "攻撃力%" },
                    { value: "none", label: "その他" },
                  ]}
                  onChange={(value) => {
                    onChange({
                      ...diskStatus,
                      // @ts-ignore
                      slot6: { ...diskStatus.slot6, mainStatus: value },
                    });
                  }}
                />
              </div>
            </div>

            <div className="flex flex-row items-center w-full gap-2">
              <div className="w-6 text-center">5</div>
              <div className="flex flex-row gap-2 w-full">
                <Select
                  className="w-18"
                  value={diskStatus.slot5.rank}
                  options={[
                    { value: "S", label: "S" },
                    { value: "A", label: "A" },
                    { value: "B", label: "B" },
                  ]}
                  onChange={(value) => {
                    onChange({
                      ...diskStatus,
                      // @ts-ignore
                      slot5: { ...diskStatus.slot5, rank: value },
                    });
                  }}
                />
                <Select
                  className="w-32 grow"
                  value={diskStatus.slot5.mainStatus}
                  options={[
                    { value: "attackRate", label: "攻撃力%" },
                    { value: "damageBuff", label: "属性ダメージ" },
                    { value: "penRate", label: "貫通率" },
                    { value: "none", label: "その他" },
                  ]}
                  onChange={(value) => {
                    onChange({
                      ...diskStatus,
                      // @ts-ignore
                      slot5: { ...diskStatus.slot5, mainStatus: value },
                    });
                  }}
                />
              </div>
            </div>

            <div className="flex flex-row items-center w-full gap-2">
              <div className="w-6 text-center">4</div>
              <div className="flex flex-row gap-2 w-full">
                <Select
                  className="w-18"
                  value={diskStatus.slot4.rank}
                  options={[
                    { value: "S", label: "S" },
                    { value: "A", label: "A" },
                    { value: "B", label: "B" },
                  ]}
                  onChange={(value) => {
                    onChange({
                      ...diskStatus,
                      // @ts-ignore
                      slot4: { ...diskStatus.slot4, rank: value },
                    });
                  }}
                />
                <Select
                  className="w-32 grow"
                  value={diskStatus.slot4.mainStatus}
                  options={[
                    { value: "critRate", label: "会心率" },
                    { value: "critDamage", label: "会心ダメージ" },
                    { value: "attackRate", label: "攻撃力%" },
                    { value: "none", label: "その他" },
                  ]}
                  onChange={(value) => {
                    onChange({
                      ...diskStatus,
                      // @ts-ignore
                      slot4: { ...diskStatus.slot4, mainStatus: value },
                    });
                  }}
                />
              </div>
            </div>
          </div>
        </div>

        <div className="flex lg:flex-row max-md:flex-col gap-2 max-md:w-full mt-4">
          <div className="flex flex-col gap-2 w-full text-sm">
            <div className="mb-2 mt-2 w-full text-sm bg-gray-800 text-center rounded-md py-1 px-2 relative">
              セット効果
              <div className="absolute right-2 top-0 h-full flex items-center">
                <HelpButton
                  title="ディスクセット効果"
                  content={
                    <div className="flex flex-col gap-1.5">
                      <p>ディスクのセット効果を設定します。</p>
                      <p>セット効果はステータスに自動的に反映されます。</p>
                      <p>4セット効果は戦闘中バフに自動的に反映されます。</p>
                    </div>
                  }
                />
              </div>
            </div>

            <DiskSetSelect diskStatus={diskStatus} onChange={onChange} />
          </div>

          <div className="flex flex-col gap-2 w-full text-sm">
            <div className="mb-2 mt-2 max-md:w-full text-sm bg-gray-800 text-center rounded-md py-1 px-2 relative">
              サブステータス上昇回数
              <div className="absolute right-2 top-0 h-full flex items-center">
                <HelpButton
                  title="ディスクサブステータス上昇回数"
                  content={
                    <div className="flex flex-col gap-1.5">
                      <p>ディスクのサブステータスの上昇回数を指定できます。</p>
                      <p>上昇量はステータスに自動的に反映されます。</p>
                    </div>
                  }
                />
              </div>
            </div>

            <div className="flex flex-row items-center w-full gap-2">
              <SubStatusInput
                title="攻撃力"
                value={diskStatus.slot1.subStatusUp.attack}
                onChange={(value) =>
                  onChange({
                    ...diskStatus,
                    slot1: {
                      ...diskStatus.slot1,
                      subStatusUp: {
                        ...diskStatus.slot1.subStatusUp,
                        attack: value,
                      },
                    },
                  })
                }
              />

              <SubStatusInput
                title="攻撃力%"
                value={diskStatus.slot1.subStatusUp.attackRate}
                onChange={(value) =>
                  onChange({
                    ...diskStatus,
                    slot1: {
                      ...diskStatus.slot1,
                      subStatusUp: {
                        ...diskStatus.slot1.subStatusUp,
                        attackRate: value,
                      },
                    },
                  })
                }
              />
            </div>
            <div className="flex flex-row items-center w-full gap-2">
              <SubStatusInput
                title="会心率"
                value={diskStatus.slot1.subStatusUp.critRate}
                onChange={(value) =>
                  onChange({
                    ...diskStatus,
                    slot1: {
                      ...diskStatus.slot1,
                      subStatusUp: {
                        ...diskStatus.slot1.subStatusUp,
                        critRate: value,
                      },
                    },
                  })
                }
              />

              <SubStatusInput
                title="会心DMG"
                value={diskStatus.slot1.subStatusUp.critDamage}
                onChange={(value) =>
                  onChange({
                    ...diskStatus,
                    slot1: {
                      ...diskStatus.slot1,
                      subStatusUp: {
                        ...diskStatus.slot1.subStatusUp,
                        critDamage: value,
                      },
                    },
                  })
                }
              />
            </div>

            <SubStatusInput
              title="貫通値"
              value={diskStatus.slot1.subStatusUp.pen}
              onChange={(value) =>
                onChange({
                  ...diskStatus,
                  slot1: {
                    ...diskStatus.slot1,
                    subStatusUp: {
                      ...diskStatus.slot1.subStatusUp,
                      pen: value,
                    },
                  },
                })
              }
            />
          </div>
        </div>
      </div>
    </div>
  );
};

const DiskSetSelect = ({
  diskStatus,
  onChange,
}: {
  diskStatus: DiskConfig;
  onChange: (diskStatus: DiskConfig) => void;
}) => {
  const options = [
    { value: "none", label: "なし" },
    {
      value: "WoodpeckerElectro",
      label: "ウッドペッカー・エレクトロ x 2",
    },
    { value: "HormonePunk", label: "ホルモン・パンク x 2" },
    { value: "PufferElectro", label: "パファー・エレクトロ x 2" },
    {
      value: "FangedMetal",
      label: "獣牙のヘヴィメタル x 2",
    },
    { value: "InfernoMetal", label: "炎獄のヘヴィメタル x 2" },
    {
      value: "ThunderMetal",
      label: "霹靂のヘヴィメタル x 2",
    },
    {
      value: "ChaoticMetal",
      label: "混沌のヘヴィメタル x 2",
    },
    { value: "PolarMetal", label: "極地のヘヴィメタル x 2" },
    {
      value: "FreedomBlues",
      label: "フリーダム・ブルース x 2",
    },
    {
      value: "SwingJazz",
      label: "スウィング・ジャズ x 2",
    },
    { value: "ShockstarDisco", label: "ショックスター・ディスコ x 2" },
    { value: "SoulRock", label: "ソウルロック x 2" },
  ];

  return (
    <div className="flex flex-col items-center w-full gap-2 lg:w-72 max-md:w-full">
      <Select
        className="lg:w-64 grow max-md:w-full"
        value={diskStatus.slot1.drive}
        options={options}
        onChange={(value) =>
          onChange({
            ...diskStatus,
            slot1: { ...diskStatus.slot1, drive: value },
            slot2: { ...diskStatus.slot2, drive: value },
          })
        }
      />
      <Select
        className="lg:w-64 grow max-md:w-full"
        value={diskStatus.slot3.drive}
        options={options}
        onChange={(value) => {
          onChange({
            ...diskStatus,
            slot3: { ...diskStatus.slot3, drive: value },
            slot4: { ...diskStatus.slot4, drive: value },
          });
        }}
      />
      <Select
        className="w-64 grow max-md:w-full"
        value={diskStatus.slot5.drive}
        options={options}
        onChange={(value) => {
          onChange({
            ...diskStatus,
            slot5: { ...diskStatus.slot5, drive: value },
            slot6: { ...diskStatus.slot6, drive: value },
          });
        }}
      />
    </div>
  );
};

const SubStatusInput = ({
  title,
  value,
  onChange,
}: {
  title: string;
  value: number;
  onChange: (value: number) => void;
}) => {
  return (
    <div className="flex flex-row items-center w-full gap-3">
      <div className="w-16 text-right">{title}</div>
      <div>
        <Input
          className="w-16"
          type="number"
          value={value}
          min={0}
          onChange={(e) => {
            let value = e.target.value;
            if (value == "") {
              value = "0";
            }

            onChange(parseInt(value));
          }}
        />
      </div>
    </div>
  );
};
