import { BrowserRouter, Routes, Route } from "react-router-dom"
import Layout from './pages/Layout'
import Home from "./pages/Home"
import Signup from './pages/Signup'
import Signin from "./pages/Signin"
import Earning from "./pages/Earning"
import AdsMarketplace from "./pages/AdsMarketplace"
import Error from "./pages/Error"

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/signin" element={<Signin />} />
          <Route path="/earning" element={<Earning />} />
          <Route path="/ads-marketplace" element={<AdsMarketplace />} />
          <Route path="*" element={<Error />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
