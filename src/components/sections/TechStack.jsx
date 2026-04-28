import Container from "../ui/Container";
import SectionTitle from "../ui/SectionTitle";
import { techStack } from "../../data/tech";
import { motion } from "framer-motion";

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.05 },
  },
};

const item = {
  hidden: { opacity: 0, y: 30 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

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
      className="
        relative overflow-hidden
        bg-gradient-to-b from-black via-zinc-950 to-black
        py-24 sm:py-28
      "
    >
      <div className="pointer-events-none absolute inset-0" aria-hidden="true">
        <div className="absolute left-[10%] top-20 h-64 w-64 bg-purple-700/20 blur-3xl" />
        <div className="absolute right-[10%] bottom-20 h-64 w-64 bg-fuchsia-700/20 blur-3xl" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(168,85,247,0.08),transparent_70%)]" />
      </div>

      <Container>
        <header className="mb-14 sm:mb-16">
          <SectionTitle
            id="tech-stack-title"
            title="Tech Stack"
            description="Technologies I use and continue improving to build scalable, modern applications."
            className="text-center"
            titleClassName="text-white"
            descriptionClassName="text-zinc-400"
          />
        </header>

        <motion.ul
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.12 }}
          className="
            grid grid-cols-2 gap-4
            sm:grid-cols-3 sm:gap-5
            md:grid-cols-4
            lg:grid-cols-5 lg:gap-6
          "
        >
          {techStack.map((tech) => {
            const Icon = tech.icon;
            const level = Math.min(Math.max(tech.level ?? 40, 0), 100);
            const label = getLevelLabel(level);

            return (
              <motion.li key={tech.name} variants={item}>
                <article
                  className="
                    group relative overflow-hidden rounded-2xl
                    border border-zinc-800 bg-zinc-900/70
                    p-5 backdrop-blur-xl
                    transition-all duration-500
                    hover:-translate-y-2 hover:border-purple-500
                    hover:shadow-[0_0_30px_rgba(168,85,247,0.25)]
                    sm:p-6
                  "
                >
                  <div
                    className="
                      absolute inset-0 rounded-2xl
                      bg-gradient-to-br from-purple-500/10 to-fuchsia-500/10
                      opacity-0 transition duration-500 group-hover:opacity-100
                    "
                    aria-hidden="true"
                  />

                  <div className="relative z-10 flex flex-col items-center text-center">
                    <div
                      className="
                        mb-4 flex h-14 w-14 items-center justify-center
                        rounded-xl border border-zinc-700 bg-zinc-800
                        transition duration-300 group-hover:border-purple-500
                      "
                    >
                      <Icon
                        className={`text-2xl ${tech.color} transition duration-300 group-hover:scale-110`}
                        aria-hidden="true"
                      />
                    </div>

                    <h3 className="text-sm font-semibold text-white sm:text-[15px]">
                      {tech.name}
                    </h3>

                    <p className="mt-1 text-xs text-zinc-500">
                      {label}
                    </p>

                    <div className="mt-4 w-full">
                      <div className="mb-2 flex items-center justify-between text-[11px] font-medium text-zinc-500">
                        <span>Knowledge level</span>
                        <span>{level}%</span>
                      </div>

                      <div
                        className="h-2 w-full overflow-hidden rounded-full bg-zinc-800"
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
                          className="
                            h-full rounded-full
                            bg-gradient-to-r from-purple-500 via-fuchsia-500 to-violet-500
                          "
                        />
                      </div>
                    </div>
                  </div>
                </article>
              </motion.li>
            );
          })}
        </motion.ul>
      </Container>
    </section>
  );
}