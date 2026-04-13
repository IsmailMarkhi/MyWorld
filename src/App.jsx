import {
  BrowserRouter,
  Routes,
  Route,
  useLocation,
  matchRoutes,
} from "react-router-dom";

import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";

import Home from "./pages/Home";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";

const appRoutes = [
  { path: "/" },
  { path: "/projects" },
  { path: "/contact" },
];

function AppLayout() {
  const location = useLocation();

  const matchedRoute = matchRoutes(appRoutes, location);
  const isNotFoundPage = !matchedRoute;

  return (
    <div className="min-h-screen bg-black text-white">
      {!isNotFoundPage && <Navbar />}

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<NotFound />} />
      </Routes>

      {!isNotFoundPage && <Footer />}
    </div>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <AppLayout />
    </BrowserRouter>
  );
}