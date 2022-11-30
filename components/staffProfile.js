/* eslint-disable react/button-has-type */
/* eslint-disable no-console */
import { useState } from 'react';
import Image from 'next/image';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import Profile from '../src/images/profile.png';
import Edit from '../src/images/pencil.svg';
import ChangePassword from './changePassword';
import { useThem } from '../modules/context';
import 'react-toastify/dist/ReactToastify.css';

const staffProfile = ({ handleChange, inf, setInf }) => {
  const { setLoading, apiUrl } = useThem();
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
        const { message } = res.data;
        console.log(message);
        if (message === '密碼修改完成') {
          toast.success('密碼修改完成', {
            position: 'top-center',
            autoClose: 1000,
          });
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
  const [page, setPage] = useState('info');
  return (
    <div className="">
      <h2 className="mb-8 text-center text-3xl">個人資訊</h2>
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
                <p className="mb-4">Email:xxx123@gmail.com</p>
                <p className="mb-4">所屬店家:深海大鳳梨</p>
                <p>名稱(暱稱)：</p>
                <input
                  value={inf?.name}
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
                <p>自我介紹： </p>
                <textarea
                  name="introduction"
                  value={inf?.introduction}
                  id=""
                  cols="30"
                  rows="5"
                  className="mb-4 w-full resize-none border border-black"
                />
                <p>facebook：</p>
                <input
                  value={inf?.facebook}
                  onChange={handleChange}
                  type="text"
                  name="facebook"
                  className="mb-4 h-10 w-full border border-black indent-3"
                />
                <p>Instagram：</p>
                <input
                  value={inf?.instagram}
                  onChange={handleChange}
                  type="text"
                  name="instagram"
                  className="mb-4 h-10 w-full border border-black indent-3"
                />
                <p>Line官方：</p>
                <input
                  value={inf?.line}
                  onChange={handleChange}
                  type="text"
                  name="line"
                  className="mb-4 h-10 w-full border border-black indent-3"
                />
              </div>
            </div>
          </div>
          <div className="mt-4 flex justify-end gap-3">
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

export default staffProfile;
