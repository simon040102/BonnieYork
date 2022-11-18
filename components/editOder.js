import React, { useState } from 'react';
import CloseIcon from '@mui/icons-material/Close';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
const editOder = (props) => {
    const {setEditOder}=props
    const [edit,setEdit]=useState(true)
  const [startDate, setStartDate] = useState(new Date());

  return (
    <div className="fixed  z-10 h-full  overflow-y-auto top-0 w-full flex justify-center bg-black/50">
      <div
        data-aos="zoom-in"
        className="relative w-96 h-fit mt-20  bg-white border border-black py-12 items-center px-8 "
      >
        <button
          className=" absolute right-4 top-4"
          onClick={() => {
            setEditOder(false);
          }}
        >
          <CloseIcon />
        </button>
        <div className="">
         {edit&&( <button className="bg-blue-400  text-white w-full  mt-4 mb-4">
            完成訂單
          </button>)}
        </div>
        <div>
          <div className="flex mb-4 justify-between">
            <p className="w-1/3 text-end">設計師：</p>
            <select
              name=""
              id=""
              className="border border-black w-2/3 text-center"
              disabled={edit}
            >
              <option value="不指定">可愛粉紅豬</option>
            </select>
          </div>
          <div className="flex mb-4 justify-between">
            <p className="w-1/3 text-end">顧客：</p>
            <input
              type="text"
              className="border border-black w-2/3 text-center"
              value={'久安娜貝爾'}
              disabled
            />
          </div>
          <div className="flex mb-4 justify-between">
            <p className="w-1/3 text-end">預約項目：</p>
            <select
              name=""
              id=""
              className="border border-black w-2/3 text-center"
              disabled={edit}
            >
              <option value="不指定">染髮 2小時</option>
            </select>
          </div>
          <div className="flex mb-4 justify-between">
            <p className="w-1/3 text-end">金額：</p>
            <input
              type="text"
              className="border border-black w-2/3 text-center"
              value={'2500'}
              disabled={edit}
            />
          </div>
          <div className="flex mb-4 justify-between">
            <p className="w-1/3 text-end">手機號碼：</p>
            <input
              type="phone"
              className="border border-black w-2/3 text-center"
              value={'0987654321'}
              disabled
            />
          </div>
          <div className="flex mb-4 justify-between">
            <p className="w-1/3 text-end">顧客：</p>
            <input
              type="mail"
              className="border border-black w-2/3 text-center"
              value={'xxx123@gmail.com'}
              disabled
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
              <button className="bg-red-400  text-white w-full  mb-4">
                刪除訂單
              </button>
            </div>
          )}
          {edit && (
            <div className="flex justify-center gap-3">
              <button
                className=" bg-gray-400 text-white w-32 h-8 "
                onClick={() => setEdit(!edit)}
              >
                編輯預約
              </button>
            </div>
          )}
          {!edit && (
            <div className="flex justify-center gap-3">
              <button
                className=" bg-gray-400 text-white w-32 h-8 "
                onClick={() => setEdit(!edit)}
              >
                捨棄變更
              </button>
              <button className=" bg-gray-600 text-white w-32 h-8 ">
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
