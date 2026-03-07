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

export default function Footer() {
  return (
    <footer className="relative border-t border-zinc-200 bg-gradient-to-b from-white via-purple-50/60 to-white">

      {/* subtle glow */}
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(circle_at_top,rgba(168,85,247,0.08),transparent_60%)]" />

      <div className="relative max-w-6xl mx-auto px-6 py-20">

        <div className="grid gap-12 md:grid-cols-3 text-center md:text-left">

          {/* Brand */}
          <div>

            <h3 className="font-bold text-xl text-zinc-900 tracking-tight mb-4">
              Ismail <span className="text-purple-600">Markhi</span>
            </h3>

            <p className="text-sm text-zinc-600 leading-relaxed mb-5 max-w-xs mx-auto md:mx-0">
              Freelance web developer building modern, scalable
              and user-friendly web applications.
            </p>

            <span className="inline-block text-xs font-medium text-purple-600 bg-purple-100 px-3 py-1 rounded-full">
              Available for freelance work
            </span>

          </div>

          {/* Navigation */}
          <div>

            <h4 className="text-sm font-semibold text-zinc-900 mb-4">
              Navigation
            </h4>

            <ul className="space-y-2 text-sm text-zinc-600">

              <li>
                <a
                  href="/"
                  className="hover:text-purple-600 transition-colors"
                >
                  Home
                </a>
              </li>

              <li>
                <a
                  href="/projects"
                  className="hover:text-purple-600 transition-colors"
                >
                  Projects
                </a>
              </li>

            </ul>

          </div>

          {/* Social */}
          <div>

            <h4 className="text-sm font-semibold text-zinc-900 mb-4">
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
                  bg-white
                  shadow-sm
                  hover:text-purple-600
                  hover:border-purple-300
                  hover:bg-purple-50
                  hover:shadow-md
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
        <div className="border-t border-zinc-200 mt-14 pt-6 flex flex-col sm:flex-row justify-between items-center gap-4 text-xs text-zinc-500">

          <p>
            © {new Date().getFullYear()} Ismail Markhi
          </p>

          <p className="text-zinc-400">
            Built with React • Tailwind • Vite
          </p>

        </div>

      </div>

    </footer>
  );
}