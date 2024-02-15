import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Application from "./pages/Application";
import WagmiProvider from "./context/WagmiProvider";

function App() {
  return (
    <WagmiProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/app" element={<Application />} />
        </Routes>
      </BrowserRouter>
    </WagmiProvider>
  );
}

export default App;
