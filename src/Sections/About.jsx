import React from "react";
import "../Sections/Sections.css";
import aboutImage from "/aboutImage.png";
import linkedIcon from "/linked-icon.png";
import githubIcon from "/github-icon.png";
import { IoMailOutline } from "react-icons/io5";

const About = () => {
  return (
    <main className="wrapper flex items-center flex-col gap-5 md:justify-between md:flex-row">
      <div className="flex flex-col justify-center gap-3">
        <h4 className="text-mk-secondary mb-4">Hello! Welcome</h4>
        <h1 className="text-[25px] sm:text-4xl lg:text-5xl font-bold">
          I'm M.Kamil Raza
        </h1>
        <h1 className="text-[25px] sm:text-4xl lg:text-5xl font-bold">
          Web Developer
        </h1>
        <div>
          <div>
            <p className="text-mk-primary">
              I'm a best Frontend Developer, having the expertise
              <br className="hidden md:block" /> of Backend. I'm always curious
              about learning new
              <br className="hidden md:block" />
              technologies. Now learning Next.Js and Typescript
            </p>
          </div>
          <button className="mt-6 flex items-center gap-2 text-mk-secondary hover:text-white hover:bg-mk-secondary border border-mk-secondary px-4 py-2 hover:rounded-3xl transition-all">
            <IoMailOutline />
            Hire Me
          </button>

          <div className="mt-8 flex justify-center">
            <div className="flex items-center gap-7 bg-gray-5 rounded-3xl w-fit px-6 py-2">
              <p className="text-sm">Follow Me:</p>

              <a
                href="https://github.com/kamilrazadev"
                className="bg-gray-100 rounded-full"
              >
                <img
                  src={githubIcon}
                  alt="  GitGub"
                  width="50px"
                  height="50px"
                  className="p-[9px] transition duration-300 hover:scale-125"
                />
              </a>

              <a
                href="https://www.linkedin.com/in/kamilrazadev/"
                className="bg-gray-100 rounded-full"
              >
                <img
                  src={linkedIcon}
                  alt="LinkedIn"
                  width="50px"
                  height="50px"
                  className="p-[9px] transition duration-300 hover:scale-125"
                />
              </a>
            </div>
          </div>
        </div>
      </div>
      <div>
        <img src={aboutImage} alt="Image" className="w-[400px] max-w-full" />
      </div>
    </main>
  );
};

export default About;
