import { cn } from "@/utils/utils";
import { ComponentProps } from "react";

const MaxButton = (props: ComponentProps<"button">) => {
  const { className, onClick, children, ...rest } = props;
  return (
    <button
      {...rest}
      onClick={onClick}
      className={cn(
        "font-bold text-velix-primary dark:text-white uppercase text-sm p-3 lg:p-4 bg-velix-blue/5 dark:bg-velix-light-dark rounded-md",
        className
      )}
    >
      {children}
    </button>
  );
};

export default MaxButton;
