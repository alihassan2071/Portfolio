import React, { useState, useEffect, useRef } from "react";

export default function CustomCursor() {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isVisible, setIsVisible] = useState(false);
  const [isHovering, setIsHovering] = useState(false);

  const cursorRef = useRef({ x: 0, y: 0 });
  const animationRef = useRef(null);

  useEffect(() => {
    const handleMouseMove = (e) => {
      cursorRef.current = { x: e.clientX, y: e.clientY };
      if (!isVisible) setIsVisible(true);
    };

    const handleWindowMouseOut = (e) => {
      if (!e.relatedTarget && !e.toElement) setIsVisible(false);
    };
    const handleWindowMouseOver = () => setIsVisible(true);

    const animate = () => {
      setPosition((prev) => {
        const dx = cursorRef.current.x - prev.x;
        const dy = cursorRef.current.y - prev.y;
        return { x: prev.x + dx * 0.15, y: prev.y + dy * 0.15 };
      });
      animationRef.current = requestAnimationFrame(animate);
    };

    document.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mouseout", handleWindowMouseOut);
    window.addEventListener("mouseover", handleWindowMouseOver);

    animationRef.current = requestAnimationFrame(animate);

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseout", handleWindowMouseOut);
      window.removeEventListener("mouseover", handleWindowMouseOver);
      if (animationRef.current) cancelAnimationFrame(animationRef.current);
    };
  }, [isVisible]);

  // Hover detection
  useEffect(() => {
    const over = (e) => {
      if (
        e.target &&
        (e.target.tagName === "BUTTON" ||
          e.target.tagName === "A" ||
          e.target.classList?.contains("hoverable"))
      ) {
        setIsHovering(true);
      }
    };
    const out = (e) => {
      if (
        e.target &&
        (e.target.tagName === "BUTTON" ||
          e.target.tagName === "A" ||
          e.target.classList?.contains("hoverable"))
      ) {
        setIsHovering(false);
      }
    };
    document.addEventListener("mouseover", over);
    document.addEventListener("mouseout", out);
    return () => {
      document.removeEventListener("mouseover", over);
      document.removeEventListener("mouseout", out);
    };
  }, []);

  return (
    <>
      <style>{`
        /* Hide native cursor */
        * { cursor: none !important; }

        .custom-cursor, .custom-cursor * {
          pointer-events: none !important;
        }

        .custom-cursor {
          position: fixed;
          z-index: 999999;
          top: 0;
          left: 0;
          will-change: transform, opacity;
        }

        .cursor-dot {
          width: 8px;
          height: 8px;
          border-radius: 50%;
          position: absolute;
          top: -4px;
          left: -4px;
          transition: transform 0.12s ease, background 0.12s ease;
        }

        .cursor-ring {
          width: 40px;
          height: 40px;
          border-radius: 50%;
          position: absolute;
          top: -20px;
          left: -20px;
          border-width: 2px;
          border-style: solid;
          transition:
            width 0.22s ease,
            height 0.22s ease,
            top 0.22s ease,
            left 0.22s ease,
            border-color 0.12s ease,
            opacity 0.12s ease;
        }

        .cursor-ring.hover {
          width: 60px;
          height: 60px;
          top: -30px;
          left: -30px;
          border-color: #999; /* greyish on hover */
        }
      `}</style>

      <div
        className="custom-cursor"
        style={{
          transform: `translate(${position.x}px, ${position.y}px)`,
          opacity: isVisible ? 1 : 0,
          transition: "opacity 0.18s ease",
        }}
      >
        <div
          className="cursor-dot"
          style={{
            background: "#00caca",
            transform: isHovering ? "scale(1.15)" : "scale(1)",
          }}
        />
        <div
          className={`cursor-ring ${isHovering ? "hover" : ""}`}
          style={{
            borderColor: isHovering ? "#9a9484" : "#9a9484",
            opacity: isVisible ? 1 : 0,
          }}
        />
      </div>
    </>
  );
}
