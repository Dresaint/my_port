import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import HomeSphere from "./pages/Homesphere";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects/homesphere" element={<HomeSphere />} />
      </Routes>
    </BrowserRouter>
  );
}
