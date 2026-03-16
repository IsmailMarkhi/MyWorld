import Hero from "../components/sections/Hero";
import TechStack from "../components/sections/TechStack";
import Services from "../components/sections/Services";
import Projects from "./Projects";
import Contact from "./Contact";
import useSEO from "../hooks/useSEO";

export default function Home() {

  useSEO({
    title: "Ismail Markhi | Web Developer",
    description: "Portfolio of Ismail Markhi.",
    path: "/",
  });

  return (
    <main className="flex flex-col">

      <section
        id="home"
        className="scroll-mt-24"
      >
        <Hero />
      </section>

      <section
        id="projects"
        className="scroll-mt-24 py-20"
      >
        <Projects />
      </section>

      <section
        id="tech"
        className="scroll-mt-24 py-20"
      >
        <TechStack />
      </section>

      <section
        id="services"
        className="scroll-mt-24 py-20 bg-purple-900"
      >
        <Services />
      </section>

      <section
        id="contact"
        className="scroll-mt-24 py-20"
      >
        <Contact />
      </section>

    </main>
  );
}