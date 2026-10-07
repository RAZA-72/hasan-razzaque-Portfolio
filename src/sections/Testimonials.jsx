import { motion } from "framer-motion";
import { FiStar } from "react-icons/fi";

import { Section, Container } from "@layout";
import { SectionHeading, Card } from "@ui";
import testimonials from "@data/testimonials";

export default function Testimonials() {
  return (
    <Section id="testimonials">
      <Container>
        <SectionHeading
          label="TESTIMONIALS"
          title="What People Say"
          description="Feedback from colleagues and clients I've had the opportunity to work with."
        />

        <div className="grid gap-8 lg:grid-cols-2">
          {testimonials.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.5,
                delay: index * 0.15,
              }}
            >
              <Card className="h-full p-8">
                <div className="mb-6 flex gap-1 text-yellow-400">
                  {[...Array(5)].map((_, i) => (
                    <FiStar key={i} className="fill-current" />
                  ))}
                </div>

                <p className="leading-8 text-zinc-300">
                  "{item.review}"
                </p>

                <div className="mt-8 flex items-center gap-4">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="h-14 w-14 rounded-full object-cover"
                  />

                  <div>
                    <h4 className="font-semibold text-white">
                      {item.name}
                    </h4>

                    <p className="text-sm text-zinc-400">
                      {item.designation} • {item.company}
                    </p>
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </Container>
    </Section>
  );
}