import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";
import { SiFiverr } from "react-icons/si";

const socialLinks = [
  { name: "GitHub", href: "https://github.com/IsmailMarkhi", icon: FaGithub },
  { name: "LinkedIn", href: "https://www.linkedin.com/in/ismail-markhi-a67033317", icon: FaLinkedin },
  { name: "Fiverr", href: "https://www.fiverr.com/ismail1markhi", icon: SiFiverr },
  { name: "Instagram", href: "https://www.instagram.com/ismailmarkhi", icon: FaInstagram }
];

export default function Footer() {

  return (
    <footer className="border-t border-zinc-200 bg-white">

      <div className="max-w-6xl mx-auto px-6 py-16">

        {/* Top */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-10">

          {/* Brand */}
          <div className="text-center md:text-left">

            <h3 className="text-xl font-semibold tracking-tight">
              Ismail <span className="text-purple-600">Markhi</span>
            </h3>

            <p className="text-sm text-zinc-500 mt-2 max-w-sm">
              Web developer building modern web applications
              with React, Laravel and Python.
            </p>

          </div>


          {/* Navigation */}
          <div className="flex gap-8 text-sm text-zinc-600">

            <a
              href="#home"
              className="hover:text-purple-600 transition"
            >
              Home
            </a>

            <a
              href="#projects"
              className="hover:text-purple-600 transition"
            >
              Projects
            </a>

            <a
              href="#contact"
              className="hover:text-purple-600 transition"
            >
              Contact
            </a>

          </div>


          {/* Social */}
          <div className="flex gap-4">

            {socialLinks.map(({ name, href, icon: Icon }) => (

              <a
                key={name}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="
                w-10 h-10
                flex items-center justify-center
                rounded-lg
                border border-zinc-200
                text-zinc-600
                hover:text-purple-600
                hover:border-purple-300
                transition
                "
              >

                <Icon size={18} />

              </a>

            ))}

          </div>

        </div>


        {/* Bottom */}
        <div className="mt-12 pt-6 border-t border-zinc-200 flex flex-col md:flex-row items-center justify-between text-xs text-zinc-500 gap-3">

          <p>
            © {new Date().getFullYear()} Ismail Markhi
          </p>

          <p>
            Built with React • Tailwind • Vite
          </p>

        </div>

      </div>

    </footer>
  );
}