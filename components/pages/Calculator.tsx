"use client";

import { useState } from "react";

import {
  Agent,
  Engine,
  EnemyStatus,
  DiskConfig,
  EngineLevel,
  AdditionalStatus,
  AgentLevel,
  CoreSkillLevel,
  AgentConfig,
  EngineConfig,
} from "@/types";
import {
  AgentStatusPanel,
  EngineStatusPanel,
  DiskStatusPanel,
  EnemyStatusPanel,
  StatusPanel,
  DamageBasePanel,
  AdditionalStatusPanel,
} from "@/components/features";
import {
  defaultDiskStatus,
  defaultEnemyStatus,
  defaultBattleStatus,
  agents,
  engines,
} from "@/data";
import { calculateStatusDetail, calculateDamageBase } from "@/core";

export const Calculator = () => {
  const [agentConfig, setAgentConfig] = useState<AgentConfig>({
    agent: agents[0],
    level: 60,
    coreSkillLevel: 7,
  });

  const [engineConfig, setEngineConfig] = useState<EngineConfig>({
    engine: engines[0],
    level: 60,
  });
  const [diskConfig, setDiskConfig] = useState<DiskConfig>(defaultDiskStatus);
  const [enemyStatus, setEnemyStatus] =
    useState<EnemyStatus>(defaultEnemyStatus);
  const [battleStatus, setBattleStatus] =
    useState<AdditionalStatus>(defaultBattleStatus);

  const baseStatus = calculateStatusDetail(
    agentConfig,
    engineConfig,
    diskConfig
  );
  const damageBase = calculateDamageBase(baseStatus, enemyStatus, battleStatus);

  return (
    <div className="flex flex-col gap-2.5 max-md:w-full">
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
            }}
          />

          <EngineStatusPanel
            engine={engineConfig.engine}
            level={engineConfig.level}
            onChange={(engine: Engine, level: EngineLevel) => {
              setEngineConfig({ engine, level });
            }}
          />
        </div>
        <DiskStatusPanel diskStatus={diskConfig} onChange={setDiskConfig} />
        <EnemyStatusPanel enemyStatus={enemyStatus} onChange={setEnemyStatus} />

        <AdditionalStatusPanel
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
