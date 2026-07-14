import { motion } from "framer-motion";
import { Github, Linkedin, Menu, X } from "lucide-react";
import { useState } from "react";

const links = [
  { href: "#home", label: "Home" },
  { href: "#projects", label: "Projects" },
  { href: "#skills", label: "Skills" },
  { href: "#content", label: "Content" },
  { href: "#awards", label: "Awards" },
  { href: "#contact", label: "Contact" },
];

export function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <motion.header
      initial={{ y: -40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="fixed top-4 left-1/2 z-50 w-[calc(100%-2rem)] max-w-6xl -translate-x-1/2"
    >
      <nav className="glass flex items-center justify-between rounded-2xl px-5 py-3">
        <a href="#home" className="font-mono text-sm font-bold tracking-tight">
          <span className="text-gradient">&lt;SSH/&gt;</span>
        </a>

        <ul className="hidden items-center gap-7 md:flex">
          {links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className="text-sm text-muted-foreground transition-colors hover:text-accent"
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="hidden items-center gap-3 md:flex">
          <a
            href="https://github.com/sheikhsarafathossain"
            target="_blank"
            rel="noreferrer"
            className="text-muted-foreground transition-colors hover:text-accent"
            aria-label="GitHub"
          >
            <Github className="h-5 w-5" />
          </a>
          <a
            href="https://linkedin.com/in/sheikhsarafathossain"
            target="_blank"
            rel="noreferrer"
            className="text-muted-foreground transition-colors hover:text-accent"
            aria-label="LinkedIn"
          >
            <Linkedin className="h-5 w-5" />
          </a>
        </div>

        <button
          className="md:hidden text-foreground"
          onClick={() => setOpen((v) => !v)}
          aria-label="Toggle menu"
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </nav>

      {open && (
        <motion.div
          initial={{ opacity: 0, y: -8 }}
          animate={{ opacity: 1, y: 0 }}
          className="glass mt-2 flex flex-col gap-1 rounded-2xl p-4 md:hidden"
        >
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="rounded-lg px-3 py-2 text-sm text-muted-foreground hover:bg-muted hover:text-accent"
            >
              {l.label}
            </a>
          ))}
          <div className="mt-2 flex gap-4 border-t border-border pt-3 px-3">
            <a href="https://github.com/sheikhsarafathossain" target="_blank" rel="noreferrer" aria-label="GitHub"><Github className="h-5 w-5" /></a>
            <a href="https://linkedin.com/in/sheikhsarafathossain" target="_blank" rel="noreferrer" aria-label="LinkedIn"><Linkedin className="h-5 w-5" /></a>
          </div>
        </motion.div>
      )}
    </motion.header>
  );
}
