"use client";

import { useState } from "react";
import Image from "next/image";
import { ConfigProvider, Divider, Layout, Space } from "antd";
import { HelpButton } from "@/components/features";

const { Header, Footer, Content } = Layout;

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

export const Calculator = () => {
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
    <AntdConfigProvider>
      <Layout>
        <Header className="flex flex-row justify-between h-16">
          <h1 className="flex flex-row text-2xl text-white p-3 rounded-md opacity-95">
            <Image
              width={27}
              height={50}
              src="/images/logo.png"
              alt="Background"
              className="mr-2 relative top-0"
            />
            ZZZ Damage Calculator (Beta)
          </h1>
          <div className="flex flex-row">
            <div className="flex items-center text-white hover:bg-gray-700 cursor-pointer gap-0.5 px-2">
              <HelpButton
                title="このサイトについて"
                description="このサイトについて"
                className="w-full h-full"
                content={
                  <div className="flex flex-col gap-1.5">
                    <h2 className="text-lg font-bold">はじめに</h2>
                    <p>
                      当サイトは「ゼンレスゾーンゼロ」の非公式ダメージ計算機です。
                    </p>
                    <p>
                      ダメージはVer1.1時点での推測による仕様に基づいており、また数値計算上の誤差を含みます。
                    </p>
                    <br />
                    <p>
                      そのため、このデータの値を保証するものではないことに注意してください。
                    </p>
                    <p>
                      また、当サイトのデータを使用したことによる損害について、当サイトは一切の責任を負いません。
                    </p>

                    <Divider />

                    <h2 className="text-lg font-bold">免責事項</h2>
                    <p>
                      当サイトで利用している画像はHoYoLABから引用したものが含まれています。
                    </p>
                    <p>
                      これらの画像、および「ゼンレスゾーンゼロ」における全ての権利はHoYoverseに帰属します。
                    </p>
                    <p>
                      また、当サイトは非公式のものであり、HoYoverseとは一切関係ありません。
                    </p>

                    <Divider />

                    <h2 className="text-lg font-bold">
                      意見、要望、不具合報告など
                    </h2>
                    <p>
                      ご意見、ご要望、不具合報告に関しては
                      <a
                        href="https://docs.google.com/forms/d/e/1FAIpQLSck0-g7tU4x7_EEKOtNu67hNcWY4UMsnKCBt6TCvwh9KRd9eg/viewform"
                        target="_blank"
                        className="text-blue-400 underline"
                      >
                        こちら
                      </a>
                      のGoogleフォームか、HoYoLABにてどうぞ。
                    </p>
                    <br />
                    <p>このサイトはオープンソースで公開されています。</p>
                    <p>
                      開発に貢献したい方は
                      <a
                        href="https://github.com/yuemori/zzz-calculator"
                        target="_blank"
                        className="text-blue-400 underline"
                      >
                        こちら
                      </a>
                      からアクセスしてください。
                    </p>
                  </div>
                }
              />
            </div>
            <div className="flex flex-row items-center hover:bg-gray-700 px-2 text-white cursor-pointer">
              <a
                href="https://www.hoyolab.com/accountCenter/postList?id=306523314"
                target="_blank"
                className="w-full h-full flex flex-row items-center gap-0.5"
              >
                <Image
                  width={18}
                  height={18}
                  src="/images/hoyolab.png"
                  alt="Background"
                />
                作者HoYoLAB
              </a>
            </div>
          </div>
        </Header>

        <Content
          className="flex relative flex-col items-center bg-slate-950 text-gray-300"
          style={{ minHeight: "calc(100vh - 64px)" }}
        >
          <Image
            width={2000}
            height={540}
            src="/images/zzz1_1.png"
            alt="Background"
            className="absolute z-0 top-0 opacity-35"
          />
          <div
            className="w-full bg-gradient-to-t from-slate-950 z-1 absolute"
            style={{ minHeight: "60vh" }}
          ></div>

          <div className="flex flex-col p-4 border border-3 border-gray-600 rounded-lg z-10 opacity-95 mt-2">
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

          <div className="mt-4 h-8 flex flex-row gap-2.5 z-10 text-xs font-light text-slate-400">
            <p>
              Disclaimer© HoYoverse. All rights reserved. &#39;HoYoverse&#39;
              and &#39;Zenless Zone Zero&#39; are trademarks, services marks, or
              registered trademarks of HoYoverse, and game content and
              resources.
            </p>
          </div>
        </Content>
      </Layout>
    </AntdConfigProvider>
  );
};

const AntdConfigProvider = ({ children }: { children: React.ReactNode }) => {
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
      {children}
    </ConfigProvider>
  );
};
