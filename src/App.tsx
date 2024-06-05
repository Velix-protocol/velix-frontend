import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./views/Home";
import MintPage from "./views/Mint";
import UnstakePage from "./views/Unskate";
import StakePage from "./views/Staking";
import DashboardPage from "./views/Dashboard";
import Page from "./components/layouts/Page";
import { Toaster } from "@/components/ui/sonner";
import Notfound from "./views/Notfound";
import ThemeProvider from "./context/theme-provider";
import Faucet from "./views/Faucet";
import Nft from "./views/Nft";
import Redeem from "./views/Redeem";
import Reward from "./views/Reward";

function App() {
  return (
    <ThemeProvider>
      <Toaster />
      <BrowserRouter>
        <Routes>
          <Route path="*" element={<Notfound />} />
          <Route path="/" element={<Home />} />
          <Route path="/app" element={<Page />}>
            <Route
              index
              element={
                <Notfound isNested={window.location.pathname.includes("app")} />
              }
            />
            <Route path="mint" element={<MintPage />} />
            <Route path="unstake" element={<UnstakePage />} />
            <Route path="stake" element={<StakePage />} />
            <Route path="dashboard" element={<DashboardPage />} />
            <Route path="redeem" element={<Redeem />} />
            <Route path="reward" element={<Reward />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
