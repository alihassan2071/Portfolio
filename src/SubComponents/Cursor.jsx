import React, { useState, useEffect, useRef } from "react";

export default function CustomCursor() {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isVisible, setIsVisible] = useState(false);
  const [isHovering, setIsHovering] = useState(false);
  const [cursorColor, setCursorColor] = useState("white");

  const cursorRef = useRef({ x: 0, y: 0 });
  const animationRef = useRef(null);

  // Helper to test transparent-ish values
  const isTransparent = (bg) =>
    !bg ||
    bg === "transparent" ||
    bg === "rgba(0, 0, 0, 0)" ||
    bg === "initial" ||
    bg === "inherit";

  // Robust background detection:
  const detectBackgroundAt = (x, y) => {
    // If the cursor element exists, temporarily hide it so elementFromPoint returns the real element
    const cursorEl = document.querySelector(".custom-cursor");
    let el = null;
    try {
      if (cursorEl) cursorEl.style.display = "none";
      el = document.elementFromPoint(x, y);
    } catch (err) {
      // ignore
    } finally {
      if (cursorEl) cursorEl.style.display = "";
    }

    if (!el) {
      // fallback to checking html/body styles
      const htmlBg = window.getComputedStyle(
        document.documentElement
      ).backgroundColor;
      if (!isTransparent(htmlBg)) return htmlBg;
      const bodyBg = window.getComputedStyle(document.body).backgroundColor;
      if (!isTransparent(bodyBg)) return bodyBg;
      // final fallback: respect prefers-color-scheme
      return window.matchMedia &&
        window.matchMedia("(prefers-color-scheme: dark)").matches
        ? "rgb(0,0,0)"
        : "rgb(255,255,255)";
    }

    // climb up the ancestor chain until we find a non-transparent background
    let bg = null;
    let walker = el;
    while (walker) {
      try {
        bg = window.getComputedStyle(walker).backgroundColor;
      } catch {
        bg = null;
      }
      if (!isTransparent(bg)) break;
      walker = walker.parentElement;
    }

    // If nothing found, check html/body
    if (isTransparent(bg)) {
      try {
        const htmlBg = window.getComputedStyle(
          document.documentElement
        ).backgroundColor;
        if (!isTransparent(htmlBg)) bg = htmlBg;
      } catch {}
    }
    if (isTransparent(bg)) {
      try {
        const bodyBg = window.getComputedStyle(document.body).backgroundColor;
        if (!isTransparent(bodyBg)) bg = bodyBg;
      } catch {}
    }

    // Final fallback
    if (isTransparent(bg)) {
      bg =
        window.matchMedia &&
        window.matchMedia("(prefers-color-scheme: dark)").matches
          ? "rgb(0,0,0)"
          : "rgb(255,255,255)";
    }

    return bg;
  };

  // convert rgb(...) or rgba(...) string to brightness
  const brightnessFromRgbString = (bg) => {
    if (!bg) return 255; // treat as white
    const nums = bg.match(/\d+/g);
    if (!nums) return 255;
    const [r, g, b] = nums.map(Number);
    // standard luminance approximation
    return (r * 299 + g * 587 + b * 114) / 1000;
  };

  // Main mousemove & animation effect
  useEffect(() => {
    const handleMouseMove = (e) => {
      cursorRef.current = { x: e.clientX, y: e.clientY };

      // detect background and update color
      const bg = detectBackgroundAt(e.clientX, e.clientY);
      const bright = brightnessFromRgbString(bg);
      setCursorColor(bright > 150 ? "black" : "white");

      if (!isVisible) setIsVisible(true);
    };

    // window-level events to hide when leaving the browser
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
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // Hover detection for buttons/links/hoverable
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
        /* hide native cursor */
        * { cursor: none !important; }

        /* ensure our cursor never intercepts pointer events */
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
          transition: background 0.12s ease, transform 0.12s ease;
          box-shadow: 0 0 0 0 rgba(0,0,0,0);
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
            background: cursorColor,
            transform: isHovering ? "scale(1.15)" : "scale(1)",
          }}
        />
        <div
          className={`cursor-ring ${isHovering ? "hover" : ""}`}
          style={{ borderColor: cursorColor, opacity: isVisible ? 1 : 0 }}
        />
      </div>
    </>
  );
}
