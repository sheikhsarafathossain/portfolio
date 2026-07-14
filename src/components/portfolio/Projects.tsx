import { motion } from "framer-motion";
import { Github, ExternalLink, Smartphone, Globe, Gamepad2 } from "lucide-react";
import { useState } from "react";
import { Section } from "./Section";

type Category = "Android" | "Web" | "Games";

const projects: {
  title: string;
  description: string;
  tags: string[];
  category: Category;
  gradient: string;
  icon: typeof Smartphone;
  github?: string;
  demo?: string;
}[] = [
  {
    title: "QuickDoc",
    description:
      "Full-stack Android app connecting patients with doctors — booking, profiles, and real-time updates.",
    tags: ["Java", "Firebase", "Android"],
    category: "Android",
    gradient: "from-cyan-500/30 to-blue-500/10",
    icon: Smartphone,
    github: "https://github.com/sheikhsarafathossain/QuickDoc.git",
    demo: "https://github.com/sheikhsarafathossain/QuickDoc/blob/main/app/release/app-release.apk",
  },
  {
    title: "Help Lagbe",
    description:
      "Service marketplace connecting people with trusted local providers across categories.",
    tags: ["PHP", "SQLite", "Tailwind"],
    category: "Web",
    gradient: "from-emerald-500/30 to-teal-500/10",
    icon: Globe,
    github: "https://github.com/sheikhsarafathossain/helplagbe.git",
  },
  {
    title: "Speedo Wheels",
    description:
      "Lightweight WebView Android app for a car rental platform — fast, native shell around a web experience.",
    tags: ["Kotlin", "WebView", "Android"],
    category: "Android",
    gradient: "from-purple-500/30 to-fuchsia-500/10",
    icon: Smartphone,
    github: "https://github.com/sheikhsarafathossain/SpeedoWheels.git",
    demo: "https://github.com/sheikhsarafathossain/SpeedoWheels/blob/main/app-release.apk",
  },
  {
    title: "PoshuPakhi",
    description:
      "E-commerce platform for pet supplies with catalog, cart, and admin dashboard.",
    tags: ["PHP", "Bootstrap", "SQLite"],
    category: "Web",
    gradient: "from-orange-500/30 to-amber-500/10",
    icon: Globe,
    github: "https://github.com/sheikhsarafathossain/PoshuPakhi.git",
  },
  {
    title: "Simon Game",
    description:
      "Classic memory game recreated in the browser with animations and sound.",
    tags: ["JavaScript", "HTML", "CSS"],
    category: "Games",
    gradient: "from-pink-500/30 to-rose-500/10",
    icon: Gamepad2,
    github: "https://github.com/sheikhsarafathossain/The-Simon-Game.git",
    demo: "https://sheikhsarafathossain.github.io/The-Simon-Game/",
  },
  {
    title: "Drum Kit",
    description:
      "Interactive browser drum kit with keyboard-mapped sounds and visual feedback.",
    tags: ["JavaScript", "HTML", "CSS"],
    category: "Games",
    gradient: "from-indigo-500/30 to-violet-500/10",
    icon: Gamepad2,
    github: "https://github.com/sheikhsarafathossain/DrumKit.git",
    demo: "https://sheikhsarafathossain.github.io/DrumKit/",
  },
];

const filters = ["All", "Android", "Web", "Games"] as const;

export function Projects() {
  const [active, setActive] = useState<(typeof filters)[number]>("All");
  const filtered = active === "All" ? projects : projects.filter((p) => p.category === active);

  return (
    <Section
      id="projects"
      eyebrow="Projects"
      title="Things I've built"
      description="A selection of Android apps, full-stack web experiences, and playful browser games."
    >
      <div className="mb-10 flex flex-wrap gap-2">
        {filters.map((f) => (
          <button
            key={f}
            onClick={() => setActive(f)}
            className={`rounded-full px-4 py-1.5 text-sm font-medium transition-all ${
              active === f
                ? "bg-accent text-accent-foreground glow"
                : "glass text-muted-foreground hover:text-accent"
            }`}
          >
            {f}
          </button>
        ))}
      </div>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {filtered.map((p, i) => {
          const Icon = p.icon;
          return (
            <motion.article
              key={p.title}
              layout
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.05 }}
              whileHover={{ y: -6 }}
              className="glass group relative overflow-hidden rounded-2xl p-6 transition-all hover:border-accent"
            >
              <div className={`absolute inset-0 -z-10 bg-gradient-to-br ${p.gradient} opacity-40 transition-opacity group-hover:opacity-70`} />
              <div className="mb-4 flex items-center justify-between">
                <div className="glass flex h-10 w-10 items-center justify-center rounded-xl">
                  <Icon className="h-5 w-5 text-accent" />
                </div>
                <span className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground">
                  {p.category}
                </span>
              </div>
              <h3 className="text-xl font-semibold group-hover:text-accent">{p.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{p.description}</p>
              <div className="mt-4 flex flex-wrap gap-2">
                {p.tags.map((t) => (
                  <span
                    key={t}
                    className="rounded-md bg-muted/60 px-2 py-0.5 font-mono text-[11px] text-muted-foreground"
                  >
                    {t}
                  </span>
                ))}
              </div>
              <div className="mt-5 flex items-center gap-3 border-t border-border pt-4">
                {p.github && (
                  <a href={p.github} target="_blank" rel="noreferrer" className="text-muted-foreground hover:text-accent" aria-label="GitHub">
                    <Github className="h-4 w-4" />
                  </a>
                )}
                {p.demo && (
                  <a href={p.demo} target="_blank" rel="noreferrer" className="text-muted-foreground hover:text-accent" aria-label="Live demo">
                    <ExternalLink className="h-4 w-4" />
                  </a>
                )}
              </div>
            </motion.article>
          );
        })}
      </div>
    </Section>
  );
}
