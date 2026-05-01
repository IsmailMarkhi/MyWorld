import Container from "../components/ui/Container";
import useSEO from "../hooks/useSEO";
import { motion } from "framer-motion";
import { FaWhatsapp, FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import {
  ArrowRight,
  Mail,
  MessageCircle,
  Briefcase,
  Sparkles,
  CheckCircle2,
  Code2,
  Clock3,
} from "lucide-react";

const contacts = [
  {
    name: "WhatsApp",
    icon: FaWhatsapp,
    href: "https://wa.me/212723307462",
    subtitle: "Fastest response",
    label: "Message",
    accent: "text-emerald-600",
    glow: "group-hover:shadow-[0_24px_70px_rgba(16,185,129,0.16)]",
  },
  {
    name: "Email",
    icon: FaEnvelope,
    href: "mailto:ismailmarkhi17@gmail.com",
    subtitle: "Professional contact",
    label: "Email",
    accent: "text-purple-700",
    glow: "group-hover:shadow-[0_24px_70px_rgba(147,51,234,0.16)]",
  },
  {
    name: "LinkedIn",
    icon: FaLinkedin,
    href: "https://www.linkedin.com/in/ismail-markhi-a67033317/",
    subtitle: "Career network",
    label: "Connect",
    accent: "text-blue-700",
    glow: "group-hover:shadow-[0_24px_70px_rgba(37,99,235,0.14)]",
  },
  {
    name: "GitHub",
    icon: FaGithub,
    href: "https://github.com/IsmailMarkhi",
    subtitle: "Code and projects",
    label: "View",
    accent: "text-zinc-900",
    glow: "group-hover:shadow-[0_24px_70px_rgba(24,24,27,0.12)]",
  },
];

const highlights = [
  "Landing pages",
  "Portfolio websites",
  "React interfaces",
  "Laravel systems",
];

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
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

export default function Contact() {
  useSEO({
    title: "Contact Ismail Markhi | React & Laravel Web Developer in Morocco",
    description:
      "Get in touch with Ismail Markhi for freelance projects, internships, and web development collaborations using React, Laravel, Tailwind CSS, and modern UI systems.",
    path: "/contact",
    keywords: [
      "Contact Ismail Markhi",
      "React developer Morocco contact",
      "Laravel developer Morocco freelance",
      "Web developer contact Morocco",
      "Hire frontend developer Morocco",
    ],
    schema: "all",
  });

  return (
    <main
      id="contact"
      className="relative min-h-screen overflow-hidden bg-[#fbf7ff] px-4 py-24 sm:px-6 lg:py-32"
    >
      {/* Background */}
      <div className="pointer-events-none absolute inset-0" aria-hidden="true">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(88,28,135,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(88,28,135,0.05)_1px,transparent_1px)] bg-[size:46px_46px]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_12%,rgba(168,85,247,0.16),transparent_36%)]" />

        <div className="absolute left-[12%] top-24 h-72 w-72 rounded-full bg-purple-200/40 blur-3xl" />
        <div className="absolute right-[10%] top-48 h-80 w-80 rounded-full bg-fuchsia-200/30 blur-3xl" />
        <div className="absolute bottom-10 left-1/2 h-96 w-96 -translate-x-1/2 rounded-full bg-white/80 blur-3xl" />

        <div className="absolute inset-x-0 top-0 h-48 bg-gradient-to-b from-white/85 to-transparent" />
        <div className="absolute inset-x-0 bottom-0 h-48 bg-gradient-to-t from-white/85 to-transparent" />
      </div>

      <Container size="wide">
        <div className="relative mx-auto max-w-7xl">
          {/* Header */}
          <motion.header
            variants={fadeUp}
            initial="hidden"
            animate="show"
            custom={0.05}
            className="mx-auto mb-16 max-w-4xl text-center"
          >
            <p className="mb-5 inline-flex items-center gap-2 rounded-full border border-purple-200 bg-white/90 px-4 py-2 text-xs font-black uppercase tracking-[0.22em] text-purple-700 shadow-[0_8px_25px_rgba(88,28,135,0.12)] backdrop-blur">
              <Sparkles size={14} />
              Contact
            </p>

            <h1 className="text-5xl font-black tracking-[-0.06em] text-zinc-950 sm:text-6xl lg:text-7xl">
              Let’s build something clean.
            </h1>

            <p className="mx-auto mt-6 max-w-2xl text-base leading-8 text-zinc-600 sm:text-lg">
              Reach out for a freelance project, internship opportunity,
              collaboration, landing page, portfolio website, React interface,
              or Laravel-based web system.
            </p>
          </motion.header>

          <div className="grid gap-7 lg:grid-cols-[1.15fr_0.85fr]">
            {/* Main CTA */}
            <motion.section
              variants={fadeUp}
              initial="hidden"
              animate="show"
              custom={0.12}
              className="group relative overflow-hidden rounded-[38px] border border-white/70 bg-white/70 p-[1px] shadow-[0_22px_70px_rgba(24,24,27,0.08)] backdrop-blur-xl transition-all duration-500 hover:shadow-[0_34px_120px_rgba(88,28,135,0.18)]"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-purple-100 via-white to-fuchsia-100 opacity-90" />
              <div className="absolute inset-x-10 top-0 h-px bg-gradient-to-r from-transparent via-purple-500/70 to-transparent" />
              <div className="absolute -right-24 -top-24 h-56 w-56 rounded-full bg-purple-300/25 blur-3xl" />

              <div className="relative z-10 rounded-[37px] border border-zinc-200/70 bg-white/85 p-7 backdrop-blur-xl sm:p-8 lg:p-10">
                <div className="mb-7 flex flex-wrap items-center justify-between gap-4">
                  <span className="inline-flex items-center gap-2 rounded-full border border-purple-100 bg-purple-50 px-3 py-1 text-[11px] font-black uppercase tracking-[0.18em] text-purple-700">
                    <Briefcase size={13} />
                    Available for Work
                  </span>

                  <span className="inline-flex items-center gap-2 rounded-full border border-emerald-200 bg-emerald-50 px-3 py-1 text-[11px] font-bold text-emerald-700">
                    <Clock3 size={13} />
                    Fast response
                  </span>
                </div>

                <h2 className="max-w-3xl text-3xl font-black tracking-[-0.04em] text-zinc-950 sm:text-4xl lg:text-5xl">
                  Modern websites, practical systems, and clean interfaces.
                </h2>

                <p className="mt-5 max-w-2xl text-sm leading-7 text-zinc-600 sm:text-base">
                  I build responsive web experiences using React, Laravel,
                  Tailwind CSS, PHP, and MySQL. WhatsApp is the fastest way to
                  start a conversation, while email is better for detailed
                  project requirements.
                </p>

                <div className="mt-7 grid gap-3 sm:grid-cols-2">
                  {highlights.map((item) => (
                    <div
                      key={item}
                      className="flex items-center gap-3 rounded-2xl border border-zinc-200 bg-white/90 px-4 py-3 shadow-sm"
                    >
                      <CheckCircle2 size={17} className="text-purple-700" />
                      <span className="text-sm font-bold text-zinc-700">
                        {item}
                      </span>
                    </div>
                  ))}
                </div>

                <div className="mt-9 flex flex-col gap-3 sm:flex-row">
                  <a
                    href="https://wa.me/212723307462"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 rounded-2xl border border-zinc-950 bg-zinc-950 px-6 py-3.5 text-sm font-bold text-white shadow-sm transition hover:-translate-y-1 hover:bg-purple-700"
                  >
                    <MessageCircle size={17} />
                    Start on WhatsApp
                    <ArrowRight size={16} />
                  </a>

                  <a
                    href="mailto:ismailmarkhi17@gmail.com"
                    className="inline-flex items-center justify-center gap-2 rounded-2xl border border-zinc-200 bg-white px-6 py-3.5 text-sm font-bold text-zinc-800 shadow-sm transition hover:-translate-y-1 hover:border-purple-300 hover:text-purple-700"
                  >
                    <Mail size={17} />
                    Send Email
                  </a>
                </div>
              </div>
            </motion.section>

            {/* Contact Cards */}
            <motion.aside
              variants={fadeUp}
              initial="hidden"
              animate="show"
              custom={0.18}
              className="grid gap-4 sm:grid-cols-2 lg:grid-cols-1"
            >
              {contacts.map((contact) => {
                const Icon = contact.icon;

                return (
                  <a
                    key={contact.name}
                    href={contact.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`group relative overflow-hidden rounded-[28px] border border-zinc-200/80 bg-white/80 p-[1px] shadow-[0_14px_45px_rgba(24,24,27,0.07)] backdrop-blur-xl transition-all duration-500 hover:-translate-y-1 ${contact.glow}`}
                  >
                    <div className="absolute inset-0 bg-gradient-to-br from-white via-white to-purple-50 opacity-90 transition group-hover:opacity-100" />
                    <div className="absolute inset-x-8 top-0 h-px bg-gradient-to-r from-transparent via-purple-400 to-transparent opacity-60" />

                    <div className="relative z-10 flex items-center gap-4 rounded-[27px] border border-zinc-200/70 bg-white/80 p-5 backdrop-blur-xl">
                      <div
                        className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl border border-zinc-200 bg-white shadow-sm ${contact.accent}`}
                      >
                        <Icon size={20} />
                      </div>

                      <div className="min-w-0">
                        <h3 className="font-black tracking-tight text-zinc-950">
                          {contact.name}
                        </h3>
                        <p className="mt-1 text-xs font-semibold text-zinc-500">
                          {contact.subtitle}
                        </p>
                      </div>

                      <span className="ml-auto hidden rounded-full border border-zinc-200 bg-zinc-50 px-3 py-1 text-[11px] font-bold text-zinc-600 sm:inline-flex">
                        {contact.label}
                      </span>

                      <ArrowRight
                        size={16}
                        className="text-zinc-400 transition group-hover:translate-x-1 group-hover:text-purple-700"
                      />
                    </div>
                  </a>
                );
              })}
            </motion.aside>
          </div>

          {/* Bottom expert CTA */}
          <motion.section
            variants={fadeUp}
            initial="hidden"
            animate="show"
            custom={0.24}
            className="mt-20"
          >
            <div className="relative overflow-hidden rounded-[38px] border border-zinc-900/15 bg-zinc-950 p-[1px] shadow-[0_28px_90px_rgba(24,24,27,0.18)]">
              <div className="absolute inset-0 bg-gradient-to-br from-zinc-950 via-purple-950 to-zinc-900" />
              <div className="absolute left-10 top-8 h-40 w-40 rounded-full bg-purple-500/20 blur-3xl" />
              <div className="absolute right-10 bottom-8 h-44 w-44 rounded-full bg-fuchsia-500/20 blur-3xl" />

              <div className="relative z-10 flex flex-col gap-8 rounded-[37px] border border-white/10 bg-white/[0.04] p-8 text-white backdrop-blur-xl lg:flex-row lg:items-center lg:justify-between lg:p-10">
                <div className="max-w-2xl">
                  <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-3 py-1 text-[11px] font-black uppercase tracking-[0.2em] text-purple-100">
                    <Code2 size={12} />
                    Project Discussion
                  </span>

                  <h2 className="mt-5 text-3xl font-black tracking-[-0.03em] sm:text-4xl">
                    Send the idea. I’ll help clarify the structure.
                  </h2>

                  <p className="mt-4 max-w-xl text-sm leading-7 text-zinc-300 sm:text-base">
                    Share what you want to build, the pages/features needed, and
                    the deadline. I will help translate it into a clear web
                    development scope.
                  </p>
                </div>

                <a
                  href="mailto:ismailmarkhi17@gmail.com"
                  className="inline-flex items-center justify-center gap-2 rounded-2xl bg-white px-5 py-3 text-sm font-bold text-zinc-950 shadow-sm transition hover:-translate-y-1 hover:bg-purple-100"
                >
                  Write Project Brief
                  <ArrowRight size={16} />
                </a>
              </div>
            </div>
          </motion.section>
        </div>
      </Container>
    </main>
  );
}