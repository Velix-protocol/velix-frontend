import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import WagmiProvider from "./context/WagmiProvider";
import MintPage from "./pages/Mint";
import UnstakePage from "./pages/Unskate";
import StakePage from "./pages/Staking";
import DashboardPage from "./pages/Dashboard";

function App() {
  return (
    <WagmiProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/app">
            <Route index element={<StakePage />} />
            <Route path="unstake" element={<UnstakePage />} />
            <Route path="mint" element={<MintPage />} />
            <Route path="dashboard" element={<DashboardPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </WagmiProvider>
  );
}

export default App;
