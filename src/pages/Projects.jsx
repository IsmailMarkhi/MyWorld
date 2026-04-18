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
      "React portfolio Morocco",
      "Laravel portfolio",
      "Frontend developer projects",
      "Web Developer Morocco",
      "Tailwind CSS projects",
      "full stack portfolio",
    ],
  });

  return (
    <main className="pt-28">
      {/* SEO H1 (hidden visually if needed) */}
      <h1 className="sr-only">
        Projects by Ismail Markhi - React and Laravel Web Development Portfolio
      </h1>

      <ProjectsSection />
    </main>
  );
}