// src/pages/Projects.jsx
export default function Projects() {
  const projects = [
    {
      title: "Personal Challenge Website",
      seoTitle: "Personal Web Developer Challenge Project",
      desc: "A public project built to document growth, discipline, and real-world frontend development.",
      tech: ["React", "Tailwind CSS", "UX/UI", "SEO"],
      status: "Live",
      link: "https://my-world-teal.vercel.app/",
    },
    {
      title: "Business Landing Page",
      seoTitle: "Modern Business Landing Page Project",
      desc: "A fast and responsive landing page designed to clearly present a service and drive contact.",
      tech: ["React", "Tailwind", "Responsive Design"],
      status: "Completed",
      link: "#",
    },
    {
      title: "PHP CRUD System",
      seoTitle: "PHP CRUD Backend Project",
      desc: "A simple backend system for managing data with clean PHP logic and structured code.",
      tech: ["PHP", "MySQL", "XAMPP"],
      status: "Completed",
      link: "#",
    },
    {
      title: "UI Redesign Case Study",
      seoTitle: "Website UI Redesign Case Study",
      desc: "A case study focused on improving usability, spacing, and accessibility of an existing interface.",
      tech: ["UI/UX", "Tailwind", "Accessibility"],
      status: "In Progress",
      link: "#",
    },
  ];

  return (
    <section
      aria-labelledby="projects-heading"
      className="px-6 py-24 sm:py-32"
    >
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <header className="text-center mb-20 sm:mb-28">
          <h2
            id="projects-heading"
            className="text-3xl sm:text-4xl md:text-5xl font-extrabold mb-4"
          >
            Projects
          </h2>
          <p className="text-zinc-400 max-w-xl mx-auto text-base sm:text-lg">
            Selected projects that show how I approach problems,
            build solutions, and improve through real work.
          </p>
        </header>

        {/* Projects Grid */}
        <div className="grid gap-10 md:grid-cols-2 place-items-center">
          {projects.map((project) => (
            <article
              key={project.title}
              aria-labelledby={`${project.title}-title`}
              className="
                relative w-full max-w-xl
                p-8 sm:p-10 rounded-3xl
                bg-white/5 border border-white/10
                transition
                hover:-translate-y-1 hover:shadow-xl
              "
            >
              {/* Accent */}
              <div
                aria-hidden="true"
                className="
                  absolute top-0 left-1/2 -translate-x-1/2
                  h-[3px] w-16
                  bg-gradient-to-r from-orange-500 to-fuchsia-500
                  rounded-full
                "
              />

              <h3
                id={`${project.title}-title`}
                className="text-center text-xl sm:text-2xl font-semibold mb-4 mt-4"
              >
                {project.title}
              </h3>

              {/* Hidden SEO helper */}
              <p className="sr-only">{project.seoTitle}</p>

              <p className="text-center text-zinc-400 mb-6 leading-relaxed text-sm sm:text-base">
                {project.desc}
              </p>

              {/* Tech stack */}
              <ul className="flex flex-wrap justify-center gap-2 mb-6">
                {project.tech.map((t) => (
                  <li
                    key={t}
                    className="
                      text-xs px-3 py-1 rounded-full
                      bg-white/10 text-zinc-300
                    "
                  >
                    {t}
                  </li>
                ))}
              </ul>

              {/* Footer */}
              <div className="flex items-center justify-between text-sm">
                <span className="text-zinc-500 italic">
                  {project.status}
                </span>

                <a
                  href={project.link}
                  target={project.link !== "#" ? "_blank" : undefined}
                  rel={project.link !== "#" ? "noopener noreferrer" : undefined}
                  aria-label={`View project ${project.title}`}
                  className="
                    font-medium
                    text-orange-400 hover:text-orange-300
                    transition
                    focus:outline-none focus-visible:ring-2
                    focus-visible:ring-orange-500
                  "
                >
                  View →
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
