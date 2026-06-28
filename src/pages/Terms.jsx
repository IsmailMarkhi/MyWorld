export default function Terms() {
  return (
    <main className="min-h-screen bg-zinc-50 py-20">
      <div className="mx-auto max-w-4xl rounded-3xl bg-white p-10 shadow-lg">
        <h1 className="text-4xl font-bold">
          Terms of Service
        </h1>

        <p className="mt-4 text-zinc-600">
          Last updated: June 2026
        </p>

        <div className="mt-10 space-y-10">
          <section>
            <h2 className="text-2xl font-semibold">
              Acceptance of Terms
            </h2>

            <p className="mt-3 text-zinc-600">
              By using OneLink, you agree to
              these Terms of Service and all
              applicable laws and regulations.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold">
              Service Description
            </h2>

            <p className="mt-3 text-zinc-600">
              OneLink provides hosted payment
              pages, payment links, subscription
              management and analytics tools for
              businesses and creators.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold">
              Subscription Billing
            </h2>

            <p className="mt-3 text-zinc-600">
              Subscription plans are billed on
              a recurring basis until cancelled
              by the customer.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold">
              User Responsibilities
            </h2>

            <ul className="mt-3 list-disc space-y-2 pl-6 text-zinc-600">
              <li>Provide accurate information.</li>
              <li>Maintain account security.</li>
              <li>
                Comply with applicable laws.
              </li>
              <li>
                Avoid fraudulent activities.
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold">
              Prohibited Activities
            </h2>

            <ul className="mt-3 list-disc space-y-2 pl-6 text-zinc-600">
              <li>Fraud.</li>
              <li>Money laundering.</li>
              <li>Illegal products.</li>
              <li>Unauthorized access.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold">
              Account Termination
            </h2>

            <p className="mt-3 text-zinc-600">
              We reserve the right to suspend
              or terminate accounts violating
              these terms.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold">
              Limitation of Liability
            </h2>

            <p className="mt-3 text-zinc-600">
              OneLink shall not be liable for
              indirect or consequential damages.
            </p>
          </section>
        </div>
      </div>
    </main>
  );
}