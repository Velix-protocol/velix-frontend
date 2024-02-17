import AddBoxIcon from "@/components/ui/velix/icons/AddBoxIcon";
import MetisIcon from "@/components/ui/velix/icons/MetisIcon";
import { truncateString } from "@/lib/utils";
import { useChains } from "wagmi";
import { metis } from "wagmi/chains";

const address = truncateString(
  "0xdBc8997C1273bD8bc5af15f16df26C4FA03c0852",
  4,
  10
);

export default function Chains() {
  const chains = useChains();

  const addMetisToMetamaskBrowserWallet = async () => {
    try {
      await window?.ethereum.request({
        method: "wallet_watchAsset",
        params: {
          type: "ERC20",
          options: {
            address: metis.contracts.multicall3.address,
            symbol: metis.nativeCurrency.symbol,
            decimals: metis.nativeCurrency.decimals,
            name: metis.name
          }
        }
      });
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="bg-white rounded-xl flex flex-col gap-3 h-max p-5 lg:p-11">
      <div className="bg-velix-slate-blue flex justify-between items-center p-2 rounded-lg">
        <div className="bg-velix-primary/5 px-3 py-2 flex items-center gap-3 font-space-grotesk rounded-lg">
          <MetisIcon className="lg:w-7 lg:-7 w-4 h-4 fill-velix-primary" />
          <p className="lg:text-sm text-[0.625rem] font-bold">METIS</p>
          <p className="lg:text-sm text-[0.625rem] text-velix-primary">
            {truncateString(metis.contracts.multicall3.address, 4, 10)}
          </p>
        </div>
        {chains.some(
          (chain) =>
            chain.contracts?.multicall3?.address !==
            metis.contracts.multicall3.address
        ) ? (
          <AddBoxIcon
            onClick={addMetisToMetamaskBrowserWallet}
            className="w-7 h-7 fill-velix-primary mr-5 cursor-pointer"
          />
        ) : (
          <p className="text-velix-slate-green bg-velix-slate-green/20 font-space-grotesk px-3 text-xs rounded-[10px] py-2 w-fit">
            Available
          </p>
        )}
      </div>
      <div className="bg-velix-slate-blue flex justify-between items-center p-2 rounded-lg">
        <div className="bg-velix-primary/5 px-3 py-2 flex items-center gap-3 font-space-grotesk rounded-lg">
          <MetisIcon className="lg:w-7 lg:-7 w-4 h-4 fill-velix-primary" />
          <p className="lg:text-sm text-[0.625rem] font-bold">veMETIS</p>
          <p className="lg:text-sm text-[0.625rem] text-velix-primary">
            {address}
          </p>
        </div>
        <AddBoxIcon className="w-7 h-7 fill-velix-primary mr-5 cursor-pointer" />
      </div>
    </div>
  );
}
