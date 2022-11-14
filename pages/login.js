import React, { useState } from 'react';
import Layout from '../modules/layout';
import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image';
import Logo from '../src/images/logo.png';
import LoginClick from '../components/loginClick';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const login = () => {
  const [status, setStatus] = useState('member');
  const [select, setSelect] = useState('');
  const [email, setEmail] = useState('');
  const [openView,setOpenView]=useState(false)

  const handleChange = (e) => {
    setEmail(e.target.value);
  };

  const checkEmail = (e) => {
    const { name } = e.target;

    email||toast.error('請輸email', {
      position: 'top-center',
      autoClose: 1000,
    });
    if (email !== '') {
      setSelect(name);
      setOpenView(true)
    }
  };
  return (
    <>
      <Head>
        <title>邦尼約克Bonnie York 登入</title>
      </Head>
      <Layout className="relative">
        <div className="container mx-auto  pt-10 ">
          <div className=" w-full mb-4">
            <Image className="mx-auto" width={150} src={Logo} />
          </div>
          <ul className="flex justify-center mb-10">
            <li
              className={` ${
                status == 'member'
                  ? 'bg-gray-500 text-white'
                  : 'bg-gray-200 text-black'
              } w-40 h-10 flex items-center justify-center mx-6`}
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
                  ? 'bg-gray-500 text-white'
                  : 'bg-gray-200 text-black'
              } w-40 h-10 flex items-center justify-center mx-6`}
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
              className="border-black border h-10 indent-3 w-96"
              placeholder="email"
              value={email}
              onChange={handleChange}
            />
          </div>
          <div className="flex justify-center">
            <button
              name="forget"
              className="flex justify-end mb-8"
              onClick={checkEmail}
            >
              忘記密碼？
            </button>
          </div>
          <div className="flex justify-center">
            <button
              name="login"
              className="bg-gray-200 w-44 h-10 mx-6"
              onClick={checkEmail}
            >
              登入
            </button>
            <button
              name="signup"
              className="bg-gray-600 text-white w-44 h-10 mx-6"
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
