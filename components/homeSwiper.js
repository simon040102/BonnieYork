/* eslint-disable consistent-return */
import { Swiper, SwiperSlide } from 'swiper/react';
import { useEffect, useState } from 'react';
import Link from 'next/link';
import axios from 'axios';
import StoreSwiper from './storeSwiper';
import { useThem } from '../modules/context';

// Import Swiper styles
// eslint-disable-next-line import/no-unresolved
import 'swiper/css';
// eslint-disable-next-line import/no-unresolved
import 'swiper/css/pagination';
// import required modules
// eslint-disable-next-line import/order
import { Pagination } from 'swiper';

function HomeSwiper() {
  const { apiUrl } = useThem();
  const [stores, setStores] = useState([]);

  const showStore = () =>
    stores.map((item, index) => {
      if (index > 4) return;
      const showItem = () =>
        item?.BusinessItem.map((items, index1) => {
          if (index1 > 1) return;

          return (
            <li className="mr-4 flex items-center justify-center rounded-full bg-secondary px-4 text-white">
              {items.ItemName}
            </li>
          );
        });
      return (
        <SwiperSlide className="rounded-card bg-white ">
          <StoreSwiper photo={item?.BannerPath} />

          <div className="px-6 py-6">
            <p className="text-xl text-secondary">{item.StoreName}</p>
            <p className="mb-4">{item.Address}</p>
            <ul className="mb-8 flex flex-wrap gap-2">{showItem()}...</ul>
            <div className="w-full text-end text-success">
              <Link
                href={`https://bonnie-york.vercel.app/store/${item.StoreId}`}
              >
                MORE
              </Link>
            </div>
          </div>
        </SwiperSlide>
      );
    });

  useEffect(() => {
    axios
      .get(`${apiUrl}/store/getallstore`)
      .then((res) => {
        setStores(res.data);
      })
      .catch(() => {});
  }, []);
  return (
    <Swiper
      slidesPerView="auto"
      spaceBetween={30}
      pagination={{
        clickable: true,
      }}
      modules={[Pagination]}
      className="HomeSwiper w-full"
    >
      {showStore()}
    </Swiper>
  );
}

export default HomeSwiper;
