import { Link } from "react-router-dom";
import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";
import { SiFiverr } from "react-icons/si";
import { ArrowUpRight, Sparkles } from "lucide-react";

const socialLinks = [
  {
    name: "GitHub",
    href: "https://github.com/IsmailMarkhi",
    icon: FaGithub,
  },
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/in/ismail-markhi-a67033317",
    icon: FaLinkedin,
  },
  {
    name: "Fiverr",
    href: "https://www.fiverr.com/ismail1markhi",
    icon: SiFiverr,
  },
  {
    name: "Instagram",
    href: "https://www.instagram.com/ismailmarkhi",
    icon: FaInstagram,
  },
];

const navLinks = [
  { label: "Home", to: "/" },
  { label: "Projects", to: "/projects" },
  { label: "Services", to: "/services" },
  { label: "Contact", to: "/contact" },
];

export default function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-zinc-800/80 bg-black">
      {/* Neon atmosphere */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-[8%] top-12 h-40 w-40 rounded-full bg-purple-700/20 blur-3xl" />
        <div className="absolute right-[10%] top-10 h-44 w-44 rounded-full bg-fuchsia-700/20 blur-3xl" />
        <div className="absolute bottom-0 left-1/2 h-32 w-[40%] -translate-x-1/2 rounded-full bg-cyan-500/10 blur-3xl" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(168,85,247,0.08),transparent_30%)]" />
      </div>

      <div className="relative mx-auto max-w-6xl px-5 py-14 sm:px-6 lg:px-8">
        {/* Top CTA strip */}
        <div
          className="
            mb-10 rounded-[28px] border border-purple-500/20
            bg-gradient-to-r from-zinc-900 via-zinc-950 to-zinc-900
            p-6 shadow-[0_0_40px_rgba(168,85,247,0.08)]
            sm:p-7
          "
        >
          <div className="flex flex-col gap-5 lg:flex-row lg:items-center lg:justify-between">
            <div className="max-w-2xl">
              <span className="inline-flex items-center gap-2 rounded-full border border-purple-500/20 bg-purple-500/10 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.2em] text-purple-300">
                <Sparkles size={14} />
                Open for collaboration
              </span>

              <h2 className="mt-4 text-2xl font-semibold tracking-tight text-white sm:text-3xl">
                Need a clean, modern, and scalable website?
              </h2>

              <p className="mt-3 text-sm leading-7 text-zinc-400 sm:text-base">
                I build practical web experiences with strong UI quality, clean
                architecture, and a modern development mindset.
              </p>
            </div>

            <div className="flex flex-col gap-3 sm:flex-row">
              <Link
                to="/projects"
                className="
                  inline-flex items-center justify-center gap-2 rounded-2xl
                  border border-zinc-700 bg-zinc-900 px-5 py-3 text-sm font-medium
                  text-zinc-200 transition-all duration-300
                  hover:-translate-y-[1px] hover:border-purple-400 hover:text-white
                  hover:shadow-[0_0_25px_rgba(168,85,247,0.18)]
                "
              >
                View Projects
              </Link>

              <Link
                to="/contact"
                className="
                  inline-flex items-center justify-center gap-2 rounded-2xl
                  bg-gradient-to-r from-purple-600 to-fuchsia-600
                  px-5 py-3 text-sm font-semibold text-white
                  shadow-[0_12px_35px_rgba(168,85,247,0.25)]
                  transition-all duration-300
                  hover:-translate-y-[1px]
                  hover:shadow-[0_18px_45px_rgba(168,85,247,0.35)]
                "
              >
                Contact Me
                <ArrowUpRight size={16} />
              </Link>
            </div>
          </div>
        </div>

        {/* Main footer content */}
        <div className="grid gap-10 md:grid-cols-[1.2fr_0.8fr_0.9fr] md:gap-8">
          {/* Brand */}
          <div className="max-w-md">
            <h3 className="text-xl font-semibold tracking-tight text-white sm:text-2xl">
              Ismail <span className="text-purple-500">Markhi</span>
            </h3>

            <p className="mt-4 text-sm leading-7 text-zinc-400">
              Web developer focused on building modern, scalable, and visually
              strong web applications with clean structure and practical UX.
            </p>

            <div className="mt-5 flex flex-wrap gap-3">
              <span className="rounded-full border border-zinc-800 bg-zinc-900 px-3 py-1 text-[11px] font-medium text-zinc-400">
                React
              </span>
              <span className="rounded-full border border-zinc-800 bg-zinc-900 px-3 py-1 text-[11px] font-medium text-zinc-400">
                Laravel
              </span>
              <span className="rounded-full border border-zinc-800 bg-zinc-900 px-3 py-1 text-[11px] font-medium text-zinc-400">
                Tailwind
              </span>
              <span className="rounded-full border border-zinc-800 bg-zinc-900 px-3 py-1 text-[11px] font-medium text-zinc-400">
                UI Systems
              </span>
            </div>
          </div>

          {/* Navigation */}
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-zinc-500">
              Navigation
            </p>

            <nav
              aria-label="Footer Navigation"
              className="mt-5 flex flex-col gap-3"
            >
              {navLinks.map((link) => (
                <Link
                  key={link.label}
                  to={link.to}
                  className="
                    group inline-flex w-fit items-center gap-2 text-sm font-medium
                    text-zinc-400 transition-all duration-300 hover:text-white
                  "
                >
                  <span className="h-1.5 w-1.5 rounded-full bg-purple-500/70 transition group-hover:scale-125" />
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>

          {/* Social */}
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-zinc-500">
              Connect
            </p>

            <div className="mt-5 flex flex-wrap items-center gap-3">
              {socialLinks.map(({ name, href, icon: Icon }) => (
                <a
                  key={name}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={name}
                  className="
                    group relative flex h-11 w-11 items-center justify-center
                    rounded-2xl border border-zinc-800
                    bg-zinc-900 text-zinc-400
                    transition-all duration-300
                    hover:-translate-y-[2px]
                    hover:border-purple-500
                    hover:text-white
                    hover:shadow-[0_0_25px_rgba(168,85,247,0.22)]
                  "
                >
                  <Icon size={17} />
                  <span className="pointer-events-none absolute -bottom-8 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-md bg-zinc-800 px-2 py-1 text-[10px] text-zinc-300 opacity-0 transition group-hover:opacity-100">
                    {name}
                  </span>
                </a>
              ))}
            </div>

            <p className="mt-5 text-sm leading-7 text-zinc-500">
              Find me on platforms where I share code, projects, freelance
              services, and updates.
            </p>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-12 flex flex-col gap-3 border-t border-zinc-800/80 pt-5 text-xs text-zinc-500 md:flex-row md:items-center md:justify-between">
          <p>© {new Date().getFullYear()} Ismail Markhi. All rights reserved.</p>
          <p className="text-zinc-600">Built with React, Tailwind, and Vite.</p>
        </div>
      </div>
    </footer>
  );
}