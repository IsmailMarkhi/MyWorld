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
  Sparkles,
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const links = [
  { to: "/", label: "Home", icon: Home, end: true },
  { to: "/projects", label: "Projects", icon: FolderKanban },
  { to: "/services", label: "Services", icon: Briefcase },
  { to: "/contact", label: "Contact", icon: Mail },
];

const fadeDown = {
  hidden: { opacity: 0, y: -24 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.65,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";

    const onKeyDown = (event) => {
      if (event.key === "Escape") setOpen(false);
    };

    window.addEventListener("keydown", onKeyDown);

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [open]);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const desktopLinkClass = ({ isActive }) =>
    `
      relative z-10 inline-flex items-center gap-2 rounded-2xl px-4 py-2.5
      text-sm font-bold transition-all duration-300
      ${
        isActive
          ? "text-purple-700"
          : "text-zinc-600 hover:text-zinc-950"
      }
    `;

  const mobileLinkClass = ({ isActive }) =>
    `
      group flex items-center gap-3 rounded-2xl border px-4 py-3.5
      text-sm font-bold transition-all duration-300
      ${
        isActive
          ? "border-zinc-950 bg-zinc-950 text-white shadow-sm"
          : "border-zinc-200 bg-white/80 text-zinc-700 hover:border-purple-300 hover:text-purple-700"
      }
    `;

  return (
    <>
      <motion.header
        variants={fadeDown}
        initial="hidden"
        animate="show"
        className="
          fixed left-1/2 top-4 z-50 w-[94%] max-w-6xl -translate-x-1/2
        "
      >
        <div
          className={`
            relative overflow-hidden rounded-[28px] border p-[1px]
            transition-all duration-500
            ${
              scrolled
                ? "border-zinc-200/80 bg-white/75 shadow-[0_20px_70px_rgba(24,24,27,0.10)] backdrop-blur-2xl"
                : "border-white/70 bg-white/65 shadow-[0_12px_40px_rgba(24,24,27,0.07)] backdrop-blur-xl"
            }
          `}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-purple-50/80 via-white/80 to-fuchsia-50/80" />
          <div className="absolute inset-x-8 top-0 h-px bg-gradient-to-r from-transparent via-purple-400 to-transparent opacity-80" />

          <nav
            aria-label="Primary navigation"
            className="relative z-10 flex h-[76px] items-center justify-between rounded-[27px] border border-zinc-200/60 bg-white/80 px-3 backdrop-blur-xl sm:px-5"
          >
            {/* Brand */}
            <NavLink
              to="/"
              end
              onClick={() => setOpen(false)}
              className="group flex min-w-0 items-center gap-3 rounded-2xl px-2 py-2 transition"
              aria-label="Go to homepage"
            >
              <div
                className="
                  relative flex h-11 w-11 shrink-0 items-center justify-center overflow-hidden
                  rounded-2xl border border-purple-100
                  bg-gradient-to-br from-purple-100 via-white to-fuchsia-100
                  shadow-[0_10px_28px_rgba(88,28,135,0.12)]
                  transition duration-300 group-hover:scale-[1.04]
                "
              >
                <img
                  src="/preview.png"
                  alt="Ismail Markhi logo"
                  className="h-full w-full object-cover"
                />
              </div>

              <div className="min-w-0 leading-none">
                <span className="block truncate text-[0.98rem] font-black tracking-tight text-zinc-950">
                  Ismail <span className="text-purple-700">Markhi</span>
                </span>

                <span className="mt-1 block truncate text-[11px] font-semibold text-zinc-500">
                  Full-Stack Developer
                </span>
              </div>
            </NavLink>

            {/* Desktop Navigation */}
            <div className="hidden items-center gap-3 md:flex">
              <ul className="flex items-center gap-1 rounded-2xl border border-zinc-200/70 bg-white/80 p-1.5 shadow-sm backdrop-blur-xl">
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
                                className="absolute inset-0 -z-10 rounded-2xl border border-purple-200 bg-purple-50 shadow-sm"
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
                  inline-flex items-center gap-2 rounded-2xl border border-zinc-950
                  bg-zinc-950 px-4 py-3 text-sm font-bold text-white
                  shadow-sm transition-all duration-300
                  hover:-translate-y-1 hover:bg-purple-700
                "
              >
                <Github size={16} />
                GitHub
                <ArrowUpRight size={15} />
              </a>
            </div>

            {/* Mobile Button */}
            <button
              type="button"
              aria-label="Open menu"
              aria-expanded={open}
              onClick={() => setOpen(true)}
              className="
                inline-flex h-11 w-11 items-center justify-center rounded-2xl
                border border-zinc-200 bg-white text-zinc-700 shadow-sm
                transition duration-300 hover:border-purple-300 hover:text-purple-700 md:hidden
              "
            >
              <Menu size={20} />
            </button>
          </nav>
        </div>
      </motion.header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {open && (
          <>
            <motion.button
              type="button"
              aria-label="Close menu overlay"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.25 }}
              onClick={() => setOpen(false)}
              className="fixed inset-0 z-40 bg-zinc-950/35 backdrop-blur-sm md:hidden"
            />

            <motion.aside
              role="dialog"
              aria-modal="true"
              aria-label="Mobile navigation"
              initial={{ x: "100%", opacity: 0.8 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: "100%", opacity: 0.8 }}
              transition={{ duration: 0.38, ease: [0.22, 1, 0.36, 1] }}
              className="
                fixed right-0 top-0 z-50 h-full w-[90%] max-w-sm
                overflow-hidden border-l border-zinc-200/80 bg-[#fbf7ff]
                shadow-[0_20px_80px_rgba(24,24,27,0.18)] md:hidden
              "
            >
              {/* Mobile background */}
              <div className="pointer-events-none absolute inset-0" aria-hidden="true">
                <div className="absolute inset-0 bg-[linear-gradient(rgba(88,28,135,0.045)_1px,transparent_1px),linear-gradient(90deg,rgba(88,28,135,0.045)_1px,transparent_1px)] bg-[size:46px_46px]" />
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(168,85,247,0.17),transparent_42%)]" />
                <div className="absolute right-0 top-10 h-64 w-64 rounded-full bg-purple-200/40 blur-3xl" />
              </div>

              <div className="relative z-10 flex h-full flex-col p-6">
                <div className="mb-8 flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div
                      className="
                        flex h-11 w-11 items-center justify-center overflow-hidden rounded-2xl
                        border border-purple-100 bg-gradient-to-br from-purple-100 via-white to-fuchsia-100
                        shadow-[0_10px_28px_rgba(88,28,135,0.12)]
                      "
                    >
                      <img
                        src="/preview.png"
                        alt="Ismail Markhi logo"
                        className="h-full w-full object-cover"
                      />
                    </div>

                    <div>
                      <h3 className="text-base font-black text-zinc-950">
                        Ismail <span className="text-purple-700">Markhi</span>
                      </h3>

                      <p className="mt-1 text-xs font-semibold text-zinc-500">
                        Junior Full-Stack Developer
                      </p>
                    </div>
                  </div>

                  <button
                    type="button"
                    aria-label="Close menu"
                    onClick={() => setOpen(false)}
                    className="
                      inline-flex h-11 w-11 items-center justify-center rounded-2xl
                      border border-zinc-200 bg-white text-zinc-700 shadow-sm
                      transition duration-300 hover:border-purple-300 hover:text-purple-700
                    "
                  >
                    <X size={20} />
                  </button>
                </div>

                <div className="relative mb-7 overflow-hidden rounded-[28px] border border-white/70 bg-white/70 p-[1px] shadow-[0_16px_50px_rgba(24,24,27,0.08)] backdrop-blur-xl">
                  <div className="absolute inset-0 bg-gradient-to-br from-purple-100 via-white to-fuchsia-100 opacity-90" />

                  <div className="relative z-10 rounded-[27px] border border-zinc-200/70 bg-white/85 p-5 backdrop-blur-xl">
                    <p className="inline-flex items-center gap-2 rounded-full border border-purple-200 bg-white/90 px-3 py-1 text-[11px] font-black uppercase tracking-[0.18em] text-purple-700">
                      <Sparkles size={12} />
                      Navigation
                    </p>

                    <p className="mt-3 text-sm leading-6 text-zinc-600">
                      Explore my projects, services, and contact page through a
                      clean route-based portfolio experience.
                    </p>
                  </div>
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
                          <ArrowUpRight
                            size={15}
                            className="ml-auto opacity-60 transition group-hover:translate-x-1 group-hover:opacity-100"
                          />
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
                    border border-zinc-950 bg-zinc-950 px-4 py-3.5 text-sm font-bold
                    text-white shadow-sm transition-all duration-300 hover:bg-purple-700
                  "
                >
                  <Github size={18} />
                  Visit GitHub
                  <ArrowUpRight size={15} />
                </motion.a>

                <p className="mt-auto pt-8 text-center text-xs font-semibold text-zinc-500">
                  React + Tailwind portfolio
                </p>
              </div>
            </motion.aside>
          </>
        )}
      </AnimatePresence>
    </>
  );
}