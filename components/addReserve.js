import React from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { useState } from 'react';
const addReserve = (props) => {
  const { setAddReserve } = props;
  const [startDate, setStartDate] = useState(new Date());

  return (
    <div className="fixed  top-0 z-10  flex h-full w-full justify-center overflow-y-auto bg-black/50">
      <div
        data-aos="zoom-in"
        className="relative mt-20 h-fit w-96  items-center border border-black bg-white py-8"
      >
        <div className="px-8">
          <div className="mb-4 flex justify-between">
            <p className="w-1/3 text-end">設計師：</p>
            <select
              name=""
              id=""
              className="w-2/3 border border-black text-center"
            >
              <option value="不指定">不指定</option>
            </select>
          </div>
          <div className="mb-4 flex justify-between">
            <p className="w-1/3 text-end">顧客：</p>
            <input
              type="text"
              className="w-2/3 border border-black text-center"
            />
          </div>
          <div className="mb-4 flex justify-between">
            <p className="w-1/3 text-end">預約項目：</p>
            <select
              name=""
              id=""
              className="w-2/3 border border-black text-center"
            >
              <option value="請選擇項目">請選擇項目</option>
            </select>
          </div>
          <div className="mb-4 flex justify-between">
            <p className="w-1/3 text-end">手機號碼：</p>
            <input
              type="text"
              className="w-2/3 border border-black text-center"
            />
          </div>
          <div className="mb-4 flex justify-between">
            <p className="w-1/3 text-end">email：</p>
            <input
              type="mail"
              className="w-2/3 border border-black text-center"
            />
          </div>
          <div className="mb-4 flex justify-between">
            <div className="w-1/3 text-end">
              <p>預約時間：</p>
            </div>

            <div className="flex w-2/3">
              <div className="flex">
                <DatePicker
                  selected={startDate}
                  onChange={(date) => setStartDate(date)}
                  showMonthDropdown
                  useShortMonthInDropdown
                  dateFormat="yyyy/MM/dd"
                  className="w-full border  text-center"
                />
                <select name="" id="" className="">
                  <option value="10:00">10:00</option>
                </select>
              </div>
            </div>
          </div>
          <div className="flex justify-between">
            <button
              className="bg-gray-300 text h-8 w-32 text-center"
              onClick={() => setAddReserve(false)}
            >
              取消新增
            </button>
            <button className="bg-gray-400 text h-8 w-32 text-center text-white">
              確認新增
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default addReserve;
