
import clsx from "clsx";

const variants = {
  primary:
    "bg-blue-500/10 text-blue-400 border border-blue-500/20",

  secondary:
    "bg-zinc-800 text-zinc-300 border border-zinc-700",

  success:
    "bg-emerald-500/10 text-emerald-400 border border-emerald-500/20",

  danger:
    "bg-red-500/10 text-red-400 border border-red-500/20",
};

const sizes = {
  sm: "px-2.5 py-1 text-xs",
  md: "px-3 py-1.5 text-sm",
};

export default function Badge({
  children,
  variant = "primary",
  size = "md",
  className = "",
}) {
  return (
    <span
      className={clsx(
        "inline-flex items-center rounded-full font-medium",
        variants[variant],
        sizes[size],
        className
      )}
    >
      {children}
    </span>
  );
}