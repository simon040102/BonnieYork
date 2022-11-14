import React, { useState } from 'react';
import Layout from '../modules/layout';
import Head from 'next/head';
import SignupInf from '../components/signupInf';
import Finish from '../src/images/finished.png';
import Image from 'next/image';
import Link from 'next/link';
import Router from 'next/router';
import ChangePassword from '../components/changePassword';
const signup = () => {
  const [status, setStatus] = useState('member');
  const [page, setPage] = useState(1);
  const [inf, setInf] = useState({});

  const handleChange=(e)=>{
    const {name,value}=e.target
    setInf((preState=>{
        return{
            ...preState,
            [name]:value
        }
    }))
  }
  console.log(inf)
  return (
    <>
      <Head>
        <title>邦尼約克Bonnie York 註冊</title>
      </Head>
      <Layout>
        <div className="container mx-auto w-11/12 md:w-8/12 lg:w-6/12 pt-10">
          <ul className="flex text-center justify-between mb-10">
            <li className="w-4/12">
              <p>輸入密碼</p>
              <div className="flex justify-center">
                <p className=" bg-blue-500 rounded-full flex justify-center   items-center text-white w-8 h-8">
                  1
                </p>
              </div>
            </li>
            <li className="w-4/12">
              <p>基本資料</p>
              <div className="flex justify-center">
                <p className=" bg-blue-500 rounded-full flex justify-center   items-center text-white w-8 h-8">
                  2
                </p>
              </div>
            </li>
            <li className="w-4/12">
              <p>完成</p>
              <div className="flex justify-center">
                <p className=" bg-blue-500 rounded-full flex justify-center   items-center text-white w-8 h-8">
                  3
                </p>
              </div>
            </li>
          </ul>
        </div>
        {page == 1 && (
          <ChangePassword
            setInf={setInf}
            inf={inf}
            handleChange={handleChange}
          />
        )}
        <div className=" mb-4">
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
            <div className="container mx-auto w-8/12 lg:w-4/12 xl:2/12">
              <Image className="w-6/12 mx-auto mb-8" src={Finish} />
              <div className="flex justify-center">
                {status == 'store' && (
                  <button
                    className="bg-gray-400 text-white w-60 h-10"
                    onClick={() => {
                      Router.push('/');
                    }}
                  >
                    開始建立我的店鋪
                  </button>
                )}
                {status == 'staff' && (
                  <button
                    className="bg-gray-400 text-white w-60 h-10"
                    onClick={() => {
                      Router.push('/');
                    }}
                  >
                    開始編輯個人行程
                  </button>
                )}
                {status == 'member' && (
                  <button
                    className="bg-gray-400 text-white w-60 h-10"
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
            <div className="flex justify-end container mx-auto w-11/12 md:w-8/12 lg:w-6/12  ">
              {page !== 1 && (
                <button
                  className="bg-gray-300 mx-2 w-32 h-10"
                  onClick={() => {
                    setPage(page - 1);
                  }}
                >
                  上一步
                </button>
              )}

              <button
                className="bg-gray-300 mx-2  w-32 h-10"
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
    </>
  );
};

export default signup;
