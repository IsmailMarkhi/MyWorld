import Container from "../ui/Container";
import SectionTitle from "../ui/SectionTitle";

import {
  FaCode,
  FaLaptopCode,
  FaServer,
  FaDatabase,
  FaBug,
  FaPaintBrush,
  FaRocket,
  FaGlobe
} from "react-icons/fa";

const services = [
  {
    title: "Website Development",
    desc: "Complete websites for businesses and personal projects.",
    icon: FaGlobe
  },
  {
    title: "Landing Pages",
    desc: "Modern landing pages designed to convert visitors.",
    icon: FaRocket
  },
  {
    title: "Frontend Development",
    desc: "Building responsive interfaces using React and Tailwind.",
    icon: FaLaptopCode
  },
  {
    title: "Backend Development",
    desc: "Backend systems using PHP, Laravel and MySQL.",
    icon: FaServer
  },
  {
    title: "Database Integration",
    desc: "Designing and connecting MySQL databases.",
    icon: FaDatabase
  },
  {
    title: "Bug Fixing",
    desc: "Debugging JavaScript, PHP and frontend issues.",
    icon: FaBug
  },
  {
    title: "UI Improvements",
    desc: "Improving layouts, spacing and usability.",
    icon: FaPaintBrush
  },
  {
    title: "Code Optimization",
    desc: "Cleaning and improving existing codebases.",
    icon: FaCode
  }
];

export default function Services() {
  return (
    <section className="relative py-24 
bg-gradient-to-b 
from-white 
via-purple-200/30 
to-white">

      {/* subtle glow */}
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(circle_at_center,rgba(168,85,247,0.08),transparent_70%)]" />

      <Container>

        <SectionTitle
          title="Services"
          description="Practical development services I can help you with."
        />

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 mt-14">

          {services.map((service) => {
            const Icon = service.icon;

            return (
              <article
                key={service.title}
                className="
                group
                p-7
                bg-white
                border border-purple-900
                rounded-xl
                shadow-sm
                hover:shadow-md
                hover:-translate-y-1
                hover:border-purple-600
                transition
                "
              >

                {/* icon */}
                <div className="
                  w-11 h-11
                  flex items-center justify-center
                  rounded-lg
                  bg-purple-100
                  text-purple-600
                  mb-4
                  group-hover:scale-110
                  transition
                ">
                  <Icon size={20} />
                </div>

                <h3 className="text-lg font-semibold text-zinc-900 mb-2">
                  {service.title}
                </h3>

                <p className="text-sm text-zinc-600 leading-relaxed">
                  {service.desc}
                </p>

              </article>
            );
          })}

        </div>

      </Container>

    </section>
  );
}