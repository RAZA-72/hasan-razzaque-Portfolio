import { motion } from "framer-motion";
import { FiShield, FiBriefcase, FiCode } from "react-icons/fi";

import { Section, Container } from "@layout";
import {
  SectionHeading,
  Paragraph,
  Badge,
  Icon,
} from "@ui";

const skills = [
  "Core PHP",
  "CodeIgniter 4",
  "Laravel",
  "Node.js",
  "Express.js",
  "React",
  "MySQL",
  "MongoDB",
  "PostgreSQL",
  "Redis",
  "REST API",
  "JWT Auth",
  "SMTP / Nodemailer",
  "Git",
  "Docker",
];

const highlights = [
  {
    icon: FiShield,
    title: "DRDO Internal Software",
    text: "Secure custom software built with Core PHP and CodeIgniter 4.",
  },
  {
    icon: FiBriefcase,
    title: "2+ Years Experience",
    text: "Production applications for travel, NGO and microfinance domains.",
  },
  {
    icon: FiCode,
    title: "MERN Stack Expert",
    text: "MongoDB, Express.js, React and Node.js — frontend to deployment.",
  },
];

export default function About() {
  return (
    <Section id="about">
      <Container>
        <SectionHeading
          label="ABOUT ME"
          title="Turning Ideas into Scalable Digital Products"
          description="MERN stack expert building secure internal software and modern web applications with React, Node.js, Core PHP and CodeIgniter 4."
        />

        <div className="grid gap-16 lg:grid-cols-2">

          {/* Left */}

          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="font-code overflow-hidden rounded-2xl border border-white/10 bg-zinc-950 text-xs leading-6 sm:text-sm">
              <div className="flex items-center gap-1.5 border-b border-white/10 bg-zinc-900 px-4 py-3">
                <span className="h-2.5 w-2.5 rounded-full bg-red-500/80" />
                <span className="h-2.5 w-2.5 rounded-full bg-yellow-500/80" />
                <span className="h-2.5 w-2.5 rounded-full bg-green-500/80" />
                <span className="ml-3 text-zinc-500">developer.php</span>
              </div>
              <pre className="overflow-x-auto p-4 text-zinc-300 sm:p-6"><code>{`<?php
$developer = [
  'name'    => 'Hasan Md Razzaque',
  'role'    => 'MERN Stack Expert',
  'project' => 'DRDO Internal Software',
  'stack'   => ['MongoDB', 'Express',
                'React', 'Node.js'],
  'also'    => ['Core PHP', 'CI4', 'Laravel'],
  'mail'    => 'SMTP (.env secured)',
  'ui'      => 'Responsive, mobile-first',
  'cities'  => 'Surat, Delhi, Noida, Pune',
];`}</code></pre>
            </div>
          </motion.div>

          {/* Right */}

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="flex flex-col"
          >
            <Paragraph>
              I build secure, maintainable software — from internal custom
              systems for DRDO on Core PHP and CodeIgniter 4, to MERN and
              Laravel platforms with role-based dashboards, payment gateways
              and automated SMTP email. I care about clean architecture,
              proper configuration through environment files, and software
              that works well on every device.
            </Paragraph>

            <div className="mt-10 space-y-6">
              {highlights.map((item) => (
                <div
                  key={item.title}
                  className="flex items-start gap-4"
                >
                  <Icon
                    icon={item.icon}
                    variant="glass"
                  />

                  <div>
                    <h4 className="font-semibold text-white">
                      {item.title}
                    </h4>

                    <p className="mt-1 text-zinc-400">
                      {item.text}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-10 flex flex-wrap gap-3">
              {skills.map((skill) => (
                <Badge
                  key={skill}
                  variant="secondary"
                >
                  {skill}
                </Badge>
              ))}
            </div>


          </motion.div>

        </div>
      </Container>
    </Section>
  );
}