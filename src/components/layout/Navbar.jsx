import { useState, useEffect } from "react";
import {
  Home,
  Briefcase,
  Cpu,
  FolderKanban,
  Mail,
  Github,
  Menu,
  X
} from "lucide-react";

const links = [
  { href: "#home", label: "Home", icon: Home },
  { href: "#services", label: "Services", icon: Briefcase },
  { href: "#tech", label: "Tech", icon: Cpu },
  { href: "#projects", label: "Projects", icon: FolderKanban },
  { href: "#contact", label: "Contact", icon: Mail }
];

export default function Navbar() {

  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("#home");

  /* Scroll Spy */
  useEffect(() => {

    const handleScroll = () => {

      links.forEach((link) => {

        const section = document.querySelector(link.href);

        if (!section) return;

        const rect = section.getBoundingClientRect();

        if (rect.top <= 120 && rect.bottom >= 120) {
          setActive(link.href);
        }

      });

    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);

  }, []);

  return (
    <>
      {/* Navbar */}
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
          <a href="#home" className="flex items-center gap-3">

            <img
              src="/preview.png"
              alt="logo"
              className="w-9 h-9 rounded-lg"
            />

            <span className="font-semibold text-zinc-900 tracking-tight">
              Ismail <span className="text-purple-600">Markhi</span>
            </span>

          </a>


          {/* Desktop Links */}
          <ul className="hidden md:flex items-center gap-8 text-sm">

            {links.map((link) => {

              const Icon = link.icon;
              const isActive = active === link.href;

              return (
                <li key={link.href}>

                  <a
                    href={link.href}
                    className={`
                    flex items-center gap-2 transition
                    ${isActive
                      ? "text-purple-600 font-medium"
                      : "text-zinc-600 hover:text-purple-600"}
                  `}
                  >

                    <Icon size={16} />

                    {link.label}

                  </a>

                </li>
              );

            })}


            {/* Github */}
            <a
              href="https://github.com/IsmailMarkhi"
              target="_blank"
              rel="noopener noreferrer"
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


          {/* Mobile Button */}
          <button
            aria-label="Open Menu"
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
        fixed inset-0 z-40
        bg-black/40 backdrop-blur-sm
        transition-opacity duration-300
        ${open ? "opacity-100 visible" : "opacity-0 invisible"}
      `}
        onClick={() => setOpen(false)}
      />


      {/* Mobile Sidebar */}
      <aside
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

          <span className="font-semibold text-zinc-900">
            Ismail <span className="text-purple-600">Markhi</span>
          </span>

          <button
            aria-label="Close Menu"
            onClick={() => setOpen(false)}
            className="text-zinc-600 hover:text-purple-600 transition"
          >
            <X size={22} />
          </button>

        </div>


        {/* Mobile Links */}
        <ul className="space-y-6">

          {links.map((link) => {

            const Icon = link.icon;
            const isActive = active === link.href;

            return (

              <li key={link.href}>

                <a
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className={`
                  flex items-center gap-3 text-sm transition
                  ${isActive
                    ? "text-purple-600 font-medium"
                    : "text-zinc-700 hover:text-purple-600"}
                `}
                >

                  <Icon size={18} />

                  {link.label}

                </a>

              </li>

            );

          })}


          <li>

            <a
              href="https://github.com/IsmailMarkhi"
              target="_blank"
              rel="noopener noreferrer"
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

      </aside>

    </>
  );
}