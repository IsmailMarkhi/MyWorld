import Container from "../ui/Container";
import SectionTitle from "../ui/SectionTitle";
import { motion } from "framer-motion";

import {
  FaCode,
  FaLaptopCode,
  FaServer,
  FaDatabase,
  FaBug,
  FaPaintBrush,
  FaRocket,
  FaGlobe,
} from "react-icons/fa";

const services = [
  {
    title: "Website Development",
    desc: "Complete websites for businesses and personal projects with clean structure, responsive layouts, and modern user experience.",
    icon: FaGlobe,
  },
  {
    title: "Landing Pages",
    desc: "High-converting landing pages designed to present services clearly and guide visitors toward action.",
    icon: FaRocket,
  },
  {
    title: "Frontend Development",
    desc: "Responsive interfaces built with React and Tailwind, focused on clarity, performance, and maintainability.",
    icon: FaLaptopCode,
  },
  {
    title: "Backend Development",
    desc: "Backend systems using PHP, Laravel, and MySQL with practical structure and scalable logic.",
    icon: FaServer,
  },
  {
    title: "Database Integration",
    desc: "Designing and connecting MySQL databases with clean relationships and reliable data handling.",
    icon: FaDatabase,
  },
  {
    title: "Bug Fixing",
    desc: "Debugging frontend and backend issues in JavaScript, PHP, and responsive interfaces.",
    icon: FaBug,
  },
  {
    title: "UI Improvements",
    desc: "Improving layouts, spacing, consistency, and usability to create a more polished product experience.",
    icon: FaPaintBrush,
  },
  {
    title: "Code Optimization",
    desc: "Cleaning codebases, improving readability, and making projects easier to scale and maintain.",
    icon: FaCode,
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay,
      duration: 0.65,
      ease: [0.22, 1, 0.36, 1],
    },
  }),
};

export default function Services() {
  return (
    <section
      id="services"
      className="relative overflow-hidden bg-gradient-to-b from-white via-zinc-50/80 to-white py-20 sm:py-24 lg:py-28"
    >
      {/* soft background accents */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-[8%] top-20 h-44 w-44 rounded-full bg-purple-100/70 blur-3xl" />
        <div className="absolute right-[10%] bottom-16 h-52 w-52 rounded-full bg-fuchsia-100/60 blur-3xl" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(168,85,247,0.05),transparent_65%)]" />
      </div>

      <Container>
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          custom={0.05}
        >
          <SectionTitle
            title="Services"
            description="Practical development services focused on clean interfaces, strong structure, and modern web execution."
          />
        </motion.div>

        <div className="relative mt-14 grid gap-5 sm:gap-6 md:grid-cols-2 xl:grid-cols-4">
          {services.map((service, index) => {
            const Icon = service.icon;

            return (
              <motion.article
                key={service.title}
                variants={fadeUp}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.15 }}
                custom={0.08 + index * 0.05}
                className="
                  group relative overflow-hidden
                  rounded-[24px]
                  border border-zinc-200/80
                  bg-white/95
                  p-6 sm:p-7
                  shadow-[0_8px_30px_rgba(0,0,0,0.05)]
                  transition-all duration-500
                  hover:-translate-y-[6px]
                  hover:border-purple-300
                  hover:shadow-[0_20px_60px_rgba(0,0,0,0.10)]
                "
              >
                {/* hover glow */}
                <div className="absolute inset-0 bg-gradient-to-br from-purple-50 via-white to-fuchsia-50 opacity-0 transition duration-500 group-hover:opacity-100" />

                {/* top accent line */}
                <div className="absolute left-0 top-0 h-[2px] w-full bg-gradient-to-r from-transparent via-purple-400 to-transparent opacity-0 transition duration-500 group-hover:opacity-100" />

                <div className="relative z-10">
                  {/* icon */}
                  <div
                    className="
                      mb-5 flex h-14 w-14 items-center justify-center
                      rounded-2xl
                      border border-purple-200/70
                      bg-gradient-to-br from-purple-50 to-white
                      text-purple-600
                      shadow-sm
                      transition duration-500
                      group-hover:scale-[1.06]
                      group-hover:border-purple-300
                      group-hover:shadow-[0_10px_30px_rgba(147,51,234,0.10)]
                    "
                  >
                    <Icon size={20} />
                  </div>

                  <h3 className="text-lg font-semibold tracking-tight text-zinc-900">
                    {service.title}
                  </h3>

                  <p className="mt-3 text-sm leading-7 text-zinc-600">
                    {service.desc}
                  </p>
                </div>
              </motion.article>
            );
          })}
        </div>
      </Container>
    </section>
  );
}