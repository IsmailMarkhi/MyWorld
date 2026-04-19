import { memo } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import useSEO from "../hooks/useSEO";
import Container from "../components/ui/Container";
import SectionTitle from "../components/ui/SectionTitle";

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
  FaSearch,
  FaShoppingCart,
  FaTools,
  FaBolt,
  FaLayerGroup,
  FaHandshake,
  FaCheckCircle,
} from "react-icons/fa";
import { ArrowRight, CheckCircle2, MessageCircle, Clock3 } from "lucide-react";

const services = [
  {
    title: "Full Website Development",
    desc: "Complete websites for businesses and personal brands with clean structure, responsive layouts, and modern user experience.",
    icon: FaGlobe,
    tag: "Business websites",
  },
  {
    title: "High-Converting Landing Pages",
    desc: "Landing pages designed to present services clearly, build trust fast, and guide visitors toward action.",
    icon: FaRocket,
    tag: "Lead generation",
  },
  {
    title: "Modern Frontend Development",
    desc: "Responsive interfaces built with React and Tailwind CSS, focused on clarity, maintainability, and smooth interaction.",
    icon: FaLaptopCode,
    tag: "React + Tailwind",
  },
  {
    title: "Backend Development",
    desc: "Backend systems using PHP, Laravel, and MySQL with practical architecture, scalable logic, and clean organization.",
    icon: FaServer,
    tag: "Laravel systems",
  },
  {
    title: "Database Integration",
    desc: "Designing and connecting MySQL databases with clean relationships, stable queries, and reliable data flows.",
    icon: FaDatabase,
    tag: "Data structure",
  },
  {
    title: "Bug Fixing & Debugging",
    desc: "Solving frontend and backend issues in JavaScript, PHP, React, Laravel, and responsive interfaces.",
    icon: FaBug,
    tag: "Fixes & stability",
  },
  {
    title: "UI/UX Improvements",
    desc: "Improving layout structure, spacing, consistency, readability, and overall user experience for a more polished product.",
    icon: FaPaintBrush,
    tag: "Better usability",
  },
  {
    title: "Code Optimization",
    desc: "Refactoring codebases to improve readability, maintainability, performance, and future scalability.",
    icon: FaCode,
    tag: "Cleaner code",
  },
  {
    title: "Portfolio Websites",
    desc: "Professional portfolio websites for students, freelancers, and developers who want a strong online presence.",
    icon: FaSearch,
    tag: "Personal branding",
  },
  {
    title: "E-Commerce Interfaces",
    desc: "Modern storefront interfaces with clean product presentation, cart flows, and strong responsive shopping UX.",
    icon: FaShoppingCart,
    tag: "Online stores",
  },
  {
    title: "Responsive Mobile-First UI",
    desc: "Interfaces designed to work smoothly across phones, tablets, and desktops with consistent visual quality.",
    icon: FaMobileAlt,
    tag: "All devices",
  },
  {
    title: "Maintenance & Updates",
    desc: "Improving existing websites with redesigns, fixes, content updates, and structural enhancements.",
    icon: FaTools,
    tag: "Existing projects",
  },
];

const reasons = [
  {
    title: "Clean Structure",
    desc: "I build with organized components, practical architecture, and code that stays manageable as the project grows.",
    icon: FaLayerGroup,
  },
  {
    title: "Strong UI Quality",
    desc: "I focus on spacing, hierarchy, responsiveness, and interaction quality so the product feels polished and professional.",
    icon: FaPaintBrush,
  },
  {
    title: "Fast, Practical Delivery",
    desc: "I work with execution in mind: clear scope, focused implementation, and solutions that actually move the project forward.",
    icon: FaBolt,
  },
  {
    title: "Good Value",
    desc: "My goal is simple: keep pricing accessible while maintaining serious work quality, clarity, and real technical care.",
    icon: FaHandshake,
  },
];

const processSteps = [
  {
    step: "01",
    title: "Understand the goal",
    desc: "I first identify what the website or interface needs to achieve: branding, leads, usability, store flow, or system clarity.",
  },
  {
    step: "02",
    title: "Plan the structure",
    desc: "I define sections, layout logic, content flow, and the technical approach before building the final interface.",
  },
  {
    step: "03",
    title: "Build and refine",
    desc: "I develop the interface with responsiveness, visual quality, and scalable code structure in mind.",
  },
  {
    step: "04",
    title: "Optimize and deliver",
    desc: "I improve performance, consistency, and usability before final delivery so the result feels clean and ready to use.",
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
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

const ServiceCard = memo(function ServiceCard({ service, index }) {
  const Icon = service.icon;

  return (
    <motion.article
      variants={fadeUp}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.15 }}
      custom={0.1 + index * 0.04}
      className="
        group relative overflow-hidden rounded-[26px]
        border border-zinc-200/80 bg-white/95 p-6 sm:p-7
        shadow-[0_8px_30px_rgba(0,0,0,0.05)]
        transition-all duration-500 hover:-translate-y-[6px]
        hover:border-purple-300 hover:shadow-[0_20px_60px_rgba(0,0,0,0.10)]
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

        <p className="mt-3 text-sm leading-7 text-zinc-600">{service.desc}</p>

        <div className="mt-5 border-t border-zinc-100 pt-4">
          <p className="text-xs font-medium uppercase tracking-[0.18em] text-purple-600">
            Ideal for
          </p>
          <p className="mt-2 text-sm text-zinc-500">
            Startups, freelancers, businesses, and personal brands that need
            stronger web presence and cleaner execution.
          </p>
        </div>
      </div>
    </motion.article>
  );
});

