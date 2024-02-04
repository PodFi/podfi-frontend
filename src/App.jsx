import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Signup from "./pages/Signup";
import Signin from "./pages/Signin";
import Earning from "./pages/Earning";
import AdsMarketplace from "./pages/AdsMarketplace";
import Error from "./pages/Error";
import Layout from "./pages/Layout";
import { useState } from "react";

function App() {
  const [dark, setDark] = useState(document.documentElement.classList.contains("dark"))
  const [user, setUser] = useState({username:'aya', profilePicture:'/images/photo.jpg'})
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout user={user} dark={dark} setDark={setDark}/>}>
          <Route index element={<Home />} />
          <Route path="/earning" element={<Earning />} />
          <Route path="/ads-marketplace" element={<AdsMarketplace dark={dark}/>} />
          <Route path="*" element={<Error />} />
        </Route>
        <Route path="/signup" element={<Signup />} />
        <Route path="/signin" element={<Signin />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
