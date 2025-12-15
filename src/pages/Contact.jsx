export default function Contact() {
  return (
    <section
      aria-labelledby="contact-heading"
      className="
        min-h-[70vh]
        flex items-center justify-center
        px-6
      "
    >
      <div className="text-center max-w-md">
        
        {/* Heading */}
        <h2
          id="contact-heading"
          className="
            text-3xl sm:text-4xl
            font-extrabold
            mb-6
          "
        >
          Ready to move forward?
        </h2>

        {/* Short context (not home-like) */}
        <p className="text-zinc-400 text-sm sm:text-base mb-10 leading-relaxed">
          If you’re serious about building or improving a website,
          this is the next step.
        </p>

        {/* STRONG CTA */}
        <a
          href="https://wa.me/212723307462"
          aria-label="Contact freelance web developer on WhatsApp"
          className="
            inline-flex items-center justify-center
            w-full
            px-10 py-5
            rounded-xl
            bg-gradient-to-r from-orange-500 to-fuchsia-600
            text-black
            font-bold
            text-lg
            hover:scale-[1.02]
            transition
            focus:outline-none focus-visible:ring-2
            focus-visible:ring-orange-500
          "
        >
          Start the conversation
        </a>

        {/* Trust micro-copy */}
        <p className="mt-6 text-xs text-zinc-500">
          No forms · No emails · Direct contact
        </p>
      </div>
    </section>
  );
}
