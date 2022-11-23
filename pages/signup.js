import React, { useState } from 'react';
import Link from 'next/link';
import Router from 'next/router';
import Image from 'next/image';

import Layout from '../modules/layout';

import SignupInf from '../components/signupInf';
import Finish from '../src/images/finished.png';
import ChangePassword from '../components/changePassword';
const signup = () => {
  const [status, setStatus] = useState('member');
  const [page, setPage] = useState(1);
  const [inf, setInf] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setInf((preState) => {
      return {
        ...preState,
        [name]: value,
      };
    });
  };
  console.log(inf);
  return (
    <Layout title="邦尼約克Bonnie York 註冊">
      <div className="container mx-auto w-11/12 pt-10 md:w-8/12 lg:w-6/12">
        <ul className="mb-10 flex justify-between text-center">
          <li className="w-4/12">
            <p>輸入密碼</p>
            <div className="flex justify-center">
              <p className="bg-blue-500 flex h-8 w-8   items-center justify-center rounded-full text-white">
                1
              </p>
            </div>
          </li>
          <li className="w-4/12">
            <p>基本資料</p>
            <div className="flex justify-center">
              <p className="bg-blue-500 flex h-8 w-8   items-center justify-center rounded-full text-white">
                2
              </p>
            </div>
          </li>
          <li className="w-4/12">
            <p>完成</p>
            <div className="flex justify-center">
              <p className="bg-blue-500 flex h-8 w-8   items-center justify-center rounded-full text-white">
                3
              </p>
            </div>
          </li>
        </ul>
      </div>
      {page == 1 && (
        <ChangePassword setInf={setInf} inf={inf} handleChange={handleChange} />
      )}
      <div className="mb-4">
        {page == 2 && (
          <SignupInf
            setInf={setInf}
            status={status}
            page={page}
            setPage={setPage}
            inf={inf}
            handleChange={handleChange}
          />
        )}
        {page == 3 && (
          <div className="xl:2/12 container mx-auto w-8/12 lg:w-4/12">
            <Image className="mx-auto mb-8 w-6/12" src={Finish} />
            <div className="flex justify-center">
              {status == 'store' && (
                <button
                  className="bg-gray-400 h-10 w-60 text-white"
                  onClick={() => {
                    Router.push('/');
                  }}
                >
                  開始建立我的店鋪
                </button>
              )}
              {status == 'staff' && (
                <button
                  className="bg-gray-400 h-10 w-60 text-white"
                  onClick={() => {
                    Router.push('/');
                  }}
                >
                  開始編輯個人行程
                </button>
              )}
              {status == 'member' && (
                <button
                  className="bg-gray-400 h-10 w-60 text-white"
                  onClick={() => {
                    Router.push('/');
                  }}
                >
                  開始預約
                </button>
              )}
            </div>
          </div>
        )}
        {page !== 3 && (
          <div className="container mx-auto flex w-11/12 justify-end md:w-8/12 lg:w-6/12  ">
            {page !== 1 && (
              <button
                className="bg-gray-300 mx-2 h-10 w-32"
                onClick={() => {
                  setPage(page - 1);
                }}
              >
                上一步
              </button>
            )}

            <button
              className="bg-gray-300 mx-2  h-10 w-32"
              onClick={() => {
                setPage(page + 1);
              }}
            >
              下一步
            </button>
          </div>
        )}
      </div>
    </Layout>
  );
};

export default signup;
