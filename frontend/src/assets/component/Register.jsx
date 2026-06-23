import React, { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

function Register() {

  const [name,setName] = useState("");
  const [email,setEmail] = useState("");
  const [phone,setPhone] = useState("");
  const [password,setPassword] = useState("");
  const [address,setAddress] = useState("");
  const [bloodGroup,setBloodGroup] = useState("");

  const registerUser = async () => {

    try {

      await axios.post(
        `${import.meta.env.VITE_SERVER_URL || 'http://localhost:5000'}/api/auth/register`,
        {
          name,
          email,
          phone,
          password,
          address,
          bloodGroup
        }
      );

      alert("Registration Successful");

    } catch (err) {

      alert(err.response?.data?.message || "Registration Failed");

    }

  };

  return (

    <div className="min-h-screen flex items-center justify-center bg-slate-50 dark:bg-slate-950 px-4 transition-colors duration-300">

      <div className="bg-white dark:bg-slate-900 p-10 rounded-2xl shadow-xl w-full max-w-md border border-slate-200 dark:border-slate-800">

        <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-6 text-center">
          Create <span className="text-lime-600 dark:text-[#00E676]">Account</span>
        </h2>

        <p className="text-slate-600 dark:text-gray-400 text-center mb-8">
          Join Fitips and start your fitness journey.
        </p>

        <div className="space-y-4">

          <input
            placeholder="Full Name"
            className="w-full p-3 rounded-lg bg-slate-50 dark:bg-slate-950 border border-slate-300 dark:border-slate-700 text-slate-900 dark:text-white focus:outline-none focus:border-lime-500 transition"
            onChange={(e)=>setName(e.target.value)}
          />

          <input
            placeholder="Email"
            className="w-full p-3 rounded-lg bg-slate-50 dark:bg-slate-950 border border-slate-300 dark:border-slate-700 text-slate-900 dark:text-white focus:outline-none focus:border-lime-500 transition"
            onChange={(e)=>setEmail(e.target.value)}
          />

          <input
            placeholder="Phone"
            className="w-full p-3 rounded-lg bg-slate-50 dark:bg-slate-950 border border-slate-300 dark:border-slate-700 text-slate-900 dark:text-white focus:outline-none focus:border-lime-500 transition"
            onChange={(e)=>setPhone(e.target.value)}
          />

          <input
            type="password"
            placeholder="Password"
            className="w-full p-3 rounded-lg bg-slate-50 dark:bg-slate-950 border border-slate-300 dark:border-slate-700 text-slate-900 dark:text-white focus:outline-none focus:border-lime-500 transition"
            onChange={(e)=>setPassword(e.target.value)}
          />

          {/* ADDRESS */}
          <input
            placeholder="Address"
            className="w-full p-3 rounded-lg bg-slate-50 dark:bg-slate-950 border border-slate-300 dark:border-slate-700 text-slate-900 dark:text-white focus:outline-none focus:border-lime-500 transition"
            onChange={(e)=>setAddress(e.target.value)}
          />

          {/* BLOOD GROUP */}
          <select
            className="w-full p-3 rounded-lg bg-slate-50 dark:bg-slate-950 border border-slate-300 dark:border-slate-700 text-slate-900 dark:text-white focus:outline-none focus:border-lime-500 transition"
            onChange={(e)=>setBloodGroup(e.target.value)}
          >
            <option value="">Select Blood Group</option>
            <option value="A+">A+</option>
            <option value="A-">A-</option>
            <option value="B+">B+</option>
            <option value="B-">B-</option>
            <option value="O+">O+</option>
            <option value="O-">O-</option>
            <option value="AB+">AB+</option>
            <option value="AB-">AB-</option>
          </select>

        </div>

        <button
          onClick={registerUser}
          className="w-full mt-6 bg-lime-500 hover:bg-lime-600 text-black font-bold uppercase py-3 rounded-lg cursor-pointer transition duration-300"
        >
          Register
        </button>

        <p className="text-slate-600 dark:text-gray-400 text-center mt-6 text-sm">
          Already have an account? 
          <Link to="/login" className="text-lime-600 dark:text-[#00E676] hover:underline ml-1 font-semibold">
            Login
          </Link>
        </p>

      </div>

    </div>

  );

}

export default Register;