import { memo } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import Container from "../ui/Container";

import {
  FaCode,
  FaLaptopCode,
  FaServer,
  FaDatabase,
  FaBug,
  FaPaintBrush,
  FaRocket,
  FaGlobe,
  FaMobileAlt,
} from "react-icons/fa";

import {
  ArrowRight,
  Sparkles,
  CheckCircle2,
  Crown,
  Layers3,
  Code2,
} from "lucide-react";

const services = [
  {
    id: 0,
    title: "Full Website Development",
    desc: "Complete websites with clean structure, responsive layouts, fast pages, and professional user experience.",
    icon: FaGlobe,
    tag: "Business Websites",
    type: "Core Service",
    status: "Available",
    badge: "Main",
    color: "from-purple-50 via-white to-indigo-50",
  },
  {
    id: 1,
    title: "Landing Pages",
    desc: "Focused pages designed to present your offer clearly and guide visitors toward contact, booking, or purchase actions.",
    icon: FaRocket,
    tag: "Conversion Focused",
    type: "Marketing",
    status: "Available",
    badge: "Popular",
    color: "from-violet-50 via-white to-purple-50",
  },
  {
    id: 2,
    title: "Frontend Development",
    desc: "Modern React and Tailwind interfaces built with reusable components, responsive behavior, and clean UI structure.",
    icon: FaLaptopCode,
    tag: "React + Tailwind",
    type: "Frontend",
    status: "Available",
    color: "from-blue-50 via-white to-cyan-50",
  },
  {
    id: 3,
    title: "Backend Development",
    desc: "Laravel and PHP backend systems with organized logic, APIs, authentication flows, and maintainable architecture.",
    icon: FaServer,
    tag: "Laravel Systems",
    type: "Backend",
    status: "Available",
    color: "from-emerald-50 via-white to-teal-50",
  },
  {
    id: 4,
    title: "Database Integration",
    desc: "Reliable MySQL data handling with clean relationships, stable queries, and practical project organization.",
    icon: FaDatabase,
    tag: "MySQL",
    type: "Data Layer",
    status: "Available",
    color: "from-green-50 via-white to-emerald-50",
  },
  {
    id: 5,
    title: "Bug Fixing",
    desc: "Debugging and correction for frontend, backend, JavaScript, React, PHP, Laravel, and layout issues.",
    icon: FaBug,
    tag: "Stability",
    type: "Maintenance",
    status: "Available",
    color: "from-orange-50 via-white to-amber-50",
  },
  {
    id: 6,
    title: "UI/UX Improvements",
    desc: "Visual refinement for spacing, hierarchy, consistency, mobile behavior, and a more polished product feel.",
    icon: FaPaintBrush,
    tag: "Polished UI",
    type: "Design Upgrade",
    status: "Available",
    color: "from-pink-50 via-white to-fuchsia-50",
  },
  {
    id: 7,
    title: "Responsive Mobile UI",
    desc: "Mobile-first interfaces that adapt smoothly across phones, tablets, laptops, and desktop screens.",
    icon: FaMobileAlt,
    tag: "All Devices",
    type: "Responsive UI",
    status: "Available",
    color: "from-sky-50 via-white to-blue-50",
  },
  {
    id: 8,
    title: "Code Optimization",
    desc: "Cleaner components, better structure, reusable patterns, improved readability, and scalable frontend architecture.",
    icon: FaCode,
    tag: "Clean Code",
    type: "Optimization",
    status: "Available",
    color: "from-slate-50 via-white to-zinc-50",
  },
];

const stats = [
  { value: "9", label: "Services" },
  { value: "2y 9m", label: "Learning & Building" },
  { value: "Full", label: "Stack Focus" },
];

const process = [
  "Clear requirements",
  "Clean structure",
  "Responsive design",
  "Practical delivery",
];

const statusConfig = {
  Available: "bg-emerald-50 text-emerald-700 border-emerald-200",
};

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  show: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay,
      duration: 0.7,
      ease: [0.22, 1, 0.36, 1],
    },
  }),
};

const StatusBadge = memo(({ status, badge }) => (
  <div className="flex flex-wrap items-center gap-2">
    {badge && (
      <span className="inline-flex items-center gap-1.5 rounded-full border border-zinc-900 bg-zinc-950 px-3 py-1 text-[11px] font-semibold text-white shadow-sm">
        <Crown size={12} />
        {badge}
      </span>
    )}

    <span
      className={`rounded-full border px-3 py-1 text-[11px] font-semibold ${
        statusConfig[status] || "border-zinc-200 bg-zinc-50 text-zinc-600"
      }`}
    >
      {status}
    </span>
  </div>
));

