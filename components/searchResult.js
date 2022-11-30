/* eslint-disable react/button-has-type */
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import AccessTimeOutlinedIcon from '@mui/icons-material/AccessTimeOutlined';
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';
import Router from 'next/router';
import StoreSwiper from './storeSwiper';

const searchResult = () => (
  <div className="container mx-auto w-full">
    <ul className="flex justify-between gap-3">
      <li className="w-[32%] rounded-card shadow-md">
        <div className=" rounded-t-card">
          <StoreSwiper />
        </div>
        <div className="px-5">
          <div className="mb-4 flex justify-between pt-2">
            <h2 className="text-xl">xxxHairSalon</h2>
            <FavoriteBorderOutlinedIcon />
          </div>
          <ul className="mb-2 flex flex-wrap gap-2">
            <li className="w-16  rounded-full bg-secondary text-center  text-white">
              洗髮
            </li>
            <li className="w-16  rounded-full bg-secondary text-center  text-white">
              染髮
            </li>
            <li className="w-16  rounded-full bg-secondary text-center  text-white">
              燙髮
            </li>
            <li className="w-16  rounded-full bg-secondary text-center  text-white">
              染髮
            </li>
            <li className="w-16  rounded-full bg-secondary text-center  text-white">
              燙髮
            </li>
            <li className="w-16  rounded-full bg-secondary text-center  text-white">
              染髮
            </li>
            <li className="w-16  rounded-full bg-secondary text-center  text-white">
              燙髮
            </li>
          </ul>
          <div className="mb-2 flex items-center gap-3">
            <AccessTimeOutlinedIcon />
            <div>
              <p>平日：10:00~12:00 14:00~20:00</p>
              <p>假日：10:00~12:00 14:00~21:00</p>
            </div>
          </div>
          <div className="mb-2 flex items-center gap-3">
            <LocationOnOutlinedIcon />
            <p>台北市大安區信義路123號</p>
          </div>
          <p className="mb-4">
            服務描述：我們是一群在屏東深根20年的髮型設計工作者
            在這不斷變化的時代裡HAPPYHAIR不斷的前進
            只為了讓屏東的顧客也能擁有「時尚｜年輕｜健康 」的髮型！{' '}
          </p>
          <div className="mb-8 flex justify-center">
            <button
              className="h-10 w-full rounded-full bg-secondary text-white"
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
      <li className="w-[32%] rounded-card shadow-md">
        <div className=" rounded-t-card">
          <StoreSwiper />
        </div>
        <div className="px-5">
          <div className="mb-4 flex justify-between pt-2">
            <h2 className="text-xl">xxxHairSalon</h2>
            <FavoriteBorderOutlinedIcon />
          </div>
          <ul className="mb-2 flex flex-wrap gap-2">
            <li className="w-16  rounded-full bg-secondary text-center  text-white">
              洗髮
            </li>
            <li className="w-16  rounded-full bg-secondary text-center  text-white">
              染髮
            </li>
            <li className="w-16  rounded-full bg-secondary text-center  text-white">
              燙髮
            </li>
            <li className="w-16  rounded-full bg-secondary text-center  text-white">
              染髮
            </li>
            <li className="w-16  rounded-full bg-secondary text-center  text-white">
              燙髮
            </li>
            <li className="w-16  rounded-full bg-secondary text-center  text-white">
              染髮
            </li>
            <li className="w-16  rounded-full bg-secondary text-center  text-white">
              燙髮
            </li>
          </ul>
          <div className="mb-2 flex items-center gap-3">
            <AccessTimeOutlinedIcon />
            <div>
              <p>平日：10:00~12:00 14:00~20:00</p>
              <p>假日：10:00~12:00 14:00~21:00</p>
            </div>
          </div>
          <div className="mb-2 flex items-center gap-3">
            <LocationOnOutlinedIcon />
            <p>台北市大安區信義路123號</p>
          </div>
          <p className="mb-4">
            服務描述：我們是一群在屏東深根20年的髮型設計工作者
            在這不斷變化的時代裡HAPPYHAIR不斷的前進
            只為了讓屏東的顧客也能擁有「時尚｜年輕｜健康 」的髮型！{' '}
          </p>
          <div className="mb-8 flex justify-center">
            <button className="h-10 w-full rounded-full bg-secondary text-white">
              我要預約
            </button>
          </div>
        </div>
      </li>
      <li className="w-[32%] rounded-card shadow-md">
        <div className=" rounded-t-card">
          <StoreSwiper />
        </div>
        <div className="px-5">
          <div className="mb-4 flex justify-between pt-2">
            <h2 className="text-xl">xxxHairSalon</h2>
            <FavoriteBorderOutlinedIcon />
          </div>
          <ul className="mb-2 flex flex-wrap gap-2">
            <li className="w-16  rounded-full bg-secondary text-center  text-white">
              洗髮
            </li>
            <li className="w-16  rounded-full bg-secondary text-center  text-white">
              染髮
            </li>
            <li className="w-16  rounded-full bg-secondary text-center  text-white">
              燙髮
            </li>
            <li className="w-16  rounded-full bg-secondary text-center  text-white">
              染髮
            </li>
            <li className="w-16  rounded-full bg-secondary text-center  text-white">
              燙髮
            </li>
            <li className="w-16  rounded-full bg-secondary text-center  text-white">
              染髮
            </li>
            <li className="w-16  rounded-full bg-secondary text-center  text-white">
              燙髮
            </li>
          </ul>
          <div className="mb-2 flex items-center gap-3">
            <AccessTimeOutlinedIcon />
            <div>
              <p>平日：10:00~12:00 14:00~20:00</p>
              <p>假日：10:00~12:00 14:00~21:00</p>
            </div>
          </div>
          <div className="mb-2 flex items-center gap-3">
            <LocationOnOutlinedIcon />
            <p>台北市大安區信義路123號</p>
          </div>
          <p className="mb-4">
            服務描述：我們是一群在屏東深根20年的髮型設計工作者
            在這不斷變化的時代裡HAPPYHAIR不斷的前進
            只為了讓屏東的顧客也能擁有「時尚｜年輕｜健康 」的髮型！{' '}
          </p>
          <div className="mb-8 flex justify-center">
            <button className="h-10 w-full rounded-full bg-secondary text-white">
              我要預約
            </button>
          </div>
        </div>
      </li>
    </ul>
  </div>
);

export default searchResult;
