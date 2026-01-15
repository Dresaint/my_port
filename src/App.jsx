import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import HomeSphere from "./pages/Homesphere";
import TeachHustle from "./pages/TeachHustle";
import ScrollToTop from "./components/ScrollTop";

export default function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects/homesphere" element={<HomeSphere />} />
         <Route path="/projects/teachhustle" element={<TeachHustle />} />
        
      </Routes>
    </BrowserRouter>
  );
}
