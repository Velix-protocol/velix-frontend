import { Outlet } from "react-router-dom";
import AppFooter from "../ui/velix/AppFooter";
import AppHeader from "../ui/velix/AppHeader";
import BottomBar from "../ui/velix/BottomBar";

export default function Page() {
  return (
    <div className="bg-velix-slate-blue overflow-y-auto">
      <div className="lg:hidden block fixed bottom-0 left-0 right-0 w-full bg-white z-40 py-7 border-t">
        <BottomBar />
      </div>
      <AppHeader />
      <Outlet />
      <AppFooter />
    </div>
  );
}
