import Container from "../ui/Container";
import Button from "../ui/Button";
import { FaGithub, FaLinkedin} from "react-icons/fa";

export default function Hero() {
  return (
    <section className="py-32">
      <Container>
        <div className="max-w-3xl">
          <h1 className="text-4xl md:text-6xl font-bold text-zinc-900 mb-6 leading-tight">
            Hi, I'm Ismail Markhi
          </h1>

          <p
            className="text-zinc-600 text-base sm:text-lg leading-relaxed max-w-xl mb-8"
          >
            Web developer focused on building
            <span className="text-zinc-900 font-medium"> modern</span>,
            <span className="text-zinc-900 font-medium"> clean</span> and
            <span className="text-zinc-900 font-medium"> user-friendly </span>
            web applications using technologies like React, Laravel and Python.
          </p>

          <div className="flex flex-wrap gap-4 mb-8">
            <Button to="/projects">View Projects</Button>

            <Button to="/contact" variant="outline">
              Contact Me
            </Button>
          </div>

          {/* Social links */}
          <div className="flex gap-4">
            <a
              href="https://github.com/IsmailMarkhi"
              target="_blank"
              className="
              p-3
              border
              border-zinc-200
              rounded-lg
              hover:bg-zinc-100
              transition
              "
            >
              <FaGithub size={20} />
            </a>

            <a
              href="https://linkedin.com"
              target="_blank"
              className="
              p-3
              border
              border-zinc-200
              rounded-lg
              hover:bg-zinc-100
              transition
              "
            >
              <FaLinkedin size={20} />
            </a>
          </div>
        </div>
      </Container>
    </section>
  );
}
