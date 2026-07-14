import { motion } from "framer-motion";
import type { ReactNode } from "react";

export function Section({
  id,
  eyebrow,
  title,
  description,
  children,
}: {
  id?: string;
  eyebrow?: string;
  title: string;
  description?: string;
  children: ReactNode;
}) {
  return (
    <section id={id} className="relative px-4 py-24 sm:py-32">
      <div className="mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="mb-12 max-w-2xl"
        >
          {eyebrow && (
            <p className="mb-3 font-mono text-xs uppercase tracking-widest text-accent">
              // {eyebrow}
            </p>
          )}
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
            {title}
          </h2>
          {description && (
            <p className="mt-4 text-muted-foreground">{description}</p>
          )}
        </motion.div>
        {children}
      </div>
    </section>
  );
}
