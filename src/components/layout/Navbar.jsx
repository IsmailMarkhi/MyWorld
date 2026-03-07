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
      <header className="fixed top-0 inset-x-0 z-50 backdrop-blur-lg bg-white/70 border-b border-zinc-200">

        <nav className="max-w-7xl mx-auto h-16 px-6 flex items-center justify-between">

          {/* Logo */}
          <Link
            to="/"
            className="font-semibold text-zinc-900 tracking-tight hover:text-purple-600 transition"
          >
            Ismail <span className="text-purple-600">Markhi</span>
          </Link>

          {/* Desktop */}
          <ul className="hidden md:flex items-center gap-8 text-sm">

            {links.map((link) => {
              const Icon = link.icon;
              const active = pathname === link.to;

              return (
                <li key={link.to}>
                  <Link
                    to={link.to}
                    className={`flex items-center gap-2 px-2 py-1 rounded-md transition ${
                      active
                        ? "text-purple-600 font-medium"
                        : "text-zinc-600 hover:text-purple-600"
                    }`}
                  >
                    <Icon size={16} />
                    {link.label}
                  </Link>
                </li>
              );
            })}

            {/* GitHub */}
            <a
              href="https://github.com/IsmailMarkhi"
              target="_blank"
              className="
              flex items-center gap-2
              text-zinc-600
              hover:text-purple-600
              transition
              "
            >
              <Github size={16} />
              GitHub
            </a>

          </ul>

          {/* Mobile button */}
          <button
            onClick={() => setOpen(true)}
            className="md:hidden text-zinc-700 hover:text-purple-600 transition"
          >
            <Menu size={24} />
          </button>

        </nav>

      </header>

      {/* Mobile overlay */}
      {open && (
        <div className="fixed inset-0 z-50 bg-black/40 backdrop-blur-sm">

          {/* Sidebar */}
          <div className="fixed right-0 top-0 h-full w-72 bg-white shadow-xl p-6 animate-slide-in">

            <div className="flex items-center justify-between mb-10">

              <p className="font-semibold text-zinc-900">
                Ismail <span className="text-purple-600">Markhi</span>
              </p>

              <button
                onClick={() => setOpen(false)}
                className="text-zinc-600 hover:text-purple-600 transition"
              >
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
                      className="
                      flex items-center gap-3
                      text-zinc-700
                      hover:text-purple-600
                      transition
                      "
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
                  className="
                  flex items-center gap-3
                  text-zinc-700
                  hover:text-purple-600
                  transition
                  "
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