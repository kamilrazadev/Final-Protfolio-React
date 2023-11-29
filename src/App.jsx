import React from "react";
import "../src/App.css";
import HeroSection from "./Sections/HeroSection";
import Navbar from "./Components/Navbar";
import { useEffect, useState } from "react";
import SocialIconsMobile from "./Components/SocialIconsMobile";
import ProjectSlider from "./Components/ProjectSlider";
import LaptopImage from "/laptop-screen.png";

const App = () => {
  const images = [LaptopImage, LaptopImage, LaptopImage];

  return (
    <main className=" min-h-screen">
      <Navbar />
      <SocialIconsMobile />
      <HeroSection />
      <ProjectSlider images={images} />
    </main>
  );
};

export default App;
