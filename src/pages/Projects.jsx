import useSEO from "../hooks/useSEO";
import ProjectsSection from "../components/sections/Projects";

export default function Projects() {
  useSEO({
  title: "Projects | Ismail Markhi | React & Laravel Web Developer",
  description:
    "Explore selected web development projects by Ismail Markhi, a web developer in Morocco specializing in React, Laravel, Tailwind CSS, and scalable user-focused interfaces.",
  path: "/projects",
  schema: "all",
  keywords: [
    "Ismail Markhi projects",
    "Ismail Markhi portfolio",
    "React projects portfolio",
    "Laravel portfolio",
    "Web Developer Morocco",
    "Frontend projects",
    "Tailwind CSS projects",
    "scalable web applications",
  ],
});

  return (
    <main>
      <ProjectsSection />
    </main>
  );
}