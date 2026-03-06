import { Link, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import { Home, FolderKanban, Github, Menu, X } from "lucide-react";

const links = [
  { to: "/", label: "Home", icon: Home },
  { to: "/projects", label: "Projects", icon: FolderKanban },
];

export default function Navbar() {
  const { pathname } = useLocation();
  const [open, setOpen] = useState(false);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  return (
    <>
      {/* Navbar */}
      <header className="fixed top-0 inset-x-0 z-50 bg-white/80 backdrop-blur border-b border-zinc-200">
        <nav className="max-w-7xl mx-auto h-16 px-6 flex items-center justify-between">

          <Link to="/" className="font-semibold text-zinc-900">
            Ismail Markhi
          </Link>

          {/* Desktop */}
          <ul className="hidden md:flex items-center gap-8 text-sm">
            {links.map((link) => {
              const Icon = link.icon;
              return (
                <li key={link.to}>
                  <Link
                    to={link.to}
                    className={`flex items-center gap-2 transition ${
                      pathname === link.to
                        ? "text-zinc-900"
                        : "text-zinc-500 hover:text-zinc-900"
                    }`}
                  >
                    <Icon size={16} />
                    {link.label}
                  </Link>
                </li>
              );
            })}
          </ul>

          {/* Mobile button */}
          <button
            onClick={() => setOpen(true)}
            className="md:hidden"
          >
            <Menu size={22} />
          </button>

        </nav>
      </header>

      {/* Mobile overlay */}
      {open && (
        <div className="fixed inset-0 z-50 bg-black/40">

          {/* Sidebar */}
          <div className="fixed right-0 top-0 h-full w-72 bg-white shadow-xl p-6">

            <div className="flex items-center justify-between mb-10">
              <p className="font-semibold">Ismail Markhi</p>
              <button onClick={() => setOpen(false)}>
                <X size={22} />
              </button>
            </div>

            <ul className="space-y-6">

              {links.map((link) => {
                const Icon = link.icon;

                return (
                  <li key={link.to}>
                    <Link
                      to={link.to}
                      className="flex items-center gap-3 text-zinc-700 text-sm"
                    >
                      <Icon size={18} />
                      {link.label}
                    </Link>
                  </li>
                );
              })}

              <li>
                <a
                  href="https://github.com/IsmailMarkhi"
                  target="_blank"
                  className="flex items-center gap-3 text-zinc-700 text-sm"
                >
                  <Github size={18} />
                  GitHub
                </a>
              </li>

            </ul>

          </div>
        </div>
      )}
    </>
  );
}