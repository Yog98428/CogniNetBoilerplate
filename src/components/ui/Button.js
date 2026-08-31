export function Button({
  href,
  children,
  variant = "primary",
  className = "",
  type = "button",
  ...props
}) {
  const base =
    "inline-flex items-center justify-center gap-2 rounded-full px-5 py-2.5 text-sm font-medium transition duration-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-signal";
  const variants = {
    primary: "bg-ink text-paper hover:bg-ink-soft",
    secondary: "border border-line bg-white/60 text-ink backdrop-blur hover:bg-white",
    ghost: "text-ink-soft hover:text-ink hover:bg-white/50",
  };
  const classes = `${base} ${variants[variant] || variants.primary} ${className}`;

  if (href) {
    return (
      <a href={href} className={classes} {...props}>
        {children}
      </a>
    );
  }

  return (
    <button type={type} className={classes} {...props}>
      {children}
    </button>
  );
}
