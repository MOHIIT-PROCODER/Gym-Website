import { Routes, Route } from "react-router-dom";
import Navbar from "./assets/component/Navbar";
import Home from "./assets/component/Home";
import Nutrition from "./assets/component/Nutrition";
import Workouts from "./assets/component/Workouts";
import Plans from "./assets/component/Plans";
import "./App.css"


function App() {
  return (
    <>
    <Navbar/>
    <Routes>
      <Route path="/" element={<Home />} />
       <Route path ="/nutrition" element={<Nutrition/>} />
       <Route path ="/workouts" element={<Workouts/>} />
       <Route path ="/plans" element={<Plans/>} />
    </Routes>
    </>
  );
}

export default App;