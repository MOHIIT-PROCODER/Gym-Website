import React from 'react'

function Nutrition() {
  return (
    <div className="bg-[#0d0d0d] text-white">

      {/* HERO SECTION */}
      <section className="min-h-[70vh] flex items-center px-6 md:px-20 py-20">
        <div className="max-w-6xl mx-auto w-full flex flex-col md:flex-row items-center justify-between">

          <div className="md:w-1/2 space-y-6 text-center md:text-left">
            <h1 className="text-4xl md:text-6xl font-bold leading-tight">
              Fuel Your <span className="text-red-600">Body Right</span>
            </h1>
            <p className="text-gray-400 text-lg md:text-xl max-w-lg mx-auto md:mx-0">
              Proper nutrition is the foundation of strength, recovery, and
              performance. Eat smart, train hard, and see real results.
            </p>
            <button className="mt-4 px-8 py-3 bg-red-600 hover:bg-red-700 rounded-md font-semibold transition">
              Get Diet Plan
            </button>
          </div>

          <div className="md:w-1/2 mt-12 md:mt-0 flex justify-center">
            <img
              src="food.png"
              alt="Healthy Food"
              className="w-[80%] md:w-[500px] object-contain"
            />
          </div>

        </div>
      </section>

      {/* NUTRITION GOALS */}
      <section className="px-6 md:px-20 py-20">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-14">
          Nutrition Goals
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">

          {[
            {
              title: "Muscle Gain",
              desc: "High protein meals with calorie surplus to support muscle growth."
            },
            {
              title: "Fat Loss",
              desc: "Controlled calorie deficit with balanced macros for fat burning."
            },
            {
              title: "Performance",
              desc: "Optimized carb intake and hydration for peak energy levels."
            }
          ].map((item, index) => (
            <div
              key={index}
              className="bg-[#1a1a1a] p-8 rounded-xl hover:scale-105 transition duration-300 border border-gray-800"
            >
              <h3 className="text-xl font-semibold mb-4 text-red-500">
                {item.title}
              </h3>
              <p className="text-gray-400">{item.desc}</p>
            </div>
          ))}

        </div>
      </section>

      {/* SAMPLE MEAL PLAN */}
      <section className="bg-[#111] py-20 px-6 md:px-20">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-14">
          Sample Daily Meal Plan
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-5xl mx-auto text-gray-300">

          <div>
            <h3 className="text-red-500 font-semibold mb-2">Breakfast</h3>
            <p>Oats, Eggs, Banana, Peanut Butter</p>

            <h3 className="text-red-500 font-semibold mt-6 mb-2">Lunch</h3>
            <p>Grilled Chicken / Paneer, Brown Rice, Vegetables</p>
          </div>

          <div>
            <h3 className="text-red-500 font-semibold mb-2">Snack</h3>
            <p>Greek Yogurt, Almonds</p>

            <h3 className="text-red-500 font-semibold mt-6 mb-2">Dinner</h3>
            <p>Fish / Tofu, Salad, Sweet Potato</p>
          </div>

        </div>
      </section>

      {/* MACROS SECTION */}
      <section className="px-6 md:px-20 py-20">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-14">
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
              className="bg-[#1a1a1a] p-6 rounded-lg text-center border border-gray-800 hover:bg-[#222] transition"
            >
              <p className="text-gray-300">{item}</p>
            </div>
          ))}

        </div>
      </section>

      {/* CTA SECTION */}
      <section className="bg-red-600 text-center py-16 px-6">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Ready to Transform Your Nutrition?
        </h2>
        <p className="mb-6">
          Start your personalized meal plan today and fuel your progress.
        </p>
        <button className="bg-black px-8 py-3 rounded-md font-semibold hover:bg-gray-900 transition">
          Get Started
        </button>
      </section>

    </div>
  );
}

export default Nutrition;
