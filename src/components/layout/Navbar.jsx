import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import {
  Home,
  Briefcase,
  Cpu,
  FolderKanban,
  Mail,
  Github,
  Menu,
  X,
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const links = [
  { type: "anchor", to: "/#home", label: "Home", icon: Home },
  { type: "anchor", to: "/#services", label: "Services", icon: Briefcase },
  { type: "anchor", to: "/#tech", label: "Tech", icon: Cpu },
  { type: "anchor", to: "/#projects", label: "Projects", icon: FolderKanban },
  { type: "anchor", to: "/#contact", label: "Contact", icon: Mail },
];

export default function Navbar() {
  const location = useLocation();

  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("/#home");
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  useEffect(() => {
    const updateScrolled = () => {
      setScrolled(window.scrollY > 24);
    };

    updateScrolled();
    window.addEventListener("scroll", updateScrolled);

    return () => window.removeEventListener("scroll", updateScrolled);
  }, []);

  useEffect(() => {
    if (location.pathname !== "/") {
      setActive(location.pathname);
      return;
    }

    const hash = window.location.hash;
    setActive(hash ? `/${hash}` : "/#home");

    const handleScrollSpy = () => {
      setScrolled(window.scrollY > 24);

      for (const link of links) {
        if (link.type !== "anchor") continue;

        const id = link.to.replace("/#", "#");
        const section = document.querySelector(id);

        if (!section) continue;

        const rect = section.getBoundingClientRect();

        if (rect.top <= 140 && rect.bottom >= 140) {
          setActive(link.to);
          break;
        }
      }
    };

    const handleHashChange = () => {
      const nextHash = window.location.hash || "#home";
      setActive(`/${nextHash}`);
    };

    handleScrollSpy();
    window.addEventListener("scroll", handleScrollSpy);
    window.addEventListener("hashchange", handleHashChange);

    return () => {
      window.removeEventListener("scroll", handleScrollSpy);
      window.removeEventListener("hashchange", handleHashChange);
    };
  }, [location.pathname]);

  const renderNavLink = (link, mobile = false, index = 0) => {
    const Icon = link.icon;

    const isActive =
      link.type === "route"
        ? location.pathname === link.to
        : location.pathname === "/" && active === link.to;

    const baseDesktop = `
      relative z-10 flex items-center gap-2 rounded-xl px-4 py-2.5
      text-sm font-medium transition-all duration-300
      ${isActive ? "text-purple-700" : "text-zinc-600 hover:text-zinc-900"}
    `;

    const baseMobile = `
      flex items-center gap-3 rounded-2xl px-4 py-3 text-sm font-medium
      transition-all duration-300
      ${
        isActive
          ? "border border-purple-200 bg-purple-50 text-purple-700"
          : "text-zinc-700 hover:bg-zinc-50 hover:text-zinc-900"
      }
    `;

    const content = (
      <>
        {isActive && !mobile && (
          <motion.span
            layoutId="nav-active-pill"
            className="absolute inset-0 -z-10 rounded-xl border border-purple-200/70 bg-purple-50 shadow-sm"
            transition={{ type: "spring", stiffness: 380, damping: 32 }}
          />
        )}
        <Icon size={mobile ? 18 : 16} />
        {link.label}
      </>
    );

    if (link.type === "route") {
      return mobile ? (
        <motion.li
          key={link.to}
          initial={{ opacity: 0, x: 18 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.05 + index * 0.05 }}
        >
          <Link
            to={link.to}
            onClick={() => setOpen(false)}
            className={baseMobile}
          >
            {content}
          </Link>
        </motion.li>
      ) : (
        <li key={link.to} className="relative">
          <Link to={link.to} className={baseDesktop}>
            {content}
          </Link>
        </li>
      );
    }

    return mobile ? (
      <motion.li
        key={link.to}
        initial={{ opacity: 0, x: 18 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.05 + index * 0.05 }}
      >
        <a
          href={link.to}
          onClick={() => setOpen(false)}
          className={baseMobile}
        >
          <Icon size={18} />
          {link.label}
        </a>
      </motion.li>
    ) : (
      <li key={link.to} className="relative">
        <a href={link.to} className={baseDesktop}>
          {content}
        </a>
      </li>
    );
  };

  return (
    <>
      <motion.header
        initial={{ y: -28, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        className={`
          fixed left-1/2 top-4 z-50 w-[94%] max-w-6xl -translate-x-1/2
          rounded-[24px] border transition-all duration-500
          ${
            scrolled
              ? "border-zinc-200/70 bg-white/78 shadow-[0_10px_40px_rgba(0,0,0,0.08)] backdrop-blur-2xl"
              : "border-zinc-200/60 bg-white/88 shadow-[0_8px_30px_rgba(0,0,0,0.05)] backdrop-blur-xl"
          }
        `}
      >
        <nav className="flex h-[72px] items-center justify-between px-4 sm:px-6">
          <a
            href="/#home"
            className="group flex items-center gap-3 rounded-2xl px-2 py-2 transition"
          >
            <div className="relative flex h-11 w-11 items-center justify-center overflow-hidden rounded-2xl border border-purple-200/70 bg-gradient-to-br from-purple-100 via-white to-fuchsia-100 shadow-sm">
              <img
                src="/preview.png"
                alt="Ismail Markhi logo"
                className="h-full w-full object-cover"
              />
            </div>

            <div className="flex flex-col leading-none">
              <span className="text-[0.95rem] font-semibold tracking-tight text-zinc-900">
                Ismail <span className="text-purple-600">Markhi</span>
              </span>
              <span className="text-[11px] text-zinc-500">Web Developer</span>
            </div>
          </a>

          <div className="hidden items-center gap-3 md:flex">
            <ul className="flex items-center gap-1 rounded-2xl border border-zinc-200/70 bg-white/70 p-1.5 backdrop-blur-xl">
              {links.map((link) => renderNavLink(link))}
            </ul>

            <a
              href="https://github.com/IsmailMarkhi"
              target="_blank"
              rel="noopener noreferrer"
              className="
                inline-flex items-center gap-2 rounded-2xl border border-zinc-200/70
                bg-white/85 px-4 py-2.5 text-sm font-medium text-zinc-700
                shadow-sm transition-all duration-300
                hover:-translate-y-[1px] hover:border-purple-300 hover:text-purple-700
              "
            >
              <Github size={16} />
              GitHub
            </a>
          </div>

          <button
            aria-label="Open Menu"
            onClick={() => setOpen(true)}
            className="
              inline-flex h-11 w-11 items-center justify-center rounded-2xl
              border border-zinc-200/70 bg-white text-zinc-700 shadow-sm
              transition duration-300 hover:border-purple-300 hover:text-purple-700 md:hidden
            "
          >
            <Menu size={20} />
          </button>
        </nav>
      </motion.header>

      <AnimatePresence>
        {open && (
          <>
            <motion.button
              aria-label="Close menu overlay"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.25 }}
              onClick={() => setOpen(false)}
              className="fixed inset-0 z-40 bg-zinc-950/25 backdrop-blur-sm"
            />

            <motion.aside
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
              className="
                fixed right-0 top-0 z-50 h-full w-[86%] max-w-sm
                border-l border-zinc-200/70 bg-white/95 px-6 py-6
                shadow-[0_10px_50px_rgba(0,0,0,0.12)] backdrop-blur-2xl
              "
            >
              <div className="mb-10 flex items-center justify-between">
                <div>
                  <h3 className="text-base font-semibold text-zinc-900">
                    Ismail <span className="text-purple-600">Markhi</span>
                  </h3>
                  <p className="mt-1 text-xs text-zinc-500">Web Developer</p>
                </div>

                <button
                  aria-label="Close Menu"
                  onClick={() => setOpen(false)}
                  className="
                    inline-flex h-11 w-11 items-center justify-center rounded-2xl
                    border border-zinc-200/70 bg-white text-zinc-700 shadow-sm
                    transition duration-300 hover:border-purple-300 hover:text-purple-700
                  "
                >
                  <X size={20} />
                </button>
              </div>

              <ul className="space-y-2">
                {links.map((link, index) => renderNavLink(link, true, index))}
              </ul>

              <motion.a
                initial={{ opacity: 0, x: 18 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.35 }}
                href="https://github.com/IsmailMarkhi"
                target="_blank"
                rel="noopener noreferrer"
                className="
                  mt-8 inline-flex w-full items-center justify-center gap-2 rounded-2xl
                  border border-zinc-200/70 bg-white px-4 py-3 text-sm font-medium
                  text-zinc-700 shadow-sm transition-all duration-300
                  hover:border-purple-300 hover:text-purple-700
                "
              >
                <Github size={18} />
                Visit GitHub
              </motion.a>
            </motion.aside>
          </>
        )}
      </AnimatePresence>
    </>
  );
}