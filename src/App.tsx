import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import WagmiProvider from "./context/WagmiProvider";
import Staking from "./pages/Staking";
import Unskate from "./pages/Unskate";

function App() {
  return (
    <WagmiProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/app">
            <Route index element={<Staking />} />
            <Route path="unstake" element={<Unskate />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </WagmiProvider>
  );
}

export default App;
