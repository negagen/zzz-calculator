import type { Engine } from "./types";
import { engines } from "./data";

export const EngineSelector = ({ onClick }: { onClick: () => void }) => {
  return (
    <>
      <div className="text-xl font-bold">Engines</div>
      <div className="grid grid-cols-2 gap-4">
        {engines.map((engine, index) => (
          <button key={index} onClick={onClick}>
            <EngineCard engine={engine} />
          </button>
        ))}
      </div>
    </>
  );
};

const EngineCard = ({ engine }: { engine: Engine }) => {
  return (
    <div className="flex flex-col items-center justify-between p-4 border border-gray-200 rounded-lg shadow-md">
      <h1 className="text-xl font-bold">{engine.name}</h1>
    </div>
  );
};
