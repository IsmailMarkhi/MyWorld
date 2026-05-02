import { lazy, Suspense, memo } from "react";
import { Routes, Route, useLocation, matchRoutes } from "react-router-dom";

import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";

const Home = lazy(() => import("./pages/Home"));
const Projects = lazy(() => import("./pages/Projects"));
const Services = lazy(() => import("./pages/Services"));
const Contact = lazy(() => import("./pages/Contact"));
const NotFound = lazy(() => import("./pages/NotFound"));

const appRoutes = [
  { path: "/" },
  { path: "/services" },
  { path: "/projects" },
  { path: "/contact" },
];

function PageLoader() {
  return (
    <div className="relative flex min-h-screen items-center justify-center overflow-hidden bg-[#fbf7ff] px-4">
      <div className="pointer-events-none absolute inset-0" aria-hidden="true">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(88,28,135,0.045)_1px,transparent_1px),linear-gradient(90deg,rgba(88,28,135,0.045)_1px,transparent_1px)] bg-[size:46px_46px]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_12%,rgba(168,85,247,0.13),transparent_36%)]" />
      </div>

      <div className="relative z-10 flex flex-col items-center gap-4">
        <div className="h-11 w-11 animate-spin rounded-full border-4 border-purple-200 border-t-purple-700" />
        <p className="text-sm font-semibold text-zinc-600">Loading page...</p>
      </div>
    </div>
  );
}

const AppLayout = memo(function AppLayout() {
  const location = useLocation();

  const matchedRoute = matchRoutes(appRoutes, location);
  const isNotFoundPage = !matchedRoute;

  return (
    <div className="min-h-screen bg-[#fbf7ff] text-zinc-950">
      {!isNotFoundPage && <Navbar />}

      <Suspense fallback={<PageLoader />}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<Services />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Suspense>

      {!isNotFoundPage && <Footer />}
    </div>
  );
});

export default function App() {
  return <AppLayout />;
}