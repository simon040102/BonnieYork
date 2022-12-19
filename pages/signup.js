/* eslint-disable no-dupe-else-if */
/* eslint-disable react/button-has-type */
/* eslint-disable no-console */
/* eslint-disable no-shadow */
import { useEffect, useState } from 'react';

import Image from 'next/image';
import { withRouter } from 'next/router';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

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
  const { token } = router.query;
  const [headShot, setHeadShot] = useState({});
  const [headShotPreview, setHeadShotPreview] = useState(null);
  const Authorization = `Bearer ${token}`;

  const ChangeHeadShot = async (e) => {
    const reader = new FileReader();
    reader.addEventListener('load', () => {
      setHeadShotPreview(reader.result);
    });
    reader.readAsDataURL(e.target.files[0]);
    const formData = new FormData();
    formData.append('HeadShot', e.target.files[0]);
    setHeadShot(formData);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setInf((preState) => ({
      ...preState,
      [name]: value,
    }));
  };

  const getTokenInf = async () => {
    axios
      .get(`${apiUrl}/user/getsignuptoken`, {
        headers: { Authorization },
      })
      .then(async (res) => {
        const data = await res.data.Token;
        setInf((preState) => ({
          ...preState,
          Identity: data?.Identity,
          Account: data?.Account,
        }));
        setData((preState) => ({
          ...preState,
          status: data?.Identity,
          StoreName: data?.StoreName,
        }));
      })
      .catch(() => {
        toast.error('網頁過期，請重新註冊', {
          position: 'top-center',
          autoClose: 1000,
        });
        setTimeout(() => {
          router.push('/');
        }, 1500);
      });
  };

  const registerAccount = () => {
    setLoading(true);
    if (!inf.CellphoneNumber) {
      setLoading(false);
      toast.error('手機號碼未填寫', {
        position: 'top-center',
        autoClose: 1000,
      });
    } else if (inf.Identity === 'member' && !inf.CustomerName) {
      setLoading(false);
      toast.error('名稱未填寫', {
        position: 'top-center',
        autoClose: 1000,
      });
    } else if (inf.Identity === 'store' && !inf.StoreName) {
      setLoading(false);
      toast.error('名稱未填寫', {
        position: 'top-center',
        autoClose: 1000,
      });
    } else if (inf.Identity === 'store' && !inf.StoreName) {
      setLoading(false);
      toast.error('名稱未填寫', {
        position: 'top-center',
        autoClose: 1000,
      });
    } else if (inf.Identity === 'staff' || inf.Identity === 'store') {
      const config = {
        method: 'post',
        url: `${apiUrl}/user/signupuserdata`,
        headers: {
          Authorization,
        },
        data: inf,
      };
      axios(config)
        .then((res) => {
          const token = `Bearer ${res.data.Token}`;
          localStorage.setItem('BonnieYork', token);
          if (headShot.length === 0) {
            setPage(page + 1);
            setLoading(false);
          }
          setData((preState) => ({
            ...preState,
            name: inf.CustomerName || inf.StoreName,
          }));
        })
        .then(() => {
          const token = localStorage.getItem('BonnieYork');
          if (headShot !== '{}') {
            const config = {
              method: 'post',
              url: `${apiUrl}/${data.status}/uploadprofile`,
              headers: {
                Authorization: token,
              },
              data: headShot,
            };
            axios(config)
              .then(() => {
                setPage(page + 1);
                setLoading(false);
              })
              .catch(() => {
                setPage(page + 1);
                setLoading(false);
              });
          } else {
            setLoading(false);
          }
        })
        .catch(() => {
          setLoading(false);
        });
    } else {
      axios
        .post(`${apiUrl}/user/signupuserdata`, inf)
        .then((res) => {
          const token = `Bearer ${res.data.Token}`;
          localStorage.setItem('BonnieYork', token);
          if (headShot.length === 0) {
            setPage(page + 1);
            setLoading(false);
          }
          setData((preState) => ({
            ...preState,
            name: inf.CustomerName || inf.StoreName,
          }));
        })
        .then(() => {
          const token = localStorage.getItem('BonnieYork');
          if (headShot.length !== 0) {
            const config = {
              method: 'post',
              url: `${apiUrl}/${data.status}/uploadprofile`,
              headers: {
                Authorization: token,
              },
              data: headShot,
            };
            axios(config)
              .then(() => {
                setPage(page + 1);
                setLoading(false);
              })
              .catch(() => {});
            setLoading(false);
          } else {
            setLoading(false);
          }
        })
        .catch(() => {
          setLoading(false);
        });
    }
  };
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
                  <p
                    className={`mb-1 flex h-8 w-8  items-center justify-center rounded-full  text-white ${
                      (page === 1 || page === 2 || page === 3) &&
                      ' bg-secondary'
                    }`}
                  >
                    1
                  </p>
                </div>
                <p>輸入密碼</p>
              </li>
              <li className="mx-auto w-4/12">
                <div className="flex justify-center">
                  <p
                    className={`mb-1 flex h-8 w-8  items-center justify-center rounded-full  text-white ${
                      page === 2 || page === 3 ? ' bg-secondary' : 'bg-unSelect'
                    }`}
                  >
                    2
                  </p>
                </div>
                <p>基本資料</p>
              </li>
              <li className="mx-auto w-4/12">
                <div className="flex justify-center">
                  <p
                    className={`mb-1 flex h-8 w-8  items-center justify-center rounded-full  text-white ${
                      page === 3 ? ' bg-secondary' : 'bg-unSelect'
                    }`}
                  >
                    3
                  </p>
                </div>
                <p>完成</p>
              </li>
            </ul>
          </div>
          <div className="mx-auto rounded-login bg-white  pt-4 pb-10 shadow-lg sm:w-3/4 lg:w-6/12">
            {page === 1 && (
              <ChangePassword
                setInf={setInf}
                inf={inf}
                handleChange={handleChange}
                setHeadShot={setHeadShot}
                headShotPreview={headShotPreview}
                headShot={headShot}
              />
            )}
            <div className="mb-4">
              {page === 2 && (
                <SignupInf
                  setInf={setInf}
                  page={page}
                  setPage={setPage}
                  inf={inf}
                  handleChange={handleChange}
                  ChangeHeadShot={ChangeHeadShot}
                  headShotPreview={headShotPreview}
                />
              )}
              {page === 3 && (
                <div className="xl:2/12 container mx-auto mt-16 w-8/12 lg:w-4/12">
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
                      page === 1 && 'hidden'
                    } ${page === 3 && 'hidden'}`}
                    onClick={() => {
                      setPage(page - 1);
                    }}
                  >
                    上一步
                  </button>
                )}
                {page !== 3 && (
                  <div className="w-full ">
                    <button
                      className=" h-10 w-full rounded-lg bg-secondary  text-white "
                      onClick={() => {
                        if (page === 1) {
                          setPage(page + 1);
                        } else {
                          registerAccount();
                        }
                      }}
                    >
                      下一步
                    </button>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
      <ToastContainer />
    </Layout>
  );
};

export default withRouter(signup);
