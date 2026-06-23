import React from 'react';

function Gallery() {
  const images = [
    {
      id: 1,
      src: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=800&auto=format&fit=crop",
      thought: "Push past your limits. The pain you feel today will be the strength you feel tomorrow."
    },
    {
      id: 2,
      src: "https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?q=80&w=800&auto=format&fit=crop",
      thought: "Heavy iron builds a resilient mind. Respect the weights, and they will respect you."
    },
    {
      id: 3,
      src: "https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?q=80&w=800&auto=format&fit=crop",
      thought: "Consistency is the bridge between goals and accomplishment."
    },
    {
      id: 4,
      src: "https://images.unsplash.com/photo-1541534741688-6078c6bfb5c5?q=80&w=800&auto=format&fit=crop",
      thought: "Focus on the finish line. Every step forward is a step closer to greatness."
    },
    {
      id: 5,
      src: "https://images.unsplash.com/photo-1518611012118-696072aa579a?q=80&w=800&auto=format&fit=crop",
      thought: "Strength doesn't come from what you can do. It comes from overcoming the things you once thought you couldn't."
    },
    {
      id: 6,
      src: "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?q=80&w=800&auto=format&fit=crop",
      thought: "Your only competition is the person staring back at you in the mirror."
    },
    {
      id: 7,
      src: "https://images.unsplash.com/photo-1576678927484-cc907957088c?q=80&w=800&auto=format&fit=crop",
      thought: "Lift heavy, stay humble. The results speak for themselves."
    },
    {
      id: 8,
      src: "https://images.unsplash.com/photo-1550345332-09e3ac987658?q=80&w=800&auto=format&fit=crop",
      thought: "Sweat is just fat crying. Keep moving, keep grinding."
    },
    {
      id: 9,
      src: "https://images.unsplash.com/photo-1574680096145-d05b474e2155?q=80&w=800&auto=format&fit=crop",
      thought: "A 1-hour workout is 4% of your day. No excuses."
    },
    {
      id: 10,
      src: "https://images.unsplash.com/photo-1554284126-aa88f22d8b74?q=80&w=800&auto=format&fit=crop",
      thought: "Fight through the burn. That's where the magic happens."
    },
    {
      id: 11,
      src: "https://images.unsplash.com/photo-1490645935967-10de6ba17061?q=80&w=800&auto=format&fit=crop",
      thought: "You can't out-train a bad diet. Fuel your body like a high-performance machine."
    },
    {
      id: 12,
      src: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?q=80&w=800&auto=format&fit=crop",
      thought: "Recovery is just as important as the workout. Stretch, breathe, and grow."
    }
  ];

  return (
    <div className="bg-white dark:bg-slate-950 min-h-screen pt-24 pb-20 px-6 md:px-16 transition-colors duration-300">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-extrabold text-slate-900 dark:text-white mb-6">
            Inspiration <span className="text-lime-600 dark:text-[#00E676]">Gallery</span>
          </h1>
          <p className="text-slate-600 dark:text-gray-400 text-lg md:text-xl max-w-2xl mx-auto">
            Get motivated by browsing our gallery. Read the thoughts of champions and find the drive to crush your next workout.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {images.map((img) => (
            <div key={img.id} className="group relative rounded-2xl overflow-hidden shadow-xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800">
              <div className="h-64 w-full overflow-hidden">
                <img 
                  src={img.src} 
                  alt="Fitness Motivation" 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
              </div>
              <div className="p-6">
                <div className="flex gap-2 items-center mb-3 text-lime-600 dark:text-[#00E676]">
                  <span className="text-xl">❝</span>
                </div>
                <p className="text-slate-700 dark:text-gray-300 italic leading-relaxed text-sm">
                  {img.thought}
                </p>
              </div>
              
              {/* Overlay glow effect on hover */}
              <div className="absolute inset-0 bg-lime-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Gallery;
