import { Link } from "react-router-dom";
import { Home, ArrowLeft, SearchX, Sparkles, Compass } from "lucide-react";
import useSEO from "../hooks/useSEO";

export default function NotFound() {
  useSEO({
    title: "404 | Page Not Found",
    description: "The page you are looking for could not be found.",
    path: "/404",
    noindex: true,
    nofollow: true,
    schema: "none",
  });

  return (
    <main
      className="
        relative flex min-h-screen items-center justify-center overflow-hidden
        bg-[#fbf7ff] px-4 py-24 sm:px-6 lg:py-32
      "
    >
      {/* Background */}
      <div className="pointer-events-none absolute inset-0" aria-hidden="true">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(88,28,135,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(88,28,135,0.05)_1px,transparent_1px)] bg-[size:46px_46px]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_12%,rgba(168,85,247,0.16),transparent_36%)]" />

        <div className="absolute left-[14%] top-24 h-72 w-72 rounded-full bg-purple-200/40 blur-3xl" />
        <div className="absolute right-[12%] top-48 h-80 w-80 rounded-full bg-fuchsia-200/30 blur-3xl" />
        <div className="absolute bottom-10 left-1/2 h-96 w-96 -translate-x-1/2 rounded-full bg-white/80 blur-3xl" />

        <div className="absolute inset-x-0 top-0 h-48 bg-gradient-to-b from-white/85 to-transparent" />
        <div className="absolute inset-x-0 bottom-0 h-48 bg-gradient-to-t from-white/85 to-transparent" />
      </div>

      <section
        aria-labelledby="not-found-title"
        className="
          group relative z-10 w-full max-w-3xl overflow-hidden
          rounded-[38px] border border-white/70 bg-white/70 p-[1px]
          shadow-[0_24px_90px_rgba(24,24,27,0.10)]
          backdrop-blur-xl
        "
      >
        <div className="absolute inset-0 bg-gradient-to-br from-purple-100 via-white to-fuchsia-100 opacity-90" />
        <div className="absolute inset-x-10 top-0 h-px bg-gradient-to-r from-transparent via-purple-500/70 to-transparent" />
        <div className="absolute -right-24 -top-24 h-56 w-56 rounded-full bg-purple-300/25 blur-3xl" />

        <div
          className="
            relative z-10 rounded-[37px] border border-zinc-200/70
            bg-white/85 p-8 text-center backdrop-blur-xl
            sm:p-10 md:p-12
          "
        >
          <div
            className="
              mx-auto mb-7 flex h-16 w-16 items-center justify-center
              rounded-3xl border border-purple-100 bg-purple-50
              text-purple-700 shadow-[0_12px_35px_rgba(88,28,135,0.14)]
            "
          >
            <SearchX size={30} />
          </div>

          <p className="mb-5 inline-flex items-center gap-2 rounded-full border border-purple-200 bg-white/90 px-4 py-2 text-xs font-black uppercase tracking-[0.22em] text-purple-700 shadow-[0_8px_25px_rgba(88,28,135,0.12)] backdrop-blur">
            <Sparkles size={14} />
            Error 404
          </p>

          <h1
            id="not-found-title"
            className="text-7xl font-black tracking-[-0.08em] text-zinc-950 sm:text-8xl lg:text-9xl"
          >
            404
          </h1>

          <h2 className="mt-5 text-3xl font-black tracking-[-0.04em] text-zinc-950 sm:text-4xl">
            Page not found.
          </h2>

          <p className="mx-auto mt-5 max-w-xl text-base leading-8 text-zinc-600 sm:text-lg">
            The page you are trying to access does not exist, was moved, or the
            link is incorrect. Return to the homepage or go back to continue
            exploring the portfolio.
          </p>

          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link
              to="/"
              className="
                inline-flex items-center justify-center gap-2 rounded-2xl
                border border-zinc-950 bg-zinc-950 px-7 py-3.5
                text-sm font-bold text-white shadow-sm
                transition-all duration-300
                hover:-translate-y-1 hover:bg-purple-700
              "
            >
              <Home size={18} />
              Go Home
            </Link>

            <button
              type="button"
              onClick={() => window.history.back()}
              className="
                inline-flex items-center justify-center gap-2 rounded-2xl
                border border-zinc-200 bg-white px-7 py-3.5
                text-sm font-bold text-zinc-800 shadow-sm
                transition-all duration-300
                hover:-translate-y-1 hover:border-purple-300 hover:text-purple-700
              "
            >
              <ArrowLeft size={18} />
              Go Back
            </button>
          </div>

          <div className="mx-auto mt-9 flex max-w-md items-center justify-center gap-2 rounded-2xl border border-zinc-200 bg-white/80 px-4 py-3 text-sm font-semibold text-zinc-500 shadow-sm">
            <Compass size={16} className="text-purple-700" />
            Check the URL or return to a valid portfolio page.
          </div>
        </div>
      </section>
    </main>
  );
}