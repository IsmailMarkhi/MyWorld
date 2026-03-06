import Hero from "../components/sections/Hero";
import TechStack from "../components/sections/TechStack";
import Services from "../components/sections/Services";
import useSEO from "../hooks/useSEO";

export default function Home() {

  useSEO({
    title: "Ismail Markhi | Web Developer",
    description: "Portfolio of Ismail Markhi.",
    path: "/",
  });

  return (
    <>
      <Hero />
      <TechStack />
      <Services />
    </>
  );
}