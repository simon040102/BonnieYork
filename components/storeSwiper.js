import React from 'react'
// import Swiper core and required modules
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import Image from 'next/image';
import StorePhoto1 from '../src/images/search1.jpg';
import StorePhoto2 from '../src/images/search2.jpg';
import StorePhoto3 from '../src/images/search3.jpg';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

const storeSwiper = () => {
  return (
    <>
      <Swiper
        navigation={true}
        modules={[Navigation]}
        className="storeSwiper swiper-button-black "
      >
        <SwiperSlide>
          <Image className="w-full object-fill" src={StorePhoto1} />
        </SwiperSlide>
        <SwiperSlide>
          <Image className="w-full object-fill" src={StorePhoto2} />
        </SwiperSlide>
        <SwiperSlide>
          <Image className="w-full object-fill" src={StorePhoto3} />
        </SwiperSlide>
      </Swiper>
    </>
  );
}

export default storeSwiper