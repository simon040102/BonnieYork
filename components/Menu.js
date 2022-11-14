import Image from 'next/image'
import Profile from '../src/images/profile.png'
import Edit from '../src/images/pencil.svg';
import Link from 'next/link';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect, useState } from 'react';

const Menu = (props) => {
    const {status}=props
    const [menu,setMenu]=useState(false)
      useEffect(() => {
        AOS.init();
      }, []);
  return (
    <div className="">
      <button
        className="flex ml-8 items-center"
        onClick={() => {
          setMenu(!menu);
        }}
      >
        <Image className="mr-2" height={30} src={Profile} />
        <p>王小明</p>
      </button>
      {menu && (
        <div
          data-aos="fade-left"
          className={`menu absolute overflow-auto top-20 pb-20 right-0 bg-gray-400 h-screen w-96 border border-l-black`}
        >
          <div className="mx-auto relative bg-white py-10">
            <Image
              className="w-52 h-52 rounded-full border-black mx-auto mb-3"
              src={Profile}
            />
            <button className="absolute shadow-md border-black bg-gray-100 rounded-full p-1 right-20 top-60">
              <Image src={Edit} />
            </button>
            <p className="text-center">王大明</p>
            <p className="text-center">美味蟹堡餐廳</p>
          </div>
          <div className="pt-6">
            <h3 className="ml-2 text-2xl font-bold mb-2">我的預約</h3>
            {status == 'staff' && (
              <ul>
                <li className="bg-gray-50 px-5 py-3 text-xl mb-3">
                  <Link href="/profile">個人資料</Link>
                </li>
                <li className="bg-gray-50 px-5 py-3 text-xl mb-3">
                  <Link href="/reserve">我的預約</Link>
                </li>
                <li className="bg-gray-50 px-5 py-3 text-xl mb-3">
                  <Link href="/favorite">我的最愛</Link>
                </li>
              </ul>
            )}

            {status == 'store' && (
              <ul>
                <li className="bg-gray-50 px-5 py-3 text-xl mb-3">
                  <Link href="/profile">店鋪資訊修改</Link>
                </li>
                <li className="bg-gray-50 px-5 py-3 text-xl mb-3">
                  <Link href="/">行事曆/預約管理</Link>
                </li>
                <li className="bg-gray-50 px-5 py-3 text-xl mb-3">
                  <Link href="/staff">員工管理</Link>
                </li>
                <li className="bg-gray-50 px-5 py-3 text-xl mb-3">
                  <Link href="/">營業額</Link>
                </li>
              </ul>
            )}
            {status == 'member' && (
              <ul>
                <li className="bg-gray-50 px-5 py-3 text-xl mb-3">
                  <Link href="/profile">個人資料</Link>
                </li>
                <li className="bg-gray-50 px-5 py-3 text-xl mb-3">
                  <Link href="/">我的預約</Link>
                </li>
              </ul>
            )}
            <ul>
              <li className="bg-gray-50 px-5 py-3 text-xl mb-3">
                <Link href="/">登出</Link>
              </li>
            </ul>
          </div>
        </div>
      )}
    </div>
  );
}

export default Menu