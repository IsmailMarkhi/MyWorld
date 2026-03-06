import { Link } from "react-router-dom";

export default function Button({
  children,
  to,
  href,
  variant = "primary",
  size = "md",
  className = "",
}) {

  const base =
    "inline-flex items-center justify-center font-medium rounded-full transition";

  const variants = {
    primary: "bg-indigo-600 text-white hover:bg-indigo-700",
    outline: "border border-zinc-300 text-zinc-900 hover:bg-zinc-100",
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