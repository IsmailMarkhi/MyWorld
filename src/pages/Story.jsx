export default function Story() {
  return (
    <section
      aria-labelledby="story-heading"
      className="px-6 py-24 sm:py-32"
    >
      <div className="max-w-3xl mx-auto">
        {/* Header */}
        <header className="mb-12 sm:mb-16">
          <h2
            id="story-heading"
            className="text-3xl sm:text-4xl md:text-5xl font-extrabold mb-4"
          >
            My approach to building websites
          </h2>

          {/* Hidden SEO support */}
          <p className="sr-only">
            Professional story of a freelance web developer focused on
            building clean, reliable, and user-focused web solutions.
          </p>
        </header>

        {/* Content */}
        <div className="space-y-8 text-zinc-400 leading-relaxed text-base sm:text-lg">
          <p>
            I’m a web developer focused on building clear, reliable, and
            maintainable websites.  
            I value structure, simplicity, and thoughtful execution over
            shortcuts or trends.
          </p>

          <p>
            My work is driven by real practice. I learn by building,
            refining, and solving practical problems — not by copying
            templates or following generic tutorials.
          </p>

          <p>
            This website represents my current level, my way of thinking,
            and how I approach projects. It’s intentionally honest and
            continuously improved as I grow and take on new challenges.
          </p>

          <p>
            If you’re looking for someone who communicates clearly,
            works with focus, and treats your project seriously,
            I’d be glad to discuss how I can help.
          </p>
        </div>
      </div>
    </section>
  );
}
