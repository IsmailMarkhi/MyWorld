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
    href: "https://www.linkedin.com",
    icon: FaLinkedin,
  },
  {
    name: "Fiverr",
    href: "https://www.fiverr.com/ismail1markhi",
    icon: SiFiverr,
  },
  {
    name: "Instagram",
    href: "https://instagram.com",
    icon: FaInstagram,
  },
];

export default function Footer() {
  return (
    <footer className="border-t border-zinc-200 bg-gradient-to-b from-white to-purple-50">

      <div className="max-w-6xl mx-auto px-6 py-16">

        <div className="grid gap-10 md:grid-cols-3 text-center md:text-left">

          {/* Brand */}
          <div>

            <h3 className="font-bold text-zinc-900 text-lg mb-3 tracking-tight">
              Ismail <span className="text-purple-600">Markhi</span>
            </h3>

            <p className="text-sm text-zinc-600 leading-relaxed mb-4">
              Freelance web developer building modern, scalable
              and user-friendly web applications.
            </p>

            <p className="text-xs text-purple-600 font-medium">
              Available for freelance work
            </p>

          </div>

          {/* Navigation */}
          <div>

            <h4 className="text-sm font-semibold text-zinc-900 mb-3">
              Navigation
            </h4>

            <ul className="space-y-2 text-sm text-zinc-600">

              <li>
                <a
                  href="/"
                  className="hover:text-purple-600 transition"
                >
                  Home
                </a>
              </li>

              <li>
                <a
                  href="/projects"
                  className="hover:text-purple-600 transition"
                >
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
                  p-3
                  border
                  border-zinc-200
                  rounded-xl
                  text-zinc-600
                  hover:text-purple-600
                  hover:border-purple-300
                  hover:bg-purple-50
                  transition
                  hover:scale-105
                  "
                >
                  <Icon size={18} />
                </a>
              ))}

            </div>

          </div>

        </div>

        {/* Divider */}
        <div className="border-t border-zinc-200 mt-12 pt-6 flex flex-col sm:flex-row justify-between items-center gap-4 text-xs text-zinc-500">

          <p>
            © {new Date().getFullYear()} Ismail Markhi
          </p>

          <p className="text-zinc-400">
            Built with React & Tailwind
          </p>

        </div>

      </div>

    </footer>
  );
}