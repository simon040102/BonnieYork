import Image from 'next/image';
import Profile from '../src/images/profile.png';
import Edit from '../src/images/pencil.svg';
import Link from 'next/link';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect, useState } from 'react';
const Menu = (props) => {
  const { status } = props;
  const [menu, setMenu] = useState(false);
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <div className="">
      <button className="flex items-center" onClick={() => setMenu(!menu)}>
        <Image objectFit="contain" width="30" height="30" src={Profile} />
        <p className="ml-2">王小明</p>
      </button>
      {menu && (
        <div
          data-aos="fade-left"
          className={`menu absolute top-menu right-0 h-screen w-96 overflow-auto border border-l-black bg-warning pb-20`}
        >
          <div className="relative mx-auto bg-white py-10">
            <Image
              className="mx-auto mb-3 h-52 w-52 rounded-full border-black"
              src={Profile}
            />
            <button className="bg-gray-100 absolute right-20 top-60 rounded-full border-black p-1 shadow-md">
              <Image src={Edit} />
            </button>
            <p className="text-center">王大明</p>
            {status == 'staff' && <p className="text-center">美味蟹堡餐廳</p>}
          </div>
          <div className="pt-6">
            <h3 className="ml-2 mb-2 text-2xl font-bold">我的預約</h3>
            {status == 'staff' && (
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

            {status == 'store' && (
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
            {status == 'member' && (
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
                <Link href="/">
                  <a>登出</a>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      )}
    </div>
  );
};

export default Menu;
