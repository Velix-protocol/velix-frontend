const DEFIs = [
  {
    icon: <img src="/svg/metamask.svg" alt="metamask" />,
    status: ""
  },
  {
    icon: <img src="/svg/3d.svg" alt="3d" />,
    status: "Coming soon"
  },
  {
    icon: <img src="/svg/vm.svg" alt="vm" />,
    status: "Coming soon"
  },
  {
    icon: <img src="/svg/stack.svg" alt="stack" />,
    status: "Coming soon"
  },
  {
    icon: <img src="/svg/uniswap.svg" alt="uniswap" />,
    status: "Coming soon"
  },
  {
    icon: <img src="/svg/micon.svg" alt="micon" />,
    status: "Coming soon"
  }
];

export default function DefiIntegration() {
  return (
    <div className="mt-24 flex flex-col lg:grid grid-cols-2">
      <img
        src="/svg/defi-integration.svg"
        alt="defi integration"
        className="scale-75 xl:scale-100"
      />
      <div className="max-w-sm- lg:max-w-[21rem] max-w-[23rem] max-lg:mx-auto lg:ml-20">
        <h2 className="font-space-grotesk font-bold text-[1.25rem] lg:text-4xl flex flex-col max-lg:text-center w-fit">
          Defi Integration
          <span className="text-velix-gray text-base font-normal mt-8 max-w-80">
            Find veMETIS and VL tokens on popular DeFi platforms on METIS
          </span>
        </h2>
        <div className="grid max-[380px]:grid-cols-3 grid-cols-3 gap-3 mt-16">
          {DEFIs.map((defi) => {
            return (
              <div
                key={`defi-${defi.status}`}
                className="bg-velix-slate-blue w-full flex flex-col items-center justify-center p-3 rounded-[15px] overflow-hidden relative"
              >
                <span
                  className={`h-20 w-20 mx-auto flex justify-center items-center ${
                    !!defi.status && "-mt-3"
                  }`}
                >
                  {defi.icon}
                </span>

                {!!defi.status && (
                  <span className="font-space-grotesk font-medium text-[8px] bg-velix-slate-green/20 py-1.5 text-velix-slate-green w-full left-0 right-0 text-center absolute bottom-0">
                    {defi.status}
                  </span>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
