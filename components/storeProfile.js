/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable jsx-a11y/control-has-associated-label */
/* eslint-disable react/button-has-type */
/* eslint-disable no-console */
import { useEffect, useState } from 'react';
import Image from 'next/image';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useRouter } from 'next/router';
import { useThem } from '../modules/context';

import EditItemView from './editItemView';
import EditItem from './editItem';
import AddItem from './addItem';
import GetCity from './areaData/getCity';
import GetArea from './areaData/getArea';
import StoreBanner from './areaData/storeBanner';

import Profile from '../src/images/profile.png';
import Edit from '../src/images/pencil.svg';
import ChangePassword from './changePassword';

const storeProfile = ({ handleChange, inf, setInf }) => {
  const [page, setPage] = useState('info');
  const [edit, setEdit] = useState(false);
  const [addItem, setAddItem] = useState(false);
  const { apiUrl, setLoading } = useThem();
  const [selectBanner, setSelectBanner] = useState([]);
  const [previewBanner, setPreviewBanner] = useState([]);
  const [bannerPath, setBannerPath] = useState({});
  const Authorization = localStorage.getItem('BonnieYork');

  const router = useRouter();
  console.log(selectBanner);
  const changePassword = () => {
    setLoading(true);
    const config = {
      method: 'post',
      url: `${apiUrl}/user/resetpassword`,
      headers: {
        Authorization,
      },
      data: inf,
    };
    axios(config)
      .then((res) => {
        console.log(res);
        const message = res.data.Message;
        console.log(message);
        if (message === '密碼修改完成') {
          toast.success('密碼修改完成', {
            position: 'top-center',
            autoClose: 1000,
          });
          setTimeout(() => {
            router.reload(window.location.pathname);
          }, 1200);
          setLoading(false);
        } else if (message === '輸入的舊密碼不符') {
          toast.error('輸入的舊密碼不符', {
            position: 'top-center',
            autoClose: 1000,
          });
          setLoading(false);
        }
      })
      .catch((err) => console.log(err));
  };

  const ChangeHeadShot = () => {
    console.log(123);
  };

  const handleSubmit = () => {
    if (selectBanner.length !== 0) {
      selectBanner.forEach((item) => {
        const config = {
          method: 'post',
          url: `${apiUrl}/store/uploadprofile`,
          headers: {
            Authorization,
          },
          data: item,
        };
        axios(config)
          .then((res) => {
            console.log(res);
          })
          .catch((err) => console.log(err));
      });
    }
    const config = {
      method: 'post',
      url: `${apiUrl}/store/editinformation`,
      headers: {
        Authorization,
      },
      data: inf,
    };
    axios(config).then((res) => {
      console.log(res);
    });
  };
  useEffect(() => {
    axios
      .get(`${apiUrl}/store/getinformation`, {
        headers: {
          Authorization,
        },
      })
      .then(async (res) => {
        console.log(res);
        const information = await res.data.StoreInformation;
        const BannerPath = await res.data.BannerPath;
        console.log(information);

        setInf(information[0]);
        setBannerPath(BannerPath);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  console.log(inf);
  return (
    <div className="">
      <div className="relative">
        {edit && <EditItemView setEdit={setEdit} />}
        {addItem && <AddItem setAddItem={setAddItem} />}
        <input
          type="file"
          id="upload"
          accept="image/png, image/jpeg"
          className="hidden"
          onChange={handleChange}
        />
      </div>
      <h2 className="mb-8 text-center text-3xl">店鋪資訊</h2>
      <div className="mb-4 flex justify-center">
        <button
          className={` ${
            page === 'info' ? 'border-b-2 text-secondary' : ' text-unSelect'
          } mx-8`}
          onClick={() => setPage('info')}
        >
          基本資料
        </button>
        <button
          className={` ${
            page === 'changePassword'
              ? 'border-b-2 text-secondary'
              : ' text-unSelect'
          } mx-8`}
          onClick={() => setPage('changePassword')}
        >
          修改密碼
        </button>
        <button
          className={` ${
            page === 'item' ? 'border-b-2 text-secondary' : ' text-unSelect'
          } mx-8`}
          onClick={() => setPage('item')}
        >
          預約項目
        </button>
      </div>
      {page === 'info' && (
        <div className="mx-auto w-11/12  rounded-lg bg-white px-6 pb-4 pt-4 shadow-lg md:w-8/12 lg:w-5/12">
          <div className="mx-auto">
            <div className="relative mb-4 flex  w-full justify-center">
              <div className="relative">
                <Image src={Profile} className="" />
                <label
                  htmlFor="upload"
                  className="bg-gray-100 absolute right-0 bottom-0 rounded-full border-black shadow-md"
                >
                  <Image src={Edit} />
                </label>
              </div>
              <input
                type="file"
                id="upload"
                accept="image/png, image/jpeg"
                className="hidden"
                onChange={ChangeHeadShot}
              />
            </div>
            <div className="w-full">
              <div className="relative">
                <p className="absolute -top-2.5 left-4 bg-white px-2 text-input">
                  *店鋪名稱
                </p>
                <input
                  value={inf?.StoreName}
                  onChange={handleChange}
                  name="StoreName"
                  type="text"
                  className="mb-6 h-12 w-full rounded-lg border border-unSelect indent-3 "
                />
              </div>
              <div className="relative">
                <p className="absolute -top-2.5 left-4 bg-white px-2 text-input">
                  *產業別
                </p>
                <select
                  className="mb-6 h-12 w-full rounded-lg border border-unSelect indent-3 "
                  value={inf?.IndustryId}
                  onChange={handleChange}
                  name="IndustryId"
                  id=""
                >
                  <option value="0">請選擇產業</option>
                  <option value="1">美髮沙龍</option>
                  <option value="2">美睫美甲</option>
                  <option value="3">推拿按摩</option>
                  <option value="4">家教老師</option>
                  <option value="5">手工製作</option>
                  <option value="6">美妝美容</option>
                  <option value="7">健身瑜伽</option>
                  <option value="8">個人工作室</option>
                </select>
              </div>
              <div className="relative">
                <p className="absolute -top-2.5 left-4 bg-white px-2 text-input">
                  *地址
                </p>
                <div className="flex justify-between">
                  <select
                    name="City"
                    value={inf?.City}
                    onChange={handleChange}
                    id=""
                    className="mb-6 h-12 w-[48%] rounded-lg border border-unSelect indent-3 "
                  >
                    <option value="請選擇縣市">*請選擇縣市</option>
                    <GetCity />
                  </select>
                  <select
                    name="District"
                    value={inf?.District}
                    onChange={handleChange}
                    id=""
                    className="mb-6 h-12 w-[48%] rounded-lg border border-unSelect indent-3 "
                  >
                    <option value="請選擇地區">*請選擇地區</option>
                    <GetArea city={inf?.City} />
                  </select>
                </div>
              </div>
              <input
                value={inf?.Address}
                onChange={handleChange}
                name="Address"
                type="text"
                placeholder="ex:台灣大道12號"
                className="mb-6 h-12 w-full rounded-lg border border-unSelect indent-5 "
              />
              <div className="relative">
                <p className="absolute -top-2.5 left-4 bg-white px-2 text-input">
                  手機號碼
                </p>
                <input
                  value={inf?.CellphoneNumber}
                  onChange={handleChange}
                  type="text"
                  name="CellphoneNumber"
                  className="mb-6 h-12 w-full rounded-lg border border-unSelect indent-3 "
                />
              </div>
              <div className="relative">
                <p className="absolute -top-2.5 left-4 bg-white px-2 text-input">
                  市話
                </p>
                <input
                  value={inf?.PhoneNumber}
                  onChange={handleChange}
                  type="tel"
                  name="PhoneNumber"
                  className="mb-6 h-12 w-full rounded-lg border border-unSelect indent-3 "
                />
              </div>
              <div className="relative">
                <p className="absolute -top-2.5 left-4 bg-white px-2 text-input">
                  *員工稱謂
                </p>
                <input
                  value={inf?.JobTitle}
                  onChange={handleChange}
                  type="text"
                  name="JobTitle"
                  className=" h-12 w-full rounded-lg border border-unSelect indent-3 "
                />
                <p className="mb-6 text-xs text-input">
                  ex:老師、教練、設計師、按摩師(會顯示在顧客預約頁面)
                </p>
              </div>
              <div className="relative mb-6">
                <p className="absolute -top-2.5 left-4 bg-white px-2 text-input">
                  *顧客可選時間區間：
                </p>

                <select
                  value={inf?.TimeInterval}
                  onChange={handleChange}
                  type="text"
                  name="TimeInterval"
                  className=" h-12 w-full rounded-lg border border-unSelect indent-3 "
                >
                  <option value="請選擇區間">請選擇區間</option>
                  <option value="15">15分鐘</option>
                  <option value="30">30分鐘</option>
                  <option value="60">1小時</option>
                </select>
                <p className="text-xs text-input">
                  ex:選擇15分，顧客可選時間顯示10:00 、10:15、10:30、10:45
                  <br />
                  預約項目會以30分鐘為最短時間
                </p>
              </div>

              <div>
                <p>營業時間：</p>
                <li className="mb-2 list-none	">*平日：(休息非必填)</li>
                <div className="mb-6 flex justify-between">
                  <div className="relative w-[45%]">
                    <p className="absolute -top-2.5 left-4 bg-white px-2 text-input">
                      開始
                    </p>
                    <input
                      name="WeekdayStartTime"
                      type="time"
                      className=" h-12 w-full rounded-lg border border-unSelect indent-4"
                      value={inf?.WeekdayStartTime}
                      onChange={handleChange}
                    />
                  </div>
                  <p>～</p>
                  <div className="relative w-[45%]">
                    <p className="absolute -top-2.5 left-4 bg-white px-2 text-input">
                      結束
                    </p>
                    <input
                      name="WeekdayEndTime"
                      type="time"
                      className=" h-12 w-full rounded-lg border border-unSelect indent-4"
                      value={inf?.WeekdayEndTime}
                      onChange={handleChange}
                    />
                  </div>
                </div>
                <div className="mb-6 flex justify-between">
                  <div className="relative w-[45%]">
                    <p className="absolute -top-2.5 left-4 bg-white px-2 text-input">
                      中間休息
                    </p>
                    <input
                      name="WeekdayBreakStart"
                      type="time"
                      className=" h-12 w-full rounded-lg border border-unSelect indent-4"
                      value={inf?.WeekdayBreakStart}
                      onChange={handleChange}
                    />
                  </div>
                  <p>～</p>
                  <div className="relative w-[45%]">
                    <input
                      name="WeekdayBreakEnd"
                      type="time"
                      className=" h-12 w-full rounded-lg border border-unSelect indent-4"
                      value={inf?.WeekdayBreakEnd}
                      onChange={handleChange}
                    />
                  </div>
                </div>
              </div>
              <div>
                <li className="mb-2 list-none	">*假日：(休息非必填)</li>
                <div className="mb-6 flex justify-between">
                  <div className="relative w-[45%]">
                    <p className="absolute -top-2.5 left-4 bg-white px-2 text-input">
                      開始
                    </p>
                    <input
                      name="HolidayStartTime"
                      type="time"
                      className=" h-12 w-full rounded-lg border border-unSelect indent-4"
                      value={inf?.HolidayStartTime}
                      onChange={handleChange}
                    />
                  </div>
                  <p>～</p>
                  <div className="relative w-[45%]">
                    <p className="absolute -top-2.5 left-4 bg-white px-2 text-input">
                      結束
                    </p>
                    <input
                      name="HolidayEndTime"
                      type="time"
                      className=" h-12 w-full rounded-lg border border-unSelect indent-4"
                      value={inf?.HolidayEndTime}
                      onChange={handleChange}
                    />
                  </div>
                </div>
                <div className="mb-6 flex justify-between">
                  <div className="relative w-[45%]">
                    <p className="absolute -top-2.5 left-4 bg-white px-2 text-input">
                      中間休息
                    </p>
                    <input
                      name="HolidayBreakStart"
                      type="time"
                      className=" h-12 w-full rounded-lg border border-unSelect indent-4"
                      value={inf?.HolidayBreakStart}
                      onChange={handleChange}
                    />
                  </div>
                  <p>～</p>
                  <div className="relative w-[45%]">
                    <input
                      name="HolidayBreakEnd"
                      type="time"
                      className=" h-12 w-full rounded-lg border border-unSelect indent-4"
                      value={inf?.HolidayBreakEnd}
                      onChange={handleChange}
                    />
                  </div>
                </div>
              </div>
              <div className="relative">
                <p className="absolute -top-2.5 left-4 bg-white px-2 text-input">
                  固定公休日
                </p>
                <select
                  value={inf?.PublicHoliday}
                  onChange={handleChange}
                  name="PublicHoliday"
                  type="text"
                  className="mb-6 h-12 w-full rounded-lg border border-unSelect indent-3 "
                >
                  <option value="無">無</option>
                  <option value="星期一">星期一</option>
                  <option value="星期二">星期二</option>
                  <option value="星期三">星期三</option>
                  <option value="星期四">星期四</option>
                  <option value="星期五">星期五</option>
                  <option value="星期六">星期六</option>
                  <option value="星期日">星期日</option>
                </select>
              </div>
              <div className="relative">
                <p className="absolute -top-2.5 left-4 bg-white px-2 text-input">
                  *店鋪描述
                </p>
                <textarea
                  name="Description"
                  id=""
                  value={inf.Description}
                  cols="30"
                  rows="10"
                  className="w-full resize-none rounded-lg border border-unSelect p-3 indent-3"
                  onChange={handleChange}
                />
              </div>
              <div className="mb-4">
                <p>預約首頁Banner(最多可選五張，橫式佳)：</p>
                <div className="mb-10 grid grid-cols-3 gap-3 pt-2">
                  <StoreBanner
                    setSelectBanner={setSelectBanner}
                    Num="1"
                    setPreviewBanner={setPreviewBanner}
                    previewBanner={previewBanner}
                    selectBanner={selectBanner}
                    bannerPath={bannerPath.Banner1}
                  />
                  <StoreBanner
                    setSelectBanner={setSelectBanner}
                    Num="2"
                    setPreviewBanner={setPreviewBanner}
                    selectBanner={selectBanner}
                    previewBanner={previewBanner}
                    bannerPath={bannerPath.Banner2}
                  />
                  <StoreBanner
                    setSelectBanner={setSelectBanner}
                    Num="3"
                    setPreviewBanner={setPreviewBanner}
                    selectBanner={selectBanner}
                    previewBanner={previewBanner}
                    bannerPath={bannerPath.Banner3}
                  />
                  <StoreBanner
                    setSelectBanner={setSelectBanner}
                    Num="4"
                    setPreviewBanner={setPreviewBanner}
                    selectBanner={selectBanner}
                    previewBanner={previewBanner}
                    bannerPath={bannerPath.Banner4}
                  />
                  <StoreBanner
                    setSelectBanner={setSelectBanner}
                    Num="5"
                    setPreviewBanner={setPreviewBanner}
                    selectBanner={selectBanner}
                    previewBanner={previewBanner}
                    bannerPath={bannerPath.Banner5}
                  />
                </div>
              </div>
              <div className="relative">
                <p className="absolute -top-2.5 left-4 bg-white px-2 text-input">
                  facebook
                </p>
                <input
                  value={inf?.FacebookLink}
                  onChange={handleChange}
                  type="text"
                  name="FacebookLink"
                  className="mb-6 h-12 w-full rounded-lg border border-unSelect indent-3 "
                />
              </div>
              <div className="relative">
                <p className="absolute -top-2.5 left-4 bg-white px-2 text-input">
                  Instagram
                </p>
                <input
                  value={inf?.InstagramLink}
                  onChange={handleChange}
                  type="text"
                  name="InstagramLink"
                  className="mb-6 h-12 w-full rounded-lg border border-unSelect indent-3 "
                />
              </div>
              <div className="relative">
                <p className="absolute -top-2.5 left-4 bg-white px-2 text-input">
                  Line官方
                </p>
                <input
                  value={inf?.LineLink}
                  onChange={handleChange}
                  type="text"
                  name="LineLink"
                  className="mb-6 h-12 w-full rounded-lg border border-unSelect indent-3 "
                />
              </div>
            </div>
          </div>
          <div className="mt-8 flex justify-between ">
            <button className=" h-12 w-[32%] rounded-lg bg-footerL text-black">
              放棄變更
            </button>
            <button
              className="h-12 w-[65%] rounded-lg bg-secondary text-white"
              onClick={handleSubmit}
            >
              確認修改
            </button>
          </div>
        </div>
      )}
      {page === 'changePassword' && (
        <div className="mx-auto w-11/12 rounded-lg bg-white py-8 shadow-lg md:w-8/12 lg:w-5/12">
          <ChangePassword handleChange={handleChange} inf={inf} />
          <div className="mx-auto flex w-11/12  justify-center md:w-8/12 lg:w-6/12">
            <button
              className="h-10 w-32 rounded-lg bg-secondary text-white"
              onClick={changePassword}
            >
              確認修改
            </button>
          </div>
        </div>
      )}
      {page === 'item' && (
        <div className="container mx-auto flex justify-center">
          <EditItem setEdit={setEdit} setAddItem={setAddItem} />
        </div>
      )}
      <ToastContainer />
    </div>
  );
};

export default storeProfile;
