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
        staggerChildren: 0.06
      }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 24 },
    show: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.35 }
    }
  };

  return (
    <section
      id="tech"
      aria-labelledby="tech-title"
      className="
      relative
      py-28
      bg-gradient-to-b
      from-white
      via-purple-50/40
      to-white
      dark:from-zinc-900
      dark:via-zinc-900
      dark:to-black
      "
    >

      {/* subtle glow */}
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(circle_at_center,rgba(168,85,247,0.07),transparent_70%)]" />

      <Container>

        <header className="mb-16">
          <SectionTitle
            title="Technologies"
            description="Technologies and tools I use to build scalable modern applications."
          />
        </header>


        <motion.ul
          role="list"
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-60px" }}
          className="
          grid
          grid-cols-2
          sm:grid-cols-3
          md:grid-cols-4
          lg:grid-cols-6
          gap-6
          "
        >

          {techStack.map((tech) => {

            const Icon = tech.icon;

            return (

              <motion.li
                key={tech.name}
                variants={item}
              >

                <article
                  className="
                  group
                  cursor-pointer
                  flex
                  flex-col
                  items-center
                  justify-center
                  gap-3
                  p-6
                  rounded-xl
                  border border-purple-200
                  dark:border-purple-700
                  bg-white
                  dark:bg-zinc-900
                  shadow-sm
                  hover:shadow-md
                  hover:-translate-y-1
                  hover:border-purple-800
                  transition-all
                  duration-200
                  "
                >

                  <Icon
                    className={`
                    text-4xl
                    ${tech.color}
                    transition-transform
                    duration-200
                    group-hover:scale-110
                    `}
                  />

                  <span
                    className="
                    text-sm
                    font-medium
                    text-zinc-700
                    dark:text-zinc-300
                    "
                  >
                    {tech.name}
                  </span>

                </article>

              </motion.li>

            );
          })}

        </motion.ul>

      </Container>

    </section>
  );
}