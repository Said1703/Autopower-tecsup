import { BrowserRouter, Routes, Route } from "react-router-dom";
import { BuyService, Home } from "../pages";
import { Layout } from "../Components";
export default function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/BuyService" element={<BuyService />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
