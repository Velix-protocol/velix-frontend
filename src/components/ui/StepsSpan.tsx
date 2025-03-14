interface StepsSpanProps {
  number: number;
  className?: string;
}

function StepsSpan({ number, className }: StepsSpanProps) {
  return (
    <span
      className={`absolute bg-velix-blue dark:bg-velix-yellow dark:text-black rounded-full lg:h-5 lg:w-5 h-4 w-4 flex font-space-grotesk text-white lg:font-semibold font-normal text-xs items-center justify-center ${className}`}
    >
      {number}
    </span>
  );
}

export default StepsSpan;
