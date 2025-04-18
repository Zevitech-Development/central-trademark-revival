import Image from "next/image";
import React from "react";

import Logo from "../../../public/favicons/logo.svg"


import { LuMessageSquareText } from "react-icons/lu";
import { FaDribbble, FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa6";
import Link from "next/link";
const Footer = () => {
  return <>
  <footer className="w-full  bg-slate-200">
    {/* content wrapper div */}
    <div className="layout-standard h-full grid grid-cols-3 gap-12 py-[80px] px-5">
       <div className="">
         <Image src={Logo} alt="Central TradeMark Revival" width={170} height={170}></Image>
        <p className="text-sm md:text-base text-paragraph mt-8 mb-10">Don&apos;t let a dead or abandoned trademark application hold back your business. Central Trademark Revival is here to guide you every step of the way. With no service fees and a dedication to making trademark revival simple and accessible, you can trust us to help you reclaim your brand.</p>
         {/* icons wrapper div */}
         <div className="flex items-center gap-2">
           <div className="w-10 h-10 rounded-full bg-white flex justify-center items-center"><FaFacebookF className="text-blue-800" size={18}/></div>
           <div className="w-10 h-10 rounded-full bg-white flex justify-center items-center"><FaTwitter  className="text-blue-400" size={18}/></div>
           <div className="w-10 h-10 rounded-full bg-white flex justify-center items-center"><FaLinkedinIn className="text-blue-500" size={18}/></div>
           <div className="w-10 h-10 rounded-full bg-white flex justify-center items-center"><FaDribbble className="text-pink-500" size={18}/></div>
           <div className="w-10 h-10 rounded-full bg-white flex justify-center items-center"><FaInstagram className="text-blue-700" size={18}/></div>
         </div>
       </div>

        <div>
          <h1 className="text-heading font-bold text-xl">Usefull Links</h1>
           <ul className="flex flex-col gap-3 mt-6">
            <li><Link href={"/"}>Home</Link></li>
            <li><Link href={"/"}>Contact Us</Link></li>
            <li><Link href={"/"}>About Us</Link></li>
           </ul>
        </div>

        <div>
          <h1 className="text-heading font-bold text-xl mb-4">Subscribe Now</h1>
          <p className="text-sm md:text-base text-paragraph mb-8">Don&apos;t miss our future updates! Get Subscribed Today!</p>
          <div className="flex items-center">
            <input className="w-[250px] h-[50px] p-4 rounded-[25px_0px_0px_25px] outline-blue-300 text-base placeholder:text-sm" type="text" placeholder="Your mail here"/>
            <button className="w-10 h-[50px] bg-secondary-background flex justify-center items-center rounded-[0px_25px_25px_0px]"> <LuMessageSquareText size={22} className="text-white"/></button>
          </div>
        </div>
    </div>

  </footer>
  <div className="w-full h-10 bg-secondary-background flex justify-center items-center">
    <p className="text-white text-sm md:text-base ">©2020. Central Trademark Revival. All Rights Reserved.</p>
  </div>
  </>
};

export default Footer;
