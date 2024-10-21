import Image from "next/image";

export const DiskSetting = () => {
  return (
    <div className="flex lg:flex-row max-md:flex-col gap-2 w-full">
      <div className="h-50 w-50 relative">
        <Image
          src="/images/equip-main-bg.png"
          alt="装備"
          width={220}
          height={205}
        />

        <DiskSelect slot={1} />
        <DiskSelect slot={2} />
        <DiskSelect slot={3} />
        <DiskSelect slot={4} />
        <DiskSelect slot={5} />
        <DiskSelect slot={6} />
      </div>
    </div>
  );
};

const DiskSelect = ({ slot }: { slot: number }) => {
  let top = "4px";
  let left = "37px";

  switch (slot) {
    case 1:
      top = "5px";
      left = "40px";
      break;
    case 2:
      top = "66px";
      left = "11px";
      break;
    case 3:
      top = "128px";
      left = "40px";
      break;
    case 4:
      top = "128px";
      left = "122px";
      break;
    case 5:
      top = "65px";
      left = "150px";
      break;
    case 6:
      top = "5px";
      left = "122px";
      break;
  }

  return (
    <div
      className={`rounded-full absolute border w-[58px] h-[58px] border-2 p-0.5 border-[#FBB507]`}
      style={{
        top: top,
        left: left,
      }}
    >
      <Image
        src="/images/pufferelectro.png"
        alt="ディスク"
        className="w-full h-full"
        width={36}
        height={36}
      />
    </div>
  );
};
