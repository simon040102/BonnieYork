import React from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import Image from 'next/image';
import Store1 from '../src/images/store1.png'
import Store2 from '../src/images/store2.png'
import Store3 from '../src/images/store3.png';
import Link from 'next/link';


// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
// import required modules
import { Pagination } from 'swiper';

const HomeSwiper = () => {
  return (
    <>
      <Swiper
        slidesPerView={'auto'}
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="HomeSwiper "
      >
        <SwiperSlide className="bg-white ">
          <Image className="w-full" src={Store1} />
          <div className="px-6">
            <p>xxxhair Salon</p>
            <p className="mb-2">台北大安</p>
            <ul className="flex mb-3">
              <li className="bg-gray-400 text-white w-20 mr-4 flex items-center justify-center">
                美髮
              </li>
              <li className="bg-gray-400 text-white w-20 mr-4 flex items-center justify-center">
                染髮
              </li>
              <li className="bg-gray-400 text-white w-20 mr-4 flex items-center justify-center">
                挑染
              </li>
            </ul>
            <div className="w-full text-end">
              <Link href="/">更多...</Link>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className="bg-white">
          <Image className="w-full" src={Store1} />
          <div className="px-6">
            <p>xxxhair Salon</p>
            <p className="mb-2">台北大安</p>
            <ul className="flex mb-3">
              <li className="bg-gray-400 text-white w-20 mr-4 flex items-center justify-center">
                美髮
              </li>
              <li className="bg-gray-400 text-white w-20 mr-4 flex items-center justify-center">
                染髮
              </li>
              <li className="bg-gray-400 text-white w-20 mr-4 flex items-center justify-center">
                挑染
              </li>
            </ul>
            <div className="w-full text-end">
              <Link href="/">更多...</Link>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className="bg-white">
          <Image className="w-full" src={Store1} />
          <div className="px-6">
            <p>xxxhair Salon</p>
            <p className="mb-2">台北大安</p>
            <ul className="flex mb-3">
              <li className="bg-gray-400 text-white w-20 mr-4 flex items-center justify-center">
                美髮
              </li>
              <li className="bg-gray-400 text-white w-20 mr-4 flex items-center justify-center">
                染髮
              </li>
              <li className="bg-gray-400 text-white w-20 mr-4 flex items-center justify-center">
                挑染
              </li>
            </ul>
            <div className="w-full text-end">
              <Link href="/">更多...</Link>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className="bg-white">
          <Image className="w-full" src={Store1} />
          <div className="px-6">
            <p>xxxhair Salon</p>
            <p className="mb-2">台北大安</p>
            <ul className="flex mb-3">
              <li className="bg-gray-400 text-white w-20 mr-4 flex items-center justify-center">
                美髮
              </li>
              <li className="bg-gray-400 text-white w-20 mr-4 flex items-center justify-center">
                染髮
              </li>
              <li className="bg-gray-400 text-white w-20 mr-4 flex items-center justify-center">
                挑染
              </li>
            </ul>
            <div className="w-full text-end">
              <Link href="/">更多...</Link>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className="bg-white">
          <Image className="w-full" src={Store1} />
          <div className="px-6">
            <p>xxxhair Salon</p>
            <p className="mb-2">台北大安</p>
            <ul className="flex mb-3">
              <li className="bg-gray-400 text-white w-20 mr-4 flex items-center justify-center">
                美髮
              </li>
              <li className="bg-gray-400 text-white w-20 mr-4 flex items-center justify-center">
                染髮
              </li>
              <li className="bg-gray-400 text-white w-20 mr-4 flex items-center justify-center">
                挑染
              </li>
            </ul>
            <div className="w-full text-end">
              <Link href="/">更多...</Link>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </>
  );
}

export default HomeSwiper