import { Header } from "@navigation";
import { Footer } from "@navigation";

export default function MainLayout({ children }) {
  return (
    <div className="min-h-screen bg-zinc-950 text-white">
      <Header />

      <main className="pt-16 sm:pt-20">
        {children}
      </main>

      <Footer />
    </div>
  );
}