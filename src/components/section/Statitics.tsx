import Chains from "./Stake/Chains";
import Metrics from "./Stake/Metrics";

const Statitics = () => {
  return (
    <div className="flex flex-col gap-5">
      <div className="flex flex-col gap-5">
        <Metrics />
        <Chains />
      </div>
    </div>
  );
};

export default Statitics;
