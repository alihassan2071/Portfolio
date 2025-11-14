import React, { useState, useEffect } from "react";
import { Sparkles, Code, Palette, Rocket } from "lucide-react";

export default function PortfolioWithLoader() {
  const [loading, setLoading] = useState(true);
  const [progress, setProgress] = useState(0);
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(() => setFadeOut(true), 500);
          setTimeout(() => setLoading(false), 1500);
          return 100;
        }
        return prev + 2;
      });
    }, 30);

    return () => clearInterval(interval);
  }, []);

  if (loading) {
    return (
      <div
        className={`fixed inset-0 z-50 flex items-center justify-center bg-gradient-to-br from-black via-[#00caca]/10 to-[#000000] transition-opacity duration-1000 ${
          fadeOut ? "opacity-0" : "opacity-100"
        }`}
      >
        {/* Glowing background particles */}
        <div className="absolute inset-0 overflow-hidden">
          {[...Array(60)].map((_, i) => (
            <div
              key={i}
              className="absolute w-1 h-1 bg-[#00caca] rounded-full animate-pulse"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 3}s`,
                animationDuration: `${1.5 + Math.random() * 2}s`,
                opacity: Math.random() * 0.5 + 0.3,
              }}
            />
          ))}
        </div>

        {/* Rotating gradient orbs */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#00caca] rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob" />
          <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-[#BEB7A4] rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000" />
          <div className="absolute bottom-1/4 left-1/3 w-96 h-96 bg-[#00caca]/50 rounded-full mix-blend-multiply filter blur-3xl opacity-25 animate-blob animation-delay-4000" />
        </div>

        {/* Main loader content */}
        <div className="relative z-10 flex flex-col items-center space-y-8 px-4">
          {/* Animated loader rings with center icon */}
          <div className="relative w-32 h-32">
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="absolute w-32 h-32 border-4 border-[#00caca] border-t-transparent rounded-full animate-spin" />
              <div
                className="absolute w-24 h-24 border-4 border-[#BEB7A4] border-b-transparent rounded-full animate-spin-slow"
                style={{ animationDirection: "reverse" }}
              />

              <div className="relative flex items-center justify-center">
                {progress < 33 && (
                  <Code className="w-12 h-12 text-[#00caca] animate-pulse" />
                )}
                {progress >= 33 && progress < 66 && (
                  <Palette className="w-12 h-12 text-[#BEB7A4] animate-pulse" />
                )}
                {progress >= 66 && (
                  <Rocket className="w-12 h-12 text-[#00caca]/80 animate-pulse" />
                )}
              </div>
            </div>
          </div>

          {/* Glitch text */}
          <div className="relative">
            <h1 className="text-5xl font-bold text-[#BEB7A4] tracking-wider relative">
              <span className="relative inline-block animate-glitch">
                PORTFOLIO
              </span>
            </h1>
            <div className="absolute inset-0 flex items-center justify-center">
              <span
                className="text-5xl font-bold text-[#00caca] opacity-70 animate-glitch-2"
                style={{ clipPath: "polygon(0 0, 100% 0, 100% 45%, 0 45%)" }}
              >
                PORTFOLIO
              </span>
            </div>
          </div>

          {/* Loading text */}
          <div className="flex items-center space-x-2">
            <Sparkles className="w-5 h-5 text-[#00caca] animate-pulse" />
            <p className="text-xl text-[#BEB7A4] font-light tracking-widest">
              {progress < 33 && "INITIALIZING"}
              {progress >= 33 && progress < 66 && "LOADING ASSETS"}
              {progress >= 66 && progress < 100 && "ALMOST THERE"}
              {progress >= 100 && "READY"}
              <span className="animate-pulse">...</span>
            </p>
            <Sparkles className="w-5 h-5 text-[#00caca] animate-pulse" />
          </div>

          {/* Progress bar */}
          <div className="w-80 max-w-md">
            <div className="h-2 bg-black/50 rounded-full overflow-hidden shadow-lg">
              <div
                className="h-full bg-gradient-to-r from-[#00caca] via-[#BEB7A4] to-[#00caca] rounded-full transition-all duration-300 ease-out relative"
                style={{ width: `${progress}%` }}
              >
                <div className="absolute inset-0 bg-white/20 animate-shimmer" />
              </div>
            </div>
            <p className="text-center text-sm text-[#BEB7A4] mt-2 font-mono">
              {progress}%
            </p>
          </div>

          {/* Floating elements */}
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute top-20 left-20 animate-float">
              <div className="w-3 h-3 bg-[#00caca] rounded-full blur-sm" />
            </div>
            <div className="absolute top-40 right-32 animate-float animation-delay-1000">
              <div className="w-2 h-2 bg-[#BEB7A4] rounded-full blur-sm" />
            </div>
            <div className="absolute bottom-32 left-40 animate-float animation-delay-2000">
              <div className="w-3 h-3 bg-[#00caca]/80 rounded-full blur-sm" />
            </div>
            <div className="absolute bottom-20 right-20 animate-float animation-delay-3000">
              <div className="w-2 h-2 bg-[#BEB7A4]/70 rounded-full blur-sm" />
            </div>
          </div>
        </div>

        <style jsx>{`
          @keyframes blob {
            0%,
            100% {
              transform: translate(0, 0) scale(1);
            }
            33% {
              transform: translate(30px, -50px) scale(1.1);
            }
            66% {
              transform: translate(-20px, 20px) scale(0.9);
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
          @keyframes glitch {
            0%,
            100% {
              transform: translate(0);
            }
            20% {
              transform: translate(-2px, 2px);
            }
            40% {
              transform: translate(-2px, -2px);
            }
            60% {
              transform: translate(2px, 2px);
            }
            80% {
              transform: translate(2px, -2px);
            }
          }
          @keyframes glitch-2 {
            0%,
            100% {
              transform: translate(0);
            }
            20% {
              transform: translate(2px, -2px);
            }
            40% {
              transform: translate(2px, 2px);
            }
            60% {
              transform: translate(-2px, -2px);
            }
            80% {
              transform: translate(-2px, 2px);
            }
          }
          @keyframes shimmer {
            0% {
              transform: translateX(-100%);
            }
            100% {
              transform: translateX(100%);
            }
          }
          @keyframes float {
            0%,
            100% {
              transform: translateY(0px);
            }
            50% {
              transform: translateY(-20px);
            }
          }
          .animate-blob {
            animation: blob 7s infinite;
          }
          .animate-spin-slow {
            animation: spin-slow 3s linear infinite;
          }
          .animate-glitch {
            animation: glitch 1s infinite;
          }
          .animate-glitch-2 {
            animation: glitch-2 1s infinite;
          }
          .animate-shimmer {
            animation: shimmer 2s infinite;
          }
          .animate-float {
            animation: float 3s ease-in-out infinite;
          }
          .animation-delay-1000 {
            animation-delay: 1s;
          }
          .animation-delay-2000 {
            animation-delay: 2s;
          }
          .animation-delay-3000 {
            animation-delay: 3s;
          }
          .animation-delay-4000 {
            animation-delay: 4s;
          }
        `}</style>
      </div>
    );
  }

  return <></>;
}
