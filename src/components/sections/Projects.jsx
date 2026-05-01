import useSEO from "../../hooks/useSEO";
import { memo, useMemo } from "react";
import {
  ExternalLink,
  Github,
  Sparkles,
  Crown,
  Layers3,
  Code2,
  ArrowRight,
} from "lucide-react";

const projects = [
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
    color: "from-purple-100 via-white to-indigo-100",
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
    color: "from-emerald-100 via-white to-green-100",
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
    color: "from-teal-100 via-white to-emerald-100",
  },
  {
    id: 3,
    title: "Landing Page 25",
    desc: "Modern landing page project focused on responsive layout, clean section structure, and frontend UI practice for real-world presentation pages.",
    stack: ["React", "Vite", "Landing Page"],
    demo: "https://landingpage25.vercel.app",
    github: "#",
    status: "Live",
    type: "Landing Page",
    color: "from-violet-100 via-white to-purple-100",
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
    color: "from-blue-100 via-white to-cyan-100",
  },
  {
    id: 5,
    title: "Les Jardins de Versailles / Verdura",
    desc: "Volunteer-style professional landing page for a landscaping and garden services brand, focused on responsive presentation, modern sections, service showcase, and polished user experience.",
    stack: ["React", "Tailwind", "Landing Page", "Responsive UI"],
    demo: "#",
    github: "#",
    status: "Volunteer",
    type: "Volunteer Project",
    color: "from-lime-100 via-white to-green-100",
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
    color: "from-slate-100 via-white to-blue-100",
  },
  {
    id: 7,
    title: "Python OOP Web App",
    desc: "Learning project exploring object-oriented programming concepts in Python with practical logic organization and backend-oriented thinking.",
    stack: ["Python", "OOP", "Backend Logic"],
    demo: "https://poo-sandy.vercel.app/",
    github: "https://github.com/IsmailMarkhi/Poo",
    status: "Learning Project",
    type: "Learning Project",
    color: "from-amber-100 via-white to-orange-100",
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
    color: "from-zinc-100 via-white to-slate-100",
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
    color: "from-sky-100 via-white to-blue-100",
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
    color: "from-orange-100 via-white to-amber-100",
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
    color: "from-blue-100 via-white to-cyan-100",
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
    color: "from-emerald-100 via-white to-teal-100",
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
    color: "from-indigo-100 via-white to-blue-100",
  },
];

const statusConfig = {
  Live: "bg-emerald-50 text-emerald-700 border-emerald-200",
  Completed: "bg-blue-50 text-blue-700 border-blue-200",
  Practice: "bg-purple-50 text-purple-700 border-purple-200",
  Volunteer: "bg-lime-50 text-lime-700 border-lime-200",
  "Learning Project": "bg-amber-50 text-amber-700 border-amber-200",
  "Old Version": "bg-orange-50 text-orange-700 border-orange-200",
};

const stats = [
  { value: "10+", label: "Projects" },
  { value: "2y 9m", label: "Learning & Building" },
  { value: "Full", label: "Stack Focus" },
];

const StatusBadge = memo(({ status, badge }) => (
  <div className="flex flex-wrap items-center gap-2">
    {badge && (
      <span className="inline-flex items-center gap-1.5 rounded-full border border-zinc-900 bg-zinc-950 px-3 py-1 text-[11px] font-bold text-white shadow-sm">
        <Crown size={12} />
        {badge}
      </span>
    )}

    <span
      className={`rounded-full border px-3 py-1 text-[11px] font-bold ${
        statusConfig[status] || "border-zinc-200 bg-zinc-50 text-zinc-600"
      }`}
    >
      {status}
    </span>
  </div>
));

