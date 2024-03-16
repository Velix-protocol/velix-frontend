import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import MintPage from "./pages/Mint";
import UnstakePage from "./pages/Unskate";
import StakePage from "./pages/Staking";
import DashboardPage from "./pages/Dashboard";
import Page from "./components/layouts/Page";
import { Toaster } from "@/components/ui/sonner";
import Notfound from "./pages/Notfound";

function App() {
  return (
    <>
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
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
