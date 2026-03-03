import React, { useState } from "react";
import { NavLink } from "react-router-dom";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const links = [
    { name: "Home", path: "/" },
    { name: "Nutrition", path: "/nutrition" },
    { name: "Workouts", path: "/workouts" },
    { name: "Plans", path: "/plans" },
  ];

  return (
    <nav className="bg-[#0F0F0F] text-white shadow-lg px-6 md:px-8 py-4 flex justify-between items-center relative z-50">

      {/* Logo */}
      <h1 className="text-2xl font-bold text-red-500">FITIPS</h1>

      {/* Desktop Links */}
      <div className="hidden md:flex gap-8">
        {links.map((link, index) => (
          <NavLink
            key={index}
            to={link.path}
            className={({ isActive }) =>
              isActive
                ? "text-red-400 font-semibold"
                : "hover:text-red-300 transition"
            }
          >
            {link.name}
          </NavLink>
        ))}
      </div>

      {/* Hamburger */}
      <div
        className="md:hidden text-2xl cursor-pointer"
        onClick={() => setMenuOpen(!menuOpen)}
      >
        {menuOpen ? "✕" : "☰"}
      </div>

      {/* Mobile Dropdown */}
      {menuOpen && (
        <div className="absolute top-full left-0 w-full bg-[#111] flex flex-col items-center gap-6 py-6 md:hidden shadow-xl">
          {links.map((link, index) => (
            <NavLink
              key={index}
              to={link.path}
              onClick={() => setMenuOpen(false)}
              className={({ isActive }) =>
                isActive
                  ? "text-red-400 font-semibold"
                  : "hover:text-red-300 transition"
              }
            >
              {link.name}
            </NavLink>
          ))}
        </div>
      )}
    </nav>
  );
}

export default Navbar;