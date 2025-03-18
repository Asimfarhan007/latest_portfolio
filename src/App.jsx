import React, { useState, useEffect } from "react";
import { Suspense } from "react";
// import { BarLoader } from "react-spinners";
import Home from "./pages/Home";
import ToggleSwitch from "./components/toggleSwitch/toggle";
import Loader from "./components/loader/loader";
import AnimatedCursor from "react-animated-cursor";
import 'react-alice-carousel/lib/alice-carousel.css';
import { ToastContainer } from "react-toastify";
const App = () => {
  const [loading, setLoading] = useState(true);
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [])

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 3000);
    return () => clearTimeout(timer);
  }, []);

  const handleToggle = () => {
    setIsDarkMode(!isDarkMode);
    document.body.classList.toggle("dark-theme", !isDarkMode);
    document.body.classList.toggle("light-theme", isDarkMode);
  };

  useEffect(() => {
    document.body.classList.toggle("dark-theme", !isDarkMode);
    document.body.classList.toggle("light-theme", isDarkMode);
  }, [isDarkMode]);

  return (
    <Suspense
      fallback={
        <div className="h-screen w-full flex items-center justify-center">
          <Loader />
        </div>
      }
    >
      {loading ? (
        <div className="h-screen w-full flex items-center justify-center">
          <Loader />
        </div>
      ) : (
        <div className="landing-page bg-gradient-to-br from-[#020106] to-[#0a0033]">
          <Home isDarkMode={isDarkMode} />
          {/* <ToggleSwitch handleToggle={handleToggle} isDarkMode={isDarkMode} /> */}
          {!isMobile && (<AnimatedCursor
            innerSize={12}
            outerSize={8}
            // color="196, 240, 0"
            color="242, 233, 131"
            outerAlpha={0.2}
            innerScale={0.7}
            outerScale={5}
            clickables={[
              "a",
              'input[type="text"]',
              'input[type="email"]',
              'input[type="number"]',
              'input[type="submit"]',
              'input[type="image"]',
              "label[for]",
              "select",
              "textarea",
              "button",
              ".link",
            ]}
          />)}
        <ToastContainer />
        </div>
      )}
    </Suspense>
  );
};

export default App;
