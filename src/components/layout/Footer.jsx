import { NavLink, Link } from "react-router-dom";
import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";
import { SiFiverr } from "react-icons/si";
import { ArrowUpRight, Sparkles } from "lucide-react";

const socialLinks = [
  { name: "GitHub", href: "https://github.com/IsmailMarkhi", icon: FaGithub },
  { name: "LinkedIn", href: "https://www.linkedin.com/in/ismail-markhi-a67033317", icon: FaLinkedin },
  { name: "Fiverr", href: "https://www.fiverr.com/ismail1markhi", icon: SiFiverr },
  { name: "Instagram", href: "https://www.instagram.com/ismailmarkhi", icon: FaInstagram },
];

const navLinks = [
  { label: "Home", to: "/", end: true },
  { label: "Projects", to: "/projects" },
  { label: "Services", to: "/services" },
  { label: "Contact", to: "/contact" },
];

export default function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-zinc-800 bg-black">
      
      {/* Background glow */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-[8%] top-12 h-40 w-40 bg-purple-700/20 blur-3xl" />
        <div className="absolute right-[10%] bottom-10 h-48 w-48 bg-fuchsia-700/20 blur-3xl" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(168,85,247,0.07),transparent_32%)]" />
      </div>

      <div className="relative mx-auto max-w-6xl px-5 py-14 sm:px-6 lg:px-8">

        {/* CTA STRIP */}
        <div className="mb-12 rounded-[30px] border border-purple-500/20 bg-zinc-900/70 p-7 backdrop-blur-xl shadow-[0_0_40px_rgba(168,85,247,0.08)]">
          <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
            
            <div>
              <span className="inline-flex items-center gap-2 rounded-full border border-purple-500/20 bg-purple-500/10 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.2em] text-purple-300">
                <Sparkles size={13} />
                Available
              </span>

              <h2 className="mt-4 text-2xl font-semibold text-white sm:text-3xl">
                Let’s build something clean and powerful
              </h2>

              <p className="mt-2 text-sm text-zinc-400 max-w-xl">
                I create modern websites with strong UI, clean code, and scalable structure.
              </p>
            </div>

            <div className="flex gap-3 flex-col sm:flex-row">
              <Link
                to="/projects"
                className="px-5 py-3 rounded-2xl border border-zinc-700 text-zinc-300 hover:text-white hover:border-purple-400 transition"
              >
                View Projects
              </Link>

              <Link
                to="/contact"
                className="px-5 py-3 rounded-2xl bg-gradient-to-r from-purple-600 to-fuchsia-600 text-white font-semibold shadow-lg hover:shadow-[0_0_25px_rgba(168,85,247,0.4)] transition"
              >
                Contact Me
              </Link>
            </div>

          </div>
        </div>

        {/* MAIN GRID */}
        <div className="grid gap-10 md:grid-cols-3">

          {/* BRAND */}
          <div>
            <h3 className="text-xl font-semibold text-white">
              Ismail <span className="text-purple-400">Markhi</span>
            </h3>

            <p className="mt-4 text-sm text-zinc-400 leading-7">
              Web developer building scalable, modern, and clean web applications with a strong focus on UX and performance.
            </p>

            <div className="mt-5 flex flex-wrap gap-2">
              {["React", "Laravel", "Tailwind", "UI Systems"].map((tech) => (
                <span key={tech} className="px-3 py-1 text-xs border border-zinc-800 bg-zinc-900 text-zinc-400 rounded-full">
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* NAVIGATION */}
          <div>
            <p className="text-sm uppercase tracking-[0.2em] text-zinc-500">
              Navigation
            </p>

            <div className="mt-5 flex flex-wrap gap-3">
              {navLinks.map((link) => (
                <NavLink
                  key={link.label}
                  to={link.to}
                  end={link.end}
                  className={({ isActive }) =>
                    `
                      px-4 py-2 rounded-2xl border text-sm font-medium transition-all
                      ${
                        isActive
                          ? "bg-purple-500/20 text-purple-300 border-purple-500 shadow-[0_0_20px_rgba(168,85,247,0.2)]"
                          : "text-zinc-400 border-zinc-800 hover:text-white hover:border-purple-400"
                      }
                    `
                  }
                >
                  {link.label}
                </NavLink>
              ))}
            </div>
          </div>

          {/* SOCIAL */}
          <div>
            <p className="text-sm uppercase tracking-[0.2em] text-zinc-500">
              Connect
            </p>

            <div className="mt-5 flex gap-3 flex-wrap">
              {socialLinks.map(({ name, href, icon: Icon }) => (
                <a
                  key={name}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="
                    flex h-11 w-11 items-center justify-center
                    rounded-2xl border border-zinc-800 bg-zinc-900 text-zinc-400
                    transition hover:text-white hover:border-purple-500
                    hover:shadow-[0_0_20px_rgba(168,85,247,0.25)]
                  "
                >
                  <Icon size={17} />
                </a>
              ))}
            </div>

            <a
              href="mailto:ismailmarkhi17@gmail.com"
              className="mt-6 inline-flex items-center gap-2 text-sm text-zinc-400 hover:text-purple-400 transition"
            >
              Start a conversation
              <ArrowUpRight size={14} />
            </a>
          </div>

        </div>

        {/* BOTTOM */}
        <div className="mt-12 border-t border-zinc-800 pt-5 flex flex-col md:flex-row justify-between text-xs text-zinc-500">
          <p>© {new Date().getFullYear()} Ismail Markhi</p>
          <p>Built with React + Tailwind</p>
        </div>
      </div>
    </footer>
  );
}