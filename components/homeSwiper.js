import React from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import Image from 'next/image';
import Store1 from '../src/images/store01.jpg'
import Store2 from '../src/images/store02.jpg'
import Store3 from '../src/images/store03.jpg'
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
        slidesPerView={'3'}
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="HomeSwiper "
      >
        <SwiperSlide className="bg-white rounded-card ">
          <Image
            className="w-full h-52 rounded-t-card"
            src={Store1}
            objectFit="cover"
            height={1300}
            layout="responsive"
          />
          <div className="px-6 py-6">
            <p>xxxhair Salon</p>
            <p className="mb-2">台北大安</p>
            <ul className="flex mb-8">
              <li className="bg-secondary rounded-full text-white px-4 mr-4 flex items-center justify-center">
                美髮
              </li>
              <li className="bg-secondary rounded-full text-white px-4 mr-4 flex items-center justify-center">
                染髮
              </li>
              <li className="bg-secondary rounded-full text-white px-4 mr-4 flex items-center justify-center">
                挑染
              </li>
            </ul>
            <div className="w-full text-end text-success">
              <Link href="/">MORE</Link>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className="bg-white rounded-card ">
          <Image
            className="w-full h-52 rounded-t-card"
            src={Store2}
            objectFit="cover"
            height={1300}
            layout="responsive"
          />
          <div className="px-6 py-6">
            <p>xxxhair Salon</p>
            <p className="mb-2">台北大安</p>
            <ul className="flex mb-8">
              <li className="bg-secondary rounded-full text-white px-4 mr-4 flex items-center justify-center">
                美髮
              </li>
              <li className="bg-secondary rounded-full text-white px-4 mr-4 flex items-center justify-center">
                染髮
              </li>
              <li className="bg-secondary rounded-full text-white px-4 mr-4 flex items-center justify-center">
                挑染
              </li>
            </ul>
            <div className="w-full text-end text-success">
              <Link href="/">MORE</Link>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className="bg-white rounded-card">
          <Image
            className="w-full h-52 rounded-t-card"
            src={Store3}
            objectFit="cover"
            height={800}
            layout="responsive"
          />
          <div className="px-6 py-6">
            <p>xxxhair Salon</p>
            <p className="mb-2">台北大安</p>
            <ul className="flex mb-8">
              <li className="bg-secondary rounded-full text-white px-4 mr-4 flex items-center justify-center">
                美髮
              </li>
              <li className="bg-secondary rounded-full text-white px-4 mr-4 flex items-center justify-center">
                染髮
              </li>
              <li className="bg-secondary rounded-full text-white px-4 mr-4 flex items-center justify-center">
                挑染
              </li>
            </ul>
            <div className="w-full text-end text-success">
              <Link href="/">MORE</Link>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className="bg-white rounded-card">
          <Image
            className="w-full h-52 rounded-t-card"
            src={Store1}
            objectFit="cover"
            height={1300}
            layout="responsive"
          />
          <div className="px-6 py-6">
            <p>xxxhair Salon</p>
            <p className="mb-2">台北大安</p>
            <ul className="flex mb-8">
              <li className="bg-secondary rounded-full text-white px-4 mr-4 flex items-center justify-center">
                美髮
              </li>
              <li className="bg-secondary rounded-full text-white px-4 mr-4 flex items-center justify-center">
                染髮
              </li>
              <li className="bg-secondary rounded-full text-white px-4 mr-4 flex items-center justify-center">
                挑染
              </li>
            </ul>
            <div className="w-full text-end text-success">
              <Link href="/">MORE</Link>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className="bg-white rounded-card">
          <Image
            className="w-full h-52 rounded-t-card"
            src={Store2}
            objectFit="cover"
            height={1300}
            layout="responsive"
          />
          <div className="px-6 py-6">
            <p>xxxhair Salon</p>
            <p className="mb-2">台北大安</p>
            <ul className="flex mb-8">
              <li className="bg-secondary rounded-full text-white px-4 mr-4 flex items-center justify-center">
                美髮
              </li>
              <li className="bg-secondary rounded-full text-white px-4 mr-4 flex items-center justify-center">
                染髮2
              </li>
              <li className="bg-secondary rounded-full text-white px-4 mr-4 flex items-center justify-center">
                挑染
              </li>
            </ul>
            <div className="w-full text-end text-success">
              <Link href="/">MORE</Link>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </>
  );
}

export default HomeSwiper