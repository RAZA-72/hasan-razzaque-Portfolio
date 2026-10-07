
import clsx from "clsx";

const sizes = {
  sm: "h-8 w-8",
  md: "h-10 w-10",
  lg: "h-12 w-12",
};

const variants = {
  primary:
    "bg-blue-500/10 text-blue-400 border border-blue-500/20",

  secondary:
    "bg-zinc-800 text-zinc-300 border border-zinc-700",

  glass:
    "bg-white/5 backdrop-blur-xl border border-white/10",
};

export default function Icon({
  icon: IconComponent,
  size = "md",
  variant = "primary",
  className = "",
}) {
  return (
    <div
      className={clsx(
        "inline-flex items-center justify-center rounded-2xl",
        sizes[size],
        variants[variant],
        className
      )}
    >
      {IconComponent && <IconComponent className="text-xl" />}
    </div>
  );
}