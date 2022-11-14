import React, { useState } from 'react'
import Profile from '../src/images/profile.png';
import Edit from '../src/images/pencil.svg';
import Image from 'next/image';
import ChangePassword from './changePassword';
const memberProfile = (props) => {
    const {handleChange,inf}=props
    const [page,setPage]=useState('info')
    const changeDate=(e)=>{
        console.log(e.target.value)
    }
    

  return (
    <div className="">
      <h2 className="text-center mb-8 text-3xl">會員資訊</h2>
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
                <p className="mb-4">Email:xxx123@gmail.com</p>
                <p>用戶名稱：</p>
                <input
                  value={inf?.name}
                  onChange={handleChange}
                  name="name"
                  type="text"
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
                <p>生日：</p>
                <input
                  type="date"
                  name="birthday"
                  disabled
                  value={inf?.birthday}
                  className="border-black border w-full mb-4 h-10 indent-1"
                />
                <div className="text-left mb-4">
                  <p>性別：</p>
                  <input
                    type="radio"
                    name="sex"
                    value="male"
                    className="mr-2"
                    checked={inf?.sex == 'male'}
                    onChange={handleChange}
                  />
                  男性
                  <input
                    type="radio"
                    name="sex"
                    value="female"
                    className="mr-2 ml-5"
                    checked={inf?.sex == 'female'}
                    onChange={handleChange}
                  />
                  女性
                </div>
              </div>
            </div>
          </div>
          <div className="flex justify-end gap-3">
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
    </div>
  );
}

export default memberProfile