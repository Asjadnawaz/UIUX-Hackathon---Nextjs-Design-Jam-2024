import Image from 'next/image'
import FloatingPage2 from './FloatingPage2';
import NavBar from './NavBar';
import SecondHeader from './SecondHeader';
import BestProduct from './BestProducts';
import descriptionImage from '/public/images/unsplash_QANOF9iJlFs.png'
import Logo from './Logo';
import Footer from './Footer1';
export default function FloatingPage({title, price, originalPrice, imageUrl, department, productColors}: any) {
  return (
<>
<NavBar/>
<SecondHeader/>

    <div className="container mx-auto px-4">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold">Home</h1>
        <a href="/shop" className="text-[#BDBDBD] mr-[1100px]">
          Shop
        </a>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4  ml-[60px] mt-8">
        <div className="relative">
          <Image
            src= {imageUrl}
            alt="Product Image"
            width={400}
            height={400}
            className="rounded-lg shadow-md"
          />
          <div className="absolute bottom-0 left-0 right-0 flex justify-between items-center bg-gray-100 p-2 rounded-b-lg">
            <span className="text-xs font-bold">Asfaa</span>
            <div className="flex gap-2">
              <button className="bg-white border-2 border-gray-400 px-2 py-1 rounded-lg">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
                    clipRule="evenodd"
                  />
                </svg>
              </button>
              <button className="bg-white border-2 border-gray-400 px-2 py-1 rounded-lg">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M7.293 5.293a1 1 0 011.414 0L12 9.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
        <div className="w-[510px] h-[471px]"> 
          
          <FloatingPage2
          title = {title}
          price = {price}
          originalPrice = {originalPrice}
          imageUrl = {imageUrl}
          department = {department}
          productColors = {productColors}
          />
          
          </div>
        
     </div>
    
     </div>
     <br /><br />
     <div className='w-[100%] h-[572px] bg-[#FFFFFF] justify-center items-center m-4'>
        <div className="flex w-[70%] h-[72px] top-[10px] left-[193px] justify-self-center border-b-[0.5px] border-b-gray-400">
          <li className="w-[50%] h-[72px] left-[280px] gap-[0px] list-none">
            <a className='w-[100%] h-[72px] left-[280px] padding-[24px] gap-[8px] flex justify-center items-center'>
                <h1 className="font-montserrat text-[14px] font-semibold leading-[24px] tracking-[0.2px] text-center text-[#737373]">
                  Description</h1>
            </a>
          </li>
          <li className="w-[50%] h-[72px] left-[280px] gap-[0px] list-none">
            <a className='w-[100%] h-[72px] left-[280px] padding-[24px] gap-[8px] flex justify-center items-center'>
                <h1 className="font-montserrat text-[14px] font-semibold leading-[24px] tracking-[0.2px] text-center text-[#737373]">
                Additional Information</h1>
            </a>
          </li>
          <li className="w-[50%] h-[72px] left-[280px] gap-[0px] list-none ">
            <a className='w-[100%] h-[72px] left-[280px] padding-[24px] gap-[8px] flex justify-center items-center'>
                <h1 className="font-montserrat text-[14px] font-semibold leading-[24px] tracking-[0.2px] text-center text-[#737373]">
                Reviews (0)</h1>
            </a>
          </li>
        </div>
        <div className='flex gap-[50px]'>
          <Image
          src = {descriptionImage}
          width={316}
          height={372}
          alt='descriptionImage'
          className='rounded-lg shadow-md m-4 ml-[150px]'
          />
<br />
            <div className= 'w-[332px] h-[340px] mt-3'>
            <h1 className='font-[700] text-[24px] leading-[32px] tracking-[0.1px] '>
            the quick fox jumps over 
            </h1>
            <p className='text-[#737373] font-[400] text-[14px] leading-[20px] tracking-[0.1px]'>Met minim Mollie non desert Alamo est sit cliquey dolor do met sent. RELIT official consequent
               door ENIM RELIT Mollie. Excitation venial consequent sent nostrum met.</p>
               <br />
               <p className='text-[#737373] font-[400] text-[14px] leading-[20px] tracking-[0.1px]'>Met minim Mollie non desert Alamo est sit cliquey dolor do met sent. RELIT official consequent
               door ENIM RELIT Mollie. Excitation venial consequent sent nostrum met.</p>
               <br />
               <p className='text-[#737373] font-[400] text-[14px] leading-[20px] tracking-[0.1px]'>Met minim Mollie non desert Alamo est sit cliquey dolor do met sent. RELIT official consequent
               door ENIM RELIT Mollie. Excitation venial consequent sent nostrum met.</p>
            </div>

            <div className= 'w-[332px] h-[340px] mt-3'>
            <h1 className='font-[700] text-[24px] leading-[32px] tracking-[0.1px] '>
            the quick fox jumps over 
            </h1>
            <p className='text-[#737373] font-[700] text-[14px] leading-[20px] tracking-[0.1px]'>
            {'>'} the quick fox jumps over the lazy dog </p>
               <br />
               <p className='text-[#737373] font-[700] text-[14px] leading-[20px] tracking-[0.1px]'> {'>'} the quick fox jumps over the lazy dog</p>
               <br />
               <p className='text-[#737373] font-[700] text-[14px] leading-[20px] tracking-[0.1px]'> {'>'} the quick fox jumps over the lazy dog</p>
               <br />
               <p className='text-[#737373] font-[700] text-[14px] leading-[20px] tracking-[0.1px]'> {'>'} the quick fox jumps over the lazy dog </p>
    <br />
               <h1 className='font-[700] text-[24px] leading-[32px] tracking-[0.1px] '>
               the quick fox jumps over the lazy dog
            </h1>
            <p className='text-[#737373] font-[700] text-[14px] leading-[20px] tracking-[0.1px]'>
            {'>'} the quick fox jumps over the lazy dog </p>
               <br />
               <p className='text-[#737373] font-[700] text-[14px] leading-[20px] tracking-[0.1px]'> {'>'} the quick fox jumps over the lazy dog</p>
               <br />
               <p className='text-[#737373] font-[700] text-[14px] leading-[20px] tracking-[0.1px]'> {'>'} the quick fox jumps over the lazy dog</p>
               <br />
               <p className='text-[#737373] font-[700] text-[14px] leading-[20px] tracking-[0.1px]'> {'>'} the quick fox jumps over the lazy dog</p>
            </div>

          </div>
    
        </div>
       


     <BestProduct condition='false'/>
     <Logo/>
     <Footer/>
     </>
  );
}
