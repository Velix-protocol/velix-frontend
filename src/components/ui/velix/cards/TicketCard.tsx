import { ReactElement } from "react";
import { Button } from "../../button";

export default function TicketCard({
  icon,
  icon1,
  description,
  description2,
  description3,
  value,
  date,
  value1,
  button
}: {
  icon: ReactElement;
  description: string;
  description3: string;
  value: string;
  icon1: ReactElement;
  description2: string;
  date: string;
  button: string;
  value1: string;
}) {
  return (
    <div className="flex flex-col py-5 px-7 rounded-xl font-space-grotesk bg-velix-slate-blue dark:bg-velix-form-input-dark lg:w-full">
      <div className="flex flex-row items-center gap-3 lg:text-base text-xs mb-5">
        <p className="text-velix-gray font-medium">{description}</p>
        <span className="font-bold text-velix-blue dark:text-white">{value}</span>
        <p className="text-velix-gray font-medium">{description2}</p>
      </div>

      <div className="flex flex-col md:flex-row sm:flex-col sm:items-start md:items-start lg:items-center gap-2 lg:gap-4 flex-wrap sm:flex-nowrap lg:w-full">
        <div className="flex flex-row items-center gap-2 sm:gap-4">
          {icon}
          <p className="text-velix-gray font-bold lg:text-base text-sm whitespace-nowrap">
            {description3}
          </p>
          <span className="text-velix-blue mr-1 font-bold dark:text-white lg:text-base text-sm whitespace-nowrap">
            {value1}
          </span>
        </div>

        <div className="flex flex-row items-center gap-2 sm:gap-4 -mb-1 sm:mt-0 md:mt-[-0.4rem] md:justify-between w-full lg:w-full">
          <div className="flex flex-row items-center gap-2">
            {icon1}
            <p className="text-velix-gray mr-2 font-semibold text-black lg:text-base text-sm whitespace-nowrap">
              {date}
            </p>
          </div>

          <div className="flex justify-end w-full md:w-auto lg:w-auto">
            <Button className="bg-velix-blue dark:bg-velix-gray font-medium dark:text-black hover:bg-velix-blue h-8 text-white  sm:px-2 px-4 py-2 rounded-md">
              {button}
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
