import React from "react";
import reactjs from '../../assets/reactjs.png'
import reactNative from '../../assets/reactNative.png'
import js from '../../assets/js.png'
import html from '../../assets/html.png'
import angular from '../../assets/angular.png'
import AliceCarousel from "react-alice-carousel";
import Marquee from "react-fast-marquee";
// import { IoLogoNodejs } from "react-icons/io";
const tech = [
  reactjs,
  reactNative,
  js,
  angular,
  html
]

const Skills = ({ darkMode }) => {
  return (
    <div id="skills">
      <div className=" container m-auto  my-7">
        {/* heading */}
        <div data-aos="fade-up" className="relative mb-2">
          <h3 className=" text-3xl font-black text-white sm:text-2xl">
            My Skills
          </h3>
          {/* <span className="h-[1.1px] right-0 absolute w-[90%] bg-gray-300 block"></span> */}
        </div>
        {/* content*/}
        <div className="flex md:flex-col ">
          <div className="left flex-1 w-full">
            <p
              data-aos="fade-up"
              className=" text-white font-medium w-[100%]"
            >
              Here are my skills.
            </p>
          </div>
        </div>
        <div className="items-center justify-center mt-4">
          <Marquee speed={200} direction="left" loop={0}>
            <div className="flex flex-row sm:gap-20 gap-28">
          {tech.map((tec, index) => {
            return (
                <img
                  key={index}
                  src={tec}
                  className={`transition-all sm:w-28 w-36 sm:h-32 h-40 object-contain ${index == 4 && "sm:mr-20 md:mr-28"}`}
                  alt="servicesLogo"
                />
            );
          })}
          </div>
          </Marquee>
        </div>
      </div>
    </div>
  );
};

export default Skills;
