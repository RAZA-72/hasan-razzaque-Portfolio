import { motion } from "framer-motion";

import { Section, Container } from "@layout";
import { SectionHeading, Card, Button, Icon } from "@ui";

import contactInfo, { socialLinks } from "@data/contact";
import { useState } from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";

export default function Contact() {
  const [loading, setLoading] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    try {
      setLoading(true);

      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      const json = await res.json().catch(() => ({}));

      if (!res.ok) {
        throw new Error(json.message || "Request failed");
      }

      toast.success("Message sent successfully!");

      reset();
    } catch (error) {
      console.error(error);

      toast.error(error.message || "Failed to send message.");
    } finally {
      setLoading(false);
    }
  };
  return (
    <Section id="contact">
      <Container>
        <SectionHeading
          label="CONTACT"
          title="Let's Build Something Great"
          description="Whether you have a project, job opportunity, or just want to connect, I'd love to hear from you."
        />

        <div className="grid gap-8 lg:grid-cols-2 lg:gap-10">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <Card className="space-y-4 p-5 sm:space-y-6 sm:p-8">
              {contactInfo.map((item) => (
                <a
                  key={item.title}
                  href={item.href}
                  className="flex items-center gap-5 rounded-xl border border-white/5 p-3 transition sm:p-4 hover:border-blue-500/40"
                >
                  <Icon icon={item.icon} variant="glass" />

                  <div>
                    <p className="text-sm text-zinc-500">{item.title}</p>

                    <h4 className={`text-white ${item.title === "Email" ? "break-all sm:break-normal" : ""}`}>{item.value}</h4>
                  </div>
                </a>
              ))}

              <div className="flex gap-4 pt-6">
                {socialLinks.map((social) => (
                  <a
                    key={social.name}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Icon icon={social.icon} variant="secondary" />
                  </a>
                ))}
              </div>
            </Card>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <Card
              as="form"
              onSubmit={handleSubmit(onSubmit)}
              className="space-y-4 p-5 sm:space-y-5 sm:p-8"
            >
              <input
                type="text"
                placeholder="Your Name"
                className="w-full rounded-xl border border-white/10 bg-zinc-900 px-4 py-3 text-base text-white outline-none focus:border-blue-500"
                {...register("name", {
                  required: "Name is required",
                })}
              />
              {errors.name && (
                <p className="text-sm text-red-500">{errors.name.message}</p>
              )}

              <input
                type="email"
                autoComplete="email"
                placeholder="Email Address"
                className="w-full rounded-xl border border-white/10 bg-zinc-900 px-4 py-3 text-base text-white outline-none focus:border-blue-500"
                {...register("email", {
                  required: "Email is required",
                  pattern: {
                    value: /^\S+@\S+\.\S+$/,
                    message: "Invalid email",
                  },
                })}
              />
              {errors.email && (
                <p className="text-sm text-red-500">{errors.email.message}</p>
              )}

              <input
                type="text"
                placeholder="Subject"
                className="w-full rounded-xl border border-white/10 bg-zinc-900 px-4 py-3 text-base text-white outline-none focus:border-blue-500"
                {...register("subject", {
                  required: "Subject is required",
                })}
              />
              {errors.subject && (
                <p className="text-sm text-red-500">{errors.subject.message}</p>
              )}

              <textarea
                rows={6}
                placeholder="Your Message"
                className="w-full rounded-xl border border-white/10 bg-zinc-900 px-4 py-3 text-base text-white outline-none focus:border-blue-500"
                {...register("message", {
                  required: "Message is required",
                })}
              />
              {errors.message && (
                <p className="text-sm text-red-500">{errors.message.message}</p>
              )}

              {/* honeypot — hidden from humans, bots fill it */}
              <input
                type="text"
                tabIndex={-1}
                autoComplete="off"
                aria-hidden="true"
                className="hidden"
                {...register("website")}
              />

              <Button type="submit" className="w-full" disabled={loading}>
                {loading ? "Sending..." : "Send Message"}
              </Button>
            </Card>
          </motion.div>
        </div>
      </Container>
    </Section>
  );
}
