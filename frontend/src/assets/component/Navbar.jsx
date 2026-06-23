import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { auth } from "../../firebase";

function Navbar({ theme, setTheme }) {
  const [menuOpen, setMenuOpen] = useState(false);

  const user = JSON.parse(localStorage.getItem("user"));

  const handleLogout = async () => {
    localStorage.removeItem("user");
    localStorage.removeItem("adminVerified");
    try {
      await auth.signOut();
    } catch (e) {
      console.error("Firebase signout failed:", e);
    }
    window.location.href = "/";
  };

  const links = [
    { name: "Home", path: "/" },
    { name: "Nutrition", path: "/nutrition" },
    { name: "Workouts", path: "/workouts" },
    { name: "Plans", path: "/plans" },
    { name: "Gallery", path: "/gallery" },
  ];

  return (
    <nav className="bg-white dark:bg-slate-950 text-slate-800 dark:text-white shadow-md border-b border-gray-100 dark:border-slate-800 px-6 md:px-8 py-4 flex justify-between items-center relative z-50 transition-colors duration-300">

      {/* Logo */}
      <h1 className="text-2xl font-bold text-lime-600 dark:text-[#00E676]">FITIPS</h1>

      {/* Desktop Links */}
      <div className="hidden md:flex gap-8 items-center">
        {links.map((link, index) => (
          <NavLink
            key={index}
            to={link.path}
            className={({ isActive }) =>
              isActive
                ? "text-lime-600 dark:text-[#00E676] font-semibold"
                : "text-slate-600 hover:text-lime-600 dark:text-gray-300 dark:hover:text-[#00E676] transition"
            }
          >
            {link.name}
          </NavLink>
        ))}

        {user ? (
          <>
            <span className="text-slate-600 dark:text-gray-300 font-medium">Hello, {user.name}</span>
            {user.role === "admin" ? (
              <NavLink to="/admin">
                <button className="px-4 py-2 border border-lime-500 rounded hover:bg-lime-500 hover:text-black dark:hover:bg-lime-500 dark:hover:text-black dark:text-[#00E676] transition text-lime-600 font-medium cursor-pointer">
                  Admin Dashboard
                </button>
              </NavLink>
            ) : (
              <NavLink to="/dashboard">
                <button className="px-4 py-2 border border-lime-500 rounded hover:bg-lime-500 hover:text-black dark:hover:bg-lime-500 dark:hover:text-black dark:text-[#00E676] transition text-lime-600 font-medium cursor-pointer">
                  Dashboard
                </button>
              </NavLink>
            )}
            <button
              onClick={handleLogout}
              className="px-4 py-2 bg-lime-500 hover:bg-lime-600 text-black font-semibold rounded transition cursor-pointer"
            >
              Logout
            </button>
          </>
        ) : (
          <>
            {/* Login */}
            <NavLink to="/login">
              <button className="px-4 py-2 border border-lime-500 rounded hover:bg-lime-500 hover:text-black dark:hover:bg-lime-500 dark:hover:text-black dark:text-[#00E676] transition text-lime-600 font-medium cursor-pointer">
                Login
              </button>
            </NavLink>

            {/* Register */}
            <NavLink to="/register">
              <button className="px-4 py-2 bg-lime-500 hover:bg-lime-600 text-black font-bold rounded transition cursor-pointer">
                Register
              </button>
            </NavLink>
          </>
        )}

        {/* Desktop Theme Toggle */}
        <button
          onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
          className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-zinc-800 transition duration-200 focus:outline-none cursor-pointer"
          aria-label="Toggle theme"
        >
          {theme === "dark" ? (
            <svg className="w-5 h-5 text-amber-400" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364-6.364l-.707.707M6.343 17.657l-.707.707m0-12.728l.707.707m12.728 12.728l.707.707M12 8a4 4 0 100 8 4 4 0 000-8z" />
            </svg>
          ) : (
            <svg className="w-5 h-5 text-lime-600" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
            </svg>
          )}
        </button>
      </div>

      {/* Right side controls for Mobile (Toggle + Hamburger) */}
      <div className="flex md:hidden items-center gap-4">
        {/* Mobile Theme Toggle */}
        <button
          onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
          className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-zinc-800 transition duration-200 focus:outline-none cursor-pointer"
          aria-label="Toggle theme"
        >
          {theme === "dark" ? (
            <svg className="w-5 h-5 text-amber-400" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364-6.364l-.707.707M6.343 17.657l-.707.707m0-12.728l.707.707m12.728 12.728l.707.707M12 8a4 4 0 100 8 4 4 0 000-8z" />
            </svg>
          ) : (
            <svg className="w-5 h-5 text-lime-600" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
            </svg>
          )}
        </button>

        {/* Hamburger */}
        <div
          className="text-2xl cursor-pointer"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? "✕" : "☰"}
        </div>
      </div>

      {/* Mobile Dropdown */}
      {menuOpen && (
        <div className="absolute top-full left-0 w-full bg-white dark:bg-slate-900 border-b border-gray-100 dark:border-slate-800 flex flex-col items-center gap-6 py-6 md:hidden shadow-xl transition-colors duration-300">

          {links.map((link, index) => (
            <NavLink
              key={index}
              to={link.path}
              onClick={() => setMenuOpen(false)}
              className={({ isActive }) =>
                isActive
                  ? "text-lime-600 dark:text-[#00E676] font-semibold"
                  : "text-slate-600 dark:text-gray-300 hover:text-lime-600 dark:hover:text-[#00E676] transition"
              }
            >
              {link.name}
            </NavLink>
          ))}

          {user ? (
            <>
              <span className="text-slate-600 dark:text-gray-300 font-medium">Hello, {user.name}</span>
              {user.role === "admin" ? (
                <NavLink to="/admin" onClick={() => setMenuOpen(false)}>
                  <button className="px-4 py-2 border border-lime-500 rounded text-lime-600 dark:text-[#00E676]">
                    Admin Dashboard
                  </button>
                </NavLink>
              ) : (
                <NavLink to="/dashboard" onClick={() => setMenuOpen(false)}>
                  <button className="px-4 py-2 border border-lime-500 rounded text-lime-600 dark:text-[#00E676]">
                    Dashboard
                  </button>
                </NavLink>
              )}
              <button
                onClick={() => {
                  setMenuOpen(false);
                  handleLogout();
                }}
                className="px-4 py-2 bg-lime-500 rounded text-black font-bold"
              >
                Logout
              </button>
            </>
          ) : (
            <>
              {/* Mobile Login */}
              <NavLink to="/login" onClick={() => setMenuOpen(false)}>
                <button className="px-4 py-2 border border-lime-500 rounded text-lime-600 dark:text-[#00E676]">
                  Login
                </button>
              </NavLink>

              {/* Mobile Register */}
              <NavLink to="/register" onClick={() => setMenuOpen(false)}>
                <button className="px-4 py-2 bg-lime-500 rounded text-black font-bold">
                  Register
                </button>
              </NavLink>
            </>
          )}

        </div>
      )}
    </nav>
  );
}

export default Navbar;