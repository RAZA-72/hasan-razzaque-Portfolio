import { motion } from "framer-motion";
import { FiCheckCircle } from "react-icons/fi";

import { Card } from "@ui";

export default function FeaturesList({ features = [] }) {
  return (
    <Card className="mt-16 rounded-3xl border border-white/10 bg-zinc-900/60 p-6 backdrop-blur-xl sm:p-8">
      <h2 className="text-2xl font-bold text-white sm:text-3xl">
        Key Features
      </h2>

      <p className="mt-3 text-zinc-400">
        Core functionalities implemented in this project.
      </p>

      <div className="mt-10 grid gap-5 md:grid-cols-2">
        {features.map((feature, index) => (
          <motion.div
            key={feature}
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              delay: index * 0.08,
              duration: 0.4,
            }}
            viewport={{ once: true }}
            className="flex items-start gap-3 rounded-xl border border-white/5 bg-white/5 p-4 transition hover:border-blue-500/30 hover:bg-white/10"
          >
            <FiCheckCircle
              className="mt-1 text-blue-400"
              size={20}
            />

            <span className="text-zinc-200">
              {feature}
            </span>
          </motion.div>
        ))}
      </div>
    </Card>
  );
}