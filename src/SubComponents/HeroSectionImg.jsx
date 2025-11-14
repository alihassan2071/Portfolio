import React from "react";
import { motion } from "framer-motion";
import { FaReact } from "react-icons/fa6";
import { LiaNode } from "react-icons/lia";
import { SiMysql, SiExpo } from "react-icons/si";
import { SiTailwindcss } from "react-icons/si";
import { FaJsSquare } from "react-icons/fa";
import Logo from "../assets/AfterLogo.png";
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
    <div className="flex h-[395px] overflow-hidden">
      <div className="w-[480px] flex items-center p-2 relative">
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
              r="500"
              fill="none"
              stroke="#d1d5db"
              strokeWidth="2"
            />
            <circle
              cx="500"
              cy="500"
              r="350"
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
            <motion.img src={Logo} alt="" className="h-[120px] w-auto " />
          </motion.div>

          {/* Figma */}
          <motion.div
            className="absolute left-[47%] -translate-x-1/2 top-[-4%]"
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            custom={0.2}
          >
            <motion.div
              className="w-10 h-10 bg-white rounded-full border-2 border-gray-200 shadow-xl flex items-center justify-center"
              animate={float.animate}
            >
              <img src={Figma} className="h-6 w-6 text-red-500 " />
            </motion.div>
          </motion.div>

          {/* Floating tech icons */}
          {[
            {
              Icon: FaReact,
              className: "top-[25%] left-[24%]",
              color: "#00D8FF",
            },
            {
              Icon: LiaNode,
              className: "top-[22%] right-[25%]",
              color: "green",
            },

            {
              Icon: SiMysql,
              className: "bottom-[25%] left-[8%]",
              color: "#3B82F6",
            },
            {
              Icon: FaJsSquare,
              className: "top-[75%] right-[13%]",
              color: "#FACC15",
            },
            {
              Icon: SiExpo,
              className: "top-[38%] right-[6%]",
              color: "black",
            },
            {
              Icon: SiTailwindcss,
              className: "top-[94%] right-[44%]",
              color: "#00caca",
            },
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
                className="bg-white rounded-full border-2 border-gray-200 shadow-lg flex items-center justify-center w-10 h-10  transition-transform duration-300 hover:scale-110"
              >
                <Icon className="w-6 h-6 " style={{ color }} />
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
