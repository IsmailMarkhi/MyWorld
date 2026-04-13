import useSEO from "../hooks/useSEO";
import ProjectsSection from "../components/sections/Projects";

export default function Projects() {
  useSEO({
    title: "Projects | Ismail Markhi",
    description:
      "Explore selected projects by Ismail Markhi, focused on modern web development, React interfaces, Laravel systems, and clean scalable UI.",
    path: "/projects",
    schema: "website",
    keywords: [
      "Ismail Markhi projects",
      "React projects",
      "Laravel portfolio",
      "web development portfolio",
      "frontend projects",
      "UI projects",
    ],
  });

  return (
    <main>
      <ProjectsSection />
    </main>
  );
}