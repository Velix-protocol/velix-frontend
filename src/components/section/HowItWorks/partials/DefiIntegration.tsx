import VelixEclips from "@/components/ui/velix/icons/VelixEclips";
import { cn } from "@/utils/utils";
import { ReactNode } from "react";
import HermesProtocolIcon from "@/components/svg/hermes-protocol.svg?react";

function DefiIconCard({
  children,
  className,
  imageContainerClassName
}: {
  children: ReactNode;
  className?: string;
  imageContainerClassName?: string;
}) {
  return (
    <div
      className={cn(
        "flex flex-col items-center w-20 h-20 justify-center p-3 rounded-[15px] overflow-hidden relative dark:border dark:bg-black dark:border-white/20 bg-velix-slate-blue",
        className
      )}
    >
      <VelixEclips className="absolute -top-[20rem] -right-[22rem] -rotate-90" />
      <span
        className={cn(
          "h-10 w-10 mx-auto flex justify-center items-center",
          imageContainerClassName
        )}
      >
        {children}
      </span>
    </div>
  );
}

export default function DefiIntegration() {
  return (
    <div className="flex flex-col lg:grid grid-cols-2 py-24 px-10 justify-center items-center dark:bg-velix-primary bg-transparent dark:rounded-lg">
      <img
        src="/svg/defi-integration.svg"
        alt="defi integration"
        className="scale-75 xl:scale-90"
      />
      <div className="max-w-sm- lg:max-w-[25rem] max-w-[23rem] max-lg:mx-auto lg:ml-20">
        <h2 className="font-space-grotesk font-bold text-[1.25rem] lg:text-4xl flex flex-col max-lg:text-center w-fit">
          Defi Integration
          <span className="text-velix-gray text-base font-normal mt-8">
            Discover veMETIS and VELIX tokens available on popular DeFi
            platforms within the Metis ecosystem
          </span>
        </h2>
        <div className="grid max-[380px]:grid-cols-3 grid-cols-3 grid-rows-3 lg:max-w-[21rem] gap-5 mt-16 justify-center items-center">
          <div className="row-span-3 flex flex-col justify-center  items-center gap-10">
            <DefiIconCard>
              <img src="/svg/defi1.svg" alt="defi1" />
            </DefiIconCard>
            <DefiIconCard>
              <img src="/svg/tettys1.svg" alt="stack" />
            </DefiIconCard>
          </div>
          <div className="row-span-3 flex flex-col gap-10  justify-center  items-center">
            <DefiIconCard>
              <img src="/svg/wagmi.svg" alt="wagmi" />
            </DefiIconCard>
            <DefiIconCard imageContainerClassName="w-14 h-14">
              <img src="/svg/herculeProtocol.svg" alt="hercule protocol" />
            </DefiIconCard>
            <DefiIconCard imageContainerClassName="w-14 h-14">
              <HermesProtocolIcon />
            </DefiIconCard>
          </div>
          <div className="row-span-3 flex flex-col gap-10 justify-center items-center">
            <DefiIconCard>
              <img src="/svg/pinkHead.svg" alt="pinkHead" />
            </DefiIconCard>
            <DefiIconCard>
              <img src="/svg/defi-velix.svg" alt="defi-velix" />
            </DefiIconCard>
          </div>
        </div>
      </div>
    </div>
  );
}
