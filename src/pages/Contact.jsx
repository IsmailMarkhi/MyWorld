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
    title:
      "Contact Ismail Markhi | React & Laravel Web Developer in Morocco",
    description:
      "Get in touch with Ismail Markhi for freelance projects, internships, and web development collaborations using React, Laravel, and modern UI systems.",
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
    <main className="relative overflow-hidden bg-gradient-to-b from-black via-zinc-950 to-black py-24 sm:py-28">
      {/* Background */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-[8%] top-20 h-64 w-64 rounded-full bg-purple-700/20 blur-3xl" />
        <div className="absolute right-[10%] bottom-16 h-64 w-64 rounded-full bg-fuchsia-700/20 blur-3xl" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(168,85,247,0.08),transparent_68%)]" />
      </div>

      <Container size="wide">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate="show"
          custom={0.05}
        >
          <SectionTitle
            title="Let’s Work Together"
            description="Freelance project, internship, or collaboration? Reach out through the channel that fits your workflow."
            dark
            label="Contact"
          />
        </motion.div>

        <div className="relative mx-auto mt-14 grid max-w-6xl gap-8 lg:grid-cols-[1.15fr_0.85fr]">
          {/* LEFT */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate="show"
            custom={0.12}
            className="relative overflow-hidden rounded-[30px] border border-zinc-800 bg-zinc-900/70 p-7 sm:p-8 lg:p-10 backdrop-blur-xl shadow-[0_20px_80px_rgba(0,0,0,0.35)]"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 via-transparent to-fuchsia-500/10" />

            <div className="relative z-10">
              <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-purple-500/20 bg-purple-500/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-purple-300">
                <Briefcase size={14} />
                Available for Work
              </div>

              <h1 className="text-3xl font-bold text-white sm:text-4xl">
                Build something modern, clear, and scalable.
              </h1>

              <p className="mt-5 max-w-xl text-base text-zinc-400 sm:text-lg">
                I design and build clean, performant web applications using
                React, Laravel, and Tailwind CSS. WhatsApp is the fastest way to
                start a discussion.
              </p>

              <div className="mt-8 flex flex-col gap-4 sm:flex-row">
                <a
                  href="https://wa.me/212723307462"
                  target="_blank"
                  className="inline-flex items-center justify-center gap-3 rounded-full px-8 py-4 bg-gradient-to-r from-purple-600 to-fuchsia-600 text-white font-semibold shadow-lg hover:scale-[1.03]"
                >
                  <MessageCircle size={18} />
                  Start on WhatsApp
                  <ArrowRight size={16} />
                </a>

                <a
                  href="mailto:ismailmarkhi17@gmail.com"
                  className="inline-flex items-center gap-2 text-zinc-400 hover:text-white"
                >
                  <Mail size={16} />
                  Or send an email
                </a>
              </div>
            </div>
          </motion.div>

          {/* RIGHT */}
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-1">
            {contacts.map((c) => {
              const Icon = c.icon;
              return (
                <a
                  key={c.name}
                  href={c.href}
                  target="_blank"
                  className={`group rounded-2xl border border-zinc-800 bg-zinc-900/70 p-5 hover:-translate-y-1 transition ${c.hoverBorder} ${c.hoverGlow}`}
                >
                  <div className="flex items-center gap-4">
                    <div className={`h-12 w-12 flex items-center justify-center rounded-xl ${c.textColor}`}>
                      <Icon size={20} />
                    </div>

                    <div>
                      <h4 className="text-white">{c.name}</h4>
                      <p className="text-xs text-zinc-500">{c.subtitle}</p>
                    </div>

                    <ArrowRight className="ml-auto" size={16} />
                  </div>
                </a>
              );
            })}
          </div>
        </div>
      </Container>
    </main>
  );
}