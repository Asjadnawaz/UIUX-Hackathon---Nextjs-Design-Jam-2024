import React from 'react';
import Image from 'next/image';

export default function Logo() {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="flex justify-center items-center space-x-8">
        <div className="logo-container">
          <Image
            src="/images/hooli.png"
            alt="stripe"
            layout="responsive"
            width={151}
            height={42}
            className="logo-image"
          />
        </div>
        <div className="logo-container">
          <Image
            src="/images/lyft.png"
            alt="aws"
            layout="responsive"
            width={151}
            height={62}
            className="logo-image"
          />
        </div>
        <div className="logo-container">
          <Image
            src="/images/pen.png"
            alt="reddit"
            layout="responsive"
            width={151}
            height={72}
            className="logo-image"
          />
        </div>
        <div className="logo-container">
          <Image
            src="/images/stripe.png"
            alt="reddit"
            layout="responsive"
            width={151}
            height={72}
            className="logo-image"
          />
        </div>
        <div className="logo-container">
          <Image
            src="/images/aws.png"
            alt="reddit"
            layout="responsive"
            width={151}
            height={72}
            className="logo-image"
          />
        </div>
        <div className="logo-container">
          <Image
            src="/images/reddit.png"
            alt="reddit"
            layout="responsive"
            width={151}
            height={72}
            className="logo-image"
          />
        </div>
      </div>
    </div>
  );
}