import MainLayout from "@layouts/MainLayout";
import { Link, useParams } from "react-router-dom";
import { FiArrowLeft, FiArrowUpRight, FiGithub } from "react-icons/fi";

import { Section, Container } from "@layout";
import { Badge, Button } from "@ui";

import projects from "@data/projects";
import { ProjectInfo, FeaturesList } from "@components/project";

export default function ProjectDetails() {
  const { slug } = useParams();

  const project = projects.find((item) => item.slug === slug);

  if (!project) {
    return (
      <Section className="min-h-screen flex items-center">
        <Container>
          <div className="text-center">
            <h1 className="text-4xl font-bold text-white">Project Not Found</h1>

            <p className="mt-4 text-zinc-400">
              The project you're looking for doesn't exist.
            </p>

            <Link
              to="/"
              className="mt-8 inline-flex items-center text-blue-500 hover:text-blue-400"
            >
              <FiArrowLeft className="mr-2" />
              Back to Home
            </Link>
          </div>
        </Container>
      </Section>
    );
  }

  return (
    <MainLayout>
      <Section className="pt-28">
        <Container>
          {/* Back Button */}
          <Link
            to="/"
            className="inline-flex items-center text-zinc-400 transition hover:text-white"
          >
            <FiArrowLeft className="mr-2" />
            Back
          </Link>

          {/* Hero */}
          <div className="mt-8 grid gap-8 lg:grid-cols-2 lg:gap-12">
            <div>
              <img
                src={project.image}
                alt={project.title}
                className="w-full rounded-3xl border border-white/10"
              />
            </div>

            <div>
              <Badge>{project.category}</Badge>

              <h1 className="mt-6 text-3xl font-bold text-white sm:text-5xl">
                {project.title}
              </h1>

              <p className="mt-6 leading-8 text-zinc-400">
                {project.description}
              </p>

              <div className="mt-8 flex flex-wrap gap-2">
                {project.technologies.map((tech) => (
                  <Badge key={tech} variant="secondary">
                    {tech}
                  </Badge>
                ))}
              </div>

              <div className="mt-10 flex flex-wrap gap-4">
                {project.live && (
                  <Button as="a" href={project.live} target="_blank">
                    Live Demo
                    <FiArrowUpRight className="ml-2" />
                  </Button>
                )}

                {project.github && (
                  <Button
                    as="a"
                    href={project.github}
                    variant="secondary"
                    target="_blank"
                  >
                    <FiGithub className="mr-2" />
                    GitHub
                  </Button>
                )}
              </div>
            </div>
          </div>

          {/* Description */}
          <div className="mt-20">
            <h2 className="text-3xl font-bold text-white">
              About this project
            </h2>

            <p className="mt-6 max-w-4xl leading-8 text-zinc-400">
              {project.description}
            </p>
          </div>

          {project.confidential && (
            <div className="font-code mt-10 rounded-xl border border-amber-500/30 bg-amber-500/10 p-4 text-sm text-amber-300">
              Note: This is an internal organisational system. Source code,
              screenshots and live access are not public.
            </div>
          )}

          <ProjectInfo project={project} />
          <FeaturesList features={project.features} />

          {project.challenges?.length > 0 && (
            <div className="mt-16 rounded-3xl border border-white/10 bg-zinc-900/60 p-6 sm:p-8">
              <h2 className="text-2xl font-bold text-white sm:text-3xl">
                Technical Challenges
              </h2>
              <ul className="mt-6 space-y-3 text-zinc-300">
                {project.challenges.map((c) => (
                  <li key={c} className="flex gap-3">
                    <span className="mt-2.5 h-2 w-2 shrink-0 rounded-full bg-blue-500" />
                    <span>{c}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </Container>
      </Section>
    </MainLayout>
  );
}
