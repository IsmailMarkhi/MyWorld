import { FaGithub, FaInstagram } from "react-icons/fa";

export default function Footer() {
  return (
    <footer
      role="contentinfo"
      aria-label="Website footer"
      className="
        relative
        bg-black
        border-t border-white/10
        px-6 py-16 sm:py-20
      "
    >
      {/* Accent line */}
      <div
        aria-hidden="true"
        className="
          absolute top-0 left-1/2 -translate-x-1/2
          h-[3px] w-24 sm:w-28
          bg-gradient-to-r from-orange-500 via-red-500 to-fuchsia-500
          rounded-full
        "
      />

      <div className="max-w-4xl mx-auto text-center">
        {/* Identity */}
        <p className="text-white text-sm font-semibold mb-2">
          Ismail — Freelance Web Developer
        </p>

        {/* SEO description */}
        <p className="text-zinc-400 text-sm max-w-xl mx-auto mb-6 sm:mb-8">
          Building clean, fast, and reliable websites using modern frontend
          technologies and practical development workflows.
        </p>

        {/* Social proof */}
        <nav
          aria-label="Social media links"
          className="
            flex justify-center items-center
            gap-8 sm:gap-10
            mb-6 sm:mb-8
          "
        >
          <a
            href="https://github.com/IsmailMarkhi"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub profile of Ismail, freelance web developer"
            className="
              text-zinc-300 text-xl sm:text-2xl
              hover:text-white hover:scale-110
              transition
              focus:outline-none focus-visible:ring-2
              focus-visible:ring-orange-500
            "
          >
            <FaGithub />
          </a>

          <a
            href="https://www.instagram.com/ismailmarkhi?igsh=eXoyanJrZGJjdGg4"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram profile of Ismail, web developer"
            className="
              text-zinc-300 text-xl sm:text-2xl
              hover:text-pink-400 hover:scale-110
              transition
              focus:outline-none focus-visible:ring-2
              focus-visible:ring-pink-500
            "
          >
            <FaInstagram />
          </a>
        </nav>

        {/* Micro trust line */}
        <p className="text-zinc-500 text-xs sm:text-sm">
          Available for freelance projects · Remote friendly
        </p>
      </div>
    </footer>
  );
}
