import { lazy, Suspense } from "react";
import { Link } from "react-router-dom";
import Hero from "../components/sections/Hero";
import useSEO from "../hooks/useSEO";
import {
  ArrowRight,
  Code2,
  Layers3,
  Mail,
  Sparkles,
  Rocket,
} from "lucide-react";

const Services = lazy(() => import("../components/sections/Services"));
const TechStack = lazy(() => import("../components/sections/TechStack"));

function SectionFallback({ height = "h-64" }) {
  return (
    <div className="relative w-full overflow-hidden bg-[#fbf7ff] py-16">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(88,28,135,0.045)_1px,transparent_1px),linear-gradient(90deg,rgba(88,28,135,0.045)_1px,transparent_1px)] bg-[size:46px_46px]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_20%,rgba(168,85,247,0.12),transparent_35%)]" />
      </div>

      <div className="relative mx-auto max-w-6xl px-5 sm:px-6 lg:px-8">
        <div
          className={`animate-pulse rounded-[34px] border border-zinc-200/80 bg-white/75 shadow-[0_18px_60px_rgba(24,24,27,0.08)] backdrop-blur-xl ${height}`}
        />
      </div>
    </div>
  );
}

const ctaCards = [
  {
    title: "Discover my services",
    label: "Services",
    desc: "Explore practical web development services focused on clean UI, strong structure, responsive interfaces, and real delivery.",
    to: "/services",
    button: "View Services",
    icon: Layers3,
    color: "from-purple-50 via-white to-indigo-50",
    featured: true,
  },
  {
    title: "Explore selected work",
    label: "Projects",
    desc: "See 10+ frontend and full-stack projects built with React, Laravel, Tailwind CSS, SEO, dashboards, and scalable UI architecture.",
    to: "/projects",
    button: "View Projects",
    icon: Code2,
    color: "from-blue-50 via-white to-cyan-50",
  },
  {
    title: "Let’s build something clean",
    label: "Contact",
    desc: "Need a portfolio, landing page, frontend interface, Laravel system, or UI improvement? Contact me and explain the project.",
    to: "/contact",
    button: "Contact Me",
    icon: Mail,
    color: "from-fuchsia-50 via-white to-purple-50",
  },
];

