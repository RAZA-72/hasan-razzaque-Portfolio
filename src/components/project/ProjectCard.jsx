import { motion } from "framer-motion";
import { FiArrowUpRight, FiGithub } from "react-icons/fi";
import { Link } from "react-router-dom";

import { Card, Button } from "@ui";

export default function ProjectCard({ project, index = 0 }) {
  return (
    <motion.div
      className="h-full"
      whileHover={{ y: -8 }}
      transition={{ duration: 0.3 }}
    >
      <Card className="group flex h-full flex-col overflow-hidden !p-0">
        {/* Project Image */}
        <Link to={`/projects/${project.slug}`}>
          <div className="relative aspect-video overflow-hidden bg-zinc-900">
            {project.featured && (
              <span className="font-code absolute left-3 top-3 z-10 rounded-md border border-emerald-500/30 bg-zinc-950/80 px-2.5 py-1 text-xs text-emerald-400 backdrop-blur">
                ★ Featured · DRDO
              </span>
            )}
            <img
              src={project.image}
              alt={project.title}
              className="h-full w-full object-cover transition duration-500 group-hover:scale-110"
            />
          </div>
        </Link>

        {/* Content */}
        <div className="flex flex-1 flex-col p-5 sm:p-6">
          <p className="font-code mb-2 flex items-center gap-2 text-xs text-blue-400">
            <span className="text-zinc-600">{String(index + 1).padStart(2, "0")}</span>
            {project.category}
          </p>

          <Link to={`/projects/${project.slug}`}>
            <h3 className="text-xl font-bold text-white transition sm:text-2xl group-hover:text-blue-400">
              {project.title}
            </h3>
          </Link>

          <p className="mt-3 leading-7 text-zinc-400">
            {project.shortDescription}
          </p>

          {/* Tech Stack */}
          <div className="mt-6 flex flex-wrap gap-2">
            {project.technologies.map((tech) => (
              <span
                key={tech}
                className="font-code rounded-md border border-zinc-700 bg-zinc-800/70 px-2.5 py-1 text-xs text-zinc-300"
              >
                {tech}
              </span>
            ))}
          </div>

          <p className="font-code mt-5 border-t border-white/5 pt-4 text-xs text-zinc-500">
            {project.role} · {project.duration}
          </p>

          {/* Buttons */}
          <div className="mt-auto flex flex-wrap items-center gap-3 pt-5">
            {project.live && (
              <Button
                as="a"
                href={project.live}
                target="_blank"
                rel="noopener noreferrer"
              >
                Live Demo
                <FiArrowUpRight className="ml-2" />
              </Button>
            )}

            <Button
              as={Link}
              to={`/projects/${project.slug}`}
              variant="secondary"
              size="sm"
            >
              View Details
              <FiArrowUpRight className="ml-2" />
            </Button>

            {project.confidential && (
              <span className="font-code inline-flex h-10 items-center text-xs text-zinc-500">
                Internal system · no public link
              </span>
            )}

            {project.github && (
              <Button
                as="a"
                href={project.github}
                variant="secondary"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FiGithub className="mr-2" />
                GitHub
              </Button>
            )}
          </div>
        </div>
      </Card>
    </motion.div>
  );
}