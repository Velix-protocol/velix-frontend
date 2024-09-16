import { ReactNode } from "react";
import CancelIcon from "./icons/CancelIcon";
import GradientBorder from "./GradientBorder";
import { cn } from "@/utils/utils.ts";

export default function Modal({
  children,
  onClose,
  className = ""
}: {
  children: ReactNode;
  onClose: () => void;
  className?: string;
}) {
  return (
    <div
      className={cn(
        "fixed z-50 px-5 bg-velix-blue/20 dark:bg-black/80 inset-0 font-space-grotesk",
        className
      )}
    >
      <div className="relative max-w-screen-md mx-auto mt-32">
        <div className="bg-white dark:bg-velix-primary flex justify-center items-center m-0.25 p-10 lg:p-20 rounded-2xl">
          <GradientBorder className="rounded-2xl -mt-0.25" />
          <CancelIcon
            onClick={onClose}
            role="button"
            className="w-7 h-7 absolute cursor-pointer fill-gray-400 dark:fill-white top-0 right-0 m-5"
          />
          {children}
        </div>
      </div>
    </div>
  );
}