const ServiceCard = memo(({ service }) => {
  const Icon = service.icon;
  const isMain = service.badge;

  return (
    <motion.article
      variants={fadeUp}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.15 }}
      custom={0.08 + service.id * 0.04}
      className={`
        group relative overflow-hidden rounded-[34px]
        border border-zinc-200/80 bg-white/75 p-[1px]
        shadow-[0_18px_60px_rgba(24,24,27,0.08)]
        backdrop-blur-xl transition-all duration-500
        hover:-translate-y-2 hover:shadow-[0_30px_100px_rgba(88,28,135,0.18)]
        ${isMain ? "lg:col-span-2" : ""}
      `}
    >
      <div
        className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-70 transition duration-500 group-hover:opacity-100`}
      />

      <div className="absolute inset-x-8 top-0 h-px bg-gradient-to-r from-transparent via-purple-400 to-transparent opacity-80" />

      <div className="relative z-10 flex h-full flex-col justify-between rounded-[33px] border border-zinc-200/70 bg-white/85 p-6 backdrop-blur-xl sm:p-7">
        <div>
          <div className="mb-5 flex items-start justify-between gap-4">
            <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-zinc-200 bg-white text-purple-700 shadow-sm transition duration-300 group-hover:scale-105 group-hover:shadow-md">
              {isMain ? <Sparkles size={20} /> : <Icon size={20} />}
            </div>

            <StatusBadge status={service.status} badge={service.badge} />
          </div>

          <p className="mb-3 inline-flex rounded-full border border-purple-100 bg-purple-50 px-3 py-1 text-[11px] font-bold uppercase tracking-[0.18em] text-purple-700">
            {service.type}
          </p>

          <h3 className="text-xl font-black tracking-tight text-zinc-950">
            {service.title}
          </h3>

          <p className="mt-4 text-sm leading-7 text-zinc-600">
            {service.desc}
          </p>
        </div>

        <div className="mt-6 flex flex-wrap gap-2">
          <span className="rounded-full border border-zinc-200 bg-white/90 px-3 py-1.5 text-[11px] font-semibold text-zinc-700 shadow-sm">
            {service.tag}
          </span>
          <span className="rounded-full border border-zinc-200 bg-white/90 px-3 py-1.5 text-[11px] font-semibold text-zinc-700 shadow-sm">
            Responsive
          </span>
          <span className="rounded-full border border-zinc-200 bg-white/90 px-3 py-1.5 text-[11px] font-semibold text-zinc-700 shadow-sm">
            Clean Structure
          </span>
        </div>

        <div className="mt-7 flex items-center justify-between border-t border-zinc-200/80 pt-5">
          <div className="flex items-center gap-2 text-xs font-semibold text-zinc-500">
            <Layers3 size={14} />
            Structured Delivery
          </div>

          <Link
            to="/contact"
            className="inline-flex h-10 w-10 items-center justify-center rounded-2xl border border-zinc-900 bg-zinc-950 text-white shadow-sm transition hover:-translate-y-1 hover:bg-purple-700"
            aria-label={`Contact for ${service.title}`}
          >
            <ArrowRight size={17} />
          </Link>
        </div>
      </div>
    </motion.article>
  );
});

export default function Services() {
  return (
    <section
      id="services"
      aria-labelledby="services-title"
      className="relative min-h-screen overflow-hidden bg-[#fbf7ff] px-4 py-24 sm:px-6 lg:py-32"
    >
      {/* Same background style as Projects page */}
      <div className="pointer-events-none absolute inset-0" aria-hidden="true">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(88,28,135,0.055)_1px,transparent_1px),linear-gradient(90deg,rgba(88,28,135,0.055)_1px,transparent_1px)] bg-[size:46px_46px]" />

        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_12%,rgba(168,85,247,0.16),transparent_38%)]" />

        <div className="absolute left-[18%] top-24 h-72 w-72 rounded-full bg-purple-200/35 blur-3xl" />
        <div className="absolute right-[15%] top-40 h-80 w-80 rounded-full bg-fuchsia-200/30 blur-3xl" />
        <div className="absolute bottom-10 left-1/2 h-96 w-96 -translate-x-1/2 rounded-full bg-white/80 blur-3xl" />

        <div className="absolute inset-x-0 top-0 h-48 bg-gradient-to-b from-white/85 to-transparent" />
      </div>

      <Container>
        <div className="relative mx-auto max-w-7xl">
          <motion.header
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
            className="mx-auto mb-16 max-w-3xl text-center"
          >
            <p className="mb-5 inline-flex items-center gap-2 rounded-full border border-purple-200 bg-white/90 px-4 py-2 text-xs font-black uppercase tracking-[0.22em] text-purple-700 shadow-[0_8px_25px_rgba(88,28,135,0.12)] backdrop-blur">
              <Sparkles size={14} />
              Expert Services
            </p>

            <h2
              id="services-title"
              className="text-5xl font-black tracking-[-0.06em] text-zinc-950 sm:text-6xl lg:text-7xl"
            >
              Services
            </h2>

            <p className="mx-auto mt-6 max-w-2xl text-base leading-8 text-zinc-600 sm:text-lg">
              Practical web development services focused on modern UI, clean
              structure, responsive interfaces, Laravel backends, and real
              delivery.
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
          </motion.header>

          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
            custom={0.1}
            className="mx-auto mb-16 max-w-5xl overflow-hidden rounded-[34px] border border-zinc-200/80 bg-white/75 p-[1px] shadow-[0_18px_60px_rgba(24,24,27,0.08)] backdrop-blur-xl"
          >
            <div className="relative rounded-[33px] border border-zinc-200/70 bg-white/85 p-7 backdrop-blur-xl lg:p-8">
              <div className="absolute inset-x-8 top-0 h-px bg-gradient-to-r from-transparent via-purple-400 to-transparent opacity-80" />

              <div className="grid gap-8 lg:grid-cols-[1fr_0.85fr] lg:items-center">
                <div>
                  <p className="mb-3 inline-flex rounded-full border border-purple-100 bg-purple-50 px-3 py-1 text-[11px] font-bold uppercase tracking-[0.18em] text-purple-700">
                    Service Standard
                  </p>

                  <h3 className="text-2xl font-black tracking-tight text-zinc-950 sm:text-3xl">
                    Clean execution from idea to usable web product.
                  </h3>

                  <p className="mt-4 text-sm leading-7 text-zinc-600 sm:text-base">
                    I focus on websites and web systems that are clear to use,
                    responsive on all devices, and organized with maintainable
                    code.
                  </p>
                </div>

                <div className="grid gap-3 sm:grid-cols-2">
                  {process.map((item) => (
                    <div
                      key={item}
                      className="flex items-center gap-3 rounded-2xl border border-zinc-200 bg-white/90 px-4 py-3 shadow-sm"
                    >
                      <CheckCircle2 size={17} className="text-purple-700" />
                      <span className="text-sm font-bold text-zinc-700">
                        {item}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>

          <div className="grid auto-rows-fr gap-7 md:grid-cols-2 lg:grid-cols-3">
            {services.map((service) => (
              <ServiceCard key={service.id} service={service} />
            ))}
          </div>

          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.15 }}
            custom={0.2}
            className="mt-20"
          >
            <div className="relative overflow-hidden rounded-[36px] border border-zinc-900/20 bg-zinc-950 p-[1px] shadow-[0_28px_90px_rgba(24,24,27,0.18)]">
              <div className="absolute inset-0 bg-gradient-to-br from-zinc-950 via-purple-950 to-zinc-900" />
              <div className="absolute left-10 top-8 h-40 w-40 rounded-full bg-purple-500/20 blur-3xl" />
              <div className="absolute right-10 bottom-8 h-44 w-44 rounded-full bg-fuchsia-500/20 blur-3xl" />

              <div className="relative z-10 flex flex-col gap-8 rounded-[35px] border border-white/10 bg-white/[0.04] p-8 text-white backdrop-blur-xl lg:flex-row lg:items-center lg:justify-between lg:p-10">
                <div className="max-w-2xl">
                  <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-3 py-1 text-[11px] font-bold uppercase tracking-[0.2em] text-purple-100">
                    <Code2 size={12} />
                    Work With Me
                  </span>

                  <h3 className="mt-5 text-3xl font-black tracking-[-0.03em] sm:text-4xl">
                    Need a clean website or web system?
                  </h3>

                  <p className="mt-4 max-w-xl text-sm leading-7 text-zinc-300 sm:text-base">
                    I can help with landing pages, portfolios, frontend
                    interfaces, Laravel systems, bug fixing, and responsive UI
                    improvements.
                  </p>
                </div>

                <div className="flex flex-col gap-3 sm:flex-row">
                  <Link
                    to="/projects"
                    className="inline-flex items-center justify-center gap-2 rounded-2xl bg-white px-5 py-3 text-sm font-bold text-zinc-950 shadow-sm transition hover:-translate-y-1 hover:bg-purple-100"
                  >
                    View Projects
                    <ArrowRight size={16} />
                  </Link>

                  <Link
                    to="/contact"
                    className="inline-flex items-center justify-center rounded-2xl border border-white/20 bg-white/10 px-5 py-3 text-sm font-bold text-white backdrop-blur transition hover:-translate-y-1 hover:bg-white/15"
                  >
                    Contact Me
                  </Link>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}