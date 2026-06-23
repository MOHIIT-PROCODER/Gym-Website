import React from 'react'
import { useNavigate } from "react-router-dom";
function Nutrition() {

  const navigate = useNavigate();



  return (
    <div className="bg-white dark:bg-slate-950 text-slate-800 dark:text-white transition-colors duration-300">

      {/* HERO SECTION */}
      <section className="min-h-[70vh] flex items-center px-6 md:px-20 py-20 bg-gradient-to-b from-slate-50 via-white to-slate-50 dark:from-slate-950 dark:via-slate-900 dark:to-slate-950">
        <div className="max-w-6xl mx-auto w-full flex flex-col md:flex-row items-center justify-between">

          <div className="md:w-1/2 space-y-6 text-center md:text-left">
            <h1 className="text-4xl md:text-6xl font-bold leading-tight text-slate-900 dark:text-white">
              Fuel Your <span className="text-lime-600 dark:text-[#00E676]">Body Right</span>
            </h1>
            <p className="text-slate-600 dark:text-gray-400 text-lg md:text-xl max-w-lg mx-auto md:mx-0">
              Proper nutrition is the foundation of strength, recovery, and
              performance. Eat smart, train hard, and see real results.
            </p>
            <button onClick={() => navigate("/dietplans")}  className="mt-4 px-8 py-3 bg-lime-500 hover:bg-lime-600 text-black rounded-md font-semibold transition cursor-pointer">
              Get Diet Plan
            </button>
          </div>

          <div className="md:w-1/2 mt-12 md:mt-0 flex justify-center">
            <img
              src="https://images.unsplash.com/photo-1490645935967-10de6ba17061?q=80&w=1453&auto=format&fit=crop"
              alt="Healthy Food"
              className="w-[80%] md:w-[500px] object-contain"
            />
          </div>

        </div>
      </section>

      {/* NUTRITION GOALS */}
      <section className="px-6 md:px-20 py-20 bg-white dark:bg-slate-950">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-14 text-slate-900 dark:text-white">
          Nutrition Goals
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">

          {[
            {
              title: "1. Muscle Gain",
              desc: "High protein meals with calorie surplus to support muscle hypertrophy and tissue growth."
            },
            {
              title: "2. Fat Loss",
              desc: "Controlled calorie deficit with balanced macronutrients to maximize fat burning while retaining lean mass."
            },
            {
              title: "3. Athletic Performance",
              desc: "Optimized carbohydrate intake and scheduling for peak endurance and high-intensity explosive power."
            },
            {
              title: "4. Hydration Mastery",
              desc: "Strategic fluid and electrolyte intake to maintain cellular balance, blood volume, and prevent fatigue."
            },
            {
              title: "5. Recovery & Repair",
              desc: "Nutrient timing of protein and essential amino acids post-workout to accelerate muscle repair and reduce soreness."
            },
            {
              title: "6. Metabolic Health",
              desc: "Clean, whole-food eating patterns to optimize thyroid function, insulin sensitivity, and natural metabolic rate."
            },
            {
              title: "7. Immune Support",
              desc: "Micronutrient-rich foods loaded with essential vitamins, minerals, and antioxidants to strengthen immune defense."
            },
            {
              title: "8. Gut Health & Digestion",
              desc: "Fiber-rich prebiotics and probiotic foods to support healthy digestion, nutrient absorption, and gut biome."
            },
            {
              title: "9. Longevity & Joint Vitality",
              desc: "Anti-inflammatory healthy fats, collagen support, and dark greens to protect joints and promote overall longevity."
            }
          ].map((item, index) => (
            <div
              key={index}
              className="bg-[#121215] p-8 rounded-xl hover:scale-105 transition duration-300 border border-[#26262B] hover:border-[#00E676] hover:shadow-[0_0_15px_rgba(0,230,118,0.1)]"
            >
              <h3 className="text-xl font-bold mb-4 text-[#00E676] uppercase tracking-wide">
                {item.title}
              </h3>
              <p className="text-slate-400">{item.desc}</p>
            </div>
          ))}

        </div>
      </section>

      {/* SAMPLE MEAL PLAN */}
      <section className="bg-slate-50 dark:bg-[#111] py-20 px-6 md:px-20 transition-colors duration-300">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-14 text-slate-900 dark:text-white">
          Sample Daily Meal Plan
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-5xl mx-auto text-slate-700 dark:text-gray-300">

          <div>
            <h3 className="text-lime-600 dark:text-[#00E676] font-semibold mb-2">Breakfast</h3>
            <p>Oats, Eggs, Banana, Peanut Butter</p>

            <h3 className="text-lime-600 dark:text-[#00E676] font-semibold mt-6 mb-2">Lunch</h3>
            <p>Grilled Chicken / Paneer, Brown Rice, Vegetables</p>
          </div>

          <div>
            <h3 className="text-lime-600 dark:text-[#00E676] font-semibold mb-2">Snack</h3>
            <p>Greek Yogurt, Almonds</p>

            <h3 className="text-lime-600 dark:text-[#00E676] font-semibold mt-6 mb-2">Dinner</h3>
            <p>Fish / Tofu, Salad, Sweet Potato</p>
          </div>

        </div>
      </section>

      {/* MACROS SECTION */}
      <section className="px-6 md:px-20 py-20 bg-white dark:bg-slate-950">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-14 text-slate-900 dark:text-white">
          Understand Your Macros
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 max-w-6xl mx-auto">

          {[
            "Protein – Builds and repairs muscles",
            "Carbohydrates – Main energy source",
            "Healthy Fats – Supports hormones",
            "Water – Essential for recovery"
          ].map((item, index) => (
            <div
              key={index}
              className="bg-slate-50 dark:bg-slate-900 p-6 rounded-lg text-center border border-slate-200 dark:border-slate-800 hover:bg-slate-100 dark:hover:bg-slate-800 transition"
            >
              <p className="text-slate-700 dark:text-gray-300">{item}</p>
            </div>
          ))}

        </div>
      </section>

      {/* CTA SECTION */}
      <section className="bg-slate-50 dark:bg-slate-900 border-t border-slate-200 dark:border-slate-800 text-center py-24 px-6 transition-colors duration-300">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900 dark:text-white mb-6">
            Ready to <span className="text-lime-600 dark:text-[#00E676]">Transform Your Nutrition?</span>
          </h2>
          <p className="text-slate-600 dark:text-gray-400 text-lg mb-10">
            Start your personalized meal plan today and fuel your progress. Don't leave your gains to chance.
          </p>
          <button onClick={() => navigate("/plans")} className="px-10 py-4 bg-lime-500 hover:bg-lime-600 text-black font-semibold rounded-lg transition duration-300 shadow-lg shadow-lime-500/25 cursor-pointer">
            Get Started
          </button>
        </div>
      </section>

    </div>
  );
}

export default Nutrition;
