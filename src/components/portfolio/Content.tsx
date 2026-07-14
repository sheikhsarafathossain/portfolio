import { motion } from "framer-motion";
import { BookOpen, PlayCircle, PenSquare } from "lucide-react";
import { Section } from "./Section";

const items = [
  {
    icon: BookOpen,
    tag: "Article · Coming soon",
    title: "Cracking DSA: A Beginner's Roadmap",
    desc: "A structured, no-fluff path into data structures and algorithms — from arrays to graphs.",
  },
  {
    icon: PlayCircle,
    tag: "Video · In production",
    title: "Build Your First Android App in Java",
    desc: "Hands-on tutorial covering activities, Firebase integration, and shipping to the Play Store.",
  },
  {
    icon: PenSquare,
    tag: "Article · Draft",
    title: "Clean Architecture for Full-Stack Web",
    desc: "Design principles that keep your PHP and JavaScript projects maintainable at scale.",
  },
];

export function Content() {
  return (
    <Section
      id="content"
      eyebrow="Content"
      title="Tech Insights & Tutorials"
      description="I love turning what I learn into resources — teaching DSA and software engineering fundamentals."
    >
      <div className="grid gap-6 md:grid-cols-3">
        {items.map((it, i) => {
          const Icon = it.icon;
          return (
            <motion.div
              key={it.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="glass group rounded-2xl p-6 transition-all hover:border-accent hover:-translate-y-1"
            >
              <div className="glass mb-4 flex h-11 w-11 items-center justify-center rounded-xl">
                <Icon className="h-5 w-5 text-accent" />
              </div>
              <p className="font-mono text-[11px] uppercase tracking-widest text-muted-foreground">
                {it.tag}
              </p>
              <h3 className="mt-2 text-lg font-semibold group-hover:text-accent">{it.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{it.desc}</p>
            </motion.div>
          );
        })}
      </div>
    </Section>
  );
}
