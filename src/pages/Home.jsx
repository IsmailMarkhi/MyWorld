import { lazy, Suspense } from "react";
import Hero from "../components/sections/Hero";
import useSEO from "../hooks/useSEO";

const Services = lazy(() => import("../components/sections/Services"));
const TechStack = lazy(() => import("../components/sections/TechStack"));
const Projects = lazy(() => import("../components/sections/Projects"));
const Contact = lazy(() => import("./Contact"));

function SectionFallback({ height = "h-64" }) {
  return (
    <div className="w-full py-16">
      <div className="mx-auto max-w-6xl px-5 sm:px-6 lg:px-8">
        <div className={`animate-pulse rounded-[28px] bg-zinc-100 ${height}`} />
      </div>
    </div>
  );
}

export default function Home() {
  useSEO({
    title: "Ismail Markhi | Web Developer",
    description:
      "Portfolio of Ismail Markhi, a web developer building modern, scalable web applications with React, Laravel, PHP, and Python.",
    path: "/",
    schema: "both",
    keywords: [
      "Ismail Markhi",
      "Web Developer",
      "React Developer",
      "Laravel Developer",
      "Portfolio",
      "Frontend Developer",
      "Morocco",
    ],
  });

  return (
    <main className="flex flex-col">
      <Hero />

      <Suspense fallback={<SectionFallback height="h-80" />}>
        <Services />
      </Suspense>

      <Suspense fallback={<SectionFallback height="h-72" />}>
        <TechStack />
      </Suspense>

      <Suspense fallback={<SectionFallback height="h-[32rem]" />}>
        <Projects />
      </Suspense>

      <Suspense fallback={<SectionFallback height="h-80" />}>
        <Contact />
      </Suspense>
    </main>
  );
}