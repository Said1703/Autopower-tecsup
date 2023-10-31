import { BrowserRouter, Routes, Route } from "react-router-dom";
import { About, BuyService, Home, Benefits, Contact } from "../pages";
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
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
