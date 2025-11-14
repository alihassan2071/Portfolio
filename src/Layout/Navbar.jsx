import React from "react";
import Logo from "../assets/Logo.png";
import AfterLogo from "../assets/AfterLogo.png";
import { GoArrowUpRight } from "react-icons/go";

const Navbar = () => {
  return (
    <nav className="flex items-center justify-between ">
      {/* Logo */}

      <div className="group relative w-[45px] h-[45px] ml-5 mt-2">
        <img
          src={Logo}
          alt="Main logo"
          className="
          absolute inset-0 w-full h-full object-contain
          transition-all duration-300 ease-out
          z-20
          group-hover:opacity-0 group-hover:scale-90
        "
          aria-hidden={false}
        />

        <img
          src={AfterLogo}
          alt="After logo"
          className="
          absolute inset-0 w-full h-full object-contain
          opacity-0 scale-110
          transition-all duration-300 ease-out
          z-10
          group-hover:opacity-100 group-hover:scale-100
        "
          /* if AfterLogo is decorative (not interactive) use pointer-events-none to avoid hover flicker */
          /* pointer-events-none */
          aria-hidden={true}
        />
      </div>
      {/* Nav links */}
      <div className="flex flex-row justify-center gap-10 py-3 ml-14  bg-[linear-gradient(to_right,rgba(255,255,255,0.1),rgba(217,217,217,0.14))]  px-14 rounded-b-xl">
        <a
          href="/"
          s
          className="relative text-primary border-b border-primary font-medium px-1 py-1 transition"
        >
          Home
        </a>

        <a
          href="#about"
          className="relative text-text font-medium px-1 py-1 hover:text-primary hover:border-b hover:border-primary transition"
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
        <button className="bg-[linear-gradient(to_right,rgba(255,255,255,0.1),rgba(217,217,217,0.14))] px-8 py-4 rounded-bl-xl shadow transition ">
          <div className="flex flex-row items-center gap-3">
            <p className="text-text font-medium hover:text-primary">Contact</p>
            <GoArrowUpRight className="bg-primary text-white rounded-full p-1 w-6 h-6 hover:scale-105 transition" />
          </div>
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
