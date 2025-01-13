import { Select } from "antd";
import { Agent, AgentLevel, CoreSkillLevel } from "@/types";
import { agents } from "@/data";
import { HelpButton } from "./HelpButton";
import { useTranslation } from "react-i18next";
import Image from "next/image";
import { Modal } from "antd";
import { useState } from "react";

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
  const { t } = useTranslation();

  const [visible, setVisible] = useState(false);

  const onSelectAgent = (agent: Agent) => {
    onChange(agent, level, coreSkillLevel);
  };

  return (
    <div className="flex flex-col items-center bg-gray-700 rounded-md p-4 max-lg:w-full lg:w-72">
      <div className="mb-4 w-full bg-gray-900 text-center rounded-md p-2 relative">
        {t("agent")}
        <div className="absolute right-2 top-0 h-full flex items-center">
          <HelpButton
            title={t("agent")}
            content={
              <div className="flex flex-col gap-1.5">
                <p>{t("components.AgentStatusPanel.help.0")}</p>
                <p>{t("components.AgentStatusPanel.help.1")}</p>
                <p>{t("components.AgentStatusPanel.help.2")}</p>
                <p className="font-bold">
                  {t("components.AgentStatusPanel.help.3")}
                </p>
              </div>
            }
          />
        </div>
      </div>

      <div className="flex flex-col items-center gap-2 w-full">
        <div className="flex flex-row items-center w-full gap-2">
          <div className="w-full h-[148px]">
            <div className="flex flex-row gap-2 w-full h-full">
              <AgentSelectModal
                agent={agent}
                onChange={onSelectAgent}
                onClose={() => setVisible(false)}
                visible={visible}
              />
              <div onClick={() => setVisible(true)}>
                <AgentImage agent={agent} />
              </div>

              <div className="flex flex-col gap-2 grow">
                <div className="w-full pl-0.5">
                  {
                    // @ts-ignore
                    t(`data.agent.${agent.id}`)
                  }
                </div>

                <div className="flex flex-col gap-1">
                  <AgentInfo agent={agent} />
                  <AgentAttack agent={agent} level={level} />
                </div>

                <div className="flex flex-col gap-1">
                  <AgentLevelSelect
                    level={level}
                    onChange={(e) => {
                      onChange(agent, e as AgentLevel, coreSkillLevel);
                    }}
                  />

                  <CoreSkillSelect
                    coreSkillLevel={coreSkillLevel}
                    onChange={(e) => {
                      onChange(agent, level, e as CoreSkillLevel);
                    }}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const AgentImage = ({ agent }: { agent: Agent }) => {
  const rankImage =
    agent.rank === "S" ? `/images/agent_s.png` : `/images/agent_a.png`;
  return (
    <div className="relative cursor-pointer aspect-[102/148] h-[148px] bg-gray-800 rounded-lg overflow-hidden">
      <Image
        src={`/images/agents/${agent.id}.png`}
        width={256}
        height={250}
        alt="agent"
        className="object-cover h-full w-full"
      />
      <div className="absolute -top-0.5 -left-0.5 bg-black flex justify-center items-center h-7 w-7">
        <Image
          src={rankImage}
          width={24}
          height={24}
          alt="agent rank"
          className="h-6 w-6"
        />
      </div>
    </div>
  );
};

const AgentLevelSelect = ({
  level,
  onChange,
}: {
  level: AgentLevel;
  onChange: (level: AgentLevel) => void;
}) => {
  const { t } = useTranslation();

  return (
    <div className="flex flex-row items-center gap-2 text-sm w-full">
      <div className="w-6 text-center">
        {t("components.AgentStatusPanel.level")}
      </div>
      <div className="grow">
        <Select
          className="w-full"
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
          onChange={onChange}
        />
      </div>
    </div>
  );
};

const CoreSkillSelect = ({
  coreSkillLevel,
  onChange,
}: {
  coreSkillLevel: CoreSkillLevel;
  onChange: (coreSkillLevel: CoreSkillLevel) => void;
}) => {
  return (
    <div className="flex flex-row items-center gap-2 w-full">
      <div className="w-6">
        <Image
          src="/images/skill_core.png"
          alt="core skill"
          width={22}
          height={22}
        />
      </div>
      <div className="grow">
        <Select
          className="w-full"
          value={coreSkillLevel}
          options={[
            { value: 1, label: "None" },
            { value: 2, label: "A" },
            { value: 3, label: "B" },
            { value: 4, label: "C" },
            { value: 5, label: "D" },
            { value: 6, label: "E" },
            { value: 7, label: "F" },
          ]}
          onChange={onChange}
        />
      </div>
    </div>
  );
};

const AgentAttack = ({ agent, level }: { agent: Agent; level: AgentLevel }) => {
  return (
    <div className="flex flex-row items-center gap-1 text-sm">
      <div className="flex w-5 h-5 items-center justify-center">
        <Image src="/images/attack.png" alt="attack" width={14} height={14} />
      </div>
      <div className="">{agent.attackTable[level]}</div>
    </div>
  );
};

const AgentInfo = ({ agent }: { agent: Agent }) => {
  const { t } = useTranslation();
  return (
    <div className="flex flex-row gap-2">
      <div className="flex flex-row text-sm">
        <div className="flex w-5 h-5 items-center justify-center">
          <Image
            src={`/images/attribute_${agent.attribute.toLowerCase()}.png`}
            width={18}
            height={18}
            alt="attribute"
          />
        </div>
        <span>{t(`attribute.${agent.attribute}`)}</span>
      </div>
      <div className="flex flex-row text-sm">
        <div className="flex w-5 h-5 items-center justify-center">
          <Image
            src="/images/speciality_attack.png"
            width={22}
            height={22}
            alt="attribute"
          />
        </div>
        <span>{t(`speciality.${agent.speciality}`)}</span>
      </div>
    </div>
  );
};

const AgentSelectModal = ({
  visible,
  onClose,
  agent,
  onChange,
}: {
  visible: boolean;
  onClose: () => void;
  agent: Agent;
  onChange: (agent: Agent) => void;
}) => {
  const onClick = (agent: Agent) => {
    onChange(agent);
    onClose();
  };

  const { t } = useTranslation();

  return (
    <Modal
      open={visible}
      onClose={onClose}
      footer={null}
      onCancel={onClose}
      // styles={{ content: { backgroundColor: "rgb(55,  65, 81,  0)" } }}
    >
      <div className="flex flex-col gap-1">
        <div className="bg-gray-700 rounded text-white p-2">
          {t("components.AgentStatusPanel.selectAgent")}
        </div>
        <div className="overflow-auto h-[calc(60svh)] grid gap-2 grid-cols-4 rounded bg-gray-600 p-2 scrollbar">
          {agents.map((agent) => {
            return (
              <div key={agent.id} onClick={() => onClick(agent)}>
                <AgentImage agent={agent} />
              </div>
            );
          })}
        </div>
      </div>
    </Modal>
  );
};
