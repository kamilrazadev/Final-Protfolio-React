import React from "react";
import aboutImage from "/aboutImage.png";
import { IoMailOutline } from "react-icons/io5";

const About = () => {
  return (
    <main className="wrapper flex items-center flex-col gap-5 md:justify-between md:flex-row">
      <div className="flex flex-col justify-center gap-3">
        <h4 className="text-mk-secondary mb-2">Hello! Welcome</h4>
        <h1 className="text-[25px] sm:text-4xl lg:text-5xl font-bold">
          I'm M.Kamil Raza
        </h1>
        <h1 className="text-[25px] sm:text-4xl lg:text-5xl font-bold">
          Web Developer
        </h1>
        <div>
          <button>
            <IoMailOutline />
            Hire Me
          </button>
        </div>
      </div>
      <div>
        <img src={aboutImage} alt="Image" className="w-[400px] max-w-full" />
      </div>
    </main>
  );
};

export default About;
