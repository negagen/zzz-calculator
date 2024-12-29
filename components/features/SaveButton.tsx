"use client";

import {
  AgentConfig,
  BattleStatus,
  DiskConfig,
  EnemyStatus,
  EngineConfig,
  SaveData,
  saveDataKey,
} from "@/types";
import { Button, Modal, message, Input } from "antd";
import { useState } from "react";

interface SaveButtonProps {
  agentConfig: AgentConfig;
  engineConfig: EngineConfig;
  diskConfig: DiskConfig;
  enemyStatus: EnemyStatus;
  battleStatus: BattleStatus;
}

export const SaveButton = (props: SaveButtonProps) => {
  const [visible, setVisible] = useState(false);
  const onClick = () => {
    setVisible(true);
  };

  return (
    <>
      <Button size="small" type="primary" onClick={onClick}>
        Save
      </Button>

      <SaveModal {...props} onClose={() => setVisible(false)} open={visible} />
    </>
  );
};

interface SaveConfig {
  name: string;
  saveAgentConfig: boolean;
  saveEngineConfig: boolean;
  saveDiskConfig: boolean;
  saveEnemyStatus: boolean;
  saveBattleStatus: boolean;
}

export const loadStorage = (): SaveData[] => {
  const saveData = localStorage.getItem(saveDataKey);
  if (saveData === null) {
    return [];
  }

  return JSON.parse(saveData);
};

export const saveStorage = (saveData: SaveData[]) => {
  localStorage.setItem(saveDataKey, JSON.stringify(saveData));
};

const SaveModal = ({
  onClose,
  open,
  agentConfig,
  engineConfig,
  diskConfig,
  enemyStatus,
  battleStatus,
}: SaveButtonProps & { onClose: () => void; open: boolean }) => {
  const [messageApi, contextHolder] = message.useMessage();

  const [saveConfig, setSaveConfig] = useState<SaveConfig>({
    name: "",
    saveAgentConfig: true,
    saveEngineConfig: true,
    saveEnemyStatus: true,
    saveDiskConfig: true,
    saveBattleStatus: true,
  });

  const onOk = () => {
    messageApi.success("データを保存しました");
    const saveData: SaveData = {
      name: saveConfig.name,
      data: {
        agentConfig: saveConfig.saveAgentConfig
          ? {
              agentId: agentConfig.agent.id,
              level: agentConfig.level,
              coreSkillLevel: agentConfig.coreSkillLevel,
            }
          : undefined,
        engineConfig: saveConfig.saveEngineConfig
          ? { engineId: engineConfig.engine.id, level: engineConfig.level }
          : undefined,
        diskConfig: saveConfig.saveDiskConfig ? diskConfig : undefined,
        enemyStatus: saveConfig.saveEnemyStatus ? enemyStatus : undefined,
        battleStatus: saveConfig.saveBattleStatus ? battleStatus : undefined,
      },
    };

    const existingSaveData = loadStorage();

    saveStorage([...existingSaveData, saveData]);

    onClose();
  };

  return (
    <Modal
      title="データ保存"
      open={open}
      width="960px"
      okButtonProps={{ disabled: saveConfig.name === "" }}
      onOk={onOk}
      onCancel={onClose}
      okText="Save"
      cancelText="Cancel"
    >
      {contextHolder}

      <p>保存するデータ名を入力してください</p>
      <Input
        type="text"
        value={saveConfig.name}
        onChange={(e) => setSaveConfig({ ...saveConfig, name: e.target.value })}
      />
    </Modal>
  );
};
