import navigation from "@data/navigation";
import clsx from "clsx";

export default function NavLinks({
  activeSection,
  onNavigate,
}) {
  return (
    <nav className="hidden items-center gap-2 lg:flex">
      {navigation.map((item) => (
        <button
          key={item.id}
          onClick={() => onNavigate(item.id)}
          className={clsx(
            "rounded-full px-4 py-2 text-sm font-medium transition-all duration-300",
            activeSection === item.id
              ? "bg-blue-600 text-white"
              : "text-zinc-400 hover:bg-white/5 hover:text-white"
          )}
        >
          {item.label}
        </button>
      ))}
    </nav>
  );
}

