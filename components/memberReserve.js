import React from 'react';
import Image from 'next/image';
import Item1 from '../src/images/item1.png';
import AccessTimeOutlinedIcon from '@mui/icons-material/AccessTimeOutlined';
import MonetizationOnOutlinedIcon from '@mui/icons-material/MonetizationOnOutlined';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';

const MemberReserve = ({ SetReserve }) => {
  const [startDate, setDate] = React.useState(new Date());

  const selectDateHandler = (d) => {
    setDate(d);
  };
  const today = new Date();

  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <>
      <div className="fixed  top-0 z-10  flex h-full w-full justify-center overflow-y-auto bg-black/50">
        <div
          data-aos="zoom-in"
          className="relative mt-20 h-fit w-96  border border-black bg-white"
        >
          <Image src={Item1} />
          <div className="p-5">
            <h2 className="mb-2 text-center text-xl">女士剪髮</h2>
            <div className="mb-6 flex justify-center">
              <div className="mx-2 flex gap-1 text-sm">
                <AccessTimeOutlinedIcon sx={{ fontSize: 20 }} />
                <p>1小時</p>
              </div>
              <div className="mx-2 flex gap-1 text-sm">
                <MonetizationOnOutlinedIcon sx={{ fontSize: 20 }} />
                <p>1200</p>
              </div>
            </div>
            <div className="mb-2 flex justify-center">
              <p className="w-1/3 text-right">預約姓名：</p>
              <p className="w-2/3 text-center">王小明</p>
            </div>
            <div className="mb-2 flex  justify-center">
              <p className="w-1/3 text-right">手機號碼：</p>
              <p className="w-2/3 text-center">0912345678</p>
            </div>
            <div className="mb-2 flex justify-center">
              <p className="w-1/3 text-right">設計師：</p>
              <select className="w-2/3 border text-center" name="staff" id="">
                <option value="不指定">不指定</option>
              </select>
            </div>
            <div className="mb-2 flex justify-center">
              <p className="w-1/3 text-right">日期：</p>
              <div className="w-2/3 border  text-center">
                <DatePicker
                  className="w-20"
                  dateFormat="yyyy/MM/dd"
                  selected={startDate}
                  onChange={selectDateHandler}
                  minDate={today}
                  todayButton={'Today'}
                />
              </div>
            </div>
            <div className="mb-2 flex justify-center">
              <p className="w-1/3 text-right">時間：</p>
              <select className="w-2/3 border text-center" name="staff" id="">
                <option value="不指定">選擇時間</option>
              </select>
            </div>
            <div className="mb-8 flex justify-center">
              <p className="w-1/3 text-right">備註：</p>
              <textarea
                className="w-2/3 resize-none border"
                rows={3}
              ></textarea>
            </div>
            <div className="flex justify-around">
              <button
                className="bg-gray-300 h-8 w-32"
                onClick={() => SetReserve(false)}
              >
                取消
              </button>
              <button className="bg-gray-500 h-8 w-32 text-white">
                確認預約
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MemberReserve;
