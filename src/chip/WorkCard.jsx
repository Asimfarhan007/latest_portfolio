import React, { useState } from "react";
import styled from "styled-components";
import { data } from "../data/data";
import { RxExternalLink } from "react-icons/rx";
import { AiOutlineGithub } from "react-icons/ai";
import { Link } from "react-router-dom";

const WorkCard = () => {
  const reversedData = [...data];

  return (
    <>
      {reversedData.map((data) => (
        <div
          data-aos="zoom-in"
          key={data.id}
          className="bg-[#FFFFFF0F] p-4 shadow-deep-dark rounded-xl w-full"
        >
            <div className=" w-full cursor-pointer shadow-xl rounded-md overflow-hidden mx-auto">
              <img
                src={data.img}
                alt={data.title}
                className={`object-contain max-h-[420px] w-full ${data.id>6 ?"sm:h-[400px] md:h-[300px]":"sm:h-[210px] md:h-[260px]"} rounded-md`}
              />
            </div>
          <p className="bg-gradient-to-b from-[#D5AF4A] via-[#F2E983] to-[#D5B14B] bg-clip-text text-transparent text-xl font-medium mt-4 hover:text-lime-400">
            {data.title}
          </p>
          <p className="text-[#B1B1B1] text-sm font-medium mt-2">
            {data.desc}
          </p>
        </div>
      ))}
    </>
  );
};

export default WorkCard;

const POPUP = styled.div`
  position: relative;
  img {
    &:hover {
      transform: scaleX(2);
    }
  }
  .popup {
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    opacity: 0;
    margin: auto;
    transition: 0.5s ease;
    background: rgba(255, 255, 255, 0.5);
    backdrop-filter: blur(5px);
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
  }
  .icon {
    color: #fff !important;
  }
  &:hover .popup {
    opacity: 1;
    color: #fff;
  }
`;
