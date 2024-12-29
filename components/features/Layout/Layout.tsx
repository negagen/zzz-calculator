"use client";

import { Analytics } from "@vercel/analytics/react";
import { ConfigProvider } from "antd";
import Image from "next/image";
import { LayoutHeader } from "./LayoutHeader";

export const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <AntdConfigProvider>
      <Analytics />

      <LayoutHeader />

      <div
        className="flex relative flex-col items-center bg-slate-950 text-gray-300"
        style={{ minHeight: "calc(100vh - 64px)" }}
      >
        <Image
          width={2000}
          height={540}
          src="/images/zzz1_4.jpg"
          alt="Background"
          className="absolute z-0 top-0 opacity-35"
        />
        <div
          className="w-full bg-gradient-to-t from-slate-950 z-1 absolute"
          style={{ minHeight: "60vh" }}
        ></div>

        <main className="flex flex-col p-4 border border-3 border-gray-600 rounded-lg z-10 opacity-95 mt-2 max-md:w-full">
          {children}
        </main>

        <div className="mt-2 flex flex-row gap-2.5 z-10 text-xs font-light text-slate-400 max-md:w-3/4 max-md:text-center max-md:py-2">
          <p>
            Disclaimer© HoYoverse. All rights reserved. &#39;HoYoverse&#39; and
            &#39;Zenless Zone Zero&#39; are trademarks, services marks, or
            registered trademarks of HoYoverse, and game content and resources.
          </p>
        </div>
      </div>
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
