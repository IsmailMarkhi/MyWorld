import { lazy, Suspense } from "react";
import { Link } from "react-router-dom";
import Hero from "../components/sections/Hero";
import useSEO from "../hooks/useSEO";

const Services = lazy(() => import("../components/sections/Services"));
const TechStack = lazy(() => import("../components/sections/TechStack"));

function SectionFallback({ height = "h-64" }) {
  return (
    <div className="w-full py-16">
      <div className="mx-auto max-w-6xl px-5 sm:px-6 lg:px-8">
        <div className={`animate-pulse rounded-[28px] bg-zinc-100 ${height}`} />
      </div>
    </div>
  );
}

function HomeCTASection() {
  return (
    <section className="w-full py-20">
      <div className="mx-auto max-w-6xl px-5 sm:px-6 lg:px-8">
        <div className="grid gap-6 md:grid-cols-3">
          {/* Services */}
          <div className="rounded-[28px] border border-zinc-200 bg-white p-8 shadow-sm">
            <span className="mb-3 inline-block rounded-full border border-purple-200 bg-purple-50 px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-purple-700">
              Services
            </span>

            <h2 className="text-2xl font-semibold tracking-tight text-zinc-900">
              Discover my services
            </h2>

            <p className="mt-3 text-sm leading-7 text-zinc-600 sm:text-base">
              Explore practical web development services focused on clean UI,
              strong structure, and scalable modern applications.
            </p>

            <Link
              to="/services"
              className="mt-6 inline-flex items-center rounded-2xl bg-zinc-900 px-5 py-3 text-sm font-medium text-white transition hover:bg-purple-700"
            >
              View Services
            </Link>
          </div>

          {/* Projects */}
          <div className="rounded-[28px] border border-zinc-200 bg-white p-8 shadow-sm">
            <span className="mb-3 inline-block rounded-full border border-purple-200 bg-purple-50 px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-purple-700">
              Projects
            </span>

            <h2 className="text-2xl font-semibold tracking-tight text-zinc-900">
              Explore selected work
            </h2>

            <p className="mt-3 text-sm leading-7 text-zinc-600 sm:text-base">
              See practical frontend and full-stack projects built with React,
              Laravel, Tailwind CSS, and scalable UI architecture.
            </p>

            <Link
              to="/projects"
              className="mt-6 inline-flex items-center rounded-2xl bg-zinc-900 px-5 py-3 text-sm font-medium text-white transition hover:bg-purple-700"
            >
              View Projects
            </Link>
          </div>

          {/* Contact */}
          <div className="rounded-[28px] border border-zinc-200 bg-white p-8 shadow-sm">
            <span className="mb-3 inline-block rounded-full border border-zinc-200 bg-zinc-50 px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-zinc-700">
              Contact
            </span>

            <h2 className="text-2xl font-semibold tracking-tight text-zinc-900">
              Let’s build something clean and useful
            </h2>

            <p className="mt-3 text-sm leading-7 text-zinc-600 sm:text-base">
              Need a portfolio, landing page, frontend interface, or a scalable
              web application structure? Get in touch through the contact page.
            </p>

            <Link
              to="/contact"
              className="mt-6 inline-flex items-center rounded-2xl border border-zinc-300 px-5 py-3 text-sm font-medium text-zinc-800 transition hover:border-purple-300 hover:text-purple-700"
            >
              Contact Me
            </Link>
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
    <main className="flex flex-col">
      <Hero />
      
      <Suspense fallback={<SectionFallback height="h-72" />}>
        <TechStack />
      </Suspense>

      <HomeCTASection />
    </main>
  );
}