import { motion } from "framer-motion";
import { Award, Trophy, Users } from "lucide-react";
import { Section } from "./Section";

const items = [
  {
    icon: Award,
    title: "Medha-Lalon Scholarship",
    meta: "Fall 2024",
    desc: "Awarded for outstanding academic performance.",
  },
  {
    icon: Award,
    title: "Dean's List Scholarship",
    meta: "Fall 2025",
    desc: "Recognized among top-performing students of the semester.",
  },
  {
    icon: Trophy,
    title: "2nd Position · FIFA 24",
    meta: "CSE Fest 2024",
    desc: "Runner-up in the university-wide gaming tournament.",
  },
  {
    icon: Users,
    title: "Computer Programming Club",
    meta: "Active Member",
    desc: "Contributing to workshops, contests, and peer learning sessions.",
  },
];

export function Awards() {
  return (
    <Section
      id="awards"
      eyebrow="Honors"
      title="Honors & extracurriculars"
    >
      <div className="grid gap-4 sm:grid-cols-2">
        {items.map((it, i) => {
          const Icon = it.icon;
          return (
            <motion.div
              key={it.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.05 }}
              className="glass group flex items-start gap-4 rounded-2xl p-5 transition-all hover:border-accent"
            >
              <div className="glass shrink-0 flex h-11 w-11 items-center justify-center rounded-xl">
                <Icon className="h-5 w-5 text-accent" />
              </div>
              <div className="min-w-0">
                <div className="flex flex-wrap items-baseline gap-2">
                  <h3 className="font-semibold">{it.title}</h3>
                  <span className="font-mono text-[11px] text-accent">{it.meta}</span>
                </div>
                <p className="mt-1 text-sm text-muted-foreground">{it.desc}</p>
              </div>
            </motion.div>
          );
        })}
      </div>
    </Section>
  );
}
