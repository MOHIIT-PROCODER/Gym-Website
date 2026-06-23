import React from 'react';

function Review() {
  const reviews = [
    {
      id: 1,
      name: "Rahul Sharma",
      review: "This gym completely transformed my fitness journey. The trainers are amazing and pushed me past my limits! I lost 8kg in just 2 months.",
      rating: 5,
      type: "Weight Loss"
    },
    {
      id: 2,
      name: "Aman Patel",
      review: "Best place to train! Great equipment, a very friendly environment, and the protein shake bar is exactly what I need post-workout.",
      rating: 5,
      type: "Muscle Gain"
    },
    {
      id: 3,
      name: "Priya Singh",
      review: "I gained strength and confidence here. Highly recommend! The Elite Plan is 100% worth it for the 1-on-1 personal training.",
      rating: 5,
      type: "Strength"
    },
    {
      id: 4,
      name: "Rohan Desai",
      review: "The yoga and mobility classes fixed my back pain. I've never felt more flexible and active in my entire life.",
      rating: 5,
      type: "Mobility"
    },
    {
      id: 5,
      name: "Kavita Reddy",
      review: "As a beginner, I was intimidated by the gym, but FITIPS made me feel so welcome. The customized nutrition plan worked wonders.",
      rating: 5,
      type: "Beginner"
    },
    {
      id: 6,
      name: "Vikram Malhotra",
      review: "I've been to many gyms, but the community here is unmatched. It feels like a family that holds you accountable.",
      rating: 5,
      type: "Community"
    }
  ];

  return (
    <div className="bg-white dark:bg-slate-950 min-h-screen text-slate-800 dark:text-white py-20 px-6 md:px-20 transition-colors duration-300">

      <div className="text-center max-w-3xl mx-auto mb-16">
        <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900 dark:text-white mb-6">
          Real People. <span className="text-lime-600 dark:text-[#00E676]">Real Results.</span>
        </h2>
        <p className="text-slate-600 dark:text-gray-400 text-lg">
          Don't just take our word for it. Read the success stories of our incredible members who crushed their goals with FITIPS.
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
        {reviews.map((r) => (
          <div key={r.id} className="bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 p-8 rounded-2xl shadow-lg hover:-translate-y-2 transition duration-300 flex flex-col">
            <div className="flex justify-between items-start mb-4">
              <span className="bg-lime-500/20 text-lime-700 dark:text-[#00E676] text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">
                {r.type}
              </span>
              <div className="flex text-yellow-500 text-sm">
                {"★".repeat(r.rating)}{"☆".repeat(5-r.rating)}
              </div>
            </div>
            <p className="text-slate-700 dark:text-gray-300 italic mb-6 leading-relaxed flex-grow">
              "{r.review}"
            </p>
            <div className="flex items-center gap-4 border-t border-slate-200 dark:border-slate-800 pt-6 mt-auto">
              <div className="w-12 h-12 bg-lime-500 rounded-full flex items-center justify-center text-xl font-bold text-black">
                {r.name.charAt(0)}
              </div>
              <div>
                <h3 className="font-semibold text-slate-900 dark:text-white">{r.name}</h3>
                <p className="text-xs text-gray-500">FITIPS Member</p>
              </div>
            </div>
          </div>
        ))}
      </div>

    </div>
  );
}

export default Review;