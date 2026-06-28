export default function Refund() {
  return (
    <main className="min-h-screen bg-zinc-50 py-20">
      <div className="mx-auto max-w-4xl rounded-3xl bg-white p-10 shadow-lg">
        <h1 className="text-4xl font-bold">
          Refund Policy
        </h1>

        <p className="mt-4 text-zinc-600">
          Last updated: June 2026
        </p>

        <div className="mt-10 space-y-10">
          <section>
            <h2 className="text-2xl font-semibold">
              Subscription Cancellation
            </h2>

            <p className="mt-3 text-zinc-600">
              Customers may cancel their
              subscription at any time.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold">
              Refund Requests
            </h2>

            <p className="mt-3 text-zinc-600">
              Refund requests submitted within
              14 days of purchase are reviewed
              on a case-by-case basis.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold">
              Exceptions
            </h2>

            <p className="mt-3 text-zinc-600">
              Refunds may be denied in cases of
              fraud, abuse, or violation of our
              Terms of Service.
            </p>
          </section>
        </div>
      </div>
    </main>
  );
}