const ProjectCard = memo(({ project }) => {
  const isFeatured = project.badge === "Featured";

  return (
    <article
      className={`
        group relative overflow-hidden rounded-[36px]
        border border-white/70 bg-white/75 p-[1px]
        shadow-[0_22px_70px_rgba(24,24,27,0.08)]
        backdrop-blur-xl transition-all duration-500
        hover:-translate-y-2 hover:shadow-[0_34px_110px_rgba(88,28,135,0.20)]
        ${isFeatured ? "lg:col-span-2" : ""}
      `}
    >
      <div
        className={`absolute inset-0 bg-gradient-to-br ${project.color} opacity-75 transition duration-500 group-hover:opacity-100`}
      />

      <div className="absolute inset-x-10 top-0 h-px bg-gradient-to-r from-transparent via-purple-500/70 to-transparent" />
      <div className="absolute -right-16 -top-16 h-40 w-40 rounded-full bg-purple-300/20 blur-3xl transition duration-500 group-hover:bg-purple-300/35" />

      <div className="relative z-10 flex h-full flex-col justify-between rounded-[35px] border border-zinc-200/70 bg-white/86 p-6 backdrop-blur-xl sm:p-7">
        <div>
          <div className="mb-6 flex items-start justify-between gap-4">
            <div className="flex h-13 w-13 items-center justify-center rounded-2xl border border-zinc-200 bg-white text-purple-700 shadow-[0_10px_28px_rgba(24,24,27,0.08)] transition duration-300 group-hover:scale-105 group-hover:shadow-[0_14px_35px_rgba(88,28,135,0.16)]">
              {isFeatured ? <Sparkles size={21} /> : <Code2 size={21} />}
            </div>

            <StatusBadge status={project.status} badge={project.badge} />
          </div>

          <p className="mb-3 inline-flex rounded-full border border-purple-100 bg-purple-50 px-3 py-1 text-[11px] font-black uppercase tracking-[0.18em] text-purple-700">
            {project.type}
          </p>

          <h3 className="text-2xl font-black tracking-[-0.03em] text-zinc-950">
            {project.title}
          </h3>

          <p className="mt-4 text-sm leading-7 text-zinc-600">
            {project.desc}
          </p>
        </div>

        <div className="mt-7 flex flex-wrap gap-2">
          {project.stack.map((tech) => (
            <span
              key={tech}
              className="rounded-full border border-zinc-200 bg-white/90 px-3 py-1.5 text-[11px] font-bold text-zinc-700 shadow-sm"
            >
              {tech}
            </span>
          ))}
        </div>

        <div className="mt-8 flex items-center justify-between border-t border-zinc-200/80 pt-5">
          <div className="flex items-center gap-2 text-xs font-bold text-zinc-500">
            <Layers3 size={14} />
            Portfolio Project
          </div>

          <div className="flex items-center gap-3">
            {project.demo !== "#" && (
              <a
                href={project.demo}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex h-11 w-11 items-center justify-center rounded-2xl border border-zinc-200 bg-white text-zinc-700 shadow-sm transition hover:-translate-y-1 hover:border-purple-300 hover:text-purple-700"
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
                className="inline-flex h-11 w-11 items-center justify-center rounded-2xl border border-zinc-950 bg-zinc-950 text-white shadow-sm transition hover:-translate-y-1 hover:bg-purple-700"
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
      className="relative min-h-screen overflow-hidden bg-[#fbf7ff] px-4 py-24 sm:px-6 lg:py-32"
    >
      <div className="pointer-events-none absolute inset-0" aria-hidden="true">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(88,28,135,0.055)_1px,transparent_1px),linear-gradient(90deg,rgba(88,28,135,0.055)_1px,transparent_1px)] bg-[size:46px_46px]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_12%,rgba(168,85,247,0.16),transparent_38%)]" />

        <div className="absolute left-[16%] top-24 h-72 w-72 rounded-full bg-purple-200/35 blur-3xl" />
        <div className="absolute right-[12%] top-40 h-80 w-80 rounded-full bg-fuchsia-200/30 blur-3xl" />
        <div className="absolute bottom-10 left-1/2 h-96 w-96 -translate-x-1/2 rounded-full bg-white/80 blur-3xl" />

        <div className="absolute inset-x-0 top-0 h-48 bg-gradient-to-b from-white/85 to-transparent" />
        <div className="absolute inset-x-0 bottom-0 h-48 bg-gradient-to-t from-white/85 to-transparent" />
      </div>

      <div className="relative mx-auto max-w-7xl">
        <header className="mx-auto mb-16 max-w-3xl text-center">
          <p className="mb-5 inline-flex items-center gap-2 rounded-full border border-purple-200 bg-white/90 px-4 py-2 text-xs font-black uppercase tracking-[0.22em] text-purple-700 shadow-[0_8px_25px_rgba(88,28,135,0.12)] backdrop-blur">
            <Sparkles size={14} />
            Project Showcase
          </p>

          <h2
            id="projects-title"
            className="text-5xl font-black tracking-[-0.06em] text-zinc-950 sm:text-6xl lg:text-7xl"
          >
            Selected Work
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-base leading-8 text-zinc-600 sm:text-lg">
            A curated collection of 10+ projects focused on React, Laravel,
            Tailwind CSS, SEO, dashboards, landing pages, WordPress practice,
            and practical full-stack development.
          </p>

          <div className="mx-auto mt-10 grid max-w-3xl gap-3 sm:grid-cols-3">
            {stats.map((item) => (
              <div
                key={item.label}
                className="rounded-3xl border border-zinc-200/80 bg-white/80 p-5 shadow-[0_12px_35px_rgba(24,24,27,0.08)] backdrop-blur"
              >
                <p className="text-3xl font-black text-zinc-950">
                  {item.value}
                </p>
                <p className="mt-1 text-xs font-black uppercase tracking-wide text-zinc-500">
                  {item.label}
                </p>
              </div>
            ))}
          </div>
        </header>

        <div className="mb-10 flex justify-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-zinc-200 bg-white/80 px-4 py-2 text-sm font-semibold text-zinc-600 shadow-sm backdrop-blur">
            <ArrowRight size={15} className="text-purple-700" />
            Featured projects appear first
          </div>
        </div>

        <div className="grid auto-rows-fr gap-7 md:grid-cols-2 lg:grid-cols-3">
          {sortedProjects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
});