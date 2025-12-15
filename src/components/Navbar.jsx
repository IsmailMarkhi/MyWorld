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

  // Close menu on route change
  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  return (
    <header
      className="
        fixed top-0 inset-x-0 z-50
        bg-black/70 backdrop-blur-xl
        border-b border-white/10
      "
    >
      <nav className="max-w-7xl mx-auto h-16 px-6 flex items-center justify-between">
        
        {/* Logo */}
        <Link
          to="/"
          className="font-semibold tracking-wide text-white focus:outline-none"
        >
          Ismail<span className="text-orange-500">.</span>
        </Link>

        {/* Desktop navigation */}
        <ul className="hidden md:flex items-center gap-8 text-sm">
          {links.map(link => {
            const isActive = pathname === link.to;

            return (
              <li key={link.to}>
                <Link
                  to={link.to}
                  aria-current={isActive ? "page" : undefined}
                  className={`
                    relative px-1 transition
                    ${isActive
                      ? "text-white"
                      : "text-zinc-400 hover:text-white"}
                  `}
                >
                  {link.label}

                  {/* Active indicator */}
                  {isActive && (
                    <span
                      aria-hidden="true"
                      className="
                        absolute -bottom-2 left-1/2 -translate-x-1/2
                        w-6 h-[2px] rounded-full
                        bg-gradient-to-r from-orange-500 to-fuchsia-500
                      "
                    />
                  )}
                </Link>
              </li>
            );
          })}
        </ul>

        {/* Desktop CTA */}
        <Link
          to="/contact"
          className="
            hidden md:inline-flex items-center justify-center
            text-sm font-medium
            px-5 py-2 rounded-full
            bg-gradient-to-r from-orange-500 to-fuchsia-500
            text-black
            hover:scale-105 transition
            focus:outline-none focus-visible:ring-2
            focus-visible:ring-orange-500
          "
        >
          Contact
        </Link>

        {/* Mobile toggle */}
        <button
          onClick={() => setOpen(v => !v)}
          aria-label="Toggle navigation menu"
          aria-expanded={open}
          className="
            md:hidden text-white text-xl
            focus:outline-none focus-visible:ring-2
            focus-visible:ring-orange-500
          "
        >
          {open ? "✕" : "☰"}
        </button>
      </nav>

      {/* Mobile menu */}
      <div
        className={`
          md:hidden overflow-hidden transition-all duration-300
          ${open ? "max-h-96 opacity-100" : "max-h-0 opacity-0"}
        `}
      >
        <ul className="
          bg-black/90 backdrop-blur-xl
          border-t border-white/10
          flex flex-col items-center gap-6
          py-6 text-sm
        ">
          {links.map(link => (
            <li key={link.to}>
              <Link
                to={link.to}
                className={`
                  transition
                  ${pathname === link.to
                    ? "text-white"
                    : "text-zinc-400 hover:text-white"}
                `}
              >
                {link.label}
              </Link>
            </li>
          ))}

          {/* Mobile CTA */}
          <li className="pt-2">
            <Link
              to="/contact"
              className="
                inline-flex items-center justify-center
                px-8 py-3 rounded-full
                bg-gradient-to-r from-orange-500 to-fuchsia-500
                text-black font-medium
              "
            >
              Contact
            </Link>
          </li>
        </ul>
      </div>
    </header>
  );
}
