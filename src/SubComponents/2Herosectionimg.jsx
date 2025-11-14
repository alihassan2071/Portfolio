import React from "react";
import { motion } from "framer-motion";
import { FaReact } from "react-icons/fa6";
import { LiaNode } from "react-icons/lia";
import { SiMysql, SiExpo } from "react-icons/si";
import { FaJsSquare } from "react-icons/fa";
import Logo from "../assets/AliPic.png";
import Figma from "../assets/Figma.svg";

export default function TechServicesDiagram() {
  const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.2, duration: 0.6, ease: "easeOut" },
    }),
  };

  const float = {
    animate: {
      y: [0, -8, 0],
      transition: { duration: 3, repeat: Infinity, ease: "easeInOut" },
    },
  };

  return (
    <div className="w-full flex justify-center items-center h-[390px] overflow-hidden">
      <div className="w-[85vw] h-full flex items-center justify-center p-2 relative">
        {/* Scale wrapper */}
        <div
          className="relative w-full h-full"
          style={{ transform: "scale(0.85)", transformOrigin: "center" }}
        >
          {/* SVG Circles */}
          <svg
            className="absolute inset-0 w-full h-full"
            viewBox="0 0 1000 1000"
            preserveAspectRatio="xMidYMid meet"
          >
            <circle
              cx="500"
              cy="500"
              r="430"
              fill="none"
              stroke="#d1d5db"
              strokeWidth="2"
            />
            <circle
              cx="500"
              cy="500"
              r="290"
              fill="none"
              stroke="#d1d5db"
              strokeWidth="2"
            />
          </svg>

          {/* Center Logo */}
          <motion.div
            className="absolute inset-0 flex items-center justify-center"
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            custom={0.1}
          >
            <motion.img
              src={Logo}
              alt="Leo Tech"
              className="h-[280px] w-auto ss:h-[240px] md:h-[270px] lg:h-[360px]"
            />
          </motion.div>

          {/* Figma */}
          <motion.div
            className="absolute left-[43%] -translate-x-1/2 top-[3.5%] md:top-[5%] lg:top-[4%] cursor-default"
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            custom={0.2}
          >
            <motion.div
              className="w-4 h-4 bg-white rounded-full border-2 border-gray-200 shadow-xl flex items-center justify-center ss:w-12 ss:h-12 md:h-14 md:w-14 lg:h-20 lg:w-20"
              animate={float.animate}
            >
              <img
                src={Figma}
                className="h-4 w-4 text-red-500 ss:h-6 ss:w-6 md:w-8 md:h-8 lg:w-11 lg:h-11"
              />
            </motion.div>
          </motion.div>

          {/* Floating tech icons */}
          {[
            {
              Icon: FaReact,
              className: "top-[23%] left-[28%]",
              color: "#00D8FF",
            },
            {
              Icon: LiaNode,
              className: "top-[22%] right-[30%]",
              color: "green",
            },

            {
              Icon: SiMysql,
              className: "bottom-[25%] left-[6%]",
              color: "#3B82F6",
            },
            {
              Icon: FaJsSquare,
              className: "top-[49%] right-[17%]",
              color: "#FACC15",
            },
            { Icon: SiExpo, className: "top-[36%] right-[3%]", color: "black" },
          ].map(({ Icon, className, color }, i) => (
            <motion.div
              key={i}
              className={`absolute ${className} cursor-default`}
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              custom={i * 0.15 + 0.7}
            >
              <motion.div
                animate={float.animate}
                className="bg-white rounded-full border-2 border-gray-200 shadow-lg flex items-center justify-center w-8 h-8 xs:w-10 xs:h-10 ss:w-12 ss:h-12 md:h-14 md:w-14
                lg:h-20 lg:w-20 transition-transform duration-300 hover:scale-110"
              >
                <Icon
                  className="w-5 h-5 xs:w-7 xs:h-7 md:w-8 md:h-8 lg:w-11 lg:h-11"
                  style={{ color }}
                />
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
