import React, { useState } from 'react';
import Image from 'next/image';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from 'axios';
import { useRouter } from 'next/router';

import { useThem } from '../modules/context';

import Profile from '../src/images/profile.png';
import Edit from '../src/images/pencil.svg';
import ChangePassword from './changePassword';
const memberProfile = ({ handleChange, inf, setInf }) => {
  const { apiUrl, setLoading, data } = useThem();
  const [page, setPage] = useState('info');
  const router = useRouter();

  const changeDate = (e) => {
    console.log(e.target.value);
  };

  const changePassword = () => {
    const Authorization = localStorage.getItem('BonnieYork');
    setLoading(true);
    let config = {
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
    setInf({});
  };

  return (
    <div className="">
      <h2 className="mb-8 text-center text-3xl">會員資訊</h2>
      <div className="mb-4 flex justify-center">
        <button
          className={` ${
            page === 'info' ? 'text-black' : 'text-gray-500'
          } mx-8`}
          onClick={() => setPage('info')}
        >
          基本資料
        </button>
        <button
          className={` ${
            page === 'changePassword' ? 'text-black' : 'text-gray-500'
          } mx-8`}
          onClick={() => setPage('changePassword')}
        >
          修改密碼
        </button>
      </div>
      {page === 'info' && (
        <div className="mx-auto w-11/12 md:w-8/12  lg:w-6/12">
          <div className="flex   justify-between">
            <div className="relative flex  h-40 w-40 justify-center">
              <Image src={Profile} className="" />
              <button className="bg-gray-100 absolute right-0 bottom-0 rounded-full border-black p-1 shadow-md">
                <Image src={Edit} />
              </button>
            </div>
            <div className="w-8/12">
              <div className="w-full">
                <p className="mb-4">Email:{data.Account}</p>
                <p>用戶名稱：</p>
                <input
                  value={data?.name}
                  onChange={handleChange}
                  name="name"
                  type="text"
                  className="mb-4 h-10 w-full border border-black indent-3"
                />
                <p>手機號碼：</p>
                <input
                  value={inf?.phone}
                  onChange={handleChange}
                  type="text"
                  name="phone"
                  className="mb-4 h-10 w-full border border-black indent-3"
                />
                <p>生日：</p>
                <input
                  type="date"
                  name="birthday"
                  disabled
                  value={inf?.birthday}
                  className="mb-4 h-10 w-full border border-black indent-1"
                />
                <div className="mb-4 text-left">
                  <p>性別：</p>
                  <input
                    type="radio"
                    name="sex"
                    value="male"
                    className="mr-2"
                    checked={inf?.sex === 'male'}
                    onChange={handleChange}
                  />
                  男性
                  <input
                    type="radio"
                    name="sex"
                    value="female"
                    className="mr-2 ml-5"
                    checked={inf?.sex === 'female'}
                    onChange={handleChange}
                  />
                  女性
                </div>
              </div>
            </div>
          </div>
          <div className="flex justify-end gap-3">
            <button className="bg-gray-300 h-8 w-32 text-black">
              放棄變更
            </button>
            <button className="bg-gray-500 h-8 w-32 text-white">
              確認修改
            </button>
          </div>
        </div>
      )}
      {page === 'changePassword' && (
        <div>
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
      <ToastContainer />
    </div>
  );
};

export default memberProfile;
