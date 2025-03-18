import React from "react";
import WorkCard from "../../chip/WorkCard";

const Work = () => {
  return (
    <div id="works" className="container m-auto my-7">
      {/* heading */}
      <div data-aos="fade-up" className="relative mb-5 flex flex-col gap-2">
        <h3 className="text-3xl font-black text-white sm:text-2xl md:text-3xl">Works</h3>
        <p className="text-white font-medium w-[100%]">
          Here are some of my works.
        </p>
        {/* <span className="h-[1.1px] right-0 absolute w-[92%] bg-gray-300 block"></span> */}
      </div>
      {/* card */}
        <div className="grid grid-cols-3 gap-8 md:gap-8 w-full md:grid-cols-2 sm:gap-8 sm:grid-cols-1 sm:space-y-0 ">
          <WorkCard />
        </div>
    </div>
  );
};

export default Work;
