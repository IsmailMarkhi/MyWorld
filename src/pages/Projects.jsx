import useSEO from "../hooks/useSEO";
import ProjectsSection from "../components/sections/Projects";

export default function Projects() {

  useSEO({
    title: "Projects | Ismail Markhi",
    description:
      "Explore projects built by Ismail Markhi using React, Tailwind, PHP and Python.",
    path: "/projects",
  });

  return (
    <main>
      <ProjectsSection />
    </main>
  );
}