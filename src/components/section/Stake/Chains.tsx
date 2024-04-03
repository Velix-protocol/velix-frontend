import SveMETIS from "@/components/ui/velix/icons/SveMETIS";
import VelixBlueLogo from "@/components/ui/velix/icons/VelixBlueLogo";
import {
  EXPLORER_ADDRESS_URL,
  SVEMETIS_CONTRACT_ADDRESS,
  VEMETIS_CONTRACT_ADDRESS
} from "@/utils/constant";
import { truncateString } from "@/utils/utils";
import {
  ArrowUpRightFromSquare,
  Check,
  Copy,
  Loader,
  PlusCircle
} from "lucide-react";
import { useState } from "react";

const avalableChains = [
  {
    address: VEMETIS_CONTRACT_ADDRESS,
    symbol: "veMETIS",
    decimals: 18,
    name: "veMETIS",
    logo: <VelixBlueLogo className="w-6 h-6" />,
    image:
      "https://firebasestorage.googleapis.com/v0/b/butik004.appspot.com/o/Layer_1%20(1).svg?alt=media&token=5cec6dd9-95a9-47ec-8381-cf22927bf644"
  },
  {
    address: SVEMETIS_CONTRACT_ADDRESS,
    symbol: "sveMETIS",
    decimals: 18,
    name: "sveMETIS",
    logo: <SveMETIS className="w-8 h-8" />,
    image:
      "https://firebasestorage.googleapis.com/v0/b/butik004.appspot.com/o/Sve%404x.png?alt=media&token=678c31d7-c9d2-4c51-b5e7-3eac25e31482"
  }
];

export default function Chains() {
  const [isAddingAChaintoMetamask, setIsAddingAChaintoMetamask] =
    useState(false);
  const [chainToAdd, setChainToAdd] = useState<
    (typeof avalableChains)[0] | null
  >(null);
  const [copied, setCopied] = useState(false);
  const [copiedAddress, setCopiedAddress] = useState("");

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

  const onCopyToClickboard = async (address: string) => {
    setCopied(true);
    setCopiedAddress(address);
    await navigator.clipboard.writeText(address);
    setTimeout(() => {
      setCopied(false);
      setCopiedAddress("");
    }, 1500);
  };

  const onViewChainOnExplorer = (address: string) => {
    window.open(`${EXPLORER_ADDRESS_URL}${address}`);
  };

  return (
    <div className="bg-white rounded-xl flex flex-col gap-3 h-max p-5 lg:p-11">
      {avalableChains.map((chain) => {
        return (
          <div
            key={chain.address}
            className="bg-velix-slate-blue flex justify-between items-center p-2 rounded-lg"
          >
            <div className="bg-velix-primary/5 px-3 py-2 flex items-center gap-3 font-space-grotesk rounded-lg">
              {chain.logo}
              <p className="lg:text-sm text-[0.625rem] font-bold">
                {chain.name}
              </p>
              <p className="lg:text-sm text-[0.625rem] text-velix-primary">
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
                  className="text-velix-primary w-5 h-5 cursor-pointer"
                />
                {copied &&
                chain.address.toLowerCase() === copiedAddress.toLowerCase() ? (
                  <Check className="text-velix-primary w-5 h-5" />
                ) : (
                  <Copy
                    role="button"
                    onClick={() => onCopyToClickboard(chain.address)}
                    className="text-velix-primary w-5 h-5 cursor-pointer"
                  />
                )}
                <ArrowUpRightFromSquare
                  onClick={() => onViewChainOnExplorer(chain.address)}
                  role="button"
                  className="text-velix-primary w-5 h-5 cursor-pointer"
                />
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}
