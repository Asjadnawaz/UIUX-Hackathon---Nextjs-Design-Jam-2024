'use client'; // Ensures this component is rendered on the client side

import { useEffect } from 'react';

function FloatingPage2({title, price, originalPrice, imageUrl, department, productColors}: any) {

  useEffect(() => {
    const colorButtons = document.querySelectorAll('.color-btn');
    
    const handleColorSelection = (e:any) => {
      // Ensure that e.target is the correct element (button)
      if (e.target && e.target.classList.contains('color-btn')) {
        // Remove selected class from all buttons
        colorButtons.forEach((btn) => btn.classList.remove('border-blue-500'));
        
        // Add selected class to the clicked button
        e.target.classList.add('border-blue-500');
      }
    };

    // Add click event listener to all color buttons
    colorButtons.forEach((button) => {
      button.addEventListener('click', handleColorSelection);
    });
    
    // Clean up event listeners on unmount
    return () => {
      colorButtons.forEach((button) => {
        button.removeEventListener('click', handleColorSelection);
      });
    };
  }, []);

  return (
    <div className="container mx-auto p-4">
    <h4 className="text-[20px] font-[600] text-[#252B42] leading-[30px] tracking-[0.2px] mb-4">{title}</h4>

      {/* Rating Section */}
      <div className="flex items-center mb-4">
        <div className="items-center">
        <div className='flex items-center'>
          <div><span className="text-[#252B42]">Rating: </span></div>
         
            <div className="ml-2 flex items-center">
            {[...Array(5)].map((_, i) => (
              <svg
              key={i}
              className={`h-4 w-4 ${i < 4 ? 'text-yellow-400' : 'text-gray-300'}`}
              fill="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
              >
              <path
                d="M12 .587l3.668 7.431 8.2 1.192-5.934 5.787 1.4 8.168L12 18.897l-7.334 3.868 1.4-8.168L.132 9.21l8.2-1.192L12 .587z"
              />
              </svg>
            ))}
            </div>
        </div>
        </div>
      </div>
      <h3 className="text-[#252B42] text-[24px] font-[700] leading-[32px] tracking-[0.1px]">  {price} <span className='line-through text-gray-500 text-sm'>{originalPrice}</span> </h3>
        <div className='flex w-[200px] h-[24px] top-[134px] left-[34px] gap-[5px] mt-2'>
            <h3 className='text-[14px] font-[700] leading-[24px] tracking-[0.2px] text-[#737373]'> Availability :</h3>
            <h3 className='text-[14px] font-[700] leading-[24px] tracking-[0.2px] text-[#23A6F0]'>In Stock</h3>
        </div>
     

      {/* Product Description */}
      <div className="mt-4">

        <p className="text-[#858585]">
        Met minim Mollie non desert Alamo est sit cliquey dolor 
do met sent. RELIT official consequent door ENIM RELIT Mollie. 
Excitation venial consequent sent nostrum met.
        </p>
      </div>
 {/* Color Selection Section */}
 <div className="mb-4">
       
        <div className="flex space-x-4  mt-[60px]">
          <button
            className="color-btn w-8 h-8 rounded-full border-2 border-gray-300 bg-blue-500"
          />
          <button
            className="color-btn w-8 h-8 rounded-full border-2 border-gray-300 bg-green-500"
          />
          <button
            className="color-btn w-8 h-8 rounded-full border-2 border-gray-300 bg-red-500"
          />
          <button
            className="color-btn w-8 h-8 rounded-full border-2 border-gray-300 bg-black-500"
          />
        </div>
      </div>
      {/* Add to Cart Button */}
      <div className="mt-[80px]">
        <button className="px-6 py-2 bg-[#23A6F0] text-white  hover:bg-blue-700">
         Select Option
        </button>
      </div>

    </div>
  );
}

export default FloatingPage2;
