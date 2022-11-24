import React from 'react';
import Image from 'next/image';
import Item1 from '../src/images/item1.png';
import AccessTimeOutlinedIcon from '@mui/icons-material/AccessTimeOutlined';
import MonetizationOnOutlinedIcon from '@mui/icons-material/MonetizationOnOutlined';
import { useState } from 'react';
const storeItem = ({ SetReserve }) => {
  return (
    <>
      <ul className="w-full px-2 sm:w-3/4 md:px-0 lg:w-1/2">
        <li className="w-ful mb-6 flex h-52 border border-black">
          <Image src={Item1} className="w-2/5 object-cover" />
          <div className="relative p-4">
            <div className="mb-4 flex items-center gap-3">
              <h2 className="font-bold ">女士剪髮</h2>
              <div className="flex gap-1 text-sm ">
                <AccessTimeOutlinedIcon sx={{ fontSize: 20 }} />
                <p>1小時</p>
              </div>
              <div className="flex gap-1 text-sm">
                <MonetizationOnOutlinedIcon sx={{ fontSize: 20 }} />
                <p>1200</p>
              </div>
            </div>
            <p className="mb-4">
              服務描述：我們是一群在屏東深根20年的髮型設計工作者
              在這不斷變化的時代裡HAPPYHAIR不斷的前進
              只為了讓屏東的顧客也能擁有「時尚｜年輕｜健康 」的髮型！
            </p>
            <button
              className="bg-gray-400 absolute bottom-2 right-4 h-8 w-32 text-white"
              onClick={() => {
                SetReserve(true);
              }}
            >
              我要預約
            </button>
          </div>
        </li>
        <li className="w-ful mb-6 flex h-52 border border-black">
          <Image src={Item1} className="w-2/5 object-cover" />
          <div className="relative p-4">
            <div className="mb-4 flex items-center gap-3">
              <h2 className="font-bold ">女士剪髮</h2>
              <div className="flex gap-1 text-sm ">
                <AccessTimeOutlinedIcon sx={{ fontSize: 20 }} />
                <p>1小時</p>
              </div>
              <div className="flex gap-1 text-sm">
                <MonetizationOnOutlinedIcon sx={{ fontSize: 20 }} />
                <p>1小時</p>
              </div>
            </div>
            <p className="mb-4">
              服務描述：我們是一群在屏東深根20年的髮型設計工作者
              在這不斷變化的時代裡HAPPYHAIR不斷的前進
              只為了讓屏東的顧客也能擁有「時尚｜年輕｜健康 」的髮型！
            </p>
            <button className="bg-gray-400 absolute bottom-2 right-4 h-8 w-32 text-white">
              我要預約
            </button>
          </div>
        </li>
      </ul>
    </>
  );
};

export default storeItem;
