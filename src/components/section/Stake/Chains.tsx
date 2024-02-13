import AddBoxIcon from "@/components/ui/velix/icons/AddBoxIcon";
import MetisIcon from "@/components/ui/velix/icons/MetisIcon";
import { truncateString } from "@/lib/utils";

export const address = truncateString(
  "0xdBc8997C1273bD8bc5af15f16df26C4FA03c0852",
  4,
  10
);

export default function Chains() {
  return (
    <div className="bg-white rounded-xl flex flex-col gap-3 p-5 lg:p-11">
      <div className="bg-velix-slate-blue flex justify-between items-center p-2 rounded-lg">
        <div className="bg-velix-primary/5 px-3 py-2 flex items-center gap-3 font-space-grotesk rounded-lg">
          <MetisIcon className="lg:w-7 lg:-7 w-4 h-4 fill-velix-primary" />
          <p className="lg:text-sm text-[0.625rem] font-bold">METIS</p>
          <p className="lg:text-sm text-[0.625rem] text-velix-primary">
            {address}
          </p>
        </div>
        <AddBoxIcon className="w-7 h-7 fill-velix-primary mr-5 cursor-pointer" />
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
