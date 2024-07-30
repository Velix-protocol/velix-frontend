import { Outlet } from "react-router-dom";
import AppFooter from "../app/AppFooter";
import AppHeader from "../app/AppHeader";
import BottomBar from "../app/BottomBar";
import WagmiProvider from "@/context/WagmiProvider";
import { useLayoutEffect } from "react";

export default function Page() {
  useLayoutEffect(() => {
    if (window.location.pathname === "/") {
      window.location.replace("/mint");
    }
  }, []);

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
