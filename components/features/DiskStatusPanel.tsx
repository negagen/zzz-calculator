import { Input, Select } from "antd";
import { DiskSetBonus, DiskStatus } from "@/core";
import { HelpButton } from "./HelpButton";

export const DiskStatusPanel = ({
  diskStatus,
  onChange,
}: {
  diskStatus: DiskStatus;
  onChange: (diskStatus: DiskStatus) => void;
}) => {
  return (
    <div className="flex flex-col items-center bg-gray-700 rounded-md p-4">
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
                </div>
              }
            />
          </div>
        </div>
        <div className="flex flex-row gap-2 w-full">
          <div className="flex flex-col gap-2 w-full">
            <div className="flex flex-row items-center w-full gap-2">
              <div className="w-6 text-center">1</div>
              <div className="flex flex-row gap-2">
                <Select
                  className="w-18"
                  value={"S"}
                  options={[{ value: "S", label: "S" }]}
                />
                <Select
                  className="w-40"
                  value={"default"}
                  options={[{ value: "default", label: "HP" }]}
                />
              </div>
            </div>
            <div className="flex flex-row items-center w-full gap-2">
              <div className="w-6 text-center">2</div>
              <div className="flex flex-row gap-2">
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
                  className="w-40"
                  value={"default"}
                  options={[{ value: "default", label: "攻撃力" }]}
                />
              </div>
            </div>

            <div className="flex flex-row items-center w-full gap-2">
              <div className="w-6 text-center">3</div>
              <div className="flex flex-row gap-2">
                <Select
                  className="w-18"
                  value={"S"}
                  options={[{ value: "S", label: "S" }]}
                />
                <Select
                  className="w-40"
                  value={"default"}
                  options={[{ value: "default", label: "防御力" }]}
                />
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-2 w-full">
            <div className="flex flex-row items-center w-full gap-2">
              <div className="w-6 text-center">6</div>
              <div className="flex flex-row gap-2">
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
                  className="w-40"
                  value={diskStatus.slot6.type}
                  options={[
                    { value: "attack", label: "攻撃力%" },
                    { value: "none", label: "その他" },
                  ]}
                  onChange={(value) => {
                    onChange({
                      ...diskStatus,
                      // @ts-ignore
                      slot6: { ...diskStatus.slot6, type: value },
                    });
                  }}
                />
              </div>
            </div>

            <div className="flex flex-row items-center w-full gap-2">
              <div className="w-6 text-center">5</div>
              <div className="flex flex-row gap-2">
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
                  className="w-40"
                  value={diskStatus.slot5.type}
                  options={[
                    { value: "attack", label: "攻撃力%" },
                    { value: "damageBuff", label: "属性ダメージ" },
                    { value: "penRate", label: "貫通率" },
                    { value: "none", label: "その他" },
                  ]}
                  onChange={(value) => {
                    onChange({
                      ...diskStatus,
                      // @ts-ignore
                      slot5: { ...diskStatus.slot5, type: value },
                    });
                  }}
                />
              </div>
            </div>

            <div className="flex flex-row items-center w-full gap-2">
              <div className="w-6 text-center">4</div>
              <div className="flex flex-row gap-2">
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
                  className="w-40"
                  value={diskStatus.slot4.type}
                  options={[
                    { value: "critRate", label: "会心率" },
                    { value: "critDamage", label: "会心ダメージ" },
                    { value: "attack", label: "攻撃力%" },
                    { value: "none", label: "その他" },
                  ]}
                  onChange={(value) => {
                    onChange({
                      ...diskStatus,
                      // @ts-ignore
                      slot4: { ...diskStatus.slot4, type: value },
                    });
                  }}
                />
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-row gap-2 w-full mt-4">
          <div className="flex flex-col gap-2 w-full text-sm">
            <div className="mb-2 mt-2 w-full text-sm bg-gray-800 text-center rounded-md py-1 px-2 relative">
              セット効果(2セット)
              <div className="absolute right-2 top-0 h-full flex items-center">
                <HelpButton
                  title="ディスクセット効果"
                  content={
                    <div className="flex flex-col gap-1.5">
                      <p>ディスクのセット効果を設定します。</p>
                      <p>セット効果はステータスに自動的に反映されます。</p>
                      <p>
                        現在、2セット効果のみ対応しています。4セット効果は戦闘中バフに手動で追加してください。
                      </p>
                    </div>
                  }
                />
              </div>
            </div>

            <DiskSetSelect diskStatus={diskStatus} onChange={onChange} />
          </div>

          <div className="flex flex-col gap-2 w-full text-sm">
            <div className="mb-2 mt-2 w-full text-sm bg-gray-800 text-center rounded-md py-1 px-2 relative">
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
                base="19"
                value={diskStatus.attackCount}
                onChange={(value) =>
                  onChange({ ...diskStatus, attackCount: value })
                }
              />

              <SubStatusInput
                title="攻撃力%"
                base="3%"
                value={diskStatus.attackRateCount}
                onChange={(value) =>
                  onChange({ ...diskStatus, attackRateCount: value })
                }
              />
            </div>
            <div className="flex flex-row items-center w-full gap-2">
              <SubStatusInput
                title="会心率"
                base="2.4%"
                value={diskStatus.critRateCount}
                onChange={(value) =>
                  onChange({ ...diskStatus, critRateCount: value })
                }
              />

              <SubStatusInput
                title="会心DMG"
                base="4.8%"
                value={diskStatus.critDamageCount}
                onChange={(value) =>
                  onChange({ ...diskStatus, critDamageCount: value })
                }
              />
            </div>

            <SubStatusInput
              title="貫通値"
              base="9"
              value={diskStatus.penCount}
              onChange={(value) => onChange({ ...diskStatus, penCount: value })}
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
  diskStatus: DiskStatus;
  onChange: (diskStatus: DiskStatus) => void;
}) => {
  const options = [
    { value: "none", label: "なし" },
    { value: "critRate", label: "ウッドペッカー (会心率+8%)" },
    { value: "attackRate", label: "ホルモン・パンク (攻撃力+10%)" },
    { value: "penRate", label: "パファー・エレクトロ (貫通率+8%)" },
    { value: "damageBuff", label: "ヘヴィメタル (属性ダメージ+10%)" },
  ];

  return (
    <div className="flex flex-col items-center w-full gap-2">
      <Select
        className="w-full"
        value={diskStatus.setBonus1.type}
        options={options}
        onChange={(value) => {
          onChange({ ...diskStatus, setBonus1: getDiskSetBonus(value) });
        }}
      />
      <Select
        className="w-full"
        value={diskStatus.setBonus2.type}
        options={options}
        onChange={(value) => {
          onChange({ ...diskStatus, setBonus2: getDiskSetBonus(value) });
        }}
      />
      <Select
        className="w-full"
        value={diskStatus.setBonus3.type}
        options={options}
        onChange={(value) => {
          onChange({ ...diskStatus, setBonus3: getDiskSetBonus(value) });
        }}
      />
    </div>
  );
};

const getDiskSetBonus = (value: string): DiskSetBonus => {
  if (value == "critRate") {
    return { type: "critRate", critRate: 8 };
  } else if (value == "attackRate") {
    return { type: "attackRate", attackRate: 10 };
  } else if (value == "penRate") {
    return { type: "penRate", penRate: 8 };
  } else if (value == "damageBuff") {
    return { type: "damageBuff", damageBuff: 10 };
  }

  return { type: "none" };
};

const SubStatusInput = ({
  title,
  base,
  value,
  onChange,
}: {
  title: string;
  base: string;
  value: number;
  onChange: (value: number) => void;
}) => {
  return (
    <div className="flex flex-row items-center w-full">
      <div className="w-20 text-center">{title}</div>
      <div>
        <Input
          className="w-14"
          type="number"
          value={value}
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
