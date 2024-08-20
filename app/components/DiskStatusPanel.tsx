import { Input, Select } from "antd";
import { DiskStatus } from "./types";

export const DiskStatusPanel = ({
  diskStatus,
  onChange,
}: {
  diskStatus: DiskStatus;
  onChange: (diskStatus: DiskStatus) => void;
}) => {
  return (
    <div className="flex flex-col items-center w-72">
      <div>ディスク</div>

      <div className="flex flex-row items-center w-full">
        <div className="w-28">ディスク2</div>
        <div>
          <Select
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

      <div className="flex flex-row items-center w-full">
        <div className="w-28">ディスク4</div>
        <div>
          <Select
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

      <div className="flex flex-row items-center w-full">
        <div className="w-28">ディスク5</div>
        <div>
          <Select
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

      <div className="flex flex-row items-center w-full">
        <div className="w-28">ディスク6</div>
        <div>
          <Select
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

      <div className="w-full">サブステ上昇回数</div>

      <div className="flex flex-row items-center w-full">
        <div className="w-28">攻撃力実数</div>
        <div>
          <Input
            placeholder="攻撃力実数"
            type="number"
            value={diskStatus.attackCount}
            onChange={(e) => {
              onChange({
                ...diskStatus,
                attackCount: parseInt(e.target.value),
              });
            }}
          />
        </div>
      </div>

      <div className="flex flex-row items-center w-full">
        <div className="w-28">攻撃力%</div>
        <div>
          <Input
            placeholder="攻撃力%"
            type="number"
            value={diskStatus.attackRateCount}
            onChange={(e) => {
              onChange({
                ...diskStatus,
                attackRateCount: parseInt(e.target.value),
              });
            }}
          />
        </div>
      </div>

      <div className="flex flex-row items-center w-full">
        <div className="w-28">会心率</div>
        <div>
          <Input
            placeholder="会心率"
            type="number"
            value={diskStatus.critRateCount}
            onChange={(e) => {
              onChange({
                ...diskStatus,
                critRateCount: parseInt(e.target.value),
              });
            }}
          />
        </div>
      </div>

      <div className="flex flex-row items-center w-full">
        <div className="w-28">会心ダメージ</div>
        <div>
          <Input
            placeholder="攻撃力%"
            type="number"
            value={diskStatus.critDamageCount}
            onChange={(e) => {
              onChange({
                ...diskStatus,
                critDamageCount: parseInt(e.target.value),
              });
            }}
          />
        </div>
      </div>

      <div className="flex flex-row items-center w-full">
        <div className="w-28">貫通値</div>
        <div>
          <Input
            placeholder="貫通値"
            type="number"
            value={diskStatus.penCount}
            onChange={(e) => {
              onChange({
                ...diskStatus,
                penCount: parseInt(e.target.value),
              });
            }}
          />
        </div>
      </div>
    </div>
  );
};
