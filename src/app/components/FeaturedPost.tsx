import React from 'react';
import Image from 'next/image';
import { LuAlarmClock } from "react-icons/lu";
import { LiaCommentsSolid } from "react-icons/lia";

const FeaturedPosts = () => {
  return (
    <div className="container mx-auto px-4 py-3">
      <br /><br /><br />
      {/* Section Header */}
      <h6 className="text-center text-[16px] font-bold text-[#23A6F0] mb-2">Practice Advice</h6>
      <h2 className="text-center text-[24px] md:text-[40px] font-bold text-[#252B42] mb-4">Featured Posts</h2>
      <p className="text-center text-[#737373] text-[14px] md:text-[16px] mx-auto w-full md:w-[500px] mb-8">
        Problems trying to resolve the conflict between the two major realms of Classical physics: Newtonian mechanics
      </p>
      
      {/* Grid of Featured Posts */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {/* First Featured Post */}
        <div className="bg-white shadow-lg p-6">
          <div className="flex items-center mb-4">
            <div className="bg-[#E74040] text-white font-bold px-2">NEW</div>
          </div>
          <Image
            src="/images/road.png"
            alt="Featured Post 1"
            width={350}
            height={250}
            className="mb-4 w-full h-auto"
          />
          <h4 className="text-xl font-bold mb-2 text-[#252B42]">Loudest à la Madison #1 (L&apos;integral)</h4>
          <p className="text-[#737373] mb-4">
            We focus on ergonomics and meeting you where you work. It&apos;s only a keystroke away.
          </p>
          <div className="flex items-center mt-4">
            {/* Author Icon */}
            <div className="flex items-center mr-4">
              <LuAlarmClock className="text-[#23A6F0] text-sm" />
              <div className='ml-2'>21 April 2021</div>
            </div>
            {/* Time Icon */}
            <div className="flex items-center">
              <LiaCommentsSolid className="text-[#23A6F0] text-sm" />
              <div className='ml-2'>10 comments</div>
            </div>
          </div>
        </div>
        {/* Second Featured Post */}
        <div className="bg-white shadow-lg p-6">
          <div className="flex items-center mb-4">
            <div className="bg-[#E74040] text-white font-bold px-2">NEW</div>
          </div>
          <Image
            src="/images/car.png"
            alt="Featured Post 2"
            width={350}
            height={250}
            className="mb-4 w-full h-auto"
          />
          <h4 className="text-xl font-bold mb-2 text-[#252B42]">Loudest à la Madison #1 (L&apos;integral)</h4>
          <p className="text-[#737373] mb-4">
            We focus on ergonomics and meeting you where you work. It&apos;s only a keystroke away.
          </p>
          <div className="flex items-center mt-4">
            {/* Author Icon */}
            <div className="flex items-center mr-4">
              <LuAlarmClock className="text-[#23A6F0] text-sm" />
              <div className='ml-2'>21 April 2021</div>
            </div>
            {/* Time Icon */}
            <div className="flex items-center">
              <LiaCommentsSolid className="text-[#23A6F0] text-sm" />
              <div className='ml-2'>10 comments</div>
            </div>
          </div>
        </div>
        {/* Third Featured Post */}
        <div className="bg-white shadow-lg p-6">
          <div className="flex items-center mb-4">
            <div className="bg-[#E74040] text-white font-bold px-2">NEW</div>
          </div>
          <Image
            src="/images/unsplash.png"
            alt="Featured Post 3"
            width={350}
            height={250}
            className="mb-4 w-full h-auto"
          />
          <h4 className="text-xl font-bold mb-2 text-[#252B42]">Aesthetic Vibrance & Design</h4>
          <p className="text-[#737373] mb-4">
            A detailed exploration of aesthetics in modern visual design systems.
          </p>
          <div className="flex items-center mt-4">
            {/* Author Icon */}
            <div className="flex items-center mr-4">
              <LuAlarmClock className="text-[#23A6F0] text-sm" />
              <div className='ml-2'>21 April 2021</div>
            </div>
            {/* Time Icon */}
            <div className="flex items-center">
              <LiaCommentsSolid className="text-[#23A6F0] text-sm" />
              <div className='ml-2'>10 comments</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeaturedPosts;
