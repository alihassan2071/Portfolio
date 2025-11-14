import React from "react";
import Logo from "../assets/Logo.png";
import { GoArrowUpRight } from "react-icons/go";

const Navbar = () => {
  return (
    <nav className="flex items-center justify-between ">
      {/* Logo */}
      <div className="flex rounded-br-xl">
        <img src={Logo} alt="Logo" className="pl-6 pt-2 h-[45px]" />
      </div>

      {/* Nav links */}
      <div className="flex flex-row justify-center gap-10 py-3 ml-14  bg-[linear-gradient(to_right,rgba(255,255,255,0.1),rgba(217,217,217,0.14))]  px-14 rounded-b-xl">
        <a
          href="/"
          s
          className="relative text-[#D1D0A3] border-b border-primary font-medium px-1 py-1 transition"
        >
          Home
        </a>

        <a
          href="#about"
          className="relative text-text font-medium px-1 py-1 hover:text-primary hover:border-b hover:border-text transition"
        >
          About
        </a>

        <a
          href="#services"
          className="relative text-text font-medium px-1 py-1 hover:text-primary hover:border-b hover:border-primary transition"
        >
          Services
        </a>

        <a
          href="#projects"
          className="relative text-text font-medium px-1 py-1 hover:text-primary hover:border-b hover:border-primary transition"
        >
          Projects
        </a>
      </div>

      {/* Contact Button */}
      <div>
        <button className="bg-[linear-gradient(to_right,rgba(255,255,255,0.1),rgba(217,217,217,0.14))] px-8 py-4 rounded-bl-xl shadow transition">
          <div className="flex flex-row items-center gap-3">
            <p className="text-gray-800 font-medium">Contact</p>
            <GoArrowUpRight className="bg-gray-500 text-white rounded-full p-1 w-6 h-6" />
          </div>
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
