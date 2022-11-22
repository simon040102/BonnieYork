import React, { useState } from 'react';
import Image from 'next/image';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import Layout from '../modules/layout';

import Logo from '../src/images/logo.png';
import LoginClick from '../components/loginClick';
const login = () => {
  const [status, setStatus] = useState('member');
  const [select, setSelect] = useState('');
  const [email, setEmail] = useState('');
  const [openView, setOpenView] = useState(false);

  const handleChange = (e) => {
    setEmail(e.target.value);
  };

  const checkEmail = (e) => {
    const { name } = e.target;

    email ||
      toast.error('請輸email', {
        position: 'top-center',
        autoClose: 1000,
      });
    if (email !== '') {
      setSelect(name);
      setOpenView(true);
    }
  };

  return (
    <>
      <Layout title="邦尼約克Bonnie York 登入" className="relative">
        <div className="container mx-auto  pt-10 ">
          <div className="mb-4 flex w-full justify-center">
            <Image className="mx-auto" width={150} src={Logo} />
          </div>
          <ul className="mb-10 flex justify-center">
            <li
              className={` ${
                status == 'member'
                  ? 'bg-primary text-white'
                  : 'bg-primary text-black'
              } mx-6 flex h-10 w-40 items-center justify-center`}
            >
              <button
                onClick={() => setStatus('member')}
                className="h-full w-full"
              >
                顧客登入
              </button>
            </li>
            <li
              className={`${
                status == 'store'
                  ? 'bg-primary text-white'
                  : 'bg-primary text-black'
              } mx-6 flex h-10 w-40 items-center justify-center`}
            >
              <button
                onClick={() => setStatus('store')}
                className="h-full w-full"
              >
                店家登入
              </button>
            </li>
          </ul>
          <div className="flex justify-center">
            <input
              type="email"
              className="h-10 w-96 border border-black indent-3"
              placeholder="email"
              value={email}
              onChange={handleChange}
            />
          </div>
          <div className="flex justify-center">
            <button
              name="forget"
              className="mb-8 flex justify-end"
              onClick={checkEmail}
            >
              忘記密碼？
            </button>
          </div>
          <div className="flex justify-center">
            <button
              name="login"
              className="mx-6 h-10 w-44 bg-primary"
              onClick={checkEmail}
            >
              登入
            </button>
            <button
              name="signup"
              className="mx-6 h-10 w-44 bg-primary text-white"
              onClick={checkEmail}
            >
              註冊
            </button>
          </div>
        </div>
        {openView && (
          <LoginClick
            setOpenView={setOpenView}
            select={select}
            email={email}
            status={status}
          />
        )}

        <ToastContainer />
      </Layout>
    </>
  );
};

export default login;
