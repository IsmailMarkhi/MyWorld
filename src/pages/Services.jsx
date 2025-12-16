import useSEO from "../hooks/useSEO";

export default function Services() { 
useSEO({
  title: "Web Development Services | Ismail Markhi",
  description:
    "Professional web development services for businesses and individuals. I create responsive websites and web applications with modern technologies.",
  path: "/services",
});

  const services = [
    {
      title: "Websites",
      desc: "I build simple and clear websites that help people understand your business and contact you.",
      items: [
        "Landing pages",
        "Personal and portfolio websites",
        "Small business websites",
        "Responsive layouts",
      ],
    },
    {
      title: "Frontend improvements",
      desc: "I fix and improve existing interfaces to make them easier to use and maintain.",
      items: [
        "UI fixes",
        "React components",
        "Code cleanup",
        "Usability improvements",
      ],
    },
    {
      title: "Backend and PHP",
      desc: "I help with basic backend logic and small systems using PHP.",
      items: [
        "Forms and validation",
        "CRUD systems",
        "PHP debugging",
        "Local setup with XAMPP",
      ],
    },
    {
      title: "Guidance",
      desc: "I help developers and clients make better technical decisions.",
      items: [
        "Code review",
        "Project structure advice",
        "Learning direction",
      ],
    },
  ];

  return (
    <section aria-labelledby="services-heading" className="px-6 py-24 sm:py-32">
      <div className="max-w-5xl mx-auto text-center">
        <header className="mb-16 sm:mb-24">
          <h1
            id="services-heading"
            className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4"
          >
            What I do
          </h1>

          <p className="text-zinc-500 max-w-xl mx-auto text-base sm:text-lg">
            Simple services focused on clarity, usability and real needs.
          </p>
        </header>

        <div className="grid gap-12 sm:grid-cols-2">
          {services.map((service) => (
            <article
              key={service.title}
              className="
                p-8 rounded-2xl
                bg-white/5 border border-white/10
                transition hover:shadow-lg
              "
            >
              <h2 className="text-xl font-semibold mb-3">
                {service.title}
              </h2>

              <p className="text-zinc-500 mb-4 text-sm sm:text-base">
                {service.desc}
              </p>

              <ul className="space-y-1 text-sm text-zinc-400">
                {service.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>

        <div className="mt-20">
          <p className="text-zinc-500 mb-6">
            Not sure what you need?
          </p>

          <a
            href="https://wa.me/212723307462"
            className="
              inline-flex items-center justify-center
              px-10 py-4 rounded-full
              bg-gradient-to-r from-orange-500 to-fuchsia-500
              text-black font-semibold
              transition hover:scale-105
            "
          >
            Tell me about your project
          </a>
        </div>
      </div>
    </section>
  );
}
