import React, { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import { signInWithPopup } from "firebase/auth";
import { auth, googleProvider } from "../../firebase";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  // Google Login
  const handleGoogleLogin = async () => {
    try {
      const result = await signInWithPopup(auth, googleProvider);
      const user = result.user;

      const res = await axios.post(
        `${import.meta.env.VITE_SERVER_URL}/api/auth/firebase-login`,
        {
          email: user.email,
          name: user.displayName,
          phone: user.phoneNumber || "",
          firebaseUid: user.uid,
        }
      );

      localStorage.setItem("user", JSON.stringify(res.data.user));

      alert("Google Login Successful");

      if (res.data.user.role === "admin") {
        navigate("/admin");
      } else {
        navigate("/dashboard");
      }
    } catch (error) {
      console.error("Google sign in failed:", error);
      alert(
        "Google Sign-In failed: " +
          (error.response?.data?.message || error.message)
      );
    }
  };

  // Normal Login
  const loginUser = async () => {
    if (!email || !password) {
      alert("Please enter email and password");
      return;
    }

    try {
      const res = await axios.post(
        `${import.meta.env.VITE_SERVER_URL}/api/auth/login`,
        {
          email,
          password,
        }
      );

      const user = res.data.user;

      localStorage.setItem("user", JSON.stringify(user));

      alert("Login Successful");

      if (user.role === "admin") {
        navigate("/admin");
      } else {
        navigate("/dashboard");
      }
    } catch (error) {
      console.log("Login error:", error);
      alert(error.response?.data?.message || "Login Failed");
    }
  };


return (

<div className="min-h-screen flex items-center justify-center bg-slate-50 dark:bg-slate-950 px-4 transition-colors duration-300">

<div className="bg-white dark:bg-slate-900 p-10 rounded-2xl shadow-xl w-full max-w-md border border-slate-200 dark:border-slate-800">

<h2 className="text-3xl font-bold text-slate-900 dark:text-white text-center mb-6">
Welcome <span className="text-lime-600 dark:text-[#00E676]">Back</span>
</h2>

<p className="text-slate-600 dark:text-gray-400 text-center mb-8">
Login to continue your fitness journey.
</p>

<div className="space-y-4">

<input
type="text"
placeholder="Email"
value={email}
className="w-full p-3 rounded-lg bg-slate-50 dark:bg-slate-950 border border-slate-300 dark:border-slate-700 text-slate-900 dark:text-white focus:outline-none focus:border-lime-500 transition"
onChange={(e)=>setEmail(e.target.value)}
/>

<input
type="password"
placeholder="Password"
value={password}
className="w-full p-3 rounded-lg bg-slate-50 dark:bg-slate-950 border border-slate-300 dark:border-slate-700 text-slate-900 dark:text-white focus:outline-none focus:border-lime-500 transition"
onChange={(e)=>setPassword(e.target.value)}
/>

</div>

<button
onClick={loginUser}
className="w-full mt-6 bg-lime-500 hover:bg-lime-600 text-black font-bold uppercase py-3 rounded-lg cursor-pointer transition duration-300"
>
Login
</button>

<button
onClick={handleGoogleLogin}
className="w-full mt-4 bg-white dark:bg-zinc-800 hover:bg-gray-100 dark:hover:bg-zinc-700 border border-slate-200 dark:border-zinc-700 transition duration-300 text-slate-800 dark:text-white font-semibold py-3 rounded-lg flex items-center justify-center gap-2 cursor-pointer"
>
<svg className="w-5 h-5" viewBox="0 0 24 24">
  <path
    fill="#EA4335"
    d="M12.24 10.285V14.4h6.887c-.648 2.41-2.519 4.114-5.136 4.114A5.76 5.76 0 0 1 8.24 12.76a5.76 5.76 0 0 1 5.75-5.76c1.359 0 2.597.51 3.55 1.348l3.076-3.077A9.96 9.96 0 0 0 13.99 2.05A9.99 9.99 0 0 0 4 12.04a9.99 9.99 0 0 0 9.99 9.99c5.8 0 9.99-4.08 9.99-9.99c0-.595-.052-1.176-.149-1.755H12.24Z"
  />
</svg>
Sign In with Google
</button>

<p className="text-slate-600 dark:text-gray-400 text-center mt-6 text-sm">
Don't have an account?
<Link to="/register" className="text-lime-600 dark:text-[#00E676] hover:underline ml-1 font-semibold">
Register
</Link>
</p>

</div>

</div>

);

}

export default Login;