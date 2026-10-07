import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

import { Section, Container } from "@layout";
import { SectionHeading } from "@ui";

import projects from "@data/projects";
import { ProjectCard } from "@components/project";

const filters = [
  { id: "All", label: "All" },
  { id: "Full Stack", label: "Full Stack" },
  { id: "Backend", label: "Backend" },
  { id: "Internal", label: "PHP & Internal" },
];

export default function Projects() {
  const [active, setActive] = useState("All");

  const visible =
    active === "All" ? projects : projects.filter((p) => p.type === active);

  return (
    <Section id="projects">
      <Container>
        <SectionHeading
          label="PROJECTS"
          title="Featured Projects"
          description="Internal government software, microfinance and travel platforms, and production backends — built end to end."
        />

        <div className="font-code -mt-6 mb-10 flex flex-wrap justify-center gap-2">
          {filters.map((f) => (
            <button
              key={f.id}
              onClick={() => setActive(f.id)}
              className={`rounded-lg border px-4 py-2 text-xs transition sm:text-sm ${
                active === f.id
                  ? "border-blue-500 bg-blue-500/15 text-blue-300"
                  : "border-zinc-800 text-zinc-400 hover:border-zinc-600 hover:text-white"
              }`}
            >
              {f.label}
            </button>
          ))}
        </div>

        <motion.div layout className="grid gap-6 sm:gap-8 md:grid-cols-2 xl:grid-cols-3">
          <AnimatePresence mode="popLayout">
            {visible.map((project) => (
              <motion.div
                key={project.id}
                layout
                className="h-full"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.3 }}
              >
                <ProjectCard project={project} index={project.id} />
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </Container>
    </Section>
  );
}
