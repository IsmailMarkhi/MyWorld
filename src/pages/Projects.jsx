import useSEO from "../hooks/useSEO";

export default function Projects() {
useSEO({
  title: "Projects & Portfolio | Ismail Markhi",
  description:
    "Explore real-world web development projects by Ismail Markhi, focused on performance, clean design, and practical solutions.",
  path: "/projects",
});
    
  const projects = [
    {
      title: "Personal challenge website",
      desc: "A personal website built to practice real-world web development, focusing on clarity, structure and usability.",
      stack: "React, Tailwind, basic SEO",
      link: "https://my-world-teal.vercel.app/",
      status: "Live",
    },
    {
      title: "Business landing page",
      desc: "A simple landing page designed to explain a service clearly and encourage visitors to get in touch.",
      stack: "React, responsive layout",
      link: "#",
      status: "Completed",
    },
    {
      title: "PHP CRUD system",
      desc: "A small backend project to manage data with clean PHP logic and a structured approach.",
      stack: "PHP, MySQL, XAMPP",
      link: "#",
      status: "Completed",
    },
    {
      title: "UI redesign case",
      desc: "A redesign focused on improving spacing, readability and overall user comfort.",
      stack: "UI thinking, Tailwind",
      link: "#",
      status: "In progress",
    },
  ];

  return (
    <section aria-labelledby="projects-heading" className="px-6 py-24 sm:py-32">
      <div className="max-w-5xl mx-auto text-center">
        <header className="mb-16 sm:mb-24">
          <h2
            id="projects-heading"
            className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4"
          >
            Projects
          </h2>

          <p className="text-zinc-500 max-w-xl mx-auto text-base sm:text-lg">
            A selection of real projects that show how I think, build and improve.
          </p>
        </header>

        <div className="grid gap-12 sm:grid-cols-2">
          {projects.map((project) => (
            <article
              key={project.title}
              className="
                p-8 rounded-2xl
                bg-white/5 border border-white/10
                transition hover:shadow-lg
              "
            >
              <h3 className="text-xl font-semibold mb-3">
                {project.title}
              </h3>

              <p className="text-zinc-500 text-sm sm:text-base mb-4">
                {project.desc}
              </p>

              <p className="text-zinc-400 text-sm mb-6">
                {project.stack}
              </p>

              <div className="flex items-center justify-between text-sm">
                <span className="text-zinc-400 italic">
                  {project.status}
                </span>

                {project.link !== "#" && (
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-orange-400 hover:text-orange-300 transition"
                  >
                    View project
                  </a>
                )}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
