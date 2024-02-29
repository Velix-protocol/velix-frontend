const DEFIs = [
  {
    icon: <img src="/svg/defi1.svg" alt="defi1" />,
    color: "rgba(0, 0, 254, 0.1)"
  },
  {
    icon: <img src="/svg/wagmi.svg" alt="wagmi" />,
    color: "rgba(225, 220, 212, 0.2)"
  },
  {
    icon: <img src="/svg/pinkHead.svg" alt="pinkHead" />,
    color: "rgba(247, 209, 239, 0.5)"
  },
  {
    icon: <img src="/svg/tettys1.svg" alt="stack" />,
    color: "rgba(199, 173, 113, 0.2)"
  },
  {
    icon: <img src="/svg/chocolateTree.svg" alt="chocolateTree" />,
    color: "rgba(30, 30, 30, 0.6)"
  },
  {
    icon: <img src="/svg/defi-velix.svg" alt="defi-velix" />,
    color: "rgba(252, 187, 76, 0.2)"
  }
];

export default function DefiIntegration() {
  return (
    <div className="lg:mt-20 flex flex-col lg:grid grid-cols-2 justify-center items-center">
      <img
        src="/svg/defi-integration.svg"
        alt="defi integration"
        className="scale-75 xl:scale-90"
      />
      <div className="max-w-sm- lg:max-w-[21rem] max-w-[23rem] max-lg:mx-auto lg:ml-20">
        <h2 className="font-space-grotesk font-bold text-[1.25rem] lg:text-4xl flex flex-col max-lg:text-center w-fit">
          Defi Integration
          <span className="text-velix-gray text-base font-normal mt-8 max-w-80">
            Find veMETIS and VL tokens on popular DeFi platforms on METIS
          </span>
        </h2>
        <div className="grid max-[380px]:grid-cols-3 grid-cols-3 gap-3 mt-16">
          {DEFIs.map((defi, index) => {
            return (
              <div
                key={`defi-${defi.color}-${index}`}
                style={{
                  background: defi.color
                }}
                className=" w-full flex flex-col items-center justify-center p-3 rounded-[15px] overflow-hidden relative"
              >
                <span className="h-20 w-20 mx-auto flex justify-center items-center">
                  {defi.icon}
                </span>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
