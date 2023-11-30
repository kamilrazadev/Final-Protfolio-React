import React from "react";
import "../src/App.css";
import HeroSection from "./Sections/HeroSection";
import Navbar from "./Components/Navbar";
import { useEffect, useState } from "react";
import SocialIconsMobile from "./Components/SocialIconsMobile";
import ProjectSlider from "./Components/ProjectSlider";

const App = () => {
  return (
    <main className=" min-h-screen">
      <Navbar />
      <SocialIconsMobile />
      <HeroSection />
      <ProjectSlider />
    </main>
  );
};

export default App;
