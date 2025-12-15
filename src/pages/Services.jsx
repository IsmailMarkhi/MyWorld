export default function Services() {
  const services = [
    {
      category: "Websites & UI",
      seoTitle: "Modern Websites & UI Development",
      desc: "High-performance, SEO-friendly interfaces designed for clarity, speed, and conversion.",
      items: [
        "Landing pages (React & Tailwind)",
        "Personal & portfolio websites",
        "Small business websites",
        "UI redesign & modernization",
        "Figma to responsive code",
        "Mobile & cross-device fixes",
      ],
    },
    {
      category: "Frontend Help",
      seoTitle: "Frontend Development & React Support",
      desc: "Fixing, improving, and optimizing frontend experiences with clean, maintainable code.",
      items: [
        "Layout & UI bug fixes",
        "Reusable React components",
        "Code cleanup & refactoring",
        "UX improvements",
        "Frontend performance optimization",
      ],
    },
    {
      category: "Backend / PHP",
      seoTitle: "PHP & Backend Development Support",
      desc: "Reliable backend help for functional, secure, and scalable web projects.",
      items: [
        "PHP logic & debugging",
        "Form handling & validation",
        "CRUD systems",
        "Basic authentication systems",
        "Laravel support (basic to intermediate)",
        "XAMPP local server setup & fixes",
      ],
    },
    {
      category: "Guidance & Support",
      seoTitle: "Developer Guidance & Code Review",
      desc: "Clear direction and practical advice to help developers move faster with confidence.",
      items: [
        "Code review & feedback",
        "Project structure advice",
        "Learning roadmap (React & PHP)",
        "Debugging sessions",
        "Student & beginner mentoring",
      ],
    },
    {
      category: "Helpful Extras",
      seoTitle: "SEO, Speed & Deployment Essentials",
      desc: "Small but critical improvements that make websites production-ready and discoverable.",
      items: [
        "Basic SEO fixes (titles, meta, structure)",
        "Website speed improvements",
        "Deployment on Netlify or Vercel",
        "Git & GitLab assistance",
        "Jira workflow setup",
      ],
    },
  ];

  return (
    <section
      aria-labelledby="services-heading"
      className="px-6 py-24 sm:py-32"
    >
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <header className="text-center mb-20 sm:mb-28">
          <h1
            id="services-heading"
            className="text-3xl sm:text-4xl md:text-5xl font-extrabold mb-4"
          >
            How I Can Help
          </h1>
          <p className="text-zinc-400 max-w-xl mx-auto text-base sm:text-lg">
            Practical web development services focused on clarity,
            performance, and real business needs.
          </p>
        </header>

        {/* Services Grid */}
        <div className="grid gap-10 md:grid-cols-2 place-items-center">
          {services.map((service) => (
            <article
              key={service.category}
              aria-labelledby={`${service.category}-title`}
              className="
                relative w-full max-w-xl
                p-8 sm:p-10 rounded-3xl
                bg-white/5 border border-white/10
                transition
                hover:-translate-y-1 hover:shadow-xl
              "
            >
              {/* Accent */}
              <div
                aria-hidden="true"
                className="
                  absolute top-0 left-1/2 -translate-x-1/2
                  h-[3px] w-16
                  bg-gradient-to-r from-orange-500 to-fuchsia-500
                  rounded-full
                "
              />

              <h2
                id={`${service.category}-title`}
                className="text-center text-xl sm:text-2xl font-semibold mb-4 mt-4"
              >
                {service.category}
              </h2>

              {/* Hidden SEO helper */}
              <p className="sr-only">{service.seoTitle}</p>

              <p className="text-center text-zinc-400 mb-6 leading-relaxed text-sm sm:text-base">
                {service.desc}
              </p>

              <ul className="space-y-2 text-sm sm:text-base text-zinc-300 text-center">
                {service.items.map((item) => (
                  <li key={item}>
                    {item}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-28 sm:mt-36">
          <p className="text-zinc-400 mb-8 text-base sm:text-lg max-w-lg mx-auto">
            Not sure which service fits your needs?
            We’ll figure it out together.
          </p>

          <a
            href="https://wa.me/212723307462"
            aria-label="Contact via WhatsApp to discuss your project"
            className="
              inline-flex items-center justify-center
              px-10 sm:px-14
              py-4 sm:py-5
              rounded-full
              bg-gradient-to-r from-orange-500 to-fuchsia-500
              text-black
              font-semibold sm:font-bold
              text-base sm:text-lg
              hover:scale-105
              transition
              focus:outline-none focus-visible:ring-2
              focus-visible:ring-orange-500
            "
          >
            Let’s Talk →
          </a>
        </div>
      </div>
    </section>
  );
}
