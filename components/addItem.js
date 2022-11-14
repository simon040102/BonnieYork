import React from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect, useState } from 'react';
import Image from 'next/image';
import Item1 from '../src/images/item1.png';

const addItem = (props) => {
    const {setAddItem}=props
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <div className="fixed  z-10 h-full  overflow-y-auto top-0 w-full flex justify-center bg-black/50">
      <div
        data-aos="zoom-in"
        className="relative w-96 h-fit mt-20  bg-white border border-black"
      >
        <div className="w-full h-72 bg-gray-200 flex justify-center items-center">
          <p className="">點選新增照片</p>
        </div>
        <div className="p-5">
          
          <div className="flex mb-4 justify-between">
            <p className="w-1/3 text-end">項目名稱：</p>
            <select
              name="itemName"
              id=""
              className="border border-black w-2/3 text-center"
            >
              <option value="女士剪髮">女士剪髮</option>
            </select>
          </div>
          <div className="flex mb-4 justify-between">
            <p className="w-1/3 text-end">時間：</p>
            <select
              name="itemName"
              id=""
              className="border border-black w-2/3 text-center"
            >
              <option value="女士剪髮">1小時</option>
            </select>
          </div>
          <div className="flex mb-4 justify-between">
            <p className="w-1/3 text-end">金額：</p>
            <input
              type="number"
              name="money"
              className="border border-black w-2/3 text-center"
            />
          </div>
          <div className="flex mb-4 justify-between">
            <p className="w-1/3 text-end">描述：</p>
            <textarea
              name=""
              id=""
              cols="10"
              rows="5"
              className="border border-black w-2/3 p-2 resize-none"
            ></textarea>
          </div>
          <div className="flex mb-4 justify-between">
            <p className="w-1/3 text-end">備註：</p>
            <input
              type="number"
              name="money"
              className="border border-black w-2/3 text-center"
            />
          </div>
          <div className="flex justify-around">
            <button
              className=" bg-gray-300 w-32 h-8"
              onClick={() => {
                setAddItem(false);
              }}
            >
              取消
            </button>
            <button className=" bg-gray-500 w-32 h-8 text-white">
              新增項目
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default addItem;
