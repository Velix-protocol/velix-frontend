import Chains from "./Chains";
import Metrics from "./Metrics";
import useGetChain from "@/hooks/useGetChain.ts";

const Statitics = () => {
  const chain = useGetChain();
  return (
    <div className="flex flex-col gap-5">
      <div className="flex flex-col gap-5">
        <Metrics />
        {chain === "metis" && <Chains />}
      </div>
    </div>
  );
};

export default Statitics;
