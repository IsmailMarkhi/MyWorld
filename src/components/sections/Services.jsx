import { motion } from "framer-motion";
import { Link } from "react-router-dom";
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
  FaGlobe,
  FaMobileAlt,
} from "react-icons/fa";
import { ArrowRight } from "lucide-react";

const services = [
  {
    title: "Full Website Development",
    desc: "Modern websites with clean structure, responsive layouts, and strong user experience.",
    icon: FaGlobe,
    tag: "Business websites",
  },
  {
    title: "Landing Pages",
    desc: "Focused pages designed to present services clearly and guide visitors toward action.",
    icon: FaRocket,
    tag: "Lead generation",
  },
  {
    title: "Frontend Development",
    desc: "Responsive React and Tailwind interfaces built for clarity, speed, and maintainability.",
    icon: FaLaptopCode,
    tag: "React + Tailwind",
  },
  {
    title: "Backend Development",
    desc: "Laravel and PHP backend systems with scalable logic and practical architecture.",
    icon: FaServer,
    tag: "Laravel systems",
  },
  {
    title: "Database Integration",
    desc: "Clean MySQL relationships, stable data handling, and reliable project structure.",
    icon: FaDatabase,
    tag: "Data structure",
  },
  {
    title: "Bug Fixing",
    desc: "Frontend and backend debugging for JavaScript, React, PHP, and Laravel projects.",
    icon: FaBug,
    tag: "Fixes & stability",
  },
  {
    title: "UI/UX Improvements",
    desc: "Better spacing, hierarchy, consistency, and usability for a more polished product.",
    icon: FaPaintBrush,
    tag: "Better usability",
  },
  {
    title: "Responsive Mobile-First UI",
    desc: "Interfaces that work smoothly across phones, tablets, and desktop screens.",
    icon: FaMobileAlt,
    tag: "All devices",
  },
  {
    title: "Code Optimization",
    desc: "Cleaner, more maintainable codebases with better scalability and performance.",
    icon: FaCode,
    tag: "Cleaner code",
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
    <section className="relative overflow-hidden bg-gradient-to-b from-white via-zinc-50/80 to-white py-20 sm:py-24 lg:py-28">
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
            description="Practical web development services focused on clean UI, strong structure, and modern execution."
          />
        </motion.div>

        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.15 }}
          custom={0.1}
          className="relative mx-auto mt-10 max-w-4xl rounded-[28px] border border-purple-200/60 bg-white/80 p-6 text-center shadow-[0_10px_40px_rgba(0,0,0,0.05)] backdrop-blur-xl sm:p-8"
        >
          <div className="absolute inset-0 rounded-[28px] bg-gradient-to-r from-purple-50/70 via-white to-fuchsia-50/70" />
          <div className="relative z-10">
            <span className="inline-flex rounded-full border border-purple-200 bg-purple-50 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.2em] text-purple-700">
              Client-Focused Work
            </span>
            <p className="mx-auto mt-4 max-w-2xl text-sm leading-7 text-zinc-600 sm:text-base">
              I build websites and interfaces that look professional, feel clear
              to use, and stay maintainable as they grow.
            </p>
          </div>
        </motion.div>

        <div className="relative mt-14 grid gap-5 sm:gap-6 md:grid-cols-2 xl:grid-cols-3">
          {services.map((service, index) => {
            const Icon = service.icon;

            return (
              <motion.article
                key={service.title}
                variants={fadeUp}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.15 }}
                custom={0.12 + index * 0.04}
                className="
                  group relative overflow-hidden
                  rounded-[26px] border border-zinc-200/80
                  bg-white/95 p-6 sm:p-7
                  shadow-[0_8px_30px_rgba(0,0,0,0.05)]
                  transition-all duration-500
                  hover:-translate-y-[6px]
                  hover:border-purple-300
                  hover:shadow-[0_20px_60px_rgba(0,0,0,0.10)]
                "
              >
                <div className="absolute inset-0 bg-gradient-to-br from-purple-50 via-white to-fuchsia-50 opacity-0 transition duration-500 group-hover:opacity-100" />
                <div className="absolute left-0 top-0 h-[2px] w-full bg-gradient-to-r from-transparent via-purple-400 to-transparent opacity-0 transition duration-500 group-hover:opacity-100" />

                <div className="relative z-10 flex h-full flex-col">
                  <div className="mb-5 flex items-start justify-between gap-3">
                    <div
                      className="
                        flex h-14 w-14 items-center justify-center rounded-2xl
                        border border-purple-200/70 bg-gradient-to-br from-purple-50 to-white
                        text-purple-600 shadow-sm transition duration-500
                        group-hover:scale-[1.06] group-hover:border-purple-300
                        group-hover:shadow-[0_10px_30px_rgba(147,51,234,0.10)]
                      "
                    >
                      <Icon size={20} />
                    </div>

                    <span className="rounded-full border border-zinc-200 bg-zinc-50 px-3 py-1 text-[11px] font-semibold text-zinc-600">
                      {service.tag}
                    </span>
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

        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.15 }}
          custom={0.2}
          className="mt-16"
        >
          <div className="rounded-[30px] border border-zinc-200 bg-white p-7 shadow-[0_10px_35px_rgba(0,0,0,0.05)] sm:p-8 lg:p-10">
            <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
              <div className="max-w-2xl">
                <span className="inline-flex rounded-full border border-purple-200 bg-purple-50 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.2em] text-purple-700">
                  Need more details?
                </span>

                <h3 className="mt-4 text-2xl font-semibold tracking-tight text-zinc-900 sm:text-3xl">
                  Explore the full services page.
                </h3>

                <p className="mt-3 text-sm leading-7 text-zinc-600 sm:text-base">
                  See the full list of services, why to work with me, how I
                  build, and the value I focus on for real projects.
                </p>
              </div>

              <div className="flex flex-col gap-3 sm:flex-row">
                <Link
                  to="/services"
                  className="inline-flex items-center justify-center gap-2 rounded-2xl bg-zinc-900 px-5 py-3 text-sm font-medium text-white transition hover:bg-purple-700"
                >
                  View Services
                  <ArrowRight size={16} />
                </Link>

                <Link
                  to="/contact"
                  className="inline-flex items-center justify-center rounded-2xl border border-zinc-300 px-5 py-3 text-sm font-medium text-zinc-800 transition hover:border-purple-300 hover:text-purple-700"
                >
                  Contact Me
                </Link>
              </div>
            </div>
          </div>
        </motion.div>
      </Container>
    </section>
  );
}