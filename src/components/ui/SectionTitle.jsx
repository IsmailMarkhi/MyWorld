export default function SectionTitle({
  title,
  description,
  center = true,
}) {
  return (
    <header className={`mb-16 ${center ? "text-center" : ""}`}>

      <h2 className="
        text-3xl
        sm:text-4xl
        md:text-5xl
        font-bold
        text-purple-700
        mb-4
      ">
        {title}
      </h2>

      {description && (
        <p className="
          text-zinc-500
          max-w-2xl
          mx-auto
          sm:text-lg
        ">
          {description}
        </p>
      )}

    </header>
  );
}