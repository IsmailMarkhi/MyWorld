import useSEO from "../../hooks/useSEO";
import { memo, useMemo } from "react";
import {
  ExternalLink,
  Github,
  Sparkles,
  Crown,
  Layers3,
  Code2,
} from "lucide-react";

const projects = [
  // Main / Ready Projects
  {
    id: 0,
    title: "FeatureShoes E-commerce",
    desc: "Modern football shoes e-commerce website with dynamic UI, product interactions, product pages, cart flow, checkout experience, and responsive shopping interface.",
    stack: ["React", "Tailwind", "E-commerce UI", "Cart", "Checkout"],
    demo: "https://markhifs.vercel.app",
    github: "https://github.com/IsmailMarkhi/fsh",
    status: "Live",
    badge: "Featured",
    type: "Main Project",
    color: "from-purple-50 to-indigo-50",
  },
  {
    id: 1,
    title: "MyWorld Portfolio",
    desc: "Personal developer portfolio for Ismail Markhi with semantic sections, SEO optimization, sitemap setup, favicon configuration, project showcase, and production deployment.",
    stack: ["React", "Tailwind", "SEO", "Vite"],
    demo: "https://ismailmarkhi.dev",
    github: "https://github.com/IsmailMarkhi/MyWorld",
    status: "Live",
    badge: "Featured",
    type: "Main Project",
    color: "from-green-50 to-emerald-50",
  },
  {
    id: 2,
    title: "Order Tracking System",
    desc: "Full-stack order tracking system designed to manage order states, backend logic, monitoring interface, and workflow organization through a clean scalable structure.",
    stack: ["React", "Tailwind", "Laravel", "MySQL", "XAMPP"],
    demo: "#",
    github: "https://github.com/IsmailMarkhi/ordertrack",
    status: "Completed",
    type: "Main Project",
    color: "from-emerald-50 to-teal-50",
  },

  // Landing Pages
  {
    id: 3,
    title: "Landing Page 25",
    desc: "Modern landing page project focused on responsive layout, clean section structure, and frontend UI practice for real-world presentation pages.",
    stack: ["React", "Vite", "Landing Page"],
    demo: "https://landingpage25.vercel.app",
    github: "#",
    status: "Live",
    type: "Landing Page",
    color: "from-violet-50 to-purple-50",
  },
  {
    id: 4,
    title: "Dentist Landing Page",
    desc: "A modern landing page built for a dental clinic to present services, improve trust, and guide visitors toward appointment or contact actions.",
    stack: ["JavaScript", "Responsive", "Landing Page"],
    demo: "https://dentist-woad.vercel.app/",
    github: "https://github.com/IsmailMarkhi/Dentist",
    status: "Completed",
    type: "Landing Page",
    color: "from-blue-50 to-cyan-50",
  },

  // Volunteer / Concept Projects
  {
    id: 5,
    title: "Les Jardins de Versailles / Verdura",
    desc: "Volunteer-style professional landing page for a landscaping and garden services brand, focused on responsive presentation, modern sections, service showcase, and polished user experience.",
    stack: ["React", "Tailwind", "Landing Page", "Responsive UI"],
    demo: "#",
    github: "#",
    status: "Volunteer",
    type: "Volunteer Project",
    color: "from-lime-50 to-green-50",
  },
  {
    id: 6,
    title: "GDP Public Debt Management",
    desc: "Government-style dashboard concept for public debt management, including loans, credit notices, debit notices, payment orders, user roles, modular UI, and enterprise-style navigation.",
    stack: ["React", "Tailwind", "Dashboard", "Government UI"],
    demo: "#",
    github: "https://github.com/IsmailMarkhi/Gdp-pfe-test",
    status: "Volunteer",
    type: "Volunteer Project",
    color: "from-blue-50 to-slate-50",
  },

  // Learning / Practice
  {
    id: 7,
    title: "Python OOP Web App",
    desc: "Learning project exploring object-oriented programming concepts in Python with practical logic organization and backend-oriented thinking.",
    stack: ["Python", "OOP", "Backend Logic"],
    demo: "https://poo-sandy.vercel.app/",
    github: "https://github.com/IsmailMarkhi/Poo",
    status: "Learning Project",
    type: "Learning Project",
    color: "from-amber-50 to-orange-50",
  },
  {
    id: 8,
    title: "StopWatch",
    desc: "Real-time stopwatch project built to practice timing logic, DOM interaction, and clean UI behavior using JavaScript and Tailwind CSS.",
    stack: ["HTML", "JavaScript", "Tailwind"],
    demo: "#",
    github: "https://github.com/IsmailMarkhi/StopWatch",
    status: "Practice",
    type: "Practice",
    color: "from-slate-50 to-zinc-50",
  },
  {
    id: 9,
    title: "Current Time App",
    desc: "Responsive real-time clock web app displaying year, month, day, hour, minute, and second using JavaScript and Tailwind CSS.",
    stack: ["HTML", "JavaScript", "Tailwind"],
    demo: "#",
    github: "https://github.com/IsmailMarkhi/Current-Time",
    status: "Practice",
    type: "Practice",
    color: "from-sky-50 to-blue-50",
  },
  {
    id: 10,
    title: "FeatureShoes Static Version",
    desc: "Old static version of the FeatureShoes e-commerce website built with HTML, CSS, and JavaScript before the newer React and Tailwind version.",
    stack: ["HTML", "CSS", "JavaScript", "Static Website"],
    demo: "https://featureshoes-st-v.vercel.app/index.html",
    github: "https://github.com/IsmailMarkhi/featureshoes-website",
    status: "Old Version",
    type: "Practice",
    color: "from-orange-50 to-amber-50",
  },
  {
    id: 11,
    title: "OrderFlow Frontend",
    desc: "Frontend interface for the OrderFlow system, focused on order tracking screens, responsive UI, dashboard structure, and user-facing workflow presentation.",
    stack: ["React", "Tailwind", "Dashboard UI", "Frontend"],
    demo: "#",
    github: "https://github.com/IsmailMarkhi/OrFrontend",
    status: "Completed",
    type: "Frontend",
    color: "from-blue-50 to-cyan-50",
  },
  {
    id: 12,
    title: "OrderFlow Backend",
    desc: "Backend layer for the OrderFlow system, focused on order lifecycle logic, data handling, API structure, and server-side workflow management.",
    stack: ["Laravel", "PHP", "MySQL", "Backend"],
    demo: "#",
    github: "https://github.com/IsmailMarkhi/OrBackend",
    status: "Completed",
    type: "Backend",
    color: "from-emerald-50 to-teal-50",
  },
  {
  id: 13,
  title: "WordPress Course & Practice",
  desc: "WordPress learning and practice project created during a WordPress course, covering local setup, theme usage, content management, dashboard configuration, pages, posts, and basic website deployment workflow.",
  stack: ["WordPress", "CMS", "PHP", "MySQL", "Course Practice"],
  demo: "https://worpress.vercel.app/",
  github: "https://github.com/IsmailMarkhi/worpress",
  status: "Learning Project",
  type: "Learning Project",
  color: "from-indigo-50 to-blue-50",
}
];

