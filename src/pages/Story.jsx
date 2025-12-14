export default function Story() {
  return (
    <section
      className="max-w-3xl mx-auto px-6 py-32"
      aria-labelledby="story-heading"
    >
      {/* Header */}
      <header className="mb-12">
        <h2
          id="story-heading"
          className="text-4xl md:text-5xl font-extrabold mb-6"
        >
          The story behind the journey
        </h2>

        {/* SEO helper (hidden visually) */}
        <p className="sr-only">
          Personal story of a web developer building skills, experience,
          and real projects through discipline, learning, and consistency.
        </p>
      </header>

      {/* Content */}
      <div className="space-y-8 text-zinc-400 leading-relaxed text-lg">
        <p>
          I stopped waiting for permission and decided to take full ownership
          of my growth as a web developer.
        </p>

        <p>
          This website exists because comfort slows progress.
          Real improvement comes from building, testing, failing,
          and improving again.
        </p>

        <p>
          Every line of code here represents a real step forward —
          learning new skills, solving problems, and growing through
          uncertainty and pressure.
        </p>

        <p>
          This is not a finished product.
          It’s an ongoing process of learning, discipline, and execution.
        </p>
      </div>
    </section>
  );
}
