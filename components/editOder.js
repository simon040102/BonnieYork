/* eslint-disable react/button-has-type */
import CloseIcon from '@mui/icons-material/Close';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { useState } from 'react';

const editOder = ({ setEditOder }) => {
  const [edit, setEdit] = useState(true);
  const [startDate, setStartDate] = useState(new Date());

  return (
    <div className="fixed  top-0 z-10  flex h-full w-full justify-center overflow-y-auto bg-black/50">
      <div
        data-aos="zoom-in"
        className="relative mt-20 h-fit w-96  items-center border border-black bg-white py-12 px-8 "
      >
        <button
          className="absolute right-4 top-4"
          onClick={() => setEditOder(false)}
        >
          <CloseIcon />
        </button>
        <div className="">
          {edit && (
            <button className="bg-blue-400  mt-4 mb-4  w-full text-white">
              完成訂單
            </button>
          )}
        </div>
        <div>
          <div className="mb-4 flex justify-between">
            <p className="w-1/3 text-end">設計師：</p>
            <select
              name=""
              id=""
              className="w-2/3 border border-black text-center"
              disabled={edit}
            >
              <option value="不指定">可愛粉紅豬</option>
            </select>
          </div>
          <div className="mb-4 flex justify-between">
            <p className="w-1/3 text-end">顧客：</p>
            <input
              type="text"
              className="w-2/3 border border-black text-center"
              value="久安娜貝爾"
              disabled
            />
          </div>
          <div className="mb-4 flex justify-between">
            <p className="w-1/3 text-end">預約項目：</p>
            <select
              name=""
              id=""
              className="w-2/3 border border-black text-center"
              disabled={edit}
            >
              <option value="不指定">染髮 2小時</option>
            </select>
          </div>
          <div className="mb-4 flex justify-between">
            <p className="w-1/3 text-end">金額：</p>
            <input
              type="text"
              className="w-2/3 border border-black text-center"
              value="2500"
              disabled={edit}
            />
          </div>
          <div className="mb-4 flex justify-between">
            <p className="w-1/3 text-end">手機號碼：</p>
            <input
              type="phone"
              className="w-2/3 border border-black text-center"
              value="0987654321"
              disabled
            />
          </div>
          <div className="mb-4 flex justify-between">
            <p className="w-1/3 text-end">顧客：</p>
            <input
              type="mail"
              className="w-2/3 border border-black text-center"
              value="xxx123@gmail.com"
              disabled
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
                  disabled={edit}
                />
                <select name="" id="" className="" disabled={edit}>
                  <option value="10:00">10:00</option>
                </select>
              </div>
            </div>
          </div>
          {!edit && (
            <div>
              <button className="bg-red-400  mb-4 w-full  text-white">
                刪除訂單
              </button>
            </div>
          )}
          {edit && (
            <div className="flex justify-center gap-3">
              <button
                className="bg-gray-400 h-8 w-32 text-white "
                onClick={() => setEdit(!edit)}
              >
                編輯預約
              </button>
            </div>
          )}
          {!edit && (
            <div className="flex justify-center gap-3">
              <button
                className="bg-gray-400 h-8 w-32 text-white "
                onClick={() => setEdit(!edit)}
              >
                捨棄變更
              </button>
              <button className="bg-gray-600 h-8 w-32 text-white ">
                確認變更
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default editOder;
