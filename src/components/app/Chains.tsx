import VelixBlueLogo from "@/components/ui/velix/icons/VelixBlueLogo";
import {
  EXPLORER_ADDRESS_URL,
  VEMETIS_CONTRACT_ADDRESS
} from "@/utils/constant";
import { truncateString } from "@/utils/utils";
import {
  ArrowUpRightFromSquare,
  Check,
  Copy,
  Link,
  Loader,
  PlusCircle
} from "lucide-react";
import { useState } from "react";
import { useStakersStore } from "@/store/stakers";

export default function Chains() {
  const [isAddingAChaintoMetamask, setIsAddingAChaintoMetamask] =
    useState(false);
  const [chainToAdd, setChainToAdd] = useState<
    (typeof avalableChains)[0] | null
  >(null);
  const [copied, setCopied] = useState(false);
  const [copiedAddress, setCopiedAddress] = useState("");
  const { staker } = useStakersStore();

  const addMetisToMetamaskBrowserWallet = async (
    options: (typeof avalableChains)[0]
  ) => {
    try {
      setChainToAdd(options);
      setIsAddingAChaintoMetamask(true);
      await window?.ethereum.request({
        method: "wallet_watchAsset",
        params: {
          type: "ERC20",
          options: {
            address: options.address,
            symbol: options.symbol,
            decimals: options.decimals,
            name: options.name,
            image: options.image
          }
        }
      });
    } catch (err) {
      console.log(err);
    } finally {
      setIsAddingAChaintoMetamask(false);
      setChainToAdd(null);
    }
  };

  const onCopyToClickboard = async (
    address: string,
    isRefferalCode?: boolean
  ) => {
    setCopied(true);
    setCopiedAddress(address);
    const urlWithRefferalCode = location.port
      ? `${location.protocol}//${location.hostname}:${location.port}/app/stake/?referralCode=${address}`
      : `${location.protocol}//${location.hostname}/app/stake/?referralCode=${address}`;
    const addressToCopy = isRefferalCode ? urlWithRefferalCode : address;
    await navigator.clipboard.writeText(addressToCopy);
    setTimeout(() => {
      setCopied(false);
      setCopiedAddress("");
    }, 1500);
  };

  const onViewChainOnExplorer = (address: string) => {
    window.open(`${EXPLORER_ADDRESS_URL}${address}`);
  };

  const avalableChains = [
    {
      address: VEMETIS_CONTRACT_ADDRESS,
      symbol: "veMETIS",
      decimals: 18,
      name: "veMETIS",
      logo: (
        <VelixBlueLogo className="w-6 h-6 fill-velix-blue dark:fill-velix-dark-white" />
      ),
      image:
        "https://firebasestorage.googleapis.com/v0/b/butik004.appspot.com/o/Layer_1%20(1).svg?alt=media&token=5cec6dd9-95a9-47ec-8381-cf22927bf644"
    }
  ];

  return (
    <div className="bg-white dark:bg-velix-form-dark-background rounded-xl flex flex-col gap-3 h-max p-5 lg:p-11">
      {staker?.referralCode && (
        <div className="bg-velix-slate-blue pr-7 font-space-grotesk dark:bg-velix-form-input-dark flex justify-between items-center p-2 rounded-lg">
          <p className="bg-velix-blue/5 dark:text-velix-dark-white dark:bg-velix-light-dark px-3 py-2 flex items-center gap-3 font-space-grotesk rounded-lg">
            Referral Code: {staker?.referralCode}
          </p>
          {staker?.referralCode.toLowerCase() ===
          copiedAddress.toLowerCase() ? (
            <Check className="text-velix-primary w-5 h-5 dark:text-velix-icon-dark" />
          ) : (
            <Link
              role="button"
              onClick={() =>
                onCopyToClickboard(staker?.referralCode ?? "", true)
              }
              className="text-velix-primary w-5 h-5 cursor-pointer dark:text-velix-icon-dark"
            />
          )}
        </div>
      )}
      {avalableChains.map((chain) => {
        return (
          <div
            key={chain.address}
            className="bg-velix-slate-blue dark:bg-velix-form-input-dark flex justify-between items-center p-2 rounded-lg"
          >
            <div className="bg-velix-blue/5 dark:text-velix-dark-white dark:bg-velix-light-dark px-3 py-2 flex items-center gap-3 font-space-grotesk rounded-lg">
              {chain.logo}
              <p className="lg:text-sm text-[0.625rem] font-bold">
                {chain.name}
              </p>
              <p className="lg:text-sm text-[0.625rem] text-velix-primary dark:text-velix-dark-white">
                {truncateString(chain.address)}
              </p>
            </div>
            {chainToAdd?.address.toLowerCase() ===
              chain.address.toLowerCase() && isAddingAChaintoMetamask ? (
              <>
                <Loader className="w-7 h-7 animate-spin mr-5 text-velix-primary" />
              </>
            ) : (
              <div className="flex gap-3 items-center mr-5">
                <PlusCircle
                  role="button"
                  onClick={() => addMetisToMetamaskBrowserWallet(chain)}
                  className="text-velix-primary dark:text-velix-icon-dark w-5 h-5 cursor-pointer"
                />
                {copied &&
                chain.address.toLowerCase() === copiedAddress.toLowerCase() ? (
                  <Check className="text-velix-primary w-5 h-5 dark:text-velix-icon-dark" />
                ) : (
                  <Copy
                    role="button"
                    onClick={() => onCopyToClickboard(chain.address)}
                    className="text-velix-primary w-5 h-5 cursor-pointer dark:text-velix-icon-dark"
                  />
                )}
                <ArrowUpRightFromSquare
                  onClick={() => onViewChainOnExplorer(chain.address)}
                  role="button"
                  className="text-velix-primary w-5 h-5 cursor-pointer dark:text-velix-icon-dark"
                />
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}
