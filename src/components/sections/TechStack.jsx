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

export default function TechStack() {
  return (
    <section
      id="tech"
      className="
        relative overflow-hidden
        py-24 sm:py-28
        bg-gradient-to-b
        from-black
        via-zinc-950
        to-black
      "
    >
      {/* Purple glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute left-[10%] top-20 h-64 w-64 bg-purple-700/20 blur-3xl" />
        <div className="absolute right-[10%] bottom-20 h-64 w-64 bg-fuchsia-700/20 blur-3xl" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(168,85,247,0.08),transparent_70%)]" />
      </div>

      <Container>
        <div className="mb-14 sm:mb-16">
          <SectionTitle
            title="Tech Stack"
            description="Technologies I use to build scalable and modern applications."
            className="text-center"
            titleClassName="text-white"
            descriptionClassName="text-zinc-400"
          />
        </div>

        <motion.ul
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.12 }}
          className="
            grid
            grid-cols-2
            gap-4
            sm:grid-cols-3 sm:gap-5
            md:grid-cols-4
            lg:grid-cols-5 lg:gap-6
          "
        >
          {techStack.map((tech) => {
            const Icon = tech.icon;

            return (
              <motion.li key={tech.name} variants={item}>
                <article
                  className="
                    group relative overflow-hidden
                    rounded-2xl
                    border border-zinc-800
                    bg-zinc-900/70
                    p-5 sm:p-6
                    backdrop-blur-xl
                    transition-all duration-500
                    hover:-translate-y-2
                    hover:border-purple-500
                    hover:shadow-[0_0_30px_rgba(168,85,247,0.25)]
                  "
                >
                  {/* Glow effect */}
                  <div
                    className="
                      absolute inset-0 rounded-2xl
                      opacity-0 group-hover:opacity-100
                      bg-gradient-to-br from-purple-500/10 to-fuchsia-500/10
                      transition duration-500
                    "
                  />

                  <div className="relative z-10 flex flex-col items-center text-center">
                    <div
                      className="
                        mb-4 flex h-14 w-14 items-center justify-center
                        rounded-xl
                        border border-zinc-700
                        bg-zinc-800
                        transition duration-300
                        group-hover:border-purple-500
                      "
                    >
                      <Icon
                        className={`text-2xl ${tech.color} transition duration-300 group-hover:scale-110`}
                      />
                    </div>

                    <h3 className="text-sm font-semibold text-white sm:text-[15px]">
                      {tech.name}
                    </h3>

                    <span className="mt-1 text-xs text-zinc-500">
                      Tool
                    </span>
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