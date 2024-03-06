import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import MintPage from "./pages/Mint";
import UnstakePage from "./pages/Unskate";
import StakePage from "./pages/Staking";
import DashboardPage from "./pages/Dashboard";
import Page from "./components/layouts/Page";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/app" element={<Page />}>
          <Route index path="mint" element={<MintPage />} />
          <Route path="unstake" element={<UnstakePage />} />
          <Route path="stake" element={<StakePage />} />
          <Route path="dashboard" element={<DashboardPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
