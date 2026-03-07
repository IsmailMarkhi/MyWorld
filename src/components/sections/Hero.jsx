import Container from "../ui/Container";
import Button from "../ui/Button";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { SiFiverr } from "react-icons/si";

export default function Hero() {
  return (
    <section className="relative py-32 bg-gradient-to-b from-white via-purple-50/70 to-white overflow-hidden">

      {/* subtle glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-purple-200/20 blur-3xl rounded-full pointer-events-none"></div>

      <Container>

        <div className="max-w-3xl">

          {/* Badge */}
          <div className="mb-6">
            <span className="text-xs font-medium px-3 py-1 rounded-full bg-purple-100 text-purple-700">
              Web Developer
            </span>
          </div>

          {/* Title */}
          <h1 className="text-4xl md:text-6xl font-bold text-zinc-900 mb-6 leading-tight tracking-tight">
            Hi, I'm{" "}
            <span className="bg-gradient-to-r from-purple-600 to-indigo-600 bg-clip-text text-transparent">
              Ismail Markhi
            </span>
          </h1>

          {/* Description */}
          <p className="text-zinc-600 text-base sm:text-lg leading-relaxed max-w-xl mb-10">
            Web developer focused on building
            <span className="text-zinc-900 font-medium"> modern</span>,
            <span className="text-zinc-900 font-medium"> clean</span> and
            <span className="text-zinc-900 font-medium"> user-friendly </span>
            web applications using technologies like
            <span className="text-purple-600 font-medium">
              {" "}React, Laravel and Python
            </span>.
          </p>

          {/* CTA */}
          <div className="flex flex-wrap gap-4 mb-10">

            <Button to="/projects">
              View Projects
            </Button>

            <Button to="/contact" variant="outline">
              Contact Me
            </Button>

          </div>

          {/* Social */}
          <div className="flex gap-4">

            <a
              href="https://github.com/IsmailMarkhi"
              target="_blank"
              className="
              p-3
              border
              border-zinc-200
              rounded-xl
              text-zinc-600
              bg-white
              shadow-sm
              hover:text-purple-600
              hover:border-purple-300
              hover:bg-purple-50
              hover:shadow-md
              transition
              hover:scale-105
              "
            >
              <FaGithub size={20} />
            </a>

            <a
              href="https://www.linkedin.com/in/ismail-markhi-a67033317/"
              target="_blank"
              className="
              p-3
              border
              border-zinc-200
              rounded-xl
              text-zinc-600
              bg-white
              shadow-sm
              hover:text-purple-600
              hover:border-purple-300
              hover:bg-purple-50
              hover:shadow-md
              transition
              hover:scale-105
              "
            >
              <FaLinkedin size={20} />
            </a>

            <a
              href="https://www.fiverr.com/ismail1markhi"
              target="_blank"
              className="
              p-3
              border
              border-zinc-200
              rounded-xl
              text-zinc-600
              bg-white
              shadow-sm
              hover:text-green-500
              hover:border-green-300
              hover:bg-green-50
              hover:shadow-md
              transition
              hover:scale-105
              "
            >
              <SiFiverr size={20} />
            </a>

          </div>

        </div>

      </Container>

    </section>
  );
}