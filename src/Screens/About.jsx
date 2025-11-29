import React from "react";
import Pic from "../assets/AliPic.png";
const About = () => {
  return (
    <section>
      <h2 className="text-center font-semibold text-primary text-6xl pt-16">
        About
      </h2>
      <div className="flex justify-between items-center px-8">
        <div>
          <div className="flex items-center justify-center lg:justify-start space-x-2 pt-8">
            <div className="w-8 h-px bg-gradient-to-r from-gray-300 via-cyan-200 to-primary"></div>
            <span className="text-base font-medium bg-gradient-to-r from-text to-primary bg-clip-text text-transparent animate-gradient-x">
              Frontend Developer
            </span>
          </div>
          <h2 className="text-base font-medium bg-gradient-to-r from-white to-primary bg-clip-text text-transparent pt-4">
            Ali Hassan
          </h2>

          <p className="w-[40%] pt-2 text-text">
            Frontend Developer and UI/UX Design Master with 2 years of
            experience. Expert in Tailwind CSS and various libraries, focused on
            crafting rapid, high-quality, and responsive user interfaces. I
            excel at bridging the gap between design vision and technical
            execution.
          </p>
          <div></div>
        </div>
        <div></div>
      </div>
    </section>
  );
};

export default About;
