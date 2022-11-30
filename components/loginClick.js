import React from 'react';
import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useThem } from '../modules/context';
import { useRouter } from 'next/router';

import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import ClearOutlinedIcon from '@mui/icons-material/ClearOutlined';

const loginClick = ({
  setOpenView,
  Account,
  setAccount,
  select,
  status,
  handleChange,
}) => {
  const { apiUrl, setData, setLoading } = useThem();
  const router = useRouter();

  const handleSubmit = async () => {
    if (select === 'signup') {
      const data = { Identity: status, Account: Account.Account };
      console.log(data);
      console.log(data);
      axios
        .post(`${apiUrl}/user/signupsendlink`, data)
        .then((res) => {
          console.log(res);
          setOpenView(false);
          toast.success('Email已發送', {
            position: 'top-center',
            autoClose: 1000,
          });
        })
        .catch((err) => console.log(err));
      return;
    } else if (select === 'login') {
      setLoading(true);
      const data = {
        Identity: status,
        Account: Account.Account,
        Password: Account.Password,
      };
      console.log(data);
      await axios
        .post(`${apiUrl}/user/login`, data)
        .then((res) => {
          console.log(res);
          const result = res.data;
          const token = 'Bearer ' + result.Token;
          if (result.message == '密碼錯誤') {
            toast.error('密碼錯誤', {
              position: 'top-center',
              autoClose: 1000,
            });
            setLoading(false);
          } else {
            setLoading(false);

            localStorage.setItem('BonnieYork', token);
            setData((preState) => {
              return {
                ...preState,
                status: result.Identity,
                name: result?.CustomerName || result?.StoreName,
                token: token,
              };
            });
            toast.success('登入成功', {
              position: 'top-center',
              autoClose: 1000,
            });
            setTimeout(() => {
              router.push('/');
              router.push('/');
            }, 1500);
          }
        })
        .catch((err) => console.log(err));
    }
  };

  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div className="absolute top-20 left-0 z-40 flex h-screen w-screen justify-center bg-black/50 pt-20">
      <div
        data-aos="zoom-in"
        className="relative h-72 w-96 rounded-lg border-2 border-secondary bg-white px-10 pb-4 pt-12"
      >
        {select === 'forget' && (
          <div>
            <h2 className=" mb-4 text-2xl font-bold">忘記密碼</h2>
            <p>是否寄送修改密碼驗證信至</p>
            <p className="mb-8">{Account.Account}</p>
          </div>
        )}
        {select === 'signup' && (
          <div>
            <h2 className=" mb-4 text-2xl font-bold">註冊帳號</h2>
            <p className="mb-8">是否寄送驗證信至{Account.Account}</p>
          </div>
        )}
        {select === 'login' && (
          <div>
            <h2 className=" mb-4 text-2xl font-bold">登入帳號</h2>
            <div className="relative">
              <p className="absolute -top-2.5 left-4 bg-white px-2 text-unSelect ">
                請輸入密碼
              </p>
              <input
                type="password"
                name="Password"
                className="mb-8 h-10 w-full border border-unSelect  indent-3"
                onChange={handleChange}
              />
            </div>
          </div>
        )}
        <div className="flex justify-around">
          <button
            className="h-10 w-full rounded-lg bg-secondary text-white"
            onClick={handleSubmit}
          >
            確認
          </button>
        </div>
      </div>
      <div>
        <button onClick={() => setOpenView(false)}>
          <ClearOutlinedIcon sx={{ color: 'black' }} />
        </button>
      </div>
      <ToastContainer />
    </div>
  );
};

export default loginClick;
