import {
  ArrowRight,
  Check,
  CreditCard,
  Shield,
  CircleCheckBig,
} from "lucide-react";
import { useState } from "react";
import { joinWaitlist } from "../services/waitlist";

export default function OneLinkPayments() {
  const LEMON_CHECKOUT =
  "https://onelinkpay.lemonsqueezy.com/checkout/buy/5cd255c1-4efd-426b-b21f-27ce433c621b";  
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  
  const [status, setStatus] = useState("idle");
  const [customerEmail, setCustomerEmail] = useState("");


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

      setCustomerEmail(normalizedEmail);
      setStatus("reserved");
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
      

      <section className="mx-auto max-w-7xl px-6 py-28">
        <div className="mx-auto max-w-xl rounded-[40px] border border-violet-200 bg-white/80 p-12 text-center shadow-2xl backdrop-blur-xl">
          <div className="mb-5 inline-flex rounded-full bg-violet-100 px-4 py-2 text-sm font-semibold text-violet-700">
            Beta Pricing
          </div>

          <h2 className="text-5xl font-bold md:text-6xl">
            99 MAD
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

  {status === "idle" && (
    <div className="flex flex-col gap-4 sm:flex-row">
      <input
        type="email"
        value={email}
        placeholder="Enter your email"
        onChange={(e)=>setEmail(e.target.value)}
        className="
h-14
w-full
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
">
        {loading
          ? "Reserving..."
          : "Reserve Beta Access"}
      </button>
    </div>
  )}

  {status === "reserved" && (
    <div
  className="
    rounded-3xl
    border
    border-green-200
    bg-gradient-to-br
    from-green-50
    to-emerald-50
    p-8
    shadow-lg
    transition-all
    duration-300
  "
>

      <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-green-100">
        ✓
      </div>

      <h2 className="mt-6 text-center text-3xl font-bold text-green-700 md:text-4xl">
        Welcome to OneLink Beta
      </h2>

      <p className="mt-4 text-center text-green-700">
        Your account has been reserved.
      </p>

      <div
  className="
    mx-auto
    mt-8
    max-w-md
    rounded-2xl
    border
    border-white
    bg-white
    p-5
    shadow-sm
  "
>
        <div className="flex justify-between">
          <span>Account</span>
          <span>{customerEmail}</span>
        </div>

        <div className="mt-3 flex justify-between">
          <span>Plan</span>
          <span>99 MAD/month</span>
        </div>
      </div>

      <div className="mt-10 flex flex-col items-center">

  <a
    href={`${LEMON_CHECKOUT}?checkout[email]=${encodeURIComponent(customerEmail)}`}
    target="_blank"
    rel="noopener noreferrer"
    className="
group
flex
w-full
max-w-md
flex-col
items-center
justify-center
gap-4
rounded-2xl
bg-gradient-to-r
from-violet-600
via-purple-600
to-fuchsia-600
px-8
py-5
text-white
shadow-xl
transition-all
duration-300
hover:-translate-y-1
hover:scale-[1.02]
hover:shadow-2xl
sm:inline-flex
sm:w-auto
sm:flex-row
"
  >
    <div>
      <div className="text-xl font-bold">
        Activate Beta Access
      </div>

      <div className="text-sm text-white/80">
        Cancel anytime
      </div>
    </div>

    <div className="rounded-xl bg-white/10 px-4 py-2">
      <div className="text-lg font-bold">
        99 MAD
      </div>

      <div className="text-xs">
        /month
      </div>
    </div>

    <ArrowRight className="h-6 w-6" />
  </a>

  {/* Trust badges */}
  <div className="mt-6 flex flex-wrap items-center justify-center gap-5 text-sm text-zinc-500">
    <div className="flex items-center gap-2">
      <Shield className="h-4 w-4" />
      Secure checkout
    </div>

    <div className="flex items-center gap-2">
      <CreditCard className="h-4 w-4" />
      Card & PayPal
    </div>

    <div className="flex items-center gap-2">
      <Check className="h-4 w-4" />
      Instant access
    </div>
  </div>

</div>
    </div>
  )}

  {status === "paid" && (
    <div
  className="
    rounded-3xl
    border
    border-violet-200
    bg-gradient-to-br
    from-violet-50
    to-white
    p-10
    text-center
    shadow-lg
  "
>

      <CircleCheckBig className="mx-auto h-16 w-16 text-violet-600" />

      <h2 className="mt-5 text-3xl font-bold">
        Subscription Active
      </h2>

      <p className="mt-3 text-zinc-600">
        Your OneLink account is active.
      </p>

     <a
  href="/dashboard"
 className="
mt-8
inline-flex
items-center
gap-2
rounded-xl
bg-violet-600
px-8
py-4
font-semibold
text-white
transition-all
duration-300
hover:-translate-y-1
hover:bg-violet-700
hover:shadow-xl
"
>
  Open Dashboard
  <ArrowRight className="h-5 w-5" />
</a>

    </div>
  )}

</div>

        </div>
      </section>

 
    
    </main>
  );
}
