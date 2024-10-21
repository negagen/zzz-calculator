import { UpdateInfo } from "./UpdateInfo";
import Image from "next/image";
import { About } from "./About";

export const LayoutHeader = () => (
  <div className="flex flex-row justify-between h-16 max-md:px-3 px-16 bg-black">
    <div className="flex flex-row text-white lg:p-3 rounded-md opacity-95 items-center h-full">
      <div className="aspect-[111/149] justify-center flex">
        <Image
          width={32}
          height={43}
          src="/images/logo.png"
          alt="Background"
          className="lg:mr-2 lg:relative lg:top-0"
        />
      </div>
      <h1 className="lg:text-2xl">ZZZ Damage Calculator (Beta)</h1>
    </div>
    <div className="flex flex-row">
      <div className="flex items-center text-white hover:bg-gray-700 cursor-pointer gap-0.5 px-2">
        <UpdateInfo />
      </div>
      <div className="flex items-center text-white hover:bg-gray-700 cursor-pointer gap-0.5 px-2">
        <About />
      </div>
      <div className="flex flex-row items-center hover:bg-gray-700 px-2 text-white cursor-pointer">
        <a
          href="https://www.hoyolab.com/article/32357875"
          target="_blank"
          className="w-full h-full flex flex-row items-center gap-0.5"
        >
          <Image
            width={18}
            height={18}
            src="/images/hoyolab.png"
            alt="Background"
          />
          <div className="max-md:hidden">作者HoYoLAB</div>
        </a>
      </div>
    </div>
  </div>
);
