import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import {
  Home,
  Briefcase,
  FolderKanban,
  Mail,
  Github,
  Menu,
  X,
  ArrowUpRight,
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const links = [
  { to: "/", label: "Home", icon: Home, end: true },
  { to: "/projects", label: "Projects", icon: FolderKanban },
  { to: "/services", label: "Services", icon: Briefcase },
  { to: "/contact", label: "Contact", icon: Mail },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const desktopLinkClass = ({ isActive }) =>
    `
      relative z-10 inline-flex items-center gap-2 rounded-xl px-4 py-2.5
      text-sm font-medium transition-all duration-300
      ${
        isActive
          ? "text-purple-700"
          : "text-zinc-600 hover:text-zinc-900"
      }
    `;

  const mobileLinkClass = ({ isActive }) =>
    `
      flex items-center gap-3 rounded-2xl px-4 py-3.5 text-sm font-medium
      transition-all duration-300
      ${
        isActive
          ? "border border-purple-200 bg-purple-50 text-purple-700 shadow-sm"
          : "text-zinc-700 hover:bg-zinc-50 hover:text-zinc-900"
      }
    `;

  return (
    <>
      <motion.header
        initial={{ y: -28, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        className={`
          fixed left-1/2 top-4 z-50 w-[94%] max-w-6xl -translate-x-1/2
          rounded-[26px] border transition-all duration-500
          ${
            scrolled
              ? "border-zinc-200/70 bg-white/76 shadow-[0_16px_50px_rgba(0,0,0,0.09)] backdrop-blur-2xl"
              : "border-zinc-200/60 bg-white/88 shadow-[0_10px_32px_rgba(0,0,0,0.05)] backdrop-blur-xl"
          }
        `}
      >
        <nav className="flex h-[76px] items-center justify-between px-4 sm:px-6">
          {/* Brand */}
          <NavLink
            to="/"
            end
            className="group flex min-w-0 items-center gap-3 rounded-2xl px-2 py-2 transition"
          >
            <div
              className="
                relative flex h-11 w-11 shrink-0 items-center justify-center overflow-hidden
                rounded-2xl border border-purple-200/70
                bg-gradient-to-br from-purple-100 via-white to-fuchsia-100
                shadow-[0_6px_18px_rgba(147,51,234,0.08)]
                transition duration-300 group-hover:scale-[1.03]
              "
            >
              <img
                src="/preview.png"
                alt="Ismail Markhi logo"
                className="h-full w-full object-cover"
              />
            </div>

            <div className="min-w-0 leading-none">
              <span className="block truncate text-[0.98rem] font-semibold tracking-tight text-zinc-900">
                Ismail <span className="text-purple-600">Markhi</span>
              </span>
              <span className="mt-1 block truncate text-[11px] text-zinc-500">
                Web Developer
              </span>
            </div>
          </NavLink>

          {/* Desktop Navigation */}
          <div className="hidden items-center gap-3 md:flex">
            <ul className="flex items-center gap-1 rounded-2xl border border-zinc-200/70 bg-white/72 p-1.5 backdrop-blur-xl">
              {links.map((link) => {
                const Icon = link.icon;

                return (
                  <li key={link.to} className="relative">
                    <NavLink
                      to={link.to}
                      end={link.end}
                      className={desktopLinkClass}
                    >
                      {({ isActive }) => (
                        <>
                          {isActive && (
                            <motion.span
                              layoutId="nav-active-pill"
                              className="absolute inset-0 -z-10 rounded-xl border border-purple-200/70 bg-purple-50 shadow-sm"
                              transition={{
                                type: "spring",
                                stiffness: 380,
                                damping: 32,
                              }}
                            />
                          )}
                          <Icon size={16} />
                          {link.label}
                        </>
                      )}
                    </NavLink>
                  </li>
                );
              })}
            </ul>

            <a
              href="https://github.com/IsmailMarkhi"
              target="_blank"
              rel="noopener noreferrer"
              className="
                inline-flex items-center gap-2 rounded-2xl border border-zinc-200/70
                bg-white/88 px-4 py-2.5 text-sm font-medium text-zinc-700
                shadow-sm transition-all duration-300
                hover:-translate-y-[1px] hover:border-purple-300 hover:text-purple-700
                hover:shadow-[0_10px_25px_rgba(0,0,0,0.06)]
              "
            >
              <Github size={16} />
              GitHub
              <ArrowUpRight size={15} />
            </a>
          </div>

          {/* Mobile Button */}
          <button
            aria-label="Open menu"
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

      {/* Mobile Menu */}
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
              className="fixed inset-0 z-40 bg-zinc-950/30 backdrop-blur-sm"
            />

            <motion.aside
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
              className="
                fixed right-0 top-0 z-50 h-full w-[88%] max-w-sm
                border-l border-zinc-200/70 bg-white/95 px-6 py-6
                shadow-[0_10px_50px_rgba(0,0,0,0.14)] backdrop-blur-2xl
              "
            >
              <div className="mb-8 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div
                    className="
                      flex h-11 w-11 items-center justify-center overflow-hidden rounded-2xl
                      border border-purple-200/70 bg-gradient-to-br from-purple-100 via-white to-fuchsia-100
                    "
                  >
                    <img
                      src="/preview.png"
                      alt="Ismail Markhi logo"
                      className="h-full w-full object-cover"
                    />
                  </div>

                  <div>
                    <h3 className="text-base font-semibold text-zinc-900">
                      Ismail <span className="text-purple-600">Markhi</span>
                    </h3>
                    <p className="mt-1 text-xs text-zinc-500">Web Developer</p>
                  </div>
                </div>

                <button
                  aria-label="Close menu"
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

              <div className="mb-6 rounded-2xl border border-purple-200/60 bg-gradient-to-r from-purple-50 via-white to-fuchsia-50 p-4">
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-purple-700">
                  Navigation
                </p>
                <p className="mt-2 text-sm leading-6 text-zinc-600">
                  Explore my services, projects, and contact page with a cleaner route-based experience.
                </p>
              </div>

              <ul className="space-y-2">
                {links.map((link, index) => {
                  const Icon = link.icon;

                  return (
                    <motion.li
                      key={link.to}
                      initial={{ opacity: 0, x: 18 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.05 + index * 0.05 }}
                    >
                      <NavLink
                        to={link.to}
                        end={link.end}
                        onClick={() => setOpen(false)}
                        className={mobileLinkClass}
                      >
                        <Icon size={18} />
                        {link.label}
                      </NavLink>
                    </motion.li>
                  );
                })}
              </ul>

              <motion.a
                initial={{ opacity: 0, x: 18 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.3 }}
                href="https://github.com/IsmailMarkhi"
                target="_blank"
                rel="noopener noreferrer"
                className="
                  mt-8 inline-flex w-full items-center justify-center gap-2 rounded-2xl
                  border border-zinc-200/70 bg-white px-4 py-3.5 text-sm font-medium
                  text-zinc-700 shadow-sm transition-all duration-300
                  hover:border-purple-300 hover:text-purple-700
                "
              >
                <Github size={18} />
                Visit GitHub
                <ArrowUpRight size={15} />
              </motion.a>
            </motion.aside>
          </>
        )}
      </AnimatePresence>
    </>
  );
}