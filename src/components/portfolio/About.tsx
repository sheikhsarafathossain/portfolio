import { motion } from "framer-motion";
import { GraduationCap } from "lucide-react";
import { Section } from "./Section";

const timeline = [
  {
    year: "2022 — 2026",
    title: "B.Sc. in Computer Science & Engineering",
    place: "East West University",
    detail: "CGPA: 3.62\u00a0",
  },
  {
    year: "2019 — 2021",
    title: "Higher Secondary Certificate",
    place: "KC Model School & College",
    detail: "\n",
  },
  {
    year: "2017 — 2019",
    title: "Secondary School Certificate",
    place: "KC Model School & College",
    detail: "\n",
  },
];

export function About() {
  return (
    <Section id="about" eyebrow="About" title="A little about me & my journey">
      <div className="grid gap-10 lg:grid-cols-5">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="glass rounded-2xl p-8 lg:col-span-2"
        >
          <p className="text-muted-foreground leading-relaxed">
            I'm a Software Engineer from Dhaka who loves shipping thoughtful products. My focus is
            <span className="text-foreground font-medium"> Android development </span>
            and
            <span className="text-foreground font-medium"> full-stack web engineering</span>. I hold a
            B.Sc. in Computer Science and Engineering from <span className="text-accent">East West University</span>
            {" "}(CGPA 3.62).
          </p>
          <p className="mt-4 text-muted-foreground leading-relaxed">
            Beyond building, I love teaching — breaking down DSA and software engineering
            fundamentals so more people can enjoy the craft.
          </p>
        </motion.div>

        <div className="lg:col-span-3">
          <ol className="relative ml-3 border-l border-border">
            {timeline.map((t, i) => (
              <motion.li
                key={t.title}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="mb-8 ml-6 last:mb-0"
              >
                <span className="glow absolute -left-4 flex h-8 w-8 items-center justify-center rounded-full bg-accent text-accent-foreground">
                  <GraduationCap className="h-4 w-4" />
                </span>
                <div className="glass rounded-xl p-5">
                  <p className="font-mono text-xs text-accent">{t.year}</p>
                  <h3 className="mt-1 text-lg font-semibold">{t.title}</h3>
                  <p className="text-sm text-muted-foreground">{t.place}</p>
                  <p className="mt-2 text-sm text-muted-foreground">{t.detail}</p>
                </div>
              </motion.li>
            ))}
          </ol>
        </div>
      </div>
    </Section>
  );
}
