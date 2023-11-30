import React, { useState } from "react";
import { IoIosArrowForward, IoIosArrowBack } from "react-icons/io";

import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

const ProjectSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const [projects, setProjects] = useState([
    {
      projectImage: "https://via.placeholder.com/1920x1080",
      projectTitle: "FoodnFood",
      projectDesc: "Nulla vitae elit libero, a pharetra augue mollis interdum.",
    },
    {
      projectImage: "https://via.placeholder.com/1920x1080",
      projectTitle: "Get Resume",
      projectDesc: "Nulla vitae elit libero, a pharetra augue mollis interdum.",
    },
  ]);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % projects.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? projects.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className="slider-container relative overflow-hidden w-full">
      <button
        onClick={prevSlide}
        className="arrow-btn left-arrow absolute top-[42%] z-10 left-0 sm:left-3  transform -translate-y-1/2 font-bold text-black"
      >
        <IoIosArrowBack className="cursor-pointer" />
      </button>
      <div
        className="slider-inner flex transition-transform duration-500 ease-in-out"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {projects.map((project, index) => (
          <div
            key={index}
            className="project-slide flex-shrink-0 w-full h-full flex flex-col items-center justify-center"
          >
            <img
              src={project.projectImage}
              alt=""
              className="w-[80%] h-auto max-h-[70vh] object-cover"
            />
            <h1 className="text-2xl font-bold mt-4">{project.projectTitle}</h1>
            <p className="text-sm text-gray-600 text-center">
              {project.projectDesc}
            </p>
          </div>
        ))}
      </div>
      <button
        onClick={nextSlide}
        className="arrow-btn right-arrow absolute top-[42%] z-10 right-0 sm:right-3 transform -translate-y-1/2 font-bold text-black"
      >
        <IoIosArrowForward className="cursor-pointer" />
      </button>
    </div>
  );
};

export default ProjectSlider;
