import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./layouts/Header";
import Home from "./pages/Home";
import Teams from "./pages/Teams";
import Technologies from "./pages/Technologies";

export default function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/teams" element={<Teams />} />
        <Route path="/technologies" element={<Technologies />} />
      </Routes>
    </BrowserRouter>
  );
}
