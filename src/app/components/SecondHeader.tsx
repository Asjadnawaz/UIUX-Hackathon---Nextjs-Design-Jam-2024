import React from 'react'
import Link from 'next/link';

import {
    FaRegUser,
    FaShoppingCart,
    FaRegHeart,
    FaSearch,
  } from "react-icons/fa";

const SecondHeader = () => {
    return (
        <header>
          {/* Main Navigation Bar */}<div className="bg-white shadow py-5">
            <div className="container lg:mx-auto md:mx-auto px-4 flex justify-between items-center text-lg w-full">
          
              {/* Brand Name */}
              <h3 className="text-[#252B42] font-bold  ${montserrat.className} text-[24px] leading-8 tracking-[0.1px] ">Bandage</h3>
    
              {/* Navigation Links */}
              <nav className="flex space-x-6 items-center xs:hidden md:hidden lg:flex">
                <Link href="/" className="hover:text-blue-500 font-bold text-[14px] ${montserrat.className} text-[#737373] tracking-[0.2px]">
                  Home
                </Link>
                <Link href="/Shop" className="hover:text-blue-500 font-bold text-[14px] ${montserrat.className} text-[#737373] tracking-[0.2px]">
                  Shop
                </Link>
                <Link href="/About" className="hover:text-blue-500 font-bold text-[14px] ${montserrat.className} text-[#737373] tracking-[0.2px]">
                  About
                </Link>
                <Link href="#" className="hover:text-blue-500 font-bold text-[14px] ${montserrat.className} text-[#737373] tracking-[0.2px]">
                  Blog
                </Link>
                <Link href="/Contact" className="hover:text-blue-500 font-bold text-[14px] ${montserrat.className} text-[#737373] tracking-[0.2px]">
                  Contact
                </Link>
                <Link href="#" className="hover:text-blue-500 font-bold text-[14px] ${montserrat.className} text-[#737373] tracking-[0.2px]">
                  Pages
                </Link>
              </nav>
    
              {/* Login/Register & Cart Options */}
              <div className="flex text-left space-x-6 items-center text-sm text-[#23A6F0] ">
                <Link href="/login" className="flex invisible lg:visible mr-[100px] items-left hover:text-[#23A6F0] font-bold text-[14px] ${montserrat.className} tracking-[0.2px]">
                  <FaRegUser className="h-5 w-5 " /> Login / Register
                </Link>
                <FaSearch className="hover:text-blue-700 cursor-pointer h-6 w-6" />
                <FaShoppingCart className="hover:text-blue-700 cursor-pointer h-6 w-6" />
                <FaRegHeart className="hover:text-blue-700 cursor-pointer h-6 w-6" />
              </div>
            </div>
          </div>
        </header>
      );
    }
        
    

export default SecondHeader;

