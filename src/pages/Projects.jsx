// src/pages/Projects.jsx
export default function Projects() {
  const projects = [
    {
      title: "Personal Challenge Website",
      seoTitle: "Personal Web Developer Challenge Project",
      desc: "A public journey documenting growth, discipline, and real-world web development.",
      tech: ["React", "Tailwind CSS", "UX/UI", "SEO"],
      status: "Live",
      link: "#",
    },
    {
      title: "Business Landing Page",
      seoTitle: "Modern Business Landing Page Project",
      desc: "A fast, responsive landing page focused on clarity, speed, and conversion.",
      tech: ["React", "Tailwind", "Responsive Design"],
      status: "Completed",
      link: "#",
    },
    {
      title: "PHP CRUD System",
      seoTitle: "PHP CRUD Backend Project",
      desc: "A simple backend system for managing data with clean PHP logic.",
      tech: ["PHP", "MySQL", "XAMPP"],
      status: "Completed",
      link: "#",
    },
    {
      title: "UI Redesign Case Study",
      seoTitle: "Website UI Redesign Case Study",
      desc: "Improving usability and visual hierarchy for an existing interface.",
      tech: ["UI/UX", "Tailwind", "Accessibility"],
      status: "In Progress",
      link: "#",
    },
  ];

  return (
    <section
      className="max-w-7xl mx-auto px-6 py-32"
      aria-labelledby="projects-heading"
    >
      {/* Header */}
      <header className="text-center mb-28">
        <h2
          id="projects-heading"
          className="text-4xl md:text-5xl font-extrabold mb-6"
        >
          Projects
        </h2>
        <p className="text-zinc-400 max-w-2xl mx-auto text-lg">
          Selected projects showcasing real work, practical skills,
          and continuous improvement.
        </p>
      </header>

      {/* Projects Grid */}
      <div className="grid md:grid-cols-2 gap-12">
        {projects.map((project) => (
          <article
            key={project.title}
            className="
              relative p-10 rounded-3xl
              bg-white/5 border border-white/10
              hover:-translate-y-1 hover:shadow-2xl
              transition
            "
            aria-labelledby={`${project.title}-title`}
          >
            {/* Accent */}
            <div
              className="
                absolute top-0 left-10
                h-[3px] w-16
                bg-gradient-to-r from-orange-500 to-fuchsia-500
                rounded-full
              "
            />

            <h3
              id={`${project.title}-title`}
              className="text-2xl font-semibold mb-3"
            >
              {project.title}
            </h3>

            {/* Hidden SEO text */}
            <p className="sr-only">{project.seoTitle}</p>

            <p className="text-zinc-400 mb-6 leading-relaxed">
              {project.desc}
            </p>

            {/* Tech stack */}
            <ul className="flex flex-wrap gap-2 mb-6">
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
              <span className="text-zinc-400 italic">
                {project.status}
              </span>

              <a
                href={project.link}
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
    </section>
  );
}
