import React from "react";
import Beams from "../SubComponents/Beam";
import TextType from "../SubComponents/TextType";
// Image
import Logo from "../assets/Logo.png";
import { GoArrowUpRight } from "react-icons/go";
import Navbar from "../Layout/Navbar";
import Beam from "../Components/Beam";

const Portfolio = () => {
  return (
    <section>
      <Beam />
      <Navbar />
      {/* <TextType
        className="text-white"
        text={[
          "Hi I am Ali Hassan",
          "Hi I am React Specilist",
          "Hi I am the UI/UX Designer",
        ]}
        typingSpeed={75}
        pauseDuration={1500}
        showCursor={true}
        cursorCharacter="_"
      /> */}
    </section>
  );
};

export default Portfolio;
