import React from 'react'
import { useNavigate } from "react-router-dom";
function Workouts() {
  const navigate = useNavigate();

  return (

     
    <div className="bg-white dark:bg-slate-950 text-slate-800 dark:text-white transition-colors duration-300">

      {/* HERO SECTION */}
      <section className="min-h-[70vh] flex items-center px-6 md:px-20 py-20 bg-gradient-to-b from-slate-50 via-white to-slate-50 dark:from-slate-950 dark:via-slate-900 dark:to-slate-950">
        <div className="max-w-6xl mx-auto w-full flex flex-col md:flex-row items-center justify-between">

          <div className="md:w-1/2 space-y-6 text-center md:text-left">
            <h1 className="text-4xl md:text-6xl font-bold leading-tight text-slate-900 dark:text-white">
              Train Hard. <span className="text-lime-600 dark:text-[#00E676]">Get Results.</span>
            </h1>
            <p className="text-slate-600 dark:text-gray-400 text-lg md:text-xl max-w-lg mx-auto md:mx-0">
              Structured workout programs designed to build strength,
              increase muscle mass, and burn fat efficiently.
            </p>
            <button      onClick={() => navigate("/plans")}
             className="mt-4 px-8 py-3 bg-lime-500 hover:bg-lime-600 text-black rounded-md font-semibold transition cursor-pointer">
              Start Training
            </button>
          </div>

  <div className="md:w-1/2 mt-12 md:mt-0 flex justify-center px-4">
  <div className="w-full max-w-sm md:max-w-none md:w-[550px] rounded-2xl overflow-hidden shadow-2xl">
    <img
      src="https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?q=80&w=1470&auto=format&fit=crop"
      alt="Workout"
      className="w-full h-full object-cover"
    />
  </div>
</div>

        </div>
      </section>

      {/* WORKOUT CATEGORIES */}
      <section className="px-6 md:px-20 py-20 bg-white dark:bg-slate-950">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-14 text-slate-900 dark:text-white">
          Workout Programs
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">

          {[
            { title: "1. Strength Training", desc: "Compound lifts and progressive overload for building raw power and absolute strength." },
            { title: "2. Muscle Hypertrophy", desc: "Science-based volume training designed to maximize muscle size, pump, and definition." },
            { title: "3. Cardio & Fat Loss", desc: "High-intensity interval training (HIIT) and aerobic conditioning to burn fat effectively." },
            { title: "4. Calisthenics & Bodyweight", desc: "Advanced bodyweight progression routines focusing on relative strength, agility, and core control." },
            { title: "5. Functional Fitness", desc: "Dynamic multi-planar movement patterns to improve daily agility, balance, and athletic longevity." },
            { title: "6. Flexibility & Mobility", desc: "Dedicated stretching, dynamic range of motion, and yoga-inspired routines to safeguard joints." },
            { title: "7. Endurance & Stamina", desc: "Structured pacing and target heart-rate workouts to optimize VO2 max and aerobic capacity." },
            { title: "8. Power & Plyometrics", desc: "Explosive jump training, speed drills, and reactive force workouts to boost speed and power." },
            { title: "9. Active Recovery", desc: "Gentle low-impact mobility flows and active rest exercises to speed up recovery between heavy lifts." }
          ].map((item, index) => (
            <div
              key={index}
              className="bg-[#121215] p-8 rounded-xl hover:scale-105 transition duration-300 border border-[#26262B] hover:border-[#00E676] hover:shadow-[0_0_15px_rgba(0,230,118,0.1)]"
            >
              <h3 className="text-[#00E676] font-bold text-lg mb-3 uppercase tracking-wide">
                {item.title}
              </h3>
              <p className="text-slate-400 text-sm">{item.desc}</p>
            </div>
          ))}

        </div>
      </section>

      {/* WEEKLY PLAN */}
      <section className="bg-slate-50 dark:bg-[#111] py-20 px-6 md:px-20 transition-colors duration-300">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-14 text-slate-900 dark:text-white">
          5-Day Workout Split
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-4xl mx-auto text-slate-700 dark:text-gray-300">

          <div>
            <p className="mb-3"><span className="text-lime-600 dark:text-[#00E676] font-semibold">Monday:</span> Chest + Triceps</p>
            <p className="mb-3"><span className="text-lime-600 dark:text-[#00E676] font-semibold">Tuesday:</span> Back + Biceps</p>
            <p className="mb-3"><span className="text-lime-600 dark:text-[#00E676] font-semibold">Wednesday:</span> Legs</p>
          </div>

          <div>
            <p className="mb-3"><span className="text-lime-600 dark:text-[#00E676] font-semibold">Thursday:</span> Shoulders</p>
            <p className="mb-3"><span className="text-lime-600 dark:text-[#00E676] font-semibold">Friday:</span> Full Body</p>
          </div>

        </div>
      </section>

      {/* EXERCISE LIBRARY */}
      <section className="px-6 md:px-20 py-20 bg-white dark:bg-slate-950">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-14 text-slate-900 dark:text-white">
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
              className="bg-slate-50 dark:bg-slate-900 p-5 rounded-lg border border-slate-200 dark:border-slate-800 hover:bg-slate-100 dark:hover:bg-slate-800 transition"
            >
              <p className="text-slate-700 dark:text-gray-300 text-sm">{exercise}</p>
            </div>
          ))}

        </div>
      </section>

      {/* CTA SECTION */}
      <section className="bg-slate-50 dark:bg-slate-900 border-t border-slate-200 dark:border-slate-800 text-center py-24 px-6 transition-colors duration-300">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900 dark:text-white mb-6">
            Ready to <span className="text-lime-600 dark:text-[#00E676]">Build Strength?</span>
          </h2>
          <p className="text-slate-600 dark:text-gray-400 text-lg mb-10">
            Follow our structured workouts and start seeing real results. Join thousands of members transforming their bodies today.
          </p>
          <button onClick={() => navigate("/plans")} className="px-10 py-4 bg-lime-500 hover:bg-lime-600 text-black font-semibold rounded-lg transition duration-300 shadow-lg shadow-lime-500/25 cursor-pointer">
            Join Now
          </button>
        </div>
      </section>

    </div>
  );
}

export default Workouts;