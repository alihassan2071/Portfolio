import React, { useState, useEffect } from "react";
import Portfolio from "../Screens/Portfolio";

export default function LoadingScreen() {
  const [counter, setCounter] = useState(0);
  const [fadeOut, setFadeOut] = useState(false);
  const [showContent, setShowContent] = useState(false); // <-- ADD THIS

  useEffect(() => {
    // Counter animation
    const startTime = Date.now() + 2000; // Start after 2s delay
    const duration = 2000;

    const animateCounter = () => {
      const now = Date.now();
      const elapsed = now - startTime;

      if (elapsed < 0) {
        requestAnimationFrame(animateCounter);
        return;
      }

      if (elapsed < duration) {
        const count = Math.min(Math.floor((elapsed / duration) * 100), 100);
        setCounter(count);
        requestAnimationFrame(animateCounter);
      } else {
        setCounter(100);

        // Fade out animation
        setTimeout(() => {
          setFadeOut(true);

          // AFTER fade-out show website
          setTimeout(() => {
            setShowContent(true);
          }, 700); // fade-out duration
        }, 500);
      }
    };

    animateCounter();
  }, []);

  // If loader finished, show the website
  if (showContent) {
    return <Portfolio />;
  }

  return (
    <div className="relative flex items-center justify-center min-h-screen bg-[#0a0a0a] overflow-hidden">
      {/* Background gradient animation */}
      <div className="fixed top-[-50%] left-[-50%] w-[200%] h-[200%] pointer-events-none animate-spin-slow">
        <div className="w-full h-full bg-gradient-radial from-[#00caca]/5 to-transparent" />
      </div>

      {/* Main loader container */}
      <div
        className={`text-center relative transition-all duration-800 ${
          fadeOut ? "opacity-0 scale-95" : "opacity-100 scale-100"
        }`}
      >
        {/* Name */}
        <div className="flex justify-center gap-4 md:gap-8 mb-4">
          {["Ali", "Hassan"].map((word, wordIndex) => (
            <div key={wordIndex} className="flex">
              {word.split("").map((letter, letterIndex) => (
                <span
                  key={letterIndex}
                  className="inline-block text-5xl md:text-7xl lg:text-8xl font-bold tracking-wider text-[#BEB7A4]"
                  style={{
                    animation: `letterSlide 0.8s cubic-bezier(0.34, 1.56, 0.64, 1) forwards`,
                    animationDelay: `${
                      (wordIndex * 3 + letterIndex) * 0.05 + 0.1
                    }s`,
                    opacity: 0,
                    transform: "translateY(100px) rotate(10deg)",
                  }}
                >
                  {letter}
                </span>
              ))}
            </div>
          ))}
        </div>

        {/* Title */}
        <div
          className="text-sm md:text-xl lg:text-2xl font-light tracking-[0.15em] uppercase text-[#BEB7A4]/60 opacity-0"
          style={{
            animation: "fadeIn 1s ease forwards 1.5s",
          }}
        >
          The Frontend UI/UX Designer
          <br />
          <span className="inline-block mt-2">& React Specialist</span>
        </div>

        {/* Progress bar */}
        <div
          className="w-[250px] md:w-[300px] h-[2px] bg-[#222] mx-auto mt-12 rounded-full overflow-hidden opacity-0"
          style={{
            animation: "fadeIn 1s ease forwards 1.8s",
          }}
        >
          <div
            className="h-full bg-gradient-to-r from-[#00caca] to-[#00caca]/60"
            style={{
              animation: "progressFill 2s ease-in-out forwards 2s",
              width: "0%",
            }}
          />
        </div>

        {/* Counter */}
        <div
          className="text-sm md:text-base text-[#666] mt-4 tabular-nums opacity-0"
          style={{
            animation: "fadeIn 1s ease forwards 1.8s",
          }}
        >
          {counter}%
        </div>
      </div>

      <style jsx>{`
        @keyframes letterSlide {
          to {
            opacity: 1;
            transform: translateY(0) rotate(0deg);
          }
        }

        @keyframes fadeIn {
          to {
            opacity: 1;
          }
        }

        @keyframes progressFill {
          to {
            width: 100%;
          }
        }

        @keyframes spin-slow {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }

        .animate-spin-slow {
          animation: spin-slow 20s linear infinite;
        }

        .bg-gradient-radial {
          background: radial-gradient(
            circle at center,
            currentColor 0%,
            transparent 70%
          );
        }
      `}</style>
    </div>
  );
}
