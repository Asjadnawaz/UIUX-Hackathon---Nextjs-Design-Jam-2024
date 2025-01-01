import { useEffect } from 'react';
import Head from 'next/head'



export default function About1() {
  return (
    <div className="text-[#252B42] bg-gradient-to-r from-blue-100 to-blue-300 p-10 rounded-lg shadow-lg">
      <h1 className= 'font-bold text-[58px] ${montserrat.className} w-[542px] mx-auto mt-[20px] h-[80px] text-center'>
        ABOUT US
      </h1>
      <h4 className='font-semibold ${montserrat.className} w-[400px] text-[20px] mx-auto text-[#737373] text-center mt-4'>
        We know how large objects will act, but things on a small scale
      </h4>
      <button className="px-8 py-4 mt-6 mx-auto block bg-[#23A6F0] text-white rounded-full shadow-lg hover:bg-[#1e90ff] transition duration-300">
        Get Quote Now
      </button>
    </div>
  );
}
    