import { BrowserRouter, Routes, Route } from "react-router-dom";
import {
  About,
  BuyService,
  Home,
  Benefits,
  Contact,
  Login,
  Profile,
} from "../pages";
import { Layout } from "../Components";
export default function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/BuyService" element={<BuyService />} />
          <Route path="/Benefits" element={<Benefits />} />
          <Route path="/Contact" element={<Contact />} />
          <Route path="/About" element={<About />} />
          <Route path="/Login" element={<Login />} />
          <Route path="/Profile" element={<Profile />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
