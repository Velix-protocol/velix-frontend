import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./views/Home";
import StakePage from "./views/Staking";
import DashboardPage from "./views/Dashboard";
import Page from "./components/layouts/Page";
import { Toaster } from "@/components/ui/sonner";
import Notfound from "./views/Notfound";
import ThemeProvider from "./context/theme-provider";
import Redeem from "./views/Redeem";
import Reward from "./views/Reward";
import { APP_MODE } from "./utils/constant";
import VePoints from "./views/VePoints";
import UnsupportedChain from "./views/UnsupportedChain";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/unsupported-chain" element={<UnsupportedChain />} />
        <Route path="*" element={<Notfound />} />
        <Route path="/:ecosystem" element={<Page />}>
          <Route path="vepoints" element={<VePoints />} />
          <Route path="stake" element={<StakePage />} />
          <Route path="dashboard" element={<DashboardPage />} />
          <Route path="redeem" element={<Redeem />} />
          <Route path="reward" element={<Reward />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

function LandingPage() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="*" element={<Notfound />} />
        <Route path="/" element={<Home />} />
        <Route path="/unsupported-chain" element={<UnsupportedChain />} />
        <Route path="/app/:ecosystem" element={<Page />}>
          <Route
            index
            element={
              <Notfound isNested={window.location.pathname.includes("app")} />
            }
          />
          <Route path="vepoints" element={<VePoints />} />
          <Route path="stake" element={<StakePage />} />
          <Route path="dashboard" element={<DashboardPage />} />
          <Route path="redeem" element={<Redeem />} />
          <Route path="reward" element={<Reward />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

function MainApp() {
  return (
    <ThemeProvider>
      <Toaster />
      {APP_MODE === "app" ? <App /> : <LandingPage />}
    </ThemeProvider>
  );
}

export default MainApp;
