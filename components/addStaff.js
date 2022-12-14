/* eslint-disable react/no-array-index-key */
/* eslint-disable consistent-return */
/* eslint-disable react/button-has-type */
/* eslint-disable no-console */
import { useEffect, useState } from 'react';
import axios from 'axios';
import { toast } from 'react-toastify';
import { useThem } from '../modules/context';
import 'react-toastify/dist/ReactToastify.css';

const addStaff = ({ setAddStaff, allItem }) => {
  const [staffItem, setStaffItem] = useState({ Identity: 'staff' });
  const [job, setJob] = useState([]);
  const { apiUrl, setLoading } = useThem();
  const handleChange = (e) => {
    const { name, value } = e.target;
    setStaffItem((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = async () => {
    const Authorization = localStorage.getItem('BonnieYork');

    setLoading(true);
    const config = {
      method: 'post',
      url: `${apiUrl}/user/signupsendlink`,
      headers: {
        Authorization,
      },
      data: staffItem,
    };
    axios(config)
      .then(() => {
        setLoading(false);
        toast.success('發送成功', {
          position: 'top-center',
          autoClose: 1000,
        });
        setAddStaff(false);
      })
      .catch(() => {});
  };

  const showItem = () => {
    try {
      return allItem.map((item, index) => {
        const handleClick = (e) => {
          const { value, checked } = e.target;
          if (checked) {
            setJob([...job, value]);
          } else if (!checked) {
            setJob(job.filter((num) => num !== value));
          }
        };
        return (
          <li key={index} className="flex ">
            <input
              type="checkbox"
              value={item.ItemId}
              name={item.ItemName}
              className="text-xs"
              onChange={handleClick}
            />
            <p className="ml-1">{item.ItemName}</p>
          </li>
        );
      });
    } catch (error) {
      /* empty */
    }
  };

  useEffect(() => {
    setStaffItem((prevState) => ({
      ...prevState,
      BusinessItemsId: job,
    }));
  }, [job]);

  return (
    <div className="fixed  top-8 z-10  flex h-full w-full justify-center overflow-y-auto bg-black/50">
      <div
        data-aos="zoom-in"
        className="relative mt-20  h-fit w-96 rounded-lg  bg-white  pb-10"
      >
        <div className="px-5 py-5">
          <h2 className="mb-8 text-center text-2xl">新增員工</h2>

          <div className="relative">
            <p className="absolute -top-2.5 left-4 bg-white px-2 text-input">
              *Email
            </p>
            <input
              name="Account"
              value={staffItem.Account}
              type="text"
              className="mb-6 mr-2 h-10 w-full rounded-lg border border-input text-center"
              onChange={handleChange}
            />
          </div>
          <div className="relative">
            <p className="absolute -top-2.5 left-4 bg-white px-2 text-input">
              *職稱
            </p>
            <input
              name="JobTitle"
              value={staffItem.JobTitle}
              type="text"
              className="mb-6 mr-2 h-10 w-full rounded-lg border border-input text-center"
              onChange={handleChange}
            />
          </div>
          <div className="mx-auto mb-16 ">
            <div className="mb-2 w-full  text-center">
              <p>工作項目：</p>
            </div>
            <ul className="flex w-full flex-wrap gap-2">{showItem()}</ul>
          </div>
          <div className="flex justify-center gap-3 ">
            <button
              className="h-12 w-32 rounded-lg bg-footerL text-secondary"
              onClick={() => setAddStaff(false)}
            >
              取消
            </button>
            <button
              className="h-12 w-32 rounded-lg bg-secondary text-white"
              onClick={handleSubmit}
            >
              發送邀請信件
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default addStaff;
