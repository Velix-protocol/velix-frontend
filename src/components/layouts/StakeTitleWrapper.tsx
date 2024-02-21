import { ReactNode } from "react";

export default function StakeTitleWrapper({
  children
}: {
  children: ReactNode;
}) {
  return <div className="hidden lg:flex pt-28 lg:pt-40">{children}</div>;
}
