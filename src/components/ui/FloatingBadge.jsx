import clsx from "clsx";

export default function FloatingBadge({
  children,
  className = "",
}) {
  return (
    <div
      className={clsx(
        "absolute rounded-xl border border-white/10",
        "bg-zinc-900/90 backdrop-blur-xl",
        "px-4 py-2 shadow-xl",
        className
      )}
    >
      <span className="text-sm font-medium text-white">
        {children}
      </span>
    </div>
  );
}