export default function Story() {
  return (
    <section
      aria-labelledby="story-heading"
      className="px-6 py-24 sm:py-32"
    >
      <div className="max-w-3xl mx-auto">
        <header className="mb-12 sm:mb-16">
          <h2
            id="story-heading"
            className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4"
          >
            How I work
          </h2>

          <p className="sr-only">
            Professional approach of freelance web developer Ismail Markhi,
            focused on clear communication and practical web solutions.
          </p>
        </header>

        <div className="space-y-6 text-zinc-500 leading-relaxed text-base sm:text-lg">
          <p>
            My name is Ismail Markhi. I build websites with a clear structure
            and a simple purpose: make things easy to understand and easy to use.
          </p>

          <p>
            I focus on clarity, clean code, and practical decisions.
            I prefer solutions that last over designs that look good
            but create confusion.
          </p>

          <p>
            I work step by step, communicate clearly, and treat each project
            as something real, not just another task.
          </p>

          <p>
            If you are looking for a developer who listens, thinks carefully,
            and delivers reliable work, I would be happy to talk.
          </p>
        </div>
      </div>
    </section>
  );
}