function HomeCTASection() {
  return (
    <section
      aria-labelledby="home-cta-title"
      className="relative overflow-hidden bg-[#fbf7ff] px-4 py-24 sm:px-6 lg:py-32"
    >
      {/* Background */}
      <div className="pointer-events-none absolute inset-0" aria-hidden="true">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(88,28,135,0.055)_1px,transparent_1px),linear-gradient(90deg,rgba(88,28,135,0.055)_1px,transparent_1px)] bg-[size:46px_46px]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_12%,rgba(168,85,247,0.16),transparent_38%)]" />

        <div className="absolute left-[14%] top-20 h-72 w-72 rounded-full bg-purple-200/35 blur-3xl" />
        <div className="absolute right-[12%] top-40 h-80 w-80 rounded-full bg-fuchsia-200/30 blur-3xl" />
        <div className="absolute bottom-10 left-1/2 h-96 w-96 -translate-x-1/2 rounded-full bg-white/80 blur-3xl" />

        <div className="absolute inset-x-0 top-0 h-48 bg-gradient-to-b from-white/85 to-transparent" />
        <div className="absolute inset-x-0 bottom-0 h-48 bg-gradient-to-t from-white/80 to-transparent" />
      </div>

      <div className="relative mx-auto max-w-7xl">
        {/* Header */}
        <header className="mx-auto mb-16 max-w-3xl text-center">
          <p className="mb-5 inline-flex items-center gap-2 rounded-full border border-purple-200 bg-white/90 px-4 py-2 text-xs font-black uppercase tracking-[0.22em] text-purple-700 shadow-[0_8px_25px_rgba(88,28,135,0.12)] backdrop-blur">
            <Sparkles size={14} />
            Start Here
          </p>

          <h2
            id="home-cta-title"
            className="text-5xl font-black tracking-[-0.06em] text-zinc-950 sm:text-6xl lg:text-7xl"
          >
            Build with clarity.
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-base leading-8 text-zinc-600 sm:text-lg">
            Choose the next step: review my services, explore my projects, or
            contact me for a clean website, landing page, frontend interface, or
            full-stack system.
          </p>
        </header>

        {/* Main CTA cards */}
        <div className="grid auto-rows-fr gap-7 md:grid-cols-2 lg:grid-cols-3">
          {ctaCards.map((card) => {
            const Icon = card.icon;

            return (
              <article
                key={card.title}
                className={`
                  group relative overflow-hidden rounded-[34px]
                  border border-zinc-200/80 bg-white/75 p-[1px]
                  shadow-[0_18px_60px_rgba(24,24,27,0.08)]
                  backdrop-blur-xl transition-all duration-500
                  hover:-translate-y-2 hover:shadow-[0_30px_100px_rgba(88,28,135,0.18)]
                  ${card.featured ? "lg:col-span-1" : ""}
                `}
              >
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${card.color} opacity-70 transition duration-500 group-hover:opacity-100`}
                />

                <div className="absolute inset-x-8 top-0 h-px bg-gradient-to-r from-transparent via-purple-400 to-transparent opacity-80" />

                <div className="relative z-10 flex h-full flex-col justify-between rounded-[33px] border border-zinc-200/70 bg-white/85 p-7 backdrop-blur-xl">
                  <div>
                    <div className="mb-6 flex items-start justify-between gap-4">
                      <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-zinc-200 bg-white text-purple-700 shadow-sm transition duration-300 group-hover:scale-105 group-hover:shadow-md">
                        <Icon size={20} />
                      </div>

                      <span className="rounded-full border border-purple-100 bg-purple-50 px-3 py-1 text-[11px] font-black uppercase tracking-[0.18em] text-purple-700">
                        {card.label}
                      </span>
                    </div>

                    <h3 className="text-2xl font-black tracking-tight text-zinc-950">
                      {card.title}
                    </h3>

                    <p className="mt-4 text-sm leading-7 text-zinc-600">
                      {card.desc}
                    </p>
                  </div>

                  <div className="mt-8 flex items-center justify-between border-t border-zinc-200/80 pt-5">
                    <div className="flex items-center gap-2 text-xs font-semibold text-zinc-500">
                      <Rocket size={14} />
                      Practical delivery
                    </div>

                    <Link
                      to={card.to}
                      className="inline-flex items-center justify-center gap-2 rounded-2xl border border-zinc-900 bg-zinc-950 px-4 py-3 text-sm font-bold text-white shadow-sm transition hover:-translate-y-1 hover:bg-purple-700"
                    >
                      {card.button}
                      <ArrowRight size={16} />
                    </Link>
                  </div>
                </div>
              </article>
            );
          })}
        </div>

        {/* Bottom premium CTA */}
        <div className="mt-20">
          <div className="relative overflow-hidden rounded-[36px] border border-zinc-900/20 bg-zinc-950 p-[1px] shadow-[0_28px_90px_rgba(24,24,27,0.18)]">
            <div className="absolute inset-0 bg-gradient-to-br from-zinc-950 via-purple-950 to-zinc-900" />
            <div className="absolute left-10 top-8 h-40 w-40 rounded-full bg-purple-500/20 blur-3xl" />
            <div className="absolute right-10 bottom-8 h-44 w-44 rounded-full bg-fuchsia-500/20 blur-3xl" />

            <div className="relative z-10 flex flex-col gap-8 rounded-[35px] border border-white/10 bg-white/[0.04] p-8 text-white backdrop-blur-xl lg:flex-row lg:items-center lg:justify-between lg:p-10">
              <div className="max-w-2xl">
                <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-3 py-1 text-[11px] font-bold uppercase tracking-[0.2em] text-purple-100">
                  <Sparkles size={12} />
                  Available for work
                </span>

                <h3 className="mt-5 text-3xl font-black tracking-[-0.03em] sm:text-4xl">
                  Need a clean website or web system?
                </h3>

                <p className="mt-4 max-w-xl text-sm leading-7 text-zinc-300 sm:text-base">
                  I can help with landing pages, portfolios, frontend
                  interfaces, Laravel systems, bug fixing, responsive UI, and
                  practical web development.
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
        </div>
      </div>
    </section>
  );
}

export default function Home() {
  useSEO({
    title: "Home | Ismail Markhi | Web Developer in Morocco",
    description:
      "Ismail Markhi is a web developer in Morocco specializing in React, Laravel, Tailwind CSS, and scalable full-stack web applications. Explore services, technology stack, and selected work.",
    path: "/",
    schema: "all",
    keywords: [
      "Ismail Markhi",
      "Ismail Markhi portfolio",
      "Web Developer Morocco",
      "React Developer Morocco",
      "Laravel Developer Morocco",
      "Full Stack Developer Morocco",
      "Tailwind CSS developer",
      "JavaScript developer portfolio",
    ],
  });

  return (
    <main className="flex flex-col bg-white">
      <Hero />

      <Suspense fallback={<SectionFallback height="h-72" />}>
        <TechStack />
      </Suspense>

      <HomeCTASection />
    </main>
  );
}