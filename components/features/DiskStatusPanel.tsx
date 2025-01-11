import { Input, Select } from "antd";
import { DiskConfig } from "@/types";
import { HelpButton } from "./HelpButton";
import { useTranslation } from "react-i18next";

export const DiskStatusPanel = ({
  diskStatus,
  onChange,
}: {
  diskStatus: DiskConfig;
  onChange: (diskStatus: DiskConfig) => void;
}) => {
  const { t } = useTranslation();

  return (
    <div className="flex flex-col items-center bg-gray-700 rounded-md p-4 max-md:w-full">
      <div className="mb-2 w-full bg-gray-900 text-center rounded-md p-2">
        {t("components.DiskStatusPanel.title")}
      </div>

      <div className="flex flex-col gap-2 w-full">
        <div className="mb-2 w-full text-sm bg-gray-800 text-center rounded-md py-1 px-2 relative">
          {t("components.DiskStatusPanel.partition")}
          <div className="absolute right-2 top-0 h-full flex items-center">
            <HelpButton
              title={t("components.DiskStatusPanel.help1.title")}
              content={
                <div className="flex flex-col gap-1.5">
                  <p>{t("components.DiskStatusPanel.help1.0")}</p>
                  <p>{t("components.DiskStatusPanel.help1.1")}</p>
                  <p>{t("components.DiskStatusPanel.help1.2")}</p>
                  <p>{t("components.DiskStatusPanel.help1.3")}</p>

                  <p className="pt-4">
                    {t("components.DiskStatusPanel.help1.4")}
                    <ul>
                      <li>{t("components.DiskStatusPanel.help1.4.1")}</li>
                    </ul>
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
                  options={[
                    {
                      value: "attack",
                      label: t("components.DiskStatusPanel.status.attack"),
                    },
                  ]}
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
                  options={[
                    {
                      value: "defense",
                      label: t("components.DiskStatusPanel.status.defense"),
                    },
                  ]}
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
                    {
                      value: "attackRate",
                      label: t("components.DiskStatusPanel.status.attackRate"),
                    },
                    {
                      value: "none",
                      label: t("components.DiskStatusPanel.status.none"),
                    },
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
                    {
                      value: "attackRate",
                      label: t("components.DiskStatusPanel.status.attackRate"),
                    },
                    {
                      value: "damageBuff",
                      label: t("components.DiskStatusPanel.status.damageBuff"),
                    },
                    {
                      value: "penRate",
                      label: t("components.DiskStatusPanel.status.penRate"),
                    },
                    {
                      value: "none",
                      label: t("components.DiskStatusPanel.status.none"),
                    },
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
                    {
                      value: "critRate",
                      label: t("components.DiskStatusPanel.status.critRate"),
                    },
                    {
                      value: "critDamage",
                      label: t("components.DiskStatusPanel.status.critDamage"),
                    },
                    {
                      value: "attackRate",
                      label: t("components.DiskStatusPanel.status.attackRate"),
                    },
                    {
                      value: "none",
                      label: t("components.DiskStatusPanel.status.none"),
                    },
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
              {t("components.DiskStatusPanel.diskSet")}
              <div className="absolute right-2 top-0 h-full flex items-center">
                <HelpButton
                  title={t("components.DiskStatusPanel.help2.title")}
                  content={
                    <div className="flex flex-col gap-1.5">
                      <p>{t("components.DiskStatusPanel.help2.0")}</p>
                      <p>{t("components.DiskStatusPanel.help2.1")}</p>
                      <p>{t("components.DiskStatusPanel.help2.2")}</p>
                    </div>
                  }
                />
              </div>
            </div>

            <DiskSetSelect diskStatus={diskStatus} onChange={onChange} />
          </div>

          <div className="flex flex-col gap-2 w-full text-sm">
            <div className="mb-2 mt-2 max-md:w-full text-sm bg-gray-800 text-center rounded-md py-1 px-2 relative">
              {t("components.DiskStatusPanel.subStatusUp")}
              <div className="absolute right-2 top-0 h-full flex items-center">
                <HelpButton
                  title={t("components.DiskStatusPanel.help3.title")}
                  content={
                    <div className="flex flex-col gap-1.5">
                      <p>{t("components.DiskStatusPanel.help3.0")}</p>
                      <p>{t("components.DiskStatusPanel.help3.1")}</p>
                    </div>
                  }
                />
              </div>
            </div>

            <div className="flex flex-row items-center w-full gap-2">
              <SubStatusInput
                title={t("components.DiskStatusPanel.status.attack")}
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
                title={t("components.DiskStatusPanel.status.attackRate")}
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
                title={t("components.DiskStatusPanel.status.critRate")}
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
                title={t("components.DiskStatusPanel.status.critDamage/short")}
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
              title={t("components.DiskStatusPanel.status.pen")}
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
  const { t } = useTranslation();
  const disks = [
    "none",
    "WoodpeckerElectro",
    "HormonePunk",
    "PufferElectro",
    "FangedMetal",
    "InfernoMetal",
    "ThunderMetal",
    "ChaoticMetal",
    "PolarMetal",
    "FreedomBlues",
    "SwingJazz",
    "ShockstarDisco",
    "SoulRock",
    "ProtoPunk",
    "ChaosJazz",
    "AstralVoice",
    "BranchAndBladeSong",
  ];
  const options = disks.map((disk) => {
    return {
      value: disk,
      // @ts-expect-error
      label: t(`components.DiskStatusPanel.diskSetSelect.${disk}`),
    };
  });

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
