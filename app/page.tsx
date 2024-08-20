"use client";

import { useState } from "react";
import type {
  AgentStatus,
  EnemyStatus,
  DiskStatus,
  EngineStatus,
} from "./types";
import {
  AgentStatusPanel,
  EngineStatusPanel,
  DiskStatusPanel,
  EnemyStatusPanel,
  StatusPanel,
  SkillDamagePanel,
  DamageBasePanel,
} from "@/app/components";
import { calculateDamageBase, calculateStatus } from "@/app/calculator";
import {
  defaultAgentStatus,
  defaultEngineStatus,
  defaultDiskStatus,
  defaultEnemyStatus,
  defaultSkills,
} from "./data";

export default function Home() {
  const [agentStatus, setAgentStatus] =
    useState<AgentStatus>(defaultAgentStatus);
  const [engineStatus, setEngineStatus] =
    useState<EngineStatus>(defaultEngineStatus);
  const [diskStatus, setDiskStatus] = useState<DiskStatus>(defaultDiskStatus);
  const [enemyStatus, setEnemyStatus] =
    useState<EnemyStatus>(defaultEnemyStatus);
  const baseStatus = calculateStatus(agentStatus, engineStatus, diskStatus);
  const damageBase = calculateDamageBase(baseStatus, enemyStatus);
  const skills = defaultSkills;

  return (
    <main className="flex min-h-screen flex-col">
      <div className="flex flex-col p-4 border border-gray-200 rounded-lg shadow-md">
        <div className="text-xl font-bold">ステータス</div>
        <div className="flex flex-row gap-2.5">
          <AgentStatusPanel
            agentStatus={agentStatus}
            onChange={setAgentStatus}
          />
          <EngineStatusPanel
            engineStatus={engineStatus}
            onChange={setEngineStatus}
          />
          <DiskStatusPanel diskStatus={diskStatus} onChange={setDiskStatus} />
          <EnemyStatusPanel
            enemyStatus={enemyStatus}
            onChange={setEnemyStatus}
          />
        </div>
      </div>

      <div className="flex flex-row items-center">
        <StatusPanel baseStatus={baseStatus} />
      </div>

      <div className="flex flex-row items-center">
        <DamageBasePanel damageBase={damageBase} />
      </div>

      <div className="flex flex-row">
        {skills.map((skill, i) => (
          <SkillDamagePanel key={i} damageBase={damageBase} skill={skill} />
        ))}
      </div>
    </main>
  );
}
