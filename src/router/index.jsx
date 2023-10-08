import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home } from "../pages";
import { Layout } from "../Components";
export default function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
