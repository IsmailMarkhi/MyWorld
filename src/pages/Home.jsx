export default function Home() {
  return (
    <section
      aria-labelledby="home-title"
      className="
        min-h-[90vh]
        flex items-center
        px-6
      "
    >
      <div className="max-w-3xl mx-auto text-center">
        
        {/* Main heading */}
        <h1
          id="home-title"
          className="
            text-3xl sm:text-4xl md:text-5xl
            font-extrabold
            leading-tight
            mb-6
          "
        >
          I build clean, reliable websites
          <br className="hidden sm:block" />
          for real needs
        </h1>

        {/* Hidden SEO */}
        <p className="sr-only">
          Freelance web developer building modern websites using
          React, Tailwind CSS, and PHP.
        </p>

        {/* Subtitle */}
        <p
          className="
            text-zinc-400
            text-base sm:text-lg
            leading-relaxed
            max-w-xl
            mx-auto
            mb-10
          "
        >
          I help individuals and small businesses turn ideas into
          clear, fast, and usable websites — with focus on structure,
          performance, and simplicity.
        </p>

        {/* CTA group */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="https://wa.me/212723307462"
            aria-label="Contact freelance web developer on WhatsApp"
            className="
              inline-flex items-center justify-center
              px-8 py-4
              rounded-full
              bg-black text-white
              font-medium
              hover:bg-zinc-800
              transition
              focus:outline-none focus-visible:ring-2
              focus-visible:ring-black
            "
          >
            Contact me
          </a>

          <a
            href="/projects"
            className="
              inline-flex items-center justify-center
              px-8 py-4
              rounded-full
              border border-white/20
              text-zinc-300
              hover:text-white hover:border-white/40
              transition
            "
          >
            View projects
          </a>
        </div>

      </div>
    </section>
  );
}
