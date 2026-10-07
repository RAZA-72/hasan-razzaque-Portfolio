import { FiMail } from "react-icons/fi";
import { Container } from "@layout";
import contactInfo, { socialLinks } from "@data/contact";

export default function Footer() {
  return (
    <footer className="border-t border-white/10 py-10">
      <Container>
        <div className="flex flex-col items-center justify-between gap-6 text-center md:flex-row md:text-left">
          <div>
            <p className="text-sm text-zinc-400">
              © {new Date().getFullYear()} Hasan Md Razzaque. All rights reserved.
            </p>
            <p className="font-code mt-1 text-xs text-zinc-600">
              Core PHP · CodeIgniter 4 · Node.js · React
            </p>
          </div>

          <div className="flex items-center gap-6 text-sm text-zinc-400">
            <a href="/#about" className="transition hover:text-white">About</a>
            <a href="/#projects" className="transition hover:text-white">Projects</a>
            <a href="/#contact" className="transition hover:text-white">Contact</a>
          </div>

          <div className="flex items-center gap-4 text-zinc-400">
            <a href={contactInfo[0].href} aria-label="Email" className="hover:text-white"><FiMail size={20} /></a>
            {socialLinks.map((s) => (
              <a key={s.name} href={s.href} target="_blank" rel="noopener noreferrer" aria-label={s.name} className="hover:text-white">
                <s.icon size={20} />
              </a>
            ))}
          </div>
        </div>
      </Container>
    </footer>
  );
}
