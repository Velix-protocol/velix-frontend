import { BrowserRouter, Route, Routes } from "react-router-dom";
import StakePage from "./views/Staking";
import DashboardPage from "./views/Dashboard";
import Page from "./components/layouts/Page";
import { Toaster } from "@/components/ui/sonner";
import Notfound from "./views/Notfound";
import ThemeProvider from "./context/theme-provider";
import Redeem from "./views/Redeem";
import Reward from "./views/Reward";

const VelixApp = () => {
  return (
    <ThemeProvider>
      <Toaster />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Page />}>
            <Route path="*" element={<Notfound />} />
            <Route path="stake" element={<StakePage />} />
            <Route path="dashboard" element={<DashboardPage />} />
            <Route path="redeem" element={<Redeem />} />
            <Route path="reward" element={<Reward />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
};

export default VelixApp;
