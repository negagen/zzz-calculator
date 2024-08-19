import { agents } from "./data";
import { Agent } from "./types";

export const AgentSelector = ({ onClick }: { onClick: () => void }) => {
  return (
    <>
      <div className="text-xl font-bold">Agents</div>
      <div className="gap-4">
        {agents.map((agent, index) => (
          <button key={index} onClick={onClick}>
            <AgentCard agent={agent} />
          </button>
        ))}
      </div>
    </>
  );
};

const AgentCard = ({ agent }: { agent: Agent }) => {
  return (
    <div className="flex flex-col items-center justify-between p-4 border border-gray-200 rounded-lg shadow-md">
      <h1 className="text-xl font-bold">{agent.name}</h1>
    </div>
  );
};
