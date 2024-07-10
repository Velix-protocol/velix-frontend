import { cn } from "@/utils/utils";

export const VerticalBorderComponent = ({
  className
}: {
  className?: string;
}) => {
  return (
    <div
      className={cn(
        className,
        "relative h-full w-fit flex flex-col items-center"
      )}
    >
      <div className="h-1 w-1 top-0 rounded-full bg-velix-blue dark:bg-primary" />
      <div className="w-[2px] opacity-40 h-full bg-velix-blue dark:bg-primary" />
      <div className="absolute bottom-0 h-1 w-1 bg-velix-blue rounded-full dark:bg-primary" />
    </div>
  );
};
