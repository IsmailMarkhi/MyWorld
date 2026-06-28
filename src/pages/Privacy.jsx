export default function Privacy() {
  return (
    <main className="min-h-screen bg-zinc-50 py-20">
      <div className="mx-auto max-w-4xl rounded-3xl bg-white p-10 shadow-lg">
        <h1 className="text-4xl font-bold">
          Privacy Policy
        </h1>

        <p className="mt-4 text-zinc-600">
          Last updated: June 2026
        </p>

        <div className="mt-10 space-y-10">
          <section>
            <h2 className="text-2xl font-semibold">
              Information We Collect
            </h2>

            <ul className="mt-3 list-disc space-y-2 pl-6 text-zinc-600">
              <li>Email addresses.</li>
              <li>Payment information.</li>
              <li>Browser information.</li>
              <li>Usage analytics.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold">
              How We Use Information
            </h2>

            <ul className="mt-3 list-disc space-y-2 pl-6 text-zinc-600">
              <li>Provide our services.</li>
              <li>Process payments.</li>
              <li>Improve our platform.</li>
              <li>Prevent fraud.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold">
              Data Security
            </h2>

            <p className="mt-3 text-zinc-600">
              We use industry-standard security
              practices to protect your data.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold">
              Data Sharing
            </h2>

            <p className="mt-3 text-zinc-600">
              We do not sell personal data.
              Information may be shared with
              payment processors and legal
              authorities when required.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold">
              Your Rights
            </h2>

            <p className="mt-3 text-zinc-600">
              You may request access, correction
              or deletion of your personal data.
            </p>
          </section>
        </div>
      </div>
    </main>
  );
}