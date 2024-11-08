import { Button } from "../ui/button";
import ClockLogo from "../ui/velix/icons/ClockLogo";
import TicketLogo from "../ui/velix/icons/TicketLogo";

const RedeemTicket = () => {
  return (
    <div className="mt-5 mb-5 space-y-5">
      <div className="w-full h-28 flex justify-center items-center bg-velix-claim dark:bg-velix-gray1 rounded-xl px-2 overflow-x-auto">
        <div className="py-2 px-3 rounded-lg text-velix-black bg-white dark:bg-velix-claim-gray3">
          <div className="mb-5">
            <p className="font-space-grotesk text-velix-text-gray dark:text-white lg:text-lg md:text-md text-sm">
              Redeem:<span className="font-bold lg:text-lg md:text-md text-sm text-black dark:text-white "> 0.0200</span> VeMetis
            </p>
          </div>

          <div className="flex flex-row items-center">
            <TicketLogo className="w-6 h-6 dark:fill-white mr-2"
            />
            <p className="font-space-grotesk text-black font-bold mr-2 dark:text-white lg:text-lg md:text-md text-sm">
              TicketID:<span className="font-bold text-velix-blue m-1 dark:text-white lg:text-lg md:text-md text-sm"> 0.0100</span>
            </p>
            <ClockLogo className="mr-2 dark:fill-white"/>
            <p className="font-space-grotesk text-black font-bold dark:text-white lg:text-lg md:text-md text-sm">2 days, 10 : 20 : 54</p>
            
            <Button
              className="w-1/4 font-space-grotesk bg-velix-blue dark:bg-velix-gray text-white dark:text-velix-claim-gray px-10 ml-5"
            >
              Redeem
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default RedeemTicket;
