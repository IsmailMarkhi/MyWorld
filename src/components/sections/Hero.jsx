import Container from "../ui/Container";
import { Link } from "react-router-dom";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { SiFiverr } from "react-icons/si";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Download,
  Sparkles,
  CheckCircle2,
  BadgeCheck,
} from "lucide-react";
import myImage from "../../assets/image.png";

const socialLinks = [
  {
    href: "https://github.com/IsmailMarkhi",
    icon: FaGithub,
    label: "GitHub",
  },
  {
    href: "https://www.linkedin.com/in/ismailmarkhi",
    icon: FaLinkedin,
    label: "LinkedIn",
  },
  {
    href: "https://www.fiverr.com/sellers/ismail1markhi",
    icon: SiFiverr,
    label: "Fiverr",
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 26 },
  show: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay,
      duration: 0.7,
      ease: [0.22, 1, 0.36, 1],
    },
  }),
};

export default function Hero() {
  return (
    <section
      id="home"
      aria-labelledby="hero-title"
      className="relative overflow-hidden bg-gradient-to-b from-white via-zinc-50/70 to-white pt-32 pb-20 sm:pt-36 sm:pb-24 lg:pt-40 lg:pb-28"
    >
      <div className="pointer-events-none absolute inset-0" aria-hidden="true">
        <div className="absolute left-[6%] top-20 h-44 w-44 rounded-full bg-purple-100/80 blur-3xl" />
        <div className="absolute right-[8%] top-16 h-56 w-56 rounded-full bg-fuchsia-100/70 blur-3xl" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(168,85,247,0.06),transparent_34%)]" />
      </div>

      <Container>
        <div className="relative grid items-center gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:gap-14 xl:gap-20">
          {/* LEFT */}
          <header className="max-w-3xl">
            <motion.div
              variants={fadeUp}
              initial="hidden"
              animate="show"
              custom={0.04}
              className="mb-5 flex flex-wrap items-center gap-3"
            >
              <p className="inline-flex items-center gap-2 rounded-full border border-purple-200/80 bg-white/90 px-4 py-2 text-xs font-semibold tracking-wide text-purple-700 shadow-sm backdrop-blur sm:text-sm">
                <Sparkles size={15} />
                Freelance Web Developer
              </p>

              <span className="inline-flex items-center gap-2 rounded-full border border-zinc-200 bg-white px-3 py-2 text-[11px] font-medium text-zinc-600 shadow-sm">
                <BadgeCheck size={14} className="text-purple-600" />
                Available for projects
              </span>
            </motion.div>

            <motion.h1
              id="hero-title"
              variants={fadeUp}
              initial="hidden"
              animate="show"
              custom={0.12}
              className="text-[2.65rem] font-bold leading-[0.96] tracking-tight text-zinc-900 sm:text-5xl md:text-6xl xl:text-7xl"
            >
              Ismail Markhi
              <span className="mt-2 block bg-gradient-to-r from-zinc-900 via-zinc-800 to-purple-700 bg-clip-text text-transparent">
                Full-Stack Web Developer
              </span>
            </motion.h1>

            <motion.p
              variants={fadeUp}
              initial="hidden"
              animate="show"
              custom={0.2}
              className="mt-6 max-w-2xl text-base leading-7 text-zinc-600 sm:text-lg sm:leading-8 md:text-xl"
            >
              I’m{" "}
              <strong className="font-semibold text-zinc-900">
                Ismail Markhi
              </strong>
              , a full-stack web developer based in Morocco. I build scalable
              web applications using{" "}
              <strong className="font-semibold text-zinc-900">React</strong>,{" "}
              <strong className="font-semibold text-zinc-900">Laravel</strong>,
              and{" "}
              <strong className="font-semibold text-zinc-900">
                Tailwind CSS
              </strong>
              , with a focus on clean architecture, responsive UI, and practical
              digital systems.
            </motion.p>

            <motion.p
              variants={fadeUp}
              initial="hidden"
              animate="show"
              custom={0.24}
              className="mt-3 max-w-2xl text-sm leading-6 text-zinc-500"
            >
              Portfolio includes e-commerce systems, dashboards, landing pages,
              AI-assisted workflows, and business web applications.
            </motion.p>

            <motion.div
              variants={fadeUp}
              initial="hidden"
              animate="show"
              custom={0.28}
              className="mt-7 flex flex-wrap gap-3 text-sm text-zinc-500"
            >
              <span className="inline-flex items-center gap-2 rounded-full border border-zinc-200 bg-white px-3 py-2 shadow-sm">
                <CheckCircle2 size={15} className="text-purple-600" />
                Clean architecture
              </span>

              <span className="inline-flex items-center gap-2 rounded-full border border-zinc-200 bg-white px-3 py-2 shadow-sm">
                <CheckCircle2 size={15} className="text-purple-600" />
                Responsive by default
              </span>

              <span className="inline-flex items-center gap-2 rounded-full border border-zinc-200 bg-white px-3 py-2 shadow-sm">
                <CheckCircle2 size={15} className="text-purple-600" />
                Practical systems
              </span>
            </motion.div>

            <motion.nav
              variants={fadeUp}
              initial="hidden"
              animate="show"
              custom={0.34}
              aria-label="Primary actions"
              className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-center"
            >
              <Link
                to="/projects"
                className="
                  inline-flex items-center justify-center gap-2 rounded-2xl
                  bg-purple-600 px-6 py-3.5 text-sm font-semibold text-white
                  shadow-[0_10px_30px_rgba(147,51,234,0.22)]
                  transition-all duration-300 hover:-translate-y-[1px] hover:bg-purple-700
                "
              >
                View Projects
                <ArrowRight size={17} />
              </Link>

              <a
                href="/resume.pdf"
                download="Ismail-Markhi-Resume.pdf"
                className="
                  inline-flex items-center justify-center gap-2 rounded-2xl
                  border border-zinc-200 bg-white px-5 py-3.5 text-sm font-semibold
                  text-zinc-700 shadow-sm transition-all duration-300
                  hover:-translate-y-[1px] hover:border-purple-300 hover:text-purple-700
                "
              >
                <Download size={17} />
                Download CV
              </a>

              <Link
                to="/contact"
                className="
                  inline-flex items-center justify-center rounded-2xl
                  border border-zinc-200 bg-white/90 px-5 py-3.5 text-sm font-semibold
                  text-zinc-700 shadow-sm transition-all duration-300
                  hover:-translate-y-[1px] hover:border-purple-300 hover:text-purple-700
                "
              >
                Contact Me
              </Link>
            </motion.nav>

            <motion.div
              variants={fadeUp}
              initial="hidden"
              animate="show"
              custom={0.4}
              className="mt-8 flex flex-col gap-5 lg:flex-row lg:items-center lg:justify-between"
            >
              <nav aria-label="Social links" className="flex items-center gap-3">
                {socialLinks.map(({ href, icon: Icon, label }) => (
                  <a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={label}
                    className="
                      inline-flex h-11 w-11 items-center justify-center rounded-2xl
                      border border-zinc-200 bg-white text-zinc-600 shadow-sm
                      transition-all duration-300 hover:-translate-y-[2px]
                      hover:border-purple-300 hover:text-purple-700
                    "
                  >
                    <Icon size={17} />
                  </a>
                ))}
              </nav>

              <p className="max-w-md text-sm leading-6 text-zinc-500">
                Available for freelance work, portfolio websites, frontend
                interfaces, landing pages, and modern Laravel or React projects.
              </p>
            </motion.div>
          </header>

          {/* RIGHT */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate="show"
            custom={0.18}
            className="relative mx-auto w-full max-w-[40rem]"
          >
            <div className="overflow-hidden rounded-[30px] border border-zinc-200/90 bg-white shadow-[0_22px_80px_rgba(0,0,0,0.08)]">
              <div className="flex items-center justify-between border-b border-zinc-200 px-4 py-4 sm:px-5">
                <div className="flex items-center gap-2" aria-hidden="true">
                  <span className="h-2.5 w-2.5 rounded-full bg-red-300" />
                  <span className="h-2.5 w-2.5 rounded-full bg-yellow-300" />
                  <span className="h-2.5 w-2.5 rounded-full bg-green-300" />
                </div>

                <span className="text-xs font-medium text-zinc-500">
                  portfolio.js
                </span>
              </div>

              <div className="grid gap-5 p-4 sm:p-5 md:gap-6 md:p-6">
                <article className="relative overflow-hidden rounded-[24px] border border-zinc-200 bg-gradient-to-br from-zinc-100 via-white to-purple-50 p-4 sm:p-5">
                  <div className="grid items-center gap-4 sm:grid-cols-[118px_1fr]">
                    <div className="mx-auto h-24 w-24 overflow-hidden rounded-2xl border border-white bg-zinc-200 shadow-sm sm:h-28 sm:w-28">
                      <img
                        src={myImage}
                        alt="Portrait of Ismail Markhi"
                        className="h-full w-full object-cover transition duration-700 ease-out hover:scale-[1.04]"
                      />
                    </div>

                    <div className="text-center sm:text-left">
                      <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-purple-600">
                        Personal Brand
                      </p>

                      <h2 className="mt-2 text-lg font-semibold text-zinc-900 sm:text-xl">
                        Clean systems. Modern interfaces.
                      </h2>

                      <p className="mt-2 text-sm leading-6 text-zinc-600">
                        I build practical websites and applications with strong
                        structure, clear UX, and scalable frontend thinking.
                      </p>
                    </div>
                  </div>
                </article>

                <article className="overflow-x-auto rounded-[24px] bg-zinc-950 p-5 text-white shadow-inner sm:p-6">
                  <div className="mb-4 text-xs text-zinc-500">
                    developer.profile
                  </div>

                  <pre className="text-[13px] leading-7 text-zinc-200 sm:text-sm sm:leading-8">
{`const developer = {
  name: "Ismail Markhi",
  role: "Full-Stack Web Developer",
  location: "Morocco",
  focus: ["Frontend", "Laravel", "UI Systems"],
  stack: ["React", "Tailwind", "Laravel", "Python"],
  projects: "10+",
  experience: "2.5+ years",
  available: true
};`}
                  </pre>
                </article>

                <div className="grid gap-3 sm:grid-cols-3 sm:gap-4">
                  <article className="rounded-[24px] border border-zinc-200 bg-zinc-50 p-4 text-center sm:p-5">
                    <p className="text-xl font-bold tracking-tight text-zinc-900 sm:text-2xl">
                      2.9+
                    </p>
                    <p className="mt-1 text-[11px] font-semibold uppercase tracking-wide text-zinc-500 sm:text-xs">
                      Years Experience
                    </p>
                  </article>

                  <article className="rounded-[24px] border border-zinc-200 bg-zinc-50 p-4 text-center sm:p-5">
                    <p className="text-xl font-bold tracking-tight text-zinc-900 sm:text-2xl">
                      10+
                    </p>
                    <p className="mt-1 text-[11px] font-semibold uppercase tracking-wide text-zinc-500 sm:text-xs">
                      Projects Built
                    </p>
                  </article>

                  <article className="rounded-[24px] border border-zinc-200 bg-zinc-50 p-4 text-center sm:p-5">
                    <p className="text-xl font-bold tracking-tight text-zinc-900 sm:text-2xl">
                      100%
                    </p>
                    <p className="mt-1 text-[11px] font-semibold uppercase tracking-wide text-zinc-500 sm:text-xs">
                      Responsive Focus
                    </p>
                  </article>
                </div>
              </div>
            </div>

            <div className="pointer-events-none absolute -right-4 -top-4 h-20 w-20 rounded-full bg-purple-200/60 blur-2xl sm:-right-6 sm:-top-6 sm:h-24 sm:w-24" />
            <div className="pointer-events-none absolute -left-4 -bottom-4 h-20 w-20 rounded-full bg-fuchsia-200/50 blur-2xl sm:-left-6 sm:-bottom-6 sm:h-24 sm:w-24" />
          </motion.div>
        </div>
      </Container>
    </section>
  );
}