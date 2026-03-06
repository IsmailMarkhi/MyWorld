import { Link } from "react-router-dom";
import { Home, ArrowLeft } from "lucide-react";

export default function NotFound() {
  return (
    <section className="min-h-[80vh] flex items-center justify-center px-6">

      <div className="text-center max-w-lg">

        <h1 className="text-7xl font-bold text-zinc-900 mb-4">
          404
        </h1>

        <h2 className="text-xl font-semibold text-zinc-800 mb-4">
          Page not found
        </h2>

        <p className="text-zinc-600 mb-8">
          The page you are looking for doesn't exist or may have been moved.
        </p>

        <div className="flex justify-center gap-4 flex-wrap">

          <Link
            to="/"
            className="
            flex items-center gap-2
            px-6 py-3
            bg-indigo-600
            text-white
            rounded-full
            hover:bg-indigo-700
            transition
            "
          >
            <Home size={18} />
            Go Home
          </Link>

          <button
            onClick={() => window.history.back()}
            className="
            flex items-center gap-2
            px-6 py-3
            border border-zinc-300
            rounded-full
            text-zinc-700
            hover:bg-zinc-100
            transition
            "
          >
            <ArrowLeft size={18} />
            Go Back
          </button>

        </div>

      </div>

    </section>
  );
}