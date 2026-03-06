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
    <section className="py-24 bg-zinc-50">

      <Container>

        <SectionTitle
          title="Services"
          description="Practical development services I can help you with."
        />

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 mt-12">

          {services.map((service) => {
            const Icon = service.icon;

            return (
              <article
                key={service.title}
                className="
                p-6
                bg-white
                border border-zinc-200
                rounded-xl
                hover:shadow-lg
                hover:-translate-y-1
                transition
                "
              >

                <Icon className="text-indigo-600 text-2xl mb-4" />

                <h3 className="text-lg font-semibold text-zinc-900 mb-2">
                  {service.title}
                </h3>

                <p className="text-sm text-zinc-600">
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