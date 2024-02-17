import Unstake from "@/components/section/Unstake";
import AppFooter from "@/components/ui/velix/AppFooter";
import AppHeader from "@/components/ui/velix/AppHeader";

export default function Staking() {
  return (
    <div className="bg-velix-slate-blue overflow-y-auto">
      <AppHeader />
      <Unstake />
      <AppFooter />
    </div>
  );
}
