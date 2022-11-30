/* eslint-disable no-unused-vars */
/* eslint-disable import/no-unresolved */
import React from 'react';
// import Swiper core and required modules
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import StorePhoto1 from '../src/images/search1.jpg';
import StorePhoto2 from '../src/images/search2.jpg';
import StorePhoto3 from '../src/images/search3.jpg';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

const storeSwiper = () => (
  <Swiper
    navigation
    modules={[Navigation]}
    className="storeSwiper swiper-button-black "
  >
    <SwiperSlide>
      <Image
        layout="responsive"
        src={StorePhoto1}
        objectFit="contain"
        className=" rounded-t-card"
      />
    </SwiperSlide>
    <SwiperSlide>
      <Image
        layout="responsive"
        className="w-full rounded-t-card object-fill"
        src={StorePhoto2}
        objectFit="contain"
      />
    </SwiperSlide>
    <SwiperSlide>
      <Image
        layout="responsive"
        className="w-full rounded-t-card object-fill"
        src={StorePhoto3}
        objectFit="contain"
      />
    </SwiperSlide>
  </Swiper>
);

export default storeSwiper;
