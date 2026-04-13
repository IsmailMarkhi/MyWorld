export default function Container({
  children,
  className = "",
  size = "default",
  center = true,
}) {
  const sizes = {
    sm: "max-w-3xl",
    default: "max-w-6xl",
    wide: "max-w-7xl",
    full: "max-w-full",
  };

  return (
    <div
      className={`
        w-full
        ${sizes[size]}
        ${center ? "mx-auto" : ""}
        px-4 sm:px-6 lg:px-8
        ${className}
      `}
    >
      {children}
    </div>
  );
}