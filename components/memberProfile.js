/* eslint-disable react/button-has-type */
/* eslint-disable no-console */
import Image from 'next/image';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from 'axios';
import { useRouter } from 'next/router';
import { useState } from 'react';

import { useThem } from '../modules/context';

import Profile from '../src/images/profile.png';
import Edit from '../src/images/pencil.svg';
import ChangePassword from './changePassword';

const memberProfile = ({ handleChange, inf, setInf }) => {
  const { apiUrl, setLoading, data } = useThem();
  const [page, setPage] = useState('info');
  const router = useRouter();

  const changePassword = () => {
    const Authorization = localStorage.getItem('BonnieYork');
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
    setInf({});
  };

  return (
    <div className="-mt-40 bg-bgColor  pb-4 pt-40">
      <h2 className="mb-4 text-center text-3xl">會員資訊</h2>
      <div className="mb-8 flex justify-center">
        <button
          className={` ${
            page === 'info' ? 'border-b-2 text-secondary' : ' text-unSelect'
          } mx-8 w-44`}
          onClick={() => setPage('info')}
        >
          基本資料
        </button>
        <button
          className={` ${
            page === 'changePassword'
              ? 'border-b-2 text-secondary'
              : ' text-unSelect'
          } mx-8 w-44`}
          onClick={() => setPage('changePassword')}
        >
          修改密碼
        </button>
      </div>

      {page === 'info' && (
        <div className="mx-auto w-11/12  rounded-lg bg-white px-6 pb-4 pt-4 shadow-lg md:w-8/12 lg:w-5/12">
          <div className="mx-auto">
            <div className="relative mb-4 flex  w-full justify-center">
              <div className="relative">
                <Image src={Profile} className="" />
                <button className="bg-gray-100 absolute right-0 bottom-0 rounded-full border-black p-1 shadow-md">
                  <Image src={Edit} />
                </button>
              </div>
            </div>
            <div className="w-full">
              <div className="mb-4 w-full">
                <p className="mb-8">Email:{data.Account}</p>
                <div className="relative">
                  <p className="absolute -top-2.5 left-4 bg-white text-input">
                    用戶名稱
                  </p>
                  <input
                    value={data?.name}
                    onChange={handleChange}
                    name="name"
                    type="text"
                    className="mb-6 h-12 w-full rounded-lg border border-unSelect indent-3 "
                  />
                </div>
                <div className="relative">
                  <p className="absolute -top-2.5 left-4 bg-white text-input">
                    手機號碼
                  </p>
                  <input
                    value={inf?.phone}
                    onChange={handleChange}
                    type="text"
                    name="phone"
                    className="mb-6 h-12 w-full rounded-lg border border-unSelect indent-3 "
                  />
                </div>
                <div className="relative">
                  <p className="absolute -top-2.5 left-4 bg-white text-input">
                    生日
                  </p>
                  <input
                    type="date"
                    name="birthday"
                    disabled
                    value={inf?.birthday}
                    className="mb-6 h-12 w-full rounded-lg border border-unSelect indent-3 "
                  />
                </div>
              </div>
            </div>
          </div>
          <div className=" flex justify-center gap-3">
            <button className=" h-10 w-[33%] rounded-lg bg-footerL text-secondary">
              放棄變更
            </button>
            <button className="h-10 w-[65%] rounded-lg bg-secondary text-white">
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
      <ToastContainer />
    </div>
  );
};

export default memberProfile;
