import { Input } from "antd";
import { BattleStatus } from "@/app/types";

export const BattleStatusPanel = ({
  battleStatus,
  onChange,
}: {
  battleStatus: BattleStatus;
  onChange: (battleStatus: BattleStatus) => void;
}) => {
  return (
    <div className="flex flex-col items-center w-72">
      <div>その他バフ</div>

      <div className="flex flex-col items-center gap-4 w-72">
        <div className="flex flex-row items-center w-full">
          <div className="w-28">攻撃力実数</div>
          <div>
            <Input
              placeholder="攻撃力実数"
              type="number"
              value={battleStatus.attackBonus}
              onChange={(e) => {
                onChange({
                  ...battleStatus,
                  attackBonus: parseInt(e.target.value),
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
              step="0.1"
              value={battleStatus.attackRateBonus}
              onChange={(e) => {
                onChange({
                  ...battleStatus,
                  attackRateBonus: parseFloat(e.target.value),
                });
              }}
            />
          </div>
        </div>

        <div className="flex flex-row items-center w-full">
          <div className="w-28">戦闘攻撃力%</div>
          <div>
            <Input
              placeholder="攻撃力%"
              type="number"
              step="0.1"
              value={battleStatus.battleAttackRateBonus}
              onChange={(e) => {
                onChange({
                  ...battleStatus,
                  battleAttackRateBonus: parseFloat(e.target.value),
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
              step="0.1"
              value={battleStatus.critRateBonus}
              onChange={(e) => {
                onChange({
                  ...battleStatus,
                  critRateBonus: parseFloat(e.target.value),
                });
              }}
            />
          </div>
        </div>

        <div className="flex flex-row items-center w-full">
          <div className="w-28">会心ダメージ</div>
          <div>
            <Input
              placeholder="会心ダメージ"
              type="number"
              step="0.1"
              value={battleStatus.critDamageBonus}
              onChange={(e) => {
                onChange({
                  ...battleStatus,
                  critDamageBonus: parseFloat(e.target.value),
                });
              }}
            />
          </div>
        </div>

        <div className="flex flex-row items-center w-full">
          <div className="w-28">貫通率</div>
          <div>
            <Input
              placeholder="貫通率"
              type="number"
              step="0.1"
              value={battleStatus.penRateBonus}
              onChange={(e) => {
                onChange({
                  ...battleStatus,
                  penRateBonus: parseFloat(e.target.value),
                });
              }}
            />
          </div>
        </div>

        <div className="flex flex-row items-center w-full">
          <div className="w-28">与ダメージ%</div>
          <div>
            <Input
              placeholder="与ダメージ%"
              type="number"
              step="0.1"
              value={battleStatus.damageBuffBonus}
              onChange={(e) => {
                onChange({
                  ...battleStatus,
                  damageBuffBonus: parseFloat(e.target.value),
                });
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};
