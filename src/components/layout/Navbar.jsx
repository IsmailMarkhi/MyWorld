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
      {/* Floating Navbar */}
      <header
        className="
        fixed
        top-5
        left-1/2
        -translate-x-1/2
        w-[92%]
        max-w-6xl
        z-50
        backdrop-blur-xl
        bg-white/80
        border border-zinc-200
        shadow-sm
        rounded-2xl
      "
      >

        <nav className="h-16 px-6 flex items-center justify-between">

          {/* Logo */}
          <Link
            to="/"
            className="flex items-center gap-3 group"
          >
            <img
              src="/preview.png"
              alt="logo"
              className="w-9 h-9 rounded-lg"
            />

            <span className="font-semibold text-zinc-900 tracking-tight group-hover:text-purple-600 transition">
              Ismail <span className="text-purple-600">Markhi</span>
            </span>
          </Link>


          {/* Desktop Links */}
          <ul className="hidden md:flex items-center gap-8 text-sm">

            {links.map((link) => {

              const Icon = link.icon;
              const active = pathname === link.to;

              return (
                <li key={link.to} className="relative group">

                  <Link
                    to={link.to}
                    className={`flex items-center gap-2 transition ${
                      active
                        ? "text-purple-600"
                        : "text-zinc-600 hover:text-purple-600"
                    }`}
                  >

                    <Icon size={16} />
                    {link.label}

                  </Link>

                  {/* underline */}
                  <span
                    className={`
                    absolute
                    left-0
                    -bottom-2
                    h-[2px]
                    w-full
                    bg-purple-500
                    origin-left
                    transition
                    ${
                      active
                        ? "scale-x-100"
                        : "scale-x-0 group-hover:scale-x-100"
                    }
                  `}
                  />

                </li>
              );
            })}

            {/* Github */}
            <a
              href="https://github.com/IsmailMarkhi"
              target="_blank"
              className="
              flex items-center gap-2
              text-zinc-600
              hover:text-purple-600
              hover:scale-105
              transition
              "
            >
              <Github size={16} />
              GitHub
            </a>

          </ul>


          {/* Mobile Button */}
          <button
            onClick={() => setOpen(true)}
            className="md:hidden text-zinc-700 hover:text-purple-600 transition"
          >
            <Menu size={24} />
          </button>

        </nav>

      </header>


      {/* Overlay */}
      <div
        className={`
        fixed inset-0 z-40 bg-black/40 backdrop-blur-sm
        transition-opacity duration-300
        ${open ? "opacity-100 visible" : "opacity-0 invisible"}
      `}
        onClick={() => setOpen(false)}
      />


      {/* Mobile Sidebar */}
      <div
        className={`
        fixed
        right-0
        top-0
        z-50
        h-full
        w-72
        bg-white
        shadow-xl
        p-6
        transform
        transition-transform
        duration-300
        ${open ? "translate-x-0" : "translate-x-full"}
      `}
      >

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
            const active = pathname === link.to;

            return (
              <li key={link.to}>

                <Link
                  to={link.to}
                  className={`flex items-center gap-3 text-sm transition ${
                    active
                      ? "text-purple-600 font-medium"
                      : "text-zinc-700 hover:text-purple-600"
                  }`}
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
              className="flex items-center gap-3 text-zinc-700 hover:text-purple-600 transition"
            >
              <Github size={18} />
              GitHub
            </a>

          </li>

        </ul>

      </div>
    </>
  );
}