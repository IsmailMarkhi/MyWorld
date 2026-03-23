import Container from "../ui/Container";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { SiFiverr } from "react-icons/si";

export default function Hero() {
  return (
    <section className="py-32 bg-white">
      <Container>
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* LEFT CONTENT */}
          <div>
            <p className="text-sm text-purple-600 font-medium mb-4">
              Freelance Web Developer
            </p>

            <h1 className="text-5xl md:text-6xl font-bold tracking-tight text-zinc-900 leading-tight mb-6">
              Building modern
              <br />
              web experiences
            </h1>

            <p className="text-zinc-600 text-lg leading-relaxed max-w-xl mb-8">
              I'm{" "}
              <span className="font-semibold text-zinc-900">Ismail Markhi</span>
              , a developer focused on creating clean and scalable web
              applications using React, Laravel and Python.
            </p>

            {/* CTA */}
            <div className="flex items-center gap-6 mb-10">
              <a
                href="#projects"
                className="
                px-6 py-3
                bg-purple-600
                text-white
                rounded-lg
                hover:bg-purple-700
                transition duration-300
                "
              >
                View Projects
              </a>
              <a
                href="/assets/resume.pdf"
                download="Ismail-Markhi-Resume.pdf"
                className="text-zinc-700 font-medium px-6 py-3 border border-zinc-700 rounded-lg dark:border-purple-600 hover:border-purple-600 hover:text-purple-600 transition duration-300"
              >
                My CV
              </a>

              <a
                href="#contact"
                className="text-zinc-700 font-medium px-6 py-3 border border-zinc-700 rounded-lg dark:border-purple-600 hover:border-purple-600 hover:text-purple-600 transition duration-300"
              >
                Contact Me →
              </a>
            </div>

            {/* Social */}
            <div className="flex gap-10">
              <a
                href="https://github.com/IsmailMarkhi"
                target="_blank"
                className="hover:text-black scale-160"
              >
                <FaGithub size={22} />
              </a>

              <a
                href="https://www.linkedin.com/in/ismail-markhi-a67033317/"
                target="_blank"
                className="hover:text-blue-500 scale-160"
              >
                <FaLinkedin size={22} />
              </a>

              <a
                href="https://www.fiverr.com/sellers/ismail1markhi"
                target="_blank"
                className="hover:text-black scale-160"
              >
                <SiFiverr size={22} />
              </a>
            </div>
          </div>

          {/* RIGHT SIDE */}
          <div className="sm:flex lg:block">
            <div className="bg-zinc-900 text-white rounded-xl p-6 shadow-lg">
              <div className="text-xs text-zinc-400 mb-3">portfolio.js</div>

              <pre className="text-sm leading-relaxed">
                {`const developer = {
  name: "Ismail Markhi",
  role: "Web Developer",
  stack: [
    "React",
    "Laravel",
    "Python",
    "Tailwind"
  ],
  available: true
};`}
              </pre>
            </div>

            {/* small stats */}
            <div className="grid grid-cols-2 gap-4 mt-6">
              <div className="border border-zinc-200 rounded-lg p-4 text-center">
                <p className="text-xl font-semibold text-zinc-900">2+</p>
                <p className="text-xs text-zinc-500">Years Experience</p>
              </div>

              <div className="border border-zinc-200 rounded-lg p-4 text-center">
                <p className="text-xl font-semibold text-zinc-900">15+</p>
                <p className="text-xs text-zinc-500">Projects Built</p>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
