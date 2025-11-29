import React, { useState, useEffect } from "react";
import Navbar from "./Layout/Navbar"; // ✅ FIXED PATH
import Cursor from "./SubComponents/Cursor"; // ✔ correct
import Home from "./Screens/Home"; // ✅ FIXED PATH
import About from "./Screens/About"; // ✅ FIXED PATH

const App = () => {
  return (
    <>
      <Cursor />

      <div className="min-h-screen text-white overflow-x-hidden">
        <main className="relative z-10">
          <Home />
          <About />
        </main>
      </div>
    </>
  );
};

export default App;
