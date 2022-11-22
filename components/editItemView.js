import React from 'react';
import Image from 'next/image';
import Item1 from '../src/images/item1.png';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect, useState } from 'react';

const editItemView = (props) => {
  const { setEdit } = props;
  const [startDate, setDate] = React.useState(new Date());
  const selectDateHandler = (d) => {
    setDate(d);
  };
  const today = new Date();

  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <div className="fixed  top-0 z-10  flex h-full w-full justify-center overflow-y-auto bg-black/50">
      <div
        data-aos="zoom-in"
        className="relative mt-20 h-fit w-96  border border-black bg-white"
      >
        <Image src={Item1} />
        <div className="p-5">
          <button className="bg-gray-200 mb-4 w-full">刪除項目</button>
          <div className="mb-4 flex justify-between">
            <p className="w-1/3 text-end">項目名稱：</p>
            <select
              name="itemName"
              id=""
              className="w-2/3 border border-black text-center"
            >
              <option value="女士剪髮">女士剪髮</option>
            </select>
          </div>
          <div className="mb-4 flex justify-between">
            <p className="w-1/3 text-end">時間：</p>
            <select
              name="itemName"
              id=""
              className="w-2/3 border border-black text-center"
            >
              <option value="女士剪髮">1小時</option>
            </select>
          </div>
          <div className="mb-4 flex justify-between">
            <p className="w-1/3 text-end">金額：</p>
            <input
              type="number"
              name="money"
              className="w-2/3 border border-black text-center"
            />
          </div>
          <div className="mb-4 flex justify-between">
            <p className="w-1/3 text-end">描述：</p>
            <textarea
              name=""
              id=""
              cols="10"
              rows="5"
              className="w-2/3 resize-none border border-black p-2"
            ></textarea>
          </div>
          <div className="mb-4 flex justify-between">
            <p className="w-1/3 text-end">備註：</p>
            <input
              type="number"
              name="money"
              className="w-2/3 border border-black text-center"
            />
          </div>
          <div className="flex justify-around">
            <button
              className="bg-gray-300 h-8 w-32"
              onClick={() => {
                setEdit(false);
              }}
            >
              取消
            </button>
            <button className="bg-gray-500 h-8 w-32 text-white">
              確認修改
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default editItemView;
