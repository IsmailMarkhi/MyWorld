export default function Skills() {
  const skills = [
    {
      title: "Frontend Development",
      seoTitle: "Modern Frontend Development Skills",
      color: "from-orange-500 to-red-500",
      desc: "Building fast, accessible, and visually clear user interfaces.",
      items: [
        "HTML5 / CSS3 / Tailwind CSS",
        "JavaScript (ES6+)",
        "React (components, hooks, routing)",
      ],
    },
    {
      title: "Backend & Server",
      seoTitle: "PHP & Backend Development Skills",
      color: "from-fuchsia-500 to-purple-600",
      desc: "Solid backend foundations for functional and scalable web apps.",
      items: [
        "PHP (OOP, logic, debugging)",
        "Laravel (in progress)",
        "XAMPP (local development)",
      ],
    },
    {
      title: "Workflow & Tools",
      seoTitle: "Developer Workflow & Collaboration Tools",
      color: "from-emerald-500 to-cyan-500",
      desc: "Professional tools and processes used in real-world projects.",
      items: [
        "Git & GitLab",
        "Jira (Agile workflow)",
        "UI / UX fundamentals",
      ],
    },
  ];

  return (
    <section
      className="max-w-7xl mx-auto px-6 py-32"
      aria-labelledby="skills-heading"
    >
      {/* Header */}
      <header className="text-center mb-24">
        <h2
          id="skills-heading"
          className="text-4xl md:text-5xl font-extrabold mb-6"
        >
          Skills & Technologies
        </h2>
        <p className="text-zinc-400 max-w-2xl mx-auto text-lg">
          Tools and technologies I use to design, build, and improve modern web applications.
        </p>
      </header>

      {/* Skills Grid */}
      <div className="grid md:grid-cols-3 gap-12">
        {skills.map((card) => (
          <article
            key={card.title}
            tabIndex="0"
            aria-labelledby={`${card.title}-title`}
            className="
              relative p-10 rounded-3xl
              bg-white/5 border border-white/10
              backdrop-blur-xl
              hover:-translate-y-2 hover:shadow-2xl
              transition
              focus:outline-none focus-visible:ring-2 focus-visible:ring-orange-500
            "
          >
            {/* Accent bar */}
            <div
              className={`h-1 w-20 rounded-full bg-gradient-to-r ${card.color} mb-6`}
            />

            <h3
              id={`${card.title}-title`}
              className="text-2xl font-semibold mb-2"
            >
              {card.title}
            </h3>

            {/* Hidden SEO text */}
            <p className="sr-only">{card.seoTitle}</p>

            <p className="text-zinc-400 mb-6">
              {card.desc}
            </p>

            <ul className="space-y-3 text-zinc-300">
              {card.items.map((item) => (
                <li key={item}>• {item}</li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </section>
  );
}
