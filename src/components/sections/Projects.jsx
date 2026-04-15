import useSEO from "../../hooks/useSEO";
import { memo, useMemo } from "react";
import { ExternalLink, Github } from "lucide-react";

const projects = [
  {
    id: 0,
    title: "FeatureShoes E-commerce",
    desc: "Modern football shoes e-commerce website with dynamic UI, product interactions, and real-world store structure. Focused on performance and clean UX.",
    stack: ["React", "Tailwind", "E-commerce UI", "UX"],
    demo: "https://markhifs.vercel.app",
    github: "https://github.com/IsmailMarkhi/fsh",
    status: "Live",
    badge: "Featured",
    color: "from-purple-50 to-indigo-50",
  },
  {
    id: 1,
    title: "Dentist Landing Page",
    desc: "A modern landing page built for a dental clinic to present services and encourage appointment requests.",
    stack: ["React", "Tailwind", "Responsive"],
    demo: "https://dentist-woad.vercel.app/",
    github: "https://github.com/IsmailMarkhi/Dentist",
    status: "Latest",
    color: "from-blue-50 to-cyan-50",
  },
  {
    id: 2,
    title: "Python OOP Web App",
    desc: "A learning project exploring object-oriented programming concepts in Python.",
    stack: ["Python", "OOP", "Backend Logic"],
    demo: "https://poo-sandy.vercel.app/",
    github: "https://github.com/IsmailMarkhi/Poo",
    status: "Learning Project",
    color: "from-amber-50 to-orange-50",
  },
  {
    id: 3,
    title: "Personal Challenge Website",
    desc: "A personal website built to practice real-world web development, focusing on clarity and usability.",
    stack: ["React", "Tailwind", "SEO"],
    demo: "https://my-world-teal.vercel.app/",
    github: "#",
    status: "Live",
    color: "from-green-50 to-emerald-50",
  },
  {
    id: 4,
    title: "OrderFlow",
    desc: "A full-stack order management system built with Laravel, React, and Tailwind CSS, designed to streamline order tracking, status updates, and workflow organization through a clean, scalable interface.",
    stack: ["Laravel", "React", "Tailwind CSS", "MySQL"],
    demo: "#",
    github: "https://github.com/IsmailMarkhi/ordertrack#",
    status: "Completed",
    color: "from-emerald-50 to-teal-50",
  },
];

const StatusBadge = memo(({ status, badge }) => {
  const statusConfig = {
    Latest: "bg-blue-100 text-blue-700",
    "Learning Project": "bg-amber-100 text-amber-700",
    Live: "bg-green-100 text-green-700",
    Completed: "bg-gray-100 text-gray-700",
  };

  return (
    <div className="flex gap-2">
      <span
        className={`text-xs font-medium px-2.5 py-1 rounded-full ${
          statusConfig[status] || "bg-gray-100 text-gray-700"
        }`}
      >
        {status}
      </span>

      {badge && (
        <span className="text-xs font-medium px-2.5 py-1 rounded-full bg-zinc-900 text-white">
          {badge}
        </span>
      )}
    </div>
  );
});

const ProjectCard = memo(({ project }) => {
  const isFeatured = project.badge === "Featured";

  return (
    <article
      className={`
        group relative overflow-hidden
        rounded-[26px]
        border border-zinc-200/80
        bg-white
        p-6
        shadow-[0_8px_30px_rgba(0,0,0,0.05)]
        transition-all duration-500
        hover:-translate-y-[6px]
        hover:shadow-[0_20px_60px_rgba(0,0,0,0.12)]
        ${isFeatured ? "lg:col-span-2" : ""}
      `}
    >
      <div className="absolute inset-0 opacity-0 bg-gradient-to-br from-purple-50 via-white to-purple-100 transition duration-500 group-hover:opacity-100" />

      <div className="absolute left-0 top-0 h-[2px] w-full bg-gradient-to-r from-purple-500/0 via-purple-400 to-purple-500/0 opacity-0 transition duration-500 group-hover:opacity-100" />

      <div className="relative z-10 flex h-full flex-col justify-between space-y-5">
        <div>
          <h3 className="mb-2 text-lg font-semibold text-zinc-900">
            {project.title}
          </h3>

          <p className="text-sm leading-relaxed text-zinc-600">
            {project.desc}
          </p>
        </div>

        <div className="flex flex-wrap gap-2">
          {project.stack.map((tech) => (
            <span
              key={tech}
              className="rounded-full border border-zinc-200 bg-zinc-100 px-2.5 py-1 text-[11px] font-medium text-zinc-700"
            >
              {tech}
            </span>
          ))}
        </div>

        <div className="flex items-center justify-between border-t border-zinc-100 pt-4">
          <StatusBadge status={project.status} badge={project.badge} />

          <div className="flex gap-4">
            {project.demo !== "#" && (
              <a
                href={project.demo}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1 text-sm text-zinc-800 hover:text-purple-600"
              >
                <ExternalLink size={16} />
                Demo
              </a>
            )}

            {project.github !== "#" && (
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1 text-sm text-zinc-600 hover:text-zinc-900"
              >
                <Github size={16} />
                Code
              </a>
            )}
          </div>
        </div>
      </div>
    </article>
  );
});

export default memo(function Projects() {
  useSEO({
    title: "Projects | Ismail Markhi",
    description:
      "Explore modern web development projects focused on clean UI and scalable systems.",
    path: "/projects",
  });

  const sortedProjects = useMemo(() => {
    return [...projects].sort((a, b) => {
      const order = { Featured: 0, Live: 1 };
      return (order[a.badge] ?? 999) - (order[b.badge] ?? 999);
    });
  }, []);

  return (
    <section
      id="projects"
      className="px-4 sm:px-6 py-24 bg-gradient-to-b from-white via-zinc-50 to-white"
    >
      <div className="mx-auto max-w-6xl">
        <header className="mb-16 text-center">
          <h2 className="mb-4 text-4xl font-bold text-zinc-900">
            Selected Work
          </h2>

          <p className="mx-auto max-w-xl text-zinc-600">
            A curated selection of projects focused on building clean, scalable,
            and user-centered web applications.
          </p>
        </header>

        <div className="grid auto-rows-fr gap-8 md:grid-cols-2 lg:grid-cols-3">
          {sortedProjects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
});
