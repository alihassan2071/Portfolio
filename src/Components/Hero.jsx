import React from "react";
import TextType from "../SubComponents/TextType";
import TechServicesDiagram from "../SubComponents/HeroSectionImg";
import RotatingText from "../SubComponents/Creative";
import { SiCodemagic } from "react-icons/si";
import { IoDownloadOutline } from "react-icons/io5";
import { IoEyeOutline } from "react-icons/io5";
const Hero = () => {
  return (
    <div className="flex justify-between mt-16 h-screen">
      {/* Left Side Text */}
      <div className="pl-14">
        <div className="space-y-2">
          <div className="flex items-center justify-center lg:justify-start space-x-2 text-gray-400">
            <div className="w-8 h-px bg-gradient-to-r from-white via-cyan-200 to-primary"></div>
            <span className="text-sm md:text-base font-medium">Hello, I'm</span>
          </div>
          <h1 className="text-6xl  font-bold bg-gradient-to-r from-white via-cyan-300 to-primary bg-clip-text text-transparent animate-gradient-x">
            Ali Hassan
          </h1>
        </div>
        <p className="text-text text-xl font-medium pt-6 flex items-center">
          I'm
          <TextType
            text={[
              " Frontend Developer",
              " React Specialist",
              " UI/UX Designer",
              " Problem Solver",
            ]}
            typingSpeed={50}
            pauseDuration={1500}
            showCursor={true}
            cursorCharacter=""
          />
          <SiCodemagic className="w-6 h-6 text-primary" />
        </p>
        <p className="text-[#8f8f8f] w-[70%] pt-4">
          Mastering the intersection of clean code, innovative design, and
          cutting-edge technologies to build superior digital products.
        </p>
        <div className="flex flex-row gap-4 pt-8">
          <button
            // onClick={downloadCV}
            className="group px-6 py-3 bg-gradient-to-r from-black to-primary rounded-full font-semibold text-white shadow-lg transition-all hover:scale-105 active:scale-95"
          >
            <span className="flex items-center space-x-2">
              <IoDownloadOutline className="w-4 h-4 md:w-5 md:h-5 group-hover:animate-bounce" />
              <span>Download CV</span>
            </span>
          </button>
          <button
            // onClick={viewCV}
            className="group px-6  border-2 border-primary rounded-full text-white hover:bg-gradient-to-r from-black to-primary hover:text-white hover:border-none backdrop-blur-sm transition-all hover:scale-105 active:scale-95"
          >
            <span className="flex items-center space-x-2">
              <IoEyeOutline className="w-4 h-4 md:w-5 md:h-5 group-hover:animate-pulse" />
              <span>View CV</span>
            </span>
          </button>
        </div>
        {/* <div className="overflow-hidden mt-10 h-10 flex items-center">
          <p>
            <span className="text-white pr-2 py-1 font-medium">Creative </span>
            <span>
              <RotatingText
                texts={["Ideas", "Design", "Thinking"]}
                className="bg-text text-white font-medium px-7 py-1 rounded-lg inline-block"
                staggerFrom="last"
                initial={{ y: "100%" }}
                animate={{ y: 0 }}
                exit={{ y: "-120%" }}
                staggerDuration={0.025}
                transition={{ type: "spring", damping: 30, stiffness: 400 }}
                rotationInterval={2000}
              />
            </span>
          </p>
        </div> */}
      </div>

      {/* Right Side Diagram */}
      <div>
        <TechServicesDiagram />
      </div>
    </div>
  );
};

export default Hero;
