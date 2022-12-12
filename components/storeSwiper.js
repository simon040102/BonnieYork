/* eslint-disable no-unused-vars */
/* eslint-disable import/no-unresolved */
import React from 'react';
// import Swiper core and required modules
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import { useRouter } from 'next/router';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

const storeSwiper = ({ photo }) => {
  const router = useRouter().pathname;
  console.log(router);
  console.log(photo);

  return (
    <Swiper
      navigation
      modules={[Navigation]}
      className="storeSwiper swiper-button-black "
    >
      {photo?.Banner1 && (
        <SwiperSlide>
          <img
            alt=""
            src={photo?.Banner1}
            className={`mx-auto aspect-video rounded-t-card object-cover ${
              router === '/store/[storeId]' && ' rounded-b-card '
            }`}
          />
        </SwiperSlide>
      )}
      {photo?.Banner2 && (
        <SwiperSlide>
          <img
            alt=""
            src={photo?.Banner2}
            className={`mx-auto aspect-video rounded-t-card object-cover ${
              router === '/store/[storeId]' && ' rounded-b-card '
            }`}
          />
        </SwiperSlide>
      )}
      {photo?.Banner3 && (
        <SwiperSlide>
          <img
            alt=""
            src={photo?.Banner3}
            className={`mx-auto aspect-video rounded-t-card object-cover ${
              router === '/store/[storeId]' && ' rounded-b-card '
            }`}
          />
        </SwiperSlide>
      )}
      {photo?.Banner4 && (
        <SwiperSlide>
          <img
            alt=""
            src={photo?.Banner4}
            className={`mx-auto aspect-video rounded-t-card object-cover ${
              router === '/store/[storeId]' && ' rounded-b-card '
            }`}
          />
        </SwiperSlide>
      )}
      {photo?.Banner5 && (
        <SwiperSlide>
          <img
            alt=""
            src={photo?.Banner5}
            className={`mx-auto aspect-video rounded-t-card object-cover ${
              router === '/store/[storeId]' && ' rounded-b-card '
            }`}
          />
        </SwiperSlide>
      )}
    </Swiper>
  );
};

export default storeSwiper;
