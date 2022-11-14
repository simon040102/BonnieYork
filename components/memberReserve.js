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

const MemberReserve = (props) => {
  const [startDate, setDate] = React.useState(new Date());
  const { SetReserve } = props;
  const selectDateHandler = (d) => {
    setDate(d);
  };
    const today = new Date();
    
      useEffect(() => {
        AOS.init();
      }, []);
  return (
    <>
      <div className="fixed  z-10 h-full  overflow-y-auto top-0 w-full flex justify-center bg-black/50">
        <div
          data-aos="zoom-in"
          className="relative w-96 h-fit mt-20  bg-white border border-black"
        >
          <Image src={Item1} />
          <div className="p-5">
            <h2 className="text-center text-xl mb-2">女士剪髮</h2>
            <div className="flex justify-center mb-6">
              <div className="text-sm flex gap-1 mx-2">
                <AccessTimeOutlinedIcon sx={{ fontSize: 20 }} />
                <p>1小時</p>
              </div>
              <div className="text-sm flex gap-1 mx-2">
                <MonetizationOnOutlinedIcon sx={{ fontSize: 20 }} />
                <p>1200</p>
              </div>
            </div>
            <div className=" flex justify-center mb-2">
              <p className="w-1/3 text-right">預約姓名：</p>
              <p className="w-2/3 text-center">王小明</p>
            </div>
            <div className=" flex justify-center  mb-2">
              <p className="w-1/3 text-right">手機號碼：</p>
              <p className="w-2/3 text-center">0912345678</p>
            </div>
            <div className=" flex justify-center mb-2">
              <p className="w-1/3 text-right">設計師：</p>
              <select className="w-2/3 text-center border" name="staff" id="">
                <option value="不指定">不指定</option>
              </select>
            </div>
            <div className=" flex justify-center mb-2">
              <p className="w-1/3 text-right">日期：</p>
              <div className="border w-2/3  text-center">
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
            <div className=" flex justify-center mb-2">
              <p className="w-1/3 text-right">時間：</p>
              <select className="w-2/3 text-center border" name="staff" id="">
                <option value="不指定">選擇時間</option>
              </select>
            </div>
            <div className=" flex justify-center mb-8">
              <p className="w-1/3 text-right">備註：</p>
              <textarea
                className="w-2/3 resize-none border"
                rows={3}
              ></textarea>
            </div>
            <div className="flex justify-around">
              <button
                className=" bg-gray-300 w-32 h-8"
                onClick={() => {
                  SetReserve(false);
                }}
              >
                取消
              </button>
              <button className=" bg-gray-500 w-32 h-8 text-white">
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
