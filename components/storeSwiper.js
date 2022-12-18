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
            className={`mx-auto ${
              (router === '/' ||
                router === '/search' ||
                router === '/favorite') &&
              'rounded-t-card'
            }   object-cover ${
              router === '/store/[storeId]' &&
              'aspect-video rounded-none lg:aspect-[21/9] lg:rounded-card 2xl:aspect-[21/9]'
            }`}
          />
        </SwiperSlide>
      )}
      {photo?.Banner2 && (
        <SwiperSlide>
          <img
            alt=""
            src={photo?.Banner2}
            className={`mx-auto  ${
              (router === '/' ||
                router === '/search' ||
                router === '/favorite') &&
              'h-60 rounded-t-card'
            }  object-cover ${
              router === '/store/[storeId]' &&
              'aspect-video rounded-none lg:aspect-[21/9] lg:rounded-card 2xl:aspect-[21/9]'
            }`}
          />
        </SwiperSlide>
      )}
      {photo?.Banner3 && (
        <SwiperSlide>
          <img
            alt=""
            src={photo?.Banner3}
            className={`mx-auto ${
              (router === '/' ||
                router === '/search' ||
                router === '/favorite') &&
              'rounded-t-card'
            }  object-cover ${
              router === '/store/[storeId]' &&
              'aspect-video rounded-none lg:aspect-[21/9] lg:rounded-card 2xl:aspect-[21/9]'
            }`}
          />
        </SwiperSlide>
      )}
      {photo?.Banner4 && (
        <SwiperSlide>
          <img
            alt=""
            src={photo?.Banner4}
            className={`mx-auto ${
              (router === '/' ||
                router === '/search' ||
                router === '/favorite') &&
              'rounded-t-card'
            }  object-cover ${
              router === '/store/[storeId]' &&
              'aspect-video rounded-none lg:aspect-[21/9] lg:rounded-card 2xl:aspect-[21/9]'
            }`}
          />
        </SwiperSlide>
      )}
      {photo?.Banner5 && (
        <SwiperSlide>
          <img
            alt=""
            src={photo?.Banner5}
            className={`mx-auto ${
              (router === '/' ||
                router === '/search' ||
                router === '/favorite') &&
              'rounded-t-card'
            }   object-cover ${
              router === '/store/[storeId]' &&
              'aspect-video rounded-none lg:aspect-[21/9] lg:rounded-card 2xl:aspect-[21/9]'
            }`}
          />
        </SwiperSlide>
      )}
    </Swiper>
  );
};

export default storeSwiper;
