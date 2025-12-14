import { FaGithub, FaInstagram } from "react-icons/fa";

export default function Footer() {
  return (
    <footer
      role="contentinfo"
      aria-label="Website footer"
      className="
        relative text-center py-20
        bg-black
        border-t border-white/10
      "
    >
      {/* Visual focus accent */}
      <div
        aria-hidden="true"
        className="
          absolute top-0 left-1/2 -translate-x-1/2
          h-[3px] w-28
          bg-gradient-to-r from-orange-500 via-red-500 to-fuchsia-500
          rounded-full
        "
      />

      {/* Primary message */}
      <p className="text-white text-sm font-semibold mb-2">
        A personal challenge 🌱
      </p>

      {/* Date (SEO + clarity) */}
      <p className="text-zinc-300 text-sm mb-8">
        Journey ends on{" "}
        <time
          dateTime="2026-09-02"
          className="font-semibold text-white"
        >
          September 2, 2026
        </time>
      </p>

      {/* Social links */}
      <nav
        aria-label="Social media links"
        className="flex justify-center gap-10 mb-8"
      >
        <a
          href="https://github.com/YOUR_USERNAME"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Visit GitHub profile"
          className="
            text-zinc-300 text-2xl
            hover:text-white hover:scale-110
            transition
            focus:outline-none focus-visible:ring-2 focus-visible:ring-orange-500
          "
        >
          <FaGithub />
        </a>

        <a
          href="https://instagram.com/YOUR_USERNAME"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Visit Instagram profile"
          className="
            text-zinc-300 text-2xl
            hover:text-pink-400 hover:scale-110
            transition
            focus:outline-none focus-visible:ring-2 focus-visible:ring-pink-500
          "
        >
          <FaInstagram />
        </a>
      </nav>

      {/* Closing line */}
      <p className="text-zinc-400 italic text-xs max-w-md mx-auto leading-relaxed">
        Learning. Building. Enjoying the process — one step at a time ✨
      </p>
    </footer>
  );
}
