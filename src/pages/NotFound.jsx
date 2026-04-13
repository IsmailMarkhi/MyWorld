import { Link } from "react-router-dom";
import { Home, ArrowLeft, SearchX } from "lucide-react";
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
    <section
      className="
        relative min-h-screen overflow-hidden
        bg-gradient-to-b from-black via-zinc-950 to-black
        px-6 py-20
        flex items-center justify-center
      "
    >
      {/* Background atmosphere */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-[10%] top-20 h-64 w-64 rounded-full bg-purple-700/20 blur-3xl" />
        <div className="absolute right-[10%] bottom-16 h-64 w-64 rounded-full bg-fuchsia-700/20 blur-3xl" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(168,85,247,0.08),transparent_68%)]" />
      </div>

      <div
        className="
          relative z-10 w-full max-w-2xl
          rounded-[32px]
          border border-zinc-800
          bg-zinc-900/70
          p-8 sm:p-10 md:p-12
          text-center
          backdrop-blur-xl
          shadow-[0_20px_80px_rgba(0,0,0,0.35)]
        "
      >
        {/* Icon */}
        <div
          className="
            mx-auto mb-6 flex h-16 w-16 items-center justify-center
            rounded-2xl border border-purple-500/30
            bg-purple-500/10 text-purple-300
          "
        >
          <SearchX size={28} />
        </div>

        {/* 404 number */}
        <p className="text-sm font-semibold uppercase tracking-[0.22em] text-purple-300">
          Error
        </p>

        <h1 className="mt-3 text-6xl font-bold tracking-tight text-white sm:text-7xl">
          404
        </h1>

        <h2 className="mt-4 text-2xl font-semibold text-zinc-100 sm:text-3xl">
          Page not found
        </h2>

        <p className="mx-auto mt-5 max-w-xl text-base leading-8 text-zinc-400 sm:text-lg">
          The page you are trying to access does not exist, was moved, or the
          link is incorrect.
        </p>

        {/* Actions */}
        <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <Link
            to="/"
            className="
              inline-flex items-center justify-center gap-2
              rounded-full px-7 py-3.5
              bg-gradient-to-r from-purple-600 to-fuchsia-600
              text-sm font-semibold text-white
              shadow-[0_12px_35px_rgba(168,85,247,0.30)]
              transition-all duration-300
              hover:-translate-y-[2px]
              hover:shadow-[0_18px_45px_rgba(168,85,247,0.38)]
            "
          >
            <Home size={18} />
            Go Home
          </Link>

          <button
            onClick={() => window.history.back()}
            className="
              inline-flex items-center justify-center gap-2
              rounded-full border border-zinc-700
              bg-zinc-950/70 px-7 py-3.5
              text-sm font-semibold text-zinc-200
              transition-all duration-300
              hover:-translate-y-[2px]
              hover:border-purple-500
              hover:text-white
              hover:shadow-[0_0_30px_rgba(168,85,247,0.16)]
            "
          >
            <ArrowLeft size={18} />
            Go Back
          </button>
        </div>

        {/* Small note */}
        <p className="mt-8 text-sm text-zinc-500">
          Return to the homepage to continue exploring the portfolio.
        </p>
      </div>
    </section>
  );
}