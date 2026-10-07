import { motion } from "framer-motion";
import { FiArrowRight, FiDownload } from "react-icons/fi";

import { Section, Container } from "@layout";
import { Display, Paragraph, GradientText, Button, Counter } from "@ui";

import personal from "@data/personal";

const terminal = [
  { c: "text-zinc-500", t: "$ whoami" },
  { c: "text-white", t: "hasan — full stack developer" },
  { c: "text-zinc-500", t: "$ cat stack.json" },
  { c: "text-cyan-300", t: '["core-php","codeigniter4","node","react"]' },
  { c: "text-zinc-500", t: "$ php spark serve --project drdo" },
  { c: "text-emerald-400", t: "[ OK ] smtp authenticated (.env)" },
  { c: "text-emerald-400", t: "[ OK ] rbac policies loaded" },
];

export default function Hero() {
  return (
    <Section
      id="home"
      className="relative flex min-h-screen items-center overflow-hidden !py-16 md:!py-24"
    >
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="bg-grid absolute inset-0" />
        <div className="absolute left-1/2 top-40 h-96 w-96 -translate-x-1/2 rounded-full bg-blue-600/20 blur-[140px]" />
        <div className="absolute right-0 top-0 h-72 w-72 rounded-full bg-cyan-500/10 blur-[140px]" />
      </div>

      <Container>
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Left */}
          <motion.div
            className="text-center lg:text-left"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <span className="font-code inline-flex items-center gap-2 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-4 py-1.5 text-xs text-emerald-400 sm:text-sm">
              <span className="h-2 w-2 animate-pulse rounded-full bg-emerald-400" />
              Surat · Delhi · Noida · Pune
            </span>

            <Display className="mt-6">
              Hi, I'm <GradientText>{personal.name}</GradientText>
            </Display>

            <Paragraph className="font-code mt-4 text-sm leading-7 text-blue-400 sm:text-base">
              {personal.title}
              <span className="caret ml-1 inline-block h-4 w-2 translate-y-0.5 bg-blue-400" />
            </Paragraph>

            <Paragraph className="mx-auto mt-6 max-w-xl text-base leading-8 lg:mx-0">
              {personal.description}
            </Paragraph>

            <div className="mt-8 flex flex-wrap justify-center gap-2 lg:justify-start">
              {personal.technologies.map((t) => (
                <span
                  key={t}
                  className="font-code rounded-md border border-blue-500/20 bg-blue-500/10 px-3 py-1 text-xs text-blue-300"
                >
                  {t}
                </span>
              ))}
            </div>

            <div className="mt-10 flex flex-col items-stretch gap-3 sm:flex-row sm:justify-center lg:justify-start">
              <Button as="a" href="#projects">
                View Projects
                <FiArrowRight className="ml-2" />
              </Button>

              <Button
                as="a"
                href={personal.resume}
                download={personal.resumeFileName}
                variant="secondary"
              >
                <FiDownload className="mr-2" />
                Download Resume
              </Button>
            </div>

            <div className="mt-12 grid grid-cols-3 gap-4 sm:gap-8">
              {personal.stats.map((item) => (
                <Counter
                  key={item.label}
                  end={item.value}
                  suffix={item.suffix}
                  title={item.label}
                />
              ))}
            </div>
          </motion.div>

          {/* Right */}
          <motion.div
            className="relative flex justify-center"
            initial={{ opacity: 0, scale: 0.92 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
          >
            <div className="relative w-full max-w-sm sm:max-w-md">
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-blue-600/25 to-cyan-500/10 blur-3xl" />

              <div className="relative rounded-3xl border border-white/10 bg-zinc-900 p-2">
                <img
                  src={personal.image}
                  alt={personal.name}
                  className="h-[360px] w-full rounded-3xl object-cover sm:h-[480px]"
                />
              </div>

              {/* terminal card */}
              <div className="font-code relative z-10 -mt-14 ml-3 mr-3 rounded-2xl border border-white/10 bg-zinc-950/90 p-4 text-[11px] leading-5 shadow-2xl backdrop-blur-xl sm:absolute sm:-bottom-10 sm:-left-8 sm:mx-0 sm:mt-0 sm:w-80 sm:text-xs">
                <div className="mb-2 flex gap-1.5">
                  <span className="h-2.5 w-2.5 rounded-full bg-red-500/80" />
                  <span className="h-2.5 w-2.5 rounded-full bg-yellow-500/80" />
                  <span className="h-2.5 w-2.5 rounded-full bg-green-500/80" />
                </div>
                {terminal.map((l) => (
                  <p key={l.t} className={`${l.c} truncate`}>
                    {l.t}
                  </p>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </Container>
    </Section>
  );
}
