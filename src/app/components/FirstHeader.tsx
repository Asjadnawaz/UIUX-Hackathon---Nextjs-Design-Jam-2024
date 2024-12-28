// import { ChevronDown } from 'lucide-react';
import React from 'react'
import Link from 'next/link';
import { FaPhoneAlt, FaEnvelope,  FaFacebookF, FaInstagram, FaYoutube ,FaTwitter } from "react-icons/fa";

const FirstHeader = () => {
  return (
    <div className="bg-[#252B42] text-white h-[50px] px-2 py-1 pt-2 xs:hidden md:hidden lg:block sm:hidden">
    <div className="container mt-[-9px] mx-auto px-4 flex justify-between items-center text-sm">
      {/* Contact Info */}
      <div className="flex items-center space-x-4 w-[700px] p-[10px] gap-5">
      <span className="flex items-center">
              <FaPhoneAlt className="mr-1  font-semibold" /> (225) 555-0118
      </span>

      <span className="flex items-center font-bold">
              <FaEnvelope className="mr-1" /> michelle.rivera@example.com
      </span>
      </div>

      {/* Promotion Message */}
      <div className="flex items-center font-semibold  mr-[20px] w-[400px] text-sm gap-4">
        <span>Follow Us and get a chance to win 80% off</span>
      </div>

      {/* Social Media & Utility Icons */}
      <div className="w-[233px] h-[30px] p-5 pb-9  flex items-center space-x-4">
        <div > <h6 className="w-[80px]  mt-[18px] h-[24px] font-bold ">Follow Us :</h6></div>
      <div className="flex space-x-4 items-center mt-[18px]">
          <FaInstagram className="hover:text-gray-300 cursor-pointer h-5 w-5" />
          <FaYoutube className="hover:text-gray-300 cursor-pointer h-5 w-5" />
            <FaFacebookF className="hover:text-gray-300 cursor-pointer h-5 w-5" />
            <FaTwitter className="hover:text-gray-300 cursor-pointer h-5 w-5" />
          </div>
        </div>
      </div>
      </div>
  
  )
}
export default FirstHeader;

