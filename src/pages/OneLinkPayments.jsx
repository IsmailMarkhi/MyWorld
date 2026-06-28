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
            $9.99
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
    <div className="overflow-hidden rounded-3xl border border-green-200 bg-gradient-to-br from-green-50 to-emerald-50 p-8 shadow-lg">
      {/* Success Icon */}
      <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-green-100">
        <svg
          className="h-10 w-10 text-green-600"
          fill="none"
          stroke="currentColor"
          strokeWidth={2.5}
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M5 13l4 4L19 7"
          />
        </svg>
      </div>

      {/* Heading */}
      <h2 className="mt-6 text-center text-4xl font-bold text-green-700">
        Welcome to OneLink Beta
      </h2>

      {/* Description */}
      <p className="mt-4 text-center text-xl text-green-700">
        Your account has been reserved.
      </p>

      <p className="mt-2 text-center text-green-600">
        Complete checkout to activate your
        OneLink Beta access.
      </p>

      {/* User info */}
      <div className="mx-auto mt-8 max-w-md rounded-2xl border border-green-200 bg-white p-5 shadow-sm">
        <div className="flex items-center justify-between">
          <span className="text-zinc-500">
            Account
          </span>

          <span className="font-semibold text-zinc-900">
            {email}
          </span>
        </div>

        <div className="mt-4 flex items-center justify-between">
          <span className="text-zinc-500">
            Plan
          </span>

          <span className="font-semibold text-violet-700">
            Beta • $9.99/month
          </span>
        </div>
      </div>

      {/* Features */}
      <div className="mx-auto mt-8 grid max-w-xl gap-3 sm:grid-cols-2">
        {[
          "Unlimited payment links",
          "Hosted checkout pages",
          "Analytics dashboard",
          "Visa & Mastercard",
          "Apple Pay & Google Pay",
          "Priority support",
        ].map((feature) => (
          <div
            key={feature}
            className="flex items-center gap-3 rounded-xl bg-white p-3 shadow-sm"
          >
            <span className="text-green-600">
              ✓
            </span>

            <span className="text-zinc-700">
              {feature}
            </span>
          </div>
        ))}
      </div>

      {/* Checkout Button */}
     <div className="mt-12 flex flex-col items-center gap-4">
  <a
    href="https://onelinkpay.lemonsqueezy.com/checkout/buy/5cd255c1-4efd-426b-b21f-27ce433c621b?discount=0"
    target="_blank"
    rel="noopener noreferrer"
    aria-label="Activate OneLink Beta Access"
    className="
      group
      relative
      inline-flex
      items-center
      justify-center
      gap-4
      overflow-hidden
      rounded-2xl
      bg-gradient-to-r
      from-violet-600
      via-purple-600
      to-fuchsia-600
      px-8
      py-5
      shadow-[0_20px_60px_-15px_rgba(124,58,237,0.5)]
      transition-all
      duration-300
      hover:-translate-y-1
      hover:shadow-[0_30px_80px_-15px_rgba(124,58,237,0.65)]
      focus:outline-none
      focus:ring-4
      focus:ring-violet-300
    "
  >
    {/* Glow */}
    <div
      className="
        absolute
        inset-0
        bg-white/10
        opacity-0
        transition-opacity
        duration-300
        group-hover:opacity-100
      "
    />

    {/* Text */}
    <div className="relative flex flex-col items-start">
      <span className="text-xl font-bold text-white">
        Activate Beta Access
      </span>

      <span className="text-sm text-white/80">
        Cancel anytime • Instant access
      </span>
    </div>

    {/* Price Badge */}
    <div
      className="
        relative
        rounded-xl
        border
        border-white/20
        bg-white/10
        px-4
        py-2
        backdrop-blur
      "
    >
      <div className="text-lg font-bold text-white">
        $9.99
      </div>

      <div className="text-xs text-white/70">
        /month
      </div>
    </div>

    {/* Arrow */}
    <svg
      className="
        relative
        h-6
        w-6
        text-white
        transition-transform
        duration-300
        group-hover:translate-x-1
      "
      fill="none"
      stroke="currentColor"
      strokeWidth={2.5}
      viewBox="0 0 24 24"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M5 12h14M13 5l7 7-7 7"
      />
    </svg>
  </a>

  {/* Trust indicators */}
  <div className="flex flex-wrap items-center justify-center gap-4 text-sm text-zinc-500">
    <span> Secure checkout</span>
    <span> Card & PayPal</span>
    <span> Instant beta access</span>
  </div>
</div>

      {/* Footer */}
      <p className="mt-6 text-center text-sm text-zinc-500">
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
          focus:ring-4
          focus:ring-violet-100
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
        {loading ? "Reserving..." : "Reserve Beta Access"}
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
