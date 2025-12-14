export default function Contact() {
  return (
    <section
      className="text-center px-6 py-40"
      aria-labelledby="contact-heading"
    >
      {/* Main heading */}
      <h2
        id="contact-heading"
        className="text-5xl md:text-6xl font-extrabold mb-8"
      >
        Let’s build something real
      </h2>

      {/* Hidden SEO support */}
      <p className="sr-only">
        Contact a web developer for collaboration, freelance projects,
        frontend, backend, or full website development.
      </p>

      {/* Subtitle */}
      <p className="text-zinc-400 text-lg max-w-xl mx-auto mb-16 leading-relaxed">
        Whether you have an idea, a challenge, or a project that needs clarity,
        I’m open to conversations that lead to real work.
      </p>

      {/* CTA */}
      <a
        href="https://wa.me/212723307462"
        aria-label="Contact via WhatsApp to discuss a web development project"
        className="
          inline-flex items-center justify-center
          px-14 py-6 rounded-full
          bg-gradient-to-r from-emerald-400 to-cyan-500
          text-black font-bold text-lg
          hover:scale-105 transition
          focus:outline-none focus-visible:ring-2
          focus-visible:ring-emerald-400
        "
      >
        Start the conversation 🚀
      </a>
    </section>
  );
}
