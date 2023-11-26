import React from "react";
import "../src/App.css";
import HeroSection from "./Sections/HeroSection";
import About from "./Sections/About";

const App = () => {
  return (
    <main>
      <div className="main">
        <div className="overlay">
          <HeroSection />
          <About />
        </div>
      </div>
    </main>
  );
};

export default App;
