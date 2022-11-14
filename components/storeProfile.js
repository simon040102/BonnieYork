import React from 'react';
import { useState } from 'react';
import Profile from '../src/images/profile.png';
import Edit from '../src/images/pencil.svg';
import Image from 'next/image';
import ChangePassword from './changePassword';
import StorePhoto1 from '../src/images/search1.jpg';
import EditItem from './editItem';
import EditItemView from './editItemView';
import AddItem from './addItem';
const storeProfile = (props) => {
  const { handleChange, inf } = props;
  const [page, setPage] = useState('info');
    const [edit, setEdit] = useState(false);
    const [addItem,setAddItem]=useState(false)
  return (
    <div className="">
      <div className=" relative">
        {edit && <EditItemView setEdit={setEdit} />}
        {addItem && <AddItem setAddItem={setAddItem} />}
      </div>
      <h2 className="text-center mb-8 text-3xl">店鋪資訊</h2>
      <div className="flex justify-center mb-4">
        <button
          className={` ${page == 'info' ? 'text-black' : 'text-gray-500'} mx-8`}
          onClick={() => setPage('info')}
        >
          基本資料
        </button>
        <button
          className={` ${
            page == 'changePassword' ? 'text-black' : 'text-gray-500'
          } mx-8`}
          onClick={() => setPage('changePassword')}
        >
          修改密碼
        </button>
        <button
          className={` ${page == 'item' ? 'text-black' : 'text-gray-500'} mx-8`}
          onClick={() => setPage('item')}
        >
          預約項目
        </button>
      </div>
      {page == 'info' && (
        <div className="w-11/12 md:w-8/12 lg:w-6/12  mx-auto">
          <div className=" flex   justify-between">
            <div className="w-40 relative  h-40 flex justify-center">
              <Image src={Profile} className="" />
              <button className="absolute shadow-md border-black bg-gray-100 rounded-full p-1 right-0 bottom-0">
                <Image src={Edit} />
              </button>
            </div>
            <div className="w-8/12">
              <div className="w-full">
                <p>店鋪名稱：</p>
                <input
                  value={inf?.name}
                  onChange={handleChange}
                  name="name"
                  type="text"
                  className="border-black border w-full mb-4 h-10 indent-3"
                />
                <p>產業別：</p>
                <select
                  className="border-black border w-full mb-4 text-center h-10 indent-3"
                  value={inf?.industry}
                  name="industry"
                  id=""
                >
                  <option value="請選擇產業">請選擇產業</option>
                </select>
                <p>地址：</p>
                <div className="flex gap-3">
                  <select
                    name="country"
                    value={inf?.country}
                    id=""
                    className="border-black text-center border w-1/2 mb-4 h-10 indent-3"
                  >
                    <option value="請選擇縣市">請選擇縣市</option>
                  </select>
                  <select
                    name="area"
                    value={inf?.area}
                    id=""
                    className="border-black text-center border w-1/2 mb-4 h-10 indent-3"
                  >
                    <option value="請選擇地區">請選擇地區</option>
                  </select>
                </div>
                <input
                  value={inf?.address}
                  onChange={handleChange}
                  name="address"
                  type="text"
                  placeholder="ex:台灣大道12號"
                  className="border-black border w-full mb-4 h-10 indent-3"
                />
                <p>手機號碼：</p>
                <input
                  value={inf?.phone}
                  onChange={handleChange}
                  type="text"
                  name="phone"
                  className="border-black border w-full mb-4 h-10 indent-3"
                />
                <p>市話：</p>
                <input
                  value={inf?.tel}
                  onChange={handleChange}
                  type="text"
                  name="tel"
                  className="border-black border w-full mb-4 h-10 indent-3"
                />
                <p>員工稱謂：</p>
                <input
                  value={inf?.staffTitle}
                  onChange={handleChange}
                  type="text"
                  name="staffTitle"
                  placeholder="ex:老師、教練、設計師、按摩師(會顯示在顧客預約頁面)"
                  className="border-black border w-full mb-4 h-10 indent-3"
                />
                <p>顧客可選時間區間：</p>
                <p className="text-xs">
                  假設選擇15分，顧客可選時間顯示10:00 、10:15、10:30、10:45
                  <br />
                  預約項目會以30分鐘為最短時間
                </p>
                <select
                  value={inf?.timeSpace}
                  onChange={handleChange}
                  type="text"
                  name="timeSpace"
                  className="border-black border w-full mb-4 h-10 indent-3 text-center"
                >
                  <option value="請選擇區間">請選擇區間</option>
                  <option value="15">15分鐘</option>
                  <option value="30">30分鐘</option>
                  <option value="60">1小時</option>
                </select>
                <div>
                  <p>營業時間：</p>
                  <li className="mb-2">平日：(休息非必填)</li>
                  <div className="flex justify-around">
                    <div className="flex">
                      <p className=" ">*開始：</p>
                      <select
                        name="weekStart"
                        className='"border-black border  w-32 mb-4   text-center'
                        value={inf?.weekStart}
                      >
                        <option value="請選擇時間"></option>
                      </select>
                    </div>
                    <p>～</p>
                    <div className="flex">
                      <p className=" ">*結束：</p>
                      <select
                        name="weekStart"
                        className='"border-black border w-32 mb-4   text-center'
                        value={inf?.weekStart}
                      >
                        <option value="請選擇時間"></option>
                      </select>
                    </div>
                  </div>
                  <div className="flex justify-around">
                    <div className="flex">
                      <p className=" ">中間休息：</p>
                      <select
                        name="weekStart"
                        className='"border-black border w-32  mb-4   text-center'
                        value={inf?.weekStart}
                      >
                        <option value="請選擇時間"></option>
                      </select>
                    </div>
                    <p>～</p>
                    <div className="flex">
                      <p className=" "></p>
                      <select
                        name="weekStart"
                        className='"border-black border  w-32 mb-4   text-center'
                        value={inf?.weekStart}
                      >
                        <option value="請選擇時間"></option>
                      </select>
                    </div>
                  </div>
                  <div className="flex justify-around">
                    <div className="flex">
                      <p className=" ">中間休息：</p>
                      <select
                        name="weekStart"
                        className='"border-black border w-32  mb-4   text-center'
                        value={inf?.weekStart}
                      >
                        <option value="請選擇時間"></option>
                      </select>
                    </div>
                    <p>～</p>
                    <div className="flex">
                      <p className=" "></p>
                      <select
                        name="weekStart"
                        className='"border-black border  w-32 mb-4   text-center'
                        value={inf?.weekStart}
                      >
                        <option value="請選擇時間"></option>
                      </select>
                    </div>
                  </div>
                </div>
                <div>
                  <li className="mb-2">假日：</li>
                  <div className="flex justify-around">
                    <div className="flex">
                      <p className=" ">*開始：</p>
                      <select
                        name="weekStart"
                        className='"border-black border  w-32 mb-4   text-center'
                        value={inf?.weekStart}
                      >
                        <option value="請選擇時間"></option>
                      </select>
                    </div>
                    <p>～</p>
                    <div className="flex">
                      <p className=" ">*結束：</p>
                      <select
                        name="weekStart"
                        className='"border-black border w-32 mb-4   text-center'
                        value={inf?.weekStart}
                      >
                        <option value="請選擇時間"></option>
                      </select>
                    </div>
                  </div>
                  <div className="flex justify-around">
                    <div className="flex">
                      <p className=" ">中間休息：</p>
                      <select
                        name="weekStart"
                        className='"border-black border w-32  mb-4   text-center'
                        value={inf?.weekStart}
                      >
                        <option value="請選擇時間"></option>
                      </select>
                    </div>
                    <p>～</p>
                    <div className="flex">
                      <p className=" "></p>
                      <select
                        name="weekStart"
                        className='"border-black border  w-32 mb-4   text-center'
                        value={inf?.weekStart}
                      >
                        <option value="請選擇時間"></option>
                      </select>
                    </div>
                  </div>
                  <div className="flex justify-around">
                    <div className="flex">
                      <p className=" ">中間休息：</p>
                      <select
                        name="weekStart"
                        className='"border-black border w-32  mb-4   text-center'
                        value={inf?.weekStart}
                      >
                        <option value="請選擇時間"></option>
                      </select>
                    </div>
                    <p>～</p>
                    <div className="flex">
                      <p className=" "></p>
                      <select
                        name="weekStart"
                        className='"border-black border  w-32 mb-4   text-center'
                        value={inf?.weekStart}
                      >
                        <option value="請選擇時間"></option>
                      </select>
                    </div>
                  </div>
                </div>
                <div className="flex">
                  <li>公休日：</li>
                  <select
                    name=""
                    id=""
                    className='"border-black border  w-32 mb-4   text-center'
                  >
                    <option value="星期"></option>
                  </select>
                  <p className="text-xs ml-1">不定時公休請至預約管理設定</p>
                </div>
                <div>
                  <p className="mb-4">店鋪描述：</p>
                  <textarea
                    name=""
                    id=""
                    cols="30"
                    rows="10"
                    className="border border-black w-full resize-none indent-3 pt-3"
                  ></textarea>
                </div>
                <div className="mb-4">
                  <p>預約首頁Banner(最多可選五張，橫式佳)：</p>
                  <div className=" pt-2 grid grid-cols-3  gap-3">
                    <Image className=" object-fill" src={StorePhoto1} />
                    <Image className=" object-fill" src={StorePhoto1} />
                    <Image className=" object-fill" src={StorePhoto1} />
                    <Image className=" object-fill" src={StorePhoto1} />
                    <Image className=" object-fill" src={StorePhoto1} />
                  </div>
                </div>
                <div>
                  <p>facebook：</p>
                  <input
                    value={inf?.facebook}
                    onChange={handleChange}
                    type="text"
                    name="facebook"
                    className="border-black border w-full mb-4 h-10 indent-3"
                  />
                  <p>Instagram：</p>
                  <input
                    value={inf?.instagram}
                    onChange={handleChange}
                    type="text"
                    name="instagram"
                    className="border-black border w-full mb-4 h-10 indent-3"
                  />
                  <p>Line官方：</p>
                  <input
                    value={inf?.line}
                    onChange={handleChange}
                    type="text"
                    name="line"
                    className="border-black border w-full mb-4 h-10 indent-3"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="flex justify-end gap-3 mt-8">
            <button className=" bg-gray-300 w-32 h-8 text-black">
              放棄變更
            </button>
            <button className=" bg-gray-500 w-32 h-8 text-white">
              確認修改
            </button>
          </div>
        </div>
      )}
      {page == 'changePassword' && (
        <div>
          <ChangePassword handleChange={handleChange} inf={inf} />
          <div className="w-11/12 md:w-8/12 lg:w-6/12  mx-auto flex justify-center">
            <button className=" bg-gray-500 w-32 h-8 text-white">
              確認修改
            </button>
          </div>
        </div>
      )}
      {page == 'item' && (
        <div className="container mx-auto flex justify-center">
          <EditItem setEdit={setEdit} setAddItem={setAddItem} />
        </div>
      )}
    </div>
  );
};

export default storeProfile;
