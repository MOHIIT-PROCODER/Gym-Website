import React from "react";
import { useNavigate } from "react-router-dom";

function LearnMore() {

  const navigate = useNavigate();

  return (
    <section className="bg-black text-white py-20 px-6 min-h-screen">

      <div className="max-w-7xl mx-auto">

        {/* Back Button */}
        <button
          onClick={() => navigate("/")}
          className="mb-10 border border-gray-600 px-5 py-2 rounded-lg hover:bg-lime-500 hover:border-lime-500 hover:text-black transition font-semibold"
        >
          ← Back to Home
        </button>

        {/* Title */}
        <div className="text-center mb-16">

          <h2 className="text-4xl md:text-5xl font-bold uppercase tracking-wider">
            Why Choose <span className="text-lime-400">FITIPS</span>
          </h2>

          <p className="text-gray-400 mt-4 max-w-2xl mx-auto">
            FITIPS is a modern SaaS platform designed to help gyms manage
            members, track payments, and provide structured workout and
            nutrition plans.
          </p>

        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-3 gap-8">

          {/* Feature */}
          <div className="bg-zinc-900/50 p-8 rounded-xl border border-zinc-800 hover:border-lime-500 transition duration-300 hover:shadow-[0_0_15px_rgba(140,232,30,0.1)]">
            <h3 className="text-xl font-semibold mb-3 text-lime-400 uppercase tracking-wide">
              Smart Member Management
            </h3>
            <p className="text-gray-400">
              Easily add, update, and manage gym members with complete profiles,
              including contact details and membership status.
            </p>
          </div>

          <div className="bg-zinc-900/50 p-8 rounded-xl border border-zinc-800 hover:border-lime-500 transition duration-300 hover:shadow-[0_0_15px_rgba(140,232,30,0.1)]">
            <h3 className="text-xl font-semibold mb-3 text-lime-400 uppercase tracking-wide">
              Automated Payment Tracking
            </h3>
            <p className="text-gray-400">
              Track member subscriptions, payment history, and revenue analytics
              from a single dashboard.
            </p>
          </div>

          <div className="bg-zinc-900/50 p-8 rounded-xl border border-zinc-800 hover:border-lime-500 transition duration-300 hover:shadow-[0_0_15px_rgba(140,232,30,0.1)]">
            <h3 className="text-xl font-semibold mb-3 text-lime-400 uppercase tracking-wide">
              Structured Workout Plans
            </h3>
            <p className="text-gray-400">
              Professionally designed workout programs for muscle gain,
              fat loss, and strength training.
            </p>
          </div>

          <div className="bg-zinc-900/50 p-8 rounded-xl border border-zinc-800 hover:border-lime-500 transition duration-300 hover:shadow-[0_0_15px_rgba(140,232,30,0.1)]">
            <h3 className="text-xl font-semibold mb-3 text-lime-400 uppercase tracking-wide">
              Nutrition Guidance
            </h3>
            <p className="text-gray-400">
              Nutrition plans and meal suggestions to help members achieve
              their fitness goals faster.
            </p>
          </div>

          <div className="bg-zinc-900/50 p-8 rounded-xl border border-zinc-800 hover:border-lime-500 transition duration-300 hover:shadow-[0_0_15px_rgba(140,232,30,0.1)]">
            <h3 className="text-xl font-semibold mb-3 text-lime-400 uppercase tracking-wide">
              Secure Member Dashboard
            </h3>
            <p className="text-gray-400">
              Members can access workouts, membership status, and payment
              records securely.
            </p>
          </div>

          <div className="bg-zinc-900/50 p-8 rounded-xl border border-zinc-800 hover:border-lime-500 transition duration-300 hover:shadow-[0_0_15px_rgba(140,232,30,0.1)]">
            <h3 className="text-xl font-semibold mb-3 text-lime-400 uppercase tracking-wide">
              Smart Gym Entry (Future)
            </h3>
            <p className="text-gray-400">
              Future support for fingerprint, barcode, and face recognition
              for automatic gym entry.
            </p>
          </div>

        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">

          <button
            onClick={() => navigate("/plans")}
            className="bg-lime-500 hover:bg-lime-600 text-black font-bold px-8 py-3 rounded-lg transition shadow-[0_0_15px_rgba(140,232,30,0.3)]"
          >
            View Membership Plans
          </button>

        </div>

      </div>

    </section>
  );
}

export default LearnMore;