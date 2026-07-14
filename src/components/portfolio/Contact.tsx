import { motion } from "framer-motion";
import { Github, Linkedin, Mail, Phone, Send } from "lucide-react";
import { Section } from "./Section";

export function Contact() {
  return (
    <>
      <Section
        id="contact"
        eyebrow="Contact"
        title="Let's build something together"
        description="Have a project, opportunity, or just want to say hi? My inbox is always open."
      >
        <div className="grid gap-8 lg:grid-cols-5">
          <div className="lg:col-span-2 space-y-3">
            <a
              href="mailto:sheikhsarafathossain@gmail.com"
              className="glass group flex items-center gap-4 rounded-2xl p-5 transition-all hover:border-accent"
            >
              <div className="glass flex h-11 w-11 items-center justify-center rounded-xl">
                <Mail className="h-5 w-5 text-accent" />
              </div>
              <div className="min-w-0">
                <p className="text-xs text-muted-foreground">Email</p>
                <p className="truncate text-sm font-medium group-hover:text-accent">
                  sheikhsarafathossain@gmail.com
                </p>
              </div>
            </a>
            <a
              href="tel:+8801627400607"
              className="glass group flex items-center gap-4 rounded-2xl p-5 transition-all hover:border-accent"
            >
              <div className="glass flex h-11 w-11 items-center justify-center rounded-xl">
                <Phone className="h-5 w-5 text-accent" />
              </div>
              <div>
                <p className="text-xs text-muted-foreground">Phone</p>
                <p className="text-sm font-medium group-hover:text-accent">+880 1627 400607</p>
              </div>
            </a>
          </div>

          <motion.form
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            onSubmit={(e) => e.preventDefault()}
            className="glass lg:col-span-3 space-y-4 rounded-2xl p-6"
          >
            <div className="grid gap-4 sm:grid-cols-2">
              <div>
                <label className="mb-1.5 block text-xs font-medium text-muted-foreground">Name</label>
                <input
                  type="text"
                  className="w-full rounded-lg border border-border bg-background/40 px-3 py-2.5 text-sm outline-none transition-colors focus:border-accent"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label className="mb-1.5 block text-xs font-medium text-muted-foreground">Email</label>
                <input
                  type="email"
                  className="w-full rounded-lg border border-border bg-background/40 px-3 py-2.5 text-sm outline-none transition-colors focus:border-accent"
                  placeholder="you@example.com"
                />
              </div>
            </div>
            <div>
              <label className="mb-1.5 block text-xs font-medium text-muted-foreground">Message</label>
              <textarea
                rows={5}
                className="w-full resize-none rounded-lg border border-border bg-background/40 px-3 py-2.5 text-sm outline-none transition-colors focus:border-accent"
                placeholder="Tell me about your project..."
              />
            </div>
            <button
              type="submit"
              className="glow inline-flex items-center gap-2 rounded-full bg-accent px-5 py-2.5 text-sm font-semibold text-accent-foreground transition-transform hover:scale-105"
            >
              Send message
              <Send className="h-4 w-4" />
            </button>
          </motion.form>
        </div>
      </Section>

      <footer className="border-t border-border px-4 py-8">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 sm:flex-row">
          <p className="text-xs text-muted-foreground">
            © {new Date().getFullYear()} Sheikh Sarafat Hossain. Crafted with care.
          </p>
          <div className="flex items-center gap-4">
            <a href="https://github.com/sheikhsarafathossain" target="_blank" rel="noreferrer" aria-label="GitHub" className="text-muted-foreground hover:text-accent">
              <Github className="h-4 w-4" />
            </a>
            <a href="https://linkedin.com/in/sheikhsarafathossain" target="_blank" rel="noreferrer" aria-label="LinkedIn" className="text-muted-foreground hover:text-accent">
              <Linkedin className="h-4 w-4" />
            </a>
            <a href="mailto:sheikhsarafathossain@gmail.com" aria-label="Email" className="text-muted-foreground hover:text-accent">
              <Mail className="h-4 w-4" />
            </a>
          </div>
        </div>
      </footer>
    </>
  );
}
