import Container from "../components/ui/Container";
import SectionTitle from "../components/ui/SectionTitle";
import useSEO from "../hooks/useSEO";

import { FaWhatsapp, FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

export default function Contact() {

  useSEO({
    title: "Contact | Ismail Markhi",
    description: "Get in touch to discuss your project.",
    path: "/contact",
  });

  const contacts = [
    {
      name: "WhatsApp",
      icon: FaWhatsapp,
      href: "https://wa.me/212723307462",
      color: "hover:bg-green-50 hover:text-green-600"
    },
    {
      name: "Email",
      icon: FaEnvelope,
      href: "mailto:ismailmarkhi17@gmail.com",
      color: "hover:bg-purple-50 hover:text-purple-600"
    },
    {
      name: "LinkedIn",
      icon: FaLinkedin,
      href: "https://www.linkedin.com/in/ismail-markhi-a67033317/",
      color: "hover:bg-blue-50 hover:text-blue-600"
    },
    {
      name: "GitHub",
      icon: FaGithub,
      href: "https://github.com/IsmailMarkhi",
      color: "hover:bg-zinc-100 hover:text-zinc-900"
    }
  ];

  return (
    <section className="py-24 bg-gradient-to-b from-white to-purple-50">

      <Container>

        <SectionTitle
          title="Let's Work Together"
          description="Have a project idea or need a developer? Feel free to reach out."
        />

        <div className="max-w-2xl mx-auto text-center">

          {/* Main CTA */}
          <a
            href="https://wa.me/212723307462"
            className="
              inline-flex
              items-center
              gap-3
              px-10
              py-4
              rounded-full
              bg-gradient-to-r
              from-purple-600
              to-indigo-600
              text-white
              font-medium
              hover:scale-105
              transition
              shadow-lg
              mb-12
            "
          >
            <FaWhatsapp size={20} />
            Start a Conversation
          </a>

          {/* Other contact options */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">

            {contacts.map(({ name, icon: Icon, href, color }) => (
              <a
                key={name}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className={`
                  flex
                  flex-col
                  items-center
                  gap-3
                  p-5
                  border
                  border-zinc-200
                  rounded-xl
                  text-zinc-600
                  transition
                  ${color}
                `}
              >

                <Icon size={22} />

                <span className="text-sm font-medium">
                  {name}
                </span>

              </a>
            ))}

          </div>

        </div>

      </Container>

    </section>
  );
}