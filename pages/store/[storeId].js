/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable react/button-has-type */

import Image from 'next/image';
import Link from 'next/link';
import { useState, useEffect } from 'react';
import LocationOnRoundedIcon from '@mui/icons-material/LocationOnRounded';
import AccessTimeFilledIcon from '@mui/icons-material/AccessTimeFilled';
import CallRoundedIcon from '@mui/icons-material/CallRounded';
import { ToastContainer } from 'react-toastify';
import Layout from '../../modules/layout';
import StoreSwiper from '../../components/storeSwiper';
import StoreItem from '../../components/storeItem';
import StoreStaff from '../../components/storeStaff';
import Facebook from '../../src/images/facebook-logo.svg';
import Instagram from '../../src/images/instagram-logo.svg';
import Line from '../../src/images/LINE-logo.svg';
import 'react-toastify/dist/ReactToastify.css';
import MemberReserve from '../../components/memberReserve';

export async function getServerSideProps({ params }) {
  const store = params.storeId;
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
  const [reserveInf, setReserveInf] = useState({});

  console.log(store);
  useEffect(() => {
    setReserveInf((prevState) => ({
      ...prevState,
      StoreId: store.StoreId,
    }));
  }, []);
  return (
    <div className="relative ">
      <Layout title={`邦尼約克-${store?.StoreName}`}>
        <div className=" relative">
          {reserve && (
            <MemberReserve
              SetReserve={SetReserve}
              setReserveInf={setReserveInf}
              reserveInf={reserveInf}
            />
          )}

          <div className="mb-16  lg:container lg:mx-auto lg:aspect-[21/9] lg:w-10/12  3xl:aspect-[21/9] ">
            <StoreSwiper photo={store?.BannerPath} />
          </div>
          <div className="container   mx-auto flex w-full lg:w-10/12">
            <div className=" top-96 mx-auto w-2/5">
              <h2 className="mb-2 text-4xl font-bold">{store?.StoreName}</h2>
              <div className="mb-2 flex gap-1">
                <AccessTimeFilledIcon sx={{ color: '#535353' }} />
                <div>
                  <p className="mb-2">
                    平日：{store.WeekdayStartTime}~{store.WeekdayEndTime}
                  </p>
                  <p className="mb-2">
                    假日：{store.HolidayStartTime}~{store.HolidayEndTime}
                  </p>
                </div>
              </div>
              <div className="mb-2 flex gap-1">
                <LocationOnRoundedIcon sx={{ color: '#535353' }} />
                <p className="mb-2">{store.Address}</p>
              </div>
              <div className="mb-8 flex gap-1">
                <CallRoundedIcon sx={{ color: '#535353' }} />
                <p className="mb-2">電話：{store.CellphoneNumber}</p>
              </div>
              <div className="mb-10  flex gap-3">
                <Link href={store.LineLink}>
                  <a>
                    <Image src={Line} width="40" height="40" />
                  </a>
                </Link>
                <Link href={store.FacebookLink}>
                  <a>
                    <Image src={Facebook} width="40" height="40" />
                  </a>
                </Link>
                <Link href={store.InstagramLink}>
                  <a>
                    <Image src={Instagram} width="40" height="40" />
                  </a>
                </Link>
              </div>
              <div className="w-10/12 rounded-lg border-2 border-unSelect bg-white p-4 shadow-lg">
                {store.Description}
              </div>
            </div>

            <div className="mb-4 w-3/5 justify-center">
              <div className="mb-10 text-center">
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
                    setReserveInf={setReserveInf}
                  />
                )}
                {page === 'staff' && (
                  <StoreStaff
                    StaffInformation={store?.AllStaffInformation}
                    staffTitle={store.StaffTitle}
                  />
                )}
              </div>
            </div>
          </div>
        </div>
        <ToastContainer />
      </Layout>
    </div>
  );
};

export default storeId;
