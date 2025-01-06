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
import Crosschain from "./views/Crosschain";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="*" element={<Notfound />} />
        <Route path="/" element={<Page />}>
          <Route index element={<StakePage />} />
          <Route path="vepoints" element={<VePoints />} />
          <Route path="stake" element={<StakePage />} />
          <Route path="dashboard" element={<DashboardPage />} />
          <Route path="redeem" element={<Redeem />} />
          <Route path="reward" element={<Reward />} />
          <Route path="crosschain" element={<Crosschain />} />
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
        <Route path="/app" element={<Page />}>
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
          <Route path="crosschain" element={<Crosschain />} />
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
