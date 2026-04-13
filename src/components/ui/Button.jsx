import { Link } from "react-router-dom";

export default function Button({
  children,
  to,
  href,
  variant = "primary",
  size = "md",
  className = "",
}) {
  const base = `
    inline-flex items-center justify-center
    font-medium rounded-full
    transition-all duration-300
    focus:outline-none focus:ring-2 focus:ring-purple-500/40
    active:scale-[0.97]
  `;

  const variants = {
    primary: `
      bg-gradient-to-r from-purple-600 to-fuchsia-600
      text-white
      shadow-[0_10px_30px_rgba(168,85,247,0.25)]
      hover:shadow-[0_15px_40px_rgba(168,85,247,0.35)]
      hover:-translate-y-[1px]
    `,

    outline: `
      border border-zinc-300
      text-zinc-900
      bg-white
      hover:border-purple-500
      hover:text-purple-600
      hover:bg-purple-50
    `,

    ghost: `
      text-zinc-600
      hover:text-purple-600
      hover:bg-purple-100/40
    `,

    dark: `
      bg-zinc-900
      border border-zinc-800
      text-white
      hover:border-purple-500
      hover:shadow-[0_0_25px_rgba(168,85,247,0.25)]
    `,
  };

  const sizes = {
    sm: "px-4 py-2 text-sm",
    md: "px-6 py-3 text-sm",
    lg: "px-8 py-4 text-base",
  };

  const classes = `${base} ${variants[variant]} ${sizes[size]} ${className}`;

  if (to) {
    return (
      <Link to={to} className={classes}>
        {children}
      </Link>
    );
  }

  if (href) {
    return (
      <a href={href} className={classes}>
        {children}
      </a>
    );
  }

  return <button className={classes}>{children}</button>;
}