import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";
import { SiFiverr } from "react-icons/si";

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
  { label: "Home", href: "#home" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

export default function Footer() {
  return (
    <footer className="border-t border-zinc-800 bg-black">
      <div className="mx-auto max-w-6xl px-5 py-14 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-10 md:flex-row md:items-start md:justify-between">
          {/* Brand */}
          <div className="max-w-md">
            <h3 className="text-xl font-semibold tracking-tight text-white">
              Ismail <span className="text-purple-500">Markhi</span>
            </h3>

            <p className="mt-3 text-sm leading-7 text-zinc-400">
              Web developer focused on building modern, scalable, and clean web
              applications.
            </p>
          </div>

          {/* Navigation */}
          <nav
            aria-label="Footer Navigation"
            className="flex flex-wrap items-center gap-x-6 gap-y-3"
          >
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-sm font-medium text-zinc-400 transition hover:text-white"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Social */}
          <div className="flex items-center gap-3">
            {socialLinks.map(({ name, href, icon: Icon }) => (
              <a
                key={name}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={name}
                className="
                  flex h-10 w-10 items-center justify-center
                  rounded-xl border border-zinc-800
                  bg-zinc-900 text-zinc-400
                  transition hover:border-purple-500 hover:text-white
                "
              >
                <Icon size={17} />
              </a>
            ))}
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-10 flex flex-col gap-3 border-t border-zinc-800 pt-5 text-xs text-zinc-500 md:flex-row md:items-center md:justify-between">
          <p>© {new Date().getFullYear()} Ismail Markhi</p>
          <p>Built with React, Tailwind, and Vite</p>
        </div>
      </div>
    </footer>
  );
}