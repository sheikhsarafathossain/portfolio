import { motion } from "framer-motion";
import { ArrowRight, Download } from "lucide-react";
import { useTypewriter } from "@/hooks/use-typewriter";
import resumeAsset from "@/assets/resume.pdf.asset.json";

export function Hero() {
  const typed = useTypewriter([
    "Software Engineer",
    "Android Developer",
    "Full-Stack Web Developer",
    "Tech Educator",
  ]);

  return (
    <section id="home" className="relative flex min-h-screen items-center justify-center overflow-hidden px-4 pt-24">
      {/* Animated background blobs */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="animate-float-slow absolute -top-24 -left-24 h-96 w-96 rounded-full bg-accent/20 blur-3xl" />
        <div
          className="animate-float-slow absolute top-1/3 -right-24 h-96 w-96 rounded-full blur-3xl"
          style={{ background: "oklch(0.6 0.2 300 / 0.15)", animationDelay: "-4s" }}
        />
        <div
          className="animate-float-slow absolute bottom-0 left-1/3 h-80 w-80 rounded-full bg-accent/10 blur-3xl"
          style={{ animationDelay: "-8s" }}
        />
        {/* Grid overlay */}
        <div
          className="absolute inset-0 opacity-[0.06]"
          style={{
            backgroundImage:
              "linear-gradient(oklch(1 0 0) 1px, transparent 1px), linear-gradient(90deg, oklch(1 0 0) 1px, transparent 1px)",
            backgroundSize: "60px 60px",
            maskImage: "radial-gradient(ellipse at center, black 40%, transparent 75%)",
          }}
        />
      </div>

      <div className="mx-auto max-w-4xl text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="glass mb-6 inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-xs text-muted-foreground"
        >
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-75" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-accent" />
          </span>
          Available for opportunities
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="text-4xl font-bold leading-tight tracking-tight sm:text-6xl md:text-7xl"
        >
          Hi, I'm <span className="text-gradient">Sheikh Sarafat Hossain.</span>
        </motion.h1>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="mt-6 flex items-center justify-center gap-1 font-mono text-lg text-muted-foreground sm:text-2xl"
        >
          <span className="text-accent">&gt;</span>
          <span className="text-foreground">{typed}</span>
          <span className="animate-blink ml-0.5 inline-block h-6 w-[2px] bg-accent sm:h-7" />
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.4 }}
          className="mx-auto mt-6 max-w-2xl text-base text-muted-foreground sm:text-lg"
        >
          I craft delightful Android experiences and full-stack web applications — turning complex ideas
          into clean, performant products.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.55 }}
          className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row"
        >
          <a
            href="#projects"
            className="glow group inline-flex items-center gap-2 rounded-full bg-accent px-6 py-3 text-sm font-semibold text-accent-foreground transition-transform hover:scale-105"
          >
            View My Work
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </a>
          <a
            href={resumeAsset.url}
            download="Sheikh_Sarafat_Hossain_Resume.pdf"
            className="glass inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-semibold text-foreground transition-colors hover:border-accent hover:text-accent"
          >
            <Download className="h-4 w-4" />
            Download Resume
          </a>
        </motion.div>
      </div>
    </section>
  );
}
