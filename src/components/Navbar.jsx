import { Link, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";

export default function Navbar() {
  const { pathname } = useLocation();
  const [open, setOpen] = useState(false);

  const links = [
    { to: "/", label: "Home" },
    { to: "/story", label: "Story" },
    { to: "/services", label: "Services" },
    { to: "/projects", label: "Projects" },
  ];

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  return (
    <header className="fixed top-0 inset-x-0 z-50 bg-white/80 backdrop-blur border-b border-zinc-200">
      <nav className="max-w-7xl mx-auto h-16 px-6 flex items-center justify-between">
        
        {/* Name */}
        <Link to="/" className="font-semibold text-zinc-900">
          Ismail Markhi
        </Link>

        {/* Desktop links */}
        <ul className="hidden md:flex items-center gap-8 text-sm">
          {links.map(link => (
            <li key={link.to}>
              <Link
                to={link.to}
                className={`transition ${
                  pathname === link.to
                    ? "text-zinc-900"
                    : "text-zinc-500 hover:text-zinc-900"
                }`}
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        {/* Desktop CTA */}
        <Link
          to="/contact"
          className="hidden md:inline-flex px-4 py-2 rounded-full bg-zinc-900 text-white text-sm hover:bg-zinc-800 transition"
        >
          Contact
        </Link>

        {/* Mobile toggle */}
        <button
          onClick={() => setOpen(v => !v)}
          className="md:hidden text-zinc-900 text-xl"
          aria-label="Toggle menu"
        >
          {open ? "✕" : "☰"}
        </button>
      </nav>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden bg-white border-t border-zinc-200">
          <ul className="flex flex-col items-center gap-6 py-6 text-sm">
            {links.map(link => (
              <li key={link.to}>
                <Link
                  to={link.to}
                  className={`${
                    pathname === link.to
                      ? "text-zinc-900"
                      : "text-zinc-500"
                  }`}
                >
                  {link.label}
                </Link>
              </li>
            ))}
            <li>
              <Link
                to="/contact"
                className="mt-2 px-6 py-3 rounded-full bg-zinc-900 text-white"
              >
                Contact
              </Link>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}
