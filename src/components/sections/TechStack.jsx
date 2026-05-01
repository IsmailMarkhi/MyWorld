import Container from "../ui/Container";
import { techStack } from "../../data/tech";
import { motion } from "framer-motion";
import { Sparkles, Layers3, Code2, TrendingUp } from "lucide-react";

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.05 },
  },
};

const item = {
  hidden: { opacity: 0, y: 28 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.55,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

const stats = [
  {
    value: "Full",
    label: "Stack Focus",
    icon: Layers3,
  },
  {
    value: "2y 9m",
    label: "Learning & Building",
    icon: TrendingUp,
  },
  {
    value: "10+",
    label: "Projects Built",
    icon: Code2,
  },
];

function getLevelLabel(level) {
  if (level >= 85) return "Advanced";
  if (level >= 70) return "Good";
  if (level >= 50) return "Learning";
  return "Beginner";
}

export default function TechStack() {
  return (
    <section
      id="tech"
      aria-labelledby="tech-stack-title"
      className="relative overflow-hidden bg-[#fbf7ff] px-4 py-24 sm:px-6 lg:py-32"
    >
      {/* Background */}
      <div className="pointer-events-none absolute inset-0" aria-hidden="true">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(88,28,135,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(88,28,135,0.05)_1px,transparent_1px)] bg-[size:46px_46px]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_12%,rgba(168,85,247,0.16),transparent_36%)]" />

        <div className="absolute left-[16%] top-24 h-72 w-72 rounded-full bg-purple-200/35 blur-3xl" />
        <div className="absolute right-[12%] top-40 h-80 w-80 rounded-full bg-fuchsia-200/30 blur-3xl" />
        <div className="absolute bottom-10 left-1/2 h-96 w-96 -translate-x-1/2 rounded-full bg-white/80 blur-3xl" />

        <div className="absolute inset-x-0 top-0 h-48 bg-gradient-to-b from-white/85 to-transparent" />
        <div className="absolute inset-x-0 bottom-0 h-48 bg-gradient-to-t from-white/85 to-transparent" />
      </div>

      <Container>
        <div className="relative mx-auto max-w-7xl">
          {/* Header */}
          <motion.header
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="mx-auto mb-16 max-w-4xl text-center"
          >
            <p className="mb-5 inline-flex items-center gap-2 rounded-full border border-purple-200 bg-white/90 px-4 py-2 text-xs font-black uppercase tracking-[0.22em] text-purple-700 shadow-[0_8px_25px_rgba(88,28,135,0.12)] backdrop-blur">
              <Sparkles size={14} />
              Tech Stack
            </p>

            <h2
              id="tech-stack-title"
              className="text-5xl font-black tracking-[-0.06em] text-zinc-950 sm:text-6xl lg:text-7xl"
            >
              Tools I build with.
            </h2>

            <p className="mx-auto mt-6 max-w-2xl text-base leading-8 text-zinc-600 sm:text-lg">
              Technologies I use and continue improving to build responsive
              interfaces, Laravel systems, clean frontend architecture, and
              practical full-stack web applications.
            </p>

            <div className="mx-auto mt-10 grid max-w-3xl gap-3 sm:grid-cols-3">
              {stats.map(({ value, label, icon: Icon }) => (
                <div
                  key={label}
                  className="group rounded-[28px] border border-zinc-200/80 bg-white/80 p-5 shadow-[0_12px_35px_rgba(24,24,27,0.08)] backdrop-blur transition hover:-translate-y-1 hover:shadow-[0_20px_60px_rgba(88,28,135,0.14)]"
                >
                  <div className="mx-auto mb-3 flex h-10 w-10 items-center justify-center rounded-2xl border border-zinc-200 bg-white text-purple-700 shadow-sm">
                    <Icon size={18} />
                  </div>

                  <p className="text-3xl font-black text-zinc-950">{value}</p>

                  <p className="mt-1 text-xs font-black uppercase tracking-wide text-zinc-500">
                    {label}
                  </p>
                </div>
              ))}
            </div>
          </motion.header>

          {/* Stack Grid */}
          <motion.ul
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.12 }}
            className="grid grid-cols-2 gap-4 sm:grid-cols-3 sm:gap-5 md:grid-cols-4 lg:grid-cols-5 lg:gap-6"
          >
            {techStack.map((tech) => {
              const Icon = tech.icon;
              const level = Math.min(Math.max(tech.level ?? 40, 0), 100);
              const label = getLevelLabel(level);

              return (
                <motion.li key={tech.name} variants={item}>
                  <article
                    className="
                      group relative h-full overflow-hidden rounded-[32px]
                      border border-white/70 bg-white/70 p-[1px]
                      shadow-[0_18px_60px_rgba(24,24,27,0.08)]
                      backdrop-blur-xl transition-all duration-500
                      hover:-translate-y-2
                      hover:shadow-[0_30px_100px_rgba(88,28,135,0.18)]
                    "
                  >
                    <div className="absolute inset-0 bg-gradient-to-br from-purple-50 via-white to-fuchsia-50 opacity-90 transition duration-500 group-hover:opacity-100" />
                    <div className="absolute inset-x-8 top-0 h-px bg-gradient-to-r from-transparent via-purple-400 to-transparent opacity-80" />
                    <div className="absolute -right-16 -top-16 h-36 w-36 rounded-full bg-purple-300/20 blur-3xl transition group-hover:bg-purple-300/35" />

                    <div className="relative z-10 flex h-full flex-col items-center rounded-[31px] border border-zinc-200/70 bg-white/85 p-5 text-center backdrop-blur-xl sm:p-6">
                      <div
                        className="
                          mb-4 flex h-14 w-14 items-center justify-center
                          rounded-2xl border border-zinc-200 bg-white
                          text-zinc-800 shadow-[0_10px_28px_rgba(24,24,27,0.08)]
                          transition duration-300 group-hover:scale-105
                          group-hover:shadow-[0_14px_35px_rgba(88,28,135,0.16)]
                        "
                      >
                        <Icon
                          className={`text-2xl ${tech.color} transition duration-300 group-hover:scale-110`}
                          aria-hidden="true"
                        />
                      </div>

                      <h3 className="text-sm font-black tracking-tight text-zinc-950 sm:text-[15px]">
                        {tech.name}
                      </h3>

                      <p className="mt-1 rounded-full border border-purple-100 bg-purple-50 px-2.5 py-1 text-[11px] font-bold text-purple-700">
                        {label}
                      </p>

                      <div className="mt-5 w-full">
                        <div className="mb-2 flex items-center justify-between text-[11px] font-bold text-zinc-500">
                          <span>Level</span>
                          <span>{level}%</span>
                        </div>

                        <div
                          className="h-2.5 w-full overflow-hidden rounded-full border border-zinc-200 bg-zinc-100"
                          role="progressbar"
                          aria-label={`${tech.name} learning level`}
                          aria-valuemin="0"
                          aria-valuemax="100"
                          aria-valuenow={level}
                        >
                          <motion.div
                            initial={{ width: 0 }}
                            whileInView={{ width: `${level}%` }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.9, ease: "easeOut" }}
                            className="h-full rounded-full bg-gradient-to-r from-purple-500 via-fuchsia-500 to-violet-500"
                          />
                        </div>
                      </div>
                    </div>
                  </article>
                </motion.li>
              );
            })}
          </motion.ul>

          {/* Bottom strip */}
          <motion.div
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="mx-auto mt-16 max-w-4xl overflow-hidden rounded-[34px] border border-white/70 bg-white/70 p-[1px] shadow-[0_20px_70px_rgba(24,24,27,0.08)] backdrop-blur-xl"
          >
            <div className="relative rounded-[33px] border border-zinc-200/70 bg-white/85 p-7 text-center backdrop-blur-xl">
              <div className="absolute inset-x-10 top-0 h-px bg-gradient-to-r from-transparent via-purple-400 to-transparent opacity-80" />

              <p className="text-lg font-black tracking-tight text-zinc-950 sm:text-xl">
                Focused on practical implementation, not just tool names.
              </p>

              <p className="mx-auto mt-3 max-w-2xl text-sm leading-7 text-zinc-600">
                My goal is to use these tools to build clean user interfaces,
                organized project structures, reliable Laravel backends, and
                maintainable web products.
              </p>
            </div>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}