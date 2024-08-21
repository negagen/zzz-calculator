"use client";

import { useState } from "react";
import Image from "next/image";
import { ConfigProvider } from "antd";

import {
  Agent,
  EnemyStatus,
  DiskStatus,
  EngineStatus,
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
  defaultEngineStatus,
  defaultDiskStatus,
  defaultEnemyStatus,
  defaultBattleStatus,
  agents,
  calculateAgentStatus,
} from "@/data";

export default function Home() {
  const [agent, setAgent] = useState<Agent>(agents[0]);
  const [agentLevel, setAgentLevel] = useState<AgentLevel>(60);
  const [agentCoreSkillLevel, setAgentCoreSkillLevel] =
    useState<CoreSkillLevel>(7);
  const [engineStatus, setEngineStatus] =
    useState<EngineStatus>(defaultEngineStatus);
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
  const baseStatus = calculateBaseStatus(agentStatus, engineStatus, diskStatus);
  const damageBase = calculateDamageBase(baseStatus, enemyStatus, battleStatus);

  return (
    <ConfigProvider
      theme={{
        components: {
          Input: {
            colorBgContainer: "#36373D",
            activeBorderColor: "#D4D4D4",
            hoverBorderColor: "#D4D4D4",
            colorText: "#D4D4D4",
            colorBorder: "#777777",
          },
          Select: {
            colorText: "#D4D4D4",
            colorBorder: "#777777",
            optionActiveBg: "#333333",
            optionSelectedBg: "#333333",
            selectorBg: "#36373D",
            colorBgBase: "#000000",
            colorBgContainer: "#000000",
            colorBgElevated: "#000000",
            colorPrimary: "#000000",
            controlItemBgActive: "#000000",
            controlItemBgHover: "#000000",
          },
          Dropdown: {
            colorBgBase: "#000000",
            colorBgContainer: "#000000",
            colorBgElevated: "#000000",
            colorPrimary: "#000000",
            controlItemBgActive: "#000000",
            controlItemBgHover: "#000000",
            colorText: "#000000",
          },
        },
      }}
    >
      <main className="flex relative min-h-screen flex-col items-center bg-slate-950 text-gray-300">
        <Image
          width={2000}
          height={540}
          src="/images/zzz1_1.png"
          alt="Background"
          className="absolute z-0 top-0 opacity-60"
        />
        <div
          className="w-full bg-gradient-to-t from-slate-950 z-1 absolute"
          style={{ minHeight: "60vh" }}
        ></div>

        <h1 className="text-3xl mt-4 mb-4 h-12 z-10">
          ZZZ Damage Calculator (Beta)
        </h1>

        <div className="flex flex-col p-4 border border-3 border-gray-600 rounded-lg z-10 opacity-90">
          <div className="flex flex-col gap-2.5">
            <div className="flex flex-row gap-2.5">
              <div className="flex flex-col items-center w-72 rounded-md gap-2">
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
                  engineStatus={engineStatus}
                  onChange={setEngineStatus}
                />
              </div>
              <DiskStatusPanel
                diskStatus={diskStatus}
                onChange={setDiskStatus}
              />
              <EnemyStatusPanel
                enemyStatus={enemyStatus}
                onChange={setEnemyStatus}
              />

              <AdditionalStatusPanel
                battleStatus={battleStatus}
                onChange={setBattleStatus}
              />
            </div>

            <div className="h-0.5 w-full bg-gray-600"></div>

            <div className="flex flex-row gap-2.5">
              <StatusPanel baseStatus={baseStatus} />
              <DamageBasePanel damageBase={damageBase} />
            </div>
          </div>
        </div>

        <div className="flex flex-row gap-2.5 z-10 text-xs font-light mt-5">
          Disclaimer© HoYoverse. All rights reserved. &#39;HoYoverse&#39; and
          &#39;Zenless Zone Zero&#39; are trademarks, services marks, or
          registered trademarks of HoYoverse.
        </div>
      </main>
    </ConfigProvider>
  );
}
