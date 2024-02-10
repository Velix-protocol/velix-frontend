import React from "react";
import DefiIntegrationImage from "@/components/svg/Defi-integration.svg";
import Metamask from "@/components/svg/matamask.svg";
import ThreeD from "@/components/svg/3d.svg";
import VM from "@/components/svg/vm.svg";
import Stack from "@/components/svg/stack.svg";
import Uniswap from "@/components/svg/uniswap.svg";
import MIcon from "@/components/svg/Micon.svg";
import { Button } from "@/components/ui/button";

const DEFIs = [
  {
    icon: <Metamask />,
    status: ""
  },
  {
    icon: <ThreeD />,
    status: "Coming soon"
  },
  {
    icon: <VM />,
    status: "Coming soon"
  },
  {
    icon: <Stack />,
    status: "Coming soon"
  },
  {
    icon: <Uniswap />,
    status: "Coming soon"
  },
  {
    icon: <MIcon />,
    status: "Coming soon"
  }
];

export default function DefiIntegration() {
  return (
    <div className="mt-24 lg:grid grid-cols-2">
      <DefiIntegrationImage className="hidden lg:block scale-75 xl:scale-100" />
      <div className="max-w-sm- lg:max-w-[21rem] max-w-[23rem] max-lg:mx-auto lg:ml-auto">
        <h2 className="font-space-grotesk font-bold text-4xl flex flex-col w-fit">
          Defi Integration
          <span className="text-velix-gray text-base font-normal mt-8 max-w-80">
            Find veMetis and VL tokens on popular DeFi platforms on Metis
          </span>
        </h2>
        <div className="grid max-[380px]:grid-cols-2 grid-cols-3 gap-3 mt-16">
          {DEFIs.map((defi) => {
            return (
              <div
                key={`defi-${defi.status}`}
                className="bg-velix-slate-blue w-full flex flex-col items-center justify-center p-3 rounded-[15px] overflow-hidden relative"
              >
                <span className="h-20 w-20 mx-auto flex justify-center items-center">
                  {defi.icon}
                </span>

                {!!defi.status && (
                  <span className="font-space-grotesk font-medium text-[8px] bg-velix-slate-green/20 py-1.5 text-velix-slate-green w-full left-0 right-0 text-center absolute bottom-0">
                    {defi.status}
                  </span>
                )}
              </div>
            );
          })}
          <Button
            variant="outline"
            className="border-black !border-[0.5px] mt-10 px-10 font-bold text-base"
          >
            Find more
          </Button>
        </div>
      </div>
    </div>
  );
}
