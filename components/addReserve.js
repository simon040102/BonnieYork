import React from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { useState } from 'react';
const addReserve = (props) => {
  const { setAddReserve } = props;
  const [startDate, setStartDate] = useState(new Date());

  return (
    <div className="fixed  z-10 h-full  overflow-y-auto top-0 w-full flex justify-center bg-black/50">
      <div
        data-aos="zoom-in"
        className="relative w-96 h-fit mt-20  bg-white border border-black py-8 items-center"
      >
        <div className=" px-8">
          <div className="flex mb-4 justify-between">
            <p className="w-1/3 text-end">設計師：</p>
            <select
              name=""
              id=""
              className="border border-black w-2/3 text-center"
            >
              <option value="不指定">不指定</option>
            </select>
          </div>
          <div className="flex mb-4 justify-between">
            <p className="w-1/3 text-end">顧客：</p>
            <input
              type="text"
              className="border border-black w-2/3 text-center"
            />
          </div>
          <div className="flex mb-4 justify-between">
            <p className="w-1/3 text-end">預約項目：</p>
            <select
              name=""
              id=""
              className="border border-black w-2/3 text-center"
            >
              <option value="請選擇項目">請選擇項目</option>
            </select>
          </div>
          <div className="flex mb-4 justify-between">
            <p className="w-1/3 text-end">手機號碼：</p>
            <input
              type="text"
              className="border border-black w-2/3 text-center"
            />
          </div>
          <div className="flex mb-4 justify-between">
            <p className="w-1/3 text-end">email：</p>
            <input
              type="mail"
              className="border border-black w-2/3 text-center"
            />
          </div>
          <div className="flex mb-4 justify-between">
            <div className="w-1/3 text-end">
              <p>預約時間：</p>
            </div>

            <div className="flex w-2/3">
              <div className=" flex">
                <DatePicker
                  selected={startDate}
                  onChange={(date) => setStartDate(date)}
                  showMonthDropdown
                  useShortMonthInDropdown
                  dateFormat="yyyy/MM/dd"
                  className="border text-center  w-full"
                />
                <select name="" id="" className="">
                  <option value="10:00">10:00</option>
                </select>
              </div>
            </div>
          </div>
          <div className="flex justify-between">
            <button
              className="bg-gray-300 text text-center w-32 h-8"
              onClick={() => setAddReserve(false)}
            >
              取消新增
            </button>
            <button className="bg-gray-400 text text-white text-center w-32 h-8">
              確認新增
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default addReserve;
