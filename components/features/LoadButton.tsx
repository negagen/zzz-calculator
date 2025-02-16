import { SaveData } from "@/types";

import { Button, Modal, Table, message } from "antd";
import type { TableColumnsType } from "antd";
import { loadStorage, saveStorage } from "./SaveButton";
import { useEffect, useState } from "react";
import {
  calculateExpectedDamage,
  calculateDamageBase,
  calculateStatusDetail,
} from "@/core";
import { agents, engines } from "@/data";
import { useTranslation } from "react-i18next";

interface LoadButtonProps {
  onLoad: (saveData: SaveData) => void;
}

export const LoadButton = ({ onLoad }: LoadButtonProps) => {
  const [visible, setVisible] = useState(false);
  const onClick = () => {
    setVisible(true);
  };

  return (
    <>
      <Button size="small" type="primary" onClick={onClick}>
        Load
      </Button>

      <SaveDataModal
        open={visible}
        onClose={() => setVisible(false)}
        onLoad={onLoad}
      />
    </>
  );
};

interface SaveDataModalProps {
  open: boolean;
  onClose: () => void;
  onLoad: (saveData: SaveData) => void;
}

const SaveDataModal = ({ open, onClose, onLoad }: SaveDataModalProps) => {
  const [messageApi, contextHolder] = message.useMessage();
  const [saveDataList, setSaveDataList] = useState<SaveData[]>([]);
  const { t } = useTranslation();

  useEffect(() => {
    setSaveDataList(loadStorage());
  }, [open, setSaveDataList]);

  const dataSource: SaveDataTableData[] = saveDataList.map((saveData, i) => {
    const damageScore = calculateDamageScore(saveData);
    const agent = agents.find(
      (agent) => agent.id === saveData.data.agentConfig?.agentId
    );
    const engine = engines.find(
      (engine) => engine.id === saveData.data.engineConfig?.engineId
    );

    const loadSaveData: SaveData = {
      name: saveData.name,
      data: {
        agentConfig: agent ? saveData.data.agentConfig : undefined,
        engineConfig: engine ? saveData.data.engineConfig : undefined,
        diskConfig: saveData.data.diskConfig,
        enemyStatus: saveData.data.enemyStatus,
        battleStatus: saveData.data.battleStatus,
      },
    };

    return {
      name: saveData.name,
      engineName: engine?.name ?? "",
      damageScore: damageScore,
      onLoad: () => {
        onLoad(loadSaveData);

        messageApi.success(t("components.LoadButton.loadSuccess"));

        onClose();
      },
      onDelete: () => {
        const newSaveDataList = [...saveDataList];
        newSaveDataList.splice(i, 1);

        saveStorage(newSaveDataList);
        setSaveDataList(newSaveDataList);
      },
    };
  });

  return (
    <Modal
      title={t("components.LoadButton.title")}
      open={open}
      width="1260px"
      onOk={onClose}
      onCancel={onClose}
      okText="Save"
      cancelText="Cancel"
    >
      {contextHolder}

      <Table columns={columns} dataSource={dataSource} />
    </Modal>
  );
};

const calculateDamageScore = (saveData: SaveData) => {
  if (
    saveData.data.agentConfig &&
    saveData.data.engineConfig &&
    saveData.data.diskConfig &&
    saveData.data.enemyStatus &&
    saveData.data.battleStatus
  ) {
    const agent = agents.find(
      (agent) => agent.id === saveData.data.agentConfig?.agentId
    );
    if (!agent) {
      return undefined;
    }

    const engine = engines.find(
      (engine) => engine.id === saveData.data.engineConfig?.engineId
    );
    if (!engine) {
      return undefined;
    }

    const base = calculateStatusDetail(
      {
        agent,
        level: saveData.data.agentConfig.level,
        coreSkillLevel: saveData.data.agentConfig.coreSkillLevel,
      },
      { engine, level: saveData.data.engineConfig.level },
      saveData.data.diskConfig
    );
    const damageBase = calculateDamageBase(
      base,
      saveData.data.enemyStatus,
      saveData.data.battleStatus
    );
    return calculateExpectedDamage(damageBase);
  }
  return undefined;
};

type SaveDataTableData = {
  name: string;
  engineName: string;
  damageScore: number | undefined;
  onLoad: () => void;
  onDelete: () => void;
};

const columns: TableColumnsType<SaveDataTableData> = [
  {
    title: "Name",
    dataIndex: "name",
  },
  {
    title: "Agent",
    dataIndex: "agentName",
  },
  {
    title: "Engine",
    dataIndex: "engineName",
  },
  {
    title: "damageScore",
    dataIndex: "damageScore",
  },
  {
    title: "Action",
    render: (text, record) => (
      <>
        <Button onClick={record.onLoad} type="primary">
          Load
        </Button>
        <Button onClick={record.onDelete} type="text">
          Delete
        </Button>
      </>
    ),
  },
];
