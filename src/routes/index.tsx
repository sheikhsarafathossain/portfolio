import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/portfolio/Navbar";
import { Hero } from "@/components/portfolio/Hero";
import { About } from "@/components/portfolio/About";
import { Projects } from "@/components/portfolio/Projects";
import { SkillsMarquee } from "@/components/portfolio/SkillsMarquee";
import { Content } from "@/components/portfolio/Content";
import { Awards } from "@/components/portfolio/Awards";
import { Contact } from "@/components/portfolio/Contact";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: "Sheikh Sarafat Hossain — Software Engineer" },
      {
        name: "description",
        content:
          "Portfolio of Sheikh Sarafat Hossain — Software Engineer specializing in Android and full-stack web development.",
      },
      { property: "og:title", content: "Sheikh Sarafat Hossain — Software Engineer" },
      {
        property: "og:description",
        content:
          "Portfolio of Sheikh Sarafat Hossain — Software Engineer specializing in Android and full-stack web development.",
      },
    ],
  }),
});

function Index() {
  return (
    <main className="relative">
      <Navbar />
      <Hero />
      <About />
      <Projects />
      <SkillsMarquee />
      <Content />
      <Awards />
      <Contact />
    </main>
  );
}
