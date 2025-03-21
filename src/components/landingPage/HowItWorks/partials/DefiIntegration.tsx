import VelixEclips from "@/components/ui/velix/icons/VelixEclips";
import { cn } from "@/utils/utils";
import { ReactNode } from "react";

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
        "flex flex-col items-center w-20 h-20 justify-center p-3 rounded-[15px] overflow-hidden relative dark:border dark:bg-black dark:border-white/20 bg-velix-blue/5",
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
    <div className="flex flex-col lg:grid grid-cols-2 pb-16 justify-center items-center dark:bg-velix-primary bg-transparent gap-10 dark:rounded-lg">
      <div className="bg-velix-blue rounded-xl dark:bg-transparent w-full h-full flex items-center justify-center">
      <img
        src="/svg/defi-integration3.svg"
        alt="defi integration"
        className="scale-75 xl:scale-75"
      />
    </div>
      <div className="w-full h-full flex items-center justify-center bg-velix-claim rounded-xl dark:bg-transparent py-10 ">
        <div className="max-w-sm lg:max-w-[25rem] max-lg:mx-auto lg:-ml-10 mt-10">
        <h2 className="font-space-grotesk mt-5 font-bold text-[1.25rem] lg:text-4xl flex flex-col max-lg:text-center w-fit">
          Defi Integration
          <span className="text-velix-gray text-base font-normal mt-8">
            Discover your Liquid staked token and Velix token available on
            popular cross-chain Defi platforms
          </span>
        </h2>
        <div className="grid max-sm:grid-cols-3 grid-cols-3 grid-rows-3 lg:max-w-lg mt-20 justify-center items-center">
          <div className="row-span-3 flex flex-col justify-center items-center gap-10 lg:-ml-16 md:ml-12">
            <DefiIconCard>
              <img src="/svg/shoebillIcon.svg" alt="Tettys stack icon" />
            </DefiIconCard>
          </div>
          <div className="row-span-3 flex flex-col gap-10 justify-center items-center lg:-ml-32">
            <DefiIconCard imageContainerClassName="w-14 h-14">
              <img src="/svg/herculeProtocol.svg" alt="hercule protocol logo" />
            </DefiIconCard>
          </div>
          <div className="row-span-3 flex flex-col gap-10 justify-center items-center lg:-ml-36 md:mr-12">
            <DefiIconCard>
              <img src="/svg/ceresLogo.svg" alt="DeFi Velix icon" />
            </DefiIconCard>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
