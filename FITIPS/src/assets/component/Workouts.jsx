import React from 'react'

function Workouts() {
  return (
    <div className="bg-[#0d0d0d] text-white">

      {/* HERO SECTION */}
      <section className="min-h-[70vh] flex items-center px-6 md:px-20 py-20">
        <div className="max-w-6xl mx-auto w-full flex flex-col md:flex-row items-center justify-between">

          <div className="md:w-1/2 space-y-6 text-center md:text-left">
            <h1 className="text-4xl md:text-6xl font-bold leading-tight">
              Train Hard. <span className="text-red-600">Get Results.</span>
            </h1>
            <p className="text-gray-400 text-lg md:text-xl max-w-lg mx-auto md:mx-0">
              Structured workout programs designed to build strength,
              increase muscle mass, and burn fat efficiently.
            </p>
            <button className="mt-4 px-8 py-3 bg-red-600 hover:bg-red-700 rounded-md font-semibold transition">
              Start Training
            </button>
          </div>

  <div className="md:w-1/2 mt-12 md:mt-0 flex justify-center px-4">
  <div className="w-full max-w-sm md:max-w-none md:w-[550px] rounded-2xl overflow-hidden shadow-2xl">
    <img
      src="hero.jpg"
      alt="Workout"
      className="w-full h-full object-cover"
    />
  </div>
</div>

        </div>
      </section>

      {/* WORKOUT CATEGORIES */}
      <section className="px-6 md:px-20 py-20">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-14">
          Workout Programs
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 max-w-6xl mx-auto">

          {[
            { title: "Strength Training", desc: "Compound lifts and progressive overload for raw power." },
            { title: "Muscle Building", desc: "Hypertrophy-based workouts for size and definition." },
            { title: "Fat Loss", desc: "HIIT and cardio programs to burn fat effectively." },
            { title: "Home Workouts", desc: "Bodyweight routines you can do anywhere." }
          ].map((item, index) => (
            <div
              key={index}
              className="bg-[#1a1a1a] p-6 rounded-xl hover:scale-105 transition duration-300 border border-gray-800"
            >
              <h3 className="text-red-500 font-semibold text-lg mb-3">
                {item.title}
              </h3>
              <p className="text-gray-400 text-sm">{item.desc}</p>
            </div>
          ))}

        </div>
      </section>

      {/* WEEKLY PLAN */}
      <section className="bg-[#111] py-20 px-6 md:px-20">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-14">
          5-Day Workout Split
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-4xl mx-auto text-gray-300">

          <div>
            <p className="mb-3"><span className="text-red-500 font-semibold">Monday:</span> Chest + Triceps</p>
            <p className="mb-3"><span className="text-red-500 font-semibold">Tuesday:</span> Back + Biceps</p>
            <p className="mb-3"><span className="text-red-500 font-semibold">Wednesday:</span> Legs</p>
          </div>

          <div>
            <p className="mb-3"><span className="text-red-500 font-semibold">Thursday:</span> Shoulders</p>
            <p className="mb-3"><span className="text-red-500 font-semibold">Friday:</span> Full Body</p>
          </div>

        </div>
      </section>

      {/* EXERCISE LIBRARY */}
      <section className="px-6 md:px-20 py-20">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-14">
          Popular Exercises
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">

          {[
            "Bench Press – 4 × 8 reps",
            "Squats – 4 × 6 reps",
            "Deadlift – 4 × 5 reps",
            "Pull-ups – 3 × 10 reps",
            "Shoulder Press – 4 × 8 reps",
            "Plank – 3 × 60 sec"
          ].map((exercise, index) => (
            <div
              key={index}
              className="bg-[#1a1a1a] p-5 rounded-lg border border-gray-800 hover:bg-[#222] transition"
            >
              <p className="text-gray-300 text-sm">{exercise}</p>
            </div>
          ))}

        </div>
      </section>

      {/* CTA SECTION */}
      <section className="bg-red-600 text-center py-16 px-6">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Ready to Build Strength?
        </h2>
        <p className="mb-6">
          Follow our structured workouts and start seeing real results.
        </p>
        <button className="bg-black px-8 py-3 rounded-md font-semibold hover:bg-gray-900 transition">
          Join Now
        </button>
      </section>

    </div>
  );
}

export default Workouts;