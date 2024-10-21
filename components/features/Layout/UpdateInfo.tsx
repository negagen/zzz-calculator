import { List } from "antd";
import { HelpButton } from "@/components/features";

export const UpdateInfo = () => {
  const renderItem = (item: string) => <List.Item>{item}</List.Item>;

  return (
    <HelpButton
      title="更新情報"
      description="更新情報"
      className="w-full h-full"
      content={
        <div className="flex flex-col gap-1.5">
          <div>
            <List
              size="small"
              header={<div>2024/10/22</div>}
              dataSource={[
                "不具合報告を頂いていた誤植を修正しました。",
                "報告ありがとうございます（対応が遅れてすみません）。",
                "雷鳴のヘヴィメタル → 霹靂のヘヴィメタル",
                "ディスクセットのx2 の表記漏れを修正しました",
                "また、ディスクセットの4セット効果の適用方法についてヘルプに追記しました。",
              ]}
              renderItem={renderItem}
            />
            <List
              size="small"
              header={<div>2024/08/31</div>}
              dataSource={[
                "エージェントのコアスキルレベルのボーナスの計算が誤っていたのを修正しました",
              ]}
              renderItem={renderItem}
            />
            <List
              size="small"
              header={<div>2024/08/26</div>}
              dataSource={[
                "ディスクの4セット効果が自動で適用されるようにしました。",
                "選択可能な音動機をエージェントの特性で絞り込むようにしました。",
              ]}
              renderItem={renderItem}
            />
            <List
              size="small"
              header={<div>2024/08/25</div>}
              dataSource={["音動機を選択式へ変更しました。"]}
              renderItem={renderItem}
            />
            <List
              size="small"
              header={<div>2024/08/23</div>}
              dataSource={["スマホ表示へ対応しました。"]}
              renderItem={renderItem}
            />
            <List
              size="small"
              header={<div>2024/08/22</div>}
              dataSource={["サイト公開"]}
              renderItem={renderItem}
            />
          </div>
        </div>
      }
    />
  );
};
