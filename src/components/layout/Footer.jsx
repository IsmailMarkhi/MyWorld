import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";
import { SiUpwork } from "react-icons/si";

const socialLinks = [
  {
    name: "GitHub",
    href: "https://github.com/IsmailMarkhi",
    icon: FaGithub,
  },
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com",
    icon: FaLinkedin,
  },
  {
    name: "Upwork",
    href: "https://www.upwork.com",
    icon: SiUpwork,
  },
  {
    name: "Instagram",
    href: "https://instagram.com",
    icon: FaInstagram,
  },
];

export default function Footer() {
  return (
    <footer className="border-t border-zinc-200 bg-white">

      <div className="max-w-6xl mx-auto px-6 py-16">

        <div className="grid gap-10 md:grid-cols-3 text-center md:text-left">

          {/* Brand */}
          <div>
            <h3 className="font-semibold text-zinc-900 text-lg mb-3">
              Ismail Markhi
            </h3>

            <p className="text-sm text-zinc-600 leading-relaxed">
              Freelance web developer building modern, responsive
              and user-friendly web applications.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="text-sm font-semibold text-zinc-900 mb-3">
              Navigation
            </h4>

            <ul className="space-y-2 text-sm text-zinc-600">
              <li>
                <a href="/" className="hover:text-zinc-900 transition">
                  Home
                </a>
              </li>
              <li>
                <a href="/projects" className="hover:text-zinc-900 transition">
                  Projects
                </a>
              </li>
            </ul>
          </div>

          {/* Social */}
          <div>
            <h4 className="text-sm font-semibold text-zinc-900 mb-3">
              Connect
            </h4>

            <div className="flex justify-center md:justify-start gap-4">

              {socialLinks.map(({ name, href, icon: Icon }) => (
                <a
                  key={name}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={name}
                  className="
                  p-2
                  border
                  border-zinc-200
                  rounded-lg
                  text-zinc-600
                  hover:text-zinc-900
                  hover:bg-zinc-100
                  transition
                  "
                >
                  <Icon size={18} />
                </a>
              ))}

            </div>
          </div>

        </div>

        {/* Bottom */}
        <div className="border-t border-zinc-200 mt-12 pt-6 text-center text-xs text-zinc-500">
          © {new Date().getFullYear()} Ismail Markhi. All rights reserved.
        </div>

      </div>

    </footer>
  );
}