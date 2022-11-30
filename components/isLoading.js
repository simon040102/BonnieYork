import React from 'react';
import Image from 'next/image';
import IsLoading from '../src/images/isLoading.png';

const isLoading = () => {
  return (
    <div className=" absolute top-0  mt-20 h-screen w-screen bg-black/30">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 transform">
        <Image
          src={IsLoading}
          objectFit="contain"
          width={100}
          height={100}
          className="animate-spin-slow"
        />
        <h1 className=" animate-bounce text-center text-2xl text-white">
          Loading...
        </h1>
      </div>
    </div>
  );
};

export default isLoading;
