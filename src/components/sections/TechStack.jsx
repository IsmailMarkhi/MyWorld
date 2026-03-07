import Container from "../ui/Container";
import SectionTitle from "../ui/SectionTitle";
import { techStack } from "../../data/tech";

export default function TechStack() {
  return (
    <section className="relative py-24 bg-gradient-to-b from-white via-purple-50/40 to-white">

      {/* glow background */}
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(circle_at_center,rgba(168,85,247,0.08),transparent_70%)]" />

      <Container>

        <SectionTitle
          title="Technologies I Use"
          description="Tools and technologies I use to build modern web applications."
        />

        <div
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
              <div
                key={tech.name}
                className="
                group
                flex flex-col
                items-center
                justify-center
                p-6
                bg-white
                border
                border-zinc-200
                rounded-xl
                shadow-sm
                hover:shadow-md
                hover:-translate-y-1
                hover:border-purple-200
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

                <p className="text-sm font-medium text-zinc-700 group-hover:text-zinc-900">
                  {tech.name}
                </p>

              </div>
            );
          })}

        </div>

      </Container>

    </section>
  );
}