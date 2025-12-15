export default function Contact() {
  return (
    <section
      aria-labelledby="contact-heading"
      className="min-h-[70vh] flex items-center justify-center px-6"
    >
      <div className="text-center max-w-md">
        <h2
          id="contact-heading"
          className="text-3xl sm:text-4xl font-bold mb-6"
        >
          Let’s talk about your project
        </h2>

        <p className="text-zinc-500 text-sm sm:text-base mb-12 leading-relaxed">
          If you have a clear idea or need help shaping one,
          this is the best way to move forward.
        </p>

        <a
          href="https://wa.me/212723307462"
          className="
            inline-flex items-center justify-center
            w-full px-10 py-5
            rounded-xl
            bg-black text-white
            font-semibold text-lg
            transition hover:bg-zinc-800
            focus:outline-none focus-visible:ring-2
            focus-visible:ring-black
          "
        >
          Contact me on WhatsApp
        </a>

        <p className="mt-6 text-xs text-zinc-500">
          Direct conversation. No forms. No pressure.
        </p>
      </div>
    </section>
  );
}
