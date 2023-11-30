import React from "react";

const ProjectCardSlider = ({ image, title, desc }) => {
  return (
    <div>
      <img src={image} alt="" className="h-auto max-h-[100vh] w-full" />
      <h1>{title}</h1>
      <p>{desc}</p>
    </div>
  );
};

export default ProjectCardSlider;
