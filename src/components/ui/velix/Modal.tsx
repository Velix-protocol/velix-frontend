import { ReactNode } from "react";
import CancelIcon from "./icons/CancelIcon";

export default function Modal({
  children,
  onClose
}: {
  children: ReactNode;
  onClose: () => void;
}) {
  return (
    <div className="fixed z-50 px-5 bg-velix-primary/20 inset-0 font-space-grotesk">
      <div className="bg-white dark:bg-velix-primary max-w-screen-md mx-auto flex justify-center items-center mt-32 relative p-10 lg:p-20 rounded-lg">
        <CancelIcon
          onClick={onClose}
          role="button"
          className="w-7 h-7 absolute fill-velix-gray dark:fill-white top-0 right-0 m-5"
        />
        {children}
      </div>
    </div>
  );
}
