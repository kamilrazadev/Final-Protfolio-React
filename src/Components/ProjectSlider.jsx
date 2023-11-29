import React, { useState } from "react";
import "../Components/Components.css";
import { IoIosArrowForward } from "react-icons/io";
import { IoIosArrowBack } from "react-icons/io";

const ProjectSlider = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className="relative w-full overflow-hidden">
      <button
        onClick={prevSlide}
        className="absolute top-[50%] text-[25px] md:text-[50px] bg-none border-none cursor-pointer translate-y-[-50%] left-[2px] min-[475]:left[5px] sm:left-[15px] md:left-[20px]"
      >
        <IoIosArrowBack />
      </button>
      <div
        className="slider-inner flex justify-center transition-transform duration-400 ease-linear"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {images.map((image, index) => (
          <img
            key={index}
            src={image}
            alt={`slide ${index}`}
            className="h-auto max-h-[100vh]"
          />
        ))}
      </div>
      <button
        onClick={nextSlide}
        className="absolute top-[50%] text-[25px] md:text-[50px] bg-none border-none cursor-pointer translate-y-[-50%] right-[2px] min-[475]:right[5px] sm:right-[15px] md:right-[20px]"
      >
        <IoIosArrowForward />
      </button>
    </div>
  );
};

export default ProjectSlider;
