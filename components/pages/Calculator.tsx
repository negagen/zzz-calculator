"use client";

import { useState } from "react";

import {
  Agent,
  Engine,
  EnemyStatus,
  DiskStatus,
  EngineLevel,
  AdditionalStatus,
  AgentLevel,
  CoreSkillLevel,
  calculateDamageBase,
  calculateBaseStatus,
} from "@/core";
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
  calculateAgentStatus,
  calculateEngineStatus,
} from "@/data";

export const Calculator = () => {
  const [agent, setAgent] = useState<Agent>(agents[0]);
  const [engine, setEngine] = useState<Engine>(engines[0]);
  const [agentLevel, setAgentLevel] = useState<AgentLevel>(60);
  const [engineLevel, setEngineLevel] = useState<EngineLevel>(60);
  const [agentCoreSkillLevel, setAgentCoreSkillLevel] =
    useState<CoreSkillLevel>(7);
  const [diskStatus, setDiskStatus] = useState<DiskStatus>(defaultDiskStatus);
  const [enemyStatus, setEnemyStatus] =
    useState<EnemyStatus>(defaultEnemyStatus);
  const [battleStatus, setBattleStatus] =
    useState<AdditionalStatus>(defaultBattleStatus);

  const agentStatus = calculateAgentStatus(
    agent,
    agentLevel,
    agentCoreSkillLevel
  );
  const engineStatus = calculateEngineStatus(engine, engineLevel);
  const baseStatus = calculateBaseStatus(agentStatus, engineStatus, diskStatus);
  const damageBase = calculateDamageBase(baseStatus, enemyStatus, battleStatus);

  return (
    <div className="flex flex-col gap-2.5 max-md:w-full">
      <div className="flex gap-2.5 lg:flex-row max-md:flex-col max-md:w-full">
        <div className="flex flex-col items-center rounded-md gap-2 lg:w-72 max-md:w-full">
          <AgentStatusPanel
            agent={agent}
            level={agentLevel}
            coreSkillLevel={agentCoreSkillLevel}
            onChange={(
              agent: Agent,
              level: AgentLevel,
              coreSkillLevel: CoreSkillLevel
            ) => {
              setAgent(agent);
              setAgentLevel(level);
              setAgentCoreSkillLevel(coreSkillLevel);
            }}
          />

          <EngineStatusPanel
            engine={engine}
            level={engineLevel}
            onChange={(engine: Engine, level: EngineLevel) => {
              setEngine(engine);
              setEngineLevel(level);
            }}
          />
        </div>
        <DiskStatusPanel diskStatus={diskStatus} onChange={setDiskStatus} />
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
