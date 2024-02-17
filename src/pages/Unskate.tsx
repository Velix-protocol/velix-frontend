import Unstake from "@/components/section/Unstake";
import AppFooter from "@/components/ui/velix/AppFooter";
import AppHeader from "@/components/ui/velix/AppHeader";
import BottomBar from "@/components/ui/velix/BottomBar";

export default function Staking() {
  return (
    <div className="bg-velix-slate-blue overflow-y-auto">
      <div className="lg:hidden block fixed bottom-0 left-0 right-0 w-full bg-white z-40 py-7 border-t">
        <BottomBar />
      </div>
      <AppHeader />
      <Unstake />
      <AppFooter />
    </div>
  );
}