const statusConfig = {
  Featured: "bg-zinc-950 text-white border-zinc-800",
  Live: "bg-emerald-50 text-emerald-700 border-emerald-200",
  Completed: "bg-blue-50 text-blue-700 border-blue-200",
  Practice: "bg-purple-50 text-purple-700 border-purple-200",
  Volunteer: "bg-lime-50 text-lime-700 border-lime-200",
  "Learning Project": "bg-amber-50 text-amber-700 border-amber-200",
  "Old Version": "bg-orange-50 text-orange-700 border-orange-200",
};

const StatusBadge = memo(({ status, badge }) => {
  return (
    <div className="flex flex-wrap items-center gap-2">
      {badge && (
        <span className="inline-flex items-center gap-1.5 rounded-full border border-zinc-800 bg-zinc-950 px-3 py-1 text-[11px] font-semibold text-white shadow-sm">
          <Crown size={12} />
          {badge}
        </span>
      )}

      <span
        className={`rounded-full border px-3 py-1 text-[11px] font-semibold ${
          statusConfig[status] || "bg-zinc-50 text-zinc-600 border-zinc-200"
        }`}
      >
        {status}
      </span>
    </div>
  );
});

const ProjectCard = memo(({ project }) => {
  const isFeatured = project.badge === "Featured";

  return (
    <article
      className={`
        group relative overflow-hidden rounded-[32px]
        border border-white/70 bg-white/80 p-[1px]
        shadow-[0_20px_70px_rgba(24,24,27,0.08)]
        backdrop-blur-xl transition-all duration-500
        hover:-translate-y-2 hover:shadow-[0_30px_100px_rgba(88,28,135,0.18)]
        ${isFeatured ? "lg:col-span-2" : ""}
      `}
    >
      <div
        className={`absolute inset-0 bg-gradient-to-br ${project.color} opacity-70 transition duration-500 group-hover:opacity-100`}
      />

      <div className="absolute inset-x-8 top-0 h-px bg-gradient-to-r from-transparent via-purple-400 to-transparent opacity-70" />

      <div className="relative z-10 flex h-full flex-col justify-between rounded-[31px] border border-zinc-200/70 bg-white/80 p-6 backdrop-blur-xl sm:p-7">
        <div>
          <div className="mb-5 flex items-start justify-between gap-4">
            <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-zinc-200 bg-white shadow-sm">
              {isFeatured ? (
                <Sparkles size={20} className="text-purple-700" />
              ) : (
                <Code2 size={20} className="text-zinc-700" />
              )}
            </div>

            <StatusBadge status={project.status} badge={project.badge} />
          </div>

          <p className="mb-3 inline-flex rounded-full border border-purple-100 bg-purple-50 px-3 py-1 text-[11px] font-bold uppercase tracking-[0.18em] text-purple-700">
            {project.type}
          </p>

          <h3 className="text-xl font-black tracking-tight text-zinc-950">
            {project.title}
          </h3>

          <p className="mt-4 text-sm leading-7 text-zinc-600">
            {project.desc}
          </p>
        </div>

        <div className="mt-6 flex flex-wrap gap-2">
          {project.stack.map((tech) => (
            <span
              key={tech}
              className="rounded-full border border-zinc-200 bg-white/90 px-3 py-1.5 text-[11px] font-semibold text-zinc-700 shadow-sm"
            >
              {tech}
            </span>
          ))}
        </div>

        <div className="mt-7 flex items-center justify-between border-t border-zinc-200/80 pt-5">
          <div className="flex items-center gap-2 text-xs font-medium text-zinc-500">
            <Layers3 size={14} />
            Portfolio Project
          </div>

          <div className="flex items-center gap-3">
            {project.demo !== "#" && (
              <a
                href={project.demo}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex h-10 w-10 items-center justify-center rounded-2xl border border-zinc-200 bg-white text-zinc-700 shadow-sm transition hover:-translate-y-1 hover:border-purple-300 hover:text-purple-700"
                aria-label={`${project.title} live demo`}
              >
                <ExternalLink size={17} />
              </a>
            )}

            {project.github !== "#" && (
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex h-10 w-10 items-center justify-center rounded-2xl border border-zinc-200 bg-zinc-950 text-white shadow-sm transition hover:-translate-y-1 hover:bg-purple-700"
                aria-label={`${project.title} source code`}
              >
                <Github size={17} />
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
    title: "Projects | Ismail Markhi | React & Laravel Web Developer",
    description:
      "Explore web development projects by Ismail Markhi, including React, Laravel, Tailwind CSS, SEO, landing pages, dashboards, WordPress practice, and full-stack applications.",
    path: "/projects",
    keywords: [
      "Ismail Markhi projects",
      "React projects portfolio",
      "Laravel projects",
      "Web developer Morocco portfolio",
      "Tailwind CSS projects",
    ],
    schema: "all",
  });

  const sortedProjects = useMemo(() => {
    const order = {
      Featured: 0,
      Live: 1,
      Completed: 2,
      Volunteer: 3,
      Practice: 4,
      "Learning Project": 5,
      "Old Version": 6,
    };

    return [...projects].sort(
      (a, b) =>
        (order[a.badge || a.status] ?? 999) -
        (order[b.badge || b.status] ?? 999)
    );
  }, []);

  return (
    <section
      id="projects"
      aria-labelledby="projects-title"
      className="relative overflow-hidden bg-[radial-gradient(circle_at_top,rgba(147,51,234,0.10),transparent_34%),linear-gradient(to_bottom,#ffffff,#fafafa,#ffffff)] px-4 py-24 sm:px-6 lg:py-32"
    >
      <div className="pointer-events-none absolute inset-0" aria-hidden="true">
        <div className="absolute left-[8%] top-20 h-64 w-64 rounded-full bg-purple-200/40 blur-3xl" />
        <div className="absolute right-[6%] top-48 h-72 w-72 rounded-full bg-fuchsia-200/30 blur-3xl" />
        <div className="absolute inset-0 bg-[linear-gradient(rgba(24,24,27,0.035)_1px,transparent_1px),linear-gradient(90deg,rgba(24,24,27,0.035)_1px,transparent_1px)] bg-[size:46px_46px]" />
      </div>

      <div className="relative mx-auto max-w-7xl">
        <header className="mx-auto mb-16 max-w-3xl text-center">
          <p className="mb-4 inline-flex items-center gap-2 rounded-full border border-purple-200 bg-white/80 px-4 py-2 text-xs font-bold uppercase tracking-[0.18em] text-purple-700 shadow-sm backdrop-blur">
            <Sparkles size={14} />
            Project Showcase
          </p>

          <h2
            id="projects-title"
            className="text-4xl font-black tracking-[-0.04em] text-zinc-950 sm:text-5xl lg:text-6xl"
          >
            Selected Work
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-base leading-8 text-zinc-600 sm:text-lg">
            A curated collection of 10+ projects focused on React, Laravel,
            Tailwind CSS, SEO, dashboards, landing pages, WordPress practice,
            and practical full-stack development.
          </p>

          <div className="mt-8 grid gap-3 sm:grid-cols-3">
            <div className="rounded-3xl border border-zinc-200 bg-white/80 p-5 shadow-sm backdrop-blur">
              <p className="text-3xl font-black text-zinc-950">10+</p>
              <p className="mt-1 text-xs font-bold uppercase tracking-wide text-zinc-500">
                Projects
              </p>
            </div>

            <div className="rounded-3xl border border-zinc-200 bg-white/80 p-5 shadow-sm backdrop-blur">
              <p className="text-3xl font-black text-zinc-950">2y 9m</p>
              <p className="mt-1 text-xs font-bold uppercase tracking-wide text-zinc-500">
                Learning & Building
              </p>
            </div>

            <div className="rounded-3xl border border-zinc-200 bg-white/80 p-5 shadow-sm backdrop-blur">
              <p className="text-3xl font-black text-zinc-950">Full</p>
              <p className="mt-1 text-xs font-bold uppercase tracking-wide text-zinc-500">
                Stack Focus
              </p>
            </div>
          </div>
        </header>

        <div className="grid auto-rows-fr gap-7 md:grid-cols-2 lg:grid-cols-3">
          {sortedProjects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
});