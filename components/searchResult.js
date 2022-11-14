import React from 'react';
import StoreSwiper from './storeSwiper';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import AccessTimeOutlinedIcon from '@mui/icons-material/AccessTimeOutlined';
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';
import Router from 'next/router';
const searchResult = () => {
  return (
    <div className="container w-full mx-auto">
      <ul className="flex justify-between gap-3">
        <li className="w-4/12  border border-black">
          <div className="">
            <StoreSwiper />
          </div>
          <div className="px-5">
            <div className=" pt-2 flex justify-between mb-4">
              <h2 className="text-xl">xxxHairSalon</h2>
              <FavoriteBorderOutlinedIcon />
            </div>
            <ul className=" flex flex-wrap gap-2 mb-2">
              <li className="bg-gray-500  text-white text-center  w-16">
                洗髮
              </li>
              <li className="bg-gray-500  text-white text-center  w-16">
                染髮
              </li>
              <li className="bg-gray-500  text-white text-center  w-16">
                燙髮
              </li>
              <li className="bg-gray-500  text-white text-center  w-16">
                染髮
              </li>
              <li className="bg-gray-500  text-white text-center  w-16">
                燙髮
              </li>
              <li className="bg-gray-500  text-white text-center  w-16">
                染髮
              </li>
              <li className="bg-gray-500  text-white text-center  w-16">
                燙髮
              </li>
            </ul>
            <div className="flex gap-3 items-center mb-2">
              <AccessTimeOutlinedIcon />
              <div>
                <p>平日：10:00~12:00 14:00~20:00</p>
                <p>假日：10:00~12:00 14:00~21:00</p>
              </div>
            </div>
            <div className="flex gap-3 items-center mb-2">
              <LocationOnOutlinedIcon />
              <p>台北市大安區信義路123號</p>
            </div>
            <p className="mb-4">
              服務描述：我們是一群在屏東深根20年的髮型設計工作者
              在這不斷變化的時代裡HAPPYHAIR不斷的前進
              只為了讓屏東的顧客也能擁有「時尚｜年輕｜健康 」的髮型！{' '}
            </p>
            <div className="flex justify-center mb-8">
              <button
                className="bg-gray-500 w-40 h-10 text-white"
                onClick={() => {
                Router.push({
                  pathname: '/store/1232321',
                });
                }}
              >
                我要預約
              </button>
            </div>
          </div>
        </li>
        <li className="w-4/12  border border-black">
          <div className="">
            <StoreSwiper />
          </div>
          <div className="px-5">
            <div className=" pt-2 flex justify-between mb-4">
              <h2 className="text-xl">xxxHairSalon</h2>
              <FavoriteBorderOutlinedIcon />
            </div>
            <ul className=" flex flex-wrap gap-2 mb-2">
              <li className="bg-gray-500  text-white text-center  w-16">
                洗髮
              </li>
              <li className="bg-gray-500  text-white text-center  w-16">
                染髮
              </li>
              <li className="bg-gray-500  text-white text-center  w-16">
                燙髮
              </li>
              <li className="bg-gray-500  text-white text-center  w-16">
                染髮
              </li>
              <li className="bg-gray-500  text-white text-center  w-16">
                燙髮
              </li>
              <li className="bg-gray-500  text-white text-center  w-16">
                染髮
              </li>
              <li className="bg-gray-500  text-white text-center  w-16">
                燙髮
              </li>
            </ul>
            <div className="flex gap-3 items-center mb-2">
              <AccessTimeOutlinedIcon />
              <div>
                <p>平日：10:00~12:00 14:00~20:00</p>
                <p>假日：10:00~12:00 14:00~21:00</p>
              </div>
            </div>
            <div className="flex gap-3 items-center mb-2">
              <LocationOnOutlinedIcon />
              <p>台北市大安區信義路123號</p>
            </div>
            <p className="mb-4">
              服務描述：我們是一群在屏東深根20年的髮型設計工作者
              在這不斷變化的時代裡HAPPYHAIR不斷的前進
              只為了讓屏東的顧客也能擁有「時尚｜年輕｜健康 」的髮型！{' '}
            </p>
            <div className="flex justify-center mb-8">
              <button className="bg-gray-500 w-40 h-10 text-white">
                我要預約
              </button>
            </div>
          </div>
        </li>
        <li className="w-4/12  border border-black">
          <div className="">
            <StoreSwiper />
          </div>
          <div className="px-5">
            <div className=" pt-2 flex justify-between mb-4">
              <h2 className="text-xl">xxxHairSalon</h2>
              <FavoriteBorderOutlinedIcon />
            </div>
            <ul className=" flex flex-wrap gap-2 mb-2">
              <li className="bg-gray-500  text-white text-center  w-16">
                洗髮
              </li>
              <li className="bg-gray-500  text-white text-center  w-16">
                染髮
              </li>
              <li className="bg-gray-500  text-white text-center  w-16">
                燙髮
              </li>
              <li className="bg-gray-500  text-white text-center  w-16">
                染髮
              </li>
              <li className="bg-gray-500  text-white text-center  w-16">
                燙髮
              </li>
              <li className="bg-gray-500  text-white text-center  w-16">
                染髮
              </li>
              <li className="bg-gray-500  text-white text-center  w-16">
                燙髮
              </li>
            </ul>
            <div className="flex gap-3 items-center mb-2">
              <AccessTimeOutlinedIcon />
              <div>
                <p>平日：10:00~12:00 14:00~20:00</p>
                <p>假日：10:00~12:00 14:00~21:00</p>
              </div>
            </div>
            <div className="flex gap-3 items-center mb-2">
              <LocationOnOutlinedIcon />
              <p>台北市大安區信義路123號</p>
            </div>
            <p className="mb-4">
              服務描述：我們是一群在屏東深根20年的髮型設計工作者
              在這不斷變化的時代裡HAPPYHAIR不斷的前進
              只為了讓屏東的顧客也能擁有「時尚｜年輕｜健康 」的髮型！{' '}
            </p>
            <div className="flex justify-center mb-8">
              <button className="bg-gray-500 w-40 h-10 text-white">
                我要預約
              </button>
            </div>
          </div>
        </li>
      </ul>
    </div>
  );
};

export default searchResult;
