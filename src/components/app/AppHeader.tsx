import Section from "@/components/layouts/Section";
import { useWeb3Modal } from "@web3modal/wagmi/react";
import { Button } from "../ui/button";
import NavigationMenus from "./NavigationMenus";
import VelixPrimaryBlackLogo from "../ui/velix/icons/VelixPrimaryBlackLogo";
import { useAccount, useBalance } from "wagmi";
import { converGweiToEth, truncateString } from "@/utils/utils";
import { Link } from "react-router-dom";
import ThemeButton from "../ui/velix/ThemeButton";

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
    <Section className="px-5 fixed top-0 left-0 right-0 bg-velix-slate-blue dark:bg-velix-primary z-50">
      <div
        className={`flex items-center justify-between border-b-[0.5px] border-neutral-300 dark:border-velix-light-dark  ${
          isConnected ? "py-8" : "py-5"
        }`}
      >
        <div className="flex items-center justify-betwee space-x-16 text-base">
          <Link to="/">
            <VelixPrimaryBlackLogo
              className="fill-black dark:fill-velix-dark-white w-[4.25rem] h-4"
              aria-label="VelixPrimaryBlackLogo"
            />
          </Link>
          <div className="hidden lg:block">
            <NavigationMenus />
          </div>
        </div>
        <div className="flex items-center gap-3">
          {!isConnected ? (
            <Button
              onClick={onConnectToWalletClick}
              className="bg-velix-primary dark:bg-velix-dark-white lg:px-8 lg:py-5 hover:bg-velix-primary font-bold font-space-grotesk text-sm"
            >
              Connect Wallet
            </Button>
          ) : (
            <div
              role="button"
              onClick={onConnectToWalletClick}
              className="bg-white inline-flex items-center text-sm gap-2 dark:text-velix-dark-white hover:bg-white dark:bg-velix-form-input-dark dark:hover:bg-velix-form-input-dark text-black text-[0.625rem] p-2 rounded-md font-space-grotesk"
            >
              {data && (
                <span className="font-bold">
                  {converGweiToEth(data.value)} {data?.symbol}
                </span>
              )}
              <p className="bg-[#969696]/10 max-md:hidden dark:bg-velix-light-dark px-2 dark:text-velix-dark-white text-velix-gray py-1 rounded-lg">
                {truncateString(address, 4, 4)}
              </p>
            </div>
          )}
          <ThemeButton />
        </div>
      </div>
    </Section>
  );
}
