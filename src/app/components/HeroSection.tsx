import React from 'react';
import Image from 'next/image';

const Herosection = () => {
  return (
    <div className="relative w-full h-[716px] sm:h-[500px] md:h-[600px] lg:h-[716px]">
      {/* Background Image */}
      <Image 
        src="/images/Girl 2.jpg" 
        alt="maingirl" 
        layout="fill" 
        objectFit="cover" 
        className="w-full h-full" 
      />
      
      {/* Text Overlay */}
      <div className="absolute inset-0 flex flex-col justify-center items-center sm:items-start p-4 sm:p-8 md:p-12 lg:ml-[150px]">
        <div className="w-full sm:w-[599px] h-auto gap-[25px] text-center sm:text-left">
          <h5 className="font-montserrat font-bold text-[14px] sm:text-[16px] leading-[20px] sm:leading-[24px] tracking-[0.1px] text-white">
            SUMMER 2020
          </h5>
          <br />
          <h1 className="font-montserrat font-bold text-[32px] sm:text-[40px] md:text-[48px] lg:text-[58px] leading-[40px] sm:leading-[56px] md:leading-[64px] lg:leading-[80px] tracking-[0.2px] text-white">
            NEW COLLECTION
          </h1>
          <br />
          <h4 className="font-montserrat font-[550] text-[14px] sm:text-[16px] md:text-[18px] lg:text-[20px] leading-[20px] sm:leading-[24px] md:leading-[28px] lg:leading-[30px] tracking-[0.2px] text-white w-full sm:w-[376px]">
            We know how large objects will act, 
            but things on a small scale.
          </h4>
          <button className="w-full sm:w-auto mt-[20px] sm:mt-[30px] md:mt-[40px] font-bold bg-[#2DC071] py-[10px] sm:py-[12px] px-[20px] sm:px-[30px] md:px-[40px] rounded-[5px] text-white font-montserrat">
            SHOP NOW
          </button>
        </div>
      </div>
    </div>
  )
}

export default Herosection;
