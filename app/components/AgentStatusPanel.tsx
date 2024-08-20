import { useState } from "react";
import { Input, Select } from "antd";
import { Agent, AgentStatus, AgentLevel, CoreSkillLevel } from "@/app/types";
import { StatusInput } from "./StatusInput";
import { agents } from "@/app/agents";
import Decimal from "decimal.js";

export const AgentStatusPanel = ({
  agent,
  level,
  coreSkillLevel,
  onChange,
}: {
  agent: Agent;
  level: AgentLevel;
  coreSkillLevel: CoreSkillLevel;
  onChange: (
    agent: Agent,
    level: AgentLevel,
    coreSkillLevel: CoreSkillLevel
  ) => void;
}) => {
  return (
    <div className="flex flex-col items-center w-72 bg-gray-700 rounded-md p-4">
      <div className="mb-4 w-full bg-gray-900 text-center rounded-md p-2">
        エージェント
      </div>

      <div className="flex flex-col items-center gap-2 w-full">
        <div className="flex flex-row items-center w-full gap-2">
          <div>
            <Select
              className="w-64"
              value={agents.indexOf(agent)}
              options={agents.map((agent, i) => ({
                value: i,
                label: agent.name,
              }))}
              onChange={(e) => {
                onChange(agents[e as number], level, coreSkillLevel);
              }}
            />
          </div>
        </div>

        <div className="flex flex-row items-center w-full gap-2">
          <div className="w-36">レベル</div>
          <div>
            <Select
              className="w-32"
              value={level}
              options={[
                { value: 1, label: "1" },
                { value: 10, label: "10" },
                { value: 20, label: "20" },
                { value: 30, label: "30" },
                { value: 40, label: "40" },
                { value: 50, label: "50" },
                { value: 60, label: "60" },
              ]}
              onChange={(e) => {
                onChange(agent, e as AgentLevel, coreSkillLevel);
              }}
            />
          </div>
        </div>

        <div className="flex flex-row items-center w-full gap-2">
          <div className="w-36">コアスキル強化</div>
          <div>
            <Select
              className="w-32"
              value={coreSkillLevel}
              options={[
                { value: 1, label: "なし" },
                { value: 2, label: "A" },
                { value: 3, label: "B" },
                { value: 4, label: "C" },
                { value: 5, label: "D" },
                { value: 6, label: "E" },
                { value: 7, label: "F" },
              ]}
              onChange={(e) => {
                onChange(agent, level, e as CoreSkillLevel);
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};
