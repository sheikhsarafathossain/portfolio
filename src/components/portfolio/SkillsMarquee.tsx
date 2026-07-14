const skills = [
  "JavaScript",
  "Java",
  "Kotlin",
  "PHP",
  "React",
  "Tailwind CSS",
  "SQLite",
  "Firebase",
  "Android Studio",
  "Git",
  "HTML",
  "CSS",
];

export function SkillsMarquee() {
  const row = [...skills, ...skills];
  return (
    <section id="skills" className="relative overflow-hidden py-20">
      <div className="mx-auto mb-10 max-w-6xl px-4">
        <p className="mb-3 font-mono text-xs uppercase tracking-widest text-accent">// Skills</p>
        <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
          Tools I build with
        </h2>
      </div>

      <div className="relative">
        <div className="pointer-events-none absolute left-0 top-0 z-10 h-full w-24 bg-gradient-to-r from-background to-transparent" />
        <div className="pointer-events-none absolute right-0 top-0 z-10 h-full w-24 bg-gradient-to-l from-background to-transparent" />
        <div className="animate-marquee flex w-max gap-4">
          {row.map((s, i) => (
            <div
              key={`${s}-${i}`}
              className="glass flex items-center gap-3 rounded-2xl px-6 py-4"
            >
              <span className="h-2 w-2 rounded-full bg-accent glow" />
              <span className="whitespace-nowrap font-mono text-sm font-medium">{s}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
