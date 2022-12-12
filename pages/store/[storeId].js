/* eslint-disable react/button-has-type */

import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import LocationOnRoundedIcon from '@mui/icons-material/LocationOnRounded';
import AccessTimeFilledIcon from '@mui/icons-material/AccessTimeFilled';
import CallRoundedIcon from '@mui/icons-material/CallRounded';
import Layout from '../../modules/layout';
import StoreSwiper from '../../components/storeSwiper';
import StoreItem from '../../components/storeItem';
import StoreStaff from '../../components/storeStaff';
import Facebook from '../../src/images/facebook-logo.svg';
import Instagram from '../../src/images/instagram-logo.svg';
import Line from '../../src/images/LINE-logo.svg';
import MemberReserve from '../../components/memberReserve';

export async function getServerSideProps({ params }) {
  const store = params.storeId;
  console.log(store);
  const res = await fetch(
    `https://bonnieyork.rocket-coding.com/store/GetTheStore?storeId=${store}`
  );
  const inf = await res.json();

  return {
    props: {
      inf,
    },
  };
}
const storeId = ({ inf }) => {
  const [store] = useState(inf[0]);
  const [page, setPage] = useState('item');
  const [reserve, SetReserve] = useState(false);

  console.log(store);
  return (
    <div>
      <Layout title={`邦尼約克-${store?.StoreName}`}>
        <div className=" relative">
          {reserve && <MemberReserve SetReserve={SetReserve} />}

          <div className="mb-16 lg:container lg:mx-auto  lg:w-10/12 ">
            <StoreSwiper photo={store?.BannerPath} />
          </div>
          <div className="container mx-auto flex w-full lg:w-10/12">
            <div className="w-2/5">
              <h2 className="mb-2 text-4xl font-bold">{store?.StoreName}</h2>
              <div className="mb-2 flex gap-1">
                <AccessTimeFilledIcon sx={{ color: '#535353' }} />
                <div>
                  <p className="mb-2">平日：10:00~12:00 14:00~20:00</p>
                  <p className="mb-2">假日：10:00~12:00 14:00~21:00</p>
                </div>
              </div>
              <div className="mb-2 flex gap-1">
                <LocationOnRoundedIcon sx={{ color: '#535353' }} />
                <p className="mb-2">台北市大安區信義路123號</p>
              </div>
              <div className="mb-8 flex gap-1">
                <CallRoundedIcon sx={{ color: '#535353' }} />
                <p className="mb-2">電話：0912345678</p>
              </div>
              <div className="flex  gap-3">
                <Link href="/">
                  <a>
                    <Image src={Line} width="40" height="40" />
                  </a>
                </Link>
                <Link href="/">
                  <a>
                    <Image src={Facebook} width="40" height="40" />
                  </a>
                </Link>
                <Link href="/">
                  <a>
                    <Image src={Instagram} width="40" height="40" />
                  </a>
                </Link>
              </div>
            </div>

            <div className="mb-4 w-2/3 justify-center">
              <div className="mb-4 text-center">
                <button
                  className={` ${
                    page === 'item'
                      ? 'border-b-2 text-secondary'
                      : ' text-unSelect'
                  } mx-8`}
                  onClick={() => setPage('item')}
                >
                  預約項目
                </button>
                <button
                  className={` ${
                    page === 'staff'
                      ? 'border-b-2 text-secondary'
                      : ' text-unSelect'
                  } mx-8`}
                  onClick={() => setPage('staff')}
                >
                  員工資訊
                </button>
              </div>
              <div className="container mx-auto flex justify-center">
                {page === 'item' && (
                  <StoreItem
                    SetReserve={SetReserve}
                    item={store.BusinessItem}
                  />
                )}
                {page === 'staff' && <StoreStaff />}
              </div>
            </div>
          </div>
        </div>
      </Layout>
    </div>
  );
};

export default storeId;
