import { ReactNode } from "react";

export default function AppContent({ children }: { children: ReactNode }) {
  return (
    <div className="flex flex-col lg:flex-row gap-5 justify-between mb-28 items-start h-fit">
      {children}
    </div>
  );
}
