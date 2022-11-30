import React, { useEffect, useState } from 'react';
import Router from 'next/router';
import Image from 'next/image';
import { withRouter } from 'next/router';
import axios from 'axios';

import Layout from '../modules/layout';
import { useThem } from '../modules/context';

import SignupInf from '../components/signupInf';
import Finish from '../src/images/finished.png';
import ChangePassword from '../components/changePassword';
import SignupFinished from '../components/signupFinished';
const signup = ({ router }) => {
  const { data, setData, apiUrl, setLoading } = useThem();

  // const token = router.query.token;
  const [page, setPage] = useState(1);
  const [inf, setInf] = useState({});
  const token = router.query.token;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setInf((preState) => {
      return {
        ...preState,
        [name]: value,
      };
    });
  };
  const getTokenInf = async () => {
    const Authorization = 'Bearer ' + token;
    axios
      .get(`${apiUrl}/user/getsignuptoken`, {
        headers: { Authorization },
      })
      .then(async (res) => {
        console.log(res);
        const data = await res.data.Token;
        console.log(data);
        setInf((preState) => {
          return {
            ...preState,
            Identity: data?.Identity,
            Account: data?.Account,
          };
        });
        setData((preState) => {
          return {
            ...preState,
            status: data?.Identity,
          };
        });
      })
      .catch((err) => console.log(err));
  };

  const registerAccount = () => {
    setLoading(true);
    axios
      .post(`${apiUrl}//user/signupuserdata`, inf)
      .then((res) => {
        console.log(res);
        const token = 'Bearer ' + res.data.Token;
        localStorage.setItem('BonnieYork', token);
        setLoading(false);
        setPage(page + 1);
        setData((preState) => {
          return {
            ...preState,
            name: inf.CustomerName || inf.StoreName,
          };
        });
      })
      .catch((err) => {
        console.log(err);
        setLoading(true);
      });
  };
  console.log(inf);
  useEffect(() => {
    if (token) {
      getTokenInf();
    }
  }, [token]);
  return (
    <Layout title="邦尼約克Bonnie York 註冊">
      <div className="-mb-40 w-screen bg-bgColor px-5  pb-40">
        <div className="container mx-auto  w-full ">
          <div className="container mx-auto w-11/12 pt-10">
            <ul className="mx-auto mb-10 flex justify-between text-center sm:w-8/12 ">
              <li className="mx-auto  w-4/12">
                <div className="flex justify-center">
                  <p className="mb-1 flex h-8 w-8  items-center justify-center rounded-full bg-secondary text-white">
                    1
                  </p>
                </div>
                <p>輸入密碼</p>
              </li>
              <li className="mx-auto w-4/12">
                <div className="flex justify-center">
                  <p className="mb-1 flex h-8 w-8 items-center justify-center rounded-full bg-secondary text-white">
                    2
                  </p>
                </div>
                <p>基本資料</p>
              </li>
              <li className="mx-auto w-4/12">
                <div className="flex justify-center">
                  <p className="mb-1 flex h-8 w-8 items-center justify-center rounded-full bg-secondary text-white">
                    3
                  </p>
                </div>
                <p>完成</p>
              </li>
            </ul>
          </div>
          <div className="mx-auto rounded-login bg-white  pt-4 pb-10 shadow-lg sm:w-3/4 lg:w-6/12">
            {page == 1 && (
              <ChangePassword
                setInf={setInf}
                inf={inf}
                handleChange={handleChange}
              />
            )}
            <div className="mb-4">
              {page == 2 && (
                <SignupInf
                  setInf={setInf}
                  page={page}
                  setPage={setPage}
                  inf={inf}
                  handleChange={handleChange}
                />
              )}
              {page == 3 && (
                <div className="xl:2/12 container mx-auto w-8/12 lg:w-4/12">
                  <h2 className="mb-8 text-center text-3xl font-bold">
                    註冊成功
                  </h2>
                  <div className="mx-auto mb-8 w-6/12">
                    <Image src={Finish} />
                  </div>
                  <div className="flex justify-center">
                    {data.status === 'store' && (
                      <SignupFinished text="開始建立我的店鋪" />
                    )}
                    {data.status === 'staff' && (
                      <SignupFinished text="開始編輯個人行程" />
                    )}
                    {data.status === 'member' && (
                      <SignupFinished text="開始預約" />
                    )}
                  </div>
                </div>
              )}
              <div className="container mx-auto flex px-8 lg:w-8/12  lg:px-0">
                {page !== 1 && (
                  <button
                    className={`mx-2 h-10 w-4/12 rounded-lg border-2 border-unSelect px-6 py-2 text-unSelect  ${
                      page == 1 && 'hidden'
                    } ${page == 3 && 'hidden'}`}
                    onClick={() => {
                      setPage(page - 1);
                    }}
                  >
                    上一步
                  </button>
                )}
                {page !== 3 && (
                  <>
                    <div className="w-full ">
                      <button
                        className=" h-10 w-full rounded-lg bg-secondary  text-white "
                        onClick={() => {
                          if (page == 1) {
                            setPage(page + 1);
                          } else {
                            registerAccount();
                          }
                        }}
                      >
                        下一步
                      </button>
                    </div>
                  </>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default withRouter(signup);
