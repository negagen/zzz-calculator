import { List } from "antd";
import { HelpButton } from "@/components/features";
import { useTranslation } from "react-i18next";

export const UpdateInfo = () => {
  const renderItem = (item: string) => <List.Item>{item}</List.Item>;
  const { t } = useTranslation();

  return (
    <HelpButton
      title={t("components.UpdateInfo.title")}
      description={`${t("components.UpdateInfo.title")}: 2025/03/16`}
      content={
        <div className="flex flex-col gap-1.5 h-[calc(50svh)] overflow-auto">
          <div>
            <List
              size="small"
              header={<div>2025/03/16</div>}
              dataSource={[
                t("components.UpdateInfo.2025/03/16.0"),
                t("components.UpdateInfo.2025/03/16.1"),
                t("components.UpdateInfo.2025/03/16.2"),
              ]}
              renderItem={renderItem}
            />
            <List
              size="small"
              header={<div>2025/02/16</div>}
              dataSource={[
                t("components.UpdateInfo.2025/02/16.0"),
                t("components.UpdateInfo.2025/02/16.1"),
              ]}
              renderItem={renderItem}
            />
            <List
              size="small"
              header={<div>2025/01/14</div>}
              dataSource={[
                t("components.UpdateInfo.2025/01/14.0"),
                t("components.UpdateInfo.2025/01/14.1"),
              ]}
              renderItem={renderItem}
            />
            <List
              size="small"
              header={<div>2025/01/11</div>}
              dataSource={[
                t("components.UpdateInfo.2025/01/11.0"),
                t("components.UpdateInfo.2025/01/11.1"),
                t("components.UpdateInfo.2025/01/11.2"),
              ]}
              renderItem={renderItem}
            />
            <List
              size="small"
              header={<div>2025/01/09</div>}
              dataSource={[
                "エージェントの基礎攻撃力が常に+25されてしまっていた不具合を修正しました。",
                "HoYoLabで報告を頂いて原因が特定できました。ありがとうございます。",
              ]}
              renderItem={renderItem}
            />
            <List
              size="small"
              header={<div>2025/01/03</div>}
              dataSource={[
                "蒼角を保存したときにリナとして扱われてしまう不具合を修正しました。",
                "Google Formにて 'ダメージ計算機のステータスの攻撃の項目の数値がゲームのステータスと比べて20~30ほど大きくなります' という不具合報告をいただきました。ありがとうございます。原因は調査中です",
              ]}
              renderItem={renderItem}
            />
            <List
              size="small"
              header={<div>2024/12/29</div>}
              dataSource={[
                "エージェント、音動機、ディスクセット効果を最新に対応しました。",
                "セーブデータの保存機能を実装しました",
                "大変お待たせしてすみません。使ってくださる方が結構いるみたいなのでアップデートもうちょっと頑張ります。今回はデータを対応しただけなので、現在の環境での使い勝手についてはまたご意見・要望もらえると助かります。",
                "注意点として、異常によるダメージは現在計算できません。現環境において異常ダメージが計算できないとあまり意味がないエージェントが多いのは承知していますが、気長に待っていただけると嬉しいです。",
              ]}
              renderItem={renderItem}
            />
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
