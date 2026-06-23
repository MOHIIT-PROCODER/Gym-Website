import { useNavigate } from "react-router-dom";
import Review from "./Review";
import "../../App.css";

function Home() {
  const navigate = useNavigate();

  return (
    <>
      <section className="relative min-h-screen flex items-center pt-28 pb-20 bg-cover bg-center bg-no-repeat transition-colors duration-300" style={{ backgroundImage: "linear-gradient(to right, rgba(0,0,0,0.9) 35%, rgba(0,0,0,0.3) 100%), url('https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?q=80&w=1920&auto=format&fit=crop')" }}>
        {/* Container */}
        <div className="max-w-7xl mx-auto w-full px-6 md:px-16 flex flex-col md:flex-row items-center justify-between relative z-10">
          {/* LEFT CONTENT */}
          <div className="text-white md:w-2/3 text-center md:text-left space-y-6">
            <span className="text-[#00E676] text-xs font-bold tracking-widest uppercase border-l-2 border-[#00E676] pl-3">
              FIT YOUR LIFE
            </span>
            <h1 className="text-5xl md:text-7xl font-extrabold leading-none tracking-tight text-white uppercase">
              WE PROVIDE THE <br />
              <span className="text-[#00E676]">BEST TRAINING</span> <br />
              PROGRAM.
            </h1>

            <p className="text-gray-300 text-base md:text-lg max-w-xl mx-auto md:mx-0 font-light leading-relaxed">
              Transform your body and build real strength with expert coaching
              and structured workout plans designed for results.
            </p>

            <div className="flex justify-center md:justify-start gap-5 pt-4">
              <button
                onClick={() => navigate("/plans")}
                className="px-8 py-3 bg-[#00E676] hover:bg-[#7cd018] text-black font-extrabold rounded-none uppercase transition duration-300 tracking-wider text-sm cursor-pointer"
              >
                Join Now
              </button>

              <button
                onClick={() => navigate("/learnmore")}
                className="px-8 py-3 border border-[#00E676] text-[#00E676] hover:bg-[#00E676] hover:text-black font-extrabold rounded-none uppercase transition duration-300 tracking-wider text-sm cursor-pointer"
              >
                Our Program
              </button>
            </div>
          </div>
        </div>
        <div className="absolute inset-0 bg-black/40 z-0"></div>
      </section>

      {/* QUICK FEATURES SECTION */}
      <section className="bg-slate-950 py-24 px-6 md:px-16 border-t border-zinc-900 transition-colors duration-300">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8 -mt-36 relative z-20 mb-16">
            <div 
              onClick={() => navigate('/workouts')}
              className="bg-black/85 backdrop-blur-md border border-zinc-800 p-8 hover:-translate-y-2 hover:border-[#00E676] transition duration-300 group cursor-pointer"
            >
              <h3 className="text-lg font-bold text-[#00E676] uppercase tracking-wider mb-3">
                PRO EQUIPMENT
              </h3>
              <p className="text-gray-400 text-sm font-light leading-relaxed">
                Access professionally curated workout splits for building muscle, losing fat, or increasing strength.
              </p>
            </div>

            <div 
              onClick={() => navigate('/nutrition')}
              className="bg-black/85 backdrop-blur-md border border-zinc-800 p-8 hover:-translate-y-2 hover:border-[#00E676] transition duration-300 group cursor-pointer"
            >
              <h3 className="text-lg font-bold text-[#00E676] uppercase tracking-wider mb-3">
                EXPERT TRAINERS
              </h3>
              <p className="text-gray-400 text-sm font-light leading-relaxed">
                Nutrition is 80% of the battle. Discover healthy recipes, macro calculations, and meal plans tailored to you.
              </p>
            </div>

            <div 
              onClick={() => navigate('/plans')}
              className="bg-black/85 backdrop-blur-md border border-zinc-800 p-8 hover:-translate-y-2 hover:border-[#00E676] transition duration-300 group cursor-pointer"
            >
              <h3 className="text-lg font-bold text-[#00E676] uppercase tracking-wider mb-3">
                HEALTH REPORT
              </h3>
              <p className="text-gray-400 text-sm font-light leading-relaxed">
                Join our exclusive membership tiers for 1-on-1 coaching, biometric tracking, and facility access.
              </p>
            </div>
          </div>

          {/* LOWER BODY SECTION - ALWAYS PROVIDE BEST FITNESS TRAINERS */}
          <div className="grid md:grid-cols-2 gap-12 items-center mt-24">
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?q=80&w=800&auto=format&fit=crop" 
                alt="Fitness trainers" 
                className="w-full rounded-none shadow-2xl border border-zinc-800"
              />
              <div className="absolute top-6 left-6 bg-[#00E676] text-black font-extrabold px-6 py-4">
                <span className="text-3xl block">20+</span>
                <span className="text-xs uppercase tracking-wider">Training Programs</span>
              </div>
              <div className="absolute bottom-0 left-0 right-0 bg-black/90 p-4 border-t border-zinc-850 flex items-center gap-4">
                <span className="text-2xl">📞</span>
                <div>
                  <p className="text-xs uppercase text-[#00E676] tracking-wider">Call us anytime</p>
                  <p className="text-white font-bold text-lg">0767-8523-398</p>
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <span className="text-[#00E676] text-xs font-bold tracking-widest uppercase border-l-2 border-[#00E676] pl-3">
                ABOUT US
              </span>
              <h2 className="text-4xl md:text-5xl font-black text-white uppercase leading-tight">
                ALWAYS PROVIDE BEST <br />
                FITNESS <span className="text-[#00E676]">TRAINERS.</span>
              </h2>
              <p className="text-gray-400 font-light leading-relaxed text-sm md:text-base">
                Our certified trainers work with you to understand your objectives and create customized pathways that ensure long-term physical success and mental discipline.
              </p>
              
              <ul className="space-y-3">
                {[
                  "Experienced trainers with global certifications",
                  "Personalized nutrition counseling and calorie tracking",
                  "Modern fitness machines and dynamic space design",
                  "24/7 dedicated support for elite members"
                ].map((item, idx) => (
                  <li key={idx} className="flex items-center gap-3 text-sm text-gray-300">
                    <span className="text-[#00E676] font-bold">✓</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>

              <button 
                onClick={() => navigate("/learnmore")}
                className="px-8 py-3 bg-[#00E676] hover:bg-[#7cd018] text-black font-extrabold uppercase rounded-none transition duration-300 tracking-wider text-sm mt-4 cursor-pointer"
              >
                Learn More
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* KEEP REVIEWS AT BOTTOM */}
      <Review />
    </>
  );
}

export default Home;
