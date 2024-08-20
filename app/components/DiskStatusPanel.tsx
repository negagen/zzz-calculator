import { Divider, Input, Select } from "antd";
import { DiskStatus } from "@/app/types";

export const DiskStatusPanel = ({
  diskStatus,
  onChange,
}: {
  diskStatus: DiskStatus;
  onChange: (diskStatus: DiskStatus) => void;
}) => {
  return (
    <div className="flex flex-col items-center w-80 bg-gray-700 rounded-md p-4">
      <div className="mb-4 w-full bg-gray-900 text-center rounded-md p-2">
        ディスク
      </div>

      <div className="flex flex-col gap-2 w-full">
        <div className="flex flex-row items-center w-full gap-2">
          <div className="w-20">ディスク2</div>
          <div>
            <Select
              className="w-14"
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
          </div>
        </div>

        <div className="flex flex-row items-center w-full gap-2">
          <div className="w-20">ディスク4</div>
          <div className="flex flex-row gap-2">
            <Select
              className="w-14"
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
              className="w-32"
              value={diskStatus.slot4.type}
              options={[
                { value: "critRate", label: "会心率" },
                { value: "critDamage", label: "会心ダメージ" },
                { value: "attack", label: "攻撃力" },
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

        <div className="flex flex-row items-center w-full gap-2">
          <div className="w-20">ディスク5</div>
          <div className="flex flex-row gap-2">
            <Select
              className="w-14"
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
              className="w-32"
              value={diskStatus.slot5.type}
              options={[
                { value: "attack", label: "攻撃力" },
                { value: "damageBuff", label: "属性ダメージ" },
                { value: "penRate", label: "貫通率" },
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
          <div className="w-20">ディスク6</div>
          <div className="flex flex-row gap-2">
            <Select
              className="w-14"
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
              className="w-32"
              value={diskStatus.slot6.type}
              options={[
                { value: "attack", label: "攻撃力" },
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
      </div>

      <div className="mb-4 mt-8 w-full bg-gray-900 text-center rounded-md p-2">
        サブステータス上昇回数
      </div>

      <div className="flex flex-col gap-2 w-full">
        <SubStatusInput
          title="攻撃力実数"
          base="19"
          value={diskStatus.attackCount}
          onChange={(value) => onChange({ ...diskStatus, attackCount: value })}
        />

        <SubStatusInput
          title="攻撃力%"
          base="3%"
          value={diskStatus.attackRateCount}
          onChange={(value) =>
            onChange({ ...diskStatus, attackRateCount: value })
          }
        />

        <SubStatusInput
          title="会心率"
          base="2.4%"
          value={diskStatus.critRateCount}
          onChange={(value) =>
            onChange({ ...diskStatus, critRateCount: value })
          }
        />

        <SubStatusInput
          title="会心ダメージ"
          base="4.8%"
          value={diskStatus.critDamageCount}
          onChange={(value) =>
            onChange({ ...diskStatus, critDamageCount: value })
          }
        />

        <SubStatusInput
          title="貫通値"
          base="9"
          value={diskStatus.penCount}
          onChange={(value) => onChange({ ...diskStatus, penCount: value })}
        />
      </div>
    </div>
  );
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
    <div className="flex flex-row items-center w-full gap-2">
      <div className="w-28">{title}</div>
      <div className="w-8 text-center">{base}</div>
      <div className="w-6 text-center">*</div>
      <div>
        <Input
          className="w-16"
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
