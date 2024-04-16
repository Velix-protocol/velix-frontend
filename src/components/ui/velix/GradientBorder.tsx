import { cn } from "@/utils/utils";
import { ComponentProps } from "react";

export default function GradientBorder(props: ComponentProps<"div">) {
  const { className, ...rest } = props;
  return (
    <div
      {...rest}
      className={cn(
        "w-full h-full bg-gradient-to-t from-transparent via-transparent to-white/35 absolute inset-0 -z-10",
        className
      )}
    />
  );
}
