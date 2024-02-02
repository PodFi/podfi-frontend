import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Signup from "./pages/Signup";
import Signin from "./pages/Signin";
import Earning from "./pages/Earning";
import AdsMarketplace from "./pages/AdsMarketplace";
import Error from "./pages/Error";
import Layout from "./pages/Layout";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/earning" element={<Earning />} />
          <Route path="/ads-marketplace" element={<AdsMarketplace />} />
          <Route path="*" element={<Error />} />
        </Route>
        <Route path="/signup" element={<Signup />} />
        <Route path="/signin" element={<Signin />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
