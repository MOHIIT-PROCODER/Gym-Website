import Nutrition from "./Nutrition";
import Workouts from "./Workouts";
import Plans from "./Plans";
function Home() {
  return (
    <>
    
    <section className="relative bg-gradient-to-b from-black via-[#0d0d0d] to-black min-h-screen flex items-center">

      {/* Container */}
      <div className="max-w-7xl mx-auto w-full px-6 md:px-16 flex flex-col md:flex-row items-center justify-between">

        {/* LEFT CONTENT */}
        <div className="text-white md:w-1/2 text-center md:text-left space-y-8">

          <h1 className="text-4xl sm:text-5xl md:text-7xl font-extrabold leading-tight tracking-tight">
            Start Training <br />
            <span className="text-red-600">Today</span>
          </h1>

          <p className="text-gray-400 text-base sm:text-lg md:text-xl max-w-lg mx-auto md:mx-0">
            Transform your body and build real strength with expert coaching and
            structured workout plans designed for results.
          </p>

          <div className="flex justify-center md:justify-start gap-5 pt-4">
            <button className="px-8 py-3 bg-red-600 hover:bg-red-700 text-white font-semibold rounded-md transition duration-300 shadow-lg shadow-red-600/30">
              Join Now
            </button>

            <button className="px-8 py-3 border border-gray-600 text-white hover:bg-white hover:text-black font-semibold rounded-md transition duration-300">
              Learn More
            </button>
          </div>

        </div>

        {/* RIGHT IMAGE */}
        <div className="relative md:w-1/2 flex justify-center md:justify-end mt-14 md:mt-0">

          {/* Glow effect */}
          <div className="absolute w-72 h-72 bg-red-600/20 blur-3xl rounded-full bottom-10"></div>

          <img
            src="img.jpg"
            alt="Fitness Model"
            className="relative w-[85%] sm:w-[65%] md:w-[650px] lg:w-[750px] object-contain drop-shadow-2xl"
          />

        </div>

      </div>
    </section>

    <div>
      <Nutrition/>
      <Workouts/>
      <Plans/>
    </div>
  </>

  );
}

export default Home;