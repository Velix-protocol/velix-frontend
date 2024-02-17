import Stake from "@/components/section/Stake";
import AppFooter from "@/components/ui/velix/AppFooter";
import AppHeader from "@/components/ui/velix/AppHeader";

export default function Staking() {
  return (
    <div className="bg-velix-slate-blue overflow-y-auto">
      <AppHeader />
      <Stake />
      <AppFooter />
    </div>
  );
}
