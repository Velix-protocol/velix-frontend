import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import MintPage from "./pages/Mint";
import UnstakePage from "./pages/Unskate";
import StakePage from "./pages/Staking";
import DashboardPage from "./pages/Dashboard";
import Page from "./components/layouts/Page";
import { Toaster } from "@/components/ui/sonner";
import Notfound from "./pages/Notfound";
import ThemeProvider from "./context/theme-provider";
import Faucet from "./pages/Faucet";
import Nft from "./pages/Nft";

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
            <Route path="nft" element={<Nft />} />
            <Route path="faucet" element={<Faucet />} />
            <Route path="unstake" element={<UnstakePage />} />
            <Route path="stake" element={<StakePage />} />
            <Route path="dashboard" element={<DashboardPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
