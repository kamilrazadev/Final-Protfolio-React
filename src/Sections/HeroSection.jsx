import React from "react";
import "../Sections/Sections.css";
import aboutImage from "/aboutImage.png";
import linkedIcon from "/linked-icon.png";
import githubIcon from "/github-icon.png";
import { IoMailOutline } from "react-icons/io5";

const About = () => {
  return (
    <main className="wrapper grid md:grid-cols-2 items-center flex-col gap-7 md:gap-5 justify-center md:justify-between">
      <div className="flex justify-center md:justify-start">
        <div className="max-w-[450px] flex flex-col justify-center items-center max-[500px]:items-start md:items-start md:gap-3">
          <h4 className="text-mk-secondary mb-4">Hello! Welcome</h4>
          <h1 className="text-2xl min-[366px]:text-[35px] sm:text-4xl lg:text-5xl font-bold">
            I'm M.Kamil Raza
          </h1>
          <h1 className="text-2xl min-[366px]:text-[35px] sm:text-4xl lg:text-5xl font-bold">
            Web Developer
          </h1>
          <div>
            <div className="mt-2">
              <p className="text-mk-primary text-center max-[500px]:text-justify md:text-justify md:text-base text-sm">
                I'm a best Frontend Developer, having the expertise
                <br className="hidden lg:block" /> of Backend. I'm always
                curious about learning new
                <br className="hidden lg:block" />
                technologies. Now learning Next.Js and Typescript
              </p>
            </div>
            <div className="flex justify-center max-[500px]:justify-start md:justify-start">
              <button className="mt-6 flex items-center gap-2 text-mk-secondary hover:text-white hover:bg-mk-secondary border border-mk-secondary px-4 py-2 hover:rounded-3xl transition-all duration-200">
                <IoMailOutline />
                Hire Me
              </button>
            </div>

            <div className="w-full mt-8 flex justify-center">
              <div className="flex items-center gap-3 sm:gap-7 bg-gray-5 rounded-3xl w-full px-6 py-2">
                <p className="text-[13px] sm:text-sm">Follow Me:</p>

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
      </div>
      <div className="flex justify-center md:justify-end">
        <div className="flex justify-center md:justify-end w-[80%] md:w-[90%]">
          <img src={aboutImage} alt="Image" className="w-full max-w-[500px]" />
        </div>
      </div>
    </main>
  );
};

export default About;
