import Container from "../ui/Container";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { useState } from "react";

import { FaGithub, FaLinkedin } from "react-icons/fa";
import { SiFiverr } from "react-icons/si";

import {
  ArrowRight,
  Sparkles,
  CheckCircle2,
  BadgeCheck,
  Code2,
  Layers3,
  Rocket,
  FileText,
  X,
  ExternalLink,
} from "lucide-react";

/* ---------------------------------- */
/* Social Links */
/* ---------------------------------- */

const socialLinks = [
  {
    label: "GitHub",
    href: "https://github.com/IsmailMarkhi",
    icon: FaGithub,
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/ismailmarkhi",
    icon: FaLinkedin,
  },
  {
    label: "Fiverr",
    href: "https://www.fiverr.com/sellers/ismail1markhi",
    icon: SiFiverr,
  },
];

/* ---------------------------------- */
/* Highlights */
/* ---------------------------------- */

const highlights = [
  "10+ Projects Built",
  "React & Laravel Focus",
  "Responsive UI",
];

/* ---------------------------------- */
/* Tech Stack */
/* ---------------------------------- */

const techStack = [
  "React",
  "TailwindCss",
  "Laravel",
  "InertiaJs",
  "MySQL",
  "PHP",
  "NoSQL",
];

/* ---------------------------------- */
/* Statistics */
/* ---------------------------------- */

const stats = [
  {
    value: "10+",
    label: "Projects",
    icon: Layers3,
  },
  {
    value: "3 Years",
    label: "Experience",
    icon: Code2,
  },
  {
    value: "Open",
    label: "To Work",
    icon: Rocket,
  },
];

/* ---------------------------------- */
/* Animation Variants */
/* ---------------------------------- */

const fadeUp = {
  hidden: {
    opacity: 0,
    y: 30,
  },

  show: (delay = 0) => ({
    opacity: 1,
    y: 0,

    transition: {
      delay,
      duration: 0.8,
      ease: [0.22, 1, 0.36, 1],
    },
  }),
};

const scaleIn = {
  hidden: {
    opacity: 0,
    scale: 0.8,
  },

  show: (delay = 0) => ({
    opacity: 1,
    scale: 1,

    transition: {
      delay,
      duration: 0.8,
      ease: [0.22, 1, 0.36, 1],
    },
  }),
};

const floatingAnimation = {
  animate: {
    y: [0, -16, 0],
  },

  transition: {
    duration: 5,
    repeat: Infinity,
    ease: "easeInOut",
  },
};

const cardHover = {
  whileHover: {
    y: -8,
    scale: 1.03,
  },

  transition: {
    duration: 0.3,
  },
};

/* ---------------------------------- */
/* Developer Object */
/* ---------------------------------- */

const developer = {
  name: "Ismail Markhi",
  role: "Full-Stack Web Developer",
  experience: "3 Years",
  projects: "10+",
  location: "Morocco",
  stack: ["React","InertiaJs", "Laravel", "Tailwind", "MySQL", "NoSQL"],
  openToWork: true,
};

/* ---------------------------------- */
/* Avatar Icon Component */
/* ---------------------------------- */

const AvatarIcon = () => (
  <svg
    className="w-full h-full"
    viewBox="0 0 200 200"
    xmlns="http://www.w3.org/2000/svg"
  >
    <defs>
      <linearGradient id="avatarGradient" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="rgb(55, 27, 68)" />
        <stop offset="100%" stopColor="rgb(79, 59, 228)" />
      </linearGradient>
    </defs>
    
    {/* Background Circle */}
    <circle cx="100" cy="100" r="95" fill="url(#avatarGradient)" opacity="0.1" />
    <circle cx="100" cy="100" r="90" fill="none" stroke="url(#avatarGradient)" strokeWidth="2" opacity="0.3" />
    
    {/* Head */}
    <circle cx="100" cy="70" r="28" fill="url(#avatarGradient)" />
    
    {/* Body */}
    <path
      d="M 72 100 Q 72 110 80 115 L 120 115 Q 128 110 128 100 L 128 140 Q 128 150 100 150 Q 72 150 72 140 Z"
      fill="url(#avatarGradient)"
      opacity="0.9"
    />
    
    {/* Code brackets accent */}
    <g opacity="0.5" strokeWidth="3" stroke="url(#avatarGradient)" fill="none" strokeLinecap="round">
      <path d="M 55 130 L 60 135 L 55 140" />
      <path d="M 145 130 L 140 135 L 145 140" />
    </g>
  </svg>
);

