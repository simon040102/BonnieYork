import React from 'react';
import Layout from '../../modules/layout';
import { useRouter } from 'next/router';
import StoreSwiper from '../../components/storeSwiper';
import Head from 'next/head';
import { useState } from 'react';
import StoreItem from '../../components/storeItem';
import StoreStaff from '../../components/storeStaff';
import Facebook from '../../src/images/facebook1.svg';
import Instagram from '../../src/images/instagram1.svg';
import Line from '../../src/images/Line1.svg';
import Image from 'next/image';
import Link from 'next/link';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import MemberReserve from '../../components/memberReserve';

const storeId = () => {
  const router = useRouter();
  const store = router.query.storeId;
  const [page, setPage] = useState('item');
 const [reserve, SetReserve] = useState(false);
  return (
    <div>
      <Head>
        <title>邦尼約克Bonnie York</title>
      </Head>
      <Layout>
        <div className=" relative">
          {reserve && <MemberReserve SetReserve={SetReserve} />}

          <div className="lg:container lg:mx-auto mb-4">
            <StoreSwiper />
          </div>
          <div className="container mx-auto text-center flex justify-between">
            <div className="flex w-1/3 gap-3">
              <Link className="w-16" href="/">
                <Image src={Facebook} />
              </Link>
              <Link className="w-16" href="/">
                <Image src={Instagram} />
              </Link>
              <Link className="w-16" href="/">
                <Image src={Line} />
              </Link>
            </div>
            <div className="w-1/3">
              <h2 className="text-4xl mb-2">xxxHairSalon</h2>
              <p className="mb-2">台北市大安區信義路123號</p>
              <p className="mb-2">平日：10:00~12:00 14:00~20:00</p>
              <p className="mb-2">假日：10:00~12:00 14:00~21:00</p>
              <p className="mb-2">電話：0912345678</p>
            </div>
            <div className="w-1/3 flex justify-end items-start">
              <button className=" bg-gray-400 text-white w-40 h-10">
                <FavoriteBorderOutlinedIcon className="mr-1" />
                加入我的最愛
              </button>
            </div>
          </div>
          <div className="flex justify-center mb-4">
            <button
              className={` ${
                page == 'item' ? 'text-black' : 'text-gray-500'
              } mx-8`}
              onClick={() => setPage('item')}
            >
              預約項目
            </button>
            <button
              className={` ${
                page == 'staff' ? 'text-black' : 'text-gray-500'
              } mx-8`}
              onClick={() => setPage('staff')}
            >
              員工資訊
            </button>
          </div>
          <div className="container mx-auto flex justify-center">
            {page == 'item' && <StoreItem SetReserve={SetReserve} />}
            {page == 'staff' && <StoreStaff />}
          </div>
        </div>
      </Layout>
    </div>
  );
};

export default storeId;
