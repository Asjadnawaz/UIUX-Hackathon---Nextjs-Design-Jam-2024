'use client';

import Link from 'next/link';
import Image from 'next/image';

interface ProductCardProps {
  id: number;
  title: string;
  department: string;
  originalPrice: string;
  price: string;
  imageUrl: string;
  productColors: string;
  
  
}

export default function ProductCard({ id, title, price, originalPrice, imageUrl, department, productColors }: ProductCardProps) {
  return (
    <div className="bg-white shadow-md overflow-hidden">
      <Link href={`/products/${id}`}>
      
          <Image
            src={imageUrl}
            alt={title}
            width={200}
            height={300}
            className="w-full"
          />
   
      </Link>
      <div className="p-4">
        <h5 className="text-xl font-bold text-[#252B42] mb-2">{title}</h5>
        <p className="text-[#737373] mb-2">{department}</p>
        <div className="flex items-center justify-between">
          <span className="text-[#BDBDBD] font-bold line-through ml-[50px]">${originalPrice}</span>
          <span className="text-[#23856D] font-bold mr-[50px]">${price}</span>
        </div>

        <span>

          <Image
            src={productColors}
            alt={title}
            width={82}
            height={16}
            className='justify-self-center pt-4'
          />

          </span>
      </div>
    </div>
  );
}
