import { EnemyStatus } from "@/types";
import { useTranslation } from "react-i18next";

export const EnemyStatusPanel = ({
  enemyStatus,
  onChange,
}: {
  enemyStatus: EnemyStatus;
  onChange: (enemyStatus: EnemyStatus) => void;
}) => {
  const { t } = useTranslation();
  return (
    <div className="flex flex-col items-center w-80 bg-gray-700 rounded-md p-4 max-lg:w-full"></div>
  );
};
