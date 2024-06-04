import { cn } from "@/utils/utils";
import { ComponentProps } from "react";

export default function StakeTitleWrapper(props: ComponentProps<"div">) {
  const { children, className, ...rest } = props;
  return (
    <div
      {...rest}
      className={cn("hidden lg:flex pt-28 gap-5 lg:pt-40", className)}
    >
      {children}
    </div>
  );
}
