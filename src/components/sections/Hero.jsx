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
  Code2,
  Layers3,
  Rocket,
} from "lucide-react";
import myImage from "../../assets/image.png";

const socialLinks = [
  {
    href: "https://github.com/IsmailMarkhi",
    icon: FaGithub,
    label: "GitHub",
  },
  {
    href: "https://www.linkedin.com/in/ismail-markhi-a67033317",
    icon: FaLinkedin,
    label: "LinkedIn",
  },
  {
    href: "https://www.fiverr.com/sellers/ismail1markhi",
    icon: SiFiverr,
    label: "Fiverr",
  },
];

const highlights = [
  "10+ projects built",
  "React & Laravel focus",
  "Responsive UI",
];

const techStack = ["React", "Tailwind", "Laravel", "MySQL", "PHP", "Vite"];

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  show: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay,
      duration: 0.75,
      ease: [0.22, 1, 0.36, 1],
    },
  }),
};

export default function Hero() {
  return (
    <section
      id="home"
      aria-labelledby="hero-title"
      className="relative overflow-hidden bg-[radial-gradient(circle_at_top_left,rgba(147,51,234,0.10),transparent_32%),linear-gradient(to_bottom,#ffffff,#fafafa,#ffffff)] pt-32 pb-20 sm:pt-36 sm:pb-24 lg:pt-40 lg:pb-28"
    >
      <div className="pointer-events-none absolute inset-0" aria-hidden="true">
        <div className="absolute left-[5%] top-24 h-52 w-52 rounded-full bg-purple-200/50 blur-3xl" />
        <div className="absolute right-[7%] top-14 h-64 w-64 rounded-full bg-fuchsia-200/40 blur-3xl" />
        <div className="absolute bottom-0 left-1/2 h-72 w-72 -translate-x-1/2 rounded-full bg-indigo-100/40 blur-3xl" />
        <div className="absolute inset-0 bg-[linear-gradient(rgba(24,24,27,0.035)_1px,transparent_1px),linear-gradient(90deg,rgba(24,24,27,0.035)_1px,transparent_1px)] bg-[size:44px_44px]" />
      </div>

      <Container>
        <div className="relative grid items-center gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16 xl:gap-24">
          {/* LEFT */}
          <header className="max-w-3xl">
            <motion.div
              variants={fadeUp}
              initial="hidden"
              animate="show"
              custom={0.04}
              className="mb-5 flex flex-wrap items-center gap-3"
            >
              <p className="inline-flex items-center gap-2 rounded-full border border-purple-200 bg-white/85 px-4 py-2 text-xs font-semibold tracking-wide text-purple-700 shadow-sm backdrop-blur sm:text-sm">
                <Sparkles size={15} />
                Junior Full-Stack Developer
              </p>

              <span className="inline-flex items-center gap-2 rounded-full border border-zinc-200 bg-white/85 px-3 py-2 text-[11px] font-medium text-zinc-600 shadow-sm backdrop-blur">
                <BadgeCheck size={14} className="text-purple-600" />
                Open to internship & junior roles
              </span>
            </motion.div>

            <motion.h1
              id="hero-title"
              variants={fadeUp}
              initial="hidden"
              animate="show"
              custom={0.12}
              className="text-[2.7rem] font-black leading-[0.95] tracking-[-0.055em] text-zinc-950 sm:text-5xl md:text-6xl xl:text-7xl"
            >
              Ismail Markhi
              <span className="mt-3 block bg-gradient-to-r from-zinc-950 via-purple-800 to-fuchsia-700 bg-clip-text text-transparent">
                Junior Full-Stack Web Developer
              </span>
            </motion.h1>

            <motion.p
              variants={fadeUp}
              initial="hidden"
              animate="show"
              custom={0.2}
              className="mt-6 max-w-2xl text-base leading-7 text-zinc-600 sm:text-lg sm:leading-8 md:text-xl"
            >
              I build responsive and practical web applications using{" "}
              <strong className="font-semibold text-zinc-950">React</strong>,{" "}
              <strong className="font-semibold text-zinc-950">Laravel</strong>,
              and{" "}
              <strong className="font-semibold text-zinc-950">
                Tailwind CSS
              </strong>
              . With more than{" "}
              <strong className="font-semibold text-zinc-950">
                2 years and 9 months
              </strong>{" "}
              of learning and project-building experience, I focus on clean
              structure, modern UI, and real implementation.
            </motion.p>

            <motion.p
              variants={fadeUp}
              initial="hidden"
              animate="show"
              custom={0.24}
              className="mt-3 max-w-2xl text-sm leading-6 text-zinc-500"
            >
              My portfolio includes 10+ projects across e-commerce interfaces,
              dashboards, landing pages, WordPress practice, portfolio websites,
              and full-stack learning systems.
            </motion.p>

            <motion.div
              variants={fadeUp}
              initial="hidden"
              animate="show"
              custom={0.28}
              className="mt-7 flex flex-wrap gap-3 text-sm text-zinc-600"
            >
              {highlights.map((item) => (
                <span
                  key={item}
                  className="inline-flex items-center gap-2 rounded-full border border-zinc-200 bg-white/90 px-3.5 py-2 shadow-sm backdrop-blur transition hover:border-purple-200 hover:text-purple-700"
                >
                  <CheckCircle2 size={15} className="text-purple-600" />
                  {item}
                </span>
              ))}
            </motion.div>

            <motion.div
              variants={fadeUp}
              initial="hidden"
              animate="show"
              custom={0.31}
              className="mt-5 flex flex-wrap gap-2"
            >
              {techStack.map((tech) => (
                <span
                  key={tech}
                  className="rounded-xl border border-zinc-200 bg-white/80 px-3 py-1.5 text-xs font-semibold text-zinc-600 shadow-sm"
                >
                  {tech}
                </span>
              ))}
            </motion.div>

            <motion.nav
              variants={fadeUp}
              initial="hidden"
              animate="show"
              custom={0.36}
              aria-label="Primary actions"
              className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-center"
            >
              <Link
                to="/projects"
                className="group inline-flex items-center justify-center gap-2 rounded-2xl bg-zinc-950 px-6 py-3.5 text-sm font-semibold text-white shadow-[0_18px_45px_rgba(24,24,27,0.22)] transition-all duration-300 hover:-translate-y-[2px] hover:bg-purple-700"
              >
                View 10+ Projects
                <ArrowRight
                  size={17}
                  className="transition-transform duration-300 group-hover:translate-x-1"
                />
              </Link>

              <a
                href="/resume.pdf"
                download="Ismail-Markhi-Resume.pdf"
                className="inline-flex items-center justify-center gap-2 rounded-2xl border border-zinc-200 bg-white/90 px-5 py-3.5 text-sm font-semibold text-zinc-700 shadow-sm backdrop-blur transition-all duration-300 hover:-translate-y-[2px] hover:border-purple-300 hover:text-purple-700"
              >
                <Download size={17} />
                Download CV
              </a>

              <Link
                to="/contact"
                className="inline-flex items-center justify-center rounded-2xl border border-zinc-200 bg-white/80 px-5 py-3.5 text-sm font-semibold text-zinc-700 shadow-sm backdrop-blur transition-all duration-300 hover:-translate-y-[2px] hover:border-purple-300 hover:text-purple-700"
              >
                Contact Me
              </Link>
            </motion.nav>

            <motion.div
              variants={fadeUp}
              initial="hidden"
              animate="show"
              custom={0.42}
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
                    className="inline-flex h-11 w-11 items-center justify-center rounded-2xl border border-zinc-200 bg-white/90 text-zinc-600 shadow-sm backdrop-blur transition-all duration-300 hover:-translate-y-[2px] hover:border-purple-300 hover:text-purple-700"
                  >
                    <Icon size={17} />
                  </a>
                ))}
              </nav>

              <p className="max-w-md text-sm leading-6 text-zinc-500">
                Available for internships, junior developer roles, portfolio
                websites, landing pages, and React or Laravel-based projects.
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
            <div className="absolute -inset-1 rounded-[34px] bg-gradient-to-br from-purple-200 via-fuchsia-100 to-zinc-100 opacity-80 blur-xl" />

            <div className="relative overflow-hidden rounded-[32px] border border-white/80 bg-white/85 shadow-[0_28px_90px_rgba(24,24,27,0.12)] backdrop-blur-xl">
              <div className="flex items-center justify-between border-b border-zinc-200/80 px-4 py-4 sm:px-5">
                <div className="flex items-center gap-2" aria-hidden="true">
                  <span className="h-2.5 w-2.5 rounded-full bg-red-300" />
                  <span className="h-2.5 w-2.5 rounded-full bg-yellow-300" />
                  <span className="h-2.5 w-2.5 rounded-full bg-green-300" />
                </div>

                <span className="rounded-full bg-zinc-100 px-3 py-1 text-xs font-medium text-zinc-500">
                  junior-profile.js
                </span>
              </div>

              <div className="grid gap-5 p-4 sm:p-5 md:gap-6 md:p-6">
                <article className="relative overflow-hidden rounded-[26px] border border-zinc-200 bg-gradient-to-br from-zinc-50 via-white to-purple-50 p-4 shadow-sm sm:p-5">
                  <div className="absolute right-4 top-4 rounded-full bg-white/80 p-2 text-purple-600 shadow-sm">
                    <Code2 size={18} />
                  </div>

                  <div className="grid items-center gap-4 sm:grid-cols-[120px_1fr]">
                    <div className="mx-auto h-24 w-24 overflow-hidden rounded-3xl border-4 border-white bg-zinc-200 shadow-md sm:h-28 sm:w-28">
                      <img
                        src={myImage}
                        alt="Portrait of Ismail Markhi"
                        className="h-full w-full object-cover transition duration-700 ease-out hover:scale-[1.05]"
                      />
                    </div>

                    <div className="text-center sm:text-left">
                      <p className="text-[11px] font-bold uppercase tracking-[0.22em] text-purple-600">
                        Developer Portfolio
                      </p>

                      <h2 className="mt-2 text-lg font-bold text-zinc-950 sm:text-xl">
                        Junior developer building real-world web projects.
                      </h2>

                      <p className="mt-2 text-sm leading-6 text-zinc-600">
                        Focused on React interfaces, Laravel backends, clean
                        project structure, responsive design, and practical
                        full-stack workflows.
                      </p>
                    </div>
                  </div>
                </article>

                <article className="overflow-hidden rounded-[26px] bg-zinc-950 text-white shadow-inner">
                  <div className="flex items-center justify-between border-b border-white/10 px-5 py-4">
                    <span className="text-xs text-zinc-400">
                      developer.profile
                    </span>
                    <span className="rounded-full bg-purple-500/10 px-3 py-1 text-xs font-semibold text-purple-300">
                      openToWork: true
                    </span>
                  </div>

                  <pre className="overflow-x-auto p-5 text-[13px] leading-7 text-zinc-200 sm:p-6 sm:text-sm sm:leading-8">
{`const developer = {
  name: "Ismail Markhi",
  role: "Junior Full-Stack Developer",
  location: "Morocco",
  experience: "2 years 9 months",
  projects: "10+",
  focus: ["React", "Laravel", "Responsive UI"],
  stack: ["React", "Tailwind", "Laravel", "MySQL"],
  goal: "Internship or Junior Developer Role"
};`}
                  </pre>
                </article>

                <div className="grid gap-3 sm:grid-cols-3 sm:gap-4">
                  <article className="group rounded-[24px] border border-zinc-200 bg-white p-4 text-center shadow-sm transition hover:-translate-y-1 hover:border-purple-200 hover:shadow-md sm:p-5">
                    <div className="mx-auto mb-3 flex h-10 w-10 items-center justify-center rounded-2xl bg-purple-50 text-purple-700">
                      <Layers3 size={18} />
                    </div>
                    <p className="text-xl font-black tracking-tight text-zinc-950 sm:text-2xl">
                      10+
                    </p>
                    <p className="mt-1 text-[11px] font-bold uppercase tracking-wide text-zinc-500 sm:text-xs">
                      Projects Built
                    </p>
                  </article>

                  <article className="group rounded-[24px] border border-zinc-200 bg-white p-4 text-center shadow-sm transition hover:-translate-y-1 hover:border-purple-200 hover:shadow-md sm:p-5">
                    <div className="mx-auto mb-3 flex h-10 w-10 items-center justify-center rounded-2xl bg-purple-50 text-purple-700">
                      <Code2 size={18} />
                    </div>
                    <p className="text-xl font-black tracking-tight text-zinc-950 sm:text-2xl">
                      2y 9m
                    </p>
                    <p className="mt-1 text-[11px] font-bold uppercase tracking-wide text-zinc-500 sm:text-xs">
                      Learning & Building
                    </p>
                  </article>

                  <article className="group rounded-[24px] border border-zinc-200 bg-white p-4 text-center shadow-sm transition hover:-translate-y-1 hover:border-purple-200 hover:shadow-md sm:p-5">
                    <div className="mx-auto mb-3 flex h-10 w-10 items-center justify-center rounded-2xl bg-purple-50 text-purple-700">
                      <Rocket size={18} />
                    </div>
                    <p className="text-xl font-black tracking-tight text-zinc-950 sm:text-2xl">
                      Open
                    </p>
                    <p className="mt-1 text-[11px] font-bold uppercase tracking-wide text-zinc-500 sm:text-xs">
                      Internship / Junior
                    </p>
                  </article>
                </div>
              </div>
            </div>

            <div className="pointer-events-none absolute -right-5 -top-5 h-24 w-24 rounded-full bg-purple-300/40 blur-2xl" />
            <div className="pointer-events-none absolute -left-5 -bottom-5 h-24 w-24 rounded-full bg-fuchsia-300/30 blur-2xl" />
          </motion.div>
        </div>
      </Container>
    </section>
  );
}