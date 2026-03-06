import useSEO from "../../hooks/useSEO";
import { memo, useMemo } from "react";
import { ExternalLink, Github } from "lucide-react";

const projects = [
  {
    id: 1,
    title: "Dentist Landing Page",
    desc: "A modern landing page built for a dental clinic to present services and encourage appointment requests.",
    stack: ["React", "Tailwind", "Responsive"],
    demo: "https://dentist-woad.vercel.app/",
    github: "https://github.com/IsmailMarkhi/Dentist#",
    status: "Latest",
    badge: "Featured",
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
    badge: "Live",
    color: "from-green-50 to-emerald-50",
  },
  {
    id: 4,
    title: "Business Landing Page",
    desc: "A simple landing page designed to explain a service clearly and encourage visitors to get in touch.",
    stack: ["React", "Responsive Layout"],
    demo: "#",
    github: "#",
    status: "Completed",
    color: "from-purple-50 to-pink-50",
  },
  {
    id: 5,
    title: "PHP CRUD System",
    desc: "A small backend project to manage data with clean PHP logic and structured architecture.",
    stack: ["PHP", "MySQL", "CRUD"],
    demo: "#",
    github: "#",
    status: "Completed",
    color: "from-rose-50 to-red-50",
  },
{
  id: 6,
  title: "Smart QR Menu SaaS",
  desc: "Cloud-native SaaS platform that lets restaurants generate QR menus, receive real-time orders, and manage them from a dashboard.",
  stack: ["Next.js", "Tailwind", "Microservices", "Docker", "PostgreSQL", "Redis"],
  demo: "#",
  github: "#",
  status: "Architecture Project",
  badge: "Concept",
  color: "from-indigo-50 to-blue-50",
}
];

const StatusBadge = memo(({ status, badge }) => {
  const statusConfig = {
    Latest: "bg-blue-100 text-blue-700",
    "Learning Project": "bg-amber-100 text-amber-700",
    Live: "bg-green-100 text-green-700",
    Completed: "bg-gray-100 text-gray-700",
    "In Progress": "bg-indigo-100 text-indigo-700",
    "Architecture Project": "bg-purple-100 text-purple-700",
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

StatusBadge.displayName = "StatusBadge";

const ProjectCard = memo(({ project, index }) => {
  return (
    <article
      className="
      group
      relative
      overflow-hidden
      p-6
      rounded-xl
      border border-zinc-200
      bg-white
      transition-all duration-300
      hover:-translate-y-1
      hover:shadow-xl
      hover:border-zinc-300
    "
      style={{ animationDelay: `${index * 100}ms` }}
    >
      {/* Background gradient */}
      <div
        className={`absolute inset-0 bg-gradient-to-br ${project.color} opacity-0 group-hover:opacity-40 transition-opacity duration-300 -z-10`}
      />

      <div className="space-y-4">

        <div>
          <h3 className="text-lg font-bold text-zinc-900 mb-2">
            {project.title}
          </h3>

          <p className="text-zinc-600 text-sm leading-relaxed">
            {project.desc}
          </p>
        </div>

        {/* Stack */}
        <div className="flex flex-wrap gap-2">
          {project.stack.map((tech) => (
            <span
              key={tech}
              className="text-xs font-medium px-2 py-1 rounded bg-zinc-100 text-zinc-700"
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Footer */}
        <div className="flex items-center justify-between pt-4 border-t border-zinc-100">

          <StatusBadge status={project.status} badge={project.badge} />

          <div className="flex gap-3">

            {project.demo !== "#" && (
              <a
                href={project.demo}
                target="_blank"
                className="flex items-center gap-1 text-sm text-zinc-900 hover:text-zinc-700"
              >
                <ExternalLink size={16} />
                Demo
              </a>
            )}

            {project.github !== "#" && (
              <a
                href={project.github}
                target="_blank"
                className="flex items-center gap-1 text-sm text-zinc-700 hover:text-zinc-900"
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

ProjectCard.displayName = "ProjectCard";

export default memo(function Projects() {
  useSEO({
    title: "Projects & Portfolio | Ismail Markhi",
    description:
      "Explore web development projects by Ismail Markhi, focusing on clean code and modern design.",
    path: "/projects",
  });

  const sortedProjects = useMemo(() => {
    return [...projects].sort((a, b) => {
      const badgeOrder = { Featured: 0, Live: 1, Active: 2 };
      return (badgeOrder[a.badge] ?? 999) - (badgeOrder[b.badge] ?? 999);
    });
  }, []);

  return (
    <section className="px-4 sm:px-6 py-24 bg-gradient-to-b from-white to-zinc-50">

      <div className="max-w-6xl mx-auto">

        <header className="text-center mb-16">
          <h2 className="text-4xl font-bold text-zinc-900 mb-4">
            Projects & Work
          </h2>

          <p className="text-zinc-600 max-w-xl mx-auto">
            A selection of projects where I applied modern web development
            practices and problem solving.
          </p>
        </header>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {sortedProjects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>

      </div>

    </section>
  );
});