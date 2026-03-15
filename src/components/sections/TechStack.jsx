import Container from "../ui/Container";
import SectionTitle from "../ui/SectionTitle";
import { techStack } from "../../data/tech";

import { motion } from "framer-motion";

export default function TechStack() {

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08
      }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 40 },
    show: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.4 }
    }
  };

  return (
    <section className="relative py-24 bg-gradient-to-b from-white via-purple-50/40 to-white dark:from-zinc-900 dark:via-zinc-900 dark:to-black">

      {/* glow background */}
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(circle_at_center,rgba(168,85,247,0.08),transparent_70%)]" />

      <Container>

        <SectionTitle
          title="Technologies I Use"
          description="Tools and technologies I use to build modern web applications."
        />

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="
          grid
          grid-cols-2
          sm:grid-cols-3
          md:grid-cols-4
          lg:grid-cols-6
          gap-6
          mt-14
        "
        >

          {techStack.map((tech) => {
            const Icon = tech.icon;

            return (
              <motion.div
                variants={item}
                key={tech.name}
                className="
                group
                flex flex-col
                items-center
                justify-center
                p-6
                bg-white/80
                dark:bg-zinc-900/80
                backdrop-blur
                border border-zinc-200 dark:border-zinc-800
                rounded-xl
                shadow-sm
                hover:shadow-lg
                hover:-translate-y-2
                hover:border-purple-300
                transition
              "
              >

                <Icon
                  className={`
                  text-4xl
                  mb-3
                  ${tech.color}
                  transition
                  group-hover:scale-110
                  `}
                />

                <p className="text-sm font-medium text-zinc-700 dark:text-zinc-300 group-hover:text-zinc-900 dark:group-hover:text-white">
                  {tech.name}
                </p>

              </motion.div>
            );
          })}

        </motion.div>

      </Container>

    </section>
  );
}