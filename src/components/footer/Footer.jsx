import React from "react";
import { FaTelegramPlane } from "react-icons/fa";
import { IoLogoWhatsapp } from "react-icons/io";
import { RiInstagramFill } from "react-icons/ri";
import { IoLocationSharp } from "react-icons/io5";
import { MdEmail } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";
import logo from '../../assets/logo.jpeg'

const contactDetails = [{
  icons: IoLocationSharp,
  info: "Chandigarh"
},{
  icons: MdEmail,
  info: "asimfarhan007@gmail.com"
},{
  icons: FaPhoneAlt,
  info: "7007840791"
}]

const Footer = () => {
  return (
    <div
      id="works"
      className="mx-auto flex flex-col items-center mt-8 md:my-10 bg-gradient-to-b from-[#0a0033] to-[#020106]"
    >
      <div className={`relative top-[-20px] flex items-center w-full h-10`}>
        <div className="flex-grow h-[1px] bg-[#FFFFFF26]"></div>

        <div className="mx-4">
          <img
            src={logo}
            className="rounded-full border border-[#ffffff26] h-14 w-14"
          />
        </div>
        <div className="flex-grow h-[1px] bg-[#FFFFFF26]"></div>
      </div>
      <div className=" h-full w-full flex sm:flex-col md:flex-row gap-8 items-center justify-between p-10 sm:p-7">
        <div className="w-1/2 flex flex-col items-center justify-center gap-1">
        {contactDetails?.map((item,index)=>{
        return  <div className="flex flex-row w-full gap-2 items-center justify-center">
        <item.icons/>
          <p>{item?.info}</p>
        </div>
        })}
        </div>
        <div className="w-full grid sm:grid-cols-2 md:grid-cols-1 gap-8 sm:gap-5">
          <a
            data-aos="fade-up"
            data-aos-duration="1000"
            href=""
            className="box font-medium text-white gap-2 flex items-center justify-center"
          >
            <FaTelegramPlane className=" text-white text-3xl hover:scale-125 cursor-pointer" />
            <p>Telegram</p>
          </a>
          <a
            data-aos="fade-up"
            data-aos-duration="1200"
            href=""
            className="box font-medium text-white  gap-2 flex items-center justify-center"
          >
            <IoLogoWhatsapp className=" text-white text-3xl hover:scale-125 cursor-pointer" />
            <p>WhatsApp</p>
          </a>
          <a
            data-aos="fade-up"
            data-aos-duration="1400"
            href="https://www.instagram.com/asim__784?igsh=OGJ0Njd5bGVpczNh"
            className="box font-medium text-white flex items-center justify-center gap-2"
          >
            <RiInstagramFill className=" text-white text-3xl hover:scale-125 cursor-pointer" />
            <p>Instagram</p>
          </a>
        </div>
      </div>
      <div className="sm:text-[12px]">
        | Copyright &copy; <span>2025 Farhan Dev </span> All rights reserved
        <a href="#"></a> |
      </div>
    </div>
  );
};

export default Footer;
