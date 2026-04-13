import Container from "../components/ui/Container";
import SectionTitle from "../components/ui/SectionTitle";
import useSEO from "../hooks/useSEO";
import { motion } from "framer-motion";
import { FaWhatsapp, FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import { ArrowRight, Mail, MessageCircle, Briefcase } from "lucide-react";

const contacts = [
  {
    name: "WhatsApp",
    icon: FaWhatsapp,
    href: "https://wa.me/212723307462",
    textColor: "text-green-400",
    hoverBorder: "group-hover:border-green-500/50",
    hoverGlow: "group-hover:shadow-[0_0_30px_rgba(34,197,94,0.18)]",
    subtitle: "Fastest response",
  },
  {
    name: "Email",
    icon: FaEnvelope,
    href: "mailto:ismailmarkhi17@gmail.com",
    textColor: "text-purple-400",
    hoverBorder: "group-hover:border-purple-500/50",
    hoverGlow: "group-hover:shadow-[0_0_30px_rgba(168,85,247,0.18)]",
    subtitle: "Professional contact",
  },
  {
    name: "LinkedIn",
    icon: FaLinkedin,
    href: "https://www.linkedin.com/in/ismail-markhi-a67033317/",
    textColor: "text-blue-400",
    hoverBorder: "group-hover:border-blue-500/50",
    hoverGlow: "group-hover:shadow-[0_0_30px_rgba(59,130,246,0.18)]",
    subtitle: "Career network",
  },
  {
    name: "GitHub",
    icon: FaGithub,
    href: "https://github.com/IsmailMarkhi",
    textColor: "text-zinc-200",
    hoverBorder: "group-hover:border-zinc-500/50",
    hoverGlow: "group-hover:shadow-[0_0_30px_rgba(255,255,255,0.08)]",
    subtitle: "Code and projects",
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

export default function Contact() {
  useSEO({
    title: "Contact | Ismail Markhi",
    description:
      "Get in touch with Ismail Markhi to discuss freelance work, internships, and web development projects.",
    path: "/contact",
  });

  return (
    <section
      id="contact"
      className="
        relative overflow-hidden
        bg-gradient-to-b from-black via-zinc-950 to-black
        py-24 sm:py-28
      "
    >
      {/* Background atmosphere */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-[8%] top-20 h-64 w-64 rounded-full bg-purple-700/20 blur-3xl" />
        <div className="absolute right-[10%] bottom-16 h-64 w-64 rounded-full bg-fuchsia-700/20 blur-3xl" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(168,85,247,0.08),transparent_68%)]" />
      </div>

      <Container size="wide">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.15 }}
          custom={0.05}
        >
          <SectionTitle
            title="Let’s Work Together"
            description="Have a project idea, freelance opportunity, or internship offer? Reach out through the channel that fits you best."
            dark
            label="Contact"
          />
        </motion.div>

        <div className="relative mx-auto mt-14 grid max-w-6xl gap-8 lg:grid-cols-[1.15fr_0.85fr]">
          {/* Left main block */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.15 }}
            custom={0.12}
            className="
              relative overflow-hidden rounded-[30px]
              border border-zinc-800
              bg-zinc-900/70 p-7 sm:p-8 lg:p-10
              backdrop-blur-xl
              shadow-[0_20px_80px_rgba(0,0,0,0.35)]
            "
          >
            <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 via-transparent to-fuchsia-500/10" />

            <div className="relative z-10">
              <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-purple-500/20 bg-purple-500/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-purple-300">
                <Briefcase size={14} />
                Available for Work
              </div>

              <h3 className="max-w-2xl text-3xl font-bold tracking-tight text-white sm:text-4xl">
                Build something modern, clear, and useful.
              </h3>

              <p className="mt-5 max-w-xl text-base leading-7 text-zinc-400 sm:text-lg">
                I build modern web applications with clean UI, strong structure,
                and practical frontend-backend thinking. For project inquiries
                or collaboration, WhatsApp is the fastest way to reach me.
              </p>
              {/* Main actions */}
              <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:flex-wrap">
                {/* PRIMARY */}
                <a
                  href="https://wa.me/212723307462"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="
      inline-flex items-center justify-center gap-3
      rounded-full px-8 py-4
      bg-gradient-to-r from-purple-600 to-fuchsia-600
      text-sm font-semibold text-white
      shadow-[0_15px_40px_rgba(168,85,247,0.35)]
      transition-all duration-300
      hover:-translate-y-[2px]
      hover:shadow-[0_25px_60px_rgba(168,85,247,0.45)]
    "
                >
                  <MessageCircle size={18} />
                  Start on WhatsApp
                  <ArrowRight size={16} />
                </a>

                {/* SECONDARY */}
                <a
                  href="mailto:ismailmarkhi17@gmail.com"
                  className="
      inline-flex items-center justify-center gap-2
      text-sm font-medium text-zinc-400
      transition hover:text-white
    "
                >
                  <Mail size={16} />
                  Or send an email
                </a>
              </div>

              {/* Quick info */}
              <div className="mt-10 grid gap-4 sm:grid-cols-2">
                <div className="rounded-2xl border border-zinc-800 bg-black/30 p-5">
                  <p className="text-xs font-semibold uppercase tracking-[0.18em] text-purple-300">
                    Best for
                  </p>
                  <p className="mt-2 text-sm leading-7 text-zinc-400">
                    Freelance work, portfolio websites, UI improvements, and
                    modern React or Laravel-based projects.
                  </p>
                </div>

                <div className="rounded-2xl border border-zinc-800 bg-black/30 p-5">
                  <p className="text-xs font-semibold uppercase tracking-[0.18em] text-purple-300">
                    Response
                  </p>
                  <p className="mt-2 text-sm leading-7 text-zinc-400">
                    WhatsApp is fastest. Email and LinkedIn are better for more
                    formal project discussions.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right contact cards */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.15 }}
            custom={0.2}
            className="grid gap-4 sm:grid-cols-2 lg:grid-cols-1"
          >
            {contacts.map(
              ({
                name,
                icon: Icon,
                href,
                textColor,
                hoverBorder,
                hoverGlow,
                subtitle,
              }) => (
                <a
                  key={name}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`
                    group relative overflow-hidden rounded-[24px]
                    border border-zinc-800 bg-zinc-900/70 p-5
                    backdrop-blur-xl transition-all duration-500
                    hover:-translate-y-[4px]
                    ${hoverBorder}
                    ${hoverGlow}
                  `}
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-white/[0.02] via-transparent to-purple-500/[0.06] opacity-0 transition duration-500 group-hover:opacity-100" />

                  <div className="relative z-10 flex items-center gap-4">
                    <div
                      className={`
                        flex h-12 w-12 items-center justify-center rounded-2xl
                        border border-zinc-700 bg-zinc-800 transition duration-300
                        ${textColor}
                      `}
                    >
                      <Icon size={20} />
                    </div>

                    <div className="min-w-0">
                      <h4 className="text-sm font-semibold text-white">
                        {name}
                      </h4>
                      <p className="mt-1 text-xs text-zinc-500">{subtitle}</p>
                    </div>

                    <ArrowRight
                      size={16}
                      className="ml-auto text-zinc-500 transition duration-300 group-hover:translate-x-1 group-hover:text-white"
                    />
                  </div>
                </a>
              ),
            )}
          </motion.div>
        </div>
      </Container>
    </section>
  );
}
