import { Link, useLocation } from "react-router-dom";

export default function Navbar() {
  const { pathname } = useLocation();

  const links = [
    { to: "/", label: "Home", aria: "Home page" },
    { to: "/story", label: "Story", aria: "Personal story and journey" },
    { to: "/skills", label: "Skills", aria: "Web development skills and technologies" },
    { to: "/services", label: "Services", aria: "Web development services and freelance help" },
    { to: "/projects", label: "Projects", aria: "Selected web development projects" }, // ✅ ADDED
    { to: "/contact", label: "Contact", aria: "Contact web developer" },
  ];

  return (
    <nav
      aria-label="Primary navigation"
      className="
        fixed left-0 top-0 h-full w-20
        flex flex-col items-center justify-center
        gap-14
        bg-black/40 backdrop-blur-xl
        border-r border-white/10
      "
    >
      {links.map((link) => {
        const isActive = pathname === link.to;

        return (
          <Link
            key={link.to}
            to={link.to}
            aria-label={link.aria}
            aria-current={isActive ? "page" : undefined}
            className={`
              nav-link relative
              w-10 h-10
              flex items-center justify-center
              text-[10px] uppercase tracking-widest font-medium
              transition
              focus:outline-none focus-visible:ring-2 focus-visible:ring-orange-500
              ${isActive ? "active text-white" : "text-zinc-400 hover:text-white"}
            `}
          >
            {/* Animated ring (hover = once, active = infinite via CSS) */}
            <span
              className="
                nav-ring pointer-events-none
                absolute inset-[-6px] rounded-full
              "
            />

            {/* Visible label */}
            <span className="relative z-10">
              {link.label}
            </span>

            {/* Hidden SEO/UX helper */}
            <span className="sr-only">
              {link.aria}
            </span>
          </Link>
        );
      })}
    </nav>
  );
}
