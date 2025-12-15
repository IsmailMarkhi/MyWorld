export default function Home() {
  return (
    <section
      aria-labelledby="home-title"
      className="min-h-[90vh] flex items-center px-6"
    >
      <div className="max-w-3xl mx-auto text-center">
        <h1
          id="home-title"
          className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight mb-6"
        >
          Simple websites
          <br className="hidden sm:block" />
          built with care
        </h1>

        <p className="sr-only">
          Ismail Markhi freelance web developer building clear and reliable
          websites for individuals and small businesses.
        </p>

        <p className="text-zinc-500 text-base sm:text-lg leading-relaxed max-w-xl mx-auto mb-12">
          My name is Ismail Markhi. I design and build websites that are easy to
          understand, pleasant to use, and focused on real goals.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="https://wa.me/212723307462"
            className="
              inline-flex items-center justify-center
              px-8 py-4 rounded-full
              bg-black text-white
              font-medium
              transition hover:bg-zinc-800
              focus:outline-none focus-visible:ring-2
              focus-visible:ring-black
            "
          >
            Tell me about your project
          </a>

          <a
            href="./projects"
            className="
              inline-flex items-center justify-center
              px-8 py-4 rounded-full
              border border-zinc-300
              text-zinc-600
              transition hover:border-zinc-500 hover:text-zinc-800
            "
          >
            See my work
          </a>
        </div>
      </div>
    </section>
  );
}
