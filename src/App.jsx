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
      <Navbar />

      <main
        className="
              min-h-screen
    pt-16

    bg-gradient-to-b
    from-white
    via-indigo-50
    to-white

    dark:from-zinc-900
    dark:via-zinc-900
    dark:to-black

    text-slate-900
    dark:text-slate-100
        "
      >{/*
          min-h-screen
          pt-16
          bg-gradient-to-b
          from-white
          via-indigo-50
          to-white
          text-slate-900
        <main
  className="
    min-h-screen
    pt-16

    bg-gradient-to-b
    from-white
    via-indigo-50
    to-white

    dark:from-zinc-900
    dark:via-zinc-900
    dark:to-black

    text-zinc-900
    dark:text-zinc-100
  "
>
      */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />

          {/* 404 fallback */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>

      <Footer />
    </BrowserRouter>
  );
}