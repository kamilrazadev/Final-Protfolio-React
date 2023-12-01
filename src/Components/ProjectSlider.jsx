import React, { useEffect, useState } from "react";
import { IoIosArrowForward, IoIosArrowBack } from "react-icons/io";
// import { getAllProjects } from "../sanity/queries";

import LaptopImage from "/laptop-screen.png";

const ProjectSlider = () => {
  // const [projects, setProjects] = useState([]);

  // const fetchData = async () => {
  //   const data = await getAllProjects();
  //   setProjects(data);
  // };

  // useEffect(() => {
  //   fetchData();
  // }, []);

  const [currentIndex, setCurrentIndex] = useState(0);

  const [projects, setProjects] = useState([
    {
      image: LaptopImage,
      title: "FoodnFood",
      description:
        "Nulla vitae elit libero, a pharetra augue mollis interdum. Nulla vitae elit libero, a mollis interdum. Nulla vitae elit libero, a pharetra augue mollis interdum.",
    },
    {
      image: LaptopImage,
      title: "Get Resume",
      description:
        "Nulla vitae elit libero, a pharetra augue mollis interdum. Nulla vitae elit libero, a pharetra augue mollis interdum.",
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
    <div className="slider-container relative overflow-hidden w-full my-8">
      <button
        onClick={prevSlide}
        className="arrow-btn max-[959px]:hidden left-arrow absolute top-[50%] z-10 left-0 sm:left-3  transform -translate-y-1/2 font-bold text-gray-500"
      >
        <IoIosArrowBack className="cursor-pointer text-3xl" />
      </button>
      <div
        className="slider-inner flex transition-transform duration-500 ease-in-out"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {projects.map((project, index) => (
          <div
            key={index}
            className="project-slide flex-shrink-0 w-full h-full px-6 min-[959px]:px-[50px]"
          >
            <div className="grid min-[960px]:grid-cols-5 grid-cols-1 justify-center items-center">
              <div className="relative col-span-1 min-[960px]:col-span-3">
                <button
                  onClick={prevSlide}
                  className="arrow-btn left-arrow min-[960px]:hidden absolute top-[50%] z-10 -left-4 sm:left-3  transform -translate-y-1/2 font-bold text-gray-500"
                >
                  <IoIosArrowBack className="cursor-pointer text-2xl" />
                </button>
                {project.image && (
                  <img
                    src={project.image}
                    alt="Project Image"
                    className="w-auto max-h-[100vh]"
                  />
                )}
                <button
                  onClick={nextSlide}
                  className="arrow-btn right-arrow min-[960px]:hidden absolute top-[50%] z-10 -right-4 sm:right-3 transform -translate-y-1/2 font-bold text-gray-500"
                >
                  <IoIosArrowForward className="cursor-pointer text-2xl" />
                </button>
              </div>
              <div className="flex flex-col justify-center col-span-1 min-[960px]:col-span-2 min-[960px]:pr-14">
                <h1 className="text-[22px] sm:text-[28px] font-bold mt-4 mb-3 sm:mb-5">
                  {project.title}
                </h1>
                <p className="text-[14px] sm:text-[16px] text-gray-600 leading-7">
                  {project.description}
                </p>
                <div className="flex gap-4">
                  <button className="uppercase mt-6 flex items-center gap-2 text-mk-secondary hover:text-white hover:bg-mk-secondary border border-mk-secondary px-4 py-2 hover:rounded-3xl transition-all duration-200">
                    view live
                  </button>
                  <button className="uppercase mt-6 flex items-center gap-2 text-white hover:text-mk-secondary bg-mk-secondary hover:bg-white border border-mk-secondary px-4 py-2 hover:rounded-3xl transition-all duration-200">
                    case study
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      <button
        onClick={nextSlide}
        className="arrow-btn right-arrow max-[959px]:hidden absolute top-[50%] z-10 right-0 sm:right-3 transform -translate-y-1/2 font-bold text-gray-500"
      >
        <IoIosArrowForward className="cursor-pointer text-3xl" />
      </button>
    </div>
  );
};

export default ProjectSlider;
