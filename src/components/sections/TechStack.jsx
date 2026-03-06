import Container from "../ui/Container";
import SectionTitle from "../ui/SectionTitle";
import { techStack } from "../../data/tech";

export default function TechStack() {
  return (
    <section className="py-24 bg-zinc-50">

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
          gap-8
          mt-12
        "
        >

          {techStack.map((tech) => {
            const Icon = tech.icon;

            return (
              <div
                key={tech.name}
                className="
                flex flex-col
                items-center
                justify-center
                p-6
                bg-white
                border
                border-zinc-200
                rounded-xl
                hover:shadow-lg
                hover:-translate-y-1
                transition
              "
              >

                <Icon className={`text-4xl mb-3 ${tech.color}`} />

                <p className="text-sm font-medium text-zinc-700">
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