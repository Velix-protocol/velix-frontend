import Stake from "@/components/section/Stake";
import AppHeader from "@/components/ui/velix/AppHeader";

export default function Application() {
  return (
    <div className="bg-velix-slate-blue overflow-y-auto">
      <AppHeader />
      <Stake />
    </div>
  );
}
