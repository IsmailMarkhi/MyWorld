import Container from "../components/ui/Container";
import SectionTitle from "../components/ui/SectionTitle";
import useSEO from "../hooks/useSEO";

export default function Contact() {

  useSEO({
    title: "Contact | Ismail Markhi",
    description: "Get in touch to discuss your project.",
    path: "/contact",
  });

  return (
    <section className="py-24">
      <Container>

        <SectionTitle
          title="Contact"
          description="Have a project in mind? Let's talk."
        />

        <div className="text-center">

          <a
            href="https://wa.me/212723307462"
            className="
              inline-flex
              px-8 py-4
              rounded-full
              bg-indigo-600
              text-white
              hover:bg-indigo-700
              transition
            "
          >
            Contact on WhatsApp
          </a>

        </div>

      </Container>
    </section>
  );
}