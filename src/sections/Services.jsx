import { motion } from "framer-motion";
import {
  FiCode,
  FiMail,
  FiDatabase,
  FiSmartphone,
  FiCloud,
  FiLayers,
} from "react-icons/fi";

import { Section, Container } from "@layout";
import { SectionHeading, Card, Icon } from "@ui";

const services = [
  {
    icon: FiLayers,
    title: "Internal Custom Software",
    description:
      "Secure internal systems for organisations like DRDO using Core PHP and CodeIgniter 4, with role-based access and admin panels.",
  },
  {
    icon: FiCode,
    title: "Web Application Development",
    description:
      "Modern, fast applications with React, Node.js, Laravel and CodeIgniter 4.",
  },
  {
    icon: FiDatabase,
    title: "Backend & REST APIs",
    description:
      "REST APIs, JWT authentication, MySQL, PostgreSQL, MongoDB and Redis caching.",
  },
  {
    icon: FiMail,
    title: "SMTP Email Integration",
    description:
      "Authenticated SMTP mail with app passwords stored safely in .env — contact forms, alerts and notifications.",
  },
  {
    icon: FiSmartphone,
    title: "Responsive UI",
    description:
      "Mobile-first interfaces that work smoothly on phones, tablets and desktops.",
  },
  {
    icon: FiCloud,
    title: "Deployment",
    description:
      "Production deployment with Docker, Linux servers and environment-based configuration.",
  },
];

export default function Services() {
  return (
    <Section id="services">
      <Container>
        <SectionHeading
          label="SERVICES"
          title="What I Can Build"
          description="Reliable, secure software for organisations, startups and businesses."
        />

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.5,
                delay: index * 0.1,
              }}
            >
              <Card className="h-full p-6 sm:p-8">
                <Icon
                  icon={service.icon}
                  size="lg"
                  variant="glass"
                />

                <h3 className="mt-6 text-xl font-semibold text-white">
                  {service.title}
                </h3>

                <p className="mt-3 text-zinc-400 leading-7">
                  {service.description}
                </p>
              </Card>
            </motion.div>
          ))}
        </div>
      </Container>
    </Section>
  );
}