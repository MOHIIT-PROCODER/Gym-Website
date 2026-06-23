import { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./assets/component/Navbar";
import Home from "./assets/component/Home";
import Nutrition from "./assets/component/Nutrition";
import Workouts from "./assets/component/Workouts";
import Plans from "./assets/component/Plans";
import "./App.css";
import AdminDashboard from "./assets/component/AdminDashboard";
import Review from "./assets/component/Review";
import Login from "./assets/component/Login";
import Register from "./assets/component/Register";
import UserDashboard from "./assets/component/UserDashboard";
import LearnMore from "./assets/component/LearnMore";
import DietPlans from "./assets/component/DietPlans";
import Footer from "./assets/component/Footer";
import TermsOfService from "./assets/component/TermsOfService";
import PrivacyPolicy from "./assets/component/PrivacyPolicy";
import Gallery from "./assets/component/Gallery";
import ScrollToTop from "./assets/component/ScrollToTop";

function App() {
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "dark");

  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
    localStorage.setItem("theme", theme);
  }, [theme]);

  return (
    <>
      <ScrollToTop />
      <Navbar theme={theme} setTheme={setTheme} />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/nutrition" element={<Nutrition />} />
        <Route path="/workouts" element={<Workouts />} />
        <Route path="/plans" element={<Plans />} />
        <Route path="review" element={<Review />} />
        <Route path="/learnmore" element={<LearnMore />} />
        <Route path="/dietplans" element={<DietPlans />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/terms" element={<TermsOfService />} />
        <Route path="/privacy" element={<PrivacyPolicy />} />

        

        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/dashboard" element={<UserDashboard />} />
        <Route path="/admin" element={<AdminDashboard />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
