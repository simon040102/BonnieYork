/* eslint-disable no-unused-vars */
/* eslint-disable import/no-unresolved */
import React from 'react';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import { useRouter } from 'next/router';
import Image from 'next/image';
import ImageWithHideOnError from '../modules/ImageWithHideOnError';

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
          <ImageWithHideOnError
            src={photo?.Banner1}
            layout="responsive"
            width="100%"
            height="55%"
            className={`mx-auto ${
              (router === '/' ||
                router === '/search' ||
                router === '/favorite') &&
              'rounded-t-card'
            }   object-cover ${
              router === '/store/[storeId]' &&
              'aspect-video h-[60%] rounded-none lg:aspect-[21/9] lg:rounded-card 2xl:aspect-[21/9]'
            }`}
          />
        </SwiperSlide>
      )}
      {photo?.Banner2 && (
        <SwiperSlide>
          <ImageWithHideOnError
            src={photo?.Banner2}
            layout="responsive"
            width="100%"
            height="55%"
            className={`mx-auto ${
              (router === '/' ||
                router === '/search' ||
                router === '/favorite') &&
              'rounded-t-card'
            }   object-cover ${
              router === '/store/[storeId]' &&
              'aspect-video h-[60%] rounded-none lg:aspect-[21/9] lg:rounded-card 2xl:aspect-[21/9]'
            }`}
          />
        </SwiperSlide>
      )}
      {photo?.Banner3 && (
        <SwiperSlide>
          <ImageWithHideOnError
            src={photo?.Banner3}
            layout="responsive"
            width="100%"
            height="55%"
            className={`mx-auto ${
              (router === '/' ||
                router === '/search' ||
                router === '/favorite') &&
              'rounded-t-card'
            }   object-cover ${
              router === '/store/[storeId]' &&
              'aspect-video h-[60%] rounded-none lg:aspect-[21/9] lg:rounded-card 2xl:aspect-[21/9]'
            }`}
          />
        </SwiperSlide>
      )}
      {photo?.Banner4 && (
        <SwiperSlide>
          <ImageWithHideOnError
            src={photo?.Banner4}
            layout="responsive"
            width="100%"
            height="55%"
            className={`mx-auto ${
              (router === '/' ||
                router === '/search' ||
                router === '/favorite') &&
              'rounded-t-card'
            }   object-cover ${
              router === '/store/[storeId]' &&
              'aspect-video h-[60%] rounded-none lg:aspect-[21/9] lg:rounded-card 2xl:aspect-[21/9]'
            }`}
          />
        </SwiperSlide>
      )}
      {photo?.Banner5 && (
        <SwiperSlide>
          <ImageWithHideOnError
            src={photo?.Banner5}
            layout="responsive"
            width="100%"
            height="55%"
            className={`mx-auto ${
              (router === '/' ||
                router === '/search' ||
                router === '/favorite') &&
              'rounded-t-card'
            }   object-cover ${
              router === '/store/[storeId]' &&
              'aspect-video h-[60%] rounded-none lg:aspect-[21/9] lg:rounded-card 2xl:aspect-[21/9]'
            }`}
          />
        </SwiperSlide>
      )}
    </Swiper>
  );
};

export default storeSwiper;
