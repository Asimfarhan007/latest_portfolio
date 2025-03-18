import React from "react";
import {
  AiFillTwitterCircle,
  AiFillGithub,
  AiFillInstagram,
} from "react-icons/ai";
import { FaFacebook, FaLinkedinIn } from "react-icons/fa";
import { FiDownload } from "react-icons/fi";
// import { FaPlay } from "react-icons/fa";
import { TypeAnimation } from "react-type-animation";
import resumePDF from "../../assets/asim-resume.pdf";
import skill from "../../assets/frontend.png";
import Profile from "../../assets/profileImg.png";

const Hero = ({ isDarkMode }) => {
  return (
    <div id="home" className={`md:h-[100%] sm:h-[100%] `}>
      <div className=" container mx-auto sm:mt-20 md:mt-16 h-screen md:h-[100vh] md:flex-col-reverse sm:h-[780px]  flex sm:flex-col-reverse sm:pt-0 ">
        <div className="left mt-4 md:mt-0 flex-1 flex flex-col justify-center gap-5 w-1/2 md:w-full md:py-2 sm:py-0">
          <div className="info w-fit flex flex-col items-start justify-center gap-3 sm:gap-2 sm:mt-3">
            <h2
              data-aos="fade-right"
              className={`${
                isDarkMode ? "textColor" : "textColor"
              } text-5xl font-bold sm:text-[2rem]`}
            >
              Hello, I'm Asim Farhan
            </h2>
            <TypeAnimation
              data-aos="fade-right"
              sequence={["Frontend Developer", 2000, ""]}
              speed={30}
              wrapper="h2"
              repeat={Infinity}
              className="bg-gradient-to-b from-[#D5AF4A] via-[#F2E983] to-[#D5B14B] bg-clip-text text-transparent text-4xl font-bold sm:text-3xl"
            />
            <p
              // data-aos="fade-up"
              className=" text-[1.1rem] font-medium w-3/4 md:w-full text-gray-400 sm:text-[.95rem]"
            >
            I am a React Native and React.js developer with expertise in building user-focused applications. My skills include frontend development, performance optimization, state management, reusable component architecture, and seamless API integrations. I have a strong focus on creating scalable and maintainable code while ensuring an intuitive user experience.
            </p>
          </div>
          <div data-aos="fade-right" className="buttons flex gap-5 sm:self-center md:self-start">
            <a
              href="https://www.linkedin.com/in/abu-asim/"
              className=" bg-black text-[1rem] text-white px-10 py-2 sm:px-8 rounded-lg font-bold  hover:text-[#49C24F] "
            >
              <span> Hire Me</span>
            </a>
            <a
              href={resumePDF}
              className="flex items-center gap-2 border- text-[1rem] hover:scale-90 bg-gradient-to-t from-[#49C24F] via-[#217425] to-[#176E1C] border-black px-7 py-2 sm:px-6 rounded-lg font-bold  hover:text-blue-500"
              download
            >
              <div className="flex items-center gap-1 relative text-white hover:text-lime-400">
                Resume <FiDownload className=" animate-bounce " />
              </div>
            </a>
          </div>
          <div className="icons flex mt-5 sm:self-center md:self-start">
            <ul
              data-aos="fade-up"
              data-aos-duration="1500"
              className=" flex gap-5"
            >
              <li>
                <a
                  href="https://www.linkedin.com/in/abu-asim/"
                  target="_blank"
                >
                  <FaLinkedinIn className=" h-[1.8rem] w-[1.8rem] text-xl hover:text-lime-400 " />{" "}
                </a>
              </li>
              <li>
                <a href="https://www.instagram.com/asim__784?igsh=OGJ0Njd5bGVpczNh">
                  <AiFillInstagram className=" h-[1.8rem] w-[1.8rem] text-xl hover:text-lime-400  " />{" "}
                </a>
              </li>
              <li>
                <a href="https://www.facebook.com/asim.farhan.96">
                  <FaFacebook className=" h-[1.8rem] w-[1.8rem] text-xl hover:text-lime-400  " />{" "}
                </a>
              </li>
              <li>
                <a href="">
                  <AiFillTwitterCircle className=" h-[1.8rem] w-[1.8rem] text-xl hover:text-lime-400  " />{" "}
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="flex-1 flex items-center justify-center md:items-end sm:items-end ">
          <div className="relative h-[80%] w-fit flex items-center sm:items-end">
            <div>
              <img
                data-aos="fade-left"
                loading="lazy"
                // data-aos="fade-up"
                className="image h-[450px] w-[450px] md:h-[300px] md:w-[300px]  overflow-hidden object-cover  md:m-auto sm:m-0"
                src={Profile}
                alt="mine"
              />
            </div>
            <div className=" absolute bottom-20 md:bottom-3 right-2 md:right-2">
              <div
                data-aos="zoom-in"
                data-aos-duration="1000"
                className=" relative cursor-pointer"
              >
                <img
                  loading="lazy"
                  className=" w-[120px] md:w-[90px] circle-text"
                  src={skill}
                  alt="skill"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
