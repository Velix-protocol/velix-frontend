import Chains from "./Chains";
import Metrics from "./Metrics";

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
