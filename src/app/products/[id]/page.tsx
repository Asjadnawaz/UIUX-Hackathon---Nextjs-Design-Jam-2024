'use client';
import React from 'react';
import FloatingPage from '../../components/FloatingPage';
import { products } from '../../components/BestProducts';

export default function Page({ params }: any) {
  const details = products;
  const { id } = params;
  const detail = details.find((item: any) => item.id === parseInt(id));

  if (!detail) {
    return <div>Product not found</div>;
  }

  return (
    <div>
      <FloatingPage
        title={detail.title}
        price={detail.price}
        originalPrice={detail.originalPrice}
        imageUrl={detail.imageUrl}
        department={detail.department}
        productColors={detail.productColors}
      />
    </div>
  );
}
