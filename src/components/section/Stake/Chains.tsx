import AddBoxIcon from "@/components/ui/velix/icons/AddBoxIcon";
import MetisIcon from "@/components/ui/velix/icons/MetisIcon";
import {
  SVEMETIS_CONTRACT_ADDRESS,
  VEMETIS_CONTRACT_ADDRESS
} from "@/lib/constant";
import { truncateString } from "@/lib/utils";
import { metis } from "wagmi/chains";

const avalableChains = [
  {
    address: metis.contracts.multicall3.address,
    symbol: metis.nativeCurrency.symbol,
    decimals: metis.nativeCurrency.decimals,
    name: metis.name
  },
  {
    address: VEMETIS_CONTRACT_ADDRESS,
    symbol: "veMETIS",
    decimal: 18,
    name: "veMETIS",
    image:
      "https://firebasestorage.googleapis.com/v0/b/butik004.appspot.com/o/Layer_1%20(1).svg?alt=media&token=5cec6dd9-95a9-47ec-8381-cf22927bf644"
  },
  {
    address: SVEMETIS_CONTRACT_ADDRESS,
    symbol: "sveMETIS",
    decimal: 18,
    name: "sveMETIS",
    image:
      "https://firebasestorage.googleapis.com/v0/b/butik004.appspot.com/o/Sve%404x.png?alt=media&token=678c31d7-c9d2-4c51-b5e7-3eac25e31482"
  }
];

export default function Chains() {
  const addMetisToMetamaskBrowserWallet = async (options: unknown) => {
    try {
      await window?.ethereum.request({
        method: "wallet_watchAsset",
        params: {
          type: "ERC20",
          options
        }
      });
    } catch (err) {
      console.log(err);
    }
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
              {chain.image ? (
                <img
                  src={chain.image}
                  alt={chain.name}
                  className="w-5 h-5 object-cover"
                />
              ) : (
                <MetisIcon className="w-5 h-5  fill-velix-primary" />
              )}
              <p className="lg:text-sm text-[0.625rem] font-bold">
                {chain.name}
              </p>
              <p className="lg:text-sm text-[0.625rem] text-velix-primary">
                {truncateString(chain.address)}
              </p>
            </div>
            <AddBoxIcon
              onClick={() => addMetisToMetamaskBrowserWallet(chain)}
              className="w-7 h-7 fill-velix-primary mr-5 cursor-pointer"
            />
          </div>
        );
      })}
    </div>
  );
}
