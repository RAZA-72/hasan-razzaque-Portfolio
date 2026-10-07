import { motion } from "framer-motion";
import { FiServer, FiLayout, FiDatabase, FiTool } from "react-icons/fi";

import { Section, Container } from "@layout";
import { SectionHeading, Card, Icon } from "@ui";

import techStack, { marquee } from "@data/techstack";

const icons = [FiServer, FiLayout, FiDatabase, FiTool];

export default function TechStack() {
  const loop = [...marquee, ...marquee];

  return (
    <Section id="stack">
      <Container>
        <SectionHeading
          label="TECH STACK"
          title="Technologies I Build With"
          description="From internal Core PHP & CodeIgniter 4 systems to modern MERN applications."
        />

        <div className="relative -mx-5 mb-14 overflow-hidden border-y border-white/10 py-4 sm:-mx-6 lg:-mx-8">
          <div className="animate-marquee font-code flex w-max gap-3">
            {loop.map((t, i) => (
              <span
                key={`${t}-${i}`}
                className="whitespace-nowrap rounded-md border border-blue-500/20 bg-blue-500/10 px-4 py-1.5 text-sm text-blue-300"
              >
                {t}
              </span>
            ))}
          </div>
        </div>

        <div className="grid gap-6 sm:grid-cols-2">
          {techStack.map((g, i) => (
            <motion.div
              key={g.group}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
            >
              <Card className="h-full p-6 sm:p-8">
                <div className="flex items-center gap-4">
                  <Icon icon={icons[i]} variant="glass" />
                  <h3 className="text-xl font-semibold text-white">{g.group}</h3>
                </div>

                <div className="mt-6 flex flex-wrap gap-2">
                  {g.items.map((item) => (
                    <span
                      key={item}
                      className="font-code rounded-md border border-zinc-700 bg-zinc-800/70 px-3 py-1.5 text-xs text-zinc-200 sm:text-sm"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </Container>
    </Section>
  );
}
