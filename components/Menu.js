/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable react/button-has-type */
/* eslint-disable no-console */
import { useEffect, useState } from 'react';
import Image from 'next/image';
import { useRouter } from 'next/router';

import AOS from 'aos';
import 'aos/dist/aos.css';

import Link from 'next/link';
import { useThem } from '../modules/context';

import Profile from '../src/images/profile.png';

// eslint-disable-next-line react/function-component-definition
const Menu = () => {
  const [menu, setMenu] = useState(false);
  const { data } = useThem();
  const router = useRouter();

  const logout = () => {
    console.log(123);
    localStorage.removeItem('BonnieYork');
    router.push('/');
    router.reload(window.location.pathname);
  };

  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <div className="">
      <button className="flex items-center" onClick={() => setMenu(!menu)}>
        {data.HeadShot ? (
          <img
            src={data.HeadShot}
            alt=""
            className="h-8 w-8  rounded-full object-cover"
          />
        ) : (
          <Image
            objectFit="contain"
            width="30"
            height="30"
            src={Profile}
            className="rounded-full"
          />
        )}

        <p className="ml-2">{data?.name}</p>
      </button>
      {menu && (
        <div
          data-aos="fade-left"
          className="menu absolute top-menu right-0 h-screen w-96 overflow-auto border border-l-black bg-warning pb-20"
        >
          <div className="relative mx-auto bg-white py-10">
            <div className="mx-auto mb-3 h-52 w-52 rounded-full border-black">
              {data.HeadShot ? (
                <img
                  src={data.HeadShot}
                  alt=""
                  className=" h-52  w-52 rounded-full object-cover"
                />
              ) : (
                <Image
                  objectFit="contain"
                  src={Profile}
                  className="rounded-full"
                />
              )}
            </div>
            {/* <button className="bg-gray-100 absolute right-20 top-60 rounded-full border-black p-1 shadow-md">
              <Image src={Edit} />
            </button> */}
            <p className="text-center">{data?.name}</p>
            {data.status === 'staff' && (
              <p className="text-center text-2xl text-secondary">
                {data?.StoreName}
              </p>
            )}
          </div>
          <div className="pt-6">
            <h3 className="ml-2 mb-2 text-2xl font-bold">我的預約</h3>
            {data.status === 'staff' && (
              <ul>
                <li className="mb-3 bg-footerR px-5 py-3 text-xl text-white">
                  <Link href="/profile">
                    <a>個人資料</a>
                  </Link>
                </li>
                <li className="mb-3 bg-footerR px-5 py-3 text-xl text-white">
                  <Link href="/calendar">
                    <a>我的預約</a>
                  </Link>
                </li>
              </ul>
            )}

            {data.status === 'store' && (
              <ul>
                <li className="mb-3 bg-footerR px-5 py-3 text-xl text-white">
                  <Link href="/profile">
                    <a>店鋪資訊修改</a>
                  </Link>
                </li>
                <li className="mb-3 bg-footerR px-5 py-3 text-xl text-white">
                  <Link href="/calendar">
                    <a>行事曆/預約管理</a>
                  </Link>
                </li>
                <li className="mb-3 bg-footerR px-5 py-3 text-xl text-white">
                  <Link href="/staff">
                    <a>員工管理</a>
                  </Link>
                </li>
                <li className="mb-3 bg-footerR px-5 py-3 text-xl text-white">
                  <Link href="/">
                    <a>營業額</a>
                  </Link>
                </li>
              </ul>
            )}
            {data.status === 'member' && (
              <ul>
                <li className="mb-3 bg-footerR px-5 py-3 text-xl text-white">
                  <Link href="/profile">
                    <a>個人資料</a>
                  </Link>
                </li>
                <li className="mb-3 bg-footerR px-5 py-3 text-xl text-white">
                  <Link href="/reserve">
                    <a>我的預約</a>
                  </Link>
                </li>
                <li className="mb-3 bg-footerR px-5 py-3 text-xl text-white">
                  <Link href="/favorite">
                    <a>我的最愛</a>
                  </Link>
                </li>
              </ul>
            )}
            <ul>
              <li className="mb-3 bg-footerR px-5 py-3 text-xl text-white">
                <button onClick={logout}>登出</button>
              </li>
            </ul>
          </div>
        </div>
      )}
    </div>
  );
};

export default Menu;
