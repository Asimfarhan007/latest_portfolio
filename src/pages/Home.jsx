import React, { useState } from "react";
import Contact from "../components/contact/Contact";
import Footer from "../components/footer/Footer";
import Hero from "../components/hero/Hero";
import NavBar from "../components/navbar/NavBar";
import Resume from "../components/resume/Resume";
import Skills from "../components/skills/Skills";
import Work from "../components/work/Work";
import MarqueeSlide from "../components/marquee/marqueeSlide";
import logo from '../assets/logo.jpeg'
// import About from "../components/about/About";

const Home = ({ isDarkMode }) => {
  const [darkMode, setDarkMode] = useState(false);
  function toggleDarkMode() {
    setDarkMode((prevDarkMode) => !prevDarkMode);
  }
  
  return (
    <>
      <NavBar darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
      <Hero
        darkMode={darkMode}
        toggleDarkMode={toggleDarkMode}
        isDarkMode={isDarkMode}
      />
      <div className="sm:my-5 md:my-0 ">
      <DividerLine/>
      </div>
      {/* <About /> */}
      <Skills darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
      <DividerLine/>
      <Work darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
      <DividerLine />
      <Resume darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
      <DividerLine/>
      {/* <MarqueeSlide darkMode={darkMode} toggleDarkMode={toggleDarkMode} /> */}
      <Contact darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
      <Footer darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
    </>
  );
};


const DividerLine = (marginTop) => {
  return (
    <div style={{marginTop:marginTop?marginTop:0}} className={`relative flex items-center w-full h-10`}>
      <div className="flex-grow h-[1px] bg-[#FFFFFF26]"></div>

      <div className="mx-4">
        <img
          src={logo}
          className="rounded-full border border-[#ffffff26] h-14 w-14"
        />
      </div>
      <div className="flex-grow h-[1px] bg-[#FFFFFF26]"></div>
    </div>)
}

export default Home;
