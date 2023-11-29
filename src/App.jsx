import React from "react";
import "../src/App.css";
import HeroSection from "./Sections/HeroSection";
import Navbar from "./Components/Navbar";

const App = () => {
  return (
    <main className=" min-h-screen">
      <Navbar />
      <HeroSection />
    </main>
  );
};

export default App;
