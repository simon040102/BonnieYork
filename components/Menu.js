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
          className="menu absolute top-menu right-0 h-screen w-72 overflow-auto border border-unSelect bg-white pb-20"
        >
          <div className="relative mx-auto bg-white py-10">
            <div className="mx-auto mb-3 h-52 w-52 rounded-full ">
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

            <p className="text-center">{data?.name}</p>
            {data.status === 'staff' && (
              <p className="text-center text-2xl text-secondary">
                {data?.StoreName}
              </p>
            )}
          </div>
          <div>
            <h3 className="mb-2 bg-footerL py-1 pl-2 text-xl text-secondary">
              ????????????
            </h3>
            {data.status === 'staff' && (
              <ul>
                <li className="mb-3 border-b-2 border-b-secondary px-5 py-1 text-xl text-black">
                  <Link href="/profile">
                    <a>????????????</a>
                  </Link>
                </li>
                <li className="mb-3 border-b-2 border-b-secondary px-5 py-1 text-xl text-black">
                  <Link href="/calendar">
                    <a>????????????</a>
                  </Link>
                </li>
              </ul>
            )}

            {data.status === 'store' && (
              <ul>
                <li className="mb-3 border-b-2 border-b-secondary px-5 py-1 text-xl text-black">
                  <Link href="/profile">
                    <a>??????????????????</a>
                  </Link>
                </li>
                <li className="mb-3 border-b-2 border-b-secondary px-5 py-1 text-xl text-black">
                  <Link href="/calendar">
                    <a>?????????/????????????</a>
                  </Link>
                </li>
                <li className="mb-3 border-b-2 border-b-secondary px-5 py-1 text-xl text-black">
                  <Link href="/staff">
                    <a>????????????</a>
                  </Link>
                </li>
                <li className="mb-3 border-b-2 border-b-secondary px-5 py-1 text-xl text-black">
                  <Link href="/">
                    <a>?????????</a>
                  </Link>
                </li>
                <li className="mb-3 border-b-2 border-b-secondary px-5 py-1 text-xl text-black">
                  <Link
                    href={`https://bonnie-york.vercel.app/store/${data.StoreId}`}
                  >
                    <a>????????????</a>
                  </Link>
                </li>
              </ul>
            )}
            {data.status === 'member' && (
              <ul>
                <li className="mb-3 border-b-2 border-b-secondary px-5 py-1 text-xl text-black">
                  <Link href="/profile">
                    <a>????????????</a>
                  </Link>
                </li>
                <li className="mb-3 border-b-2 border-b-secondary px-5 py-1 text-xl text-black">
                  <Link href="/reserve">
                    <a>????????????</a>
                  </Link>
                </li>
                <li className="mb-3 border-b-2 border-b-secondary px-5 py-1 text-xl text-black">
                  <Link href="/favorite">
                    <a>????????????</a>
                  </Link>
                </li>
              </ul>
            )}
            <button
              className="mx-auto mt-10 mb-4 flex w-60 justify-center rounded-lg border-2 border-secondary py-2"
              onClick={logout}
            >
              ??????
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Menu;
