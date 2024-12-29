"use client";

import { useState } from "react";

import {
  Agent,
  Engine,
  EnemyStatus,
  DiskConfig,
  EngineLevel,
  BattleStatus,
  AgentLevel,
  CoreSkillLevel,
  AgentConfig,
  EngineConfig,
  SaveData,
} from "@/types";
import {
  AgentStatusPanel,
  EngineStatusPanel,
  DiskStatusPanel,
  EnemyStatusPanel,
  StatusPanel,
  DamageBasePanel,
  AdditionalStatusPanel,
  HelpButton,
} from "@/components/features";
import {
  defaultDiskStatus,
  defaultEnemyStatus,
  defaultBattleStatus,
  agents,
  engines,
} from "@/data";
import { calculateStatusDetail, calculateDamageBase } from "@/core";
import { SaveButton } from "../features/SaveButton";
import { LoadButton } from "../features/LoadButton";

const selectEngines = (agent: Agent) => {
  return engines.filter((engine) => {
    return engine.speciality === agent.speciality;
  });
};

export const Calculator = () => {
  const [agentConfig, setAgentConfig] = useState<AgentConfig>({
    agent: agents[0],
    level: 60,
    coreSkillLevel: 7,
  });

  const [engineConfig, setEngineConfig] = useState<EngineConfig>({
    engine: selectEngines(agents[0])[0],
    level: 60,
  });
  const [diskConfig, setDiskConfig] = useState<DiskConfig>(defaultDiskStatus);
  const [enemyStatus, setEnemyStatus] =
    useState<EnemyStatus>(defaultEnemyStatus);
  const [battleStatus, setBattleStatus] =
    useState<BattleStatus>(defaultBattleStatus);

  const baseStatus = calculateStatusDetail(
    agentConfig,
    engineConfig,
    diskConfig
  );
  const damageBase = calculateDamageBase(baseStatus, enemyStatus, battleStatus);

  return (
    <div className="flex flex-col gap-2.5 max-md:w-full">
      <div className="flex flex-row justify-end w-full gap-2">
        <HelpButton
          title="データの保存"
          description="セーブ機能（β）"
          content={
            <div className="flex flex-col gap-1.5">
              <p>
                β版機能としてデータのセーブ・ロードを出来るようになりました。
                データは現在ブラウザごとに保存されます。
              </p>
              <p>
                Save/Loadボタンを使用してデータを保存、または読み込むことができます。
              </p>
              <p>※現在データの上書き保存には対応していません。</p>
            </div>
          }
        />
        <SaveButton
          agentConfig={agentConfig}
          engineConfig={engineConfig}
          diskConfig={diskConfig}
          enemyStatus={enemyStatus}
          battleStatus={battleStatus}
        />
        <LoadButton
          onLoad={(data: SaveData) => {
            if (data.data.agentConfig) {
              const agent = agents.find(
                (agent) => agent.id === data.data.agentConfig?.agentId
              );
              setAgentConfig({
                agent: agent ?? agents[0],
                level: data.data.agentConfig.level,
                coreSkillLevel: data.data.agentConfig.coreSkillLevel,
              });
            }
            if (data.data.engineConfig) {
              const engine = engines.find(
                (engine) => engine.id === data.data.engineConfig?.engineId
              );
              if (engine) {
                setEngineConfig({
                  engine,
                  level: data.data.engineConfig.level,
                });
              }
            }
            if (data.data.diskConfig) {
              setDiskConfig(data.data.diskConfig);
            }
            if (data.data.enemyStatus) {
              setEnemyStatus(data.data.enemyStatus);
            }
            if (data.data.battleStatus) {
              setBattleStatus(data.data.battleStatus);
            }
          }}
        />
      </div>
      <div className="flex gap-2.5 lg:flex-row max-md:flex-col max-md:w-full">
        <div className="flex flex-col items-center rounded-md gap-2 lg:w-72 max-md:w-full">
          <AgentStatusPanel
            agent={agentConfig.agent}
            level={agentConfig.level}
            coreSkillLevel={agentConfig.coreSkillLevel}
            onChange={(
              agent: Agent,
              level: AgentLevel,
              coreSkillLevel: CoreSkillLevel
            ) => {
              setAgentConfig({ agent, level, coreSkillLevel });
              if (agent.speciality !== engineConfig.engine.speciality) {
                setEngineConfig({
                  engine: selectEngines(agent)[0],
                  level: 60,
                });
              }
            }}
          />

          <EngineStatusPanel
            engine={engineConfig.engine}
            engines={selectEngines(agentConfig.agent)}
            level={engineConfig.level}
            onChange={(engine: Engine, level: EngineLevel) => {
              setEngineConfig({ engine, level });
            }}
          />
        </div>
        <DiskStatusPanel diskStatus={diskConfig} onChange={setDiskConfig} />
        <EnemyStatusPanel enemyStatus={enemyStatus} onChange={setEnemyStatus} />

        <AdditionalStatusPanel
          status={baseStatus}
          battleStatus={battleStatus}
          onChange={setBattleStatus}
        />
      </div>

      <div className="h-0.5 w-full bg-gray-600"></div>

      <div className="flex lg:flex-row max-md:flex-col gap-2.5">
        <StatusPanel baseStatus={baseStatus} />
        <DamageBasePanel damageBase={damageBase} />
      </div>
    </div>
  );
};
