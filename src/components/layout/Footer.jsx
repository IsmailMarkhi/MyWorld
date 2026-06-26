import { NavLink, Link } from "react-router-dom";
import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";
import { SiFiverr } from "react-icons/si";
import {
  ArrowUpRight,
  Sparkles,
  Code2,
  Mail,
  Layers3,
  Heart,
} from "lucide-react";

const socialLinks = [
  {
    name: "GitHub",
    href: "https://github.com/IsmailMarkhi",
    icon: FaGithub,
  },
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/in/ismailmarkhi",
    icon: FaLinkedin,
  },
  {
    name: "Fiverr",
    href: "https://www.fiverr.com/sellers/ismail1markhi",
    icon: SiFiverr,
  },
  {
    name: "Instagram",
    href: "https://www.instagram.com/ismailmarkhi",
    icon: FaInstagram,
  },
];

const navLinks = [
  { label: "Home", to: "/", end: true },
  { label: "Projects", to: "/projects" },
  { label: "Services", to: "/services" },
  { label: "Contact", to: "/contact" },
];

const techStack = ["React", "Laravel", "Tailwind", "UI Systems"];

export default function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-zinc-200/80 bg-[#fbf7ff]">
      {/* Background */}
      <div className="pointer-events-none absolute inset-0" aria-hidden="true">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(88,28,135,0.045)_1px,transparent_1px),linear-gradient(90deg,rgba(88,28,135,0.045)_1px,transparent_1px)] bg-[size:46px_46px]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(168,85,247,0.15),transparent_38%)]" />

        <div className="absolute left-[12%] top-10 h-64 w-64 rounded-full bg-purple-200/35 blur-3xl" />
        <div className="absolute right-[10%] bottom-10 h-72 w-72 rounded-full bg-fuchsia-200/30 blur-3xl" />

        <div className="absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-white/80 to-transparent" />
      </div>

      <div className="relative mx-auto max-w-7xl px-5 py-16 sm:px-6 lg:px-8">
        {/* CTA */}
        <section className="relative mb-14 overflow-hidden rounded-[38px] border border-white/70 bg-white/70 p-[1px] shadow-[0_24px_90px_rgba(24,24,27,0.10)] backdrop-blur-xl">
          <div className="absolute inset-0 bg-gradient-to-br from-purple-100 via-white to-fuchsia-100 opacity-90" />
          <div className="absolute inset-x-10 top-0 h-px bg-gradient-to-r from-transparent via-purple-500/70 to-transparent" />
          <div className="absolute -right-24 -top-24 h-56 w-56 rounded-full bg-purple-300/25 blur-3xl" />

          <div className="relative z-10 flex flex-col gap-8 rounded-[37px] border border-zinc-200/70 bg-white/85 p-8 backdrop-blur-xl lg:flex-row lg:items-center lg:justify-between lg:p-10">
            <div className="max-w-2xl">
              <span className="inline-flex items-center gap-2 rounded-full border border-purple-200 bg-white/90 px-4 py-2 text-xs font-black uppercase tracking-[0.2em] text-purple-700 shadow-sm">
                <Sparkles size={13} />
                Available
              </span>

              <h2 className="mt-5 text-3xl font-black tracking-[-0.04em] text-zinc-950 sm:text-4xl">
                Let’s build something clean and useful.
              </h2>

              <p className="mt-4 max-w-xl text-sm leading-7 text-zinc-600 sm:text-base">
                I build modern websites, landing pages, frontend interfaces, and
                Laravel-based systems with clean UI and maintainable structure.
              </p>
            </div>

            <div className="flex flex-col gap-3 sm:flex-row">
              <Link
                to="/projects"
                className="inline-flex items-center justify-center gap-2 rounded-2xl border border-zinc-200 bg-white px-5 py-3 text-sm font-bold text-zinc-800 shadow-sm transition hover:-translate-y-1 hover:border-purple-300 hover:text-purple-700"
              >
                View Projects
                <ArrowUpRight size={16} />
              </Link>

              <Link
                to="/contact"
                className="inline-flex items-center justify-center gap-2 rounded-2xl border border-zinc-950 bg-zinc-950 px-5 py-3 text-sm font-bold text-white shadow-sm transition hover:-translate-y-1 hover:bg-purple-700"
              >
                Contact Me
                <Mail size={16} />
              </Link>
            </div>
          </div>
        </section>

        {/* Main */}
        <div className="grid gap-8 lg:grid-cols-[1.15fr_0.85fr_0.85fr]">
          {/* Brand */}
          <section className="relative overflow-hidden rounded-[34px] border border-zinc-200/80 bg-white/80 p-[1px] shadow-[0_18px_60px_rgba(24,24,27,0.08)] backdrop-blur-xl">
            <div className="absolute inset-0 bg-gradient-to-br from-white via-white to-purple-50 opacity-90" />
            <div className="absolute inset-x-8 top-0 h-px bg-gradient-to-r from-transparent via-purple-400 to-transparent opacity-70" />

            <div className="relative z-10 rounded-[33px] border border-zinc-200/70 bg-white/80 p-7 backdrop-blur-xl">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-zinc-200 bg-white text-purple-700 shadow-sm">
                <Code2 size={20} />
              </div>

              <h3 className="mt-5 text-2xl font-black tracking-tight text-zinc-950">
                Ismail <span className="text-purple-700">Markhi</span>
              </h3>

              <p className="mt-4 max-w-md text-sm leading-7 text-zinc-600">
                Junior full-stack web developer focused on modern interfaces,
                practical systems, responsive design, and clean project
                structure.
              </p>

              <div className="mt-6 flex flex-wrap gap-2">
                {techStack.map((tech) => (
                  <span
                    key={tech}
                    className="rounded-full border border-zinc-200 bg-white/90 px-3 py-1.5 text-[11px] font-bold text-zinc-700 shadow-sm"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </section>

          {/* Navigation */}
          <section className="relative overflow-hidden rounded-[34px] border border-zinc-200/80 bg-white/80 p-[1px] shadow-[0_18px_60px_rgba(24,24,27,0.08)] backdrop-blur-xl">
            <div className="absolute inset-0 bg-gradient-to-br from-purple-50 via-white to-fuchsia-50 opacity-90" />
            <div className="absolute inset-x-8 top-0 h-px bg-gradient-to-r from-transparent via-purple-400 to-transparent opacity-70" />

            <div className="relative z-10 rounded-[33px] border border-zinc-200/70 bg-white/80 p-7 backdrop-blur-xl">
              <div className="flex items-center gap-3">
                <div className="flex h-11 w-11 items-center justify-center rounded-2xl border border-zinc-200 bg-white text-purple-700 shadow-sm">
                  <Layers3 size={19} />
                </div>

                <p className="text-sm font-black uppercase tracking-[0.2em] text-zinc-500">
                  Navigation
                </p>
              </div>

              <nav className="mt-6 flex flex-wrap gap-3" aria-label="Footer navigation">
                {navLinks.map((link) => (
                  <NavLink
                    key={link.label}
                    to={link.to}
                    end={link.end}
                    className={({ isActive }) =>
                      `
                        rounded-2xl border px-4 py-2 text-sm font-bold transition-all
                        ${
                          isActive
                            ? "border-zinc-950 bg-zinc-950 text-white shadow-sm"
                            : "border-zinc-200 bg-white/80 text-zinc-700 hover:-translate-y-1 hover:border-purple-300 hover:text-purple-700"
                        }
                      `
                    }
                  >
                    {link.label}
                  </NavLink>
                ))}
              </nav>
            </div>
          </section>

          {/* Social */}
          <section className="relative overflow-hidden rounded-[34px] border border-zinc-200/80 bg-white/80 p-[1px] shadow-[0_18px_60px_rgba(24,24,27,0.08)] backdrop-blur-xl">
            <div className="absolute inset-0 bg-gradient-to-br from-fuchsia-50 via-white to-purple-50 opacity-90" />
            <div className="absolute inset-x-8 top-0 h-px bg-gradient-to-r from-transparent via-purple-400 to-transparent opacity-70" />

            <div className="relative z-10 rounded-[33px] border border-zinc-200/70 bg-white/80 p-7 backdrop-blur-xl">
              <p className="text-sm font-black uppercase tracking-[0.2em] text-zinc-500">
                Connect
              </p>

              <div className="mt-6 flex flex-wrap gap-3">
                {socialLinks.map(({ name, href, icon: Icon }) => (
                  <a
                    key={name}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={name}
                    className="flex h-12 w-12 items-center justify-center rounded-2xl border border-zinc-200 bg-white text-zinc-700 shadow-sm transition hover:-translate-y-1 hover:border-purple-300 hover:text-purple-700 hover:shadow-[0_16px_40px_rgba(88,28,135,0.14)]"
                  >
                    <Icon size={18} />
                  </a>
                ))}
              </div>

              <a
                href="mailto:ismailmarkhi17@gmail.com"
                className="mt-7 inline-flex items-center gap-2 rounded-2xl border border-zinc-200 bg-white px-4 py-3 text-sm font-bold text-zinc-700 shadow-sm transition hover:-translate-y-1 hover:border-purple-300 hover:text-purple-700"
              >
                Start a conversation
                <ArrowUpRight size={15} />
              </a>
            </div>
          </section>
        </div>

        {/* Bottom */}
        <div className="mt-10 flex flex-col gap-3 rounded-[24px] border border-zinc-200/80 bg-white/75 px-5 py-4 text-xs font-semibold text-zinc-500 shadow-sm backdrop-blur sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} Ismail Markhi. All rights reserved.</p>

          <p className="inline-flex items-center gap-2">
            Built with React + Tailwind
            <Heart size={13} className="text-purple-700" />
          </p>
        </div>
      </div>
    </footer>
  );
}