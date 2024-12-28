
'use client';

import ProductCard from "./ProductCards";

export const products = [
  {
    id: 1,
    title: 'Graphic Design',
    price: '$6.48',
    originalPrice: '$16.48',
    imageUrl: '/images/products/id1.png',
    department: 'English Department',
    productColors: '/images/product-colors.png'
  },
  {
    id: 2,
    title: 'Graphic Design',
    price:'$6.48',
    originalPrice: '$16.48',
    imageUrl: '/images/products/id2.png',
    department: 'English Department',
    productColors: '/images/product-colors.png'
  },
  {
    id: 3,
    title: 'Graphic Design',
    price: '$6.48',
    originalPrice: '$16.48',
    imageUrl: '/images/products/id3.png',
    department: 'English Department',
    productColors: '/images/product-colors.png'
  },
  {
    id: 4,
    title: 'Graphic Design',
    price:'$6.48',
    originalPrice: '$16.48',
    imageUrl: '/images/products/id4.png',
    department: 'English Department',
    productColors: '/images/product-colors.png'
  },
  {
    id: 5,
    title: 'Graphic Design',
    price: '$6.48',
    originalPrice: '$16.48',
    imageUrl: '/images/products/id5.png',
    department: 'English Department',
    productColors: '/images/product-colors.png'
  },
  {
    id: 6,
    title: 'Graphic Design',
    price: '$6.48',
    originalPrice: '$16.48',
    imageUrl: '/images/products/id6.png',
    department: 'English Department',
    productColors: '/images/product-colors.png'
  },
  {
    id: 7,
    title: 'Graphic Design',
    price: '$6.48',
    originalPrice: '$16.48',
    imageUrl: '/images/products/id7.png',
    department: 'English Department',
    productColors: '/images/product-colors.png'
  },
  {
    id: 8,
    title: 'Graphic Design',
    price: '$6.48',
    originalPrice:'$16.48',
    imageUrl: '/images/products/id8.png',
    department: 'English Department',
    productColors: '/images/product-colors.png'
  },
  {
    id: 9,
    title: 'Graphic Design',
    price: '$6.48',
    originalPrice:'$16.48',
    imageUrl: '/images/products/id9.png',
    department: 'English Department',
    productColors: '/images/product-colors.png'
  },
  {
    id: 10,
    title: 'Graphic Design',
    price: '$6.48',
    originalPrice:'$16.48',
    imageUrl: '/images/products/id10.png',
    department: 'English Department',
    productColors: '/images/product-colors.png'
  },
  {
    id: 11,
    title: 'Graphic Design',
    price: '$6.48',
    originalPrice:'$16.48',
    imageUrl: '/images/products/id11.png',
    department: 'English Department',
    productColors: '/images/product-colors.png'
  },
  {
    id: 12,
    title: 'Graphic Design',
    price: '$6.48',
    originalPrice:'$16.48',
    imageUrl: '/images/products/id12.png',
    department: 'English Department',
    productColors: '/images/product-colors.png'
  },
  {
    id: 13,
    title: 'Graphic Design',
    price: '$6.48',
    originalPrice:'$16.48',
    imageUrl: '/images/products/id13.png',
    department: 'English Department',
    productColors: '/images/product-colors.png'
  },
  {
    id: 14,
    title: 'Graphic Design',
    price: '$6.48',
    originalPrice:'$16.48',
    imageUrl: '/images/products/id14.png',
    department: 'English Department',
    productColors: '/images/product-colors.png'
  },
  {
    id: 15,
    title: 'Graphic Design',
    price: '$6.48',
    originalPrice:'$16.48',
    imageUrl: '/images/products/id15.png',
    department: 'English Department',
    productColors: '/images/product-colors.png'
  },
  {
    id: 16,
    title: 'Graphic Design',
    price: '$6.48',
    originalPrice:'$16.48',
    imageUrl: '/images/products/id16.png',
    department: 'English Department',
    productColors: '/images/product-colors.png'
  },
  {
    id: 17,
    title: 'Graphic Design',
    price: '$6.48',
    originalPrice:'$16.48',
    imageUrl: '/images/products/id17.png',
    department: 'English Department',
    productColors: '/images/product-colors.png'
  },
  {
    id: 18,
    title: 'Graphic Design',
    price: '$6.48',
    originalPrice:'$16.48',
    imageUrl: '/images/products/id18.png',
    department: 'English Department',
    productColors: '/images/product-colors.png'
  },
  {
    id: 19,
    title: 'Graphic Design',
    price: '$6.48',
    originalPrice:'$16.48',
    imageUrl: '/images/products/id19.png',
    department: 'English Department',
    productColors: '/images/product-colors.png'
  },
  {
    id: 20,
    title: 'Graphic Design',
    price: '$6.48',
    originalPrice:'$16.48',
    imageUrl: '/images/products/id20.png',
    department: 'English Department',
    productColors: '/images/product-colors.png'
  },
];

export default function BestProduct({condition}: {condition: string}) {
 


  return (
    <div className="container text-center mx-auto px-4 py-12">
      <br /><br /><br />

      {(condition === 'true') ?
      <div></div>
      : <><h4 className="text-[20px] font-bold mb-4 text-[#737373]">Featured Products</h4>
      <h3 className="font-[700] text-[24px] leading-[32px] tracking-[0.1px] text-center text-[#252B42] mb-4">BEST SELLER PRODUCTS</h3>
      <p className="mt-[-10px] mb-8 text-[#737373]">Problems trying to resolve the conflict between </p></> }
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {products.map((product: { id: number; title: string; department: string; price: string; originalPrice: string; imageUrl: string; productColors: string }) => (
          <ProductCard
            key={product.id}
            id={product.id}
            title={product.title}
            department={product.department}
            price={product.price}
            originalPrice={product.originalPrice}
            imageUrl={product.imageUrl}
            productColors={product.productColors}
          />
        ))}
      </div>
    </div>
  );
}

