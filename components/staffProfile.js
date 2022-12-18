/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable react/button-has-type */
/* eslint-disable no-console */
import { useEffect, useState } from 'react';
import Image from 'next/image';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import { useRouter } from 'next/router';
import FlipCameraIosIcon from '@mui/icons-material/FlipCameraIos';
import Profile from '../src/images/profile.png';

import ChangePassword from './changePassword';
import { useThem } from '../modules/context';
import 'react-toastify/dist/ReactToastify.css';

const staffProfile = ({ handleChange, inf, setInf, dataChange }) => {
  const { setLoading, apiUrl, data } = useThem();
  const [headShot, setHeadShot] = useState({});
  const [headShotPreview, setHeadShotPreview] = useState(null);
  const [page, setPage] = useState('info');
  const Authorization = localStorage.getItem('BonnieYork');

  const router = useRouter();

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

  const handleSubmit = async () => {
    if (headShotPreview !== null) {
      setLoading(true);
      const config = {
        method: 'post',
        url: `${apiUrl}/staff/uploadprofile`,
        headers: {
          Authorization,
        },
        data: headShot,
      };
      axios(config)
        .then(() => {
          setLoading(false);
          toast.success('修改成功', {
            position: 'top-center',
            autoClose: 1000,
          });
        })
        .catch(() => {
          setLoading(false);
        });
    }

    const config = {
      method: 'post',
      url: `${apiUrl}/staff/editinformation`,
      headers: {
        Authorization,
      },
      data: inf,
    };
    if (dataChange) {
      setLoading(true);
      axios(config)
        .then(() => {
          toast.success('修改成功', {
            position: 'top-center',
            autoClose: 1000,
          });
          setTimeout(() => {
            router.reload(window.location.pathname);
          }, 1500);

          setLoading(false);
        })
        .catch(() => {
          setLoading(false);
        });
    }
  };

  const changePassword = () => {
    setLoading(true);
    const config = {
      method: 'post',
      url: `${apiUrl}/user/resetpassword`,
      headers: {
        Authorization,
      },
      data: inf,
    };
    axios(config)
      .then((res) => {
        const { message } = res.data;
        if (message === '密碼修改完成') {
          toast.success(message, {
            position: 'top-center',
            autoClose: 1000,
          });
          setLoading(false);
        } else if (message === '輸入的舊密碼不符') {
          toast.error('輸入的舊密碼不符', {
            position: 'top-center',
            autoClose: 1000,
          });
          setLoading(false);
        }
      })
      .catch(() => {});
    setInf({});
  };
  useEffect(() => {
    setLoading(true);
    axios
      .get(`${apiUrl}/staff/getinformation`, {
        headers: {
          Authorization,
        },
      })
      .then(async (res) => {
        const information = await res.data.StaffInformation;
        setInf(information[0]);
        setLoading(false);
      })
      .catch(() => {
        setLoading(false);
      });
  }, []);
  return (
    <div className="">
      <h2 className="mb-8 text-center text-4xl font-bold">個人資訊</h2>
      <div className="mb-4 flex justify-center">
        <button
          className={` ${
            page === 'info' ? 'border-b-2 text-secondary' : ' text-unSelect'
          } mx-8`}
          onClick={() => setPage('info')}
        >
          基本資料
        </button>
        <button
          className={` ${
            page === 'changePassword'
              ? 'border-b-2 text-secondary'
              : ' text-unSelect'
          } mx-8`}
          onClick={() => setPage('changePassword')}
        >
          修改密碼
        </button>
      </div>
      {page === 'info' && (
        <div className="mx-auto w-11/12  rounded-lg bg-white px-6 pb-4 pt-4 shadow-lg md:w-8/12 lg:w-5/12">
          <div className="mx-auto mt-8">
            <div className="relative mb-4 flex  w-full justify-center">
              <div className="relative">
                {headShotPreview ? (
                  <img
                    src={headShotPreview}
                    alt=""
                    className={`h-40 w-40 rounded-full object-cover ${
                      headShotPreview || 'hidden'
                    }`}
                  />
                ) : (
                  <div
                    className={` ${inf?.HeadShot && 'hidden'} ${
                      inf?.HeadShot !== null || 'hidden'
                    }h-40 w-40`}
                  >
                    <Image src={Profile} Class="rounded-full" />
                  </div>
                )}
                <div
                  className={`${inf?.HeadShot !== null || 'hidden'} ${
                    headShotPreview && 'hidden'
                  }`}
                >
                  <img
                    src={inf?.HeadShot}
                    alt=""
                    className={` h-40 w-40 rounded-full object-cover`}
                  />
                </div>
                <label
                  htmlFor="headShot"
                  className="bg-gray-100 absolute right-0 bottom-0 rounded-full bg-secondary py-1 px-2 shadow-md"
                >
                  <FlipCameraIosIcon sx={{ color: '#ffffff' }} />
                </label>
              </div>
              <input
                type="file"
                id="headShot"
                accept="image/png, image/jpeg"
                className="hidden"
                onChange={ChangeHeadShot}
              />
            </div>
            <div className="mt-10 w-full">
              <div className="w-full">
                <div className="relative">
                  <p className="absolute -top-2.5 left-4 bg-white px-2 text-black">
                    Email
                  </p>
                  <input
                    type="text"
                    name="Account"
                    value={data.Account}
                    disabled
                    className="mb-6 h-12 w-full rounded-lg border border-black indent-3"
                    onChange={handleChange}
                  />
                </div>
                <div className="relative">
                  <p className="absolute -top-2.5 left-4 bg-white px-2 text-black">
                    所屬店家
                  </p>
                  <input
                    type="text"
                    name="StoreName"
                    value={data.StoreName}
                    disabled
                    className="mb-6 h-12 w-full rounded-lg border border-black indent-3"
                    onChange={handleChange}
                  />
                </div>
                <div className="relative">
                  <p className="absolute -top-2.5 left-4 bg-white px-2 text-black">
                    名稱(暱稱)<span className="text-red">*</span>
                  </p>
                  <input
                    name="StaffName"
                    value={inf.StaffName}
                    type="text"
                    className="mb-6 h-12 w-full rounded-lg border border-unSelect indent-3"
                    onChange={handleChange}
                  />
                </div>
                <div className="relative">
                  <p className="absolute -top-2.5 left-4 bg-white px-2 text-input">
                    手機號碼
                  </p>
                  <input
                    value={inf?.CellphoneNumber}
                    onChange={handleChange}
                    type="text"
                    name="CellphoneNumber"
                    className="mb-6 h-12 w-full rounded-lg border border-unSelect indent-3 "
                  />
                </div>
                <div className="relative">
                  <p className="absolute -top-2.5 left-4 bg-white px-2 text-input">
                    自我介紹
                  </p>
                  <textarea
                    name="Introduction"
                    value={inf?.Introduction}
                    id=""
                    cols="30"
                    rows="5"
                    className="mb-6  w-full resize-none rounded-lg border border-unSelect px-4 py-4"
                    onChange={handleChange}
                  />
                </div>
                <div className="relative">
                  <p className="absolute -top-2.5 left-4 bg-white px-2 text-input">
                    facebook
                  </p>
                  <input
                    value={inf?.FacebookLink}
                    onChange={handleChange}
                    type="text"
                    name="FacebookLink"
                    className="mb-6 h-12 w-full rounded-lg border border-unSelect indent-3 "
                  />
                </div>
                <div className="relative">
                  <p className="absolute -top-2.5 left-4 bg-white px-2 text-input">
                    Instagram
                  </p>
                  <input
                    value={inf?.InstagramLink}
                    onChange={handleChange}
                    type="text"
                    name="InstagramLink"
                    className="mb-6 h-12 w-full rounded-lg border border-unSelect indent-3 "
                  />
                </div>
                <div className="relative">
                  <p className="absolute -top-2.5 left-4 bg-white px-2 text-input">
                    Line官方
                  </p>
                  <input
                    value={inf?.LineLink}
                    onChange={handleChange}
                    type="text"
                    name="LineLink"
                    className="mb-6 h-12 w-full rounded-lg border border-unSelect indent-3 "
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="mt-4 flex justify-end gap-3">
            <button className=" h-12 w-[32%] rounded-lg bg-footerL text-black">
              放棄變更
            </button>
            <button
              className="h-12 w-[65%] rounded-lg bg-secondary text-white"
              onClick={handleSubmit}
            >
              確認修改
            </button>
          </div>
        </div>
      )}
      {page === 'changePassword' && (
        <div>
          <div className="mx-auto w-11/12 rounded-lg bg-white py-8 shadow-lg md:w-8/12 lg:w-5/12">
            <ChangePassword handleChange={handleChange} inf={inf} />
            <div className="mx-auto flex w-11/12  justify-center md:w-8/12 lg:w-6/12">
              <button
                className="h-10 w-32 rounded-lg bg-secondary text-white"
                onClick={changePassword}
              >
                確認修改
              </button>
            </div>
          </div>
        </div>
      )}
      <ToastContainer />
    </div>
  );
};

export default staffProfile;
