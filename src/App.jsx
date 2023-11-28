import React from "react";
import "../src/App.css";
import HeroSection from "./Sections/HeroSection";
import About from "./Sections/About";

const App = () => {
  return (
    <main className=" min-h-screen">
      <HeroSection />
      <About />
    </main>
  );
};

export default App;
