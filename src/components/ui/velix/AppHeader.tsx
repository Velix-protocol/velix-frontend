import Section from "@/components/layouts/Section";
import { useWeb3Modal } from "@web3modal/wagmi/react";
import { Button } from "../button";
import BottomBar from "./BottomBar";
import VelixPrimaryBlackLogo from "./icons/VelixPrimaryBlackLogo";
import { useAccount, useBalance } from "wagmi";
import { converGweiToEth, truncateString } from "@/lib/utils";

export default function AppHeader() {
  const { open } = useWeb3Modal();
  const { isConnected, address } = useAccount();
  const { data } = useBalance({
    address
  });

  const onConnectToWalletClick = async () => {
    await open();
  };

  return (
    <Section className="px-5 fixed top-0 left-0 right-0 bg-velix-slate-blue z-50">
      <div
        className={`flex items-center justify-between border-b-[0.5px] border-neutral-300  ${
          isConnected ? "py-8" : "py-5"
        }`}
      >
        <div className="flex items-center justify-betwee space-x-32 text-base">
          <VelixPrimaryBlackLogo className="fill-black w-[4.25rem] h-4" />
          <div className="hidden lg:block">
            <BottomBar />
          </div>
        </div>
        {!isConnected ? (
          <Button
            onClick={onConnectToWalletClick}
            className="bg-velix-primary lg:px-8 py-7 hover:bg-velix-primary font-bold font-space-grotesk text-sm"
          >
            Connect Wallet
          </Button>
        ) : (
          <div
            role="button"
            onClick={onConnectToWalletClick}
            className="bg-white inline-flex items-center gap-2 hover:bg-white text-black text-[0.625rem] p-2 rounded-md font-space-grotesk"
          >
            {data && (
              <span>
                {converGweiToEth(data.value)} {data?.symbol}
              </span>
            )}
            <p className="bg-[#969696]/10 px-2 text-velix-gray py-1 rounded-lg">
              {truncateString(address, 4, 10)}
            </p>
          </div>
        )}
      </div>
    </Section>
  );
}
