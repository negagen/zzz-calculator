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
              header={<div>2024/08/25</div>}
              dataSource={["音動機を選択式へ変更"]}
              renderItem={renderItem}
            />
            <List
              size="small"
              header={<div>2024/08/23</div>}
              dataSource={["スマホ表示へ対応"]}
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
