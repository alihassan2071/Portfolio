import React from "react";
// Image
import Navbar from "../Layout/Navbar";
import Beam from "../Components/Beam";
import Hero from "../Components/Hero";

const Portfolio = () => {
  return (
    <section>
      <Beam />
      <Navbar />
      <Hero />
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
