/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable react/button-has-type */

import Image from 'next/image';
import Link from 'next/link';
import { useState, useEffect } from 'react';
import LocationOnRoundedIcon from '@mui/icons-material/LocationOnRounded';
import AccessTimeFilledIcon from '@mui/icons-material/AccessTimeFilled';
import CallRoundedIcon from '@mui/icons-material/CallRounded';
import { ToastContainer } from 'react-toastify';
import { useRouter } from 'next/router';
import FavoriteIcon from '@mui/icons-material/Favorite';
import axios from 'axios';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import Layout from '../../modules/layout';
import StoreSwiper from '../../components/storeSwiper';
import StoreItem from '../../components/storeItem';
import StoreStaff from '../../components/storeStaff';
import Facebook from '../../src/images/facebook-logo.svg';
import Instagram from '../../src/images/instagram-logo.svg';
import Line from '../../src/images/LINE-logo.svg';
import 'react-toastify/dist/ReactToastify.css';
import { useThem } from '../../modules/context';
import MemberReserve from '../../components/memberReserve';

export async function getServerSideProps({ params }) {
  const store = params.storeId;
  const res = await fetch(
    `https://bonnieyork.rocket-coding.com/store/GetTheStore?storeId=${store}`
  );
  const inf = await res.json();
  if (inf.Message === '無此店家ID') {
    return {
      notFound: true,
    };
  }
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
  const router = useRouter();
  const [describe, setDescribe] = useState('');
  const id = router.query.storeId;
  const [favorite, setFavorite] = useState(false);
  const { data, apiUrl } = useThem();

  const checkLike = () => {
    const Authorization = localStorage.getItem('BonnieYork');
    const config = {
      method: 'get',
      url: `${apiUrl}/customer/ismyfavorite?storeId=${store.StoreId}`,
      headers: {
        Authorization,
      },
    };
    axios(config)
      .then(() => {
        setFavorite(true);
      })
      .catch(() => {
        setFavorite(false);
      });
  };

  const handleLike = () => {
    const Authorization = localStorage.getItem('BonnieYork') || '';
    const config = {
      method: !favorite ? 'post' : 'delete',
      url: `${apiUrl}/customer/${
        !favorite ? 'addmyfavorite' : 'cancelmyfavorite'
      }`,
      headers: {
        Authorization,
      },
      data: { storeId: store.StoreId },
    };
    axios(config)
      .then(() => {
        checkLike();
      })
      .catch(() => {
        checkLike();
      });
  };

  useEffect(() => {
    if (store.StoreId) {
      checkLike();
    }
    setReserveInf((prevState) => ({
      ...prevState,
      StoreId: store.StoreId,
    }));
  }, [store.StoreId]);
  return (
    <div className="relative ">
      <Layout title={`邦尼約克-${store?.StoreName}`}>
        {store?.PhoneNumber !== null ||
        store?.StaffTitle !== null ||
        store?.BusinessItem.length !== 0 ||
        store?.AllStaffInformation.length !== 0 ? (
          <div className=" relative">
            {reserve && (
              <MemberReserve
                SetReserve={SetReserve}
                setReserveInf={setReserveInf}
                reserveInf={reserveInf}
                describe={describe}
              />
            )}

            <div className="3xl:aspect-[21/9]  mb-16 lg:container lg:mx-auto lg:aspect-[21/9]  lg:w-10/12 ">
              <StoreSwiper photo={store?.BannerPath} />
            </div>
            <div className="container mx-auto  block w-full md:flex lg:w-10/12">
              <div className=" top-96 mx-auto mb-16 flex w-full justify-around md:mb-0 md:block md:w-2/5">
                <div>
                  <div className="flex justify-around">
                    <h2 className="mb-2 text-center text-4xl font-bold">
                      {store?.StoreName}
                    </h2>
                  </div>
                  <div className="mb-2 flex  gap-1 md:justify-start">
                    <AccessTimeFilledIcon sx={{ color: '#535353' }} />
                    <div>
                      <p className="mb-2">
                        平日：{store?.WeekdayStartTime}~{store?.WeekdayEndTime}{' '}
                        休息：{store?.WeekdayBreakStart}~
                        {store?.WeekdayBreakEnd}
                      </p>
                      <p className="mb-2">
                        假日：{store?.HolidayStartTime}~{store?.HolidayEndTime}{' '}
                        休息：{store?.HolidayBreakStart}~
                        {store?.HolidayBreakEnd}
                      </p>
                    </div>
                  </div>
                  <div className="mb-2 flex  gap-1 md:justify-start">
                    <LocationOnRoundedIcon sx={{ color: '#535353' }} />
                    <p className="mb-2">{store?.Address}</p>
                  </div>
                  <div className="mb-8 flex  gap-1 md:justify-start">
                    <CallRoundedIcon sx={{ color: '#535353' }} />
                    <p className="mb-2">電話：{store?.CellphoneNumber}</p>
                  </div>
                  <div className="mb-4 flex  gap-3">
                    <Link
                      href={store?.LineLink !== null ? store?.LineLink : '/'}
                    >
                      <a>
                        <Image src={Line} width="40" height="40" />
                      </a>
                    </Link>
                    <Link
                      href={
                        store?.FacebookLink !== null ? store?.FacebookLink : '/'
                      }
                    >
                      <a>
                        <Image src={Facebook} width="40" height="40" />
                      </a>
                    </Link>
                    <Link
                      href={
                        store?.InstagramLink !== null
                          ? store?.InstagramLink
                          : '/'
                      }
                    >
                      <a>
                        <Image src={Instagram} width="40" height="40" />
                      </a>
                    </Link>
                  </div>
                  <div className="mb-10  flex h-10 w-52 justify-center rounded-lg border-2 border-secondary bg-footerL">
                    <button
                      onClick={() => {
                        handleLike();
                      }}
                    >
                      {favorite ? (
                        <div className="flex gap-2">
                          <FavoriteIcon sx={{ color: '#FF6347' }} />
                          <p>已加入我的最愛</p>
                        </div>
                      ) : (
                        <div className="flex gap-2">
                          <FavoriteBorderOutlinedIcon />
                          <p>加入我的最愛</p>
                        </div>
                      )}
                    </button>
                  </div>
                </div>

                <div className=" h-fit w-2/5 rounded-lg border-2  border-unSelect bg-white p-4 shadow-lg  md:w-10/12">
                  {store?.Description}
                </div>
              </div>

              <div className="mb-4 w-full justify-center md:w-3/5">
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
                      item={store?.BusinessItem}
                      setReserveInf={setReserveInf}
                      setDescribe={setDescribe}
                    />
                  )}
                  {page === 'staff' && (
                    <StoreStaff
                      StaffInformation={store?.AllStaffInformation}
                      staffTitle={store?.StaffTitle}
                    />
                  )}
                </div>
              </div>
            </div>
          </div>
        ) : (
          <div className="mt-40 text-center text-4xl text-unSelect">
            {data.StoreId === Number(id) ? (
              <>
                <p className="leading-loose">
                  店舖資訊、預約項目、員工資訊要齊全才會顯示唷！
                </p>
                <Link href="/profile">
                  <a className=" leading-loose text-secondary underline">
                    趕快把資料補齊
                  </a>
                </Link>
              </>
            ) : (
              '店舖尚未開張'
            )}
          </div>
        )}
        <ToastContainer />
      </Layout>
    </div>
  );
};

export default storeId;
