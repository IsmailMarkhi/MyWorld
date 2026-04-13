import Hero from "../components/sections/Hero";
import TechStack from "../components/sections/TechStack";
import Services from "../components/sections/Services";
import Projects from "../components/sections/Projects";
import Contact from "./Contact";
import useSEO from "../hooks/useSEO";

export default function Home() {
  useSEO({
    title: "Ismail Markhi | Web Developer",
    description:
      "Portfolio of Ismail Markhi, a web developer building modern, scalable web applications with React, Laravel, PHP, and Python.",
    path: "/",
    schema: "both",
    keywords: [
      "Ismail Markhi",
      "Web Developer",
      "React Developer",
      "Laravel Developer",
      "Portfolio",
      "Frontend Developer",
      "Morocco",
    ],
  });

  return (
    <main className="flex flex-col">
      <Hero />
      <Services />
      <TechStack />
      <Projects />
      <Contact />
    </main>
  );
}