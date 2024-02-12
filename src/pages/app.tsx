import Stake from "@/components/section/Stake";
import AppHeader from "@/components/ui/velix/AppHeader";

export default function app() {
  return (
    <div className="bg-velix-slate-blue h-screen">
      <AppHeader />
      <Stake />
    </div>
  );
}