/* ---------------------------------- */
/* CV Inspection Modal */
/* ---------------------------------- */

const CVModal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm p-4"
      onClick={onClose}
    >
      <motion.div
        initial={{ opacity: 0, scale: 0.9, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.9, y: 20 }}
        transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
        className="relative w-full max-w-4xl max-h-[90vh] rounded-2xl bg-white shadow-2xl overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="sticky top-0 z-10 flex items-center justify-between border-b border-zinc-200 bg-gradient-to-r from-purple-50 via-white to-fuchsia-50 px-6 py-4">
          <div className="flex items-center gap-3">
            <div className="h-10 w-10 rounded-lg bg-gradient-to-br from-purple-600 to-fuchsia-600 flex items-center justify-center text-white">
              <FileText size={20} />
            </div>
            <div>
              <h2 className="font-bold text-zinc-900">Curriculum Vitae</h2>
              <p className="text-xs text-zinc-500">Ismail Markhi</p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <a
              href="/resume.pdf"
              download="Ismail-Markhi-Resume.pdf"
              className="inline-flex items-center gap-2 px-3 py-2 rounded-lg bg-purple-600 text-white text-sm font-semibold hover:bg-purple-700 transition-colors duration-300"
              title="Download CV"
            >
              <ExternalLink size={16} />
              Download
            </a>
            <button
              onClick={onClose}
              className="p-2 rounded-lg hover:bg-zinc-100 transition-colors duration-200"
              title="Close"
            >
              <X size={20} className="text-zinc-500" />
            </button>
          </div>
        </div>

        {/* Content */}
        <div className="overflow-y-auto">
          <iframe
            src="/resume.pdf"
            className="w-full h-[calc(90vh-80px)]"
            title="CV Document"
          />

          {/* Fallback message */}
          <div className="flex flex-col items-center justify-center h-[calc(90vh-80px)] bg-zinc-50 p-8">
            <FileText size={48} className="text-zinc-300 mb-4" />
            <p className="text-zinc-600 text-center mb-4">
              If the PDF viewer doesn't work, please download the CV to view it.
            </p>
            <a
              href="/resume.pdf"
              download="Ismail-Markhi-Resume.pdf"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-gradient-to-r from-purple-600 to-fuchsia-600 text-white font-semibold hover:shadow-lg transition-all duration-300"
            >
              <ExternalLink size={18} />
              Download CV
            </a>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

/* ---------------------------------- */
/* Tech Badge Component */
/* ---------------------------------- */

const TechBadge = ({ tech, delay }) => (
  <motion.span
    variants={fadeUp}
    initial="hidden"
    animate="show"
    custom={delay}
    className="inline-flex items-center gap-2 rounded-xl border border-purple-200/50 bg-gradient-to-r from-purple-50 to-fuchsia-50 px-3 py-1.5 text-xs font-semibold text-purple-700 shadow-sm hover:border-purple-300 hover:shadow-md transition-all duration-300"
  >
    <span className="h-1.5 w-1.5 rounded-full bg-[rgb(109, 71, 197)] cursor-pointer" />
    {tech}
  </motion.span>
);

/* ---------------------------------- */
/* Highlight Badge Component */
/* ---------------------------------- */

const HighlightBadge = ({ item, delay }) => (
  <motion.span
    variants={fadeUp}
    initial="hidden"
    animate="show"
    custom={delay}
    className="inline-flex items-center gap-2 rounded-full border border-purple-200/40 bg-white/60 px-3.5 py-2 text-sm text-zinc-700 shadow-sm backdrop-blur transition-all duration-300 hover:border-purple-300 hover:bg-white/80 hover:text-purple-700 hover:shadow-md"
  >
    <CheckCircle2 size={16} className="text-[rgb(109, 71, 197)] flex-shrink-0 cursor-pointer" />
    {item}
  </motion.span>
);

/* ---------------------------------- */
/* Stat Card Component */
/* ---------------------------------- */