export default function ServicesPage() {
  useSEO({
    title: "Services | Ismail Markhi | Web Developer in Morocco",
    description:
      "Explore web development services by Ismail Markhi including React frontend development, Laravel backend systems, landing pages, UI/UX improvements, and scalable websites.",
    path: "/services",
    schema: "all",
    keywords: [
      "Web development services Morocco",
      "React developer Morocco",
      "Laravel developer Morocco",
      "Frontend services",
      "Website development services",
      "Landing page development",
      "UI UX improvement services",
      "Freelance web developer Morocco",
    ],
  });

  return (
    <main className="relative overflow-hidden bg-gradient-to-b from-white via-zinc-50/70 to-white pt-28 pb-24">
      {/* Atmosphere */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-[8%] top-24 h-48 w-48 rounded-full bg-purple-100/70 blur-3xl" />
        <div className="absolute right-[10%] top-40 h-64 w-64 rounded-full bg-fuchsia-100/60 blur-3xl" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(168,85,247,0.05),transparent_65%)]" />
      </div>

      <Container>
        {/* HERO */}
        <motion.section
          variants={fadeUp}
          initial="hidden"
          animate="show"
          custom={0.03}
          className="relative"
        >
          <div className="grid gap-8 lg:grid-cols-[1.15fr_0.85fr] lg:items-center">
            <div>
              <span className="inline-flex rounded-full border border-purple-200 bg-purple-50 px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.2em] text-purple-700">
                Services
              </span>

              <h1 className="mt-6 max-w-3xl text-4xl font-bold tracking-tight text-zinc-900 sm:text-5xl lg:text-6xl">
                Clean websites. Strong structure. Serious quality at an accessible price.
              </h1>

              <p className="mt-6 max-w-2xl text-base leading-8 text-zinc-600 sm:text-lg">
                I build modern websites and interfaces with a practical mindset:
                clean UI, responsive layouts, strong code structure, and real
                attention to usability. My goal is simple — keep pricing
                reasonable while delivering work that looks professional and
                feels solid.
              </p>

              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <Link
                  to="/contact"
                  className="inline-flex items-center justify-center gap-2 rounded-2xl bg-zinc-900 px-6 py-3.5 text-sm font-medium text-white transition hover:bg-purple-700"
                >
                  Start a Project
                  <ArrowRight size={16} />
                </Link>

                <Link
                  to="/projects"
                  className="inline-flex items-center justify-center rounded-2xl border border-zinc-300 px-6 py-3.5 text-sm font-medium text-zinc-800 transition hover:border-purple-300 hover:text-purple-700"
                >
                  View Work
                </Link>
              </div>

              <div className="mt-8 flex flex-wrap gap-5 text-sm text-zinc-500">
                <div className="inline-flex items-center gap-2">
                  <CheckCircle2 size={16} className="text-purple-600" />
                  Responsive by default
                </div>
                <div className="inline-flex items-center gap-2">
                  <CheckCircle2 size={16} className="text-purple-600" />
                  Clean scalable code
                </div>
                <div className="inline-flex items-center gap-2">
                  <CheckCircle2 size={16} className="text-purple-600" />
                  Practical pricing
                </div>
              </div>
            </div>

            <div className="rounded-[30px] border border-zinc-200 bg-white/90 p-6 shadow-[0_15px_50px_rgba(0,0,0,0.06)] backdrop-blur-xl sm:p-8">
              <div className="grid gap-4">
                <div className="rounded-2xl border border-zinc-100 bg-zinc-50 p-5">
                  <div className="flex items-center gap-3">
                    <Clock3 className="text-purple-600" size={18} />
                    <p className="text-sm font-semibold text-zinc-900">
                      Fast, focused execution
                    </p>
                  </div>
                  <p className="mt-2 text-sm leading-7 text-zinc-600">
                    I avoid unnecessary complexity and focus on what makes the
                    product look better, work better, and convert better.
                  </p>
                </div>

                <div className="rounded-2xl border border-zinc-100 bg-zinc-50 p-5">
                  <div className="flex items-center gap-3">
                    <FaCheckCircle className="text-purple-600" size={16} />
                    <p className="text-sm font-semibold text-zinc-900">
                      Low price, high care
                    </p>
                  </div>
                  <p className="mt-2 text-sm leading-7 text-zinc-600">
                    I aim to offer strong value: accessible pricing without
                    sacrificing clarity, responsiveness, or technical quality.
                  </p>
                </div>

                <div className="rounded-2xl border border-zinc-100 bg-zinc-50 p-5">
                  <div className="flex items-center gap-3">
                    <MessageCircle className="text-purple-600" size={18} />
                    <p className="text-sm font-semibold text-zinc-900">
                      Direct communication
                    </p>
                  </div>
                  <p className="mt-2 text-sm leading-7 text-zinc-600">
                    You get a clear process, clean deliverables, and direct
                    discussion instead of confusion and wasted time.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </motion.section>

        {/* WHY CHOOSE ME */}
        <motion.section
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.15 }}
          custom={0.07}
          className="mt-20"
        >
          <SectionTitle
            title="Why choose me"
            description="I focus on practical execution, clean interfaces, and strong structure — not just making something that looks good in a screenshot."
          />

          <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
            {reasons.map((reason, index) => {
              const Icon = reason.icon;

              return (
                <motion.article
                  key={reason.title}
                  variants={fadeUp}
                  initial="hidden"
                  whileInView="show"
                  viewport={{ once: true, amount: 0.15 }}
                  custom={0.1 + index * 0.04}
                  className="rounded-[26px] border border-zinc-200 bg-white p-6 shadow-[0_8px_30px_rgba(0,0,0,0.04)]"
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-purple-50 text-purple-600">
                    <Icon size={20} />
                  </div>
                  <h2 className="mt-5 text-lg font-semibold text-zinc-900">
                    {reason.title}
                  </h2>
                  <p className="mt-3 text-sm leading-7 text-zinc-600">
                    {reason.desc}
                  </p>
                </motion.article>
              );
            })}
          </div>
        </motion.section>

        {/* SERVICES GRID */}
        <section className="mt-20">
          <SectionTitle
            title="What I can build and improve"
            description="Services designed for real needs: stronger online presence, cleaner UI, better structure, and maintainable web products."
          />

          <div className="relative mt-14 grid gap-5 sm:gap-6 md:grid-cols-2 xl:grid-cols-3">
            {services.map((service, index) => (
              <ServiceCard key={service.title} service={service} index={index} />
            ))}
          </div>
        </section>

        {/* PROCESS */}
        <motion.section
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.15 }}
          custom={0.12}
          className="mt-20"
        >
          <SectionTitle
            title="How I work"
            description="A simple process focused on clarity, speed, and practical results."
          />

          <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
            {processSteps.map((item, index) => (
              <motion.article
                key={item.step}
                variants={fadeUp}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.15 }}
                custom={0.1 + index * 0.04}
                className="rounded-[26px] border border-zinc-200 bg-white p-6 shadow-[0_8px_30px_rgba(0,0,0,0.04)]"
              >
                <span className="inline-flex rounded-full border border-purple-200 bg-purple-50 px-3 py-1 text-xs font-semibold text-purple-700">
                  {item.step}
                </span>

                <h3 className="mt-5 text-lg font-semibold text-zinc-900">
                  {item.title}
                </h3>

                <p className="mt-3 text-sm leading-7 text-zinc-600">
                  {item.desc}
                </p>
              </motion.article>
            ))}
          </div>
        </motion.section>

        {/* VALUE STRIP */}
        <motion.section
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.15 }}
          custom={0.14}
          className="mt-20"
        >
          <div className="rounded-[30px] border border-purple-200/60 bg-gradient-to-r from-purple-50 via-white to-fuchsia-50 p-7 shadow-[0_10px_40px_rgba(0,0,0,0.04)] sm:p-8 lg:p-10">
            <div className="grid gap-6 lg:grid-cols-[1fr_auto] lg:items-center">
              <div>
                <span className="inline-flex rounded-full border border-purple-200 bg-white px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.2em] text-purple-700">
                  Value proposition
                </span>

                <h3 className="mt-4 text-2xl font-semibold tracking-tight text-zinc-900 sm:text-3xl">
                  Good quality should not feel unreachable.
                </h3>

                <p className="mt-3 max-w-2xl text-sm leading-7 text-zinc-600 sm:text-base">
                  I position my work around strong value: modern quality,
                  responsive execution, and clean structure at a price that
                  stays realistic for freelancers, students, and growing
                  businesses.
                </p>
              </div>

              <div className="flex flex-col gap-3 sm:flex-row lg:flex-col">
                <Link
                  to="/contact"
                  className="inline-flex items-center justify-center gap-2 rounded-2xl bg-zinc-900 px-5 py-3 text-sm font-medium text-white transition hover:bg-purple-700"
                >
                  Discuss Your Project
                  <ArrowRight size={16} />
                </Link>

                <Link
                  to="/projects"
                  className="inline-flex items-center justify-center rounded-2xl border border-zinc-300 px-5 py-3 text-sm font-medium text-zinc-800 transition hover:border-purple-300 hover:text-purple-700"
                >
                  See Real Work
                </Link>
              </div>
            </div>
          </div>
        </motion.section>
      </Container>
    </main>
  );
}