import { FiDownload, FiX } from "react-icons/fi";

import navigation from "@data/navigation";
import personal from "@data/personal";

export default function MobileMenu({ open, activeSection, onClose, onNavigate }) {
  if (!open) return null;

  return (
    <div
      className="fixed inset-0 z-[60] bg-black/70 backdrop-blur-md lg:hidden"
      onClick={onClose}
    >
      <div
        className="absolute right-0 top-0 flex h-full w-[82%] max-w-xs flex-col bg-zinc-950 p-6 shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          aria-label="Close menu"
          className="mb-6 ml-auto rounded-lg p-2 text-zinc-400 hover:bg-white/5 hover:text-white"
          onClick={onClose}
        >
          <FiX size={24} />
        </button>

        <div className="space-y-1">
          {navigation.map((item) => (
            <button
              key={item.id}
              onClick={() => onNavigate(item.id)}
              className={`block w-full rounded-xl px-4 py-3 text-left transition ${
                activeSection === item.id
                  ? "bg-blue-600 text-white"
                  : "text-zinc-200 hover:bg-white/5"
              }`}
            >
              {item.label}
            </button>
          ))}
        </div>

        <a
          href={personal.resume}
          download={personal.resumeFileName}
          className="mt-auto flex h-12 items-center justify-center rounded-xl bg-blue-600 font-medium text-white hover:bg-blue-700"
        >
          <FiDownload className="mr-2" />
          Download Resume
        </a>
      </div>
    </div>
  );
}
