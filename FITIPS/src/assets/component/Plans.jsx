import React from 'react'

function Plans() {
  return (
    <div className="bg-[#0d0d0d] text-white min-h-screen py-20 px-6 md:px-20">

      {/* Heading */}
      <div className="text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-bold">
          Choose Your <span className="text-red-600">Plan</span>
        </h1>
        <p className="text-gray-400 mt-4">
          Flexible pricing options designed for every fitness level.
        </p>
      </div>

      {/* Cards */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">

        {/* BASIC PLAN */}
        <div className="bg-[#1a1a1a] p-8 rounded-2xl border border-gray-800 hover:scale-105 transition duration-300">
          <h2 className="text-2xl font-semibold mb-4">Basic</h2>
          <p className="text-4xl font-bold mb-6">₹999<span className="text-lg text-gray-400">/month</span></p>

          <ul className="space-y-3 text-gray-300 mb-8">
            <li>✔ Access to workout programs</li>
            <li>✔ Basic nutrition guide</li>
            <li>✔ Community access</li>
            <li>✔ Email support</li>
          </ul>

          <button className="w-full py-3 bg-gray-800 hover:bg-gray-700 rounded-lg font-semibold transition">
            Get Started
          </button>
        </div>

        {/* PRO PLAN (Highlighted) */}
        <div className="bg-[#1a1a1a] p-8 rounded-2xl border-2 border-red-600 scale-105 shadow-xl shadow-red-600/20">
          
          <div className="text-center mb-4">
            <span className="bg-red-600 px-3 py-1 text-sm rounded-full">
              Most Popular
            </span>
          </div>

          <h2 className="text-2xl font-semibold mb-4 text-center">Pro</h2>
          <p className="text-4xl font-bold mb-6 text-center">
            ₹1999<span className="text-lg text-gray-400">/month</span>
          </p>

          <ul className="space-y-3 text-gray-300 mb-8">
            <li>✔ Everything in Basic</li>
            <li>✔ Personalized workout plan</li>
            <li>✔ Custom diet plan</li>
            <li>✔ Progress tracking</li>
            <li>✔ Priority support</li>
          </ul>

          <button className="w-full py-3 bg-red-600 hover:bg-red-700 rounded-lg font-semibold transition">
            Join Pro
          </button>
        </div>

        {/* ELITE PLAN */}
        <div className="bg-[#1a1a1a] p-8 rounded-2xl border border-gray-800 hover:scale-105 transition duration-300">
          <h2 className="text-2xl font-semibold mb-4">Elite</h2>
          <p className="text-4xl font-bold mb-6">
            ₹3999<span className="text-lg text-gray-400">/month</span>
          </p>

          <ul className="space-y-3 text-gray-300 mb-8">
            <li>✔ Everything in Pro</li>
            <li>✔ 1-on-1 coaching</li>
            <li>✔ Weekly video consultation</li>
            <li>✔ Supplement guidance</li>
            <li>✔ 24/7 support</li>
          </ul>

          <button className="w-full py-3 bg-gray-800 hover:bg-gray-700 rounded-lg font-semibold transition">
            Go Elite
          </button>
        </div>

      </div>

    </div>
  );
}

export default Plans;