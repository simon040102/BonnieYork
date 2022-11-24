import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import Image from 'next/image';
import Store1 from '../src/images/store01.jpg';
import Store2 from '../src/images/store02.jpg';
import Store3 from '../src/images/store03.jpg';
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
        className="HomeSwiper w-full"
      >
        <SwiperSlide className="rounded-card bg-white ">
          <Image
            className="h-52 w-full rounded-t-card"
            src={Store1}
            objectFit="cover"
            height={1300}
            layout="responsive"
          />
          <div className="px-6 py-6">
            <p>xxxhair Salon</p>
            <p className="mb-2">台北大安</p>
            <ul className="mb-8 flex">
              <li className="mr-4 flex items-center justify-center rounded-full bg-secondary px-4 text-white">
                美髮
              </li>
              <li className="mr-4 flex items-center justify-center rounded-full bg-secondary px-4 text-white">
                染髮
              </li>
              <li className="mr-4 flex items-center justify-center rounded-full bg-secondary px-4 text-white">
                挑染
              </li>
            </ul>
            <div className="w-full text-end text-success">
              <Link href="/">MORE</Link>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className="rounded-card bg-white ">
          <Image
            className="h-52 w-full rounded-t-card"
            src={Store2}
            objectFit="cover"
            height={1300}
            layout="responsive"
          />
          <div className="px-6 py-6">
            <p>xxxhair Salon</p>
            <p className="mb-2">台北大安</p>
            <ul className="mb-8 flex">
              <li className="mr-4 flex items-center justify-center rounded-full bg-secondary px-4 text-white">
                美髮
              </li>
              <li className="mr-4 flex items-center justify-center rounded-full bg-secondary px-4 text-white">
                染髮
              </li>
              <li className="mr-4 flex items-center justify-center rounded-full bg-secondary px-4 text-white">
                挑染
              </li>
            </ul>
            <div className="w-full text-end text-success">
              <Link href="/">MORE</Link>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className="rounded-card bg-white">
          <Image
            className="h-52 w-full rounded-t-card"
            src={Store3}
            objectFit="cover"
            height={800}
            layout="responsive"
          />
          <div className="px-6 py-6">
            <p>xxxhair Salon</p>
            <p className="mb-2">台北大安</p>
            <ul className="mb-8 flex">
              <li className="mr-4 flex items-center justify-center rounded-full bg-secondary px-4 text-white">
                美髮
              </li>
              <li className="mr-4 flex items-center justify-center rounded-full bg-secondary px-4 text-white">
                染髮
              </li>
              <li className="mr-4 flex items-center justify-center rounded-full bg-secondary px-4 text-white">
                挑染
              </li>
            </ul>
            <div className="w-full text-end text-success">
              <Link href="/">MORE</Link>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className="rounded-card bg-white">
          <Image
            className="h-52 w-full rounded-t-card"
            src={Store1}
            objectFit="cover"
            height={1300}
            layout="responsive"
          />
          <div className="px-6 py-6">
            <p>xxxhair Salon</p>
            <p className="mb-2">台北大安</p>
            <ul className="mb-8 flex">
              <li className="mr-4 flex items-center justify-center rounded-full bg-secondary px-4 text-white">
                美髮
              </li>
              <li className="mr-4 flex items-center justify-center rounded-full bg-secondary px-4 text-white">
                染髮
              </li>
              <li className="mr-4 flex items-center justify-center rounded-full bg-secondary px-4 text-white">
                挑染
              </li>
            </ul>
            <div className="w-full text-end text-success">
              <Link href="/">MORE</Link>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className="rounded-card bg-white">
          <Image
            className="h-52 w-full rounded-t-card"
            src={Store2}
            objectFit="cover"
            height={1300}
            layout="responsive"
          />
          <div className="px-6 py-6">
            <p>xxxhair Salon</p>
            <p className="mb-2">台北大安</p>
            <ul className="mb-8 flex">
              <li className="mr-4 flex items-center justify-center rounded-full bg-secondary px-4 text-white">
                美髮
              </li>
              <li className="mr-4 flex items-center justify-center rounded-full bg-secondary px-4 text-white">
                染髮2
              </li>
              <li className="mr-4 flex items-center justify-center rounded-full bg-secondary px-4 text-white">
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
};

export default HomeSwiper;
