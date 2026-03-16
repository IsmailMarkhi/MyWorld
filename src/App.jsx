import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";

import Home from "./pages/Home";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";

export default function App() {
  return (
    <BrowserRouter>

      <div className="
        min-h-screen
        flex
        flex-col
        bg-gradient-to-b
        from-white
        via-indigo-50
        to-white
        text-slate-900
      ">

        <Navbar />

        <main className="flex-1 pt-16">

          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="*" element={<NotFound />} />
          </Routes>

        </main>

        <Footer />

      </div>

    </BrowserRouter>
  );
}