import { FaClock } from 'react-icons/fa';
import { Button } from '../ui/button';
import TicketLogo from '../ui/velix/icons/TicketLogo';

const RedeemCard = () => {
  return (
    <div className="bg-white dark:bg-velix-claim-gray3 border-4 border-velix-claim dark:border-velix-claim-gray2 rounded-lg p-4 px-[2rem] xl:mt-0 sm:mt-2 max-w-md md:max-w-xl lg:max-w-lg xl:max-w-xl ml-4 mr-4 mt-8">
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 lg:gap-8 xl:gap-12">
        <div className="flex-1 sm:flex-none lg:flex-none xl:flex-none lg:mr-24 md:mr-[8rem]">
          <p className="text-velix-claim-grey dark:text-velix-claim text-sm lg:text-base font-space-grotesk">
            Redeem: <span className="font-bold text-black font-space-grotesk dark:text-velix-claim mr-1">0.0200</span> VeMetis
          </p>
          <div className="flex flex-wrap items-center gap-4 mt-2">
            <div className="flex items-center text-velix-blue text-sm lg:text-base font-space-grotesk font-bold dark:text-white">
              <TicketLogo className='dark:fill-white mr-1 w-5 h-5'/>
              Ticket ID 
              <span className="text-velix-blue dark:text-white font-bold ml-1 font-space-grotesk">#456</span>
            </div>
            <div className="flex items-center text-gray-600 text-sm lg:text-base font-medium dark:text-white">
              <FaClock className="mr-1 text-velix-blue dark:text-white" /> 
              2 days, 10 : 20 : 54 
            </div>
          </div>
        </div>
        <Button className="bg-velix-blue dark:bg-velix-gray dark:text-black hover:bg-velix-blue h-8 text-white font-medium px-4 py-2 rounded-md font-space-grotesk mt-4 sm:mt-0 sm:ml-8 -mr-0 lg:mt-4 md:mt-3 mr-29 lg:-ml-[3.5rem]">
          Redeem
        </Button>
      </div>
    </div>
  );
};

export default RedeemCard;
