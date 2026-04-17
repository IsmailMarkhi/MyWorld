import { lazy, Suspense } from "react";
import Hero from "../components/sections/Hero";
import useSEO from "../hooks/useSEO";

const Services = lazy(() => import("../components/sections/Services"));
const TechStack = lazy(() => import("../components/sections/TechStack"));
const Projects = lazy(() => import("../components/sections/Projects"));
const ContactSection = lazy(() => import("../components/sections/ContactSection"));

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
  title: "Ismail Markhi | Web Developer in Morocco | React & Laravel Specialist",
  description:
    "Ismail Markhi is a web developer in Morocco specializing in React, Laravel, Tailwind CSS, and scalable full-stack web applications. Explore projects, skills, and portfolio work.",
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
        <ContactSection />
      </Suspense>
    </main>
  );
}