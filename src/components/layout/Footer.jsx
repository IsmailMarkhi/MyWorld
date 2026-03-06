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
    <footer className="border-t border-zinc-200 px-6 py-16 bg-white">
      <div className="max-w-5xl mx-auto text-center space-y-8">

        <p className="text-zinc-900 text-sm font-semibold">
          Ismail Markhi
        </p>

        <p className="text-zinc-500 text-sm max-w-xl mx-auto">
          Freelance web developer focused on building clear, reliable
          and easy-to-use websites.
        </p>

        <div className="flex justify-center gap-6">
          {socialLinks.map(({ name, href, icon: Icon }) => (
            <a
              key={name}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-zinc-500 hover:text-zinc-900 transition"
              aria-label={name}
            >
              <Icon size={20} />
            </a>
          ))}
        </div>

        <p className="text-zinc-400 text-xs">
          © {new Date().getFullYear()} Ismail Markhi
        </p>

      </div>
    </footer>
  );
}