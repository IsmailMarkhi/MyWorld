import Container from "../ui/Container";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { SiFiverr } from "react-icons/si";
import { motion } from "framer-motion";
import { ArrowRight, Download, Sparkles } from "lucide-react";
import myImage from "../../assets/image.png";

const socialLinks = [
  {
    href: "https://github.com/IsmailMarkhi",
    icon: FaGithub,
    label: "GitHub",
  },
  {
    href: "https://www.linkedin.com/in/ismail-markhi-a67033317/",
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
      className="relative overflow-hidden bg-gradient-to-b from-white via-zinc-50/70 to-white pt-32 pb-20 sm:pt-36 sm:pb-24 lg:pt-40 lg:pb-28"
    >
      {/* Background accents */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-[6%] top-20 h-44 w-44 rounded-full bg-purple-100/80 blur-3xl" />
        <div className="absolute right-[8%] top-16 h-56 w-56 rounded-full bg-fuchsia-100/70 blur-3xl" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(168,85,247,0.06),transparent_34%)]" />
      </div>

      <Container>
        <div className="relative grid items-center gap-12 lg:grid-cols-[1.08fr_0.92fr] lg:gap-14 xl:gap-18">
          {/* LEFT */}
          <header className="max-w-3xl">
  {/* Badge */}
  <motion.p
    variants={fadeUp}
    initial="hidden"
    animate="show"
    custom={0.05}
    className="mb-5 inline-flex items-center gap-2 rounded-full border border-purple-200/80 bg-white/90 px-4 py-2 text-xs font-semibold tracking-wide text-purple-700 shadow-sm backdrop-blur sm:text-sm"
  >
    <Sparkles size={15} />
    Freelance Web Developer
  </motion.p>

  {/* ✅ FIXED H1 */}
  <motion.h1
    variants={fadeUp}
    initial="hidden"
    animate="show"
    custom={0.12}
    className="text-[2.6rem] font-bold leading-[1.05] tracking-tight text-zinc-900 sm:text-5xl md:text-6xl xl:text-7xl"
  >
    Ismail Markhi
    <span className="mt-2 block bg-gradient-to-r from-zinc-900 via-zinc-800 to-purple-700 bg-clip-text text-transparent">
      Web Developer in Morocco
    </span>
  </motion.h1>

  {/* ✅ SEO PARAGRAPH */}
  <motion.p
    variants={fadeUp}
    initial="hidden"
    animate="show"
    custom={0.2}
    className="mt-6 max-w-2xl text-base leading-7 text-zinc-600 sm:text-lg sm:leading-8 md:text-xl"
  >
    I’m <strong className="text-zinc-900">Ismail Markhi</strong>, a web developer in Morocco
    specializing in <strong>React</strong>, <strong>Laravel</strong>, and scalable
    full-stack web applications. I build modern, responsive, and user-focused
    digital products with clean architecture and strong UI systems.
  </motion.p>

  {/* CTA */}
  <nav
    aria-label="Primary actions"
    className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-center"
  >
    <a href="#projects" className="btn-primary">
      View Projects <ArrowRight size={17} />
    </a>

    <a href="/resume.pdf" download className="btn-secondary">
      <Download size={17} />
      Download CV
    </a>

    <a href="#contact" className="btn-secondary">
      Contact Me
    </a>
  </nav>

  {/* Social */}
  <div className="mt-8 flex flex-col gap-5 lg:flex-row lg:items-center lg:justify-between">
    <div className="flex items-center gap-3">
      {socialLinks.map(({ href, icon: Icon, label }) => (
        <a
          key={label}
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={label}
          className="social-btn"
        >
          <Icon size={17} />
        </a>
      ))}
    </div>

    <p className="max-w-md text-sm leading-6 text-zinc-500">
      Available for freelance work, internships, and React or Laravel projects.
    </p>
  </div>
</header>

          {/* RIGHT */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate="show"
            custom={0.2}
            className="relative mx-auto w-full max-w-[38rem]"
          >
            <div className="overflow-hidden rounded-[28px] border border-zinc-200/90 bg-white shadow-[0_20px_70px_rgba(0,0,0,0.08)]">
              {/* top bar */}
              <div className="flex items-center justify-between border-b border-zinc-200 px-4 py-4 sm:px-5">
                <div className="flex items-center gap-2">
                  <span className="h-2.5 w-2.5 rounded-full bg-red-300" />
                  <span className="h-2.5 w-2.5 rounded-full bg-yellow-300" />
                  <span className="h-2.5 w-2.5 rounded-full bg-green-300" />
                </div>
                <span className="text-xs font-medium text-zinc-500">
                  portfolio.js
                </span>
              </div>

              <div className="grid gap-5 p-4 sm:p-5 md:gap-6 md:p-6">
                {/* Photo block */}
                <div className="relative overflow-hidden rounded-[24px] border border-zinc-200 bg-gradient-to-br from-zinc-100 via-white to-purple-50 p-4">
                  <div className="grid items-center gap-4 sm:grid-cols-[110px_1fr]">
                    <div className="mx-auto h-24 w-24 overflow-hidden rounded-2xl border border-white bg-zinc-200 shadow-sm sm:h-28 sm:w-28">
                      <img
                        src={myImage}
                        alt="Ismail Markhi"
                        className="h-full w-full object-cover transition duration-700 ease-out hover:scale-[1.04]"
                      />
                    </div>

                    <div className="text-center sm:text-left">
                      <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-purple-600">
                        Personal Brand
                      </p>
                      <h3 className="mt-2 text-lg font-semibold text-zinc-900 sm:text-xl">
                        Clean systems. Modern interfaces.
                      </h3>
                      <p className="mt-2 text-sm leading-6 text-zinc-600">
                        I build practical websites and applications with strong
                        structure, clear UX, and scalable frontend thinking.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Code card */}
                <div className="overflow-x-auto rounded-[24px] bg-zinc-950 p-5 text-white shadow-inner sm:p-6">
                  <div className="mb-4 text-xs text-zinc-500">developer.profile</div>

                  <pre className="text-[13px] leading-7 text-zinc-200 sm:text-sm sm:leading-8">
{`const developer = {
  name: "Ismail Markhi",
  role: "Web Developer",
  focus: ["Frontend", "Laravel", "UI Systems"],
  stack: ["React", "Tailwind", "Laravel", "Python"],
  mindset: "Clean, scalable, practical",
  available: true
};`}
                  </pre>
                </div>

                {/* Stats */}
                <div className="grid grid-cols-2 gap-3 sm:gap-4">
                  <div className="rounded-[24px] border border-zinc-200 bg-zinc-50 p-4 text-center sm:p-5">
                    <p className="text-xl font-bold tracking-tight text-zinc-900 sm:text-2xl">
                      2.5+
                    </p>
                    <p className="mt-1 text-[11px] font-semibold uppercase tracking-wide text-zinc-500 sm:text-xs">
                      Years Experience
                    </p>
                  </div>

                  <div className="rounded-[24px] border border-zinc-200 bg-zinc-50 p-4 text-center sm:p-5">
                    <p className="text-xl font-bold tracking-tight text-zinc-900 sm:text-2xl">
                      17+
                    </p>
                    <p className="mt-1 text-[11px] font-semibold uppercase tracking-wide text-zinc-500 sm:text-xs">
                      Projects Built
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Soft accent */}
            <div className="pointer-events-none absolute -right-4 -top-4 h-20 w-20 rounded-full bg-purple-200/60 blur-2xl sm:-right-6 sm:-top-6 sm:h-24 sm:w-24" />
          </motion.div>
        </div>
      </Container>
    </section>
  );
}