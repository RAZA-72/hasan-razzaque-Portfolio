
import clsx from "clsx";

const variants = {
  default:
    "bg-zinc-900/60 border border-zinc-800",

  glass:
    "bg-white/5 backdrop-blur-xl border border-white/10",

  outline:
    "bg-transparent border border-zinc-700",
};

export default function Card({
  children,
  variant = "default",
  className = "",
  as: Component = "div",
  hover = true,
  ...props
}) {
  return (
    <Component
      className={clsx(
        "rounded-3xl p-6 transition-all duration-300",
        variants[variant],
        hover &&
          "hover:-translate-y-1 hover:border-blue-500/40 hover:shadow-[0_0_40px_rgba(59,130,246,0.15)]",
        className
      )}
      {...props}
    >
      {children}
    </Component>
  );
}