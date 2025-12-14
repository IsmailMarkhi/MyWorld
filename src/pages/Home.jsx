export default function Home() {
  return (
    <section
      className="min-h-[90vh] flex items-center justify-center px-6"
      aria-labelledby="home-hero-title"
    >
      <div className="text-center max-w-4xl">

        {/* Main SEO + UX Heading */}
        <h1
          id="home-hero-title"
          className="
            text-5xl md:text-7xl font-extrabold leading-tight
            bg-gradient-to-r from-orange-500 via-red-500 to-fuchsia-600
            bg-clip-text text-transparent
          "
        >
          Building myself<br />in public
        </h1>

        {/* Hidden SEO support text */}
        <p className="sr-only">
          Personal website of a web developer documenting growth, real projects,
          and professional web development skills.
        </p>

        {/* Subtitle */}
        <p className="mt-8 text-lg text-zinc-400 max-w-xl mx-auto leading-relaxed">
          Not a portfolio. Not a promise.  
          A real journey of learning, building, failing, and improving —
          one project at a time.
        </p>

        {/* Primary CTA */}
        <a
          href="https://wa.me/212XXXXXXXXX"
          aria-label="Contact web developer on WhatsApp"
          className="
            inline-flex items-center gap-3 mt-14
            px-12 py-5 rounded-full
            bg-gradient-to-r from-orange-500 to-fuchsia-600
            text-black font-semibold text-lg
            hover:scale-105 transition
            focus:outline-none focus-visible:ring-2
            focus-visible:ring-orange-500
          "
        >
          Start a conversation 🔥
        </a>

      </div>
    </section>
  );
}