const StatCard = ({ stat, delay }) => {
  const Icon = stat.icon;
  
  return (
    <motion.article
      variants={scaleIn}
      initial="hidden"
      animate="show"
      custom={delay}
      whileHover={{ y: -6, boxShadow: "0 30px 80px rgba(168, 85, 247, 0.25)" }}
      className="group rounded-2xl border border-purple-200/40 bg-gradient-to-br from-white to-purple-50/30 p-5 text-center shadow-sm backdrop-blur transition-all duration-300"
    >
      <div className="mx-auto mb-3 h-12 w-12 rounded-xl bg-gradient-to-br from-purple-600 to-fuchsia-600 flex items-center justify-center text-white shadow-md group-hover:shadow-lg transition-shadow duration-300">
        <Icon size={20} />
      </div>
      <p className="text-2xl font-bold bg-gradient-to-r from-purple-600 to-fuchsia-600 bg-clip-text text-transparent">
        {stat.value}
      </p>
      <p className="mt-2 text-xs font-semibold uppercase tracking-wider text-zinc-600">
        {stat.label}
      </p>
    </motion.article>
  );
};

/* ---------------------------------- */
/* Main Hero Component */
/* ---------------------------------- */

export default function Hero() {
  const [isCVModalOpen, setIsCVModalOpen] = useState(false);

  return (
    <>
      <section
        id="home"
        aria-labelledby="hero-title"
        className="relative overflow-hidden bg-gradient-to-b from-white via-purple-50/30 to-white pt-32 pb-20 sm:pt-40 sm:pb-24 lg:pt-48 lg:pb-32"
      >
        {/* Animated Background Elements */}
        <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden="true">
          <div className="absolute left-[5%] top-20 h-64 w-64 rounded-full bg-purple-200/30 blur-3xl animate-pulse" />
          <div className="absolute right-[7%] top-40 h-72 w-72 rounded-full bg-fuchsia-200/25 blur-3xl animate-pulse" style={{ animationDelay: "0.5s" }} />
          <div className="absolute bottom-0 left-1/2 h-80 w-80 -translate-x-1/2 rounded-full bg-indigo-200/20 blur-3xl" />
          
          {/* Grid Pattern */}
          <div className="absolute inset-0 bg-[linear-gradient(rgba(168,85,247,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(168,85,247,0.03)_1px,transparent_1px)] bg-[size:50px_50px]" />
        </div>

        <Container>
          <div className="relative grid items-center gap-20 lg:grid-cols-[1.1fr_1.2fr] lg:gap-28 xl:gap-32">
            {/* LEFT - Content */}
            <header className="max-w-3xl">
              {/* Badge */}
              <motion.div
                variants={fadeUp}
                initial="hidden"
                animate="show"
                custom={0.04}
                className="mb-6 flex flex-wrap items-center gap-3"
              >
                <div className="inline-flex items-center gap-2 rounded-full border border-purple-300 bg-gradient-to-r from-purple-50 to-fuchsia-50 px-4 py-2 text-xs font-semibold tracking-wide text-purple-700 shadow-sm backdrop-blur">
                  <Sparkles size={16} />
                  Full-Stack Developer
                </div>

                <div className="inline-flex items-center gap-2 rounded-full border border-purple-200/50 bg-white/70 px-3 py-2 text-[11px] font-medium text-zinc-600 shadow-sm backdrop-blur">
                  <BadgeCheck size={14} className="text-purple-600" />
                  Open to internship 
                </div>
              </motion.div>

              {/* Main Heading */}
              <motion.h1
                id="hero-title"
                variants={fadeUp}
                initial="hidden"
                animate="show"
                custom={0.12}
                className="text-4xl font-black leading-[1] tracking-tight sm:text-5xl md:text-6xl lg:text-7xl"
              >
                <span className="bg-gradient-to-r from-purple-600 via-purple-600 to-fuchsia-600 bg-clip-text text-transparent">
                  Ismail Markhi
                </span>
                <span className="mt-4 block text-4xl sm:text-5xl md:text-6xl lg:text-7xl bg-gradient-to-r from-zinc-900 via-purple-900 to-fuchsia-800 bg-clip-text text-transparent">
                  Full-Stack Developer
                </span>
              </motion.h1>

              {/* Description */}
              <motion.p
                variants={fadeUp}
                initial="hidden"
                animate="show"
                custom={0.2}
                className="mt-6 max-w-xl text-lg leading-relaxed text-zinc-700 sm:text-xl"
              >
                I craft responsive, high-performance web applications using{" "}
                <span className="font-semibold bg-gradient-to-r from-purple-600 to-fuchsia-600 bg-clip-text text-transparent">
                  React
                </span>
                ,{" "}
                <span className="font-semibold bg-gradient-to-r from-purple-600 to-fuchsia-600 bg-clip-text text-transparent">
                  Laravel
                </span>
                , and modern web technologies. With{" "}
                <span className="font-semibold bg-gradient-to-r from-purple-600 to-fuchsia-600 bg-clip-text text-transparent">
                  3+ years
                </span>{" "}
                of hands-on experience, I focus on clean architecture, intuitive UI, and real-world implementation.
              </motion.p>

              <motion.p
                variants={fadeUp}
                initial="hidden"
                animate="show"
                custom={0.24}
                className="mt-4 max-w-xl text-base text-zinc-600"
              >
                Portfolio includes 10+ projects spanning e-commerce, dashboards, landing pages, and full-stack learning systems.
              </motion.p>

              {/* Highlights */}
              <motion.div
                variants={fadeUp}
                initial="hidden"
                animate="show"
                custom={0.28}
                className="mt-8 flex flex-wrap gap-3"
              >
                {highlights.map((item, idx) => (
                  <HighlightBadge key={item} item={item} delay={0.28 + idx * 0.04} />
                ))}
              </motion.div>

              {/* Tech Stack */}
              <motion.div
                variants={fadeUp}
                initial="hidden"
                animate="show"
                custom={0.32}
                className="mt-6 flex flex-wrap gap-2"
              >
                {techStack.map((tech, idx) => (
                  <TechBadge key={tech} tech={tech} delay={0.32 + idx * 0.03} />
                ))}
              </motion.div>

              {/* Action Buttons */}
              <motion.div
                variants={fadeUp}
                initial="hidden"
                animate="show"
                custom={0.38}
                className="mt-10 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-center"
              >
                <Link
                  to="/projects"
                  className="group inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-purple-600 to-fuchsia-600 px-7 py-3.5 text-sm font-semibold text-white shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 active:translate-y-0"
                >
                  Explore Projects
                  <ArrowRight
                    size={18}
                    className="transition-transform duration-300 group-hover:translate-x-1.5"
                  />
                </Link>

                <button
                  onClick={() => setIsCVModalOpen(true)}
                  className="inline-flex items-center justify-center gap-2 rounded-xl border-2 border-purple-200 bg-white/80 px-6 py-3.5 text-sm font-semibold text-purple-700 shadow-md backdrop-blur transition-all duration-300 hover:-translate-y-1 hover:border-purple-300 hover:bg-white hover:shadow-lg active:translate-y-0"
                >
                  <FileText size={18} />
                  Inspect CV
                </button>

                <Link
                  to="/contact"
                  className="inline-flex items-center justify-center rounded-xl border-2 border-zinc-200 bg-white/60 px-6 py-3.5 text-sm font-semibold text-zinc-700 shadow-sm backdrop-blur transition-all duration-300 hover:-translate-y-1 hover:border-purple-300 hover:text-purple-700 hover:bg-white/80 hover:shadow-md active:translate-y-0"
                >
                  Get in Touch
                </Link>
              </motion.div>

              {/* Social Links */}
              <motion.div
                variants={fadeUp}
                initial="hidden"
                animate="show"
                custom={0.44}
                className="mt-10 flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between"
              >
                <nav aria-label="Social links" className="flex items-center gap-3">
                  {socialLinks.map(({ href, icon: Icon, label }) => (
                    <a
                      key={label}
                      href={href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={label}
                      className="inline-flex h-12 w-12 items-center justify-center rounded-xl border-2 border-purple-200/50 bg-white/70 text-zinc-600 shadow-md backdrop-blur transition-all duration-300 hover:-translate-y-1 hover:border-purple-400 hover:text-purple-600 hover:shadow-lg active:translate-y-0"
                    >
                      <Icon size={18} />
                    </a>
                  ))}
                </nav>

                <p className="max-w-sm text-sm leading-relaxed text-zinc-600">
                  Available for internships, junior roles, and engaging web projects. Let's build something great together.
                </p>
              </motion.div>
            </header>

            {/* RIGHT - Visual Profile */}
            <motion.div
              variants={scaleIn}
              initial="hidden"
              animate="show"
              custom={0.16}
              className="relative mx-auto w-full max-w-md"
            >
              {/* Blur Background */}
              <div className="absolute -inset-8 rounded-3xl bg-gradient-to-br from-purple-300/40 via-fuchsia-200/30 to-indigo-200/30 blur-3xl opacity-60" />
              <div className="absolute top-1/2 left-1/2 h-96 w-96 -translate-x-1/2 -translate-y-1/2 rounded-full bg-purple-400/15 blur-[100px]" />

              {/* Main Card */}
              <div className="relative overflow-hidden rounded-3xl border-2 border-white/80 bg-white/60 shadow-2xl backdrop-blur-2xl">
                {/* Browser Bar */}
                <div className="flex items-center justify-between border-b border-zinc-200/50 bg-gradient-to-r from-zinc-50/80 to-purple-50/50 px-5 py-4">
                  <div className="flex items-center gap-2" aria-hidden="true">
                    <span className="h-3 w-3 rounded-full bg-red-400" />
                    <span className="h-3 w-3 rounded-full bg-yellow-400" />
                    <span className="h-3 w-3 rounded-full bg-green-400" />
                  </div>
                  <span className="rounded-lg bg-zinc-100/80 px-3 py-1.5 text-xs font-medium text-zinc-600">
                    portfolio.dev
                  </span>
                </div>

                {/* Content */}
                <div className="space-y-4 p-6">
                  {/* Avatar Section */}
                  <motion.article
                    whileHover={{ y: -4 }}
                    className="relative overflow-hidden rounded-2xl border-2 border-purple-200/30 bg-gradient-to-br from-white via-purple-50/50 to-white p-6 shadow-lg"
                  >
                    <div className="absolute right-4 top-4 p-2 rounded-full bg-purple-100/60 text-purple-600">
                      <Code2 size={20} />
                    </div>

                    <div className="flex flex-col items-center gap-4 text-center">
                      {/* Avatar Icon */}
                      <motion.div
                        animate={floatingAnimation}
                        className="h-28 w-28 rounded-2xl bg-gradient-to-br from-purple-600 to-fuchsia-600 p-0.5 shadow-lg"
                      >
                        <div className="h-full w-full rounded-2xl bg-white p-2">
                          <AvatarIcon />
                        </div>
                      </motion.div>

                      <div>
                        <p className="text-xs font-bold uppercase tracking-wider text-purple-600">
                          Developer Profile
                        </p>
                        <h2 className="mt-2 text-xl font-bold bg-gradient-to-r from-purple-600 to-fuchsia-600 bg-clip-text text-transparent">
                          Full-Stack Creator
                        </h2>
                        <p className="mt-2 text-sm text-zinc-600 leading-relaxed">
                          Building responsive, scalable web experiences with modern frameworks and clean code.
                        </p>
                      </div>
                    </div>
                  </motion.article>

                  {/* Code Block */}
                  <motion.article
                    whileHover={{ y: -4 }}
                    className="overflow-hidden rounded-2xl bg-gradient-to-br from-zinc-900 via-slate-900 to-slate-950 shadow-lg border border-white/10"
                  >
                    <div className="flex items-center justify-between border-b border-white/10 px-5 py-4">
                      <span className="text-xs text-zinc-400">developer.info</span>
                      <span className="rounded-full bg-purple-500/15 px-3 py-1 text-xs font-semibold text-purple-300">
                        available: true
                      </span>
                    </div>

                    <pre className="overflow-x-auto p-5 text-xs leading-7 text-zinc-200 sm:text-sm sm:leading-8 font-mono">
{`const ismail = {
  stack: [
    "React", "Laravel",
    "Tailwind", "MySQL"
  ],
  focus: "Full-Stack Dev",
  experience: "2y 9m",
  projects: "10+",
  hiring: true
};`}
                    </pre>
                  </motion.article>

                  {/* Stats Grid */}
                  <div className="grid grid-cols-3 gap-3">
                    {stats.map((stat, idx) => (
                      <StatCard
                        key={stat.label}
                        stat={stat}
                        delay={0.48 + idx * 0.06}
                      />
                    ))}
                  </div>
                </div>

                {/* Decorative Elements */}
                <div className="pointer-events-none absolute -right-8 -bottom-8 h-32 w-32 rounded-full bg-fuchsia-300/20 blur-2xl" />
                <div className="pointer-events-none absolute -left-6 top-20 h-24 w-24 rounded-full bg-purple-300/20 blur-2xl" />
              </div>
            </motion.div>
          </div>
        </Container>
      </section>

      {/* CV Modal */}
      <CVModal isOpen={isCVModalOpen} onClose={() => setIsCVModalOpen(false)} />
    </>
  );
}