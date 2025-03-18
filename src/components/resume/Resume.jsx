import React from "react";
import { MdWorkOutline } from "react-icons/md";

const Resume = () => {

  const experienceData = [
    {
      name: "Redsky Advance Solutions Pvt. Ltd.",
      experienceTime: "Oct,23 - current",
      experienceDesc: "In this my responsibilties are to oversee projects from start to finish, ensuring high-quality, bug-free deliverables that meet client expectations. Facilitate teamwork, streamline workflows. Additionally, I actively assist team members in resolving issues to ensure smooth progress and timely delivery"
    },
    {
      name: "Analyze InfoTech Solutions (Internship)",
      experienceTime: "March 2023 - Aug 2023",
      experienceDesc: "Assisted in developing responsive, user-friendly interfaces to enhance user experience. Integrated third-party libraries, addressed technical issues, and collaborated on seamless solution implementation. Participated in planning discussions, gaining hands-on experience in functionality enhancement and project execution."
    }  
  ]


  return (
    <div id="resume" className="container m-auto mt-6">
      {/* heading */}
      <div data-aos="fade-up" className="relative mb-1">
        <h3 className=" text-3xl font-black text-white sm:text-2xl">
          Resume
        </h3>
        {/* <span className="h-[1.1px] right-0 absolute w-[92%] bg-gray-300 block"></span> */}
      </div>
      <div data-aos="fade-up" className="left flex-1 w-full">
        <p className=" text-white font-medium w-[100%]">
          Here are my experiences.
        </p>
      </div>
      <div className="flex flex-col gap-4">
        <fieldset
          data-aos="zoom-in"
          className="w-full"
        >
          <div className="flex items-start">
          <div className="border border-[#D5AF4A] my-4 px-3 sm:px-5 py-1 rounded-full items-center justify-center flex overflow-hidden self-center">
            <p className="text-xl bg-gradient-to-br from-[#D5AF4A] via-[#F2E983] to-[#D5B14B] bg-clip-text text-transparent">Experience</p>
          </div>
          </div>
        </fieldset>
        <fieldset
          data-aos="zoom-in"
          className="w-full flex flex-col gap-4"
        >
          {experienceData?.map((item, index) => {
            return <div className={`border-[.5px] relative border-[#FFFFFF26] rounded-md p-3 sm:p-5 ${index == (experienceData?.length - 1) && "mb-8"}`}>
              <div className="flex gap-4">
                <div className="text-white left-[-20px] top-1/3 absolute h-10 w-10 rounded-full items-center justify-center flex bg-gradient-to-t border border-white from-[#49C24F] via-[#217425] to-[#176E1C]">
                  <MdWorkOutline size={18} />
                </div>
                <div className="flex flex-col w-[90%] justify-center px-6">
                  <p className="text-white font-semibold text-lg">{item?.name}</p>
                  <p className="text-gray-200 font-normal text-base">{item?.experienceTime}</p>
                  <p className="text-gray-400 font-normal text-sm">{item?.experienceDesc}</p>
                </div>
              </div>
            </div>
          })}
        </fieldset>
      </div>
      {/* card*/}
      {/* <div className="card-wrapper w-[90%] sm:w-full mt-5 flex md:flex-col sm:gap-5 mx-auto ">
        <div className="left flex-1 flex items-start justify-center">
          <fieldset
            data-aos="zoom-in"
            className=" w-[80%] p-5 py-12 sm:py-8 sm:w-full sm:p-2"
          >
            <legend className=" w-auto ml-[50%] translate-x-[-50%] border-2 border-gray-200 rounded-3xl py-1 px-8 font-semibold text-xl text-custom-green">
              Experience
            </legend>
            <div className=" relative">
              <div className="design flex absolute left-[-150px] top-1/2 items-center rotate-[90deg] sm:left-[-160px] ">
                <div className="c1 w-[12px] h-[12px] rounded-full bg-lime-400 border-2 border-lime-400"></div>
                <div className="line w-[230px] bg-gray-300 h-[2px] sm:w-[250px]"></div>
                <div className="c2 w-[12px] h-[12px] rounded-full bg-lime-400 border-2 border-lime-400"></div>
              </div>
              <div className=" flex flex-col gap-1 sm:gap-1 border-2 border-white shadow-[0px_0px_16px_1px_rgba(0,0,0,0.1)] p-3 rounded-lg">
                <h1 className="text-[1.4rem] font-semibold sm:text-xl">
                  Frontend Developer
                </h1>
                <span className=" text-[.9rem] font-semibold text-gray-500 sm:text-base">
                  Websultanate Software Technologies Pvt. Ltd.
                </span>
                <span className=" text-[.9rem] font-semibold text-custom-green sm:text-base">
                  Feb 2022 - Present
                </span>
                <p className=" text-[.9rem] text-justify break-words text-gray-500">
                  Enthusiastic and results-driven Frontend Developer with a
                  demonstrated track record of transforming design concepts into
                  engaging web experiences. With a passion for clean and
                  efficient code, I bring 2 years of hands-on experience.
                  Committed to optimizing user interfaces for responsiveness and
                  performance, Eager to contribute my skills in crafting
                  exceptional user interfaces while staying abreast of emerging
                  technologies in the dynamic world of frontend development.
                </p>
              </div>
            </div>
          </fieldset>
        </div>
        <div className="right flex-1 flex items-center justify-center">
          <fieldset
            data-aos="zoom-in"
            className=" w-[80%] p-5 py-12 sm:py-8 sm:w-full sm:p-2"
          >
            <legend className=" w-auto ml-[50%] translate-x-[-50%] border-2 border-gray-200 rounded-3xl py-1 px-8 font-semibold text-xl text-custom-green">
              Education
            </legend>
            <div className=" relative">
              <div className="design flex absolute left-[-150px] top-1/2 items-center rotate-[90deg] sm:left-[-160px] ">
                <div className="c1 w-[12px] h-[12px] rounded-full bg-lime-400 border-2 border-lime-400"></div>
                <div className="line w-[230px] bg-gray-300 h-[2px] sm:w-[250px]"></div>
                <div className="c2 w-[12px] h-[12px] rounded-full bg-lime-400 border-2 border-lime-400"></div>
              </div>
              <div className=" flex flex-col gap-1 border-2 border-white shadow-[0px_0px_16px_1px_rgba(0,0,0,0.1)] p-3 rounded-lg">
                <h1 className="text-[1.4rem] font-semibold sm:text-xl">
                  Bachelor of Computer Applications
                </h1>
                <span className=" text-[.9rem] font-semibold text-gray-500 sm:text-base">
                  Khawaja Moinuddin Chishti Language University, Lucknow
                </span>
                <span className=" text-[.9rem] font-semibold text-custom-green sm:text-base">
                  Year 2018 - Year 2021
                </span>
                <p className=" text-[.9rem] text-justify text-gray-500">
                  The university was established in 2009 as "Uttar Pradesh Arabi
                  Pharsi University", under the Uttar Pradesh Arabi Pharsi
                  University Act, 2009. In 2010 the act was repealed and the
                  university was reintroduced as "Uttar Pradesh Urdu,
                  Arabi-Farsi University" under Uttar Pradesh State Universities
                  Act, 2010. It was renamed "Manyavar Shri Kanshi Ram Ji Urdu,
                  Arabi-Farsi University" in 2011 under Uttar Pradesh State
                  Universities Act, 2011, to honor the politician and social
                  reformer Kanshi Ram. About a year later it was renamed again
                  "Khwaja Moinuddin Chishti Urdu, Arabi-Farsi University" in
                  2012, under Uttar Pradesh State Universities Act, 2012, in
                  honor of Sufi saint Mu'in al-Din Chishti. In 2020, it was
                  renamed a final time "Khwaja Moinuddin Chishti Language
                  University" under Uttar Pradesh State Universities Act, 2020.
                </p>
              </div>
            </div>
          </fieldset>
        </div>
      </div> */}
    </div>
  );
};

export default Resume;
