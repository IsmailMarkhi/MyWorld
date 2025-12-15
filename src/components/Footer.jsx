import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";
import { SiUpwork } from "react-icons/si";

export default function Footer() {
  return (
    <footer
      role="contentinfo"
      aria-label="Website footer"
      className="border-t border-zinc-200 px-6 py-16"
    >
      <div className="max-w-4xl mx-auto text-center">
        <p className="text-zinc-900 text-sm font-semibold mb-2">
          Ismail Markhi
        </p>

        <p className="text-zinc-500 text-sm max-w-xl mx-auto mb-8">
          Freelance web developer focused on building clear, reliable and
          easy to use websites for individuals and small businesses.
        </p>

        <nav
          aria-label="Professional and social links"
          className="flex justify-center gap-8 mb-8"
        >
          <a
            href="https://github.com/IsmailMarkhi"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub profile"
            className="text-zinc-500 hover:text-zinc-900 transition"
          >
            <FaGithub size={20} />
          </a>

          <a
            href="https://www.linkedin.com/in/ismail-markhi-a67033317/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn profile"
            className="text-zinc-500 hover:text-zinc-900 transition"
          >
            <FaLinkedin size={20} />
          </a>

          <a
            href="https://www.upwork.com/freelancers/~014a30a87b6b357302"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Upwork freelance profile"
            className="text-zinc-500 hover:text-zinc-900 transition"
          >
            <SiUpwork size={20} />
          </a>

          <a
            href="https://www.instagram.com/ismailmarkhi"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram profile"
            className="text-zinc-500 hover:text-zinc-900 transition"
          >
            <FaInstagram size={20} />
          </a>
        </nav>

        <p className="text-zinc-400 text-xs">
          Available for freelance work · Remote collaboration
        </p>
      </div>
    </footer>
  );
}
