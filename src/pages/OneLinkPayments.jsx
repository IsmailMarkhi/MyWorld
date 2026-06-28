import {
  ArrowRight,
  Check,
  CreditCard,
  Globe,
  Link2,
  Shield,
  Wallet,
  BarChart3,
  BadgeCheck,
} from "lucide-react";

import { useState } from "react";
import { joinWaitlist } from "../services/waitlist";

export default function OneLinkPayments() {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [joined, setJoined] = useState(false);

  const payments = [
    "Visa",
    "Mastercard",
    "Apple Pay",
    "Google Pay",
    "PayPal",
    "Bank Transfer",
  ];

  const features = [
    {
      icon: Link2,
      title: "Universal Payment Links",
      desc: "Generate one payment link that works across multiple payment providers.",
    },
    {
      icon: CreditCard,
      title: "Hosted Checkout Pages",
      desc: "Beautiful checkout experiences optimized for conversions.",
    },
    {
      icon: Wallet,
      title: "Merchant-Owned Funds",
      desc: "Payments are sent directly to your connected provider.",
    },
    {
      icon: Shield,
      title: "Secure by Design",
      desc: "Built on top of trusted payment infrastructures.",
    },
    {
      icon: Globe,
      title: "Global Payments",
      desc: "Accept payments from customers worldwide.",
    },
    {
      icon: BarChart3,
      title: "Analytics Dashboard",
      desc: "Track payment performance and customer activity.",
    },
  ];

  const steps = [
    "Subscribe",
    "Connect Provider",
    "Generate Link",
    "Share Link",
    "Receive Payment",
  ];

  const handleJoin = async () => {
    const normalizedEmail =
      email.toLowerCase().trim();

    if (!normalizedEmail) {
      alert("Please enter your email.");
      return;
    }

    const emailRegex =
      /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailRegex.test(normalizedEmail)) {
      alert(
        "Please enter a valid email."
      );
      return;
    }

    try {
      setLoading(true);

      const result =
        await joinWaitlist(
          normalizedEmail
        );

      console.log(
        "Joined:",
        result.id
      );

      setJoined(true);
      setEmail("");
    } catch (err) {
      console.error(err);

      alert(
        err.message ||
          "Something went wrong."
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="overflow-hidden bg-[#fbf7ff] text-zinc-900">
      {/* KEEP ALL YOUR EXISTING HERO */}
      {/* KEEP ALL YOUR EXISTING HOW IT WORKS */}
      {/* KEEP ALL YOUR EXISTING FEATURES */}

      <section className="mx-auto max-w-7xl px-6 py-28">
        <div className="mx-auto max-w-xl rounded-[40px] border border-violet-200 bg-white/80 p-12 text-center shadow-2xl backdrop-blur-xl">
          <div className="mb-5 inline-flex rounded-full bg-violet-100 px-4 py-2 text-sm font-semibold text-violet-700">
            Beta Pricing
          </div>

          <h2 className="text-6xl font-bold">
            $15
          </h2>

          <p className="mt-3 text-zinc-500">
            per month • unlimited usage
          </p>

          <div className="mt-10 space-y-5 text-left">
            {[
              "Unlimited payment links",
              "Hosted checkout pages",
              "Visa & Mastercard",
              "PayPal support",
              "Apple Pay",
              "Google Pay",
              "Analytics dashboard",
              "Email support",
            ].map((item) => (
              <div
                key={item}
                className="flex items-center gap-3"
              >
                <Check className="h-5 w-5 text-violet-600" />
                <span>{item}</span>
              </div>
            ))}
          </div>

        <div className="mt-10">
  {joined ? (
    <div className="mx-auto max-w-xl rounded-3xl border border-green-200 bg-green-50 p-8 text-center shadow-sm">
      <div className="mb-4 flex justify-center">
        <div className="flex h-14 w-14 items-center justify-center rounded-full bg-green-100">
          <span className="text-2xl text-green-600">
            ✓
          </span>
        </div>
      </div>

      <h3 className="text-2xl font-bold text-green-700">
        Welcome to OneLink Beta
      </h3>

      <p className="mt-3 text-green-700">
        Your beta access has been reserved.
      </p>

      <p className="mt-2 text-sm text-green-600">
        Account: <strong>{email}</strong>
      </p>

      <div className="mt-8">
        <a
          href="https://YOUR-LEMON-SQUEEZY-CHECKOUT-URL"
          target="_blank"
          rel="noopener noreferrer"
          className="
            inline-flex
            items-center
            justify-center
            rounded-xl
            bg-violet-600
            px-8
            py-4
            text-lg
            font-semibold
            text-white
            transition
            hover:bg-violet-700
          "
        >
          Continue to Secure Checkout →
        </a>
      </div>

      <p className="mt-4 text-xs text-zinc-500">
        Secure payment powered by Lemon Squeezy.
      </p>
    </div>
  ) : (
    <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
      <input
        type="email"
        placeholder="Enter your email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className="
          h-14
          w-full
          max-w-sm
          rounded-xl
          border
          border-zinc-300
          bg-white
          px-4
          outline-none
          transition
          focus:border-violet-600
        "
      />

      <button
        onClick={handleJoin}
        disabled={loading || !email.trim()}
        className="
          h-14
          rounded-xl
          bg-violet-600
          px-8
          font-semibold
          text-white
          transition
          hover:bg-violet-700
          disabled:cursor-not-allowed
          disabled:opacity-50
        "
      >
        {loading
          ? "Reserving..."
          : "Reserve Beta Access"}
      </button>
    </div>
  )}
</div>
        </div>
      </section>

      {/* KEEP YOUR TRUST SECTION */}
      {/* KEEP YOUR CTA SECTION */}
    </main>
  );
}
