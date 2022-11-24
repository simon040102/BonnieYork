import React from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';
const forgetPassword = ({ setOpenView, email, select }) => {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div className="absolute top-20 left-0 z-50 flex h-screen w-screen  justify-center pt-60">
      <div
        data-aos="zoom-in"
        className="absolute h-52 w-96 border border-black bg-white p-10"
      >
        {select === 'forget' && (
          <div>
            <p>是否寄送修改密碼驗證信至</p>
            <p className="mb-8">{email}</p>
          </div>
        )}
        {select === 'signup' && (
          <div>
            <p>帳號未註冊過</p>
            <p className="mb-8">是否寄送驗證信至{email}</p>
          </div>
        )}
        {select === 'login' && (
          <div>
            <p>請輸入密碼</p>
            <input
              type="password"
              className="mb-8 h-8 w-full border border-black indent-3"
            />
          </div>
        )}
        <div className="flex justify-around">
          <button className="bg-gray-400 h-10 w-20">確認</button>
          <button
            className="bg-gray-300 h-10 w-20"
            onClick={() => setOpenView(false)}
          >
            取消
          </button>
        </div>
      </div>
    </div>
  );
};

export default forgetPassword;
