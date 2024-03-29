/* eslint-disable react/button-has-type */
/* eslint-disable no-console */
import { useEffect, useState } from 'react';
import Image from 'next/image';
import { ToastContainer, toast } from 'react-toastify';
import axios from 'axios';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import { useThem } from '../modules/context';
import 'react-toastify/dist/ReactToastify.css';

import Layout from '../modules/layout';

import LogoNav from '../src/images/logo_nav.png';
import LoginClick from '../components/loginClick';

const login = () => {
  const { apiUrl, setLoading } = useThem();
  const [status, setStatus] = useState('member');
  const [select, setSelect] = useState('');
  const [Account, setAccount] = useState({});
  const [openView, setOpenView] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setAccount((preState) => ({
      ...preState,
      [name]: value,
    }));
  };

  const checkEmail = (e) => {
    const { name } = e.target;
    const emailTest =
      /^\w+((-\w+)|(.\w+))@[A-Za-z0-9]+((.|-)[A-Za-z0-9]+).[A-Za-z]+$/;

    if (!emailTest.test(Account.Account) && Account.Account !== '') {
      setLoading(false);
      toast.error('email格式錯誤', {
        position: 'top-center',
        autoClose: 1000,
      });
    } else if (!Account.Account) {
      setLoading(false);
      toast.error('請輸email', {
        position: 'top-center',
        autoClose: 1000,
      });
    } else if (name) {
      setLoading(true);
      const data = {
        Identity: status,
        Account: Account.Account,
      };
      axios
        .post(`${apiUrl}/user/SignUpIsValid`, data)
        .then(async () => {
          if (name === 'signup') {
            setSelect(name);
            setOpenView(true);
            setLoading(false);
          } else if (name === 'login') {
            toast.error('未註冊過', {
              position: 'top-center',
              autoClose: 1000,
            });
            setLoading(false);
          } else if (name === 'forget') {
            toast.error('未註冊過', {
              position: 'top-center',
              autoClose: 1000,
            });
            setLoading(false);
          }
        })
        .catch(async () => {
          // const message = await err.response.data.Message;
          setLoading(false);
          if (name === 'signup') {
            setSelect(name);
            setOpenView(true);
          }
          if (name === 'login') {
            setSelect(name);
            setOpenView(true);
            setLoading(false);
          }
          if (name === 'forget') {
            setSelect(name);
            setOpenView(true);
            setLoading(false);
          }
        });
    }
  };
  useEffect(() => {});
  return (
    <Layout title="邦尼約克Bonnie York 登入" className="relative">
      <div className="bg-height   bg-bgColor px-5 pt-20 ">
        <div className="container mx-auto  w-full rounded-login bg-white px-8 pt-4 pb-10 shadow-lg sm:w-1/2 lg:w-4/12">
          <div className="mb-4 flex h-20 w-full justify-center">
            <Image
              className="mx-auto"
              src={LogoNav}
              objectFit="contain"
              width={180}
            />
          </div>
          <ul className="mb-10 flex justify-center gap-6">
            <li
              className={` ${
                status === 'member'
                  ? 'border-b-2 text-secondary'
                  : ' text-unSelect'
              }  flex h-10 w-40 items-center justify-center`}
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
                status === 'store'
                  ? 'border-b-2 text-secondary'
                  : ' text-unSelect'
              }  flex h-10 w-40 items-center justify-center`}
            >
              <button
                onClick={() => setStatus('store')}
                className="h-full w-full"
              >
                店家登入
              </button>
            </li>
          </ul>
          <div className="relative">
            <input
              type="email"
              name="Account"
              className="mb-2 h-12 w-full rounded-lg border-2 border-unSelect indent-12"
              placeholder="請輸入登入 Email"
              value={Account.Account}
              onChange={handleChange}
            />
            <EmailOutlinedIcon
              className="absolute left-4 top-3"
              sx={{ color: '#bbbbbb' }}
            />
          </div>
          <div className="mb-4 flex justify-end text-sm">
            <button
              name="forget"
              className=" flex justify-end"
              onClick={checkEmail}
            >
              忘記密碼？
            </button>
          </div>
          <div>
            <button
              name="login"
              className=" mb-4 h-10 w-full rounded-lg bg-secondary text-white "
              onClick={checkEmail}
            >
              登入
            </button>
          </div>

          <div className="text-center">
            <button
              name="signup"
              className=" h-10 w-full rounded-lg border border-secondary text-secondary"
              onClick={checkEmail}
            >
              註冊
            </button>
            <p>還沒有帳號嗎？趕快註冊試試看</p>
          </div>
        </div>
      </div>
      {openView && (
        <LoginClick
          setOpenView={setOpenView}
          select={select}
          Account={Account}
          setAccount={setAccount}
          status={status}
          handleChange={handleChange}
        />
      )}

      <ToastContainer />
    </Layout>
  );
};

export default login;
