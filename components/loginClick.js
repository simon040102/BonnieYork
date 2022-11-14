import React from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';
const forgetPassword = (props) => {
    const { setOpenView, email, select, status } = props;
      useEffect(() => {
        AOS.init();
      }, []);
    
  return (
    <div className=" w-screen h-screen absolute z-50 top-20 left-0 flex  justify-center pt-60">
      <div
        data-aos="zoom-in"
        className=" w-96 h-52 bg-white absolute border-black border p-10"
      >
        {select == 'forget' && (
          <div>
            <p>是否寄送修改密碼驗證信至</p>
            <p className="mb-8">{email}</p>
          </div>
        )}
        {select == 'signup' && (
          <div>
            <p>帳號未註冊過</p>
            <p className="mb-8">是否寄送驗證信至{email}</p>
          </div>
        )}
        {select == 'login' && (
          <div>
            <p>請輸入密碼</p>
            <input
              type="password"
              className="mb-8 w-full h-8 indent-3 border-black border"
            />
          </div>
        )}
        <div className=" flex justify-around">
          <button className="w-20 h-10 bg-gray-400">確認</button>
          <button
            className="w-20 h-10 bg-gray-300"
            onClick={() => setOpenView(false)}
          >
            取消
          </button>
        </div>
      </div>
    </div>
  );
}

export default forgetPassword;