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
      className="max-w-7xl mx-auto px-6 py-32"
      aria-labelledby="services-heading"
    >
      {/* Header */}
      <header className="text-center mb-28">
        <h1
          id="services-heading"
          className="text-5xl md:text-6xl font-extrabold mb-6"
        >
          How I Can Help
        </h1>
        <p className="text-zinc-400 max-w-2xl mx-auto text-lg">
          Practical web development services focused on real problems,
          clean execution, and long-term value.
        </p>
      </header>

      {/* Services Grid */}
      <div className="grid md:grid-cols-2 gap-14">
        {services.map((service) => (
          <article
            key={service.category}
            className="
              relative p-10 rounded-3xl
              bg-white/5 border border-white/10
              hover:-translate-y-1 hover:shadow-2xl
              transition
            "
            aria-labelledby={`${service.category}-title`}
          >
            {/* Accent */}
            <div
              className="
                absolute top-0 left-10
                h-[3px] w-16
                bg-gradient-to-r from-orange-500 to-fuchsia-500
                rounded-full
              "
            />

            <h2
              id={`${service.category}-title`}
              className="text-2xl font-semibold mb-2"
            >
              {service.category}
            </h2>

            <p className="sr-only">{service.seoTitle}</p>

            <p className="text-zinc-400 mb-6">
              {service.desc}
            </p>

            <ul className="space-y-2 text-zinc-300">
              {service.items.map((item) => (
                <li key={item}>• {item}</li>
              ))}
            </ul>
          </article>
        ))}
      </div>

      {/* CTA */}
      <div className="text-center mt-36">
        <p className="text-zinc-400 mb-8 text-lg">
          Not sure which service fits your needs?  
          We’ll figure it out together.
        </p>

        <a
          href="https://wa.me/212XXXXXXXXX"
          aria-label="Contact via WhatsApp to discuss your project"
          className="
            inline-flex px-14 py-5 rounded-full
            bg-gradient-to-r from-orange-500 to-fuchsia-500
            text-black font-bold text-lg
            hover:scale-105 transition
            focus:outline-none focus-visible:ring-2 focus-visible:ring-orange-500
          "
        >
          Let’s Talk →
        </a>
      </div>
    </section>
  );
}
