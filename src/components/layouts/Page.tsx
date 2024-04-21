import { Outlet } from "react-router-dom";
import AppFooter from "../AppFooter";
import AppHeader from "../AppHeader";
import BottomBar from "../BottomBar";
import WagmiProvider from "@/context/WagmiProvider";

export default function Page() {
  return (
    <WagmiProvider>
      <div className="bg-velix-slate-blue dark:bg-velix-primary flex flex-col justify-between gap-3 overflow-y-auto h-screen">
        <div className="lg:hidden block fixed bottom-0 left-0 right-0 w-full bg-white dark:bg-velix-page-dark z-40 py-7 border-t">
          <BottomBar />
        </div>
        <AppHeader />
        <Outlet />
        <AppFooter />
      </div>
    </WagmiProvider>
  );
}
